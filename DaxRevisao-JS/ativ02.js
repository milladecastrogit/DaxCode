var prompt = require('prompt-sync')();
const numero = Number(prompt("Digite um número: "));

if (numero % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}