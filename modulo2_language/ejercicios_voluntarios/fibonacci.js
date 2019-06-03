// --- EJERCICIO ------------------------------------------------------------------------

// Implementa una función para calcular el n-enésimo termino de la sucesión de
// Fibonacci. Esta sucesión tiene sus dos primeros términos prefijados:
//
// fib(0) = 0
// fib(1) = 1
//
// Y a partir de aqui, el siguiente términose calcula a partir de los dos anteriores:
//
// fib(2) = fib(1) + fib(0)
// ...
// fib(n + 1) = fib(n) + fib(n - 1)
//
// TIP: Es el clásico problema donde el término siguiente depende del actual
// y el anterior.
// TIP: También se puede abordar con recursividad, pero buscamos una solución
// iterativa para hacer uso de destructuring con múltiples asignaciones.

const fibRecursive = (n) => { 
    return (n === 0) ? 0 : (n === 1) ? 1 : fib(n-1) + fib(n-2);
 }

 const fib = (n) => {
    let result = [0,1];
    for (let i = 2; i < n + 1 ; i++) {
        result.push(result[i-2] + result[i-1]);
    }
    return result[n];
 }

 console.log(fib(0));
 console.log(fib(1));
 console.log(fib(2));
 console.log(fib(3));
 console.log(fib(4));
 console.log(fib(5));
 console.log(fib(6));
 console.log(fib(7)); 

 console.log(fibRecursive(0));
 console.log(fibRecursive(1));
 console.log(fibRecursive(2));
 console.log(fibRecursive(3));
 console.log(fibRecursive(4));
 console.log(fibRecursive(5));
 console.log(fibRecursive(6));
 console.log(fibRecursive(7));
