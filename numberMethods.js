let num1 = '23';
let num2 = '23';
console.log(num1 + num2) // string concatenation
// numeric operations are preformed
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 - num2)
//-----------------------------------
// adding numbers and strings

let num3 = 100;
console.log(num3 + num1)  // string concatenation
// numeric operations are preformed
console.log(num1 - num3)
console.log(num1 * num3)
console.log(num1 / num3)

console.log(num3 - num1)
console.log(num3 * num1)
console.log(num3 / num1)
// Infinity and -Infinity

console.log(num3 / 0)
console.log(typeof NaN)  //NaN is number!!!
console.log(typeof Infinity)  // Infinity is number too
console.log('-------------------------')
// toString method returns the result as string
// You can convert numbers from one system to another system using toString method
// toString method takes a radix and it will convert the number to that numeric system

console.log(num3.toString(10))
console.log(num3.toString(8))
console.log(num3.toString(2))
console.log(num3.toString(16))
console.log(typeof num3.toString())
// toExponential method returns a string rounded and written in exponential notation
// takes a number that defines the number of characters after decimal point
console.log(3.3223.toExponential(3))
console.log(3.3223.toExponential(4))
console.log(3.3223.toExponential(0))
console.log(3.3223.toExponential())

//toFixed method returns a string, with the number written with a specified number of decimals
console.log(2.444333.toFixed(4))
console.log(2.444333.toFixed(3))
console.log(2.444333.toFixed(1))
// toPrecision method returns a string with the specified length
console.log(2.444333.toPrecision(2))
console.log(2.444333.toPrecision(1))
console.log(2.444333.toPrecision(5))
console.log(2.444333.toPrecision())