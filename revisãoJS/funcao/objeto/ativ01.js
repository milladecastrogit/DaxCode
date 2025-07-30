//crie um ojeto chamado pessoa com as propriedades: nome, idade, profissão

const pessoa = {
    nome : "Camila",
    idade : 44,
    profissão : "estudante"
}
console.log( "Meu nome é: " + pessoa.nome + 
    " Minha idade: " + pessoa.idade + 
    " Atualmente sou: " + pessoa.profissão);

    function apresentarPessoa(pessoa){
        return "olá, meu nome é" + pessoa.nome + "e tenho " + pessoa.idade
    }
