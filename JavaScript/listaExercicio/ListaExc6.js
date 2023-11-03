/*
Conversor de moeda
    Você está criando um aplicativo conversor de moeda.
    Crie uma função chamada convert , que recebe dois parâmetros: o valor a ser convertido e a taxa, e retorna o valor resultante.
    O código para pegar os parâmetros como entrada e chamar a função já está presente no Playground.
    Crie a função para fazer o código funcionar.

    Entrada de amostra:
        100
        1.1

    Saída de amostra:
        110

    Converter 100 à taxa de 1,1 é igual a 100*1,1 = 110 
*/  
    main();
    
    function main(){
        let quantMoeda, taxaConver,conversao;
        quantMoeda = 100;
        taxaConver = 1.3;
        conversao = convert(quantMoeda,taxaConver);
       
        console.log("A a quantidade de "+quantMoeda+" equivale a "+conversao+" a taxa de "+taxaConver)
    }

    function convert(quantMoeda,taxaConver ){
        let conversao = quantMoeda*taxaConver;
        return conversao;
    }