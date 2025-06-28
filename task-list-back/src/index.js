import express, { json } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes.js'

dotenv.config();

const app = express();

app.use(cors(
    {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true,
        allowedHeaders: ['Content-Type', 'Authorization']
    }
))

app.use(json());
app.use('/api/tasks', taskRoutes);

const port = 3000;
app.listen(port, () => {
    console.log('Servidor corriendo nice :) ...');
});