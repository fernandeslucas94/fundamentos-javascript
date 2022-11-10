/// Nesta seção, iremos conhecer e estudar sobre variáveis. O que são variáveis ? Variáveis são elementos do Javascript os quais podemos armazenar algum, ou alguns, tipos de dados. 
//
/// Como exemplo, podemos utilizar uma metáfora com uma caixa. Em uma caixa, podemos armazenar conteúdos que iremos utilizar em algum momento posterior. Podemos armazenar itens de tipos diversos, tamanhos diversos, etc...
//
/// Nesta caixa, podemos dar um nome para ela, para facilitar a identificação do seu conteúdo, e podemos armazená-la em algum local específico!
//
/// Com relação às variáveis, devemos declará-las, informando a princípio, a palavra chave que irá identificar que aquele trecho de código é uma variável.
//
/// Temos três maneiras de realizar esta operação: var, let e const!
//
/// **var** -> Utilizando var, iremos informar que aquela variável é de escopo global, ou seja, pode ser acessada e utilizada em qualquer parte e momento do código e em qualquer circunstância. Pode-se utilizar o var ? Sim, mas não é recomendável, pois isto pode acarretar problemas, erros, incidentes em seu código, fazendo com que o trabalho para corrigir o erro, seja muito grande. Por conta disto, recomenda-se sempre a utilização do let!
//
/// **let** -> O let, ao contrário do var, é de escopo local. Ou seja, ela somente poderá ser acessada dentro do escopo onde foi declarada. Sendo assim, evita-se, desta maneira, que possam ocorrer erros, incidentes, ou qualquer coisa desagradável e que possa acarretar perda de tempo e recursos financeiros para corrigir.
//
/// **const** -> O const, apesar de ser chamado de variável, é utilizado para armazenar valores que em nem momento irão ser alterados. Const vem de constante, ou seja, como dito anteriormente, o valor que é declarado a uma variável do tipo constante, nunca deverá ser alterado.

//Exemplo
var primeiroNome = "Lucas";
let segundoNome = "Feitosa";
const nomeCompleto = `${primeiroNome} ${segundoNome}`;

console.log(nomeCompleto);

/// Anteriormente falamos sobre escopo, mas o que seria isto ? Por escopo, podemos compreender o local, a área em específico, a região do código, onde a variável foi declarada. Vamos tomar uma função como exemplo: Após declararmos a função, dentro das chaves, iremos inserir o código que desejamos que seja executado quando a função for requisitada, correto ? Desta forma, o que estiver dentro das chaves, está inserido no escopo local da variável. Ou seja, somente a função onde a variável foi declarada, pode ter acesso a ela e realizar alguma operação com a variável! Se caso, desejemos utilizar a variável que foi declarada dentro da função, em um outro local do código que esteja fora do escopo da função, a variável não poderá ser requisitada, e se utilizarmos o console.log para tentar apresentar o valor da variável, irá aparecer como resultado undefined.

// Para compreender melhor sobre variáveis e suas particularidades, recomendo o acesso ao seguinte vídeo: 
// https://www.youtube.com/watch?v=SpLTLZmrcjo&list=PL2Fdisxwzt_d590u3uad46W-kHA0PTjjw&index=6&ab_channel=Programa%C3%A7%C3%A3oWeb
