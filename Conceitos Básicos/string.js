//Exemplos
let nome = 'Meu nome é Lucas'; // Neste caso, a variável nome está recebendo uma string como valor e nela está escrito Lucas.

//É possível verificar qual o tamanho da string, ou melhor, quantas letras estão contídas naquela string utilizando o método .length
//Ex. 
console.log(nome.length);

//É possível também checar o tamanho de um trecho específico da string
//Ex.
console.log('Meu'.length);

//Também é possível transformar toda a string para letras minúsculas utilizando outro método chamado .toLowerCase
//Ex.
console.log(nome.toLowerCase()); // Deve-ser sempre utlizar parênteses ao utilizar o .toLowerCase() ou .toUpperCase()

//É possível transformar também para maiúscula
//Ex.
console.log(nome.toUpperCase());

//Também é possível procurar por um trecho específico de um texto de uma string utilizando o método indexOf(). Ele irá retornar a posição da primeira palavra do trecho procurado, dentro da string. Lembrando que a contagem no JS começa com 0. Os espaços entre as palavras também são utilizados na contagem.
//Ex.
console.log(nome.indexOf('é Lucas'));
//Ainda sobre o método indexOf(), se ele procurar por algum trecho de texto na string que não existe, irá retornar -1.

//Outro método que pode ser utilizado, é o .replace. O que ele faz ? Ele irá alterar na string, algum trecho que for especificado. Para isto, deve-se fazer da seguinte forma: .replace('trecho existente', 'trecho a ser utilizado a partir daqui');
//Ex.
console.log(nome.replace('é Lucas', 'não é Pedro'));

//Um método que também pode ser utilizado é o .slice. Ele irá retornar uma 'fatia' do texto. Para isto, você deve informar para ele a posição inicial e a final no texto, em números, do trecho a ser mostrado.
//Para saber a posição inicial e a final, é só utilizar o método .length
//Ex.
console.log(nome.slice(5, 13));

//Existe um método chamado .trim. que 'apaga' espaços que não sejam úteis e existam em uma string.
//Ex.
let profissao = '   sou desenvolvedor web   ';
console.log(profissao.trim());

//Para concatenar um texto com uma varíavel, pode-se escrever da seguinte maneira:
console.log(nome + " " + 'e eu ' + profissao.trim());
//Mas existe uma forma mais 'eficiente' e rápida de se utilizar chamada template strings e é a seguinte:
console.log(`${nome} e eu ${profissao.trim()}`); // Utiliza-se acento agudo ao invés de aspas.