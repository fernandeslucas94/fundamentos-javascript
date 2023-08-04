/// Neste momento iremos estudar sobre o conceito e aplicação das chamadas Callback Functions!
//
/// O que seria uma função callback? Como o próprio nome diz, é uma função que irá "chamar de volta - callback" alguma outra função que deverá realizar uma tarefa específica.
//
/// Pode parecer confuso, mas basicamente é um dado como outro qualquer o qual podemos inserir em uma função, e que em determinado momento deverá executar uma tarefa.
//
/// Veremos logo abaixo alguns exemplos de Callback Function!

function andarCarro() {
    const funcionar = () => console.log("O carro está ligado!");

    const ligado = () => {
        let combustivel = true;

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

/// No exemplo acima, precisamos que o carro esteja corretamente abastecido para que ele seja ligado. Caso esteja abastecido, será executada a função funcionar(), a qual irá informar que o carro está ligado! Caso o carro não esteja abastecido, será retornada uma mensagem informando da necessidade de abastecer o veículo!