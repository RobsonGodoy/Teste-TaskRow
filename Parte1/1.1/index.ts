import { calculaDV, validaNumeroXpto } from './XPTO';

const numero = 4638;
const dv = calculaDV(numero);
console.log(`Dígito Verificador: ${dv}`);

const numeroXPTO = 46387;
const isValid = validaNumeroXpto(numeroXPTO);
console.log(`É um número XPTO válido? ${isValid}`);
