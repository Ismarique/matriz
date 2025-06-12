// 5- Crie uma matriz 3x3 com entrada manual de
// números. Em seguida, exiba a matriz na tela.

console.clear();
let teclado = require(`prompt-sync`)()

let matrizdois: number[][] = new Array(3);
for (let i = 0; i < 3; i++){
matrizdois[i] = new Array(3)

for (let j = 0; j < 3; j++){
let nome : number = parseInt(teclado (`digite o nome que vai estar no endereço [${i},${j}]da matriz: `));

matrizdois[i][j] = nome;
} 

}
console.clear();

console.log(matrizdois);