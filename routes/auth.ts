import express from 'express';
import db from '../db/index';
import jwt from 'jsonwebtoken';
const router = express.Router();

router.post('/', (req, res) => {
    // get body data

    const { username, password } = req.body;

    // check if username and password are set

    if (!username || !password) {
        res.status(400).json({
            message: 'Username and password are required',
            status: 'error',
        });
        return;
    }

    // find user in db
    const query = `SELECT * FROM Auth WHERE username = '${username}' AND password = '${password}'`;

    db.query(query, (error, result: []) => {
        if (error) {
            res.status(500).json({
                message: 'Internal server error',
                status: 'error',
                error,
            });
        }

        if (result.length > 0) {
            // create token
            const token = jwt.sign({ username, password }, 'secret', {
                expiresIn: '1h',
            });
            res.status(200).json({
                message: 'User logged in successfully',
                status: 'success',
                token,
            });
        } else {
            res.status(401).json({
                message: 'Invalid username or password',
                status: 'error',
            });
        }
    });
});

export default router;
