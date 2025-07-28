let nota = 6;

if (nota >= 6) {
    console.log("Aluno recebeu nota", nota, ". Está aprovado.");
} else if (nota >= 5 && nota < 6) {
    console.log("Aluno recebeu nota", nota, ". Está em recuperação.");
} else {
    console.log("Aluno recebeu nota", nota, ". Está reprovado.");
}