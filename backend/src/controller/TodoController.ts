import express from 'express';
import TodoRepository from '../respository/TodoRepository';
import TodoService from '../service/TodoService';

const todoService = new TodoService(new TodoRepository());

export const createTodo = (req: express.Request, res: express.Response) => {
    if(req.body.name === "") {
        res.status(400).json({error: "Name cannot be empty."});
    }
    const todo = todoService.createTodo(req.body);
    res.status(200).json({message: "Todo created successfully.", data: todo});
}

export const getTodos = (req: express.Request, res: express.Response) => {
    const todos = todoService.getTodos();
    if(todos.length === 0) {
        res.status(404).json({message: "No Todos found."});
    }
    res.status(200).json({message: "Todos fetched successfully.", data: todos});
}

export const getTodo = (req: express.Request, res: express.Response) => {
    const todoId = req.params["id"];
    const todo = todoService.getTodo(todoId);
    if(todo === null) {
        res.status(404).json({error: "No Todo found"});
    }
    res.status(200).json({message: "Todo fetched successfully.", data: todo});
}

export const updateTodo = (req: express.Request, res: express.Response) => {
    const todoId = req.params["id"];
    const updatedTodo = todoService.updateTodo(todoId, req.body);
    if(updatedTodo === null) {
        res.status(404).json({error: "No Todo found"});
    }
    res.status(200).json({message: "Todo updated successfully.", data: updatedTodo});
}

export const deleteTodo = (req: express.Request, res: express.Response) => {
    const todoId = req.params["id"];
    const deletedTodo = todoService.deleteTodo(todoId);
    if(deletedTodo === null) {
        res.status(404).json({error: "No Todo found"});
    }
    res.status(200).json({message: "Todo deleted successfully.", data: deletedTodo});
}