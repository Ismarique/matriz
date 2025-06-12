// 9- Crie uma matriz 6x6 com entrada manual. Em seguida,
// calcule e exiba a soma dos elementos das colunas pares da
// matriz.

console.clear();
let teclado = require(`prompt-sync`)()

let matriz: number[][] = [];
for (let i = 0; i < 3; i++){
matriz[i] = new Array(3)

for (let j = 0; j < 3; j++){
let nome : number =parseInt(teclado (`digite um numero par que vai estar no endereço [${i},${j}]da matriz: `));
if (nome%2==0){
matriz[i][j] = nome;
}else{
    console.log(`apenas numeros pares!`)
    j--}

} 

}
console.clear();

console.log(matriz);


