import { Todo } from "../model/Todo";
import TodoRepositoryInterface from "./TodoRepositoryInterface";

class TodoInMemoryRepository {

    private todoList: Todo[];

    public constructor() {
        this.todoList = [];
    }

    public createTodo(todo: Todo): Todo {
        this.todoList.push(todo);
        return todo;
    }

    public getTodos(): Todo[] {
        return this.todoList;
    }

    public getTodo(todoId: string): Todo | null {
        for(let i = 0; i < this.todoList.length; i++) {
            if(this.todoList[i].id === todoId) {
                return this.todoList[i];
            }
        }
        return null;
    }

    public updateTodo(todoId: string, todo: Todo): Todo | null {
        for(let i = 0; i < this.todoList.length; i++) {
            if(this.todoList[i].id === todoId) {
                this.todoList[i].title = todo.title;
                this.todoList[i].status = todo.status;
                return this.todoList[i];
            }
        }
        return null;
    }

    public deleteTodo(todoId: string): Todo | null {
        let index = -1;
        for(let i = 0; i < this.todoList.length; i++) {
            if(this.todoList[i].id === todoId) {
                index = i;
                break;
            }
        }
        if(index === -1) {
            return null;
        }
        const deletedTodo = this.todoList[index];
        this.todoList.splice(index, 1)[0];
        return deletedTodo;
    }

}

export default TodoInMemoryRepository;