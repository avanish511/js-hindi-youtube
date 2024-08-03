// this works in the browser, but not in node (global object is not defined in node) ,
// it gives a {} empty object in node when this is invoked in global scope

// in function "this" is undefined

// function foo() {
//     let user = "John";
//     // console.log(this.user);  // undefined or no output
//     // console.log(this); //undefined or no output
//     console.log(user);
// }

// // write an object to call the function
// let obj = {
//     user: "jane",
//     fuck: function () {
//         console.log(this.user);
//     }
// }

// obj.fuck(); // output: jane

// let check = function () {
//     let user = "Hiney"
//     console.log(this);
// }

// check()

// implicit arrow function

// const h = (num1, n2) => n2 + num1

// console.log(h(3, 5))   // don't worry about the name of function just use the refrence and pass the parameters

// const h = (num1, n2) => (n2 + num1) // also a way
// const h = (num1, n2) => ({ username: "Avanish" })   // object is getting returned

// console.log(h(3, 4));   // parameters are not required as such


//++++++++ Immediately invoked function expression

// (function chai() {
//     console.log(`DB connected`)
// })();

// it is adviced to add ; after the IIFE because it does not know when to stop the context

//     (
//     // in here the func def is written
// )(
//     // this is for calling
// )
//     ()()

// ((name) => {
//     console.log(name);
// })("Avanish")