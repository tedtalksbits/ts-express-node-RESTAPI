import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

//  initialize app
const app = express();
dotenv.config();
// add middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// static middleware
app.use(express.static('public'));

// server listen
const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
