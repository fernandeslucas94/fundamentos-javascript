/// Nesta seção de estudos, iremos estudar e conhecer melhor sobre o que são parâmetros nas funções e para que são utilizados.
//
/// Parâmetros, são dados, que podem ser variáveis, que irão ser inseridas dentro dos parênteses da função, e logo após, quando a função estiver sendo executada, os dados inseridos como parâmetros, irão receber valores que podem ser recebidos pelo sistema, ou site, como variáveis, de um campo onde o usuário adicionou alguma informação requisitada pela aplicação.
//
/// Logo abaixo iremos verificar alguns exemplos de utilização dos parâmetros e veremos também a sua funcionalidade.

// Exemplo 1

function mostrarNome(nome, sobrenome) {
    let nomeCompleto = `${nome} ${sobrenome}`;
    return console.log(`Seu nome completo é ${nomeCompleto}`);
}

mostrarNome("Lucas", "Fernandes");

// No exemplo acima, os parâmetros adicionados foram nome e sobrenome. Dentro da função, foi realizada uma operação que requisitou a utilização das informações informadas pelos parâmentros, e foi executado o retorno desta operação!

/// No segundo exemplo abaixo, veremos a utilização dos parâmetros para realizar uma operação matemática.

// Exemplo 2

function mediaNumeros(n1, n2, n3) {
    let calculoMedia = (n1 + n2 + n3) / 3;
    return console.log(calculoMedia.toFixed(1));
}

mediaNumeros(10, 10, 20);