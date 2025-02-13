import express from 'express';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js'
import cookieParser from 'cookie-parser';
import cors from 'cors';

import dotenv from 'dotenv';
import { connectDB } from './lib/db.js';
dotenv.config()

const app = express();

app.use(express.json()) // parses incoming requests with JSON using req.body
app.use(cookieParser())  // allows you to parse the cookies
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use('/api/auth', authRoutes);
app.use('/api/message', messageRoutes);

app.listen(5001, ()=> {
    console.log(`Server is running on port ${process.env.PORT}`);
    connectDB();
})