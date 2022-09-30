import { animal } from "./animal";
import { SubirArvore } from "./subirArvore";

class preguica extends animal implements SubirArvore{

constructor(nome : string, idade :  number, som : string){
super(nome, idade, som)
}
public subirArvore(): void {
console.log(`O nome da preguiça é ${this.nome}`);
console.log(`Ele tem ${this.idade}`);
console.log(`ele emite esse som ${this.som}`);

}
}
export{preguica}