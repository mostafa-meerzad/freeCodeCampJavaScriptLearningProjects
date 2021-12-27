// TO DO
// An initial arr and some elements are passed

function destroyer(args) {
    let initArr = [...arguments][0];
    let elemToRemove = [...arguments].slice(1)
    // console.log(initArr)
    // console.log(elemToRemove)
    let result = [];

    for (var x in elemToRemove) {
        // console.log(initArr[x])
        // console.log("---> " + elemToRemove[x])
        for (var y in initArr) {
            // console.log(initArr[y])
            if (elemToRemove[x] === initArr[y]) {
                // console.log(`element found ---> ${elemToRemove[x]}`)
                result.push(elemToRemove[x])

            }

        }


    }
    // console.log('-------------------------------------');
    // console.log(result)
    // console.log(initArr.filter(item => !result.includes(item)))
    return initArr.filter(item => !result.includes(item))
}

// Find elements and remove them of initial array
let arr = [3,5,1,2,2];
console.log(destroyer(arr, 2, 3, 5))
// Use arguments method!
//=========================================================


// let arr = [1, 2, 3, 1, 2, 3];
// let elems = [2, 3]
// let a = {a:1, b:2, c:3}
// console.log(a.hasOwnProperty))
//
// for (x in elems){
//     if (arr.includes(elems[x])){
//         for (y in arr){
//             // console.log(arr[y])
//             console.log(arr.splice(arr.indexOf(elems[x]), 1))
//         }
//         // console.log(arr.includes(elems[x]))
//
//         // console.log(arr[x])
//         // for (let i=0; i< arr.length; i++){
//         //     arr.splice(elems.indexOf(elems[x], 1))
//         //     console.log(elems[x])
//         // }
//     }
//     console.log(`this is x -> ${x}`)
//
//     // arr.splice(elems.indexOf())
// }
//
// console.log(arr)