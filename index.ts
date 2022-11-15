import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './db/index';

//  initialize app
const app = express();
dotenv.config();
// add middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  initialize routes
app.get('/', (req, res) => {
    db.query('SELECT * FROM a', (err, result) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.send(result);
        }
    });
});
// server listen
const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
