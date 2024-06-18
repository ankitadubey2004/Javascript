
//primitive 
//7 types--> String,boolean,number ,null, undefined,Symbol,BigINt

const score = 100 ;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);
//Symbol mein value humne same di hai lekin return value different hai
//Each time you call Symbol(), it generates a new and unique symbol, even if you provide the same description string.

const bigNumber = 25486215624555523145n  //the number are too long so we put n in end so it will convert the number into big number

//Reference(non primitive)
//Arrays,objects,Functions

const heros=[ "batman","spiderman","shaktiman"];
let myobj={
     name: "Ankita",
     age:19,
}

const myFunction = function(){
    console.log("Hello Worls");
}
console.log(typeof bigNumber);   //typeof will find out the datatuype 
console.log( typeof anotherId);


// Primitive DataTypes:


// 1.Number: Represents both integer and floating-point numbers. Example: 5, 3.14.
 
// 2.String: Represents a sequence of characters enclosed in single or double quotes. Example: "Hello, world!".

// 3,Boolean: Represents a binary value, either true or false, often used for conditional logic.

// 4.Undefined: Represents a variable that has been declared but hasn't been assigned a value yet. Example: let x;.

// 5.Null:  standalone value it is represenataion of empty value it is special type and it is a object type. Example: let y = null; 

// 6.Symbol (ES6): it is mostly used used to find uniqnece.

// 7.BigInt (ES11): Represents large integers that cannot be represented by the Number type.

//  Refence (Object Data Types):

// 1.Object: Represents a collection of key-value pairs (properties and methods). Example: { name: "John", age: 30 }.

// 2.Array: Represents a list-like collection of values, indexed by numbers (integer indices). Example: [1, 2, 3, 4].

// 3.Function: Represents a reusable block of code that can be invoked or called with arguments. Example: function add(x, y) { return x + y; }.

// 4.Date: Represents dates and times.

// 5.RegExp: Represents regular expressions for pattern matching.


