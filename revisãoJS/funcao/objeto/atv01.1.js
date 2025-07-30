const aluno = {
    nome: "Breno",
    idade: 20,
    apresentar: function (){
        console.log(" Olá, meu nome é " + this.nome + " minha idade é " + this.idade);
    }
}

aluno.apresentar();
