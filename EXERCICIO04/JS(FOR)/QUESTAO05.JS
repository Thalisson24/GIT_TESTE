// Leia um número, calcule e escreva seu fatorial
// var num = 12
// var a = []
// for(b = num;b !== 0; b--){
//     var fatorial = b
//     a.push(fatorial)

// }
// console.table("FATORIAL DO NUMERO ESCOLHIDO : " +  a  )
var num = 12;
var fatorial = 1; 

for (var b = num; b > 0; b--) {
    fatorial *= b;
}

console.log("FATORIAL DO NUMERO ESCOLHIDO: " + fatorial);
