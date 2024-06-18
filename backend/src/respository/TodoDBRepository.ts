import MySQLConnection from "../config/database";
import { Todo } from "../model/Todo";
import TodoRepositoryInterface from "./TodoRepositoryInterface";

class TodoDBRepository implements TodoRepositoryInterface {
    createTodo(todo: Todo): Todo {
        throw new Error("Method not implemented.");
    }
    async getTodos(): Promise<Todo[]> {
        const result = await MySQLConnection.getall(`SELECT * FROM todos`);
        return result;
    }
    async getTodo(todoId: string): Promise<Todo> {
        const result = await MySQLConnection.getrow(`SELECT * FROM todos WHERE id = '${todoId}'`);
        return result;
    }
    updateTodo(todoId: string, todo: Todo): Todo | null {
        throw new Error("Method not implemented.");
    }
    deleteTodo(todoId: string): Todo | null {
        throw new Error("Method not implemented.");
    }
}

export default TodoDBRepository;