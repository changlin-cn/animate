import {easing as compute} from "./easing";
import {
    isObject,
    isDOM,
    isString,
    isArray,
    isFunction,
    isBoolean,
    isNumber,
    isUndefined,
    isDate,
    sort,
    getOrSetProp,
    extend
} from 'changlin-util'
import {css,cssPrefix} from "./css";
import {requestAnimationFrame, cancelAnimationFrame} from "./af";


export function createAnimation(config) {
    if (isObject(!config)) throw new Error('createAnimation config should be object');

    let animationConfig = {
        //动画目标
        target: null,
        //关键帧
        keyFrame: null,
        //开始时间
        startTime: null,
        //是否自动更新目标状态
        autoUpdate: true,
        //动画持续时间（毫秒）
        duration: 1000,
        //动画延时时间
        delay: 0,
        //动画循环次数
        loop: 1,
        //关键帧属性值类型 (只对css特殊处理)
        keyFramePropsType: 'css',
       // useTransition:'true',
        easing: compute.Linear,
        onComplete: () => {
        },
        onStart: () => {
        },
        animation: [],
        timer: null,
        loopNow: 0,
        //状态  -1未开始  0正在进行 1已结束
        state: -1
    };

    extend(animationConfig, config);

    //参数检查
    if (!(isDOM(animationConfig.target) || isString(animationConfig.target) || isObject(animationConfig.target))) {
        throw new Error('target is needed')
    } else if (isString(animationConfig.target)) {
        let temp = document.querySelector(animationConfig.target);
        if (temp) {
            animationConfig.target = temp
        } else {
            throw new Error('target is needed')
        }
    }
    if (!isBoolean(animationConfig.autoUpdate)) throw new Error('autoUpdate should be boolean');
    if (!isNumber(animationConfig.duration)) throw new Error('duration should be number');
    if (!isNumber(animationConfig.delay)) throw new Error('delay should be number');
    if (!(isNumber(animationConfig.loop) || isBoolean(animationConfig.loop))) throw new Error('loop should be number or boolean');
    if (!isFunction(animationConfig.easing)) throw new Error('easing should be function');
    if (!isFunction(animationConfig.onComplete)) throw new Error('onComplete should be function');
    if (!isFunction(animationConfig.onStart)) throw new Error('onStart should be function');
    if (isUndefined(animationConfig.keyFrame)) throw new Error(' is needed');

    //获取动画开始时间
    if (isNumber(animationConfig.startTime)) {
        animationConfig.startTime = new Date(animationConfig.startTime + delay);
    } else if (!isDate(animationConfig.startTime)) {
        if (animationConfig.autoUpdate) animationConfig.startTime = new Date(Date.now() + animationConfig.delay);
    }

    //处理keyframe
    splitKeyframe({keyFrame: animationConfig.keyFrame, animation: animationConfig.animation,keyFramePropsType:animationConfig.keyFramePropsType});

    // debugger
    if (animationConfig.keyFramePropsType === 'css') {
        animationConfig._getOrSetProp = css
    } else {
        animationConfig._getOrSetProp = getOrSetProp
    }

    //debugger
    function start() {
        let now = new Date();
        if (now >= animationConfig.startTime) {
            updateState(now, animationConfig)
        }
        if (animationConfig.state < 1) {
            animationConfig.timer = requestAnimationFrame(start)
        }
    }

    if (animationConfig.autoUpdate) {
        start()
    }

    //debugger
    return {
        start() {
            if (animationConfig.autoUpdate) return;
        },
        stop() {
            if (animationConfig.autoUpdate) {
                cancelAnimationFrame(animationConfig.timer)
            }
        },
        update(time) {
            if (animationConfig.autoUpdate) return;
            updateState(time, animationConfig)
        },
        get state() {
            return animationConfig.state
        },
        set state(any) {
            return animationConfig.state
        }

    }
}


function updateState(time, params) {
    // console.log('update');
    let timeProgress, progress;

    timeProgress = (time - params.startTime) / params.duration;

    // console.log(timeProgress);

    if (timeProgress >= 1) {
        params.state = 1;
        //动画完成
        params.animation.forEach(function (n) {
            if (isArray(n.percent)) {
                params._getOrSetProp(params.target, n.key, n.values[n.values.length - 1] + n.unit);
            } else {
                params._getOrSetProp(params.target, n.key, n.endValue + n.unit);
            }

        });
        params.loopNow++;
        //一次的动画执行回调函数，然后移除
        if (/^\d+$/.test(params.loop)) {
            if (params.loopNow === params.loop) {
                params.onComplete()
            }
        }
        //动画次数>1次的重写动画开始时间
        if (params.delay) {
            params.startTime = new Date(new Date().valueOf() + params.delay)
        } else {
            params.startTime = new Date()
        }

    } else if (timeProgress < 1 && timeProgress >= 0) {

        //如果动画从未执行过
        if (params.state === -1) {
            params.animation.forEach(function (n, idx) {
                if (isArray(n.percent)) {
                    if (n.percent[0] !== 0) {
                        n.values.unshift(splitUnit(params._getOrSetProp(params.target, n.key)).v);
                        n.percent.unshift(0);
                    }
                } else {
                    let currentValue = params._getOrSetProp(params.target, n.key);
                    if (currentValue === undefined) {
                        currentValue = 0
                    }
                    let temp = splitUnit(currentValue);
                    n.startValue = temp.v;
                    if (/^(-=)\d+.?\d*$/.test(n.endValue)) {
                        n.endValue = n.startValue - Number(n.endValue.replace('-=', ''));
                    } else if (/^(\+=)\d+.?\d*$/.test(n.endValue)) {
                        n.endValue = n.startValue + Number(n.endValue.replace('+=', ''));
                    }
                }

            });

            params.state = 0;

            params.onStart(this)
        }


        progress = params.easing(timeProgress, 0, 1) * 100;

        params.animation.forEach(function (n) {
            let i, value;
            if (isArray(n.percent)) {
                for (i = 1; i < n.percent.length; i++) {
                    let shouldBreak = n.percent[i] > progress;
                    let isLast = i === n.percent.length - 1;
                    if (shouldBreak) {
                        value = (progress - n.percent[i - 1]) / (n.percent[i] - n.percent[i - 1]) * (n.values[i] - n.values[i - 1]) + n.values[i - 1];
                    } else if (isLast) {
                        value = n.values[i];
                    }

                    value += n.unit;

                    if (isLast || shouldBreak) {
                        debugger
                        params._getOrSetProp(params.target, n.key, value);
                       // console.log(n.key,value);
                    }
                    if (shouldBreak) break;
                }
            } else {

                let temp = params.easing(timeProgress, n.startValue, n.endValue - n.startValue);
                if (n.unit) {
                    temp += n.unit;
                }
                // console.log(temp);
                params._getOrSetProp(params.target, n.key, temp);
            }
        });
    }
}


//将多种属性结合成的关键帧动画拆分成单一属性的动画组
function splitKeyframe({keyFrame, animation,keyFramePropsType}) {

    if (isArray(keyFrame)) {
        //至少需要一个关键帧
        if (keyFrame.length < 1) return;

        //检查数组元素是否为对象 和百分比是否为数值
        for (let i = 0; i < keyFrame.length; i++) {
            if (!isObject(keyFrame[i]) || !isNumber(keyFrame[i].percent)) return;
        }

        //先将关键帧按百分比升序排序
        sort(keyFrame, function (a, b) {
            return a.percent > b.percent
        });

        //将多种属性结合成的关键帧动画拆分成单一属性的动画组
        for (let each in  keyFrame[0]) {
            if (each !== 'percent') {
                let oneP = {key: keyFramePropsType==='css'? cssPrefix(each):each, percent: [], values: [], unit: ''};

                for (let i = 0; i < keyFrame.length; i++) {
                    let temp = splitUnit(keyFrame[i][each]);
                    oneP.percent.push(keyFrame[i].percent);
                    oneP.values.push(temp.v);
                    oneP.unit = temp.unit;
                }
                animation.push(oneP)
            }
        }

    } else {
        for (let each in keyFrame) {
            let temp = splitUnit(keyFrame[each]);
            if (isUndefined(temp)) return;

            animation.push({
                key: each,
                endValue: temp.v,
                unit: temp.unit
            })
        }
    }
}


function splitUnit(value) {
    let v, unit = '';

    if (/^((?:[-+]=?)?\d+(?:.\d+)?)([%a-zA-Z]*)/.test(value)) {

        let temp = RegExp.$1;
        unit = RegExp.$2;
        if (/^\d\S*$/.test(temp)) {
            v = Number(temp);
        } else {
            v = temp;
        }
    }

    return {
        v, unit
    }
}