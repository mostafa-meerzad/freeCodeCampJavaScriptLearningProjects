// every method checks every element of an array and returns a boolean "true" if all elements meet that criteria
// "false" if all elements of array does not meet that criteria

const testArr = [1, 2, 3, 0, 19, 12, 28];
console.log(testArr.every(function(item){
    // return typeof item === "number"
    return item < 10
}));

const numArr = [1, 2, 2, 4, 6, 8, 9, 12 , 12, 90];
console.log(numArr.every(function(num){
    return num > 0
}))
// some method works with arrays to check if any of values pass the test returns "true" if any of elements meet the
// criteria otherwise "false"
console.log(numArr.some(function(num){
    return num > 0
}))