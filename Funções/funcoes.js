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