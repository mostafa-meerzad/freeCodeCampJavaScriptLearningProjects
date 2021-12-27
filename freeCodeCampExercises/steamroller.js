function steamrollArray(arr) {
    let result = [];

    function flattingArr(arr, resArr) {
        for (let i = 0; i < arr.length; i++) {
            if (!Array.isArray(arr[i])) {
                resArr.push(arr[i])
            } else if (Array.isArray(arr[i])) {
                // arr[i] pass this to the same algorithm
                flattingArr(arr[i], resArr)
            }
        }
    }

    flattingArr(arr, result)

    return result

}

console.log(steamrollArray([1, [2], [3, [[4]]]]));

// let arr = [1, [2], [[4], [[4]]]];
//
// console.log(result)
