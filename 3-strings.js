/**
 * We want to be able to "write text"
 * (And a bit of coercion, casting/conversion, search)
 */

/**
 * single quotes: ''
 * double quotes: ""
 * backticks: ``
 * new String()
 */

// "I'll go there"
// Advantages of backticks
// Multi-line
let paragraph = `
Dear Js,
Thank you for allowing us to do multiples paragraphes.
Sincerely.`
let myName = "Florian"
//  Concatenation
const helloToYou = "Hello " + myName + "!"
//  Template literal
const helloAgain = `Hello ${myName}!`

// index in Strings

console.log(myName[myName.length - 1])
console.log(myName.at(-1))

/**
 * Some available methods
 * length, upper / lower case, includes, replace, replaceAll ...
 */

console.log(myName.replace("o", 0))
console.log(myName)
myName[0] = "L"
console.log(myName)
myName = "L" + myName.slice(1)
console.log(myName)
console.log(myName.includes("L"))
console.log(myName.includes("a"))
// Immutability

// Comparing strings

console.log("a" < "z")
console.log("a" < "Z")
console.log("art" === "art")
const art = "art"
const butter = "Butter"
console.log(art.toLowerCase() < butter.toLowerCase())

console.log(2 == "2")
console.log(2 === "2")
//  !==
console.log(2 !== "2")

const unparsedText = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green"
const simpleSplit = "string splitting"
console.log(simpleSplit.split(" ").join(" hello "))
const separatedResult = unparsedText.split(":")
console.log(separatedResult)
