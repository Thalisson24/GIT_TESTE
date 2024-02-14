// Leia N e escreva todos os números inteiros pares de 1 a N.
var n = 25
var impares = []
var pares = []
for(i = 1; i <= n ; i++){
    if((i%2)!== 0){
        impares.push(i)
    }
    else{
        pares.push(i)
    }
}
// IMPARES
console.table("IMPARES:" + impares)

// PARES
console.table("PARES:" + pares)