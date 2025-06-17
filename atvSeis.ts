// 6-Crie uma matriz 3x3 com entrada manual de números
// aceitando somente números de 0 a 9. Em seguida,
// exiba a matriz na tela.

console.clear();
let teclado = require(`prompt-sync`)()

let matrizdois: number[][] = new Array(3);
for (let i = 0; i < 3; i++){
matrizdois[i] = new Array(3)

for (let j = 0; j < 3; j++){
let nome : number = parseInt(teclado (`digite o nome que vai estar no endereço [${i},${j}]da matriz(menores que nove): `));
if(nome <= 9 && nome>=0){
    matrizdois[i][j] = nome;
}else{
    j--
console.log(`esse numero nao é permitido`);
}

} 

}
console.clear();

console.log(matrizdois);