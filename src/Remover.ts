import { Mostrar } from './Mostrar';
import PromptSync = require('prompt-sync');

const prompt = PromptSync()

function Retirar(list) {
    Mostrar
    const positionText = prompt('Qual elemento você deseja remover?: ')
    const position = Number(positionText) - 1
    list.splice(position, 1);
}

export { Retirar }