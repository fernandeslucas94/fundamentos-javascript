/// Neste momento iremos conhecer sobre o que chamamos de Arrow Function! Mas o que seria isto e qual a diferença de uma função tradicional ?
//
/// A arrow function, nada mais é, do que uma maneira diferente de escrever, ou declarar, uma função. Ela, a arrow function, não tem nenhum super poder a mais do que a maneira tradicional de declarar uma função!
//
/// Utilizando a arrow function, podemos declarar as funções como se fossem variáveis, ou constantes! Logo mais abaixo iremos ver exemplos de como podemos utilizá-la e de sua funcionalidade!

// Exemplo utilizando o método tradicional de declaração de função:


function somar(n1, n2) {
    return n1 + n2;
}

// Veremos abaixo o primeiro exemplo da utilização da arrow function:


const somarNumeros = (n1, n2) => {
    let soma = n1 + n2;
    return soma;
}

/// Como pudemos perceber, a arrow function é declarada como uma constante, e a função em si, irá aparecer como valor desta constante!
//
/// Outra característica da arrow function, é, como o próprio nome diz, arrow = flecha, após os parênteses, colocamos o sinal de igual "=" seguido do sinal de maior ">", fazendo assim, que se pareceça com uma flecha. Daí vem o nome, Arrow Function!
//
/// Podemos também, caso o código dentro do escopo da função, possuo somente uma linha, podemos eliminar a necessidade das chaves.

const nomeUsuario = (nome) => `Lucas ${nome}`;

console.log(nomeUsuario("Fernandes"))