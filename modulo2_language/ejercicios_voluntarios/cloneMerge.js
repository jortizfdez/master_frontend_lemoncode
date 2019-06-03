// --- EJERCICIO ------------------------------------------------------------------------

// A. Implementa una función clone que devuelva un objeto clonado a partir de otro:
var result ={};

function clone(source) {
  for (var prop in source) {
    result[prop] = source[prop];
  } 
  return result;
}

// B. Dados dos objetos cualesquiera, implementa una función "merge" que mezcle uno sobre otro.
// El objeto resultante debe ser la mezcla de las propiedades del objeto "source" sobre las
// del objeto "target".
// TIP: Usa la función "clone" del apartado A.

function merge(source, target) {
  clone(target);
  clone(source);
  return result;
}

// Por ejemplo, dados estos 2 objetos:
var a = {name: "Maria", surname: "Ibañez", country: "SPA"};
var b = {name: "Luisa", age: 31, married: true};
// El resultado de mezclar a sobre b sería:
var y = merge(a, b) // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}

console.log(a);
console.log(b);
console.log(y);