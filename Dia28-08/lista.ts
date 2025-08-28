//1: Adicionar um novo Cliente na fila. Deve solicitar o nome do Cliente.
//2: Listar todos os Clientes na fila
//3: Chamar (retirar) uma pessoa da fila 
//0: O programa deve ser finalizado. 

import { Queue } from "../queuee";   
import leia = require('readline-sync')
let opcao:number=0
const fila = new Queue<string>()
do{
  console.log("*****************************************************")
  console.log("                                                     ")
  console.log("            1 - Adicionar Cliente na Fila            ")
  console.log("            2 - Listar todos os Clientes             ")
  console.log("            3 - Retirar Cliente da Fila              ")
  console.log("            0 - Sair                                 ")
  console.log("                                                     ")
  console.log("*****************************************************")

  opcao = leia.questionInt("Escolha a opcao: ")
  switch (opcao){
    case 1: 
        let nome:string = leia.question('Digite o nome do cliente: ')
        fila.enqueue(nome)
     break;

    case 2: 
    console.log('----------------')
    console.log('Pessoas atualmente na fila')
    console.log(fila.printQueue())
    break;

    case 3:
        console.log(fila.dequeue())
    break;

    case 0:
         console.log('Adeus!')
    break;
    
    default:
     console.log('Lê o menu meu amigão')
     break;
       
  }
}while(opcao !== 0)
