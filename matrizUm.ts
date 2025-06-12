console.clear();
let teclado = require(`prompt-sync`)();
let minhametriz : string[][] = []; //declarando a matriz

let linha : number = 5
let coluna : number = 5

for (let z = 0; z < linha; z ++){

minhametriz[z] = [];

    for (let x = 0; x < coluna; x++){
let nome : string = teclado(`digite o nome que vai estar no endereço [${z} , ${x}] da matriz: `);

minhametriz [z][x] = nome;
    }
}

console.log(minhametriz)