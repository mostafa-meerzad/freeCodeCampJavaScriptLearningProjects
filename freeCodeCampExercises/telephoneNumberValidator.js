function telephoneCheck(str) {
    const numberCount = str.match(/\d/g).length;
    let numberOfParentheses = 0;

    try {
        numberOfParentheses += str.match(/\(/g).length;
    } catch (TypeError) {
        numberOfParentheses += 0;
    }
    try {
        numberOfParentheses += str.match(/\)/g).length;
    } catch (TypeError) {
        numberOfParentheses += 0;
    }

    const regexInTenNum = /[ ()-]*\d{3}[ ()-]*\d{3}[ ()-]*\d{4}[)]?/;
    const regexParentheses = /^\([^()]+\)$/;
    const regexInElevenNum = /^1[ ()-]*\d{3}[ ()-]*\d{3}[ ()-]*\d{4}[)]?/;
    // console.log(regexInElevenNum.test(str))
    // console.log(regexParentheses.test(str))

    if (numberCount === 10) {
        if (numberOfParentheses === 2 && regexParentheses.test(str)) {
            // console.log("from numberOfParentheses === 2 && regexParentheses.test(str) ---> " + false);
            // console.log(false)
            return false
        } else if (numberOfParentheses % 2 !== 0) {
            // console.log('numberOfParentheses is odd so ----> false');
            // console.log(false)
            return  false
        } else return regexInTenNum.test(str);

            // console.log(false)
    } else if (numberCount === 11) {

        if (numberOfParentheses === 2 && regexParentheses.test(str)) {
            // console.log("from numberOfParentheses === 2 && regexParentheses.test(str) ---> " + false);
            // console.log(false)
            return false
        } else if (numberOfParentheses % 2 !== 0) {
            // console.log('numberOfParentheses is odd so ----> false');
            // console.log(false)
            return false
        } else return regexInElevenNum.test(str)
        //else if (regexInElevenNum.test(str)) {
        //             // console.log(true)
        //             return true
        //         } else {
        //             // console.log(false)
        //             return false
        //         }


    } else{
        return false
        // console.log(false)

    }
}

// telephoneCheck("555-555-5555");


// Some valid US phone numbers
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// let str = '1 555 555 5555';

// todo
// phone numbers should be separated by dash, space, parentheses or none
// numbers should be in length of 10 without country code and eleven with country code specified


// Some checking values
// telephoneCheck("555-555-5555")// should return a boolean.
//
console.log(telephoneCheck("1 555-555-5555"))// should return true.
// //
console.log(telephoneCheck("1 (555) 555-(5555)")) //should return true.
//
console.log(telephoneCheck("5555555555") )//should return true.

console.log(telephoneCheck("555-555-5555"))

console.log(telephoneCheck("(555)555-5555"))// should return true.

console.log(telephoneCheck("1(555)555-5555"))// should return true.
console.log('------------------------ true line ended ------------------------')
//
console.log(telephoneCheck("555-5555"))// should return false.
// //
console.log(telephoneCheck("5555555"))// should return false.
//

console.log(telephoneCheck("1 555)555-5555")) //should return false.

console.log('-------------- false line ended -----------------------------')
console.log(telephoneCheck("1 555 555 5555")) //should return true.

console.log(telephoneCheck("1 456 789 4444"))// should return true.
console.log('------------------------ true line ended ------------------------')

console.log(telephoneCheck("123**&!!asdf#")) ////should return false.

console.log(telephoneCheck("55555555"))// should return false.

console.log(telephoneCheck("(6054756961)"))// should return false.
// console.log('----------------------')

console.log(telephoneCheck("(605)4756961)"))// should return false.
// console.log('----------------------')

console.log(telephoneCheck("2 (757) 622-7382") )//should return false.
// // // //
console.log(telephoneCheck("0 (757) 622-7382") )//should return false.
// // //
console.log(telephoneCheck("-1 (757) 622-7382")) //should return false.
//
console.log(telephoneCheck("2 757 622-7382") )//should return false.

console.log(telephoneCheck("10 (757) 622-7382")) //should return false.  country code is wrong (should be 1 or not set)

console.log(telephoneCheck("27576227382") )// should return false.  country code should be 1 or not set
//
console.log(telephoneCheck("(275)76227382") )//should return false.
//
console.log(telephoneCheck("2(757)6227382"))// should return false.


//
console.log(telephoneCheck("2(757)622-7382")) //should return false.
//

console.log(telephoneCheck("555)-555-5555")) //should return false.
//
console.log(telephoneCheck("(555-555-5555") )//should return false.

console.log(telephoneCheck("(555)5(55?)-5555") )//should return false.

console.log(telephoneCheck("55 55-55-555-5") )//should return false
// console.log('-------------- false line ended -----------------------------')
