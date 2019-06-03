// --- EJERCICIO ------------------------------------------------------------------------

// A. ¿Cual crees que será el resultado de la consola y porqué? TIP: escribe el código equivalente.

// function f() {
//   console.log(a); //undefined.
//   console.log(g()); //undefined

//   var a = "good job!";
//   function g() {
//     return a;
//   }
//   console.log(a); // good job!
// }

// function f() {

//   var a;
//   var g;
//   console.log(a);
//   console.log(g);
//   a = "good job!";

//   g = function g() {
//     return a;
//   }
//   console.log(a);

// }

// B. ¿Y ahora?

// var a = 1;

// (function() {
//   console.log(a); //undefined
//   var a = 2;
//   b = 4;
//   var c = 3;
// })();

// console.log(a); //1
// console.log(b); //4
// console.log(c); //error


// C. ¿Y con esta ligera variación?

var a = 1;

function f() {
  console.log(a); //1 
  b = 4;
  var c = 3;
};

f();

console.log(a); //1
console.log(b); //4
// console.log(c); //undefined
