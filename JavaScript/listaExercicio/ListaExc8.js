/*Gerenciador de contatos
Você está trabalhando em um aplicativo Contact Manager.
Você criou o construtor do objeto contact , que possui dois argumentos, nome e número.
Você precisa adicionar um método print() ao objeto, que irá enviar os dados de contato para o console no seguinte formato: nome: número
O código fornecido declara dois objetos e chama seus métodos print (). Complete o código definindo o método print() para os objetos.

Observe o espaço após os dois pontos, ao gerar os dados do contato.*/

function Contact(nome, numero) {
    this.nome = nome;
    this.numero = numero;
    this.print = function() {
        console.log(this.nome + ": " + this.numero);
    }
}
// Declarando dois objetos
let contato1 = new Contact("João", "123-456-7890");
let contato2 = new Contact("Maria", "098-765-4321");

// Chamando o método print
contato1.print();
contato2.print();
