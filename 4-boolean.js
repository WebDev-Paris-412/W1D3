/**
 * They are just true or false statements
 */

// True false table:

console.log(true && true)
console.log(true && false)
console.log(false && true && true)
console.log(false && false)

console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

/**
 * And: &&
 * Or: ||
 * Greater: >
 * Lesser: <
 * GreaterOrEqual: >=
 * LesserOrEqual: <=
 * Loose Equality: ==
 * Strict Equality: ===
 * Loose Unequality: !=
 * Strict Unequality: !==
 */

// Truthyness
console.log(Boolean(true))
console.log(Boolean(-2))
console.log(Boolean("string"))
console.log(Boolean([]))
console.log(Boolean({}))

console.log(Number(true))
console.log(Number(false))
// Falsiness

console.log(Boolean(false))
console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(NaN))
