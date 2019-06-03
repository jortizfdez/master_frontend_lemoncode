// --- EJERCICIO ------------------------------------------------------------------------

// Empleando el concepto de closure, emula el comportamiento de 2 dados.
// Utiliza un closure para almacenar el resultado de tirar 2 dados, y encapsula
// junto a estos datos métodos que implementen la funcionalidad de:
// - Hacer reset: poner a undefined o null ambos resultados.
// - Tirar los dados. TIP: Usa Math.random() para tiradas aleatorias.
// - Imprimir el resultado por consola. Ten en cuenta lo siguiente:
//   - Informa al usuario que debe tirar primero cuando corresponda.
//   - Si saca doble 6, ¡dale un premio!

function dices () {

    var diceOne, diceTwo;

    return {
        reset: function () {
            diceOne = null;
            diceTwo = null;
        },
        argh: function() { 
            diceOne = Math.floor(Math.random() * 6)+1;
            diceTwo = Math.floor(Math.random() * 6)+1;
        },
        print: function (){
            console.log("Dado 1: " + diceOne);
            console.log("Dado 2: " + diceTwo);
            (diceOne + diceTwo) === 12? 
                console.log("Un pin del betis para tí") : 
                console.log("Sigue tirando");
        }
    };

}

var diceGame = dices();
console.log("Inicia el juego");
diceGame.reset();
diceGame.argh();
diceGame.print();