# ✨ Light Javascript type tool: typest.
# ✨ 超精简js类型判断工具 Typest
 - 本项目基于日常研发总结，部分较为优秀的实现来自于其他项目的源代码。

# 🌟 Change log v1.0.5
```markdown
### ❤ NEW Feature:
- ✔ Add isMobileNumber support.
- ✔ Add `$Browser.isIeBrowser` support.
- ✔ Add `$Browser.isWeixin` support.
- ✔ Add `$Browser.isApple` support.
- ✔ Add `$Browser.isAndroid` support.
- 🐛 Fix some bugs

```
# 📖 Documentation
```javascript
"is"
"isMobileNumber" // +
"$Browser" // +
"isWindow"
"isNumber"
"isDef"
"isUnDef"
"isObject"
"isEmpty"
"isDate"
"isNull"
"isNullAndUnDef"
"isNullOrUnDef"
"isPromise"
"isString"
"isFunction"
"isBoolean"
"isRegExp"
"isArray"
"isWindow"
"isElement"
"isServer"
"isClient"
"isUrl"
```

## 🐉 Usage
- Please use `npm/yarn` install this package
```shell
npm i typest --save
# or
yarn i typest --save
```
#### Usage in Vue
```javascript
// in main.js：
Vue.prototype.$type = require('typest');
// use
this.$type.is([], 'Array')
// true
```

- `import` or `require` what you need
```javascript
// in node.js
const typest = require('typest')
typest.isWindow(window)
// false
typest.isWindow(null)
// false
typest.isWindow('')
// false

// in frontend
import { isWindow } from 'typest'

isWindow(window)
// true
isWindow(null)
// false
isWindow('')
// false
```


## "is"
- Example 1: Base on `call()`ing constructor
- 方法一： 基本数据类型判断，基于构造类名判断

```javascript
import { is } from 'typest'

is(123, 'Number')
// true
is(null, 'Null')
// true
is(null, 'Object')
// false
is([], 'Array')
// true
is([], 'Object')
// false
is('', 'String')
// true
is(new Set(), 'Set')
// true
```
- Example 2: Using `constructor` directly.
- 方法二： 通过判断`constructor`
```javascript
const arr = [1,2,3]
console.log(arr.constructor === Array)
// true
console.log(new Set().constructor === Set)
// true
```

## "isServer"
- 判断当前环境是不是服务端
- Check if this is server side.
- type: `Boolean`
- value: `true` or `false`
```javascript
// 在Nodeh环境执行
// execute in Node env
console.log(typest.isServer)
// true

// 在浏览器环境执行
// execute in Broswer env
console.log(typest.isServer)
// false

```
## "isClient"
- 判断当前环境是不是客户端，与isServer互相对立
- If current env is Client, is the `opposite` of `isServer`
- type: `Boolean`
- value: `true` or `false`
```javascript
// 在Nodeh环境执行
// execute in Node env
console.log(typest.isClient)
// false

// 在浏览器环境执行
// execute in Broswer env
console.log(typest.isClient)
// true

```

## "isNumber"
```javascript
// in node.js
const typest = require('typest')
typest.isNumber(NaN)
// true
typest.isNumber(123)
// true
typest.isNumber(null)
// false
typest.isNumber('')
// false

import { isNumber } from 'typest'

isNumber(123)
// true
isNumber(null)
// false
isNumber('')
// false
```
## "isObject"
```javascript
import { isObject } from 'typest'

isObject(123)
// false
isObject(null)
// true
isObject({a: 234})
// true
isObject('')
// false
```
## "isEmpty"
```javascript
import { isEmpty } from 'typest'

isEmpty(123)
// false
isEmpty({})
// true
isEmpty([])
// true
isEmpty('')
// true
```

## "isDate"
## "isNull"
## "isNullAndUnDef"
## "isNullOrUnDef"
## "isPromise"
## "isString"
## "isFunction"
## "isBoolean"
## "isRegExp"
## "isArray"
## "isWindow"
## "isElement"
## "isUrl"
## "isDef"
## "isUnDef"
