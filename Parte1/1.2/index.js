"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var util_1 = require("util");
var carregaArquivo = function (arquivo) { return __awaiter(void 0, void 0, void 0, function () {
    var readFile, data, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                readFile = (0, util_1.promisify)(fs.readFile);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, readFile(arquivo, 'utf-8')];
            case 2:
                data = _a.sent();
                return [2 /*return*/, JSON.parse(data)];
            case 3:
                error_1 = _a.sent();
                throw new Error("Erro ao carregar o arquivo: ".concat(error_1.message));
            case 4: return [2 /*return*/];
        }
    });
}); };
var Grupos = /** @class */ (function () {
    function Grupos() {
        this.grupos = null;
    }
    Grupos.prototype.carrega = function () {
        return __awaiter(this, void 0, void 0, function () {
            var arquivo, _a, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        arquivo = './grupos.json';
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, carregaArquivo(arquivo)];
                    case 2:
                        _a.grupos = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _b.sent();
                        throw new Error("Erro ao carregar o arquivo JSON: ".concat(error_2.message));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Grupos.prototype.busca = function (nomeUsuario, callback) {
        if (!this.grupos || !Array.isArray(this.grupos.grupos)) {
            throw new Error('O arquivo JSON não foi carregado ou está em um formato inválido.');
        }
        var resultados = [];
        var buscaRecursiva = function (grupo) {
            if (grupo.usuarios) {
                for (var _i = 0, _a = grupo.usuarios; _i < _a.length; _i++) {
                    var usuario = _a[_i];
                    if (usuario.nome && usuario.nome.toLowerCase().includes(nomeUsuario.toLowerCase())) {
                        resultados.push(grupo.nome || ''); // Armazena apenas o nome do grupo
                        break;
                    }
                }
            }
            if (grupo.subGrupos) {
                for (var _b = 0, _c = grupo.subGrupos; _b < _c.length; _b++) {
                    var subGrupo = _c[_b];
                    buscaRecursiva(subGrupo);
                }
            }
        };
        for (var _i = 0, _a = this.grupos.grupos; _i < _a.length; _i++) {
            var grupo = _a[_i];
            buscaRecursiva(grupo);
        }
        callback(resultados);
    };
    return Grupos;
}());
var grupos = new Grupos();
grupos.carrega()
    .then(function () {
    grupos.busca('José', function (resultados) {
        console.log('Grupos que contêm usuários com nome "José":');
        console.log(resultados);
    });
})
    .catch(function (error) {
    console.error(error.message);
});
