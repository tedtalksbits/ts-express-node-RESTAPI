"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("../db/index"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    const query = `SELECT * FROM Apartments`;
    index_1.default.query(query, (error, result) => {
        if (error) {
            return res.status(500).json({
                message: 'Internal server error',
                status: 'error',
                error,
            });
        }
        return res.status(200).render('apartments', { apartments: result });
    });
});
exports.default = router;
//# sourceMappingURL=apartments.js.map