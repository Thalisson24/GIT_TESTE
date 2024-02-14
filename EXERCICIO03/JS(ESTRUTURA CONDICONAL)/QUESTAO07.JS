// As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe 
// contrataram para desenvolver o programa que calculará os reajustes. Escreva um algoritmo que leia o 
// salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
// o salários até R$ 280,00 (incluindo) : aumento de 20%
// o salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
// o salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
// o salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
// · o salário antes do reajuste;
// · o percentual de aumento aplicado;
// · o valor do aumento;
// · o novo salário, após o aumento.
var salario = parseInt(prompt("SALARIO DO FUNCIONARIO? "))
if(salario <280 ){
    var percentual = 0.20
    var aumento = (salario * percentual)
    var novosalario = salario + aumento
    console.log("SALARIO ANTIGO: " + salario + "$" + "\nPERCENTUAL APLICADO: " + (percentual*100) + "%" + "\nVALOR AUMENTADO: " + aumento + "$" +"\nNOVO SALARIO: " + novosalario + "$")

}
else if(salario >=280 && salario < 700 ){
    var percentual = 0.15
    var aumento = (salario * percentual)
    var novosalario = salario + aumento
    console.log("SALARIO ANTIGO: " + salario + "$" + "\nPERCENTUAL APLICADO: " + (percentual*100) + "%" + "\nVALOR AUMENTADO: " + aumento + "$" +"\nNOVO SALARIO: " + novosalario + "$")
    
}
else if(salario >=700 && salario < 1500 ){
    var percentual = 0.10
    var aumento = (salario * percentual)
    var novosalario = salario + aumento
    console.log("SALARIO ANTIGO: " + salario + "$" + "\nPERCENTUAL APLICADO: " + (percentual*100) + "%" + "\nVALOR AUMENTADO: " + aumento + "$" +"\nNOVO SALARIO: " + novosalario + "$")
    
}
else if(salario >= 1500 ){
    var percentual = 0.05
    var aumento = (salario * percentual)
    var novosalario = salario + aumento
    console.log("SALARIO ANTIGO: " + salario + "$" + "\nPERCENTUAL APLICADO: " + (percentual*100) + "%" + "\nVALOR AUMENTADO: " + aumento + "$" +"\nNOVO SALARIO: " + novosalario + "$")
    
}

