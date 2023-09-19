# Primeiros passos com JavaScript

Declaração de variáveis e operadores aritméticos:

     Antes de tudo, é importante entender como fazer com que o console aplique a informação que você que ele retorne.

Para isso existe o código:

```jsx
console.log('O texto que queremos')
```

### Variáveis

     Usamos a seguinte estrutura para declarar variáveis.

<aside>
⚠️ **Tipo da variável nome da variável = valor da variável**

</aside>

     (Por JS ser uma linguagem dinâmica, não é necessário declarar qual tipo de dado estamos guardando na variável)

   Antes de definir as variáveis, primeiro definirei escopo:

   JS trabalha com a ideia de escopos (pequenos grupos de atuação) como, por exemplo, função(function exemplo()), condicionais (ifs e elses) e estruturas de repetição (while, for). 

   Dito isto temos o seguinte tipos de variáveis:

   **var:** Esta variável trabalha de forma independente para cada escopo, ou seja:

```jsx
var nomeCarro = 'onix';

/* A variavel esta castada como 'onix'*/

function carro() {
   var nomeCarro = 'fiesta';
   console.log(nomeCarro) /* A variavel esta castada como 'fiesta'*/;
}

/* A variavel esta castada como 'onix'*/
console.log(nomeCarro);

/* Isso acontece devido a propriedade do tipo de variavel
VAR, que respeita o escopo em que foi declarada*/
```

   

Porem, ao ser colocado em um fluxo de condição, o valor pode ser alterado.

   **let:** Esta variável trabalha de forma independente para cada escopo, ou seja:

```jsx
let nomeCarro = 'onix';
var i = 0;
/* onix*/

if (i === 0){
	let nomeCarro = 'fiesta';
	console.log(nomeCarro);
/*Fiesta*/
}
/*Onix*/
console.log(nomeCarro);
```

   **const:** A constante funciona como um valor fixo, não podendo ser alterado seu valor, em um mesmo escopo, podendo ser retornado um código de erro. 

### Operadores aritméticos

   Os operadores aritméticos funcionam tanto em variáveis quanto em números literais.

| Operador | Descrição | Exemplo |
| --- | --- | --- |
| + | Adição | 25 + 5 = 30 |
| -  | Subtração | 25 - 5 = 20  |
| * | Multiplicação | 10 * 3 = 30 |
| / | Divisão | 30 / 3 = 10 |
| % | Modulo | 56 % 3 = 2 |
| ++ | Incremento | var a = 10
a++ = 11 |
| - -   | Decremento | Var a = 10
 a - -1 = 9 |

   Exemplo de utilização de operadores aritméticos:

```jsx
var soma = 5 + 5
console.log(soma);
//soma = 10 

var multiplicação = 1 * 3
console.log(multiplicação);
// multiplicação = 9

var incremento = 1
incremento ++1
console.log(incremento);
//incremento = 2

```

```jsx
var divisão = 6 / 3
console.log(divisão);
//divisão = 2

var modulo = 5 % 2
console.log(mudolo);
//modulo = 1

var decremento = 2
decremento - - 
console.log(decremento);
//decremento = 1

```

## Exercício para a utilização de conceito:

- Faça um programa para calcular o valor de uma viagem.
    
       Você tera 3 varáveis, serão:
    
    - Preço do combustível.
    - Gasto médio de combustível do carro por km.
    - Distancia em km por viagem.
    
    <aside>
    🙂 Fora de um programa eu calcularia da seguinte maneira:
    X = gasto de combustível.
    
    X = (Gasto Médio/ Distância da Viagem) * Preço
    
    </aside>
    
    Fiz o código no arquivo [Desafio1.js](https://www.notion.so/Curso-de-JavaScript-4285b16dc644458da604efa87593d75d?pvs=21)
    

### Operadores de Atribuição

São operadores que atribuem variáveis em JavaScript:

| Operador | Exemplo | Equivale a  |
| --- | --- | --- |
| = | x = y  | x = y |
| += | x += y | x = x + y |
| -= | x -= y  | x = x - y |
| *= | x *= y | x= x * y |
| /= | x /= y | x= x / y  |
| %=  | x %= y | X = x % y  |

<aside>
👉 Em suma, eles são abreviações de operações aritméticas simples.

</aside>

### Operadores Lógicos

**Operadores lógicos,** os famosos ********************Booleanos******************** retornam valores de **TRUE** ou **FALSE.**

Podemos reconhecê-los pelos famosos **AND  (e)**, **OR (ou)** e **NOT (não).**

| Operadores | Como escrevo | Resultado | Exemplo |
| --- | --- | --- | --- |
| AND | && | Retorna TRUE se ambos forem verdadeiros. | (4 > 2) && (10 < 15) |
| OR | || | Retorna TRUE se 1 dos operadores for verdadeiro. | (4 < 2) || (10 < 15) |
| NOT | ! | Inverte o conceito, ou seja, se for TRUE retorna FALSE, se for FALSE retorna TRUE | (4 < 2) ! (10 < 15) |

### Operadores Condicional Ternário

Para fazer operações condicionais ou Ternarias precisamos da seguinte sintaxe:

<aside>
⚠️ Tipo da variável Nome da Variável = (condição) ? Valor se verdadeiro : valor se falso

</aside>

Ficando como exemplo:

```jsx
var idade = 16
var Adulto = (idade < 18) ? "Muito Jovem": "É um adulto";
```

### Operadores de Comparação

   Podemos usar operadores de comparação em declaração logicas, para descobrir diferenças nas variáveis.

   Retornando também **TRUE** ou **FALSE**

   Como no exemplo:

```jsx
var num = 10;
console.log(num == 8);
//A comparação retornara  false
```

<aside>
⚠️ Vale lembrar aqui que o símbolo “=” no JavaScript serve como **atribuição**, não sendo um operador lógico, ou operador de comparação.

</aside>

| Operador | Descrição | Exemplo |
| --- | --- | --- |
| == | Igual a  | 5 == 10 (FALSE) |
| === | Idêntico a (mesmo valor e tipo de dado) | 5 === ‘5’ (FALSE) |
| ! =  | Não é igual a  | 5 ! = 10 (TRUE) |
| ! == | Não idêntico a  | 5 === ‘5’ (TRUE) |
| > | Maior que | 4>2 (TRUE) |
| > = | Maior igual que | 3=3 (TRUE) |
| < | Menor | 2<3 (TRUE) |
| < =  | Menor igual a  | 2< = 2 (TRUE) |

Uma coisa importante a lembrar quando usamos operadores é que eles só funcionam quando comparam o **mesmo tipo de dados** ; números com números, strings com strings, essa é a ideia.

Exemplo seria :

```jsx
val1 == val2 // são iguais
val1 != val2 // diferente
val1 < val2 // menor que
val1 === val2 // são estritamente iguais (idênticos)
```

## Exercício para a utilização de conceito:

- Você precisa planejar uma viagem.
 Você está viajando a uma velocidade média de **40 Quilômetros por hora.**
    
    Dada uma distância em **milhas** como entrada.
    Processe essas duas variáveis e veja se a viagem durara 2 dias, devolva **true** ou **false** para a afirmativa.
    Envie para o console o tempo que você levará para percorrê-la em minutos.
    

   Foi realizado no javaScript/Desafio2.js 

[Curso de JavaScript](https://www.notion.so/Curso-de-JavaScript-4285b16dc644458da604efa87593d75d?pvs=21)

### Operadores de String

  Uma grande questão do JavaScript, o concatenador  “+” ele permite construir strings composta por múltiplas strings menores ou unindo strings com outros tipos, exemplo:

```jsx
// Exemplo de String
var mystring1 = "To aprendendo ";
var mystring2 = "JavaScript.";
console.log(mystring1 + mystring2);
// resultado ( To apredendo JavaScript. )

// Exemplo de pegadinha
var x = "50";
var y = "100";
documento.write(x+y);
// resultado (50100)
```

# Os condicionais

### A Declaração “IF”

   A mais conhecida condicional do mundo (acho), é usada para levar o seu código a uma direção diferente com base em uma condição simples traduzida como “SE”, Exemplo:

   comerei pão

```jsx
if (tem requeijão) {
   comerei pão com requeijão.
}
```

   As instruções só serão executadas se a condição especificada for **verdadeira.**

   Aí vem a questão, e se for falso? No caso, se não tiver requeijão, eu ignorarei essa confissão, e só comerei o pão mesmo, o programa continua com a linha após a chave de fechamento da instrução if.

### A Declaração “ELSE”

   É a condição que entra nessa lacuna, se eu não quiser comer pão sem nada, eu posso criar outra condição, afinal posso continuar procurando coisas na minha geladeira antes de chegar a concluir meu pão.

```jsx
if (tem requeijão) {
   comerei pão com requeijão.
}
else {
  comerei pão com mussarela
}
```

### A instrução “ELSE IF”

   E se quero fazer uma segunda comparação atrelada a primeira? Poise é para isso que serve o “ElSE IF”.

```jsx
if (tem requeijão?) {
   vou comer pão com requeijão.
} else if (tem margarina?) {
   vou comer pão com margarina.
} else {
   vou comer pão com agua.
}
```

### A Declaração “SWITCH”

   É uma alternativa valida caso o codigo demande muitas condições, nesse caso voce entraria com um resultado possivel para cada condição, por exemplo:

```jsx
switch (expression) {
  case n1: 
     statements
     break;
  case n2: 
     statements
     break;
  default: 
     statements
}
```

   A expressão switch é avaliada uma vez. O valor da expressão é comparado com os valores de cada **case** e, se houver correspondência, esse bloco de código é executado

```jsx
var dia = 2;
switch (dia) {
  case 1:
    document.write("Domingo");
    break;
  case 2:
    document.write("Segunda");
    break;
  case 3:
    document.write("Terça");
    break;
  default:
    document.write("Outro dia ");
}
```

### **A palavra-chave break**

   Portanto, aprendemos que a instrução switch testa um bloco de código, mas nem sempre queremos que ela teste o bloco inteiro. A palavra-chave **break** essencialmente desativa a instrução switch.

   A saída do bloco switch interrompe a execução de mais códigos e testes de caso dentro do bloco.

   Muitas vezes não haverá correspondência, mas ainda precisamos que o programa produza algo... para isso usamos a palavra-chave **********default********** , que especifica o código a ser executado se não houver correspondência de maiúsculas e minúsculas.

```jsx
var cor ="Amarelo";
switch(cor) {
   case "Azul": 
     document.write("É azul");
     break;
   case "Vermelho": 
     document.write("É vermelho.");
     break;
   case "Verde": 
     document.write("É verde."); 
     break;
   case "Laranja": 
      document.write("É laranja"); 
      break;
   default: 
      document.write("Não achei uma cor");
}
```

# Os ciclos

### O ciclo “FOR”

### O ciclo “ WHILE”

### Os comandos “BREAK” e “CONTINUE”