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