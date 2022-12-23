// UTILITIES & FUNCTIONS

const sayHi = (name) => {
  console.log(`Hello there ${name}`);
};

// module.exports = {sayHi} // this will export sayHi function element of object

module.exports = { sayHi };
// module.exports = sayHi; // this will export sayHi function as a function
console.log(module);
