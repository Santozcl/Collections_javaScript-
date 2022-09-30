
import { Menu } from "./Menu";
import PromptSync = require('prompt-sync');
import {add} from "./Add";
import { Mostrar } from "./Mostrar";
import { Retirar } from "./Remover";

const prompt = PromptSync()
let list : string [] = []
let option = 0

do {
    console.clear();
    Menu();
    console.log();
    option = Number(prompt('Escolha uma opção: '))

    switch (option) {
        case 1:
            add(list);
            break;
        case 2:
            Retirar(list);
            break
        case 3:
            Mostrar(list)
            Retirar(list)
            add(list)
            break
        case 4:
            Mostrar(list);
            break
        case 5:
            console.log('Finalizando a aplicação!');
            
        default:
            console.log('Opção inválida!')
            break;
    }
    prompt('Pressione ENTER para continuar...')
}while (option != 5);

