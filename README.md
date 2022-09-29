# 110 lines of condensed code.
# 110行代码实现的超精简js类型判断工具
 - 本项目基于日常研发总结，部分较为优秀的实现来自于其他项目的源代码。

# Function Inside
```javascript
"is"
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

# Usage
- Please use `npm/yarn` install this package
```shell
npm i isbox --save
# or
yarn i isbox --save
```
- `import` or `require` what you need
```javascript
// in node.js
const isbox = require('isbox')
isbox.isWindow(window)
// false
isbox.isWindow(null)
// false
isbox.isWindow('')
// false

// in frontend
import { isWindow } from 'isbox'

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
import { is } from 'isbox'

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
console.log(isbox.isServer)
// true

// 在浏览器环境执行
// execute in Broswer env
console.log(isbox.isServer)
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
console.log(isbox.isClient)
// false

// 在浏览器环境执行
// execute in Broswer env
console.log(isbox.isClient)
// true

```

## "isNumber"
```javascript
// in node.js
const isbox = require('isbox')
isbox.isNumber(NaN)
// true
isbox.isNumber(123)
// true
isbox.isNumber(null)
// false
isbox.isNumber('')
// false

import { isNumber } from 'isbox'

isNumber(123)
// true
isNumber(null)
// false
isNumber('')
// false
```
## "isObject"
```javascript
import { isObject } from 'isbox'

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
import { isEmpty } from 'isbox'

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
