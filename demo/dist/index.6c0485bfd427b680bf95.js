/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 50);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(25)('wks');
var uid = __webpack_require__(16);
var Symbol = __webpack_require__(2).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(7);
var IE8_DOM_DEFINE = __webpack_require__(37);
var toPrimitive = __webpack_require__(21);
var dP = Object.defineProperty;

exports.f = __webpack_require__(8) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isDOM = exports.isArray = undefined;

var _typeof2 = __webpack_require__(29);

var _typeof3 = _interopRequireDefault(_typeof2);

var _getPrototypeOf = __webpack_require__(86);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

exports.isType = isType;
exports.isFunction = isFunction;
exports.isUndefined = isUndefined;
exports.isWindow = isWindow;
exports.isString = isString;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.isDate = isDate;
exports.isPlainObject = isPlainObject;
exports.isLikeArray = isLikeArray;
exports.isBoolean = isBoolean;
exports.whatIs = whatIs;

var _regex = __webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var class2type = {},
    toString = Object.prototype.toString;

/**
 * 类型判断
 *
 * @param {string}  type    url tel mobilePhone email account IdCard ip...参考regex 模块导出对象的属性
 * @param {string|number}  string
 * @example
 *
 *
 * ```javascript
 * isType('email','user@163.com')   //=>true
 * ```
 * @returns {boolean}
 */
function isType(type, string) {
    if (isString(string) || isNumber(string)) {
        if (_regex.regex[type] && type !== 'default') {
            string = String(string);
            return _regex.regex[type].test(string);
        } else {
            throw Error('unknown type ' + type);
        }
    } else {
        throw Error('type should be string or number');
    }
}

/**
 * 判断值是否为function
 *
 * @returns {boolean}
 */
function isFunction(value) {
    return typeof value === "function";
}

/**
 * 判断值是否为undefined
 *
 * @returns {boolean}
 */
function isUndefined(value) {
    return typeof value === 'undefined';
}

/**
 * 判断值是否为window
 *
 * @returns {boolean}
 */
function isWindow(value) {
    return whatIs(value) === "window";
}

/**
 * 判断值是否为string
 *
 * @returns {boolean}
 */
function isString(value) {
    return typeof value === 'string';
}

/**
 * 判断值是否为number
 *
 * @returns {boolean}
 */
function isNumber(value) {
    return typeof value === 'number';
}

/**
 * 判断值是否为object(注意：此方法使用Object.prototype.toString.call(value)进行判断)
 *
 * @returns {boolean}
 */
function isObject(value) {
    return whatIs(value) === 'object';
}

/**
 * 判断值是否为Date
 *
 * @returns {boolean}
 */
function isDate(value) {
    return whatIs(value) === "date";
}

/**
 * 判断值是否为Plain Object
 *
 * @returns {boolean}
 */
function isPlainObject(value) {
    return isObject(value) && (0, _getPrototypeOf2.default)(value) === Object.prototype;
}

/**
 * 判断值是否类似array
 *
 * @returns {boolean}
 */
function isLikeArray(value) {
    return isObject(value) && isNumber(value.length);
}

/**
 * 判断值是否为Array
 * @function isArray
 * @returns {boolean}
 */
var isArray = exports.isArray = Array.isArray || function (value) {
    return toString.call(value) === '[object Array]';
};

/**
 * 判断值是否为boolean
 *
 * @returns {boolean}
 */
function isBoolean(value) {
    return typeof value === 'boolean';
}

/**
 * 判断值的类型
 *@example
 *```javascript
 *whatIs(new Date())//=>'date'
 * whatIs(null)//=>'null'
 *
 *```
 * @returns {string}
 */
function whatIs(value) {
    return (/(?:(\S*)])/.exec(toString.call(value))[1].toLowerCase()
    );
}

/**
 * 判断值是否为dom对象
 * @function isDOM
 *@example
 *```javascript
 *isDOM(document.querySelector('div'))
 *
 *
 *```
 * @returns {boolean}
 */
var isDOM = exports.isDOM = function () {
    return typeof HTMLElement === 'function' ? function (obj) {
        return obj instanceof HTMLElement;
    } : function (obj) {
        return obj && (typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) === 'object' && obj.nodeType === 1 && isString(obj.nodeName);
    };
}();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(3);
var createDesc = __webpack_require__(12);
module.exports = __webpack_require__(8) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(15);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(11)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(60);
var defined = __webpack_require__(19);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOrSetProp = exports.randomInteger = exports.ONE_YEAR = exports.ONE_MONTH = exports.ONE_MIN = exports.ONE_SEC = exports.ONE_DAY = exports.ONE_HOUR = exports.fromTime = exports.dateFormat = exports.lastOneOf = exports.find = exports.toArray = exports.shuffle = exports.sort = exports.removeFromArray = exports.firstUpperCase = exports.firstLowerCase = exports.splitUnit = exports.encodeToUnicode = exports.decodeUnicode = exports.trim = exports.regex = exports.isDOM = exports.whatIs = exports.isWindow = exports.isUndefined = exports.isType = exports.isPlainObject = exports.isBoolean = exports.isLikeArray = exports.isArray = exports.isFunction = exports.isObject = exports.isDate = exports.isNumber = exports.isString = exports.is = exports.extend = undefined;

var _extend = __webpack_require__(52);

Object.defineProperty(exports, 'extend', {
  enumerable: true,
  get: function get() {
    return _extend.extend;
  }
});

var _is2 = __webpack_require__(5);

Object.defineProperty(exports, 'isString', {
  enumerable: true,
  get: function get() {
    return _is2.isString;
  }
});
Object.defineProperty(exports, 'isNumber', {
  enumerable: true,
  get: function get() {
    return _is2.isNumber;
  }
});
Object.defineProperty(exports, 'isDate', {
  enumerable: true,
  get: function get() {
    return _is2.isDate;
  }
});
Object.defineProperty(exports, 'isObject', {
  enumerable: true,
  get: function get() {
    return _is2.isObject;
  }
});
Object.defineProperty(exports, 'isFunction', {
  enumerable: true,
  get: function get() {
    return _is2.isFunction;
  }
});
Object.defineProperty(exports, 'isArray', {
  enumerable: true,
  get: function get() {
    return _is2.isArray;
  }
});
Object.defineProperty(exports, 'isLikeArray', {
  enumerable: true,
  get: function get() {
    return _is2.isLikeArray;
  }
});
Object.defineProperty(exports, 'isBoolean', {
  enumerable: true,
  get: function get() {
    return _is2.isBoolean;
  }
});
Object.defineProperty(exports, 'isPlainObject', {
  enumerable: true,
  get: function get() {
    return _is2.isPlainObject;
  }
});
Object.defineProperty(exports, 'isType', {
  enumerable: true,
  get: function get() {
    return _is2.isType;
  }
});
Object.defineProperty(exports, 'isUndefined', {
  enumerable: true,
  get: function get() {
    return _is2.isUndefined;
  }
});
Object.defineProperty(exports, 'isWindow', {
  enumerable: true,
  get: function get() {
    return _is2.isWindow;
  }
});
Object.defineProperty(exports, 'whatIs', {
  enumerable: true,
  get: function get() {
    return _is2.whatIs;
  }
});
Object.defineProperty(exports, 'isDOM', {
  enumerable: true,
  get: function get() {
    return _is2.isDOM;
  }
});

var _regex = __webpack_require__(33);

Object.defineProperty(exports, 'regex', {
  enumerable: true,
  get: function get() {
    return _regex.regex;
  }
});

var _string = __webpack_require__(90);

Object.defineProperty(exports, 'trim', {
  enumerable: true,
  get: function get() {
    return _string.trim;
  }
});
Object.defineProperty(exports, 'decodeUnicode', {
  enumerable: true,
  get: function get() {
    return _string.decodeUnicode;
  }
});
Object.defineProperty(exports, 'encodeToUnicode', {
  enumerable: true,
  get: function get() {
    return _string.encodeToUnicode;
  }
});
Object.defineProperty(exports, 'splitUnit', {
  enumerable: true,
  get: function get() {
    return _string.splitUnit;
  }
});
Object.defineProperty(exports, 'firstLowerCase', {
  enumerable: true,
  get: function get() {
    return _string.firstLowerCase;
  }
});
Object.defineProperty(exports, 'firstUpperCase', {
  enumerable: true,
  get: function get() {
    return _string.firstUpperCase;
  }
});

var _array = __webpack_require__(48);

Object.defineProperty(exports, 'removeFromArray', {
  enumerable: true,
  get: function get() {
    return _array.removeFromArray;
  }
});
Object.defineProperty(exports, 'sort', {
  enumerable: true,
  get: function get() {
    return _array.sort;
  }
});
Object.defineProperty(exports, 'shuffle', {
  enumerable: true,
  get: function get() {
    return _array.shuffle;
  }
});
Object.defineProperty(exports, 'toArray', {
  enumerable: true,
  get: function get() {
    return _array.toArray;
  }
});
Object.defineProperty(exports, 'find', {
  enumerable: true,
  get: function get() {
    return _array.find;
  }
});
Object.defineProperty(exports, 'lastOneOf', {
  enumerable: true,
  get: function get() {
    return _array.lastOneOf;
  }
});

var _date = __webpack_require__(92);

Object.defineProperty(exports, 'dateFormat', {
  enumerable: true,
  get: function get() {
    return _date.dateFormat;
  }
});
Object.defineProperty(exports, 'fromTime', {
  enumerable: true,
  get: function get() {
    return _date.fromTime;
  }
});
Object.defineProperty(exports, 'ONE_HOUR', {
  enumerable: true,
  get: function get() {
    return _date.ONE_HOUR;
  }
});
Object.defineProperty(exports, 'ONE_DAY', {
  enumerable: true,
  get: function get() {
    return _date.ONE_DAY;
  }
});
Object.defineProperty(exports, 'ONE_SEC', {
  enumerable: true,
  get: function get() {
    return _date.ONE_SEC;
  }
});
Object.defineProperty(exports, 'ONE_MIN', {
  enumerable: true,
  get: function get() {
    return _date.ONE_MIN;
  }
});
Object.defineProperty(exports, 'ONE_MONTH', {
  enumerable: true,
  get: function get() {
    return _date.ONE_MONTH;
  }
});
Object.defineProperty(exports, 'ONE_YEAR', {
  enumerable: true,
  get: function get() {
    return _date.ONE_YEAR;
  }
});

var _math = __webpack_require__(49);

Object.defineProperty(exports, 'randomInteger', {
  enumerable: true,
  get: function get() {
    return _math.randomInteger;
  }
});

var _object = __webpack_require__(93);

Object.defineProperty(exports, 'getOrSetProp', {
  enumerable: true,
  get: function get() {
    return _object.getOrSetProp;
  }
});

var _is = _interopRequireWildcard(_is2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.is = _is;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(1);
var ctx = __webpack_require__(36);
var hide = __webpack_require__(6);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(56)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(35)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 18 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(15);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(41);
var enumBugKeys = __webpack_require__(26);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(25)('keys');
var uid = __webpack_require__(16);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(3).f;
var has = __webpack_require__(4);
var TAG = __webpack_require__(0)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(19);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(70);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(75);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(0);


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(1);
var LIBRARY = __webpack_require__(20);
var wksExt = __webpack_require__(30);
var defineProperty = __webpack_require__(3).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 *  常用正则表达式
 *
 * @property  number
 * @property  empty
 * @property  integer
 * @property  positiveInteger
 * @property  positiveNumber
 * @property  url
 * @property  tel
 * @property  mobilePhone
 * @property  email
 * @property  account
 * @property  IdCard
 * @property  ip
 * @property  numberWithUnit
 * @property  relativeNumberWithUnit
 *
 */
var regex = exports.regex = {
  number: /^[-+]?((\d+(\.\d*)?)|(\.\d+))$/,
  numberWithUnit: /^((?:[-+])?(?:(?:\d+(?:\.\d*)?)|(?:\.\d+)))([%a-zA-Z]*)/,
  relativeNumberWithUnit: /^((?:[-+]=?)?(?:(?:\d+(?:\.\d*)?)|(?:\.\d+)))([%a-zA-Z]*)/,
  empty: /^$/,
  integer: /^-?\d+\.?$/,
  positiveInteger: /^0*[1-9]+\d*$/,
  positiveNumber: /^((0*\.0*[1-9]\d*)|(0*[1-9]\d*(\.\d*)?))$/,
  url: /^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#])?$/,
  tel: /^((\d{6,11})|((\d{2,4}-?)?(\d{2,4}-?)?\d{6,11})|(([(（]\d{2,4}[)）])?\d{6,11})|((\+?\d{2,4}-?)?1\d{10}))$/,
  mobilePhone: /^(\+?\d{2,4})?1\d{10}$/,
  email: /^[a-z]([a-z0-9]*[-_]?[a-z0-9]+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i,
  account: /^[a-z][\w]{5,15}$/i,
  IdCard: /^((\d{15})|(\d{18})|(\d{17}[xX]))$/,
  ip: /^((1[0-9][0-9])|(2[0-4][0-9])|(25[0-5])|([1-9][0-9])|([0-9]))(\.((1[0-9][0-9])|(2[0-4][0-9])|(25[0-5])|([1-9][0-9])|([0-9]))){3}$/
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var easing = exports.easing = {
    /*
    *
    *@param {Number} p  progress
    *@param {Number} s  start value
    *@param {Number} d  distance
    * */

    Linear: function Linear(p, s, d) {
        return d * p + s;
    },
    Quad: {
        easeIn: function easeIn(p, s, d) {
            return d * p * p + s;
        },
        easeOut: function easeOut(p, s, d) {
            return -d * p * (p - 2) + s;
        },
        easeInOut: function easeInOut(p, s, d) {
            if ((p = p * 2) < 1) return d / 2 * p * p + s;
            return -d / 2 * (--p * (p - 2) - 1) + s;
        }
    },
    Cubic: {
        easeIn: function easeIn(p, s, d) {
            return d * p * p * p + s;
        },
        easeOut: function easeOut(p, s, d) {
            return d * ((p = p - 1) * p * p + 1) + s;
        },
        easeInOut: function easeInOut(p, s, d) {
            if ((p = p * 2) < 1) return d / 2 * p * p * p + s;
            return d / 2 * ((p -= 2) * p * p + 2) + s;
        }
    },
    Bounce: {
        easeIn: function easeIn(p, s, d) {
            return d - easing.Bounce.easeOut(1 - p, 0, d) + s;
        },
        easeOut: function easeOut(p, s, d) {
            if (p < 1 / 2.75) {
                return d * (7.5625 * p * p) + s;
            } else if (p < 2 / 2.75) {
                return d * (7.5625 * (p -= 1.5 / 2.75) * p + .75) + s;
            } else if (p < 2.5 / 2.75) {
                return d * (7.5625 * (p -= 2.25 / 2.75) * p + .9375) + s;
            } else {
                return d * (7.5625 * (p -= 2.625 / 2.75) * p + .984375) + s;
            }
        },
        easeInOut: function easeInOut(p, s, c) {
            if (p < 0.5) return easing.Bounce.easeIn(p * 2, 0, c) * .5 + s;else return easing.Bounce.easeOut(p * 2 - 1, 0, c) * .5 + c * .5 + s;
        }
    }
};

var transitionTimingFunction = exports.transitionTimingFunction = {
    linear: 'cubic-bezier(0,0,1,1)',
    ease: 'cubic-bezier(0.25,0.1,0.25,1)',
    easeIn: 'cubic-bezier(0.42,0,1,1)',
    easeOut: 'cubic-bezier(0,0,0.58,1)',
    easeInOut: 'cubic-bezier(0.42,0,0.58,1)'
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(20);
var $export = __webpack_require__(14);
var redefine = __webpack_require__(39);
var hide = __webpack_require__(6);
var has = __webpack_require__(4);
var Iterators = __webpack_require__(13);
var $iterCreate = __webpack_require__(58);
var setToStringTag = __webpack_require__(27);
var getPrototypeOf = __webpack_require__(43);
var ITERATOR = __webpack_require__(0)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(57);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(8) && !__webpack_require__(11)(function () {
  return Object.defineProperty(__webpack_require__(38)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(15);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(7);
var dPs = __webpack_require__(59);
var enumBugKeys = __webpack_require__(26);
var IE_PROTO = __webpack_require__(24)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(38)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(63).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(4);
var toIObject = __webpack_require__(9);
var arrayIndexOf = __webpack_require__(61)(false);
var IE_PROTO = __webpack_require__(24)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(18);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(4);
var toObject = __webpack_require__(28);
var IE_PROTO = __webpack_require__(24)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(68);
var ITERATOR = __webpack_require__(0)('iterator');
var Iterators = __webpack_require__(13);
module.exports = __webpack_require__(1).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(72);
var global = __webpack_require__(2);
var hide = __webpack_require__(6);
var Iterators = __webpack_require__(13);
var TO_STRING_TAG = __webpack_require__(0)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 46 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(41);
var hiddenKeys = __webpack_require__(26).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = __webpack_require__(29);

var _typeof3 = _interopRequireDefault(_typeof2);

exports.toArray = toArray;
exports.removeFromArray = removeFromArray;
exports.sort = sort;
exports.find = find;
exports.shuffle = shuffle;
exports.lastOneOf = lastOneOf;

var _is = __webpack_require__(5);

var _math = __webpack_require__(49);

var _changlinWarning = __webpack_require__(91);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 类数组对象转化为数组
 *
 * @param {Object}  s
 * @example
 * ```javascript
 *toArray({'0':123,'2':456,length:3})
 * //=>[123,456,undefined]
 * ```
 *
 * @returns {Array}
 */
function toArray(s) {
    if (!(0, _is.isLikeArray)(s)) {
        throw new Error('s should be like array');
    }
    try {
        return Array.prototype.slice.call(s);
    } catch (e) {
        var arr = [];
        for (var i = 0, len = s.length; i < len; i++) {
            arr[i] = s[i];
        }
        return arr;
    }
}

/**
 * 从数组中移除某些项
 *
 * @param {Array}  arr
 * @param {Number | function}  condition  if(number&&arr[number] remove arr[number] ; if(fn(item))remove item
 *@param {Number}  number
 * @example
 * ```javascript
 * let a=[1,2,3];
 * removeFromArray(a,1)//=>[2]
 * a//=>[1,3]
 *
 * let b=[{id:1},{id:2},{id:3}];
 * removeFromArray(b,(n)=>n.id===3)//=>[{id:3}]
 * b//=>[{id:1},{id:2}]
 * ```
 *
 * @returns {Array}
 */
function removeFromArray(arr, condition) {
    var number = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    if (!(0, _is.isArray)(arr)) throw new Error('arr should be arr but got ' + (typeof arr === 'undefined' ? 'undefined' : (0, _typeof3.default)(arr)));
    var items = [];
    if ((0, _is.isNumber)(condition)) {
        return condition < arr.length ? arr.splice(condition, number) : items;
    }
    if ((0, _is.isFunction)(condition)) {
        for (var i = 0; i < arr.length; i++) {
            var res = false;
            try {
                res = condition(arr[i]);
            } catch (e) {
                res = false;
            }
            if (res) {
                items.push(arr.splice(i, 1)[0]);
                i--;
            }
        }
        return items;
    }
    return items;
}

/**
 * 排序
 *
 * @param {Array}  arr
 * @param {function}  compare  比较函数
 * @example
 * ```javascript
 * let a=[1,3,,,2];
 * sort(a,()=>true)//=>[2,3,1,undefined,undefined]
 * a//=>[2,3,1,undefined,undefined]
 *
 * let arrb=[1,3,5,4,2,7,6]
 * sort(arrb,(a,b)=>a>b)//[1,2,3,4,5,6,7]
 *
 * ```
 *
 * @returns {Array}
 */
function sort(arr, compare) {
    if (!(0, _is.isFunction)(compare) || !(0, _is.isArray)(arr)) {
        throw new Error('arguments is not expected');
    }
    var i = void 0,
        j = void 0;
    for (i = 1; i < arr.length; i++) {
        for (j = i - 1; j > -1; j--) {
            var res = void 0;
            if ((0, _is.isUndefined)(arr[j + 1])) {
                break;
            } else if ((0, _is.isUndefined)(arr[j])) {
                res = true;
            } else {
                try {
                    res = compare(arr[j], arr[j + 1]);
                } catch (e) {
                    res = false;
                    break;
                }
            }
            if (res) {
                arr.splice(j, 0, arr.splice(j + 1, 1)[0]);
            } else {
                break;
            }
        }
    }
    return arr;
}
/**
 * 找出数组某一个元素
 *
 * @param {Array}  array
 * @param {function}  fn  过滤函数
 * @example
 * ```javascript
 * find([1,2,'2',3,4,5],function(a){return a==='2'})//=>'2'
 * find([1,2,'2',3,4,5],function(a){return a===8})//=>undefined
 * ```
 *
 * @returns {any}
 */
function find(array, fn) {
    if (!(0, _is.isArray)(array)) {
        throw new Error('array should be Array type but got ' + (0, _is.whatIs)(array));
    }
    if ((0, _changlinWarning.warning)(!(0, _is.isFunction)(fn), 'fn is not function ,\'find\' will return undefined')) {
        return undefined;
    }

    if (array.find) {
        return array.find(fn);
    }

    var result = void 0;

    try {
        for (var i = 0; i < array.length; i++) {
            if (fn(array[i])) {
                result = array[i];
                break;
            }
        }
    } catch (e) {
        (0, _changlinWarning.warning)(true, e);
    }

    return result;
}

/**
 * 乱序。返回原（类）数组
 *
 * @param {Array}  arr
 * @example
 * ```javascript
 * let arr1=[1,2,3];
 * let res=shuffle(arr1);
 * res===arr1//=>true
 * res.length===3//true
 * ```
 *
 * @returns {Array}
 */
function shuffle(arr) {
    var source = void 0;
    if (!(0, _is.isArray)(arr)) {
        if ((0, _is.isLikeArray)(arr)) {
            source = toArray(arr);
        } else {
            throw new Error('arr should be array but got ' + (0, _is.whatIs)(arr));
        }
    } else {
        source = arr;
    }
    var temp = source.slice(0);
    for (var i = 0, l = arr.length; i < l; i++) {
        var n = (0, _math.randomInteger)(l - i - 1);
        arr[i] = temp.splice(n, 1)[0];
    }

    return arr;
}

/**
 * 获取数组最后一个元素
 *
 * @param {Array}  arr
 * @example
 * ```javascript
 *
 * lastOneOf([1,2,3])//=>3
 *
 *
 * ```
 *
 */
function lastOneOf(arr) {
    return arr[arr.length - 1];
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.randomInteger = randomInteger;

var _is = __webpack_require__(5);

/**
 * 生成一定范围内的随机整数 （包括端点）
 *
 * @param {number}  min
 * @param {number}  max
 *
 * @example
 * ```javascript
 *let res=randomInteger(4)
 * res>=0&&res<=4      //true
 *isType('integer',res)//true
 *
 * ```
 *
 * @returns {number}
 */
function randomInteger(min, max) {
    if ((0, _is.isUndefined)(min)) {
        throw new Error('no arguments');
    }
    if ((0, _is.isUndefined)(max)) {
        max = min;
        min = 0;
    } else if (!(0, _is.isType)('integer', min) || !(0, _is.isType)('integer', max)) {
        throw new Error('arguments were not expected');
    }
    min = Number(min);
    max = Number(max);
    var difference = max - min;
    var random = Math.floor(Math.random() * (difference + 1));
    return min + random;
}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createAnimation = __webpack_require__(51);

var _easing = __webpack_require__(34);

window.onload = function () {

    var el5 = document.querySelector('#ani5');
    (0, _createAnimation.createAnimation)({
        target: el5,
        keyFrame: { 'left': '300px', 'top': '100px' },
        onStart: function onStart() {
            el5.innerHTML = 'Start Animation';
        },
        onComplete: function onComplete(e) {
            el5.innerHTML = 'animation complete';
        }
    });

    var el6 = document.querySelector('#ani6');
    var ani6 = (0, _createAnimation.createAnimation)({
        target: el6,
        keyFrame: { 'transform': 'rotate(170deg) scale(2,2)', 'left': '100px' },
        duration: 4000
    });
    setTimeout(function () {
        return ani6.stop();
    }, 2500);

    (0, _createAnimation.createAnimation)({
        target: document.querySelector('#ani'),
        keyFrame: { 'left': '300px', 'top': '100px' },
        useTransition: false,
        delay: 5000
    });

    (0, _createAnimation.createAnimation)({
        target: '#ani2',
        keyFrame: { 'left': '700px', 'top': '150px' },
        duration: 3000,
        delay: 6000,
        useTransition: false
    });

    (0, _createAnimation.createAnimation)({
        target: '#ani3',
        keyFrame: [{ 'left': '0px', 'top': '0px', percent: 0 }, { 'left': '200px', 'top': '0px', percent: 25 }, { 'left': '200px', 'top': '120px', percent: 50 }, { 'left': '0px', 'top': '120px', percent: 75 }, { 'left': '0px', 'top': '0px', percent: 100 }],
        duration: 3000,
        useTransition: false,
        delay: 9000

    });

    (0, _createAnimation.createAnimation)({
        target: '#ani4',
        keyFrame: { 'left': '+=300px', 'top': '-=100px' },
        duration: 3000,
        delay: 12000,
        useTransition: false

    });
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createAnimation = createAnimation;

var _easing = __webpack_require__(34);

var _changlinUtil = __webpack_require__(10);

var _changlinWdtools = __webpack_require__(94);

var transitionEventName = function () {
    var transitions = {
        'transition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'MozTransition': 'transitionend',
        'WebkitTransition': 'webkitTransitionEnd'
    };
    return transitions[(0, _changlinWdtools.cssPrefix)('transition')];
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
        (0, _changlinWdtools.removeEventListener)(animationConfig.target, transitionEventName, handleTransitionComplete);
    }

    // debugger
    if (!animationConfig.useTransition) {
        if ((0, _changlinUtil.isString)(animationConfig.easing)) {
            animationConfig.easing = _easing.easing.Cubic.easeInOut;
        }
        if (animationConfig.keyFramePropsType === 'css') {
            animationConfig._getOrSetProp = _changlinWdtools.css;
        } else {
            animationConfig._getOrSetProp = _changlinUtil.getOrSetProp;
        }

        if (animationConfig.autoUpdate) {
            start();
        }
    } else {
        (0, _changlinWdtools.css)(animationConfig.target, 'transitionProperty', 'all');
        (0, _changlinWdtools.css)(animationConfig.target, 'transitionDuration', animationConfig.duration + 'ms');
        (0, _changlinWdtools.css)(animationConfig.target, 'transitionTimingFunction', animationConfig.easing);
        (0, _changlinWdtools.css)(animationConfig.target, 'transitionDelay', animationConfig.delay + 'ms');

        (0, _changlinWdtools.addEventListener)(animationConfig.target, transitionEventName, handleTransitionComplete);
        animationConfig.onStart.call(animationConfig.target);
        animationConfig.state = 0;
        animationConfig.animation.forEach(function (n, i) {
            (0, _changlinWdtools.css)(animationConfig.target, n.key, n.endValue);
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
                    (0, _changlinWdtools.removeEventListener)(animationConfig.target, transitionEventName, handleTransitionComplete);
                } else {
                    (0, _changlinWdtools.cancelAnimationFrame)(animationConfig.timer);
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
            animationConfig.timer = (0, _changlinWdtools.requestAnimationFrame)(start);
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
                        n.values.unshift((0, _changlinUtil.splitUnit)(params._getOrSetProp(params.target, n.key)).value);
                        n.percent.unshift(0);
                    }
                } else {
                    var currentValue = params._getOrSetProp(params.target, n.key);
                    if (currentValue === undefined) {
                        currentValue = 0;
                    }
                    var temp = (0, _changlinUtil.splitUnit)(currentValue);
                    n.startValue = temp.value;
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
                var oneP = { key: keyFramePropsType === 'css' ? (0, _changlinWdtools.cssPrefix)(each) : each, percent: [], values: [], unit: '' };

                for (var _i = 0; _i < keyFrame.length; _i++) {
                    var temp = (0, _changlinUtil.splitUnit)(keyFrame[_i][each], true);
                    oneP.percent.push(keyFrame[_i].percent);
                    oneP.values.push(temp.value);
                    oneP.unit = temp.unit;
                }
                animation.push(oneP);
            }
        }
    } else {
        for (var _each in keyFrame) {
            if (useTransition) {
                animation.push({
                    key: keyFramePropsType === 'css' ? (0, _changlinWdtools.cssPrefix)(_each) : _each,
                    endValue: keyFrame[_each],
                    unit: ''
                });
            } else {
                var _temp = (0, _changlinUtil.splitUnit)(keyFrame[_each], true);
                if ((0, _changlinUtil.isUndefined)(_temp.value)) return;

                animation.push({
                    key: keyFramePropsType === 'css' ? (0, _changlinWdtools.cssPrefix)(_each) : _each,
                    endValue: _temp.value,
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
        (0, _changlinWdtools.css)(animationConfig.target, temp, currentStyle[temp]);
    }
    (0, _changlinWdtools.css)(animationConfig.target, 'transitionProperty', 'none');
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = __webpack_require__(53);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.extend = extend;

var _is = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hasOwn = Object.prototype.hasOwnProperty;

function _extend() {
    for (var _len = arguments.length, a = Array(_len), _key = 0; _key < _len; _key++) {
        a[_key] = arguments[_key];
    }

    var deep = a[0],
        target = a[1],
        source = a[2];


    if (!(0, _is.isObject)(source)) return target;

    for (var key in source) {
        if (hasOwn.call(source, key)) {
            if (deep && ((0, _is.isPlainObject)(source[key]) || (0, _is.isArray)(source[key]))) {
                if ((0, _is.isPlainObject)(source[key]) && !(0, _is.isPlainObject)(target[key])) target[key] = {};
                if ((0, _is.isArray)(source[key]) && !(0, _is.isArray)(target[key])) target[key] = [];
                _extend(deep, target[key], source[key]);
            } else if (source[key] !== undefined) target[key] = source[key];
        }
    }return target;
}

/**
 * 对象扩展
 *
 * @param {boolean|object} deep
 * @param {object} target
 * @param {object} source
 * @example
 *
 *
 * ```javascript
 * //deep  false
 *  let source  = {a: 1, b: 2, c: {c1: 1}};
 *let res  = extend(false, {}, source);
 *source.c.c1 = 4;
 * res.c.c1===4//=>true
 *
 * //deep true
 *let source  = {a: 1, b: 2, c: {c1: 1}};
 *let res  = extend(true, {}, source);
 *source.c.c1 = 4;
 *res.c.c1===4//=>false
 * ```
 * @returns {object}
 */

function extend() {
    for (var _len2 = arguments.length, a = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        a[_key2] = arguments[_key2];
    }

    var len = a.length,
        first = a[0],
        deep = (0, _is.isBoolean)(first);

    if (!len) return {};

    if (len === 1) {
        return _extend(false, {}, first);
    }

    if (len === 2) {
        if (deep) {
            return a[1];
        } else {
            return _extend.apply(undefined, [false].concat((0, _toConsumableArray3.default)(a)));
        }
    }
    if (deep) {
        if (len === 3) {
            return _extend.apply(undefined, (0, _toConsumableArray3.default)(a));
        } else {
            var temp = a.splice(len - 2);
            a = a.concat([_extend.apply(undefined, [first].concat((0, _toConsumableArray3.default)(temp)))]);
            return extend.apply(undefined, (0, _toConsumableArray3.default)(a));
        }
    } else {
        var _temp = a.splice(len - 2);
        a.push(_extend.apply(undefined, [false].concat((0, _toConsumableArray3.default)(_temp))));
        return extend.apply(undefined, (0, _toConsumableArray3.default)(a));
    }
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(54);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(55), __esModule: true };

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(17);
__webpack_require__(64);
module.exports = __webpack_require__(1).Array.from;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(18);
var defined = __webpack_require__(19);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(40);
var descriptor = __webpack_require__(12);
var setToStringTag = __webpack_require__(27);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(6)(IteratorPrototype, __webpack_require__(0)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(3);
var anObject = __webpack_require__(7);
var getKeys = __webpack_require__(22);

module.exports = __webpack_require__(8) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(23);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(9);
var toLength = __webpack_require__(42);
var toAbsoluteIndex = __webpack_require__(62);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(18);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(2).document;
module.exports = document && document.documentElement;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(36);
var $export = __webpack_require__(14);
var toObject = __webpack_require__(28);
var call = __webpack_require__(65);
var isArrayIter = __webpack_require__(66);
var toLength = __webpack_require__(42);
var createProperty = __webpack_require__(67);
var getIterFn = __webpack_require__(44);

$export($export.S + $export.F * !__webpack_require__(69)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(7);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(13);
var ITERATOR = __webpack_require__(0)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(3);
var createDesc = __webpack_require__(12);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(23);
var TAG = __webpack_require__(0)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(0)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(71), __esModule: true };

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(17);
__webpack_require__(45);
module.exports = __webpack_require__(30).f('iterator');


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(73);
var step = __webpack_require__(74);
var Iterators = __webpack_require__(13);
var toIObject = __webpack_require__(9);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(35)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(76), __esModule: true };

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(77);
__webpack_require__(83);
__webpack_require__(84);
__webpack_require__(85);
module.exports = __webpack_require__(1).Symbol;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(2);
var has = __webpack_require__(4);
var DESCRIPTORS = __webpack_require__(8);
var $export = __webpack_require__(14);
var redefine = __webpack_require__(39);
var META = __webpack_require__(78).KEY;
var $fails = __webpack_require__(11);
var shared = __webpack_require__(25);
var setToStringTag = __webpack_require__(27);
var uid = __webpack_require__(16);
var wks = __webpack_require__(0);
var wksExt = __webpack_require__(30);
var wksDefine = __webpack_require__(31);
var enumKeys = __webpack_require__(79);
var isArray = __webpack_require__(80);
var anObject = __webpack_require__(7);
var toIObject = __webpack_require__(9);
var toPrimitive = __webpack_require__(21);
var createDesc = __webpack_require__(12);
var _create = __webpack_require__(40);
var gOPNExt = __webpack_require__(81);
var $GOPD = __webpack_require__(82);
var $DP = __webpack_require__(3);
var $keys = __webpack_require__(22);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(47).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(32).f = $propertyIsEnumerable;
  __webpack_require__(46).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(20)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(6)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(16)('meta');
var isObject = __webpack_require__(15);
var has = __webpack_require__(4);
var setDesc = __webpack_require__(3).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(11)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(22);
var gOPS = __webpack_require__(46);
var pIE = __webpack_require__(32);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(23);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(9);
var gOPN = __webpack_require__(47).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(32);
var createDesc = __webpack_require__(12);
var toIObject = __webpack_require__(9);
var toPrimitive = __webpack_require__(21);
var has = __webpack_require__(4);
var IE8_DOM_DEFINE = __webpack_require__(37);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(8) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 83 */
/***/ (function(module, exports) {



/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31)('asyncIterator');


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31)('observable');


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(87), __esModule: true };

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(88);
module.exports = __webpack_require__(1).Object.getPrototypeOf;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(28);
var $getPrototypeOf = __webpack_require__(43);

__webpack_require__(89)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(14);
var core = __webpack_require__(1);
var fails = __webpack_require__(11);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.trim = trim;
exports.encodeToUnicode = encodeToUnicode;
exports.decodeUnicode = decodeUnicode;
exports.firstUpperCase = firstUpperCase;
exports.firstLowerCase = firstLowerCase;
exports.splitUnit = splitUnit;

var _is = __webpack_require__(5);

var _regex = __webpack_require__(33);

/**
 * 字符串两端剪切
 *
 * @param {string}  string
 * @param {string}  fe  f or e or  fe
 * @param {string}  char
 *
 * @example
 * ```javascript
 * trim('   abc   ')//=>'abc'
 * trim('   abc   ','f')//=>'abc   '
 * trim('   abc   ','e')//=>'   abc'
 * trim('**abc**','*')//=>'abc'
 * ```
 *
 * @returns {string}
 */
function trim(string) {
    var fe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'fe';
    var char = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '\\s';

    if ((0, _is.isString)(string) && (0, _is.isString)(char) && (0, _is.isString)(fe)) {
        if (!/^(fe)|([fe])$/.test(fe)) {
            char = fe;fe = 'fe';
        }
        var FRegex = new RegExp('^[' + char + ']*'),
            ERegex = new RegExp('[' + char + ']*$');
        switch (fe) {
            case 'f':
                return string.replace(FRegex, '');
            case 'e':
                return string.replace(ERegex, '');
            default:
                return string.replace(FRegex, '').replace(ERegex, '');
        }
    }
    throw new Error('Parameter type error');
}

/**
 *
 * 字符转unicode
 * @param {string}  str  需要转码的字符串
 * @example
 * ```javascript
 *  encodeToUnicode('啊abc123.')
 *  //=>"\u554a\u0061\u0062\u0063\u0031\u0032\u0033\u002e"
 *
 * ```
 *
 * @returns {string}
 */

function encodeToUnicode(str) {
    if (!(0, _is.isString)(str)) {
        throw new Error(str + ' is not string');
    }
    var temp = "",
        rs = "";
    for (var i = 0, len = str.length; i < len; i++) {
        temp = str.charCodeAt(i).toString(16);
        rs += '\\u' + new Array(5 - temp.length).join("0") + temp;
    }
    return rs;
}

/**
 *
 * unicode字符串解码
 * @param {string}  str  需要解码的字符串
 * @example
 * ```javascript
 *  decodeUnicode('\u554a\u0061\u0062\u0063\u0031\u0032\u0033\u002e')
 *  //=>"啊abc123."
 *
 * ```
 *
 * @returns {string}
 */

function decodeUnicode(str) {
    if (!(0, _is.isString)(str)) {
        throw new Error(str + ' is not string');
    }
    return str.replace(/(\\u)(\w{4}|\w{2})/gi, function ($0, $1, $2) {
        return String.fromCharCode(parseInt($2, 16));
    });
}

/**
 *
 * Capitalize the first letter
 * @param {string}  string
 * @example
 * ```javascript
 *  firstUpperCase('abc')//=>'Abc'
 *
 *
 * ```
 *
 * @returns {string}
 */
function firstUpperCase(string) {
    return string[0].toUpperCase() + string.slice(1);
}

/**
 *
 * Lowercase first letter
 * @param {string}  string
 * @example
 * ```javascript
 *  firstLowerCase('Abc')//=>'abc'
 *
 *
 * ```
 *
 * @returns {string}
 */
function firstLowerCase(string) {
    return string[0].toLowerCase() + string.slice(1);
}

/**
 *
 * split number with unit
 * @param {string}  value
 * @param {boolean}  relative
 * @example
 * ```javascript
 *  splitUnit('123px')//=>{value:123,unit:'px'}
 *  splitUnit('123%')//=>{value:123,unit:'%'}
 *  splitUnit('+123%')//=>{value:123,unit:'%'}
 *  splitUnit('-123%')//=>{value:-123,unit:'%'}
 *  splitUnit('-=123%',true)//=>{value:'-=123',unit:'%'}
 *  splitUnit('+=123%',true)//=>{value:'+=123',unit:'%'}
 *
 *
 * ```
 *
 * @returns {object}
 */
function splitUnit(value) {
    var relative = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var v = void 0,
        unit = '';
    var reg = void 0;
    if (relative) {
        reg = _regex.regex.relativeNumberWithUnit;
    } else {
        reg = _regex.regex.numberWithUnit;
    }

    if (reg.test(value)) {

        var temp = RegExp.$1;
        unit = RegExp.$2;
        if (_regex.regex.number.test(temp)) {
            v = Number(temp);
        } else {
            v = temp;
        }
    }

    return {
        value: v, unit: unit
    };
}

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {


var warning =function( condition){return condition};
if (false) {
    warning = function(condition, message) {
        if (condition && typeof console === 'object'&&typeof console.error ==='function') {
            if(typeof message==='string'){
                message=new Error(message)
            }
            console.error(message)
        }
        return condition
    }
}

exports.warning =warning


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ONE_YEAR = exports.ONE_MONTH = exports.ONE_DAY = exports.ONE_HOUR = exports.ONE_MIN = exports.ONE_SEC = undefined;
exports.dateFormat = dateFormat;
exports.fromTime = fromTime;

var _is = __webpack_require__(5);

/**
 *
 * */

var ONE_SEC = exports.ONE_SEC = 1000;
/**
 *
 * */

var ONE_MIN = exports.ONE_MIN = 60 * 1000;
/**
 *
 * */

var ONE_HOUR = exports.ONE_HOUR = 60 * 60 * 1000;
/**
 *
 * */

var ONE_DAY = exports.ONE_DAY = 24 * 60 * 60 * 1000;
/**
 *
 * */

var ONE_MONTH = exports.ONE_MONTH = 31 * 24 * 60 * 60 * 1000;
/**
 *
 * */
var ONE_YEAR = exports.ONE_YEAR = 366 * 24 * 60 * 60 * 1000;

function _stringNumberToDate(date) {
    if (!(0, _is.isDate)(date)) {
        if ((0, _is.isNumber)(date)) {
            if (String(date) === 'NaN') {
                throw new Error('date is not expect');
            }
            date = new Date(date);
        } else if ((0, _is.isString)(date) && (0, _is.isType)('number', date)) {
            date = new Date(Number(date));
        } else {
            throw new Error('date is not expect');
        }
    }
    return date;
}

/**
 * 时间格式化
 *
 * @param {Date | string | number}  date
 * @param {string} format
 * @example
 * ```javascript
 * dateFormat(new Date(), 'yyyy/MM/dd hh:mm:ss')
 * dateFormat(1478836800000, 'yyyy-MM-dd') //=>2016-11-11
 * ```
 *
 * @returns {string}
 */
function dateFormat(date, format) {
    date = _stringNumberToDate(date);
    if (!(0, _is.isString)(format)) {
        throw new Error('format wasn\'t string');
    }
    var o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
        "q+": Math.floor((date.getMonth() + 3) / 3),
        "S": date.getMilliseconds()
    };
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }return format;
}

/**
 *
 * 获取时间段
 * @param {Date | string | number}  from  较远的时间
 * @param {Date | string | number | undefined}  now 较近的时间
 * @example
 * ```javascript
 *  let t1 = new Date(1478836800000);
 *  let t2 = new Date(1478836800100);
 *   fromTime(t1, t2) //=>刚刚
 * ```
 *
 * @returns {string}
 */

function fromTime(from) {
    var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();

    from = _stringNumberToDate(from);
    now = _stringNumberToDate(now);

    var time = parseInt(now.getTime() - from.getTime());
    if (time < ONE_SEC) {
        return "刚刚";
    } else if (time >= ONE_SEC && time < ONE_MIN) {
        return parseInt(time / ONE_SEC) + "秒前";
    } else if (time >= ONE_MIN && time < ONE_HOUR) {
        return parseInt(time / ONE_MIN) + "分钟前";
    } else if (time >= ONE_HOUR && time < ONE_DAY) {
        return parseInt(time / ONE_HOUR) + "小时前";
    } else if (time >= ONE_DAY && time < ONE_MONTH) {
        return parseInt(time / ONE_DAY) + "天前";
    } else if (time >= ONE_MONTH && time < ONE_YEAR) {
        return parseInt(time / ONE_MONTH) + "月前";
    } else {
        return parseInt(time / ONE_YEAR) + "年前";
    }
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = __webpack_require__(29);

var _typeof3 = _interopRequireDefault(_typeof2);

exports.getOrSetProp = getOrSetProp;

var _is = __webpack_require__(5);

var _array = __webpack_require__(48);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isObject(value) {
    return value && value !== null && (typeof value === "undefined" ? "undefined" : (0, _typeof3.default)(value)) === 'object';
}

/**
 * 返回或设置对象的属性值
 * @param {object} obj
 * @param {string} prop 必须以'.'分割
 *
 *@example
 *```javascript
 *let obj={a:{b:{c:{d:3}}}}
 *getOrSetProp(obj,'a.b.c.d') //=>3
 *getOrSetProp(obj,'a.b.c.d',4) //=>4
 *
 *```
 *
 */
function getOrSetProp(obj, prop, value) {
    if (!isObject(obj)) return;
    if (!(0, _is.isString)(prop)) return;

    var props = prop.split('.');

    if (props.length === 1) {
        if (arguments.length === 2) {
            return obj[props[0]];
        } else {
            return obj[props[0]] = value;
        }
    }

    var target = obj[props[0]];

    for (var i = 1; i < props.length - 1; i++) {
        target = target[props[i]];
    }

    if (arguments.length === 2) {
        return target[(0, _array.lastOneOf)(props)];
    } else {
        return target[(0, _array.lastOneOf)(props)] = value;
    }
}

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cookie = __webpack_require__(95);

Object.defineProperty(exports, 'getCookie', {
  enumerable: true,
  get: function get() {
    return _cookie.getCookie;
  }
});
Object.defineProperty(exports, 'setCookie', {
  enumerable: true,
  get: function get() {
    return _cookie.setCookie;
  }
});
Object.defineProperty(exports, 'setCookieDefaultConfig', {
  enumerable: true,
  get: function get() {
    return _cookie.setCookieDefaultConfig;
  }
});
Object.defineProperty(exports, 'deleteCookie', {
  enumerable: true,
  get: function get() {
    return _cookie.deleteCookie;
  }
});
Object.defineProperty(exports, 'getCookieObject', {
  enumerable: true,
  get: function get() {
    return _cookie.getCookieObject;
  }
});

var _search = __webpack_require__(98);

Object.defineProperty(exports, 'searchParse', {
  enumerable: true,
  get: function get() {
    return _search.searchParse;
  }
});
Object.defineProperty(exports, 'searchStringify', {
  enumerable: true,
  get: function get() {
    return _search.searchStringify;
  }
});
Object.defineProperty(exports, 'searchExtend', {
  enumerable: true,
  get: function get() {
    return _search.searchExtend;
  }
});

var _url = __webpack_require__(102);

Object.defineProperty(exports, 'getAbsoluteURL', {
  enumerable: true,
  get: function get() {
    return _url.getAbsoluteURL;
  }
});

var _browser = __webpack_require__(103);

Object.defineProperty(exports, 'isAndroid', {
  enumerable: true,
  get: function get() {
    return _browser.isAndroid;
  }
});
Object.defineProperty(exports, 'isIOS', {
  enumerable: true,
  get: function get() {
    return _browser.isIOS;
  }
});
Object.defineProperty(exports, 'isWeiXin', {
  enumerable: true,
  get: function get() {
    return _browser.isWeiXin;
  }
});

var _event = __webpack_require__(104);

Object.defineProperty(exports, 'addEventListener', {
  enumerable: true,
  get: function get() {
    return _event.addEventListener;
  }
});
Object.defineProperty(exports, 'removeEventListener', {
  enumerable: true,
  get: function get() {
    return _event.removeEventListener;
  }
});

var _css = __webpack_require__(105);

Object.defineProperty(exports, 'css', {
  enumerable: true,
  get: function get() {
    return _css.css;
  }
});
Object.defineProperty(exports, 'cssPrefix', {
  enumerable: true,
  get: function get() {
    return _css.cssPrefix;
  }
});
Object.defineProperty(exports, 'hasTransition', {
  enumerable: true,
  get: function get() {
    return _css.hasTransition;
  }
});

var _animationFrame = __webpack_require__(106);

Object.defineProperty(exports, 'requestAnimationFrame', {
  enumerable: true,
  get: function get() {
    return _animationFrame.requestAnimationFrame;
  }
});
Object.defineProperty(exports, 'cancelAnimationFrame', {
  enumerable: true,
  get: function get() {
    return _animationFrame.cancelAnimationFrame;
  }
});

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(96);

var _stringify2 = _interopRequireDefault(_stringify);

exports.setCookieDefaultConfig = setCookieDefaultConfig;
exports.getCookie = getCookie;
exports.getCookieObject = getCookieObject;
exports.setCookie = setCookie;
exports.deleteCookie = deleteCookie;

var _changlinUtil = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultConfig = {
    //三年
    maxAge: 3 * _changlinUtil.ONE_YEAR / 1000,
    path: '/',
    domain: undefined
};

/**
 * 修改默认cookie设置
 *
 * @param {object} config
 * @example
 * ```javascript
 *setCookieDefaultConfig({
 *  maxAge:3600,
 *path:'/',
 *domain:'abc.com'
 * })
 * ```
 * @returns {undefined}
 */
function setCookieDefaultConfig(config) {
    if ((0, _changlinUtil.isObject)(config)) {
        (0, _changlinUtil.extend)(defaultConfig, config);
    }
}

/**
 * 获取cookie值
 *
 * @param {string} name
 * @example
 * ```javascript
 * getCookie('cookieName')
 * ```
 * @returns {string}
 */
function getCookie(name) {
    if (!(0, _changlinUtil.isString)(name)) {
        throw new Error('name should be string');
    }
    var result = '',
        c = document.cookie;
    var match = new RegExp(name + "=([^;]*);?").test(c);
    if (match) {
        result = decodeURIComponent(RegExp.$1);
    }
    return result;
}

/**
 * 获取cookie值，并解析为对象
 *
 * @param {string} name
 * @example
 * ```javascript
 * getCookieObject('cookieName')
 * ```
 * @returns {object}
 */
function getCookieObject(name) {
    var result = {};
    try {
        result = JSON.parse(getCookie(name));
    } catch (e) {}
    return result;
}

/**
 * 设置cookie值
 * @param {string} name cookie name
 * @param {string | number | object} value cookie value
 * @param {object} attributes cookie config
 * @return {string}
 */
function setCookie(name, value, attributes) {
    if (!(0, _changlinUtil.isString)(name)) {
        throw new Error('name should be string');
    }
    if (/;/.test(name)) {
        throw new Error('name should not include ;');
    }

    if ((0, _changlinUtil.isString)(value) || (0, _changlinUtil.isNumber)(value)) {
        value = encodeURIComponent(value);
    } else if ((0, _changlinUtil.isObject)(value)) {
        value = encodeURIComponent((0, _stringify2.default)(value));
    } else {
        throw new Error('value should be string | number | object ');
    }

    if ((0, _changlinUtil.isObject)(attributes)) {
        attributes = (0, _changlinUtil.extend)((0, _changlinUtil.extend)({}, defaultConfig), attributes);
    } else {
        attributes = defaultConfig;
    }

    var c = name + '=' + value + ';max-age=' + attributes.maxAge + ';path=' + attributes.path + ';' + (attributes.domain ? 'domain=' + attributes.domain : '');

    document.cookie = c;

    return c;
}

/**
 * 删除 cookie
 * @param {string} name cookie name
 * @return {string}
 */
function deleteCookie(name) {
    return setCookie(name, '', { maxAge: 0 });
}

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(97), __esModule: true };

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(1);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(99);

var _getIterator3 = _interopRequireDefault(_getIterator2);

exports.searchParse = searchParse;
exports.searchStringify = searchStringify;
exports.searchExtend = searchExtend;

var _changlinUtil = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 解析window.location.search
 *
 * @param {string} search
 * @example
 *
 *
 * ```javascript
 *searchParse('?c=4&b=5')//=>{c:4,b:5}
 * ```
 * @returns {object}
 */
function searchParse() {
    var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.search;

    if (!(0, _changlinUtil.isString)(search)) throw new Error('The first parameter of searchParse should be string. ');
    var result = {};
    if (/^\?/.test(search)) {
        search = search.substr(1);
    }
    var arr = search.split('&');
    arr.forEach(function (str) {
        var temp = str.split('=');
        if (temp.length === 1 || temp.length === 2) {
            result[temp[0]] = (0, _changlinUtil.isUndefined)(temp[1]) ? true : decodeURIComponent(temp[1]);
        }
    });
    return result;
}

/**
 * 将对象转为字符串，window.location.search格式 （注意返回字符串不含?）
 *
 * @param {object} object
 * @example
 *
 *
 * ```javascript
 *searchStringify({a:'1234'})//=>'a=1234'
 * ```
 * @returns {string}
 */
function searchStringify(object) {
    if (!(0, _changlinUtil.isObject)(object)) throw new Error('The first parameter of searchStringify should be object. ');
    var result = '';
    for (var p in object) {
        if ((0, _changlinUtil.isString)(object[p]) || (0, _changlinUtil.isNumber)(Object[p])) {
            result += '' + (result === '' ? '' : '&') + p + '=' + encodeURIComponent(object[p]);
        } else if ((0, _changlinUtil.isBoolean)(object[p]) && object[p]) {
            result += '' + (result === '' ? '' : '&') + p;
        }
    }
    return result;
}

/**
 * 合并所有参数，返回字符串 （注意返回字符串不含?）
 *
 * @param {object|string} arguments
 * @example
 *
 *
 * ```javascript
 *searchExtend('?a=3&b=4', {b:5}, {b:6,c:7})//=>'a=3&b=6&c=7'
 * ```
 * @returns {string}
 */

function searchExtend() {
    if (arguments.length === 0) {
        return;
    }
    var arr = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = (0, _getIterator3.default)(arguments), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var n = _step.value;

            if ((0, _changlinUtil.isObject)(n)) {
                arr.push((0, _changlinUtil.extend)(n));
            } else if ((0, _changlinUtil.isString)(n)) {
                arr.push(searchParse(n));
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    var obj = _changlinUtil.extend.apply(undefined, arr);
    var result = searchStringify(obj);
    return result;
}

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(100), __esModule: true };

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(45);
__webpack_require__(17);
module.exports = __webpack_require__(101);


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(7);
var get = __webpack_require__(44);
module.exports = __webpack_require__(1).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAbsoluteURL = getAbsoluteURL;

var _changlinUtil = __webpack_require__(10);

/**
 * 获取绝对URL
 * @param {string} location
 * @return {string}
 */
function getAbsoluteURL(location) {
  if (!(0, _changlinUtil.isString)(location)) throw new Error('The first parameter of getAbsoluteURL should be string. ');
  var a = document.createElement('A');
  a.href = location;
  return a.href;
}

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isWeiXin = isWeiXin;
exports.isAndroid = isAndroid;
exports.isIOS = isIOS;
var browser = {
    versions: function () {
        var u = navigator.userAgent;
        return {
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1,
            iPad: u.indexOf('iPad') > -1,
            weixin: u.toLowerCase().match(/MicroMessenger/i) == 'micromessenger'
        };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
};

/**
 * 判断是否为微信浏览器
 * @return {boolean}
 */
function isWeiXin() {
    return browser.versions.weixin;
}

/**
 * 判断是否为安卓端
 * @return {boolean}
 */
function isAndroid() {
    return browser.versions.android;
}

/**
 * 判断是否为IOS端
 * @return {boolean}
 */
function isIOS() {
    return browser.versions.ios;
}

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;

/**
 * addEventListener
 * @function
 *
 * @param {object} el
 * @param {string} type
 * @param {function} fn
 * @param {boolean} useCapture
 * @returns {undefined}
 */
function addEventListener(el, type, fn) {
  var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  el.addEventListener(type, fn, useCapture);
}

/**
 * removeEventListener
 * @function
 *
 * @param {object} el
 * @param {string} type
 * @param {function} fn
 * @param {boolean} useCapture
 * @returns {undefined}
 */
function removeEventListener(el, type, fn) {
  var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  el.removeEventListener(type, fn, useCapture);
}

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hasTransition = undefined;
exports.cssPrefix = cssPrefix;
exports.css = css;

var _changlinUtil = __webpack_require__(10);

var style = document.createElement('div').style;

var cssPrefixes = ["Webkit", "Moz", "ms"];

var cssPropsMap = {};

/**
 * Support transition
 */

var hasTransition = exports.hasTransition = cssPrefix('transition') in style;

/**
 *prefix css
 * @param {string} key
 * @returns {string}
 */

function cssPrefix(key) {
    if (key in cssPropsMap) {
        return key;
    }
    var tempKey = key;
    if (!(key in style)) {
        var temp = (0, _changlinUtil.firstUpperCase)(key);

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

/**
 * set or get style
 * @param {object} el
 * @param {string} key
 * @param {string} value
 * @returns {string}
 */

function css(el, key, value) {
    var tempKey = void 0;
    tempKey = cssPrefix(key);
    if (value !== undefined) {
        return el.style[tempKey] = value;
    }
    return el.style[tempKey];
}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


/**
* @function
* @param {function} callback
* @return {number}
*
* */
var requestAnimationFrame = exports.requestAnimationFrame = function () {
    var time = 16.66666666666666;
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
        return setTimeout(callback, time);
    };
}();

/**
* @function
* @param {number} id
* @return {undefined}
*
* */
var cancelAnimationFrame = exports.cancelAnimationFrame = window.cancelAnimationFrame || function (id) {
    clearTimeout(id);
};

/***/ })
/******/ ]);