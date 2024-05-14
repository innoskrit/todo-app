import express from 'express';
var bodyParser = require('body-parser')
import todoRoutes from './routes/TodoRoutes';

const app = express();
app.use(bodyParser());
app.use(todoRoutes);

export default app;