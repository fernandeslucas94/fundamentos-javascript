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
