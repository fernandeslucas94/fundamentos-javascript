"use strict";

// *** MÉTODOS ***

/// Quando queremos mostrar um determinado número em nossa aplicação, e caso este número possua casas decimais, pretendemos apresentar somente parte do número, podemos utilizar o método .toFixed()! O que ele faz ? Ao utilizamos este método, precisamos informar entre os parênteses, quantos números da casa decimal, ou seja, após a vírgula, queremos apresentar! 
//
/// Utilizando o exemplo abaixo, caso queiramos mostrar apenas os números antes da vírugla, devemos trabalhar da forma como foi mostrado no exemplo! Caso queiramos que apareça 25.35, devemos utilizar da seguinte forma: numero.toFixed(2)! Neste caso, será mostrado os dois números após a vírgula!

let numero = 25.353;

console.log(numero.toFixed(0));


// *** FOR ***

/// Quando precisamos utilizar o FOR em uma situação onde a concatenação não será a tradicional, ou seja, de um em um, podemos utilizar uma maneira a qual podemos fazer com que o código seja executado, por exemplo, de dois em dois! Veremos em um exemplo logo abaixo:

let numeros = [1, 2, 5, 16, 68, 200, 100.3, 258.639, 78];

for(let i = 0; i < numeros.length; i+=2) {
    console.log(`O número do momento é: ${numeros[i]}`);
}

// *** Exercícios e exemplos diversos ***

let profissao = "Desenvolvedor";

switch(profissao) {
    case "Desenvolvedor":
        console.log("Você é desenvolvedor de software");
        break;
    case "Bancário":
        console.log("Você é bancário!")
        break;
    default:
        console.log("Profissão não encontrada!")
        break;
}

console.log(`Sua profissão é: ${profissao}`);

function andarCarro() {
    const funcionar = () => {
        console.log("O carro está ligado!");
    }

    const ligado = () => {
        let combustivel = false;

        switch(combustivel) {
            case true:
                funcionar();
                break;
            case !true:
                console.log("É necessário abastecer o carro!");
                break;
        }
    }

    return ligado();
}

andarCarro();