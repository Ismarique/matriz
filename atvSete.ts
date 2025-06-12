// 7-Crie uma matriz 3x3 com números aleatórios de 0 a 9.
// Em seguida, exiba a matriz na tela.

console.clear();
let teclado = require(`prompt-sync`)()

let matrizdois: number[][] = new Array(3);
for (let i = 0; i < 3; i++){
matrizdois[i] = new Array(3)

for (let j = 0; j < 3; j++){
let nome : number = Math.floor(Math.random() * 10);

    matrizdois[i][j] = nome;

}

} 


console.clear();

console.log(matrizdois);
