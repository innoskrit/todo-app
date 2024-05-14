import express from 'express';
import { createTodo, deleteTodo, getTodo, getTodos, updateTodo } from '../controller/TodoController';

const router = express.Router();

router.post('/todos', createTodo);
router.get('/todos', getTodos);
router.get('/todos/:id', getTodo);
router.put('/todos/:id', updateTodo);
router.delete('/todos/:id', deleteTodo);

export default router;