/*
Exercício para a utilização de conceito:

Faça um programa para calcular o valor de uma viagem. 

Você tera 3 varáveis, serão:

- Preço do combustível. (preco)
- Gasto médio de combustível do carro por km. (kiloLitro)
- Distancia em km por viagem. (distancia)
/*

 */
const preco = 5.6
var kiloLitro = 4
var distancia = 240
var calculo = (distancia/kiloLitro)*preco
console.log(" O custo da viagem será de : " + calculo);
