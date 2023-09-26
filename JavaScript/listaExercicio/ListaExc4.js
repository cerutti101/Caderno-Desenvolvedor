/*
3) elabore um algoritmo que calcule o que deve ser pafo por um produto, considerando
 o preço normal de etiqueta e a escolha da condição de pagamento.
 Utilize os codigos da tabela a seguir para ler qual a condição de pagamento escolhida
 e efetuar o calculo adequado.

 Codigo Condição de pagamento:
 - A vista Debito, recebe 10% de desconto;
 - A vista no Dinheiro ou PIX, recebe 15% de desconto;
 - Em duas vezes, preço nornal de etiqueta sem juros;
 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

    DIFERENCIAL : FUNÇÔES
 */
    function adapMensagem(formaDePagamento,valor,modalidade){


    }

    function debito(formaDePagamento, valor, resultado){
            if (formaDePagamento == "Cartão"){

                resultado = valor - (valor * 0.1);
                return resultado;

            }else if((formaDePagamento == "Moeda")||(formaDePagamento == "Pix")){
            
                resultado = valor - (valor * 0.15);
                return resultado;
            
        }
    }

    function credito(formaDePagamento, valor, resultado){
            if((formaDePagamento == "Parcelado") && (quantiParcela <= 2)){

            resultado = valor; 
            return resultado;
        
        }else if((formaDePagamento == "Parcelado") && (quantiParcela > 2)){
            
            resultado = valor * 1.1;
            return resultado;
        }
    }
    function valorParcela(resultado,quantiParcela)

    function main(){
            var modalidade, resultado, formaDePagamento, valor, quantiParcela;
            modalidade ="Credito" ;
            formaDePagamento ="Parcelado" ;
            valor = 535.60 ;
            quantiParcela = 6 ;
            

            console.log(mensagem);
    }
