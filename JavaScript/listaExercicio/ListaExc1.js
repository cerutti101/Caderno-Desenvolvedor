/*Lista de exercicios
1) Faça um algoritimo que dado as 3 notas tiradas por um aluno 
   em um semetre da faculdade calcule e imprima a sua media e a
   sua classificação conforme a tabela abaixo:

   media = (nota 1 + nota 2 + nota 3) / 3;

   Classifiação:
   - Media menor que 5 , reprovador;
   - Media entre 5 e 7, recuperção;
   - Media acima de 7, passou de semestre;
*/

// Resolução:

const nota1 =6;
const nota2 =6;
const nota3 =6;
let media = (nota1 + nota2 + nota3) / 3
let classificacao;
if(media<5) {
        classificacao = " o aluno esta em Reprovação";
    } else if(((media>= 5) && (media <=7))){
        classificacao = " o aluno esta em recuperação";
    }else if(media >7){
        classificacao = " o aluno passou de semestre, PARABENS!"
    }
console.log(" Com a media no valor de "+ media + " informamos que "+ classificacao);
