//Array, também chamado de vetor, é um tipo de estrutura no JS que permite guardar diversos valores, semelhante a uma lista.
//Ex. 1

let num = [1, 2, 3, 5, 10]; 
console.log(num); // O console imprime o indicativo Array e diz quantos ítens estão contidos nele. No caso 5, pois lembrando, no JS, a contagem começa no 0.

console.log(num.length); // O length, é usado para 'medir' o array, retornando o número de ítens que aquele array contem.

console.log(num[2]); // Desta forma, consigo saber qual elemento está na posição 2 do array.

console.log(num.pop()); // Com este método, o útlimo elemento do array será retirado.
console.log(num);

console.log(num.push(10)); // O método push() adiciona um elemento, que deve ser definido entre parênteses, ao final do array.
console.log(num);

console.log(num.shift()); // O método shift() retira o primeiro número ou elemento do array.
console.log(num);

console.log(num.unshift(0)); // O método unshift(), ao contrário do shit() o qual remove o primeiro item do array, adiciona algum item como primeiro valor do array! 
console.log(num);

console.log(num.slice(1, 3)); // O método slice() irá retornar uma 'fatia' do array. É necessário adicionar primeiro a posição do primeiro elemento que se quer saber e uma posição posterior do último elemento que queira que deva ser mostrado. Por quê uma posição posterior ? Pois se for usado o número exato da posição do útlimo elemento a ser mostrado, será retornado o elemento antecessor do último elemento que está sendo requisitado.

console.log(num.join(' ')); // O método join() pode ser utilizado para adicionar espaços, traços ou algo que se queira adicionar entre os elementos do array.

console.log(num.indexOf(0)); // O método index.Of() irá retornar a posição de um elemento no array. Deve-se adicionar entre os parênteses, o nome do elemento que se quer saber a posição.

console.log(num.includes(3)); // O método includes() é usado para verificar se determinado valor existe, ou seja, se o valor está contido no array.

console.log(num.sort()); // O método sort(), no caso de arrays que contenham como valores strings, ele irá alterar a posição dos itens para que eles sejam organizados em ordem alfabética. E no caso de array de números, ele irá ordenar em ordem ascendente!

//Método .concat() - Abaixo

let arr1 = ['Lucas', 'Feitosa', 'Fernandes']
let arr2 = ['Helena', 'Mariazinha', 'Chiquinha']

console.log(arr1.concat(arr2));
// O Método .concat() é usado para mesclar dois arrays. Coloca-se o nome da variável do primeiro array, depois .concat() e dentro parênteses coloca-se o array a ser concatenado, ou seja, mesclado, ou também é possível adicionar entre os parênteses o array propriamente dito.
//Também é possível utilizar o .concat() adicionando além dos nomes dos arrays precedidos de três pontos, um array com seus valores. Exemplo abaixo:

console.log([...arr1, ...arr2.concat(['Este', 'é', 'um exemplo', 'de concatenação de array sem o nome do próprio'])]);


//Spread
//O Spread é a forma de mesclar dois arrays em um só sem se utilizar do método .concat().
//Como utilizar: 
console.log([...arr1, ...arr2]); // Coloca-se três pontos antes do nome do array e separa-se por vírgula os arrays.
// Da mesma forma do .concat(), é possível concatenar um array somente com os valores sem a necessidade de adicionar o nome:
// Ex.
console.log([...arr1, ...arr2, ...['Este', 'é', 'um exemplo', 'de concatenação de array sem o nome do próprio']]);



//Array de arrays
//O array de arrays é uma forma de você adicionar dentro um array, dois ou mais arrays sem ser pelo método .concat() e nem pelo spread.
//Ambos os arrays dentro do array 'pai', irão ser mostrados separadamente, sem que seus valores estejam mesclados.

//Array Destructuring
// É uma forma de estrair do array, através do uso de variáveis, dados e valores de interesse.

let nome = arr1[1];
let sobrenome = arr1[2];

console.log(nome, sobrenome);

// Outro método importante de array, é o método .splice! O que ele faz ? Ele exclui um ou mais ítens do array!

// Deve-se colocar como parâmetros, primeiramente o índice no array do item que se quer excluir, e depois da virgula, a quantidade de itens a serem excluídos.

// Caso seja colocado somente o index do item no array, sem colocar a quantidade de itens a serem excluídos, todos os ítens desde o informado, até os posteriores, serão excluídos.

// Ex: 

let carros = ['Uno', 'Fusca', 'Chevete', 'Camaro'];

let res = carros.splice(2, 2);

console.log(res);