import { TodoStatus } from "./TodoStatus";

export interface Todo {
    id: string;
    title: string;
    status: TodoStatus;
}