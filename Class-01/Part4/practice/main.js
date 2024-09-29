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