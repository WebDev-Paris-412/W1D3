/**
 * Let's talk about Math
 */

/**
 * Operators:
 * addition: +
 * substraction: -
 * multiply: *
 * division: /
 * powerof: **
 * modulo: %
 */

let result = 3 * (5 + 2)
//           3 * 7
//           21
//  result = 21

let remainder = 3 % 2

const amountOfSeconds = 2045

const amountOfMinutes = amountOfSeconds / 60
console.log(Math.floor(amountOfMinutes))
console.log(amountOfSeconds % 60)

console.log(Math.floor(4.7))
console.log(Math.ceil(4.2))
console.log(Math.round(4.5))
// Order of operations

/**
 * Shorthand math
 */

let total = 1
total = total + 2
console.log(total)
total += 2
console.log(total)
total *= 5
total /= 3
console.log(Math.floor(total * 100) / 100)
console.log(total.toFixed(2))
// Math constructor
// console.log(56532346754 > Infinity)
console.log(Math.PI)

// Getting a random number

console.log(Math.random())
const randomFloat = Math.random()
console.log(randomFloat)
const multipliedRandom = randomFloat * 100
console.log(multipliedRandom)
const actualRandomInt = Math.floor(multipliedRandom)
console.log(actualRandomInt)

const randomInt = Math.floor(Math.random() * 10)
console.log(randomInt)
const students = ["Evan", "Michaël", "Samara", "María", "Julien"]

const randomIndex = Math.floor(Math.random() * students.length)
console.log(students[randomIndex])

// Operations between numbers and Strings

console.log("2" + 1)
console.log("3" - 1)

console.log(Number((1 / 3).toFixed(2)) + 1)

console.log(Number("test"))
console.log(Number("4.532"))
// console.log("first" * 5)
console.log("hello" + " " + "class" + "!")

// const gettingANumber = numberAsAString * 1
// NaN
// Incrementing / Decrementing numbers

let increment = 1
// increment = increment + 1
// increment += 1
console.log(increment++)
console.log(increment)
increment--
