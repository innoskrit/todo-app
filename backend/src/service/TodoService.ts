import { Todo } from "../model/Todo";
import { TodoStatus } from "../model/TodoStatus";
import { uuid } from 'uuidv4';
import TodoInMemoryRepository from "../respository/TodoInMemoryRepository";
import TodoRepositoryInterface from "../respository/TodoRepositoryInterface";

class TodoService {

    private readonly todoRepository: TodoRepositoryInterface;

    public constructor(todoRepository: TodoRepositoryInterface) { 
        this.todoRepository = todoRepository;
    }

    public createTodo(todo: Todo): Todo {
        todo.id = uuid();
        todo.status = TodoStatus.TODO;
        return this.todoRepository.createTodo(todo);
    }

    public getTodos(): Todo[] {
        return this.todoRepository.getTodos();
    }

    public getTodo(todoId: string): Todo | null {
        return this.todoRepository.getTodo(todoId);
    }

    public updateTodo(todoId: string, todo: Todo): Todo | null {
        return this.todoRepository.updateTodo(todoId, todo);
    }

    public deleteTodo(todoId: string): Todo | null {
        return this.todoRepository.deleteTodo(todoId);;
    }
}

export default TodoService;