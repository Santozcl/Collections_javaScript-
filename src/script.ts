import {animal} from "./animal";
import {Dog} from "./dog";
import {preguica} from "./preguiça";
import {cavalo} from "./cavalo";
import {run} from "./run";
import {SubirArvore} from "./subirArvore";

const caval = new cavalo('Rajada', 12, 'Hiin in in...')
const cachorro = new Dog('Spike', 3,'Auu, Auuu...')
const preguic = new preguica('Geronimo', 21, 'auaaauaa')

function takeoff(animal : run) {
    animal.correr
}
function takeoff1(animal : SubirArvore ) {
    animal.subirArvore()
}

takeoff(cachorro);
takeoff(caval);
takeoff1(preguic);