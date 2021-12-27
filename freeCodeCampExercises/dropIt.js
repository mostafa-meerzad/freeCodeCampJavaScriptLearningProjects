function dropElements(arr, func) {
  while(arr.length > 0){
      if (!func(arr[0])){
          arr.shift()
      }
      else
          break
  }
    console.log(arr)

    // while (arr.length > 0){
    //     if (!func(arr[0])){
    //         arr.shift()
    //     }
    //     else{
    //         console.log(arr)
    //         break
    //     }
    // }
    // console.log(arr)
    // while( arr.length > 0 && !func(arr[0])){
    //     arr.shift()
    // }
    // // console.log(result)
    // console.log(arr)
}

//
dropElements([1,2,3], function (n) {
return n > 0
})
dropElements([1,2,3,4], function (n) {
    return n >= 3
})
dropElements([0, 1 ,0, 1], function (n) {
    return n === 1
})
// console.log([1,2,3].concat([5,6,7,8].slice(1)))
//
// let arr = [1,2,3,4,5,6, 7, 8];
// for (let i=0; i<arr.length; i++){
//     console.log(arr.shift())
// }
// // console.log(arr.shift())
// // console.log(arr.shift())
// // console.log(arr.shift())
// // console.log(arr.shift())
// console.log(arr)
