interface queueInterface<Type> {
   enqueue(dataItem: Type): void;              // Adiciona um item ao final da fila
   dequeue(): Type | undefined;                // Remove e retorna o primeiro item da fila
   isEmpty(): boolean;                         // Verifica se a fila está vazia
   count(): number;                            // Retorna a quantidade de itens na fila
   printQueue(): void;                         // Imprime todos os itens da fila
   peek(): Type | undefined;                   // Retorna o primeiro item da fila sem removê-lo
   contains(dataItem: Type): boolean;          // Verifica se um item existe na fila
   clear(): void;                              // Remove todos os itens da fila
}

export class Queue<Type> implements queueInterface<Type> {

   private QueueData: Array<Type> = [];

   constructor() { }

   // Verifica se a fila está vazia
   isEmpty(): boolean {
      let result = this.QueueData.length <= 0;
      return result;
   }

   // Adiciona um item no final da fila
   enqueue(dataItem: Type): void {
      this.QueueData.push(dataItem);
   }

   // Remove e retorna o primeiro item da fila
   dequeue(): Type | undefined {
      if (this.isEmpty()) {
         console.log("A fila está vazia");
         return;
      } else {
         var element = this.QueueData.shift();
         return element;
      }
   }

   // Retorna a quantidade de itens na fila
   count(): number {
      let len = this.QueueData.length;
      return len;
   }

   // Retorna os itens da fila (um por linha)
   printQueue(): void {
      for (let i = 0; i < this.QueueData.length; i++) {
         console.log(this.QueueData[i]);
      }
   }

   // Retorna o primeiro item da fila sem removê-lo
   peek(): Type | undefined {
      if (this.isEmpty()) {
         console.log("A fila está vazia");
         return;
      } else {
         var element = this.QueueData[0];
         return element;
      }
   }

   // Verifica se um item existe dentro da fila
   contains(dataItem: Type): boolean {
      if (this.QueueData.includes(dataItem)) {
         return true;
      } else {
         return false;
      }
   }

   // Remove todos os itens da fila
   clear(): void {
      this.QueueData.length = 0;
   }

}