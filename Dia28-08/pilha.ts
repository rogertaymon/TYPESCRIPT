//1:Adicionar um novo livro na pilha. Deve solicitar o nome do livro.
//2: Listar todos os livros da Pilha
//3: Retirar um livro da pilha 
//0: O programa deve ser finalizado. 

import { Stack } from "../stack";   
import leia = require('readline-sync')

const pilha = new Stack<string>()
let opcao: number = 0

do{
    console.log("*****************************************************")
  console.log("                                                     ")
  console.log("            1 - Adicionar Livro na pilha            ")
  console.log("            2 - Listar todos os livros            ")
  console.log("            3 - Retirar livro da pilha              ")
  console.log("            0 - Sair                                 ")
  console.log("                                                     ")
  console.log("*****************************************************")

  opcao = leia.questionInt("Escolha a opcao: ")
    switch (opcao){
      case 1: 
          let livro:string = leia.question('Digite o nome do livro: ')
          pilha.push(livro)
       break;
  
      case 2: 
      console.log('----------------')
      console.log('Pilha de livros: ')
      console.log(pilha.printStack());
      break;
  
      case 3:
          console.log(pilha.pop());
      break;
  
      case 0:
           console.log('Volte mais vezes...')
      break;
      
      default:
       console.log('Lê o menu meu amigão')
       break;
    }}
     while (opcao !== 0)
