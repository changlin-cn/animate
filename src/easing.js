export const easing={
    /*
    *
    *@param {Number} p  progress
    *@param {Number} s  start value
    *@param {Number} d  distance
    * */

    Linear: function (p, s, d) {
        return d * p + s;
    },
    Quad: {
        easeIn: function (p, s, d) {
            return d * p * p + s;
        },
        easeOut: function (p, s, d) {
            return -d * p * (p - 2) + s;
        },
        easeInOut: function (p, s, d) {
            if ((p = p * 2) < 1) return d / 2 * p * p + s;
            return -d / 2 * ((--p) * (p - 2) - 1) + s;
        }
    },
    Cubic: {
        easeIn: function (p, s, d) {
            return d * p * p * p + s;
        },
        easeOut: function (p, s, d) {
            return d * ((p = p - 1) * p * p + 1) + s;
        },
        easeInOut: function (p, s, d) {
            if ((p = p * 2) < 1) return d / 2 * p * p * p + s;
            return d / 2 * ((p -= 2) * p * p + 2) + s;
        }
    },
    Bounce: {
        easeIn: function (p, s, d) {
            return d - easing.Bounce.easeOut(1 - p, 0, d) + s;
        },
        easeOut: function (p, s, d) {
            if (p < (1 / 2.75)) {
                return d * (7.5625 * p * p) + s;
            } else if (p < (2 / 2.75)) {
                return d * (7.5625 * (p -= (1.5 / 2.75)) * p + .75) + s;
            } else if (p < (2.5 / 2.75)) {
                return d * (7.5625 * (p -= (2.25 / 2.75)) * p + .9375) + s;
            } else {
                return d * (7.5625 * (p -= (2.625 / 2.75)) * p + .984375) + s;
            }
        },
        easeInOut: function (p, s, c) {
            if (p < 0.5) return easing.Bounce.easeIn(p * 2, 0, c) * .5 + s;
            else return easing.Bounce.easeOut(p * 2 - 1, 0, c) * .5 + c * .5 + s;
        }
    }
};

