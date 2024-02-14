// Leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda etc.), se digitar outro 
// valor deve aparecer valor inválido.
var num = parseInt(prompt("ESCOLHA UM NUMERO DE 01 A 07 PARA EXIBIR O DIA CORREPONDENTE DA SEMANA"))
switch (num) {
    case 1:
        console.log("DOMINGO")
        break
    case 2:
        console.log("SEGUNDA-FEIRA")
        break
    case 3:
        console.log("TERÇA-FEIRA")
        break
    case 4:
        console.log("QUARTA-FEIRAA")
        break
    case 5:
        console.log("QUINTA-FEIRA")
        break
    case 6:
        console.log("SEXTA-FEIRA")
        break
    case 7:
        console.log("SÁBADO")
        break
    default:
        console.log("VALOR INVÁLIDO, APERTE F5 PARA TENTAR NOVAMENTE")


}