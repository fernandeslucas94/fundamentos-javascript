/// Uma função, pode existir sem que haja um retorno ? Sim, pode! Mas isto não é uma regra. Uma função, como o próprio nome diz, precisa exercer alguma função específica no código. Pois, se assim não ocorrer, não há o porque de existir tal função.
//
/// Sendo assim, após a função executar o código que lhe é solicitado, ela deve retornar para a aplicação, e consequentemente para o usuário, alguma informação específica. E para que isto ocorra, utilizamos ao final do escopo da função, após finalizarmos todas as operações que desejamos que sejam realizadas, a palavra reservada "return". 
//
/// Desta maneira, ao ser executada a função, após serem realizadas todas as operações que a função deve executar, ela irá retornar algum resultado final esperado.

// Logo mais abaixo iremos ver exemplos de como ocorre o retorno da função.

// Exemplo 1

function cinema(idade) {
    if(idade >= 18) {
        return console.log("Você poderá entrar nesta seção!");
    }

    if(idade < 18) {
        return console.log("Infelizmente você não poderá entrar nesta seção de cinema!");
    }
}

cinema(35);


/// No exemplo acima, além de verificarmos a utilização do return, pudemos ver também o que é chamado de retorno condicional. Mas o que é isto ?
//
/// Uma função, por padrão, deve conter apenas um return. Não mais que isto!
//
/// Mas no caso do retorno condicional, como estamos fazendo uma verificação de uma ou mais condições, neste caso, podemos utilizar mais de um return. Pois, queremos que caso a primeira condição seja satisfeita, ela irá retorna alguma mensagem ou dado para o usuário. Mas caso ela não seja satisfeita, e a execução do código siga para a verificação seguinte, queremos que esta próxima verificação, retorne alguma informação para o usuário.

// Exemplo 2

function brasileiro(nascimento, naturalidade) {
    if(nascimento === "Brasil" && naturalidade == "Minas Gerais") {
        return console.log("Você é Brasileiro!")
    }

    if(nascimento != "Brasil" && naturalidade != "Minas Gerais") {
        return console.log("Talvez você seja Brasileiro, ou talvez não!")
    }
}

brasileiro("Brasil", "Minas Gerais");


// Exercício sobre função

// Calcule uma determinada porcentagem de um número.
// Exemplo: 25% de 40.
// A fórmula para cálculo de porcentagem é a seguinte: (x / y) * 100

// Dados:
// n1 = 40;
// n2 = 10;
// porcentagem = calcPct(x, y)

function porcentagem(n1, n2) {
    let pctCalc = (n2 / n1) * 100;

    return pctCalc;
}

let x = 70;
let y = 10;
let pct = porcentagem(x, y);

console.log(`${pct}% de ${x} é ${y}!`)


// Exercício 2

// Crie uma função que calcule o valor de um imóvel tendo como base a metragem e o número de quartos
// metragem = R$ 3,000
// 1 quatro = metragem * 1
// 2 quartos = metragem * 1.2
// 3 quartos = metragem * 1.5

function calcularPrecoImovel(metragem, quartos) {
    let m2 = 3000;
    let preco = 0;

    switch(quartos) {
        case 1:
        default:
            preco = metragem * m2;
        break;

        case 2:
            preco = metragem * (m2 * 1.2);
        break;

        case 3:
            preco = metragem * (m2 * 1.5);
        break;
    }

    return preco;
}

let metragem = 123;
let quartos = 1;

let preco = calcularPrecoImovel(metragem, quartos);

console.log(`O valor do imóvel é de R$ ${preco} reais`);

// Exercício 3

// Faça uma função que verifique o nome de usuário e senha, e caso seja diferente do correto, retorne alguma mensagem informando sobre a divergência das informações

const validarUsuario = (usuario, senha) => {
    let usuarioCorreto = usuario == "Pedro" && senha == "123" ?  "Acesso Permitido" : "Acesso Negado";

    return usuarioCorreto;
}

let validacao = validarUsuario("Pedro", "123");
console.log(validacao);