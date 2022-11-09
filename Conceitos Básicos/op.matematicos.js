//Abaixo iremos visualizar a documentação referente a operadores matemáticos no JS.

//Adição:
console.log(10+5+5);

//Subtração:
console.log(10-3-2);

//Multiplicação:
console.log(5*5); // O sinal asterisco é utilziado para multiplicar no JS.

//Divisão
console.log(10/2); // A barra é sinal de divisão

//Exponensiação (Elevar um número ao quadrado, por exemplo, ou ao cubo, etc...)
console.log(3**3); // É igual a 3 ao cubo, ou 3 elevado a 3.

//É possível também atribuir uma operação matemática a uma ou mais variáveis.
//Ex.
let a = 10;
let b = 5;

console.log(a+b);

//Módulo (Saber o resto de uma divisão)
//É utilizado o sinal de porcentagem para o cálculo do resto da divisão.
//Ex.
console.log(10%2);
console.log(10%3);

//Incremento de número
//É utilizado para incrementar um número no valor de outro número que já está sendo utilziado.
//Ex.
let c = 7;

console.log(c++);
console.log(c); // 8

//ou 

console.log(++c);

//Decremento de número
//Ao contrário do incremento, é utilizado para decrementar, ou seja, diminuir um número no valor de outro número.
//Ex.

let d = 10

console.log(b--);
console.log(b); // 9

//ou

console.log(--b);
//Tanto no incremento quanto no decremento, pode-se utilizar o sinal antes ou depois do nome da variável. Qual a diferença ? Exemplo, quando você utiliza depois do nome da variável, ao imprimir na tela, por exemplo, console.log(a++);, o JS irá 'imprimir' a mensagem e depois irá realizar o incremento. Sendo assim, ao checar o valor no console, irá aparecer 7 ao invés de 8. Mas se for solicitado um novo console.log(a), aí sim irá aparecer o valor 8. 
//Se for utilizado o sinal antes do nome da variável, o JS irá realizar a operação primeiro para depois 'imprimir' no console o resultado, assim feito irá aparecer 8.
//O mesmo serve para decremento.