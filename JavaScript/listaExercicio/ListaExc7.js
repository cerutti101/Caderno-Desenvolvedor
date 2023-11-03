/*Adicionando Métodos
Um gerente de loja precisa de um programa para definir descontos em produtos.
O programa deve receber o ID do produto, preço e desconto como entrada e gerar o preço com desconto.
Porém, o método changePrice , que deve calcular o desconto, está incompleto. Consertá-lo!

Entrada de amostra
LD1493
1700
15

Saída de amostra
LD1493 preço: 1700
LD1493 novo preço: 1445

A primeira entrada é o ID do produto, a segunda é o preço antes do desconto e a terceira é a porcentagem de desconto.
Portanto, após o desconto, o novo preço será 1700-(0.15*1700) = 1445 .*/

main();
function main() {
    var prodID = 1102;
    var Preco = 112;
    var desconto = 12;
    
    var prod1= new Product(prodID, Preco);
    console.log(prod1.prodID + " Preco: " + prod1.Preco);
    
    prod1.changePreco(desconto);
    console.log(prod1.prodID + " novo Preco: " + prod1.Preco);
}

function Product(prodID, Preco) {
    this.prodID = prodID;
    this.Preco = Preco;

    this.changePreco = function(desconto) {
        let descontoCalculado = this.Preco * (desconto / 100);
        this.Preco -= descontoCalculado;
    }
}

function pessoa(nome, idade) {
    this.nome= nome;  
    this.idade = idade;
    this.anoDeNascimento = anoNascimento;
  }
  function anoNascimento() {
    return 2016 - this.idade;
  }
   
  var p = new pessoa("A", 22);
  document.write(p.anoDeNascimento());