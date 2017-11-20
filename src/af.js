
//重写请求动画帧
export const requestAnimationFrame = (function () {
    let time = 1000 / 60;
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            return setTimeout(callback, time)
        }
})();

export const cancelAnimationFrame=window.cancelAnimationFrame||function (id){clearTimeout(id)};