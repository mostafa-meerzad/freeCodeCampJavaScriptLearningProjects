// 'use strict';   // this statement enables strict mode for writing code.
// x = 10;  // error
//--------------------
// let x = 10;  // no error
// console.log(x)
//---------------------------
// can redeclare a variable that is declared using var with no error!
// var string = "testString-1";
// var string = "testString-2";
// console.log(string)
// // can not redeclare a variable that is declared with let
// let string1 = "testString-1";
// let string1 = "testString-2"; //causes to error "SyntaxError"
// console.log(string)
//==================================================================================
// var num ;
// for (var i=0; i<3; i++){  //'i' is declared globally
//     console.log("i before increment " + i);
//     if (i===2){
//         num = function () {
//             return i;
//         }
//     }
//     console.log("i after increment " + i);
// }
// console.log(num());
//
// //----------------------------
// console.log('-----------------------------')
// let test;
// for (let y=0; y<3; y++){ // 'y' is declared locally
//     if (y===2){
//         test = function () {
//         return y;
//         }
//     }
// }
// console.log(test());
// console.log(y);

//========================= arrow function ======================
//--------------the traditional way
// const myFunc = function (){
//     let variable = 'test value';
//     return variable
// }
// console.log(myFunc())
//--------------------------------
//---------------------- arrow function
// const myFunc = () => {
//     let variable = "test value";
//     return variable;
// }
// console.log(myFunc())
//---------------------------------
//
// const myFunc = () => 'test value';   // if there is just a return value so we can omit the '{}'.
// console.log(myFunc())
//----------------------------------------------
// const doubler = val => val * 2;   // if there is just one parameter we can omit the '()' .
// const multiplier = (item1, item2) => item1 * item2;   // arrow functions can take as many parameters as needed.
// console.log(multiplier(2, 2))
// console.log(doubler(3))
//-------------------------------------
// const sayHello = (name='john') => 'hello ' + name; // can not omit () when there is a default value.
// console.log(sayHello())
//--------------------------------------
// function howMany (...args){  //the ES6 introduced the rest parameter '...args (args is just a name)' which is an array
//     let total = 0;
//     for (let i=0; i<args.length; i++){
//         total += args[i];
//     }
//     return total;
// }
// console.log(howMany(2,2,3,3,5,5,52))
//----------------------------------------
//==================== spread operator =================
// spread operator is used to expand arrays and strings into it's elements introduced in ES6.
// syntax (...arr or ...str). NOTE: spread operator only works in place such as argument of a function or in array literal.

// let var1 = [1,2,3,4,1,2,5];
// let var2 = [1,2,3,4,1,2,5,4,46,];
// console.log(Math.max(...var2))
// console.log([...var1].length)
// console.log(typeof [...var1])

//-------------------------------------------
//========================= destructuring assignment ==========================
// let testObj = {name:'mostafa', age:22, job:'student'}
// // let name = testObj.name;
// // let age = testObj.age;
//
// const {age, name} = testObj; // makes 'age' and 'name' variables with their relative values in the object.
// console.log(name)
// console.log(age)
// // assigning new variable names when using destructuring assignment
// let newObj = {name: 'mostafa', age:22, job:'web developer'}
// let {name: userName, age: userAge} = newObj;  // userName and userAge are new variable names assigned to age and name
// console.log(userAge)
// console.log(userName)
//------------ destructuring values form nested objects -----------------------
// let users = {
//     mostafa: {age:22, email:'mostafameerzad@gmail.com'},
//     hasib: {age:22, email:'test@test.com'}
// }
//
// const {hasib: {age, email}} = users
// console.log(email)
// let {hasib: {age: userAge, email: userEmail}} = users;
// console.log(userAge)
// console.log(userEmail)
//======================= assign values of an array using destructuring assignment ==========
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr)
// console.log(...arr)

// let [a, b, c] = arr; // destructuring arrays 'a, b, c' will be values at '0, 1, 2' indexes
// const [a, , , b] = arr;   // we can escape as many elements as we want using ',' commas one for each element.
// // in the above 'a' will be element at index 0 and b will be element at index 3.
// console.log(a, b )
//
//
// let  x = 10,
//     y = 20;
// [x, y ] = [y, x]   // we can also swap values in this way
// console.log(x)

// ========================== destructuring assignment and the rest operator in array ===================
// let arr = [1, 2, 3, 3, 5, [33,22]];
// // const [a, b , ,,,c] = arr;
// const [,,...test] = arr;
// // console.log(a)
// // console.log(b)
// // console.log(c)
// console.log(test)
//------------------------- using destructuring assignment in function argument -----------------------
// let obj = {val1: 10, val2: 20, val3: 30};
// function testFunc1(object) {
// const {val1, val2} = object;
// return (val1 + val2) / 2;
// }

// console.log(testFunc1(obj))
// console.log('------------------');

// function testFunction2({val1, val2}) {
//     return (val1 + val2)/ 2;
//
// }
//
// console.log(testFunction2(obj))
//
// const testArrow1 = (object) => {
//     const {val1, val2} = object;
//     return (val1 + val2) * 2;
// }
// console.log(testArrow1(obj))
//
// const testArrow2 = ({val1:test1, val2}) => {
//     return test1 + val2;
// }
// console.log(testArrow2(obj))

// ==================== template literal ==================
// let name = 'mostafa';
// let testStr1 = 'Hello world this is ' + name + ' saying hello\n happy codding';
// console.log(testStr1)
// console.log('------------==-=-=-=--------------------')
// let testStr2 = `Hello world this is ${name} saying hello
// have fun with codding especially Python and JavaScript `// backticks not quotes
// console.log(testStr2)
//------------------------------------------------
// --------- these two syntax results the same thing. the second one is new.
// const test = (x, y) => ({x:x, y:y})
// const test = (x, y) => ({x, y})
// console.log(test(23, 10))
//---------------- defining functions inside objects ---------------
// //ES5
// const obj5 = {name:'mostafa', age:22, last:'meerzad', sayHello:function (){return `${this.name} says hello!`}}
// //ES6
// const obj6 = {name:'mostafa', age:22, last:'meerzad', sayHello(){return `${this.name} says hello ES6`}}
// console.log(obj5.sayHello())
// console.log(obj6.sayHello())
