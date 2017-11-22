"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.firstUpperCase = firstUpperCase;
exports.firstLowerCase = firstLowerCase;
exports.addEvent = addEvent;
exports.removeEvent = removeEvent;
exports.cssPrefix = cssPrefix;
exports.css = css;
var style = document.createElement('div').style;

var cssPrefixes = ["Webkit", "Moz", "ms"];

var cssPropsMap = {};

function firstUpperCase(string) {
    return string[0].toUpperCase() + string.slice(1);
}

function firstLowerCase(string) {
    return string[0].toLowerCase() + string.slice(1);
}

function addEvent(el, type, fn) {
    var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    el.addEventListener(type, fn, useCapture);
}

function removeEvent(el, type, fn) {
    var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    el.removeEventListener(type, fn, useCapture);
}

var hasTransition = exports.hasTransition = cssPrefix('transition') in style;

function cssPrefix(key) {
    if (key in cssPropsMap) {
        return key;
    }
    var tempKey = key;
    if (!(key in style)) {
        var temp = firstUpperCase(key);

        for (var i = 0; i < cssPrefixes.length; i++) {
            var result = cssPrefixes[i] + temp;
            if (result in cssPrefixes) {
                tempKey = result;
            }
        }
    }
    cssPropsMap[key] = tempKey;
    //console.log(1);
    return tempKey;
}

function css(el, key, value) {
    var tempKey = void 0;
    tempKey = cssPrefix(key);
    if (value !== undefined) {
        return el.style[tempKey] = value;
    }
    return el.style[tempKey];
}