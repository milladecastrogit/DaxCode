//crie uma função chamada ehPar que recebe um numero como argumento e retorna true se for par, ou false se for impar. Mostre o resultado no comsole.

var prompt = require('prompt-sync')();

function ehPar (valor){
    return valor % 2 === 0;

}
console.log("o numero 7 é par? " + ehPar(7));