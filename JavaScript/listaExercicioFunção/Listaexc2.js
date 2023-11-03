/*
Crie uma função que recebe uma idade e verifica se é maior de idade
*/

function verificaIdade(idade){
    if (idade <18) {
        console.log(" Voce ainda é muito novo");
    } else {
        console.log("Voce é maior de idade");
    }
}
verificaIdade(15);
verificaIdade(18);
verificaIdade(21);