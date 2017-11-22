"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createAnimation = createAnimation;

var _easing = require("./easing");

var _changlinUtil = require("changlin-util");

var _dom = require("./dom");

var _af = require("./af");

var transitionEventName = function () {
    var transitions = {
        'transition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'MozTransition': 'transitionend',
        'WebkitTransition': 'webkitTransitionEnd'
    };
    return transitions[(0, _dom.cssPrefix)('transition')];
}();

function createAnimation(config) {

    //console.time('start');

    if ((0, _changlinUtil.isObject)(!config)) throw new Error('createAnimation config should be object');

    var animationConfig = {
        //The target that which will animate
        target: null,

        keyFrame: null,

        startTime: null,
        //Will be auto update status?
        autoUpdate: true,
        //Unit:ms
        duration: 1000,
        delay: 0,
        loop: 1,
        //The type of keyFrame's props (it is going to do a special treatment of 'css')
        keyFramePropsType: 'css',
        //use CSS3 transition?
        useTransition: true,
        easing: _easing.transitionTimingFunction.easeInOut,
        onComplete: function onComplete() {},
        onStart: function onStart() {},
        animation: [],
        timer: null,
        loopNow: 0,
        //state:  -1 not started    0 in progress   1 over
        state: -1
    };

    (0, _changlinUtil.extend)(animationConfig, config);

    //check the type of arguments
    if (!((0, _changlinUtil.isDOM)(animationConfig.target) || (0, _changlinUtil.isString)(animationConfig.target) || (0, _changlinUtil.isObject)(animationConfig.target))) {
        throw new Error('target is needed');
    } else if ((0, _changlinUtil.isString)(animationConfig.target)) {
        var temp = document.querySelector(animationConfig.target);
        if (temp) {
            animationConfig.target = temp;
        } else {
            throw new Error('target is needed');
        }
    }

    if (!(0, _changlinUtil.isBoolean)(animationConfig.autoUpdate)) throw new Error('autoUpdate should be boolean');
    if (!(0, _changlinUtil.isNumber)(animationConfig.duration)) throw new Error('duration should be number');
    if (!(0, _changlinUtil.isNumber)(animationConfig.delay)) throw new Error('delay should be number');
    if (!((0, _changlinUtil.isNumber)(animationConfig.loop) || (0, _changlinUtil.isBoolean)(animationConfig.loop))) throw new Error('loop should be number or boolean');
    if (!((0, _changlinUtil.isFunction)(animationConfig.easing) || (0, _changlinUtil.isString)(animationConfig.easing))) throw new Error('easing should be function');
    if (!(0, _changlinUtil.isFunction)(animationConfig.onComplete)) throw new Error('onComplete should be function');
    if (!(0, _changlinUtil.isFunction)(animationConfig.onStart)) throw new Error('onStart should be function');
    if ((0, _changlinUtil.isUndefined)(animationConfig.keyFrame)) throw new Error(' is needed');

    //获取动画开始时间
    if ((0, _changlinUtil.isNumber)(animationConfig.startTime)) {
        animationConfig.startTime = new Date(animationConfig.startTime + delay);
    } else if (!(0, _changlinUtil.isDate)(animationConfig.startTime)) {
        if (animationConfig.autoUpdate) animationConfig.startTime = new Date(Date.now() + animationConfig.delay);
    }

    //transform keyframe
    splitKeyframe(animationConfig);

    function handleTransitionComplete(e) {

        animationConfig.onComplete.call(animationConfig.target, e);
        (0, _dom.removeEvent)(animationConfig.target, transitionEventName, handleTransitionComplete);
    }

    // debugger
    if (!animationConfig.useTransition) {
        if ((0, _changlinUtil.isString)(animationConfig.easing)) {
            animationConfig.easing = _easing.easing.Cubic.easeInOut;
        }
        if (animationConfig.keyFramePropsType === 'css') {
            animationConfig._getOrSetProp = _dom.css;
        } else {
            animationConfig._getOrSetProp = _changlinUtil.getOrSetProp;
        }

        if (animationConfig.autoUpdate) {
            start();
        }
    } else {
        (0, _dom.css)(animationConfig.target, 'transitionProperty', 'all');
        (0, _dom.css)(animationConfig.target, 'transitionDuration', animationConfig.duration + 'ms');
        (0, _dom.css)(animationConfig.target, 'transitionTimingFunction', animationConfig.easing);
        (0, _dom.css)(animationConfig.target, 'transitionDelay', animationConfig.delay + 'ms');

        (0, _dom.addEvent)(animationConfig.target, transitionEventName, handleTransitionComplete);
        animationConfig.onStart.call(animationConfig.target);
        animationConfig.state = 0;
        animationConfig.animation.forEach(function (n, i) {
            (0, _dom.css)(animationConfig.target, n.key, n.endValue);
        });

        //console.timeEnd('start');
    }

    //debugger
    return {
        start: function start() {
            if (animationConfig.autoUpdate) return;
        },
        stop: function stop() {
            if (animationConfig.autoUpdate) {
                if (animationConfig.useTransition) {
                    stopTransition(animationConfig);
                    (0, _dom.removeEvent)(animationConfig.target, transitionEventName, handleTransitionComplete);
                } else {
                    (0, _af.cancelAnimationFrame)(animationConfig.timer);
                }
            }
        },
        update: function update(time) {
            if (animationConfig.autoUpdate) return;
            updateState(time, animationConfig);
        },

        get state() {
            return animationConfig.state;
        },
        set state(any) {
            return animationConfig.state;
        }

    };

    function start() {
        var now = new Date();
        if (now >= animationConfig.startTime) {
            updateState(now, animationConfig);
        }
        if (animationConfig.state < 1) {
            animationConfig.timer = (0, _af.requestAnimationFrame)(start);
        }
    }
}

function updateState(time, params) {
    // console.log('update');
    var timeProgress = void 0,
        progress = void 0;

    timeProgress = (time - params.startTime) / params.duration;

    // console.log(timeProgress);

    if (timeProgress >= 1) {
        params.state = 1;
        //动画完成
        params.animation.forEach(function (n) {
            if ((0, _changlinUtil.isArray)(n.percent)) {
                params._getOrSetProp(params.target, n.key, n.values[n.values.length - 1] + n.unit);
            } else {
                params._getOrSetProp(params.target, n.key, n.endValue + n.unit);
            }
        });
        params.loopNow++;
        //一次的动画执行回调函数，然后移除
        if (/^\d+$/.test(params.loop)) {
            if (params.loopNow === params.loop) {
                params.onComplete();
            }
        }
        //动画次数>1次的重写动画开始时间
        if (params.delay) {
            params.startTime = new Date(new Date().valueOf() + params.delay);
        } else {
            params.startTime = new Date();
        }
    } else if (timeProgress < 1 && timeProgress >= 0) {

        //如果动画从未执行过
        if (params.state === -1) {
            params.animation.forEach(function (n, idx) {
                if ((0, _changlinUtil.isArray)(n.percent)) {
                    if (n.percent[0] !== 0) {
                        n.values.unshift(splitUnit(params._getOrSetProp(params.target, n.key)).v);
                        n.percent.unshift(0);
                    }
                } else {
                    var currentValue = params._getOrSetProp(params.target, n.key);
                    if (currentValue === undefined) {
                        currentValue = 0;
                    }
                    var temp = splitUnit(currentValue);
                    n.startValue = temp.v;
                    if (/^(-=)\d+.?\d*$/.test(n.endValue)) {
                        n.endValue = n.startValue - Number(n.endValue.replace('-=', ''));
                    } else if (/^(\+=)\d+.?\d*$/.test(n.endValue)) {
                        n.endValue = n.startValue + Number(n.endValue.replace('+=', ''));
                    }
                }
            });

            params.state = 0;

            params.onStart(this);
        }

        progress = params.easing(timeProgress, 0, 1) * 100;

        params.animation.forEach(function (n) {
            var i = void 0,
                value = void 0;
            if ((0, _changlinUtil.isArray)(n.percent)) {
                for (i = 1; i < n.percent.length; i++) {
                    var shouldBreak = n.percent[i] > progress;
                    var isLast = i === n.percent.length - 1;
                    if (shouldBreak) {
                        value = (progress - n.percent[i - 1]) / (n.percent[i] - n.percent[i - 1]) * (n.values[i] - n.values[i - 1]) + n.values[i - 1];
                    } else if (isLast) {
                        value = n.values[i];
                    }

                    value += n.unit;

                    if (isLast || shouldBreak) {
                        //debugger
                        params._getOrSetProp(params.target, n.key, value);
                        // console.log(n.key,value);
                    }
                    if (shouldBreak) break;
                }
            } else {

                var temp = params.easing(timeProgress, n.startValue, n.endValue - n.startValue);
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
function splitKeyframe(_ref) {
    var keyFrame = _ref.keyFrame,
        animation = _ref.animation,
        keyFramePropsType = _ref.keyFramePropsType,
        useTransition = _ref.useTransition;


    if ((0, _changlinUtil.isArray)(keyFrame) && !useTransition) {
        //至少需要一个关键帧
        if (keyFrame.length < 1) return;

        //检查数组元素是否为对象 和百分比是否为数值
        for (var i = 0; i < keyFrame.length; i++) {
            if (!(0, _changlinUtil.isObject)(keyFrame[i]) || !(0, _changlinUtil.isNumber)(keyFrame[i].percent)) return;
        }

        //先将关键帧按百分比升序排序
        (0, _changlinUtil.sort)(keyFrame, function (a, b) {
            return a.percent > b.percent;
        });

        //将多种属性结合成的关键帧动画拆分成单一属性的动画组
        for (var each in keyFrame[0]) {
            if (each !== 'percent') {
                var oneP = { key: keyFramePropsType === 'css' ? (0, _dom.cssPrefix)(each) : each, percent: [], values: [], unit: '' };

                for (var _i = 0; _i < keyFrame.length; _i++) {
                    var temp = splitUnit(keyFrame[_i][each], true);
                    oneP.percent.push(keyFrame[_i].percent);
                    oneP.values.push(temp.v);
                    oneP.unit = temp.unit;
                }
                animation.push(oneP);
            }
        }
    } else {
        for (var _each in keyFrame) {
            if (useTransition) {
                animation.push({
                    key: keyFramePropsType === 'css' ? (0, _dom.cssPrefix)(_each) : _each,
                    endValue: keyFrame[_each],
                    unit: ''
                });
            } else {
                var _temp = splitUnit(keyFrame[_each], true);
                if ((0, _changlinUtil.isUndefined)(_temp.v)) return;

                animation.push({
                    key: keyFramePropsType === 'css' ? (0, _dom.cssPrefix)(_each) : _each,
                    endValue: _temp.v,
                    unit: _temp.unit
                });
            }
        }
    }
}

function stopTransition(animationConfig) {
    var currentStyle = window.getComputedStyle(animationConfig.target);
    for (var i = 0; i < animationConfig.animation.length; i++) {
        var temp = animationConfig.animation[i].key;
        (0, _dom.css)(animationConfig.target, temp, currentStyle[temp]);
    }
    (0, _dom.css)(animationConfig.target, 'transitionProperty', 'none');
}

function splitUnit(value) {
    var relative = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var v = void 0,
        unit = '';
    var reg = void 0;
    if (relative) {
        reg = /^((?:[-+]=?)?\d+(?:.\d+)?)([%a-zA-Z]*)/;
    } else {
        reg = /^((?:[-+])?\d+(?:.\d+)?)([%a-zA-Z]*)/;
    }

    if (reg.test(value)) {

        var temp = RegExp.$1;
        unit = RegExp.$2;
        if (/^\d\S*$/.test(temp)) {
            v = Number(temp);
        } else {
            v = temp;
        }
    }

    return {
        v: v, unit: unit
    };
}