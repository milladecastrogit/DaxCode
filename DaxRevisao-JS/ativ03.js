var prompt = require('prompt-sync')();
const nota = Number(prompt("Digite a nota do aluno: "));

if (nota >= 7) {
    console.log("Aluno aprovado.");
} else if (nota >= 5) {
    console.log("Aluno em recuperação.");
} else {
    console.log("Aluno reprovado.");
}