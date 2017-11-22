const style = document.createElement('div').style;

const  cssPrefixes = [ "Webkit", "Moz", "ms" ];

const cssPropsMap={};

export function firstUpperCase (string){
    return string[0].toUpperCase()+string.slice(1)
}

export function firstLowerCase(string) {
    return string[0].toLowerCase()+string.slice(1)
}

export function addEvent(el, type,fn,useCapture=false) {
    el.addEventListener(type, fn, useCapture)
}

export function removeEvent(el, type,fn, useCapture=false) {
    el.removeEventListener(type, fn,useCapture )
}

export const hasTransition=cssPrefix('transition') in style;

export function cssPrefix(key) {
    if(key in cssPropsMap){
        return key;
    }
    let tempKey=key;
    if(!(key in style)){
        let temp=firstUpperCase(key);

        for(let i=0;i<cssPrefixes.length;i++){
            let result=cssPrefixes[i]+temp;
            if(result in cssPrefixes){
                tempKey= result
            }
        }
    }
    cssPropsMap[key]=tempKey;
    //console.log(1);
    return tempKey
}





export function css(el,key,value) {
    let tempKey;
    tempKey=cssPrefix(key);
    if(value!==undefined){
        return el.style[tempKey]=value
    }
    return el.style[tempKey]
}