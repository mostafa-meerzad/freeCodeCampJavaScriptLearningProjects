let string = "this is a simple string to test and learn regular expresion this is gonna be " +
    "a useful string but may be not complete string to learn and test regex" +
    "This Is A Capitalized Case String" +
    "THIS IS A UPPERCASE STRING"+
    "big bug bag bog beg bfg" +
    "1 2 3 4 5 6 7 2 3 12 12 22 334 " +
    "abc aabc aaabc abab abcda bcd bdsa" +
    "g goo gooo good not good"+
    "bye";
let string2 = 'ah ahah baaaaaah baaahhh aaah';
// let regex = /simple|this/ig;
// let regex = /t../;
// let regex = /t..s/;
// let regex = /b[aiu]g/g;
// let regex = /[22-24]/;// recognized as redundant values
// let regex = /[0-9]/;// valid range of numbers
// let regex = /a+/g;
// let regex = /a+[a-z]*/g;
// let regex = /go*?o/g;
// let regex = /^t./g;
// let regex = /^t./g;
// let regex = /bye$/g;
// let regex = /ba{2,}h+/g;
// let regex = /a{2,5}?b/g;
let regex = /a{2,5}?b/g;
// string.match(regex) returns null if no matches found
// 'i' ignore case, 'g' globally search and match
// '|' or 'or' operator used to match more than one regex
// '&' or 'and' operator used to match several regex at once
// '.' called wildcard character used to match any character
// '[]' called character class used to give the regex multiple choices to search for
// '[x-y]' in this way we can specify a range of characters it can not accept more than one digital numbers like 10-20
// '[^something]' this called negated character set it does not match characters included
// '+' character is used to match a character that occurs one or more times
// '*' character is used to match a character that occurs zero or more times
// '?' this character is used to make a pattern lazy match meaning to match lowest possible matched
// '?' this character also makes a pattern match optional ( the match can exist or not exist )
// '^' caret character is used to match characters at the beginning of the string, it should be used at the beginning of pattern
// '$' dollar sign is used to find a match at the end of the string, it should be used at the end of pattern
// 'pattern{x, y}' quantity specifier used to define numbers of matches, 'x' is lower and 'y' is upper number number of previous
//  pattern matches
//  {x} is the exact number of matches
//  {x,} is the lower number of matches specified and matches more than x numbers of previous pattern


// let result = regex.test(string);  //regex.test(str)  returns true or false;
// console.log(result)
// let result = string.match(regex)// str.match(regex) returns an array that contains several useful infos;
let result = string.match(regex)
console.log(result)


//=========================== testing ===========================
// let testStr = "ccaabb CC CCCCC xaXZCCtc ccCdCD";
// let reg = /C+/g;
// let res = testStr.match(reg);
// console.log(res)

//
let userNames = "mostafa2021";
let a = 'mostafa201'
let b = '23mostafa'
let c = 'mostafaMeerzad'
let d = 'ma'
let regex2 = /^[a-z][a-z]+\d*$/i;
// let regex2 = /^[a-z][a-z]+\d*$/ig;
// console.log(userNames.match(regex2))
// console.log(a.match(regex2))
// console.log(b.match(regex2))
// console.log(c.match(regex2))
// console.log(d.match(regex2))