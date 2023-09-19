// Coeficiente que deve ser dividido para achar km em milhas
const Δk = 0.62137;

// Quantidade de unidades de minutos em uma hora
const minutos = 60;

// Quantidade de unidades de horas em um dia
const dia = 24;

// Início do exercício
var milhas = 1200;
var velocidade = 40;

let horasViagem =(milhas / Δk) / velocidade ;
let minutViagem = horasViagem * minutos;
let diasViagem = horasViagem / dia;
let afirmação;
if ((diasViagem == 2) || (diasViagem >= 2)) {
  afirmação = "a viagem durará 2 dias ou mais";
} else {
  afirmação = "a viagem durará menos de 2 dias";
}
console.log('A viagem informada durará: ' + minutViagem.toFixed(2) +" minutos, sendo assim "+ afirmação);
