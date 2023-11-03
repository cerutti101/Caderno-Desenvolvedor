/* Utilizando Objetos
A classe dada representa um cubóide (por exemplo, um prisma retangular) que contém as propriedades de comprimento, largura e altura.
Conclua o programa para calcular e enviar o volume de determinado cubóide para o console.

nível
Para calcular o volume do cubóide, use a fórmula comprimento*largura*altura .*/
var cuboid = {
    length: 25,
    width: 50,
    height: 200
};

//your code goes here
var volume = cuboid.length * cuboid.width * cuboid.height;
console.log(volume);