/*
2) O IMC - Indice de Massa Corporal é um criteiro da 
   Organização Mundial de Saude para dar uma indicação 
   sobre a confição de peso de uma pessoa adulta

   Formula do IMC:
   IMC = peso / (altura * altura)

   Elabore um algoritmo que dado o peso e a altura de um adulto
   mostre sua condição de acordo com a tabela abaixo.

   IMC em adultos Condição:
   - Abaixo de 18.5 Abaixo do peso;
   - Entre 18.5 e 25 Peso normal;
   - Entre 25 e 30 Acima do peso;
   - Entre 30 e 40 Obeso;
   - Acima de 40 Obesidade Grave;

*/
const peso = 90;
const altura = 1.87;
var mensagem;
var imc = peso /( altura * altura);

if (imc < 18.5){
    mensagem = "Abaixo do peso";
} else if ((imc >= 18.5)||(imc <25)){
    mensagem = "Peso normal";
}else if ((imc >= 25)||(imc < 30)){
    mensagem = "Acima do peso";
}else if ((imc >= 30)||(imc < 40)){
    mensagem = "Obeso";
}else if (imc > 40){
    mensagem = "Obesidade Grave";
}else{
    mensagem = "deu pau no codigo"
}

console.log(" O nosso calculo deu "+imc +" sendo seu indice "+ mensagem);