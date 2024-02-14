// Leia 2 (duas) notas parciais de um aluno, calcule a média e escreva a mensagem:
// o "Aprovado", se a média alcançada for maior ou igual a sete;
// o "Reprovado", se a média for menor do que sete;
// o "Aprovado com Distinção", se a média for igual a dez.
var nota01 = parseFloat(prompt("PRIMEIRA NOTA?"))
var nota02 = parseFloat(prompt("SEGUNDA NOTA?"))
var media = (nota01 + nota02)/2
if(media >= 7 && media < 10){
    console.log("APROVADO.")
}
else if(media === 10){
    console.log("APROVADO COM DISTINÇÃO.")
}
else if(media < 7){
    console.log("REPROVADO.")
}
