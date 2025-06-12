console.clear();
let teclado = require(`prompt-sync`)()

let matrizdois: string[][] = new Array(3);
for (let i = 0; i < 3; i++){
matrizdois[i] = new Array(3)

for (let j = 0; j < 4; j++){
let nome : string = teclado (`digite o nome que vai estar no endereço [${i},${j}]da matriz: `)

matrizdois[i][j] = nome;
} 

}

console.log(matrizdois);