import { Todo } from "../model/Todo";

interface TodoRepositoryInterface {
    createTodo(todo: Todo): Promise<Todo>;
    getTodos(): Promise<Todo[]>;
    getTodo(todoId: string): Promise<Todo>;
    updateTodo(todoId: string, todo: Todo): Promise<Todo>;
    deleteTodo(todoId: string): Promise<number>;
}

export default TodoRepositoryInterface