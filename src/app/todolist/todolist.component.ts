import {Component, OnInit} from '@angular/core';
import {Todo} from "../todo";
import {TodoServiceService} from "../todo-service.service";

@Component({
    selector: 'app-todolist',
    templateUrl: './todolist.component.html',
    styleUrls: ['./todolist.component.css'],
    providers: [TodoServiceService]
})
export class TodolistComponent implements OnInit {

    todos: Todo[];
    newTodo: string = '';

    constructor(private todoservice: TodoServiceService) {
    }

    addTodo(event){
        this.todoservice.addItem(this.newTodo)
        this.newTodo = '';
    }

    removeTodo(index){
        this.todoservice.removeItem(index);
    }

    getTodos(): void{
        this.todoservice.getTodos().then(todos => this.todos = todos)
    }

    ngOnInit() {
        this.getTodos();
    }

}
