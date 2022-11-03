/// Nesta seção de estudos, iremos conhecer um componente do Javascript que é de grande importância em nosso dia a dia como desenvolvedores. Iremos conhecer e estudar sobre funções!
//
/// Mas o que seriam funções ? Função, como o próprio nome diz, é um elemento do Javascript que irá conter instruções específicas em seu interior, os quais, ao ser "chamada" a função, estas instruções irão ser executadas, gerando algum resultado na aplicação.
// 
/// Veremos logo abaixo alguns exemplos de como podemos utilizar função!

// Exemplo 1
/// No exempo abaixo iremos ver o básico de função. Um caso onde uma string é armazenada em uma variável, e logo após, utilizamos a palavra return para determinar que, como diz o nome, queremos que a função "retorne" o valor da variável.

function showName() {
    let name = `Lucas Feitosa Fernandes`;

    return name;
}

console.log(showName());


// Exemplo 2
/// No exemplo 2, podemos ver basicamente o mesmo do exemplo 1, mas com a diferença que teremos parâmetros sendo "passados" para a função. 
//
/// O que são parâmetros ? Parâmetros são informações que serão solicitadas ao usuário pela aplicação, e desejamos que sejam executadas pela função. Sejam cálculos, como o exemplo, sejam nomes, etc...
function sum(n1, n2) {
    let soma = n1 + n2;

    return soma;
}

console.log(sum(10, 5));


/// Uma informação importante com relação à funções, é que qualquer função, somente será executada, ou "chamada", quando for requisitado seu nome juntamente ao parênteses. Como assim ? Vejamos no exemplo logo abaixo:


/// Uma função sempre deve ser iniciada pela palavra function e seguida do seu nome e parênteses. Logo após os parênteses abre-se chaves, para indicar o bloco de código, ou o escopo da função, onde serão definadas as instruções que devem ser executadas quando a função for chamada.

function nomeDaFuncao() {
    /// E dentro das chaves, ou dentro do escopo da função, devemos indicar, ou definir, quais serão as instruções, ou códigos, que serão executados pela função.

    let nome = `Lucas Feitosa Fernandes`;

    return nome;
}

/// Logo após decladara a função e definidas as instruções que serão executadas, devemos "chamar" a função, para que ela efetivamente funcione e faça seu trabalho.

nomeDaFuncao();

/// Desta maneira, após ser "chamada", aí sim ela será executada, e consequentemente o código inserido em seu escopo.