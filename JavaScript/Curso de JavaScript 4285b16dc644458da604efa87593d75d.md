# Curso de JavaScript

## Primeiros passos com JavaScript

Declaração de variáveis e operadores aritméticos:

     Antes de tudo, é importante entender como fazer com que o console aplique a informação que você que ele retorne.

Para isso existe o código:

```jsx
console.log('O texto que queremos')
```

     Usamos a seguinte estrutura para declarar variáveis.

**Tipo da variável nome da variável = valor da variável**

     (Por Js ser uma linguagem dinâmica, não é necessário declarar qual tipo de dado estamos guardando na variável)

     Antes de definir as variáveis, primeiro definirei escopo:

JS trabalha com a ideia de escopos (pequenos grupos de atuação) como, por exemplo, função( function exemplo() ), condicionais (ifs e elses) e estruturas de repetição (while, for) 

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

Porem ao ser colocado dentro de um fluxo de condição, o valor pode ser alterado.

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