//  initialize mysql db connection

import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

//  check if env variables are set

console.log('password', process.env.DB_PASS);
console.log('name', process.env.DB_NAME);
console.log('host', process.env.DB_HOST);
console.log('user', process.env.DB_USER);

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to database');
    }
});

// export db
export default db;
