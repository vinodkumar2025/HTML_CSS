/*
1.What is JavaScript? What is the role of javaScript engine?
=> JavaScript is a programming language that is used for converting static weeb pages to interactive and dynamic web pages.
=> A javaScript engine is a program present in the browser that executes the js code.

2. What arwe the Client side and Server side?
=> A client is a device, application or software component that request and consumes services or resources froma a server.
=> A server is a devicce, computer or software application that provides services, resources or functions to clients.

3.What is Scope in javascript?
=> Scope determines where variables are defined and where they can be accessed.

4.What is the type of variable in JS when it is declared without using the var,let or const keywords?
=> "var" is the implicit type of variable when a variable is declared without var, let or cont keywrds.
e.g:
 if(true) {
    variable = 10;
 }
console.log(variable);
//out: 10

5. What is a Hoisting in JS?
=> Hoisting is a JS behaviour where functions and variable declarations are moved tot eh top of their respective scopes during the  compilation phase.

6. What is JSON?
=> JSON(JavaScript Object Notation) is a lightweight data interchange format. JSON consists of key-Value pairs.

7. What are variables? What is the difference between var, let and const?
=> Variables are used to store data. var is a fucntion scoped and let, cont are block scoped .

8. What are data types in JS?
=> A data types determines the type of a variable
=> Primitive: Number, String, Boolean, Undefined, Null
    => these are immutable 
    => it holds single value
=> Non-Primitive: Object, Array, Function, Date, RegExp
    => these are mutable
    => it holds multiple values

9.What is the difference between null and undefuned in JS?
=>undefined: When a variable declared not been assigned a value then it auto matically intialized with undefined.
=>null: null Variables are intentionally assinged the null value.

10. What is the use of typeof operator?
=> typeof operator is used to determine the type of each variable.
e.g:
    let a = 10;
    console.log(typeof(a));
    output: number

11. What is type coercion in JS?
=> Type coercion is the automatic conversion of values from one data type to another during certain operations or comparisons.

12.What is operator precedence?
=> BODMAS
=> As per operator precedence, operator with higher precedence are evaluated first.

13.What is the difference between unary, binary and ternary operator?
=> operators based on number of operands
=> Unary Operator
    => single operand
    => e.g: let a = 5;
            let b = ++a;
=> Binary Operator
    => two operands
    => e.g: let a=10, let b =10;
            let c = a+b;
=> Ternary Oprator
    => let result = condition? 'Yes': 'No'

14.What is short-circuit evaluation in js?
=> short circuit evalution with logical AND
    let result1 = false && someFunction(); //function is not evaluated in this case.
    console.log(result1);
    //Output: false 

15.What are the types of conditional statements in JS?
=>if/else statements
=>Ternary operator
=>Switch statement

16. What is teh difference between == and ===?
=> Loose equality
    console.log(1 == '1');
    console.log(true == 1);
    // output: true
    it compares two values after performing the type coercion
=> strict Equality
    console.log(1 == '1');
    console.log(true == 1);
    // output: false
    it compares two values without performing the type coercion

17. What is the differnence between Spread oprator and rest oprator in JS?
=> The spread oprator(...)is used to expand or spread elements from an iterable(sucha s an array,string,object) into individual elements.
    - Coying an array
    - Merging Arrays
    - Passing Multiple Arguments to a Function
=> The rest operaot is used in funvtion parameters to collect all remaing argujments into an array.

18.What are Arrays in JS? How to get,add  remove elements from arrays?
=> An array is a data type that allows you to store multiple values in a single variable.
let fruits = ["apple", "banana"]

19.What is the indexOf() method of an Array?
=> indexOf() method gets the index of a specified element in the array.
=> e.g: const array = [1,2,3,4,5]
    let a = array.indexOf(3)//
    //out: 2

20. What is the difference between find() and filter() methods of an Array?
=>find() : return the first elemnt which satisfies the given condition
=>filter() : return the new array which satisfies the given condition.
=> const array = [1,2,3,4,5]
    let c= array.find((num)=> num%2 ===0);
    console.log(c); // out: 2
    let d = array.filter((num)=> num%2 ===0);
    console.log(d); //[2,4]

21. What is the slice() method of an Array?
=> it used get a subset of the array from start index to end index(end is not included)

22. What is the difference between Push() and concat() methods of an array?
=> push method update the existing array where as concat creates the new array.

23. What is the defference between pop() and shift() methods of an array?
=> pop removes the last element an array where as shift removes the first element an array

24. What is the splice() method of an array?
=> it is used add, remove and replace elements in an array.
    => array.splice(startInded, deletecount, ....itemToAdd);

25. What is the difference between the slice() and splice() methods of an Array?
=> The slice() method is used to get a subset of the array
=> the splice() is used to add , remove and update the elements.

26.What is the difference between map() and forEach() array methods?
=> map return the new array based the operation
=> forEach used to perform any operation on the each element in the array.

27. How to sort and reverse an array?
=> we can achieve this using sort and reverse methods

28. What is Array Destructuring in JS?
=> Array destructuring allows you to extract elements from an array and assign them to individual variables in a single statment
=> it is introduced in ES6
    => let a = [1,2,3]
    => let b[firstvalue, saecoendValue, thirdValue] = a;
    console.log(firstvalue, saecoendValue, thirdValue) // out : 1,2,3

29. What are array like object in JS?
=> Array like Objects are that have indexed elements and a lenght property, similar to array, but they may not have all the methods of array like push(), pop() & others.
eg: argumetns,Strings, HTML collections

30. How to convert an array like object into an array?
=> const arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };
    const arr = Array.from(arrayLike);
    console.log(arr); // ['a', 'b', 'c'];
    const nodeList = document.querySelectorAll('div');
    const arr = [...nodeList];

31. What is a loop? What are the types of loops in JS?
=> A loop is a programming way to run a piece of code repearedly until a crertain condition is met.
=> for, while, do-while, for..of, for...in

32. What are Functions in JS? What are the types of function?
=> A function is a reusable block of code that performs a specific task.
types: Named Functions, Anonymous FUnction, Function Expression, Arrow Function, IIFE, callback Function, Higher order function

33. What is the difference between named and anonymous functions? when to use ?
=> Named functions have a name identifier. use for complex and reuse code.
=> Anonymous functions do not have a name identifier and cannot be referenced directly by name.

34. What is function expression in JS?
=> A function expression is way to define a function by assiging it to a variable.
=> e.g: const add = fucntion (a,b){
    console.log(a,b)
    }

35. What are Arrow Functions in JS? What is it use?
=> it is a shorter and simpler way of defining a functiosn in javascript.
=> syn: () => {};

36.What are Callback Functions? What is it use?
=> A callback function is a functions that is passed as a argument to the another functions.

37. What is Higher order function in js/
=> A fucntion that takes one or more functions as argumens or return a functions as a result is called higher order funcgtion.

38. What are the difference between arguments and parameters?
=> Parameters are the placeholders defined in the function declaration.
=> Arguments are the actul values passed to the functions when it is invoked.

39. What do you use default parameters in a function?
=> default parameters allow you to specify default values for function parameters.
=> eg: function greet(name = "test"){
    console.log(name);
    }
    greet();

40. What is the use of event handling in js?
=> Event handling is the process of responding to user actions in a web page.
=> the addEventListener metod of javascript allows to attach en event name and with the function you want to perform on that event.
=> events = click, mouseover, keydown, keyup, submit, focus, blur, change ,load, resize

41. What are Fist class function in js?
=> Tha ability of storing a function in avaiable and passing a function to another funtion and return the result as function is called first class function.

42. What are Pure and impure functions in JS?
=> A pure function is a function that always produces the same output for the same input.
=> it can produce different outputs for same input.

43. What is Function Currying in JS?
=> Currying in js transforms a function with multiple arguments into a nested series of functions, each taking a single argument.
=> eg: function multiply(a){
        return function (b){
            return a*b;
        }    
    }
    const double = multiply(2);
    console.log(double(10))//out: 20

    const triple = multiply(3);
    console.log(triple(10))//out: 30

44. What are call, apply and bind methods in JS?
=> these methods provide a way to manipulate the this value and pass arguments to functions.

=> eg: function sayHello(msg){
        console.log(`${msg}, ${this.name}`);
    }
        const person = {name: 'vinod'};
    sayHello.call(person, 'Hello');// out: Hello vinod
    sayHello.apply(person, ['Hello']); // out: Hello vinod
    const greet =  sayHello.bind(person); 
    greet('Hello');//// out: Hello vinod

45: What is a String?
=> A string is a collections of charectors stored inside the single or double quotes.
=> var str1 = 'Hello';

46. What are template literals and string interpolation in string?
=> A template literal is also known as a template string is a feature introduced ES6 for string interpolation and multiline strings in js.
    const name = "Vinod";
    const greeting = `Hello, ${name}!`;
    console.log(greeting); // Output: Hello, Vinod!

47. What is string immutability?
=> String in js are considered immutable because you cannot modify the contents of existing string directly. so when ever you change the value it creates a new memory.

48. What is DOM? What is the differene between HTML and the DOM?
=> The DOM(Document Object Model) represents the web page as a tree like structure that allows js to dynamically access and manipulate the content and structure of a web page.

50. What is a selector in JS?
=> selectors in JS help to get specific elements from DOM based on IDs, class names, tag names.
    - getElementById()
    - getElementsByClassName()
    - getElementsByTagName()
    - querySelector() -- returns first matching element
    - querySelectorAll()

51. What is Error handling in JS?
=> it is a process of managing errors.
    try{
    }
    catch(error){
        console.log(error)
    }

52. What is the role of finally block in JS?
=> Finally, block is used to execute some code irrespective of error.

53. What is the purpose of throw statement in JS?
=> The throw statement stops the execution of the current function and passes the error to the catch block of calling function.

54. What are the different types of error in JS?
=> Syntax Error, Reference Error, Type Error, Range Error

55. What are Object in JS?
=> Object is a real world entity. or An object is data type that allows u to store data in kehy value pairs.

56. In how many ways we can create an object?
=> Object Literal:
        var person = {
        name: 'vinod',
        age: 24,
        role: 'Developer'
        };
=> Object constructor:
        ver person = new Object();
        person.name= 'Vinod';

57. What is the difference between Array and Object?
=> Array:
    => Arrays are collections of values.
    => Arrays are denoted by square brackets[].
    => Elements in array are ordered.
=> Objects:
    => OBjects are collection of key-value pairs.
    => Objects are denoted by curly braces{}
    => Properties in objects are unordered.

58. How do you add or modify or delete properties of an object?
=> var person = {}
     => person.name = 'vinod';
     => person.name = 'kumar';
     => delete person.name;

59. What are the some common methods to iterate over the properties of an object?
=> for...in loop
    => for(let prop in person){
        console.log(prop+ ": " +person[prop]);
    }
=>Object.keys() & forEach()
    => Object.keys(person).forEach((prop)=>{
        console.log(prop+ ": "+ person[prop]);
        });
=>Object.values() & forEach()
    => Object.values(person).forEach((value)=>{
        console.log(value);
        });

60.How do you check if a property exists in an object?
=> ver person = {
        name: 'vinod',
        age: 24
    }
    console.log("name" in person);// true
    console.log(person.hasOwnProperty("name")); // true

61. How do you clone an object?
=> ver person = {
        name: 'vinod',
        age: 24
    }
    => spread syntax
        =>const cloneObject = {...person};
    => Object.assign(target, source) // shallow copy
        => const cloneobject = Object.assign({}, person)
    => JSON.parse() & JSON.stringify() // deep copy
        => const cloneObject = JSON.parse(JSON.stringify(person));
    
62. What is the difference between deep copy and shallow copy in JS?
=> ver person = {
        name: 'vinod',
        age: 24,
        address: {
            city: 'nagari'
        }
    }
=> shallow copy in nested objects case will modify the parent object property value if clones object property value is changed. but deep copy does not modify the parent object property value.

63. What is Set Object in JS?
=> The Set object is a collection of unique values, meaning that duplcate values are not allowed.
=> eg: let a = [1,3,4,2,3];
        let s  = [...new Set(a)];

64. What is event delegation in JS?
=> it is a technique where you attach a single event handler to a parent element to handle events on its child elements.
=> <ul id="myList">
    <li> Item 1</li>
    <li> Item 2</li>
    <li> Item 3</li>
   </ul>
   var parentList = document.getElementById("myList");
   parentList.addEventListener("click", handleItemCLick);
   function handleItemClick(event) {
    var target = event.target;
    console.log("Clicked:", target.textContent);
   }
65. What is Event Bubbling in JS?
=> it is a process in js where an event triggred in child element propagtes up the DOM tree, triggering event handlers on its parent elements.

66. What is Event Capturing in JS?
=> it is a opposite to the event bubbling.
*/

//Logical Qustions
//=============================
// function fruit() {
//     console.log(name);
//     console.log(price);

//     var name = 'vinod';
//     let price = 20;
// }
// fruit();
// output: 
/**
 * 1. undefined
 * 2. Error
 */
//=============================
// for(var i=0; i< 3; i++) {
//     setTimeout(()=> console.log(i),1000)
// }
// 3,3,3
//=============================
// for(let i=0; i< 3; i++) {
//     setTimeout(()=> console.log(i),1000)
// }
// 0,1,2
//=============================
//console.log(+true); // 1
//console.log(typeof +true); // number
//=============================

