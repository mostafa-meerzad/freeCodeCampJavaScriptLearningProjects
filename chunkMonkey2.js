function chunkArrayInGroups(arr, size) {
    let result = [];
    for (let i=0; i<arr.length; i++)
}


// chunkArrayInGroups(["a", "b", "c", "d"], 2);
// // [['a','b'],['c','d']]`
// chunkArrayInGroups(["a", "b", "c", "d", 'e', 'f'], 3);
// // [['a', 'b', 'c'], ['d', 'e', 'f']]
// chunkArrayInGroups(["a", "b", "c", "d", 'e', 'f'], 4);
// // [['a', 'b', 'c','d'], ['e', 'f']]
//
// chunkArrayInGroups(["a", "b", "c", "d"], 2) //should return [["a", "b"], ["c", "d"]].
// //
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) //should return [[0, 1, 2], [3, 4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)// should return [[0, 1, 2, 3], [4, 5]].
// console.log('problem begins ---------------------------------')
// //
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 1) //should return [[0, 1], [2, 3], [4, 5]].
// //
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)// should return [[0, 1, 2], [3, 4, 5], [6]].
// //
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)// should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
//
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)// should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].