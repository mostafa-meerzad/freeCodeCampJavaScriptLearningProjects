function whatIsInAName(collection, source) {
// todo
//     collection is an array of objects
//    iterate over collection
//    find objects that match the key-value pairs that are provided in source
//    return an array of fond objects
    let result = [];

    for (let i = 0; i < collection.length; i++) {

        let state = true; // variable needed to indicate the existence of key-value pairs
        // state should be sat to true otherwise it will cause wrong results
        for (let x in source) {  // iterating over the conditions provided to the method
            //to check the key-value pairs IS present in collection

            if (collection[i].hasOwnProperty(x) && collection[i][x] === source[x]) {
                // collection[i] => current object of collection
                // collection[i][x] value of current object, source[x] value of source object

                if (state) {
                    state = true;
                }

            } else {
                state = false;
            }
        }

        if (state) { // At the end if state is true push the current object to the result array
            result.push(collection[i])
        }
    }


    return result
}


let collection = [{first: 'Romeo', last: 'Montague'}, {first: 'Mercutio', last: null},
    {first: 'Tybalt', last: 'Capulet'}];

// let source = {'apple':1, 'cookie':2};
let source = {last: "Montague"};
// let source = {last: 'Capulet'};
let result = [];


console.log(whatIsInAName(collection, source))