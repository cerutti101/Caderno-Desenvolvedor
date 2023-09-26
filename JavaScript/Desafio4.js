/*
O caracol no poço

O caracol sobe 2,10 metros por dia e recua 60 centímetros por noite.
Quantos dias o caracol levará para sair de um poço com a profundidade de 60 metros?

*/
var total, cont;
const medida = 60;
const dia = 2.1; 
const noite = 0.6;

for (cont = 0,total = 0; total < medida; cont++){
    
    total += dia;
    
    if (total == medida){
        break;
    }
    total -= noite;
 }

 console.log("O caracol vai demorar :"+ cont +" dias.")