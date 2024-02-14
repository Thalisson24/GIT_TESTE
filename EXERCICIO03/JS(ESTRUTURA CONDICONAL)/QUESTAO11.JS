// Leia um número inteiro menor que 1000 e imprima a quantidade de centenas, dezenas e unidades do 
// número. Observando os termos no plural a colocação do "e", da vírgula entre outros. Exemplos:
// o 326 = 3 centenas, 2 dezenas e 6 unidades
// o 12 = 1 dezena e 2 unidadeS
var num = parseInt(prompt("ME DIGA UM NUMERO ENTRE 0 A 1000?"))
if(num < 100){
    var unidade = num%10
    var dezena = (num - unidade) / 10
    console.log("UNIDADE: " + unidade)
    console.log("DEZENA: " + dezena)
}
else if(num >=100 && num < 110){
    var unidade = num%100
    var centena = (num - unidade)/100
    console.log("UNIDADE: " + unidade)
    console.log("CENTENA: " + centena)
}
else if(num >= 110 && num <=1000){
    var unidade = num%10
    var dezena = ((num - unidade)%100)
    var centena = (num - dezena - unidade)/100
    console.log("UNIDADE: " + unidade)
    console.log("DEZENA: " + dezena/10)
    console.log("CENTENA: " + centena)

}