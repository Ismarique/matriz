// 3- Altere o código um(1) desse conteúdo para funcionar
// com números e ter duas colunas.

console.clear();
let teclado = require(`prompt-sync`)();
let minhametriz : number[][] = []; //declarando a matriz

let linha : number = 5
let coluna : number = 2

for (let z = 0; z < linha; z ++){

minhametriz[z] = [];

    for (let x = 0; x < coluna; x++){
let nome : number = parseInt(teclado(`digite o nome que vai estar no endereço [${z} , ${x}] da matriz: `));

minhametriz [z][x] = nome;
    }
}

console.log(minhametriz)