import express from 'express';
var bodyParser = require('body-parser')
import todoRoutes from './routes/TodoRoutes';
import cors from 'cors';

const app = express();

const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(todoRoutes);

export default app;