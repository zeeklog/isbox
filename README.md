# Function Inside
```javascript
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
npm i ibox --save
# or
yarn i ibox --save
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
## "isNumber"
```javascript
// in node.js
const isbox = require('isbox')
isbox.isNumber(123)
// true
isbox.isNumber(null)
// false
isbox.isNumber('')
// false

// in frontend
import { isNumber } from 'isbox'

isNumber(123)
// true
isNumber(null)
// false
isNumber('')
// false
```
## "isDef"
## "isUnDef"
## "isObject"
## "isEmpty"
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
## "isServer"
## "isClient"
## "isUrl"