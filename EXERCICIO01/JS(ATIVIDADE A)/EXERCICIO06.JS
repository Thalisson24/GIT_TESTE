// 06 -Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6)

import { question } from "readline-sync";

// ENTRADA:
var km_h = Number(question("ME DIGA UM VALOR EM KM/H"));
// PROCESSAMENTO:
var converter = (km_h/3.6);
// SAIDA:
console.log(`VELOCIDADE EM KM/S${km_h} PARA M/S É IGUAL A: ${converter} `);
