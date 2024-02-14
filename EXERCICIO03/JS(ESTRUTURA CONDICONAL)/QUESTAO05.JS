// Leia o preço de três produtos e informe qual produto deve ser comprado, sabendo que a decisão é 
// sempre pelo mais barato.
var produto01 = {
    nome: "FEIJÃO",
    preco: 10
}
var produto02 = {
    nome: "ARROZ",
    preco: 12
}
var produto03 = {
    nome : "MACARRÃO",
    preco : 14
}
var menorpreco = Math.min(produto01.preco,produto02.preco,produto03.preco)
if(menorpreco ===  produto01.preco){
    console.log("O PRODUTO MAIS BARATO É O " + produto01.nome + "\nCUSTANDO " + menorpreco + "$")

}
else if(menorpreco ===  produto02.preco){
    console.log("O PRODUTO MAIS BARATO É O " + produto02.nome + "\nCUSTANDO " + menorpreco + "$")

}
else if(menorpreco ===  produto03.preco){
    console.log("O PRODUTO MAIS BARATO É O " + produto03.nome + "\nCUSTANDO " + menorpreco + "$")

}