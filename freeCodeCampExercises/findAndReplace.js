function caseFinder(word) {
    const upper = [
        65, 66, 67, 68, 69, 70, 71, 72,
        73, 74, 75, 76, 77, 78, 79, 80,
        81, 82, 83, 84, 85, 86, 87, 88,
        89, 90
    ];
    const lower = [
        97, 98, 99, 100, 101, 102,
        103, 104, 105, 106, 107, 108,
        109, 110, 111, 112, 113, 114,
        115, 116, 117, 118, 119, 120,
        121, 122
    ]
    // check the first character where does it belong to

    if (upper.includes(word.charCodeAt(word[0]))) {
        return 1
    } else if (lower.includes(word.charCodeAt(word[0]))) {
        return 0
    } else {
        return undefined
    }
}


// console.log('name'.charCodeAt('name'[0]))
// console.log(caseFinder('1ame'))
// console.log('1bme'.charCodeAt('1bme'[0]))


function upperLower(word, casing) {
    // make
    let result;
    if (casing === 'upper') {
        result = word[0].toUpperCase() + word.slice(1)
    } else if (casing === 'lower') {
        result = word[0].toLowerCase() + word.slice(1)
    }

    return result
}

//
// console.log(upperLower('mostafa', 'upper'))
// console.log(upperLower('Mostafa', 'lower'))

function myReplace(str, before, after) {
    // str.replace()
    // return str.split(" ").indexOf(before)
    if (caseFinder(before) === 1) {
        return str.replace(before, upperLower(after, 'upper'))
    } else if (caseFinder(before) === 0) {
        return str.replace(before, upperLower(after, 'lower'))
    }

}

console.log(myReplace('A quick brown fox jumped over the lazy dog jumped', 'jumped', 'Leaped'))
