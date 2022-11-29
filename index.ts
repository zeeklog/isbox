/* eslint-disable */
/**
 * This is a light javascript types tools.
 * Can usr for Nodejs and Browser.
 * You can use require('typest') or import typest from 'typest'.
 * Author: Neo 2022-11-07 neo@usd.dog
 * **/

const toString = Object.prototype.toString
/**
 * @description Use for comparing the javascript types.
 * @param val any [type value]
 * @param type String [The type you want to compare, support all baseic javascript type, like: Array/Boolean/Object/Date/Number/Promise & etc.]
 * @return Boolean Boolean [the boolean true/false you need]
 * **/
export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`
}

/**
 * @name isMobileNumber
 * @description If the arg is Mobile Number.
 * @param val any [type value]
 * @return Boolean Boolean [the boolean true/false you need]
 * **/
export function isMobileNumber(val: any) {
  const reg = /(0|86|17951)?(13[0-9]|15[4]|17[678]|18[0-9]|14[57]|19[0-9]|16[0-9])[0-9]{8}$/;
  return reg.test(val)
}

/**
 * @description If the arg is exists.
 * @param val any [type value]
 * @return Boolean Boolean [the boolean true/false you need]
 * **/
export function isDef<T = unknown>(val?: T): val is T {
  return typeof val !== 'undefined'
}

/**
 * @description If the arg is not exists.
 * @param val any [type value]
 * @return Boolean Boolean [the boolean true/false you need]
 * **/
export function isUnDef<T = unknown>(val?: T): val is T {
  return !isDef(val)
}

/**
 * @description If the arg is Object TYPE.
 * @param val any [type value]
 * @return Boolean Boolean [the boolean true/false you need]
 * **/
export function isObject(val: any): val is Record<any, any> {
  return val !== null && is(val, 'Object')
}

/**
 * @description If the arg is empty.
 * @param val any [type value]
 * @return Boolean Boolean [the boolean true/false you need]
 * **/
export function isEmpty<T = unknown>(val: T): val is T {
  if (isString(val)) {
    return val.length === 0
  }

  // @ts-ignore
  if (val instanceof Map || val instanceof Set) {
    // @ts-ignore
    return val.size === 0
  }
  // @ts-ignore
  if (val && val.constructor === Array) {
    // @ts-ignore
    return val.length === 0
  }
  if (isObject(val)) {
    // @ts-ignore
    return Object.keys(val).length === 0
  }
  return isNullOrUnDef(val)
}

/**
 * @description If the arg is not empty.
 * @description Means: not null or not undefined or is Number or is not empty ...
 * @param val any [type value]
 * @return Boolean Boolean [the boolean true/false you need]
 * **/
export function isNotEmpty(val: unknown) {
  return !isEmpty(val)
}


/**
 * @description If the arg is Date TYPE.
 * @param val any [type value]
 * @return Boolean Boolean [the boolean true/false you need]
 * **/
export function isDate(val: unknown): val is Date {
  return is(val, 'Date')
}
/**
 * @description If the arg is null TYPE.
 * @param val any [type value]
 * @return Boolean Boolean [the boolean true/false you need]
 * **/
export function isNull(val: unknown): val is null {
  return val === null
}

/**
 * @description If the arg is  null TYPE && undefined TYPE.
 * @param val any [type value]
 * @return Boolean Boolean [the boolean true/false you need]
 * **/
export function isNullAndUnDef(val: unknown): val is null | undefined {
  return isUnDef(val) && isNull(val)
}

/**
 * @description If the arg is  null TYPE or undefined TYPE.
 * @param val any [type value]
 * @return Boolean Boolean [the boolean true/false you need]
 * **/
export function isNullOrUnDef(val: unknown): val is null | undefined {
  return isUnDef(val) || isNull(val)
}

/**
 * @description If the arg is Number TYPE.
 * @param val any [type value]
 * @return Boolean Boolean [the boolean true/false you need]
 * **/
export function isNumber(val: unknown): val is number {
  return is(val, 'Number')
}

/**
 * @description If the arg is Promise TYPE.
 * @param val any [type value]
 * @return Boolean Boolean [the boolean true/false you need]
 * **/
export function isPromise<T = any>(val: unknown): val is Promise<T> {
  return (
      is(val, 'Promise') &&
          isObject(val) &&
          isFunction(val.then) &&
          isFunction(val.catch)
      )
}

/**
 * @description If the arg is String TYPE.
 * @param val any [type value]
 * @return Boolean Boolean [the boolean true/false you need]
 * **/
export function isString(val: unknown): val is string {
  return is(val, 'String')
}

/**
 * @description If the arg is Function TYPE.
 * @param val any [type value]
 * @return Boolean Boolean [the boolean true/false you need]
 * **/
export function isFunction(val: unknown): val is Function {
  return typeof val === 'function'
}

/**
 * @description If the arg is Boolean TYPE.
 * @param val any [type value]
 * @return Boolean Boolean [the boolean true/false you need]
 * **/
export function isBoolean(val: unknown): val is boolean {
  return is(val, 'Boolean')
}

/**
 * @description If the arg is Regexp TYPE.
 * @param val any [type value]
 * @return Boolean Boolean [the boolean true/false you need]
 * **/
export function isRegExp(val: unknown): val is RegExp {
  return is(val, 'RegExp')
}

/**
 * @description If the arg is Array TYPE. Base on Array prototype.
 * @param val any [type value]
 * @return Boolean Boolean [the boolean true/false you need]
 * **/
export function isArray(val: any): val is Array<any> {
  return val && Array.isArray(val)
}

/**
 * @description If the arg is Window TYPE.
 * @param val any [type value]
 * @return Boolean Boolean [the boolean true/false you need]
 * **/
export function isWindow(val: any): val is Window {
  return typeof window !== 'undefined' && is(val, 'Window')
}

/**
 * @description If the arg is Dom Element TYPE.
 * @param val any [type value]
 * @return Boolean Boolean [the boolean true/false you need]
 * **/
export function isElement(val: unknown): val is Element {
  return isObject(val) && !!val.tagName
}

/**
 * @description If the arg is Sever Environment.
 * @param val any [type value]
 * @return Boolean Boolean [the boolean true/false you need]
 * **/
export function isServer(val: unknown): val is Element {
  return !isWindow(val)
}

/**
 * @description If the arg is Browser environment.
 * @param val any [type value]
 * @return Boolean Boolean [the boolean true/false you need]
 * **/
export const isClient = !isServer

/**
 * @description If the arg is valid Url. Using Regexp test.
 * @param path any [type value]
 * @return Boolean Boolean [the boolean true/false you need]
 * **/
export function isUrl(path: string): boolean {
  const reg =
      /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/
  return reg.test(path)
}


/**
 * @name Browser
 * @description Only use for Browser Environment.
 * **/
const Browser = {}
function isNavigatorType(type: any, callback: Function, args: any) {
    if (typeof navigator === 'undefined') {
        return false
    }
    if (isArray(type)) {
        const bool = type.map(item => {
            return navigator.userAgent.indexOf(item) !== -1
        })
        return bool.includes(true) && (callback && callback(args))
    } else if (isString(type)) {
        return navigator.userAgent.indexOf(type) !== -1 && (callback && callback(args))
    } else {
        throw `type must be Array or String but got ${typeof type}`
    }
}

/**
 * @description Is Ios Device.
 * @return Boolean Boolean [the boolean true/false you need]
 * **/
Browser.isIeBrowser = isNavigatorType('Trident')

/**
 * @description Is Weixin Browser.
 * @param val any [type value]
 * @return Boolean Boolean [the boolean true/false you need]
 * **/
Browser.isWeixin = isNavigatorType('MicroMessenger')

/**
 * @description Is Apple Device.
 * @param val any [type value]
 * @return Boolean Boolean [the boolean true/false you need]
 * **/
Browser.isApple = isNavigatorType('AppleWebKit')

/**
 * @description Is Android Device .
 * @param val any [type value]
 * @return Boolean Boolean [the boolean true/false you need]
 * **/
Browser.isAndroid = isNavigatorType(['Android', 'Adr'])
export const $Browser = Browser
