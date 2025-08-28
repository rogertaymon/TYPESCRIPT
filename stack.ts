// Interface genérica para definir as operações de uma pilha
interface stackInterface<Type> {
    push(dataItem: Type): void;            // Adiciona um item no topo da pilha
    pop(): Type | undefined;               // Remove e retorna o item do topo da pilha
    isEmpty(): boolean;                    // Verifica se a pilha está vazia
    count(): number;                       // Retorna a quantidade de itens na pilha
    printStack(): void;                    // Imprime todos os itens da pilha (do topo até a base)
    peek(): Type | undefined;              // Retorna o item do topo sem removê-lo
    contains(dataItem: Type): boolean;     // Verifica se um item existe na pilha
    clear(): void;                         // Remove todos os itens da pilha
}
 
export class Stack<Type> implements stackInterface<Type> {
 
    private StackData: Array<Type> = [];   // Estrutura de dados interna (Array genérico)
 
    constructor() { }
 
    // Verifica se a pilha está vazia
    isEmpty(): boolean {
       let result = this.StackData.length <= 0;
       return result;
    }
 
    // Adiciona um item no topo da pilha
    push(dataItem: Type): void {
       this.StackData.push(dataItem);
    }
 
    // Remove e retorna o item do topo da pilha
    pop(): Type | undefined {
       if (this.isEmpty()) {
          console.log("A pilha está vazia");   // (ajustei aqui: estava "fila")
          return;
       } else {
          var element = this.StackData.pop();
          return element;
       }
    }
 
    // Retorna a quantidade de itens na pilha
    count(): number {
       let len = this.StackData.length;
       return len;
    }
 
    // Imprime todos os itens da pilha (do topo até a base)
    printStack(): void {
       for (let i = this.StackData.length - 1; i >= 0 ; i--) {
          console.log(this.StackData[i]);
       }
    }
 
    // Retorna o item do topo sem removê-lo
    peek(): Type | undefined {
       if (this.isEmpty()) {
          console.log("A pilha está vazia");   // (ajustei aqui também)
          return;
       } else {
          var element = this.StackData[this.StackData.length - 1];
          return element;
       }
    }
 
    // Verifica se um item existe dentro da pilha
    contains(dataItem: Type): boolean {
       if (this.StackData.includes(dataItem)) {
          return true;
       } else {
          return false;
       }
    }
 
    // Remove todos os itens da pilha
    clear(): void {
       this.StackData.length = 0;
    }
 
}
