import { Todo } from "../model/Todo";
import { TodoStatus } from "../model/TodoStatus";
import { uuid } from 'uuidv4';
import TodoRepositoryInterface from "../respository/TodoRepositoryInterface";

class TodoService {

    private readonly todoRepository: TodoRepositoryInterface;

    public constructor(todoRepository: TodoRepositoryInterface) { 
        this.todoRepository = todoRepository;
    }

    async createTodo(todo: Todo): Promise<Todo> {
        todo.id = uuid();
        todo.status = TodoStatus.TODO;
        return await this.todoRepository.createTodo(todo);
    }

    async getTodos(): Promise<Todo[]> {
        return await this.todoRepository.getTodos();
    }

    async getTodo(todoId: string): Promise<Todo> {
        return await this.todoRepository.getTodo(todoId);
    }

    async updateTodo(todoId: string, todo: Todo): Promise<Todo> {
        return await this.todoRepository.updateTodo(todoId, todo);
    }

    async deleteTodo(todoId: string): Promise<number> {
        return await this.todoRepository.deleteTodo(todoId);;
    }
}

export default TodoService;