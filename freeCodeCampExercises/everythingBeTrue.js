function truthCheck(collection, pre) {

    console.log( collection.every(item => !!item[pre] !== false));
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {
    "user": "Laa-Laa",
    "sex": "female"
}, {"user": "Po", "sex": "female"}], "sex");
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {
    "user": "Laa-Laa",
    "sex": "female"
}, {"user": "Po"}], "sex");


// console.log(!!'s')
// let arr = [1, 2, 3, 0, 5];
// console.log(arr.every(item => !!item !== false))
// console.log(arr)