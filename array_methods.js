console.log('Array methods.');

//Creation & Identification of Array

let arr = Array.of(1,2,3,4);
console.log(arr); //[1,2,3,4]

let arr1 = Array.from('hello');
console.log(arr1);//['h','e','l','l','o']

let arr2 = new Array(1,2,3);
console.log(arr2); //[1,2,3]

let arr3 = [12,4,4]
console.log(arr3); //[12,4,4]


//Adding / Removing Elements

//push() Adds elements to the end of an array.
let arr4 = [12,4,4]
arr4.push(23)
console.log(arr4); //[12,4,4]

//pop() Removes the last element.
let arr5 = [12,4,4]
arr5.pop();
console.log(arr5); //[12,4,4]

let arr6 = [1,2,3,4,5]
arr6.unshift(6) //[6,1,2,3,4,5]

let arr7 = [1,2,3,4,5]
arr7.shift() //[2,3,4,5]

let arr8 = [1,2,3,4,5]
console.log(arr8.splice(1,2));
console.log(arr8)
console.log(arr8.splice(0,1,10));
console.log(arr8)

const fruits = ['apple', 'banana'];
const moreFruits = ['cherry', 'mango'];

const allFruits = fruits.concat(moreFruits);

console.log(allFruits);  // ['apple', 'banana', 'cherry', 'mango']
console.log(fruits);     // ['apple', 'banana'] → original unchanged
let arr9 = [1,2,3,4,5]
let a = arr9.map(item=>item>3);
console.log(a,arr9);

let b = [,,, ,,]
console.log(b);