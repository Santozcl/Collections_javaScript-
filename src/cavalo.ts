import { animal } from "./animal";
import {run} from "./run"

class cavalo extends animal implements run{

constructor(nome : string, idade : number , som : string){
super(nome, idade, som)
}
public correr(): void {
console.log(`O nome do cavalo é ${this.nome}`);
console.log(`Ele tem ${this.idade}`);
console.log(`ele emite esse som ${this.som}`);

}
}
export{cavalo}