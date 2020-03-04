// There are two features of null you should understand:
// null is an empty or non-existent value.
// null must be assigned.
// Here’s an example. We assign the value of null to a:

let name = undefined;
console.log(name);

// What is undefined?
// Undefined most typically means a variable has been declared, but not defined.
let b;
//console.log(b)

//when looking up non-existent properties in an object, you will receive undefined:

let person = {};

console.log(person.id) // undefined


// Also in JavaScript, there are six primitive values. Both null and undefined are primitive values. Here is a full list:
// Boolean
// Null
// Undefined
// Number
// String
// Symbol
// All other values in JavaScript are objects (objects, functions, arrays, etc.).
// Interestingly enough, when using typeof to test null, it returns object:



let a = null;
//let b;
console.log(typeof a);
// object
console.log(typeof b);
// undefined

function doSomething(x, y) {

    console.log(y);

}



doSomething(32);