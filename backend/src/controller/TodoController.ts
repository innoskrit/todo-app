import express from 'express';
import TodoService from '../service/TodoService';
import TodoDBRepository from '../respository/TodoDBRepository';

const todoService = new TodoService(new TodoDBRepository());

export const createTodo = async (req: express.Request, res: express.Response) => {
    if(req.body.title === "") {
        res.status(400).json({error: "Name cannot be empty."});
    }
    const todo = await todoService.createTodo(req.body);
    if(todo === undefined || todo === null) {
        res.status(500).json({message: "Todo couldn't be created.", data: null});
    }
    res.status(200).json({message: "Todo created successfully.", data: todo});
}

export const getTodos = async (req: express.Request, res: express.Response) => {
    const todos = await todoService.getTodos();
    if(todos.length === 0) {
        res.status(404).json({message: "No Todos found."});
    }
    res.status(200).json({message: "Todos fetched successfully.", data: todos});
}

export const getTodo = async (req: express.Request, res: express.Response) => {
    const todoId = req.params["id"];
    const todo = await todoService.getTodo(todoId);
    if(todo === null) {
        res.status(404).json({error: "No Todo found"});
    }
    res.status(200).json({message: "Todo fetched successfully.", data: todo});
}

export const updateTodo = async (req: express.Request, res: express.Response) => {
    const todoId = req.params["id"];
    const updatedTodo = await todoService.updateTodo(todoId, req.body);
    if(updatedTodo === undefined || updatedTodo === null) {
        res.status(404).json({error: "No Todo updated"});
    }
    res.status(200).json({message: "Todo updated successfully.", data: updatedTodo});
}

export const deleteTodo = async (req: express.Request, res: express.Response) => {
    const todoId = req.params["id"];
    const deletedTodo = await todoService.deleteTodo(todoId);
    if(deletedTodo === 0) {
        res.status(404).json({error: "No Todo deleted."});
    }
    res.status(200).json({message: "Todo deleted successfully."});
}