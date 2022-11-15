"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
console.log('password', process.env.DB_PASS);
console.log('name', process.env.DB_NAME);
console.log('host', process.env.DB_HOST);
console.log('user', process.env.DB_USER);
const db = mysql2_1.default.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});
db.connect((err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Connected to database');
    }
});
exports.default = db;
//# sourceMappingURL=index.js.map