/// Nesta seção de estudos, iremos conhecer sobre o conceito de objetos no Javascript! Mas o que são objetos ?
//
/// Objetos, como o nome diz, são itens, os quais possuem, como um objeto real, caracteristicas específicas que podem diferencia-lo de outros. Como por exemplo: celular. Um celular é um objeto, o qual possui peso, largura, altura, capacidade de armazenamento, etc...
//
// / Sendo assim, para um objeto no Javascript, podemos atriuir valores, caracteristicas para ele, os quais poderão torná-lo útil como uma ferramenta, ou mecanismo, o qual poderemos utilizar em nosso código para que possua realizar uma tarefa determinada, a qual, por sua vez. irá ser de fundamental importância para nossa aplicação.
//
/// Como é composto um objeto ? Como o exemplo do celular, um objeto no Javascript, possui o que chamamos de chave e valor. O que é a chave ? É o nome que damos para uma determinada caracteristica que nosso objeto irá possuir, como por exemplo, nome. E o valor, seguindo o exemplo da chave "nome", o valor seria o nome do usuário, por exemplo, que irá ser armazenado como valor do objeto em questão!
//
/// E quais tipos de valores que podemos atribuir para uma determinada chave, ou caracteristica, em um objeto ? Podemos utilizar, string, number, boolean, array, função e até mesmo, podemos atriuir para uma chave um valor como sendo um objeto.
//
/// Logo mais abaixo iremos ver alguns exemplos que tornarão nossa compreensão mais clara!

// Exemplo 1 - (Usuráio):

let usuario = {
    nome: "Lucas",
    idade: 28,
    profissao: "Desenvolvedor de Software",
    nacionalidade: "Brasileira",
    naturalidade: "Minas Gerais"
};


/// Como vimos no exemplo acima, a variável "usuario", que recebe como valor um objeto, irá conter como valores de objeto, nome, idade, profissao, nacionalidade e naturalidade. Podemos verificar, que após determinarmos o valor da chave, colocamos uma vírgula para, na linha seguinte, atribuirmos uma nova chave: valor.

/// Veremos agora um outro exemplo, ligeiramente mais complexo, contendo tipos de dados diferentes como valores.

// Exemplo 2 - (Membro de Clube)

let membroClube = {
    nome: "Lucas",
    idade: 28,
    membro: true,
};

let isMember = membroClube.membro === true && membroClube.idade >= 18 ? "Entrada Permitida!" : "Entrada Negada!";

console.log(isMember);


/// Como dito anteriormente, uma das funcionalidades do Javascript que podemos utilizar em um objeto, são as funções. E em quais situações poderiamos, ou deveriamos, utilizar uma função como valor de uma chave em um objeto ? Quando, por exemplo, nós temos uma situação em que o objeto em questão, possui alguma funcionalidade específica a qual deva ser executada em casos determinados. Confuso ? Explicarei com um exemplo mais claro. 
//
/// Digamos que o objeto em questão é um carro. Quais atributos, ou caracteristicas, um carro possui ? Cor, peso, altura, largura, comprimento, e o principal, o motor. Vejamos no exemplo abaixo:

// Exemplo 3 - (Carro)

let carro = {
    nome: "Compass",
    montadora: "Jeep",
    anoFabricacao: 2023,
    anoModelo: 2023,
    cor: "Prata",
    modelo: "Longitude",
    combustivel: true,
    manutencaoEmDIa: true,
    motor: function () {
        let ligarCarro = this.combustivel && this.manutencaoEmDIa == true ? "Carro Ligado" : "Carro não poderá ligar";
        return ligarCarro;
    }
};

console.log(carro.motor());


/// Como vimos no exemplo acima, utilizando um carro para exemplificar o conceito, utilizamos uma função para representar o motor do carro. E este é um exemplo o qual podemos ver mais claramente como é possível utilizar funções dentro de objetos no Javascript!
//
/// Podemos utilizar função em um objeto de duas maneiras: com arrow function, e também utilizando a forma tradicional de escrevermos funções, utilizando a sintaxe function () {}! No caso do objeto, não precisamos escrever: function motor() {}, pois a chave, neste caso, motor, já é o nome da função. Desta maneira, somente precisamos escrever a palavra function, seguida dos parênteses e das chaves.
//
/// Utilizando a sintaxe tradicional, motor: function () {}, dentro das chaves da função, precisamos utilizar a palavra chave this, pois desta maneira, estaremos fazendo referência às chaves que estão presentes dentro do objeto!