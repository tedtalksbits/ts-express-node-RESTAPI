"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("../db/index"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const router = express_1.default.Router();
router.post('/', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(400).json({
            message: 'Username and password are required',
            status: 'error',
        });
        return;
    }
    const query = `SELECT * FROM Auth WHERE username = '${username}' AND password = '${password}'`;
    index_1.default.query(query, (error, result) => {
        if (error) {
            res.status(500).json({
                message: 'Internal server error',
                status: 'error',
                error,
            });
        }
        if (result.length > 0) {
            const token = jsonwebtoken_1.default.sign({ username, password }, 'secret', {
                expiresIn: '1h',
            });
            res.status(200).json({
                message: 'User logged in successfully',
                status: 'success',
                token,
            });
        }
        else {
            res.status(401).json({
                message: 'Invalid username or password',
                status: 'error',
            });
        }
    });
});
exports.default = router;
//# sourceMappingURL=auth.js.map