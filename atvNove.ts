// 9- Crie uma matriz 6x6 com entrada manual. Em seguida,
// calcule e exiba a soma dos elementos das colunas pares da
// matriz.

console.clear();
let teclado = require(`prompt-sync`)()
let somaMaatriz: number= 0
let matriz: number[][] = [];
for (let i = 0; i < 6; i++){
matriz[i] = new Array(3)

for (let j = 0; j < 6; j++){
let nome : number =parseInt(teclado (`digite um numero par que vai estar no endereço [${i},${j}]da matriz: `));

matriz[i][j] = nome;
if(j%2==0){
somaMaatriz+=nome

}
} 

}
console.clear();
console.log(`a soma é :${somaMaatriz}`)
console.log(matriz);


