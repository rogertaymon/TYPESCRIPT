// importar biblioteca
import leia = require('readline-sync')

// criar array 
const cores: string[] = new Array<string>()

// agora é o momento que a pessoa
// vai digitar e cair dentro do array
//isso aqui em baixo faz repetir
for (let i =0; i < 5; i++){
    let cor: string = leia.question(`Fala a cor ${i + 1}: `);
    cores.push(cor);
}
// ai em cima, a pessoa vai falar a cor e o sistema vai 
// adicionar na array 


console.log("Todas as cores:");
for (let cor of cores){
    console.log(cor);
} // confesso que essa parte eu entendi não
// mas pelo jeito vai mostrar as cores faladas

{
    cores.sort();
    console.log("Colocar em ordem:");
    for (let cor of cores){
        console.log(cor);
    }
}// esse tal de 'sort' acho que ordena
//let cor of cores, não entendi muito bem a logica disso
//Não tá dificil de entender, mas tem comandos basicos que não entendo,
// ai me perco em todo o restate. Tipo: $``