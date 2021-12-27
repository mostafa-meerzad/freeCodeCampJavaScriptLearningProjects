//============================================   Where do I Belong   ==================================
// Return the lowest index at which a value (second argument) should be inserted into an
// array (first argument) once it has been sorted. The returned value should be a number.
//
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0),
// but less than 2 (index 1).
//
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will
// look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {
    let result;
    let max = arr[0];

    if (arr.length > 0){

    for(let i=0; i<arr.length; i++){
        if (arr[i] > max){
            max = arr[i]
        }

    arr = arr.sort((a,b)=>{return a-b})

    for (let i=0; i<arr.length; i++){

        }
        if(num > arr[i] && num < arr[i+1]){
            result = i+1
        }
        else if(num === arr[i]){
            result = i
        }
        else if (num > max){
            result = arr.indexOf(max) + 1
        }
    }
}
    else{
        result = 0
    }
    return result
    // console.log(result)
}


// console.log(getIndexToIns([10, 20, 30, 40, 50], 60))
//=========================== tests ===========================
getIndexToIns([10, 20, 30, 40, 50], 35) //should return 3.
//
// Passed
// getIndexToIns([10, 20, 30, 40, 50], 35) should return a number.
//
// Passed
getIndexToIns([10, 20, 30, 40, 50], 30) //should return 2.
//
// Passed
// getIndexToIns([10, 20, 30, 40, 50], 30) should return a number.
//
// Passed
getIndexToIns([40, 60], 50)// should return 1.
//
// Passed
// getIndexToIns([40, 60], 50) should return a number.
//
getIndexToIns([3, 10, 5], 3) //should return 0.
//
// getIndexToIns([3, 10, 5], 3) should return a number.
//
getIndexToIns([5, 3, 20, 3], 5) //should return 2.

//
console.log('THE DIFFICULT PART')
// Passed
// getIndexToIns([5, 3, 20, 3], 5) should return a number.
//
// Passed
getIndexToIns([2, 20, 10], 19) //should return 2.
//
// Passed
// getIndexToIns([2, 20, 10], 19) should return a number.
//
// Passed
getIndexToIns([2, 5, 10], 15) //should return 3.
//
// Passed
// getIndexToIns([2, 5, 10], 15) should return a number.
//
getIndexToIns([], 1)// should return 0.
//
// getIndexToIns([], 1) should return a number.
//
// 78910111213141516171819202122232425
//     else if(num > sortedArr[i]){
//       result = i + 1
//       console.log(i)
//     }
//
//   }
//   return result
//
//   // return result;
// }
//
// 1
// if ('') {
//     console.log('true')
// }
console.log('----------------------------')
let arr = [];
for (let i=0; i<arr.length; i++){
    console.log(i)
}