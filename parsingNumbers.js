let numString = "70923";
let parsedInt = parseInt(numString); // parseInt(str) picks and returns integer from the beginning of the string
let parsedFloat = parseFloat(numString); // parseFloat(str) picks and returns float from the beginning of the string
console.log(parsedInt)
console.log(parsedFloat)

//parseInt and parseFloat returns NaN if the string passed to the method is not starting with a number.

//parseInt takes a second argument that specifies the base (radix) for the number in the string being parsed
// and converts the number to integer.
console.log(parseInt('45', 16))