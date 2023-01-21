import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import auth from './routes/auth';

//  initialize app
const app = express();
dotenv.config();
// add middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// static middleware
app.use(express.static('public'));

// set render engine
app.set('view engine', 'ejs');

app.use('/v1/api/auth', auth);

//  routes
app.get('/v1/api/docs', (req, res) => {
    // check for query params
    if (req.query.name) {
        return res.render('index', { name: req.query.name });
    } else {
        return res.render('index', { name: 'Guest' });
    }
});

app.get('/apartments', (_req, res) => {
    res.send('Hello World');
});

// server listen
const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
