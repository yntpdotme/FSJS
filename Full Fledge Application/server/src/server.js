import dotenv from 'dotenv';

import connectDB from './config/db.js';
import app from './app.js';

dotenv.config({path: './.env'});

await connectDB();

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on Port ${port}...`));
