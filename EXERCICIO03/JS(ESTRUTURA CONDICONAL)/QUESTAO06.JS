// Leia o turno em que um aluno estuda, sendo M para matutino, V para Vespertino ou N para Noturno e 
// escreva a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.

var turno = prompt("EM QUAL TURNO É REALIZADO SEU CURSO SUPERIOR? M(MATUTINO),V(VESPERTINO) OU N(NORTUNO)")
turno = turno.toLocaleLowerCase()
var t = turno.split("")

if(t[0] === "m"){
    console.log("BOM DIA!!")
}
else if(t[0] === "v"){
    console.log("BOA TARDE!!")
}
else if(t[0] === "n"){
    console.log("BOA NOITE!!")
}
else{
    console.log("VALOR INVALIDO.")
}