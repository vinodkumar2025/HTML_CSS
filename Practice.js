let name = {
    fName: 'Vinodkumar',
    lName: 'Maddooru',
}
let fullName = function (state) {
    console.log(this.fName + ' ' + this.lName+ ' from '+ state)
}
fullName.call(name, 'AP');
fullName.apply(name, ['AP'])
let printFullName = fullName.bind(name,'AP')
printFullName()

let name2 = {
    fName: 'Bhupathi',
    lName: 'Maddooru',
}
// function barrowing
fullName.call(name2)

// What are call, apply, and bind?

// All three methods are used to explicitly set the value of `this` inside a function.

// | Method    | When it runs                 | Arguments format              | Returns                          |
// | --------- | ---------------------------- | ----------------------------- | -------------------------------- |
// | `call()`  | Immediately                  | Arguments passed individually | Return value of the function     |
// | `apply()` | Immediately                  | Arguments passed as an array  | Return value of the function     |
// | `bind()`  | Later (creates new function) | Arguments passed individually | A new function with fixed `this` |
