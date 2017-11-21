const style = document.createElement('div').style;

const  cssPrefixes = [ "Webkit", "Moz", "ms" ];

const cssPropsMap={};

export const hasTransition=cssPrefix('transition') in style;

export function cssPrefix(key) {
    if(key in cssPropsMap){
        return key;
    }
    let tempKey=key;
    if(!(key in style)){
        let temp=key[0].toUpperCase()+key.substr(1);

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