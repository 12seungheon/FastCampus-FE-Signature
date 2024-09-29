## Ch 02  JS 데이터

String

```js
const string1 = "Hello"
const string2 = 'Hello'
const string3 = `Hello ${string1} ?!`
// 백틱에 ${} 안에 데이터 채워 넣을 수 있음 : 템를릿 리터럴

console.log(string3)
```

Number
```js
const number = -123.1234
const pi = .14

console.log(number + 1)
console.log(pi)
console.log(typeof (number + undefined))

const a = 0.1
const b = 0.2

console.log(Number((a + b).toFixed(1)))  // 0.3

```

boolean

```js
const a = true
const b = false

if (a) {
    console.log('hello')
}
// hello , b일때는 false라 안나옴

let age = null

console.log(age)

setTimeout(function () {
    age = 85
    console.log(age)
}, 1000)

// null 1초후 85

let age = undefined

console.log(age)

setTimeout(function () {
    age = 85
    console.log(age)
}, 1000)

// undefined 1초후 8
// undefined 변수에 값이 할당이 되어있지 않은 상태

const user = {
    name: 'HEROPY',
    age: 85,
    email: null
}

console.log(user.name)      // heropy
console.log(user.age)      // 85
console.log(user.email)   // null
console.log(user.abc)   // undefined
```

Array

```js
const fruits = ['Apple', 'Banana', 'Cherry']  // 배열 리터럴

console.log(fruits)
console.log(fruits.length)
console.log(fruits[2])  // Cherry

```

Object(객체)

```js
const user = new Object()
user.name = 'herropy'
user.age =  85

console.log(user)

function User() {
    this.name = 'herropy'
    this.age = 85
}

const user = new User()

console.log(user)

const user = {
    name: 'herropy',
    age: 85,
    age: 22    
}

const key = 'name'

console.log(user) 
console.log(user.name)       // 점표기법
console.log(user['name'])    // 대괄호기법
console.log(user[key])       // 대괄호기법

// 이렇게 만드는게 가장 좋음

const userA = {
    name: 'herropy',
    age: 85
}

const userB = {
    name: 'herropy',
    age: 22,
    parent: userA
}

console.log(userB.parent.name)
console.log(userB['parent']['name'])

const users = [userA, userB]

console.log(users[0]['name'])
```

Function
```js
// function getNumber() {
//     return 123
// }

const getNumber = function () {
    return 123
}

console.log(typeof getNumber())

const a = function () {
    console.log('A')
}

const b = function (c) {
    console.log(c)
    c()
}

b(a)
```

형 변환

```js
const a = 1      //number
const b = '1'    //String

console.log( a === b)

// === 일치(타입까지 비교)  ,  == 동등

const a = true
const b = 1  

console.log( a == b)
```

참과 거짓

```js
// // 1) false
// // 2) 0
// // 3) null
// // 4) undefined
// // 5) NaN
// // 6) ''


// if (NaN) {
//     console.log('참!')
// }

const fruits = ['apple', 'banana']

if (fruits.length) {
    console.log('아이템이 들어있음!') 
}

// 아이템이 들어있음!
```

데이터 타입 확인

```js
// const a = 123

// console.log(typeof a)

console.log(typeof 'hello' === 'string')
console.log(typeof 123 === 'number')
console.log(typeof false === 'boolean')
console.log(typeof null === 'object')
console.log(typeof [] === 'object')
console.log(typeof {} === 'object')
console.log(typeof function () {} === 'function')


// console.log(null.constructor)   
console.log([].constructor === Array)
console.log({}.constructor === Object)

console.log(Object.prototype.toString.call(null))  // [Objsect Null]
console.log(Object.prototype.toString.call(null).slice(8, -1) === 'Null')

function checkType(data) {
    return Object.prototype.toString.call(data).slice(8, -1)
}

console.log(checkType('Hello'))
console.log(checkType(123))
console.log(checkType(false))
console.log(checkType(undefined))
console.log(checkType(null))
console.log(checkType([]))
console.log(checkType({}))
```

---

## Ch 03 연산자와 구문

산술

```js
console.log(1 + 2)
console.log(5 - 7)
console.log(3 * 4)
console.log(10 / 2)
console.log(7 % 5)

function isEven(num) {
    return num % 2 === 0
}

console.log(isEven(3))      // false
console.log(isEven(12))     // true


```

할당 

```js
let a = 3

// a = a + 2
a %= 2

console.log(a)

```

증감

```js
let a = 3

a += 1

console.log(++a) //5
console.log(--a) //4
console.log(a)   //3
```

부정 

```js
console.log(!true)
console.log(!false)

console.log(!0)   // true
console.log(!!0)  // false
console.log(!!!0) // true

console.log(!{})  // false
console.log(![])  // false
```

비교

```js
const a = 1
const b = 3

console.log( a == b )   // false

console.log( a != b )   // true

console.log( a === b )  // false

console.log( a !== b )   // true

console.log( a > b )   // false

console.log( a >= b )   // false

```

논리 

```js
// AND 연산자

const a = true
const b = true

if (a && b) {
    console.log('모두가 참!')
}

// OR(또는) 연산자

if (a || b) {
    console.log('하나 이상이 참!')
}

console.log(true && false)   // false
console.log(1 && 0)          // 0
console.log(1 && 2 && 0)     // 0
console.log(1 && 0 && 2)     // 0
console.log('A' && 'B' && '')
console.log('A' && 'B' && 'C')

console.log(false || true)  // true
console.log(0 || 1)    // 1
console.log(false || 0 || {})  // {}
console.log(false || [] || null)  // {}
console.log(false || 0 || NaN)  // NaN

```

병합

```js
const n = 0

const num1 = n || 7

console.log(num1)  // 7

// Nullish 병합 연산자 사용헌 경유
const num2 = n ?? 7
console.log(num2)  // 0

console.log(null ?? 1)  // 1
console.log(undefined ?? 2)  // 2
console.log(null ?? undefined)  // undefined
console.log(null ?? 1 ?? 2) // 1
console.log(false ?? 1 ?? 2)  // false
console.log(0 ?? 1 ?? 2)  // 0
``` 

삼항

```js
// 삼항

const a = 1

if (a < 2) {
    console.log('참!')
} else {
    console.log('거짓...')
}

// 삼항 연산자
// 조건 ? 참 : 거짓
console.log(a < 2 ? '참!' : '거짓...')  // 참


function getAlert(message) {
    message ? message : '메시지가 존재하지 않습니다.'
}

console.log(getAlert('안녕하세요~'))
console.log(getAlert(''))


```

전개 연산자

```js
const a = [1, 2, 3]
const b = [4, 5, 6]

const c = a.concat(b)
console.log(c)

const d = [...a, ...b]
console.log(d)  // [1, 2, 3, 4, 5, 6]

const a = { x: 1, y: 2}
const b = { y: 3, z: 4}

const c = Object.assign({}, a, b)

console.log(c) // {x: 1, y: 3, z: 4}

const d = {...a, ...b}
console.log(d)  // { x: 1, y: 3, z: 4}

function fn(x, y, z) {
    console.log(x, y, z)
}

fn(1, 2, 3)

const a = [1, 2, 3]

fn(...a) // 1 2 3
```

구조 분해 할당

```js

let b = 0
let c = 0

const arr = [1, 2, 3];
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]

[, , c] = arr

console.log(c) //  1 2 3

const arr = [1, 2, 3]
const [a, ...rest] = arr

console.log(a, rest)  // 1 [2, 3]

const obj = {
    a: 1,
    b: 2,
    c: 3,
    x: 7,
    y: 100
}

const { x = 4, a: heropy, y: ten = 10 } = obj
console.log(x, heropy, ten)  // 7 1 100

const obj = {
    a: 1,
    b: 2,
    c: 3,
    x: 7,
    y: 100
}

const { c, ...rest } = obj

console.log(c, rest)  
```

선택적 체이닝

```js
// const user = undefined

// console.log(user?.name)  // undefined

const userA = {
    name: 'heropy',
    age: 26,
    address: {
        country: 'korea',
        city: 'seoul'
    }
}

const userB = {
    name: 'Neo',
    age: 22
}

function getCity(user) {
    return user.address?.city || '주소 없음.'
}

console.log(getCity(userA))
console.log(getCity(userB))   // undefined
```