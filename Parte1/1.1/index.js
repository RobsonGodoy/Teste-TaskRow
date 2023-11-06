"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XPTO_1 = require("./XPTO");
var numero = 4638;
var dv = (0, XPTO_1.calculaDV)(numero);
console.log("D\u00EDgito Verificador: ".concat(dv));
var numeroXPTO = 46387;
var isValid = (0, XPTO_1.validaNumeroXpto)(numeroXPTO);
console.log("\u00C9 um n\u00FAmero XPTO v\u00E1lido? ".concat(isValid));
