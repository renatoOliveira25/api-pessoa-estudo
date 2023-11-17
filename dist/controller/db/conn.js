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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModel = void 0;
const pg_1 = __importDefault(require("pg"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class DatabaseModel {
    constructor() {
        this._config = {
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            password: process.env.DB_PASSWORD,
            port: process.env.DB_PORT,
            max: 10,
            idleTimeoutMillis: 10000
        };
        this._pool = new pg_1.default.Pool(this._config);
        this._client = new pg_1.default.Client(this._config);
    }
    testeConexao() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this._client.connect();
                console.log("Database connected!");
                this._client.end();
                return true;
            }
            catch (error) {
                console.log("Error to connect database X( ");
                console.log(error);
                this._client.end();
                return false;
            }
        });
    }
    get pool() {
        return this._pool;
    }
}
exports.DatabaseModel = DatabaseModel;
//# sourceMappingURL=conn.js.map