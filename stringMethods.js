let testString = "this is a simple string to test and learn regular expresion this is gonna be " +
        "a useful string but may be not complete string to learn and test regex" +
        "This Is A Capitalized Case String" +
        "THIS IS A UPPERCASE STRING"+
        "big bug bag bog beg bfg" +
        "1 2 3 4 5 6 7 2 3 12 12 22 334 " +
        "abc aabc aaabc abab abcda bcd bdsa" +
        "g goo gooo good not good"+
        "bye";

console.log(testString.length)
console.log(testString.indexOf('to', 30))
console.log(testString.lastIndexOf('expresion', 4))
console.log(testString.lastIndexOf('this', 200))
console.log('------------')
console.log(testString.search('to'))  // search can preform searches with regexp
let string2 = "Please locate where 'locate' occurs";
console.log(string2.search(/.+[srt]e/))
console.log(string2[0])
console.log(string2.slice(0, 6))  // end position is not included
console.log(string2.slice(-14, -8))  // negative values searches on string from the end
console.log('-------------------------')
console.log(string2.substring(7, 13))
console.log(string2.substring(-12))  // negative value not working in substring method
console.log(string2.substr(0, 6))
console.log(string2.substr(0)) // if you omit the second parameter (the length) substr will return the rest of string

let string3 = 'Please visit "microsoft" Microsoft is the best';
// let replacedString = string3.replace('microsoft', 'w3schools')
let replacedString = string3.replace(/microsoft/ig, 'w3schools')
// replace method by default does not replace globally
// replace method by default is case sensitive
console.log(replacedString)
console.log(string3)

let name = 'mostafa';
console.log(name)
console.log('--------------');
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.toLocaleUpperCase())// ???

console.log('------------------')
let last = 'meerzad';
console.log(name.concat(' ', last, ' additions', 'test', 'not ', 'last')) // concat method can accept several values
console.log(name)
console.log(name.concat(' ', last))
let strWithWhiteSpaces = '      this is just a string       .       ';
console.log(strWithWhiteSpaces)
// trim method removes white spaces
console.log(strWithWhiteSpaces.trim())  //both sides
console.log(strWithWhiteSpaces.trimRight())  //right side
console.log(strWithWhiteSpaces.trimLeft()) //left side
console.log(strWithWhiteSpaces.trimEnd()) // end
console.log(strWithWhiteSpaces.trimStart()) // start

console.log(name.charAt(0))
console.log(name.charCodeAt(0))
console.log(name.split()) // if separator is not defined the whole string is return in 0 index of an array
console.log(name.split(''))  // '' or "" separator will return an array of single characters
console.log(testString.split(''))
console.log(testString.split(' '))




