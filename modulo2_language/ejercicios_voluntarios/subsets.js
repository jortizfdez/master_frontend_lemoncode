// --- EJERCICIO ------------------------------------------------------------------------

// Escribe una función que acepte un string como argumento y devuelva todas las partes finales de dicha palabra:

// Solución:
function subsets(word) {

  var result = [];
  for (i = 1; i < word.length; i++) {
    result.push(word.slice(i, word.length));
  }
  return result;
}

// Ejemplo
console.log(subsets("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]


// --- CHALLENGE ------------------------------------------------------------------------
// function subsets(word) {
//   console.log(word.entries());
// }

subsets("message");
// Repite el ejercicio anterior sin utilizar arrays auxiliares ni bucles for/do/while.

// TIP: Una forma válida de "iterar" es utilizando algún método de los Arrays:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype
