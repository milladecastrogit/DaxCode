// Faça uma validação de senha informada via prompt(). Enquando a senha estiver incorreta, eexiba um prompt pedindo para o usuário tentar novamente. Quando a senha estiver certa, imprima "Acesso autorizado" no console.
var prompt = require('prompt-sync')();

let codSenha = 1234;
let senha;
while (senha != codSenha){
    senha = prompt ("Digite a senha: ")
    if (senha == codSenha){
        console.log(" Acesso autorizado!");
    }
    else
     console.log("Senha incorreta, tente novamente!");

}