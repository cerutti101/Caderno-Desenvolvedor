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

   Em geral os ciclos servem para executar um bloco de codigos varias vezes.

   Eles são uteis quando voce deseja executar o mesmo codigo repetidamente, adicionando um valor diferente a cada vez.

### O ciclo “FOR”

   O ciclo “FOR” basico, é da seguinte maneira:

   

<aside>
👉 **for** (**declaração1** ; **declaração2** ; **declaração3**) {
//codigo que deve ser executado dentro do ciclo
}

</aside>

   O processo interno é:

- declaração1 - É executado antes do bloco começar (voce pode criar uma variavel).
- declaração2 - Define a condição para executar o loop (o bloco de codigo).
- declaração3 - É executado sempre apos a execução do loop(o bloco de codigo).

   **Um exemplo é :**

```jsx
for (i=1; i<=5; i++) {
   document.write(i + "<br />");
}
```

**A Instrução 1 :** Define uma variável antes do início do loop (var i = 1).

**A instrução 2 :** Define a condição para a execução do loop (deve ser menor ou igual a 5).

<aside>
👉 Se a **afirmação 2** retornar verdadeiro, o loop será reiniciado; se retornar falso, o loop terminará.

A instrução 2 também é opcional, mas somente se você colocar uma **quebra** dentro do loop. Caso contrário, o ciclo nunca terminará!

</aside>

**A instrução 3 :** Aumenta um valor (i++) cada vez que o bloco de código no loop é executado.

<aside>
👉 A **instrução 3** é usada para alterar a variável inicial. Ele pode fazer qualquer coisa, incluindo incremento negativo (i--), incremento positivo (i = i + 15).

### 

</aside>

### O ciclo “ WHILE”

   O loop **while** se repete por causa de uma afirmativa de true or false, ou seja o resultado da declaração de condição é sempre um valor booleano (verdadeiro ou falso)

O loop **while** se repete através de um bloco de código, mas apenas enquanto uma condição especificada for **verdadeira** .

<aside>
👉 **while** (Condição){
// codigo que deve ser usado no ciclo
}

</aside>

Um exemplo de:

```jsx
var i=0;
while (i<=10) {
   document.write(i + "<br />");
   i++;
}
```

   O loop neste código continuará a ser executado enquanto i for menor ou igual a 10. E cada vez que o loop for executado, ele aumentará em 1.

Isso produzirá valores de 0 a 10.

<aside>
⚠️ **Loops infinitos não são bons.** E uma maneira de isso acontecer é esquecermos de aumentar a variável usada na condição.

</aside>

### O ciclo Do…While

   É uma variante do loop while, mas com uma diferença importante.

   Este loop executará o bloco de código uma vez, **antes** de verificar se a condição é verdadeira, e então repetirá o ciclo enquanto a condição for **verdadeira**.

   A **sintaxe:**

<aside>
👉 **DO** {

//Bloco de codigo que sera executado.

}

**WHILE** (**condição**);

</aside>

   O exemplo é:

```jsx
var i=20;
do {  
  document.write(i + "<br />");
  i++;  
}
while (i<=25);
Clique para executar
```

<aside>
⚠️ O loop sempre será executado **pelo menos uma vez** , mesmo que a condição seja falsa, porque o bloco de código é executado antes da condição ser testada.

</aside>

### Os comandos “BREAK” e “CONTINUE”

   O **************BREAK************** é usado pra “sair” de um loop e continuar executando o codigo apos o ciclo;

   **Exemplo:**

```jsx
for (i = 0; i <= 10; i++) {
   if (i == 5) {
     break; 
   }
   document.write(i + "<br />");
}
```

<aside>
⚠️ Você pode usar a palavra-chave **RETURN** para retornar algum valor imediatamente do ciclo dentro de uma função. Isso também quebrará o ciclo.

</aside>

   O **CONTINUE** é usado para intorromper apenas uma interação no loop e continua com a proxima interação.

   ****************EXEMPLO:****************

```jsx
for (i = 0; i <= 10; i++) {
   if (i == 5) {
      continue; 
   }
   document.write(i + "<br />");
}
```

## Funções

   Uma **função** JavaScript é um bloco de código projetado para executar uma tarefa específica.

   As principais vantagens de usar funções:

   **Reutilização** de código : defina o código uma vez e use-o várias vezes.

   Use o mesmo código muitas vezes com **argumentos** diferentes , para produzir resultados diferentes.

   O que é uma função? Um determinado bloco de codigo que pode ser reutilizado continuamente.

A sintaxe é :

<aside>
👉 **FUNCTION** nome(){
// Codigo que será reutilizado
}

</aside>

   Os nomes das funções podem conter letras, dígitos, sublinhados e cifrões (mesmas regras das variáveis).

   Para utilizar a **função** que voce criou, é da seguinte maneira:

```jsx
function funcao() {
  alert("Chama a função");
}

funcao();
```

<aside>
👉 Você também pode chamar uma função usando esta sintaxe: myFunction.call(). A diferença é que ao chamar dessa forma, você está passando a palavra-chave 'this' para uma função.

</aside>

### ****Parâmetros de Função****

   Funções podem ou nao receber ************************Parametros************************ de função.

   **********************Parametros********************** de função são declarados ao cliar a função entre os dois “()” posteriores ao nome.

<aside>
👉 **nomeFunção**(parametro1, parametro2, parametro3){
// o codigo que deve ser executado
}

</aside>

<aside>
⚠️ Assim como acontece com as variáveis, os parâmetros devem receber **nomes** , que são **separados por vírgulas** entre parênteses.

</aside>

Exemplo :

```jsx
function sayMyName (nome) {
 console.log(" Fala meu mano "+nome);
}
```

   **Os argumentos** da função são os valores reais passados para (e recebidos pela) função.

Exemplo de utilização:

```jsx
function sayMyName (nome){
console.log("Fala meu mano "+ nome);
}

sayMyName("Tortinha de melão");
sayMyName("Gostinho de fruta");
sayMyName("Arlindo");
```

### ****Vários parâmetros****

   Cada função pode receber a quantidade que necessita de variaveis, sendo assim, uma mesma função pode receber mais de um unico paramento como foi exemplificado acima.

   Exemplo de função com dois parametros:

```jsx
function meuNome (pNome, uNome){
 console.log( "Eu me chamo"+ pNome  +", mas meus consagrados me chamam de " +uNome
}
```

<aside>
⚠️     Se você passar **mais** **argumentos do que os definidos**, eles serão atribuídos a um array chamado **arguments**. 
   Eles podem ser usados assim: **arguments**[0], **arguments**[1], etc.

</aside>

<aside>
⚠️ Se uma função for chamada com argumentos **ausentes** (menos do que os declarados), os valores ausentes serão definidos como **undefined** , o que indica que não foi atribuído um valor a uma variável.

</aside>

### ****Retorno de função****

   Você pode usar a instrução **RETURN** que tem como proposito retornar um valor apos processo.

   Essa intrução é util por exemplo se voce precisa fazer calculos que requerem um resultado.

Exemplo:

```jsx
function myFunction(a, b) {
   return a * b;
}

var x = myFunction(5, 6);
```

<aside>
⚠️ Se você não retornar nada de uma função, ela retornará **undefined** .

</aside>

### **Como organizar as funções?**

   Criaremos o codigo principal dentro de uma função chamada **MAIN**, no inicio do codigo

   E fora da função main (normalmente em cima) criamos funções auxiliares, ficando por exemplo:

  

```jsx
function calcularJuros(){

}
function main(){
console.log("Programa principal");
calcularJuros();
}

```

### Função anônima:

   Função anônima é uma função que não damos uma nomenclatura para ela, e normalmente são usadas para funções invocadas imediatamente, ficando com a seguinte estrutura:

```jsx
(function () {
	const peso = 75;
	const altura = 1.75;
	
	const imc = calcularImc(peso,altura);
	console.log(classificarImc(imc));
})()
```

## ****Objetos em JavaScript:****

   **Objetos** nada mais são que variáveis parrudonas, eles são como uma lista que se lê em pares (************************NOME:VALOR)************************ exemplo:
   

```jsx
var pessoa = {
 nome: "João", idade: 31, 
 corFav: "verde", altura: 183
};
```

   Os nomes de um objeto são chamados de propriedades, podemos exemplificar um objeto assim:

| Propriedade | Valor |
| --- | --- |
| Nome | João |
| Idade | 31 |
| Cor Favorita | Verde |
| Altura | 183 |

### ****Propriedades do objeto****

   Como eu acesso os as propriedades de dentro de um objeto?

Temos dois jeitos de ter acesso a esses dados, sendo o ******************primeiro:******************

```jsx
nomedoObjeto.nomedaPropriedade
```

   O ****************segundo**************** será:

```jsx
objectName['propertyName']
```

   Este exemplo demonstra como acessar a idade do nosso objeto pessoal.

```jsx
var pessoa = {
 nome: "João", idade: 31, 
 corFav: "verde", altura: 183
};
var x = pessoa.idade;
var y = pessoa['idade'];
```

   Para a utilização de objetos existe  a propriedade **length,** que conta quantos números de caracteres em uma propriedade ou string.

```jsx
var curso = {nome: "JS", licao: 41};
conole.log(curso.nome.length);
```

## ****Métodos de objeto****

   Um **método** de objeto é uma propriedade que contém uma **definição de função** .

   Use a seguinte sintaxe para acessar um método de objeto.

```jsx
nomedoObjeto.nomeMetodo()
```

Como você já sabe, **document.write()** gera dados. A função **write()** é na verdade um método do objeto **de documento** .

## ****Construindo o objeto****

   No exemplo anterior criamos um objeto com a sintaxe básica visto:

```jsx
VAR pessoa = {
nome: "joão", idade: 21, corFavori: "Verde"
};
```

   Isso permite que você crie apenas um único objeto.

   Mas, e se não for essa a intenção? Se precisarmos criar mais um um objeto no mesmo molde.

   Em **Js,** temos um conceito que é ********************************FUNÇÃO CONSTRUTORA******************************** de objetos.

   Um exemplo de **************************************função construtora************************************** para o objeto “pessoa” que temos usado é:

```jsx
function Pessoa (nome, idade, cor){
   this.nome = nome;
   this.idade = idade;
   this.corFav = cor;
}
```

   Uma explicação para o código é, a função pega os parâmetros passados e popula as variáveis de um objeto.

<aside>
⚠️ A palavra-chave **this** refere-se ao **objeto atual**.

Observe que **THIS** não é uma variável. É uma palavra-chave e seu valor não pode ser alterado

</aside>

   Depois de ter um construtor de objeto, você pode usar a palavra-chave **new** para criar novos objetos do mesmo tipo.

```jsx
var P1 = new person("Felps",23,"verde");
var P2 = new person("Sthefanie",26,"Rosa");
```

    P*1* e P*2* agora são objetos do tipo **pessoa** . Suas propriedades são atribuídas aos valores correspondentes.

| Nome do Objeto | Nome da propriedade |
| --- | --- |
|                        João. | nome |
|                        João. | idade |
|                    Gabriel. | nome |
|                    Gabriel. | idade |

### ****Inicialização de objeto****

Use o objeto **literal** ou a sintaxe do **inicializador** para criar objetos únicos.

**Sintaxe:**

<aside>
👉 **var nomeVariavel = {nomePropriedade1: valorPropriedde1 ,nomePropriedade2: valorPropriedde2}**

</aside>

**Exemplo:**

```jsx
var joao = {name: "joao", idade: 25} 
```

<aside>
⚠️ Objetos consistem em propriedades, que são usadas para descrever um objeto. Os valores das propriedades do objeto podem conter tipos de dados primitivos ou outros objetos.

</aside>

É Importante salientar 2 coisas:

- Espaços e quebras de linha não são importantes. Uma definição de objeto pode abranger várias linhas.
- Não importa como o objeto é criado, a sintaxe de acesso às propriedades e métodos não muda. (**nomeVariavel.nomePropriedade , nomeVariavel[’nomePropriedade’]**)

### ****Métodos****

São funções armazenadas como propriedades de objetos.

Sintaxe:

<aside>
👉 nomeMetodo = funcao() {linha de códigos}

</aside>

E para acessar os métodos de um objeto, pode se usar a seguinte sintaxe:

<aside>
👉 nomeObjeto.nomeMetodo()

</aside>

A definição de métodos e feita dentro da função construtora

Por exemplo:

```jsx
function pessoa(nome, idade) {
  this.nome = nome;  
  this.idade = idade;
  this.trocaNome = function (nome) {
    this.nome = nome;
  }
}

var p = new pessoa("David", 21);
p.trocaNome("João");
//Agora p.name e igual a "João"
```

Você também pode definir a função fora da função construtora e associá-la ao objeto.

```jsx
function pessoa(nome, idade) {
  this.nome= nome;  
  this.idade = idade;
  this.anodeNascimento = anoNascimento;
}
function anoNascimento() {
  return 2016 - this.idade;
}
```

Como você pode ver, atribuímos a propriedade **anodeNascimento** do objeto à função **anoNascimento.**

A palavra-chave **this** é usada para acessar a propriedade *idade* do objeto, que irá chamar o método.

```jsx
function person(name, age) {
  this.name= name;  
  this.age = age;
  this.yearOfBirth = bornYear;
}
function bornYear() {
  return 2016 - this.age;
}

var p = new person("A", 22);
document.write(p.yearOfBirth());
```

<aside>
👉 Chame o método pelo **nome da propriedade** especificado na função construtora, em vez do nome da função.

</aside>