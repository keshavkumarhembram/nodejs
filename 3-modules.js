// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// names module
// const names = require("./3-1-names"); // there is no need of extension here

// utils module
// const sayHi = require("./3-1-utils");

// console.log(sayHi);
// console.log(names); // here names is object

// john and peter element can be accessed from names object
// sayHi("keshav");
// sayHi(names.john);
// sayHi(names.peter);

// in destructured format
const { john, peter } = require("./3-1-names");
// if we access john and peter in destructured format
// sayHi(john);

// sayHi as object
const fun = require("./3-1-utils");
// console.log(fun);
fun.sayHi(john);
 