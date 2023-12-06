/**
 * Welcome to JavaScript!
 */

/**
 * ? Primitive types:
 * numbers
 * string
 * boolean
 * null
 * undefined
 * out of the course :
 *  - BigInt
 *  - Symbol
 *
 * Non primitive type:
 * object
 * array
 * function
 *  */
// let Florian = 5
let myName = "Florian"
// const π = 3.14

/**
 * Constructors
 * new Array()
 * new Object()
 * new Number()
 * new Boolean()
 * new String()
 */

/**
 * Binary in a nutshell
 */
//16 8 4 2 1
// 0 0 0 0 0
// =>  0
// 0 0 0 0 1
// => 1
// 0 0 0 1 1
// 3
// 0 0 1 0 0
// 0 0 1 0 1
// 0 0 1 1 0

// 1 0 1 0 1
// 16  4   1
// 21
/**
 * Hexadecimal in a nutshell
 */
// F E D C B A 9 8 7 6 5 4 3 2 1 0

// What is a variable
/**
 * A box where we can store information
 */

// Assigning a value to a variable

let anEmptyVariable
console.log(anEmptyVariable)
//undefined
anEmptyVariable = 5
console.log(anEmptyVariable)
// 5
console.log("hi from quokka")

const anotherEmptyVariable = "hello",
	a = 5,
	b = "hi",
	multipleVariables = "So much Wow"
const casualGreeting = "Hi"
const formalGreeting = "Hello"
const texanGreeting = "Howdy"

// function sum(a, b) {
// 	return a + b
// }
// console.log(sum(5, 3))

// const vs let

// Assigning a new value to a variable / Reassigning

/**
 * Rules for naming variables:
 * - Should describe in a simple way what data is stored in it.
 */

// snake_case
let my_variable

// PascalCase
let MyVariable

// camelCase (JS)
let myNewVariable

// let kebab-case (Not usable in JS but widely used in HTML / CSS)

// let π = Math.PI

// typeof variables

let aNumber = 5.3
const isItSunny = true
const doWeLikeSun = "Yes"
console.log(typeof aNumber)
console.log(typeof isItSunny)
console.log(typeof doWeLikeSun)
console.log(typeof {})
console.log(typeof [])

// JS file is read from top to bottom

console.log(anUndeclaredVariable)
let anUndeclaredVariable = "Oopsies"

console.log("I won't be logged")
