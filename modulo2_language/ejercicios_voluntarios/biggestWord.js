// --- EJERCICIO ------------------------------------------------------------------------

// Crea una función que reciba una frase en formato string y devuelva la palabra más larga.
// En caso de haber varias con longitud máxima que devuelva siempre la primera. Ten en cuenta
// que consideramos una palabra a aquello que esté separado por espacios.

// TIP: Consulta la documentación en MDN sobre los strings, verás que incorporan muchas
// funciones de utilidad para el manejo y manipulación de strings.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype

function biggestWord(phrase) {
   var arrayWords = phrase.replace(',','').split(" ");
   arrayWords.sort(function (a, b) {
     var result = 0;
     (a.length > b.length) ?  result = -1 : result = 1;
     return result;
   });
   return arrayWords[0];
}

// Ejemplo
console.log(biggestWord("Esta frase puede contener muchas palabras")); // "contener"
console.log(biggestWord("Ejercicios básicos de JavaScript")); // "JavaScript"
