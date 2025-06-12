// 8- Crie uma matriz 3x3 com números aleatórios entre 0 e 20.
// Em seguida, exiba a matriz na tela e encontre o maior
// elemento da matriz e a posição em que ele se encontra.

console.clear();
let teclado = require(`prompt-sync`)()
let nomemaior : number = 0
let coluna : number =0
let linha : number=0

let matriz: number[][] = new Array(3);
for (let i = 0; i < 3; i++){
matriz[i] = new Array(3)

for (let j = 0; j < 3; j++){
let nome : number = Math.floor(Math.random() * 21);

matriz[i][j] = nome;

if (nome>nomemaior){
nomemaior = nome 
linha = i
coluna = j
}

} 

}

console.log(matriz);
console.log(`o maior numero é ${nomemaior}`);
console.log(`esta localisado: ${linha},${coluna}`);