function convertToRoman(num) {
    // todo
    // break down the number into thousands, hundreds, tens and ones and keep them in order
    // iterate over divided number and find related ones
    // make new number in roman

    const basicRomanNums = {
        1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 10: 'X',
        20: 'XX', 30: 'XXX', 40: 'XL', 50: 'L', 60: 'LX', 70: 'LXX', 80: 'LXXX', 90: 'XC', 100: 'C',
        200: 'CC', 300: 'CCC', 400: 'CD', 500: 'D', 600: 'DC', 700: 'DCC', 800: 'DCCC', 900: 'CM', 1000: 'M'
    }
    const dividedNum = [];
    let strNum = num.toString(10);
    let zerosStartingIndex = 1;

    function strContentMaker(cont, contNum) {
        let content = '';
        for (let i = 0; i < contNum; i++) {
            content += cont
        }
        return content;
    }

    for (let i in strNum) {  // divide the number into it's subsequents
        let numOfZeros = strNum.slice(zerosStartingIndex, strNum.length).length; // get the number of zeros
        dividedNum.push(strNum[i] + strContentMaker('0', numOfZeros));
        zerosStartingIndex++;
        // console.log('x' * '3')
    }

    // make roman numbers
    let romanNums = [];
    for (let i in dividedNum) {

        if (dividedNum[i].length === 4 && dividedNum[i].length < 10) { // a potential bug (not to measure correctly)

            romanNums.push(strContentMaker(basicRomanNums[dividedNum[i] / dividedNum[i][0]], dividedNum[i][0]));
        } else if (dividedNum[i].length < 4) {
            romanNums.push(basicRomanNums[dividedNum[i]]);

        } else {
            console.log('under development!');
        }
    }
    // console.log(romanNums.join(''))
    return romanNums.join('')
}

console.log(convertToRoman(44))
// console.log(strContentMaker('er', 3))
// console.log(((num) =>{
//     let zeros = '';
//     for (let i = 0; i < num; i++){
//         zeros += '0'
//
//     }
//     return zeros
// })(0));


// let arr1 = [1,2,3,4,5];
// console.log(arr1)
// console.log(arr1.slice(0, 3));
// console.log(arr1)