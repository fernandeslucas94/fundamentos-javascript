// IF e ELSE

let time = 'Cruzeiro'
let estado = 'Minas Gerais'

if (time == 'Cruzeiro' && estado == 'Minas Gerais') {
    console.log('Excelente!')
} else {
    console.log('Não é mineiro')
}

/// Outra maneira de utilizarmos o conceito do IF/ELSE, é de ao invés de nos utilizarmos da maneira descrita acima, podemos utilizar IF's para diferentes condições, e ao fim, podemos adicionar um ELSE para servir como, por exemplo, o DEFAULT do SWITCH/CASE. Veja exemplo logo abaixo:

function entradaCinema() {
    let idade = 29;
    let ingresso = true;

    if(idade >= 18 && ingresso) {
        console.log("Você está liberado(a) para assistir à este filme!")
    }

    if(idade >= 18 && !ingresso) {
        console.log("Adiquira um ingresso para entrar nesta seção de cinema!")
    }

    else if (idade < 18) {
        console.log("Infelizmente você não poderá entrar neste seção de cinema")
    }
}

console.log(entradaCinema())

// Operador Ternário
// O operador ternário, é uma forma de fazer um if/else de uma maneira mais elegante e rápida.
//Ex.
console.log (time == 'Cruzeiro' ? 'Time bom' : 'Time regular');