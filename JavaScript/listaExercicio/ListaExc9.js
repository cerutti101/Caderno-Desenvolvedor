/*Adicionando Métodos
Um gerente de loja precisa de um programa para definir descontos em produtos.
O programa deve receber o ID do produto, preço e desconto como entrada e gerar o preço com desconto. Porém, o método changePreco , que deve calcular o desconto, está incompleto. Consertá-lo!

Entrada de amostra
LD1493
1700
15

Saída de amostra
LD1493 preço: 1700
LD1493 novo preço: 1445.*/

function main() {
    var prodID = 123123 ;
    var Preco = 123;
    var Desconto = 12;
    
    var prod1= new Produto(prodID, Preco);
    console.log(prod1.prodID + " Preco: " + prod1.Preco);
    
    prod1.changePreco(Desconto);
    console.log(prod1.prodID + " novo Preco: " + prod1.Preco);
}

function Produto(prodID, Preco) {
    this.prodID = prodID;
    this.Preco = Preco;

    this.changePreco = function(Desconto) {
       this.Preco = this.Preco - (this.Preco * (Desconto/100));
        
    }
}