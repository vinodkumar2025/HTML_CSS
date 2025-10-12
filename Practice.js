// let name = {
//     fName: 'Vinodkumar',
//     lName: 'Maddooru',
// }
// let fullName = function (state) {
//     console.log(this.fName + ' ' + this.lName+ ' from '+ state)
// }
// fullName.call(name, 'AP');
// fullName.apply(name, ['AP'])
// let printFullName = fullName.bind(name,'AP')
// printFullName()

// let name2 = {
//     fName: 'Bhupathi',
//     lName: 'Maddooru',
// }
// function barrowing
// fullName.call(name2)

// What are call, apply, and bind?

// All three methods are used to explicitly set the value of `this` inside a function.

// | Method    | When it runs                 | Arguments format              | Returns                          |
// | --------- | ---------------------------- | ----------------------------- | -------------------------------- |
// | `call()`  | Immediately                  | Arguments passed individually | Return value of the function     |
// | `apply()` | Immediately                  | Arguments passed as an array  | Return value of the function     |
// | `bind()`  | Later (creates new function) | Arguments passed individually | A new function with fixed `this` |


// A polyfill is a piece of code (usually JavaScript) that provides modern functionality to older browsers that do not support it natively.

// 🧠 In short: A polyfill is a fallback implementation of a feature that’s missing in certain browsers.

// let user = {
//     fName: 'King',
//     lName: 'Kohli'
// }

// let FullName = function (state){
//     console.log(this.fName + ' '+ this.lName +' from '+state)
// }

// let ufullname = FullName.bind(user);
// ufullname()

// Function.prototype.myBind = function(...args){
//     let obj = this;
//     let parems = args.slice(1)
//     return function(...args2){
//         obj.call(args[0],[...parems,[...args2]])
//     }
// }

// FullName.myBind(user,'AP')('cricket');


// Currying is a functional programming technique where a function that takes multiple arguments is transformed into a series of functions, each taking one argument at a time.

// 🧠 In simple words:
// Currying breaks a function with multiple parameters into a chain of functions that each take a single parameter.
// Currying transforms a multi-parameter function into a chain of single-parameter functions.

// It allows partial application and function reuse.

// Commonly used in functional programming and JS frameworks.

// const multyply = function (a){
//      return function (b){
//         return a*b
//     }
// }

// const double = multyply(2);

// console.log(double(10))
