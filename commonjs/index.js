'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _easing = require('./easing');

Object.defineProperty(exports, 'easing', {
  enumerable: true,
  get: function get() {
    return _easing.easing;
  }
});

var _createAnimation = require('./createAnimation');

Object.defineProperty(exports, 'createAnimation', {
  enumerable: true,
  get: function get() {
    return _createAnimation.createAnimation;
  }
});

var _af = require('./af');

Object.defineProperty(exports, 'cancelAnimationFrame', {
  enumerable: true,
  get: function get() {
    return _af.cancelAnimationFrame;
  }
});
Object.defineProperty(exports, 'requestAnimationFrame', {
  enumerable: true,
  get: function get() {
    return _af.requestAnimationFrame;
  }
});