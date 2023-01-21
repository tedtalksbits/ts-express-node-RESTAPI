import express from 'express';
import db from '../db/index';
const router = express.Router();

router.get('/', (_req, res) => {
    const query = `SELECT * FROM Apartments`;

    db.query(query, (error, result: []) => {
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

export default router;
