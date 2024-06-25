import MySQLConnection from "../config/database";
import { Todo } from "../model/Todo";
import TodoRepositoryInterface from "./TodoRepositoryInterface";
import {v4 as uuidv4} from 'uuid';

class TodoDBRepository implements TodoRepositoryInterface {
    async createTodo(todo: Todo): Promise<Todo> {
        const id = uuidv4();
        const result = await MySQLConnection.insert(`INSERT INTO todos VALUES ('${id}', '${todo.title}', 0)`);
        if (result === 0) {
            new Error(`Could not insert todo`);
        }
        return await this.getTodo(id);

    }
    async getTodos(): Promise<Todo[]> {
        const result = await MySQLConnection.getall(`SELECT * FROM todos`);
        return result;
    }
    async getTodo(todoId: string): Promise<Todo> {
        const result = await MySQLConnection.getrow(`SELECT * FROM todos WHERE id = '${todoId}'`);
        return result;
    }
    async updateTodo(todoId: string, todo: Todo): Promise<Todo> {
        const existingTodo = await this.getTodo(todoId);
        if(existingTodo === undefined || existingTodo === null) {
            throw new Error(`Todo with id ${todoId} does not exist`);
        }
        const query = `UPDATE todos SET title = '${todo.title}', status = ${todo.status} WHERE id = '${todoId}'`;
        console.log(query);
        const result = await MySQLConnection.update(query);
        console.log(result);
        if(result === 0) {
            throw new Error(`Could not update Todo with id ${todoId}`);
        } 
        return await this.getTodo(todoId);
    }
    async deleteTodo(todoId: string): Promise<number> {
        const result = MySQLConnection.delete(`DELETE FROM todos WHERE id = '${todoId}'`)
        return result;
    }
}

export default TodoDBRepository;