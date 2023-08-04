/// Nesta seção de estudo, iremos conhecer e estudar sobre as chamadas Funções Construtoras.
//
/// O que seriam as funções construtoras? Como o próprio nome diz, são funções "pré-moldadas" onde podemos, dentre outras coisas, utilizá-las para atribuir à alguma variável, um valor que será uma função, e com ela, podemos desenvolver determinadas funcionalidades em nosso código, como por exemplo, uma data, uma pessoa, um número, etc..., e com isto, não será necessário em todas as vezes que precisarmos, como no exemplo que veremos a seguir, determinar que alguns valores de nome, idade, nacionalidade, etc..., de um usuário sejam armazenados como objeto, criarmos um novo objeto, determinarmos chaves para armazenar os valores e com isto, poderemos automatizar a criação do objeto, e assim, iremos reduzir o tempo de desenvolvimento, tanto quanto poderemos reduzir a quantidade de código escrito, e assim, poderemos tornar nossas aplicações ligeiramente mais rápidas e com menor necessidade de espaço em memória.
//
/// À título de exemplo, iremos criar uma função chamada Person, a qual irá automatizar a criação de uma persona na aplicação, podendo ser utilizada posteriormente em diferentes momentos!

function Person(name, age, nationalitie) {
    this.name = name;
    this.age = age;
    this.nationalitie = nationalitie;
}

let newUser = new Person("Lucas", 29, "brasileiro");

console.log(`${newUser.name} tem ${newUser.age} anos de idade e é ${newUser.nationalitie}!`);