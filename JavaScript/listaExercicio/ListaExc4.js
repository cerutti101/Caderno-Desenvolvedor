/*
Criando seus próprios objetos
Bob foi contratado como oficial de informações do aeroporto e precisa gerar mensagens de status para cada voo․ Vamos ajudá-lo!
Complete o programa determinado fixando o construtor, criando um objeto de voo e atribuindo-o a uma determinada variável para executar corretamente a mensagem correspondente.
O ID do voo e o status do voo (pousado, pontual, atrasado, etc.) são considerados como entrada.

Amostra de entrada
NGT 929
pousou

Amostra de saída
do vôo NGT 929 pousou
*/

function main() {
    //pega o numero do voo e seus status
    var numeroVoo = 121;
    var statusVoo = "ATRASADO";
    var Voo1 = new Voo(numeroVoo,statusVoo);
    
    //output
    console.log('O Voo ' + Voo1.number + ' está ' + Voo1.status)
    
}

function Voo(numeroVoo, status) {
    this.number = numeroVoo;
    this.status = status;
};