
// O loop WHILE é utilizado para que seja feita a verificação de uma ou mais condições. Enquanto uma condição não for satisfeita, ele irá continuar realizando a contagem, a verificação.
// O WHILE é recomenadado quando não se saiba qual será o resultado final daquela operação. Caso se saiba o resultado que será entregue, deve-se usar o loop FOR 

let numero = 0;

while (numero < 10) {
    ++numero;
    console.log(`O número agora é: ${numero}`);
}

// Ping Pong - While
let contador = 0;

while (contador <= 100) {
    if (contador % 3 === 0 && contador % 5 === 0) {
        console.log(`${contador} - Ping Pong`);
    } else if (contador % 3 === 0) {
    console.log(`${contador} - Ping`);
    } else if (contador % 5 === 0) {
    console.log(`${contador} - Pong`);
    }
    ++contador; // Não esquecer do ++contador, pois sem ele, o código entra em loop infinito.
}