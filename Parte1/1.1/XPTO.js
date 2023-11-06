"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validaNumeroXpto = exports.calculaDV = void 0;
// Função para calcular o dígito verificador (DV)
function calculaDV(numero) {
    var digitos = numero.toString().split('').map(Number);
    var somaProdutos = digitos[0] * 4 + digitos[1] * 5 + digitos[2] * 6 + digitos[3] * 7;
    var restoDivisao20 = somaProdutos % 20;
    var dv = (restoDivisao20 + 7) % 10;
    return dv;
}
exports.calculaDV = calculaDV;
// Função para validar um número XPTO
function validaNumeroXpto(numero) {
    if (numero < 10004 || numero > 99995) {
        return false;
    }
    var digitos = numero.toString().split('').map(Number);
    var dv = digitos.pop();
    var calculadoDV = calculaDV(parseInt(digitos.join('')));
    return dv === calculadoDV;
}
exports.validaNumeroXpto = validaNumeroXpto;
