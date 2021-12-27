let text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
let json = JSON.parse(text);// JSON.parse(str containing JSON data type) is used to parse a string into JSON
console.log(json['employees'][0]['firstName'])
console.log(json['employees'][0]['lastName'])
console.log(json.employees[0].lastName)

// messing arguments have undefined value
function messingArgs(arg1, arg2) {
    console.log(`this is arg1 -> ${arg1}`)
    console.log(`this is arg2 -> ${arg2}`)

}

messingArgs('test1', 'test2')
messingArgs('test1')



// // Bad code
// var j;
// for (j = 0; j < arr.length; j++){
//
// }
//
// // A better code
// var i;
// var l = arr.length;
// for (i = 0; i < l; i++) {
//
// }
console.log(2)