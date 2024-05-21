import { Todo } from "../model/Todo";
import TodoRepositoryInterface from "./TodoRepositoryInterface";

class TodoDBRepository implements TodoRepositoryInterface {
    createTodo(todo: Todo): Todo {
        throw new Error("Method not implemented.");
    }
    getTodos(): Todo[] {
        throw new Error("Method not implemented.");
    }
    getTodo(todoId: string): Todo | null {
        throw new Error("Method not implemented.");
    }
    updateTodo(todoId: string, todo: Todo): Todo | null {
        throw new Error("Method not implemented.");
    }
    deleteTodo(todoId: string): Todo | null {
        throw new Error("Method not implemented.");
    }
}

export default TodoDBRepository;