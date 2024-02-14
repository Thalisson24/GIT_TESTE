//  Leia uma letra, verifique se letra é "F" ou "M" e escreva F - Feminino, M - Masculino, Sexo Inválido.
var letra = prompt("DIGA QUALQUER LETRA?").toLowerCase()
if(letra !== "f" && letra !== "m"){
    console.log("SEXO INVÁLIDO.")
}
else if(letra === "f"){
    console.log("F - FEMININO")
}
else if(letra === "m"){
    console.log("M - MASCULINO.")
}