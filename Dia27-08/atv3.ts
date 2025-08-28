// Edu me explicou um pouco essa

//biblioteca
import leia = require('readline-sync');
//crio set
const setNum: Set<number> = new Set<number>();
//enquanto a set for menor que 10, repete
while (setNum.size < 10) {
    const num: number = leia.questionInt('Digite um numero: ');
    setNum.add(num);
} // e aqui em cima ta adicionando no set
console.log('Números únicos digitados:');
console.table(setNum);
// falando o que a pessoa digitou

