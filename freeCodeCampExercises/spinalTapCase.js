function isUpper(char) {
    let upper = [
        65, 66, 67, 68, 69, 70, 71, 72,
        73, 74, 75, 76, 77, 78, 79, 80,
        81, 82, 83, 84, 85, 86, 87, 88,
        89, 90
    ]
    try {
        return upper.includes(char.charCodeAt(0))
    } catch (e) {
        return false
    }

}

function isLower(char) {
    let lower = [
        97, 98, 99, 100, 101, 102,
        103, 104, 105, 106, 107, 108,
        109, 110, 111, 112, 113, 114,
        115, 116, 117, 118, 119, 120,
        121, 122
    ]
    try {
        return lower.includes(char.charCodeAt(0))
    } catch (e) {
        // console.log('error ' + e);
        return false
    }

}

// console.log(isUpper('A'))
// console.log(isLower('a'))

function spinalCase(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        // console.log(i)
        let subArr = [];
        if (isUpper(str[i])) {
            // console.log(str1[i]);
            let a = i;
            do {
                subArr.push(str[a]);
                a++
            }
            while (isLower(str[a]))

        } else if ((/[,.\-_ ]/).test(str[i]) && (/[,.\-_ ]/).test(str[i - 1])) {
            continue

        } else if (str.indexOf(str[i]) === 0 || (/[,.\-_ ]/).test(str[i - 1])) {

            let a = i;
            do {
                subArr.push(str[a]);
                a++
            }
            while (isLower(str[a]))
        } else
            continue
        arr.push(subArr.join(''))

    }
    return (arr.map(item => item.toLocaleString())).join('-')
}


// console.log(spinalCase('This Is Spinal Tap'))
// let str = 'This Is Spinal Tap';
// let str1 = 'this is spinal tap';
// let str1 = 'this-is-spinal-tap';
// let str1 = 'this_is_spinal_tap';
// let str1 = 'thisIsSpinalTap';
// let str1 = 'ThisIsSpinalTap';
// let str1 = 'this,is,spinal,tap';
// let str1 = 'this.is.spinal.tap';
// let str1 = 'thisIs Spinal-tap';
    let str = 'This is SpinalTap';

console.log(spinalCase(str))
// console.log(arr)
// arr.map(item => item.toLowerCase())
// arr.join('-')
// console.log((arr.map(item => item.toLowerCase())).join('-'))