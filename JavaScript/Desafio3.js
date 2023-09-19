/*
Exercício para a utilização de conceito:

Faça um programa para calcular o valor de uma viagem. 

Você tera 3 varáveis, serão:

- Preço do Etanol. (precoE)
- Preço Gasolina. (precoG)
- Tipo de combustivel (tipo)
- Gasto médio de combustível do carro por km. (kiloLitro)
- Distancia em km por viagem. (distancia)
/*

 */
const precoE = 5.6;
const precoG = 3.5;

const distancia = 100;
const tipo = "G"; 
var kiloLitro ;
var calculo ;

if( tipo === "G"){
    kiloLitro = 6;
    var calculo = (distancia/kiloLitro)*precoG;
    } else {
    kiloLitro = 4;    
    var calculo = (distancia/kiloLitro)*precoE;
    }

console.log(" O custo da viagem será de : " + calculo.toFixed(2)+ " reais");
