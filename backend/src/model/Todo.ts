import { TodoStatus } from "./TodoStatus";

export interface Todo {
    id: string;
    name: string;
    status: TodoStatus;
}