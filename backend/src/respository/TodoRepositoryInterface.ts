import { Todo } from "../model/Todo";

interface TodoRepositoryInterface {
    createTodo(todo: Todo): Todo;
    getTodos(): Promise<Todo[]>;
    getTodo(todoId: string): Promise<Todo>;
    updateTodo(todoId: string, todo: Todo): Todo | null;
    deleteTodo(todoId: string): Todo | null;
}

export default TodoRepositoryInterface