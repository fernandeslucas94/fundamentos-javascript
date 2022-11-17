/// Nesta seção de estudos, iremos conhecer um pouco melhor sobre o FOR!
//
// Mas o que seria o FOR ? FOR é o que chamamos de Laço de Repetição. Com ele, podemos fazer com que tarefas que sejam repetitivas, e que necessitem ser executadas diversas vezes, sejam realizadas através do FOR, e não manualmente por nós, o que tomaria muito tempo.
//
/// Veremos logo abaixo alguns exemplos de como podemos utilizar o FOR!

// Exemplo 1

// Suponhamos que queremos que uma lista de nomes seja exibida em tela. Mas esta lista contém aproximadamente dez nomes. Não queremos ficar escrevendo os dez nomes por conta própria. Correto ? Sendo assim, neste caso, iremos nos utilizar do FOR, o qual irá nos fazer este grande favor.

let nomes = [ "Sophia", "Maria Luiza", "Bárbara", "Pedro Henrique", "Eduardo", "Júlia", "Isadora","Rebeca", "Joana", "Aquiles", ];

for(let i = 0; i < nomes.length; i++) {
    console.log(`O nome do momento é: ${nomes[i]}`)
}

/// Explicando o exemplo acima, tivemos uma variável que armazenou como valor, um array de nomes, contendo dez itens. E para que seja mostrado na tela os dez nomes, ao invés de escrevermos dez variáveis que irão receber como valor cada nome, utilizamos o FOR para isto.
//
/// Abrimos a estrutura do for com a palavra reservada for, declaramos uma variável, que pode receber qualquer nome, mas por convensão utilizamos a letra i, e atribuimos o valor 0 para ela. Após, dizemos que a cada vez que o for ser executado e esta variável for de um valor inferior ao número de itens do array, ela irá ser incrementada, ou seja, irá receber um novo valor superior. 
//
/// E dentro do escopo do FOR, colocamos o código que queremos que seja realizada a cada vez que o FOR for executado.
//
/// Neste caso, para que seja impresso cada nome, e cada um por vez, dentro do console.log(), colocamos um texto qualquer que queremos exibir junto do valor, e utilizamos a estrutura de ${} para recebermos o nome da variável onde foram armazenados os itens, e dentro das chaves, colocamos um colchete para que possamos "receber" a variável i, do FOR, a qual estará recebendo um novo valor.
//
/// Pode parecer confuso, mas é mais simples que parece. A cada vez que o FOR "rodar", a variável i irá receber um novo valor. Ex: 0 (Na primeira vez), 1 (Na segunda vez), e assim por diante. E a cada vez que o FOR rodar, ele irá "trazer" do array o item que estiver no indice, ou seja, na posição, no número da vez a qual o FOR estiver sendo executado! 
//
/// Ex: 0(Primeira execução do FOR) - Sohpia, 1(Segunda execução do FOR) - Maria Luiza, e assim em diante!

/// Agora nós iremos conhecer melhor sobre como podemos realizar loops com o for em array! Como fazer isto ? Explicarei logo abaixo!
//
/// Temos três maneiras, basicamente, de realizar um loop com o FOR em arrays. E são eles: a maneira tradicional, como já vimos no exemplo acima, também podemos utilizar o for..in e o for..of!
//
/// Primeiramente vamos recapitular a maneira mais básica e tradicional de realizamos loop com FOR em array.
//
/// Vamos ver o exemplo abaixo:

// Neste exemplo, iremos ter um array contendo diversos números. Iremos adicionar uma condicional para que caso o número seja divisível por 2, retorne par, caso seja divisível por 3 ou 5, retorne ímpar!

let numeros = [2, 7, 9, 12, 26, 56, 90, 0, 3, 237.5]; 

for(let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 === 0) {
        console.log(`${numeros[i]} é par!`)
    } 

    if (numeros[i] % 3 === 0) {
        console.log(`${numeros[i]} é impar!`)
    }
}

/// Como pudermos ver, dentro das chaves do FOR, colocamos o trecho de código o qual desejamos que seja repetido, ou que haja algum tipo de iteração!
//
/// Explicando melhor o exemplo, dado o array com os dez números, dentro da área de definição de condicional do FOR, declaramos uma variável com o valor inicial de zero, logo após, definimos que enquanto esta variável possuir valor inferior ao número de ítens do array, o FOR deverá rodar mais uma vez. Na primeira vez que ele rodar, quando o i valer zero, ele vai pegar primeiramente o número 2, que está na posição zero, irá verificar as condições com o IF, depois, quando finalizar a checagem, o FOR irá rodar mais uma vez, desta vez valendo um, sendo assim, irá "pegar" o número 7, que está na posição um do array, e irá realizar a checagem com o IF e assim por diante com os itens restantes no array!
//
/// Vamos ver agora, mais duas maneiras de utilizarmos o FOR: for..in e for..of!
//
/// FOR..IN
//
/// 