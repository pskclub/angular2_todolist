import {Injectable} from '@angular/core';
import {Todo} from "./todo";

@Injectable()
export class TodoServiceService {

    todos: Todo[] = [
        {detail: 'Feed the cat'},
        {detail: 'Do the shopping'}
    ];

    getTodos(): Promise<Todo[]> {
        return Promise.resolve(this.todos)
    }

    addItem(newItem: string) {
        this.todos.push({
            detail: newItem
        });
    }

    removeItem(index: number) {
        this.todos.splice(index, 1);
    }

    constructor() {
    }

}
