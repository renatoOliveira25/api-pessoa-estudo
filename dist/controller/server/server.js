"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("../routes/routes");
// Criando um servidor com a API express
const server = (0, express_1.default)();
exports.server = server;
// configurando o app para usar JSON
server.use(express_1.default.json());
// Configurando o app para usar o CORS
server.use((0, cors_1.default)());
// Configurando o app para usar as rotas do arquivo routes.ts
server.use(routes_1.router);
//# sourceMappingURL=server.js.map