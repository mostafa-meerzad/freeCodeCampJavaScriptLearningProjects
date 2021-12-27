function uniteUnique(arr) {

    let result = [];
    for (let x in arguments) {
        for (let i = 0; i < arguments[x].length; i++) {
            // console.log(arguments[x][i])
            // arguments[x][i] is used to access to individual elements present in arrays passed to the function.
            if (!result.includes(arguments[x][i])) {
                result.push(arguments[x][i])
            }
        }
    }
    return result
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))
console.log(uniteUnique([1, 2, 3], [5, 2, 1]))