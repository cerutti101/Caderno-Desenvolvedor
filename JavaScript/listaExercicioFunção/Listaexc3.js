/* tranformar este exericio em algumas funções
3) elabore um algoritmo que calcule o que deve ser pafo por um produto, considerando
 o preço normal de etiqueta e a escolha da condição de pagamento.
 Utilize os codigos da tabela a seguir para ler qual a condição de pagamento escolhida
 e efetuar o calculo adequado.

 Codigo Condição de pagamento:
 - A vista Debito, recebe 10% de desconto;
 - A vista no Dinheiro ou PIX, recebe 15% de desconto;
 - Em duas vezes, preço nornal de etiqueta sem juros;
 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;


var modalidade, formaDePagamento, valor, quantiParcela;
modalidade ="Credito" ;
formaDePagamento ="Parcelado" ;
valor = 535.60 ;
quantiParcela = 6 ;

if((modalidade == "Debito") && (formaDePagamento == "Cartão")){

    resultado = valor - (valor * 0.1);
    mensagem = "A compra no valor : "+ valor +" reais, na modalidade "+ modalidade +" sendo a forma de pagamento "+ formaDePagamento +" tera como resuldado "+resultado.toFixed(2) +" reais.";

}else if((modalidade == "Debito") && ((formaDePagamento == "Moeda")||(formaDePagamento == "Pix"))){

    resultado = valor - (valor * 0.15);
    mensagem = "A compra no valor : "+ valor +" reais, na modalidade "+ modalidade +" sendo a forma de pagamento "+ formaDePagamento +" tera como resuldado "+resultado.toFixed(2) +" reais.";

}else if((modalidade == "Credito") && ((formaDePagamento == "Parcelado") && (quantiParcela <= 2))){

    resultado = valor;
    vParcela = valor / quantiParcela; 
    mensagem = "A compra no valor : "+ valor +" reais, na modalidade "+ modalidade +" sendo a forma de pagamento "+ formaDePagamento +" tera como resuldado "+ quantiParcela +" parcelas nos valores de : "+ vParcela.toFixed(2) +" reais.";

}else if((modalidade == "Credito") && ((formaDePagamento == "Parcelado") && (quantiParcela > 2))){

    resultado = valor * 1.1;
    vParcela = valor / quantiParcela;
    mensagem = "A compra no valor : "+ valor +" reais, na modalidade "+ modalidade +" sendo a forma de pagamento "+ formaDePagamento +" tera como resuldado "+ quantiParcela +" parcelas nos valores de : "+ vParcela.toFixed(2) +" reais.";

}else {

    mensagem = "Deu pau";

}
console.log(mensagem);
 */
    function adapMensagem(formaDePagamento,valor,modalidade){


    }

    function calculaDebito(formaDePagamento, valor, resultado){
            if (formaDePagamento == "Cartão"){

                resultado = valor - (valor * 0.1);
                return resultado;

            }else if((formaDePagamento == "Moeda")||(formaDePagamento == "Pix")){
            
                resultado = valor - (valor * 0.15);
                return resultado;
            
        }
    }

    function calculaCredito(formaDePagamento, valor, resultado){
            if((formaDePagamento == "Parcelado") && (quantiParcela <= 2)){

            resultado = valor; 
            return resultado;
        
        }else if((formaDePagamento == "Parcelado") && (quantiParcela > 2)){
            
            resultado = valor * 1.1;
            return resultado;
        }
    }
    function valorParcela(resultado,quantiParcela){

        
    }
    function calulaDesconto( modalidade, formaDePagamento, valor, resultado){
        if (modalidade =="Credito"){
            calculaCredito(formaDePagamento, valor, resultado)
        }
        else{
            calculaDebito(formaDePagamento, valor, resultado)
        }
        return resultado;
    }

    function main(){
            var modalidade, resultado, formaDePagamento, valor, quantiParcela;
            modalidade ="Credito" ;
            formaDePagamento ="Parcelado" ;
            valor = 535.60 ;
            quantiParcela = 6 ;
            

            
    }