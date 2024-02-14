// Leia as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a 
// sua média. A atribuição de conceitos obedece à tabela abaixo:
//  Média de Aproveitamento Conceito
//  Entre 9.0 e 10.0 A
//  Entre 7.5 e 9.0 B
//  Entre 6.0 e 7.5 C
//  Entre 4.0 e 6.0 D
//  Entre 4.0 e zero E
// O algoritmo deve mostrar na tela as notas, a média, o conceito correspondente e a mensagem 
// “APROVADO” se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.
var nota01 = parseFloat(prompt("PRIMEIRA NOTA?"))
var nota02 = parseFloat(prompt("SEGUNDA NOTA?"))
var media = (nota01 + nota02)/2
if(media >= 9 && media <=10){
    console.log("SUA NOTA EQUIVALE AO NIVEL A" + "\nVOCÊ ESTÁ APROVADO")
}
else if(media > 7.5 && media < 9){
    console.log("SUA NOTA EQUIVALE AO NIVEL B" + "\nVOCÊ ESTÁ APROVADO")
}
else if(media >= 6 && media <=7.5){
    console.log("SUA NOTA EQUIVALE AO NIVEL C" + "\nVOCÊ ESTÁ APROVADO")
}
else if(media >4 && media < 6){
    console.log("SUA NOTA EQUIVALE AO NIVEL D" + "\nVOCÊ ESTÁ REPROVADO")
}
else if(media < 4){
console.log("SUA NOTA EQUIVALE AO NIVEL E" + "\nVOCÊ ESTÁ REPROVADO")
}