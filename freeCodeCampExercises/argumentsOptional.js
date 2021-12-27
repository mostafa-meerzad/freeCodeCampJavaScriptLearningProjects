//ToDo
// it has to add two numbers passed as arguments and return the sum
// it has to check if each of arguments are actual numbers otherwise return undefined and stop the program
// it has to check if one or two arguments passed more are ignored
// if only one provided return a function that uses that number and expects a number to then add it
//
//
function addTogether(num1, num2) {
    console.log('>>>', typeof num2)
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    } else if (typeof num1 === 'number' && num2 === undefined) {
        return function (num3) {
            if (typeof num3 !== 'number') {
                return undefined
            } else
                return num1 + num3
        }
    } else if (typeof num1 === 'number' && typeof num2 !== 'number') {
        return undefined
    } else {
        return undefined
    }

}

console.log(addTogether(2, 3))
console.log(addTogether(3)(2))
console.log(addTogether(2, "3"))