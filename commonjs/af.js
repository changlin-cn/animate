"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

//重写请求动画帧
var requestAnimationFrame = exports.requestAnimationFrame = function () {
    var time = 1000 / 60;
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
        return setTimeout(callback, time);
    };
}();

var cancelAnimationFrame = exports.cancelAnimationFrame = window.cancelAnimationFrame || function (id) {
    clearTimeout(id);
};