function diffArray(arr1, arr2) {
    // TO DO
    // find the elements that exist in arr1 or arr2 but not in both
    // change arrays into the same standard (same letter-casing )
    // iterate over first arr and check elements that is not in second arr
    // iterate over second arr and check elements that is not in first arr
    function makeStandard(arr) {
        let standard = [];

        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'string') {
                standard.push(arr[i].toLowerCase())
            } else {
                standard.push(arr[i])
            }
        }
        return standard
    }

    let firstStandardArr = makeStandard(arr1)
    let secondStandardArr = makeStandard(arr2)

    let diff = []

    function differ(arr1, arr2, result) {

        for (let i = 0; i < arr1.length; i++) {
            if (!(arr2.includes(arr1[i]))) {
                result.push(arr1[i])
            }
        }
    }

    differ(firstStandardArr, secondStandardArr, diff)
    differ(secondStandardArr, firstStandardArr, diff)

    return diff
}

let arr = [1, 2, 3, 5, 4, 8];
let arr2 = [1, 2, 3, 5];
// console.log(9 in arr)
// console.log(arr[0])


console.log(diffArray(arr, arr2))
console.log('----------------------------------')
// console.log(5 in arr)
// for (let i=0; i<arr.length; i++){
//     console.log(arr[i])
//     console.log(typeof arr[i])
//     console.log(5 in arr)
// }
// console.log(arr.includes())
let names1 = ['mostafa', 'mosh', 'hasib', 'johan'];
let names2 = ['mostafa', 'mosh', 'Hasib', 'smith', 'james', 'jacob'];
console.log(diffArray(names1, names2))