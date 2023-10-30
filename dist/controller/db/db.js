"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pgp = exports.db = void 0;
const pgp = require('pg-promise')();
exports.pgp = pgp;
const connection = {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
};
const db = pgp(connection);
exports.db = db;
//# sourceMappingURL=db.js.map