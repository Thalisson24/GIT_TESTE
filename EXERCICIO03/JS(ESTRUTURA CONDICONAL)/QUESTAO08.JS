// Para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que 
// depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a 
// 11% do salário bruto, mas não é descontado (é a empresa que deposita). O salário líquido corresponde 
// ao salário bruto menos os descontos. O programa deverá pedir ao usuário o valor da sua hora e a 
// quantidade de horas trabalhadas no mês.
// Desconto do IR:
// o Salário Bruto até R$ 900,00 (inclusive) - isento
// o Salário Bruto até R$ 1.500,00 (inclusive) - desconto de 5%
// o Salário Bruto até R$ 2.500,00 (inclusive) - desconto de 10%
// o Salário Bruto acima de R$ 2.500,00 - desconto de 20%
// Escreva na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora é 5 e 
// a quantidade de hora é 220.
//  Salário Bruto: (5 * 220) : R$ 1100,00
//  (-) IR (5%) : R$ 55,00 
//  (-) INSS ( 10%) : R$ 110,00
//  FGTS (11%) : R$ 121,00
//  Total de descontos : R$ 165,00
//  Salário Liquido : R$ 935,00
var salariobase = {
    carga : parseInt(prompt("ME INFOME A SUA CARGA HORARIA")),
    valor_carga: parseInt(prompt("VALOR DA HORA?")),
}
var salariobruto = (salariobase.carga * salariobase.valor_carga)
if(salariobruto > 900 && salariobruto <1500){
    var ir = 0.05
    var inss = 0.10
    var fgts = 0.11
    var desconto = (salariobruto*inss) + (salariobruto*ir)
    var salarioliquido = salariobruto - desconto
    console.log("SALARIO BRUTO: " + salariobruto + "$" + "\nIR: -" + (salariobruto*ir) + "$"  + "\nINSS: -" +(salariobruto*inss) + "$" + "\nFGTS: -" + (salariobruto*fgts) + "$"  + "\nDESCONTO: -"  + desconto + "$" + "\nVALOR LIQUIDO: " + salarioliquido + "$" )

}
else if (salariobruto >= 1500 && salariobruto <2500){
    var ir = 0.10
    var inss = 0.10
    var fgts = 0.11
    var desconto = (salariobruto*inss) + (salariobruto*ir)
    var salarioliquido = salariobruto - desconto
    console.log("SALARIO BRUTO: " + salariobruto + "$" + "\nIR: -" + (salariobruto*ir) + "$"  + "\nINSS: -" +(salariobruto*inss) + "$" + "\nFGTS: -" + (salariobruto*fgts) + "$"  + "\nDESCONTO: -"  + desconto + "$" + "\nVALOR LIQUIDO: " + salarioliquido + "$" )


}
else if (salariobruto >=2500){
    var ir = 0.20
    var inss = 0.10
    var fgts = 0.11
    var desconto = (salariobruto*inss) + (salariobruto*ir)
    var salarioliquido = salariobruto - desconto
    console.log("SALARIO BRUTO: " + salariobruto + "$" + "\nIR: -" + (salariobruto*ir) + "$"  + "\nINSS: -" +(salariobruto*inss) + "$" + "\nFGTS: -" + (salariobruto*fgts) + "$"  + "\nDESCONTO: -"  + desconto + "$" + "\nVALOR LIQUIDO: " + salarioliquido + "$" )
}
else{
    console.log("VALOR LIQUIDO: "+ salariobruto)
}