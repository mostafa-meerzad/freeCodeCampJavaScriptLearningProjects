//ToDo
// find missing letters of given str
// if found return that letter
// otherwise return undefined
function fearNotLetter(str) {
    let foundLetter;
    for (let i = str.charCodeAt(0); i <= str.charCodeAt(str.length - 1); i++) {
        // console.log(i)
        // console.log(str.includes(String.fromCharCode(i)))
        if (!(str.includes(String.fromCharCode(i)))) {
            foundLetter = String.fromCharCode(i)
        }
    }
    return foundLetter
    // return str
    // console.log('this is found letter ' + fundLetter)
}

// console.log(fearNotLetter('abcd'))
// console.log(fearNotLetter('abd'))
console.log(fearNotLetter('abce'))
