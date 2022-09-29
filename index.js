"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUrl = exports.isClient = exports.isServer = exports.isElement = exports.isWindow = exports.isArray = exports.isRegExp = exports.isBoolean = exports.isFunction = exports.isString = exports.isPromise = exports.isNumber = exports.isNullOrUnDef = exports.isNullAndUnDef = exports.isNull = exports.isDate = exports.isNotEmpty = exports.isEmpty = exports.isObject = exports.isUnDef = exports.isDef = exports.is = void 0;
/* eslint-disable */
var toString = Object.prototype.toString;
function is(val, type) {
    return toString.call(val) === "[object ".concat(type, "]");
}
exports.is = is;
function isDef(val) {
    return typeof val !== 'undefined';
}
exports.isDef = isDef;
function isUnDef(val) {
    return !isDef(val);
}
exports.isUnDef = isUnDef;
function isObject(val) {
    return val !== null && is(val, 'Object');
}
exports.isObject = isObject;
function isEmpty(val) {
    if (isString(val)) {
        return val.length === 0;
    }
    // @ts-ignore
    if (val instanceof Map || val instanceof Set) {
        // @ts-ignore
        return val.size === 0;
    }
    // @ts-ignore
    if (val && val.constructor === Array) {
        // @ts-ignore
        return val.length === 0;
    }
    if (isObject(val)) {
        // @ts-ignore
        return Object.keys(val).length === 0;
    }
    return isNullOrUnDef(val);
}
exports.isEmpty = isEmpty;
function isNotEmpty(val) {
    return !isEmpty(val);
}
exports.isNotEmpty = isNotEmpty;
function isDate(val) {
    return is(val, 'Date');
}
exports.isDate = isDate;
function isNull(val) {
    return val === null;
}
exports.isNull = isNull;
function isNullAndUnDef(val) {
    return isUnDef(val) && isNull(val);
}
exports.isNullAndUnDef = isNullAndUnDef;
function isNullOrUnDef(val) {
    return isUnDef(val) || isNull(val);
}
exports.isNullOrUnDef = isNullOrUnDef;
function isNumber(val) {
    return is(val, 'Number');
}
exports.isNumber = isNumber;
function isPromise(val) {
    return (is(val, 'Promise') &&
        isObject(val) &&
        isFunction(val.then) &&
        isFunction(val.catch));
}
exports.isPromise = isPromise;
function isString(val) {
    return is(val, 'String');
}
exports.isString = isString;
function isFunction(val) {
    return typeof val === 'function';
}
exports.isFunction = isFunction;
function isBoolean(val) {
    return is(val, 'Boolean');
}
exports.isBoolean = isBoolean;
function isRegExp(val) {
    return is(val, 'RegExp');
}
exports.isRegExp = isRegExp;
function isArray(val) {
    return val && Array.isArray(val);
}
exports.isArray = isArray;
function isWindow(val) {
    return typeof window !== 'undefined' && is(val, 'Window');
}
exports.isWindow = isWindow;
function isElement(val) {
    return isObject(val) && !!val.tagName;
}
exports.isElement = isElement;
exports.isServer = typeof window === 'undefined';
exports.isClient = !exports.isServer;
function isUrl(path) {
    var reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
    return reg.test(path);
}
exports.isUrl = isUrl;
//# sourceMappingURL=index.js.map