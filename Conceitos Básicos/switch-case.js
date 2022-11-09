
// Switch Case é uma 'forma' de realizar um IF/ELSE de outra maneira.
// O código irá checar valores diferentes para verificar se irão ou não ser compatíveis com o valor, ou valores, requisitados como padrão.
// O switch é utilizado para que seja informada uma variável que recebe o valor a ser verificado
// O case é utilizado para adicionar uma alternativa. Por exemplo, "Caso seja isto, faça aquilo".
// O break é utilizado para que caso a condição de verificação seja satisfeita, o código para e não prossegue com as outras verificações.
//Ex.1

//switch/case "normal"

let cor = 'marrom';

switch (cor) {
    case 'azul':
    console.log('Cor Azul')
    break;

    case 'rosa':
    console.log('Cor Rosa')
    break;

    case 'verde':
    console.log('Cor Verde')
    break;

    default :
    console.log('Cor não identificada');
}

//switch/case multi case

let banda = 'john';

switch (banda) {
    case 'john':
    case 'paul':
    case 'george':
    case 'ringo':
    console.log('The Beatles')
    break;

    default :
    console.log('Banda não identificada');
}