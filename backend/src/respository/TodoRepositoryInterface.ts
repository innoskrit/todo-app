import { Todo } from "../model/Todo";

interface TodoRepositoryInterface {
    createTodo(todo: Todo): Todo;
    getTodos(): Todo[];
    getTodo(todoId: string): Todo | null;
    updateTodo(todoId: string, todo: Todo): Todo | null;
    deleteTodo(todoId: string): Todo | null;
}

export default TodoRepositoryInterface