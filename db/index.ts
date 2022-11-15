//  initialize mysql db connection

import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

//  check if env variables are set

if (
    !process.env.DB_HOST ||
    !process.env.DB_USER ||
    !process.env.DB_PASS ||
    !process.env.DB_NAME
) {
    console.log('Please set all environment variables');
    process.exit(1);
}

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
