function chunkArrayInGroups(arr, size) {
    let result = [];
    let times = arr.length
    for (let i=0; i<times; i++){
        let subResult = [];

        for (let y=0; y<size; y++){
            let x = arr.shift();
            if (x !== undefined){
                subResult.push(x)
            }
        }
        result.push(subResult)
    }

    function filterTheResult (arr){
        let result = [];
        for (let i=0; i<arr.length; i++){
            if (arr[i].length > 0){
                result.push(arr[i])
            }

        } return result
    }
console.log(filterTheResult(result));
}
// let x = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// for (let i=0; i<x.length; i++){
//     console.log(x.prototype.shift)
//     console.log(`this is length ${x.length}`)
//
// }
// console.log(x.shift())
//
// chunkArrayInGroups(["a", "b", "c", "d"], 2);
// // [['a','b'],['c','d']]`
// chunkArrayInGroups(["a", "b", "c", "d", 'e', 'f'], 3);
// // [['a', 'b', 'c'], ['d', 'e', 'f']]
// chunkArrayInGroups(["a", "b", "c", "d", 'e', 'f'], 4);
// // [['a', 'b', 'c','d'], ['e', 'f']]

chunkArrayInGroups(["a", "b", "c", "d"], 2) //should return [["a", "b"], ["c", "d"]].
//
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) //should return [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)// should return [[0, 1, 2, 3], [4, 5]].
console.log('problem begins ---------------------------------')
//
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 1) //should return [[0, 1], [2, 3], [4, 5]].
//
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)// should return [[0, 1, 2], [3, 4, 5], [6]].
//
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)// should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
//
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)// should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
console.log('------------------------------')
let y = [];
console.log(y.shift())
// console.log(y.splice(0,1))
// console.log(y)
