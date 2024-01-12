import { Component, inject } from '@angular/core';
import { TodoFormComponent } from './ui/todo-form.component';
import { TodoService } from '../shared/data-access/todo.service';
import { TodoListComponent } from './ui/todo-list.component';

@Component({
  standalone: true,
  selector: 'app-home',
  template: `
    <div class="home">
      <h1>Todo app</h1>
      <app-todo-form (todoSubmitted)="todoService.addTodo($event)" />
      <app-todo-list [todos]="todoService.todos()" />
    </div>
  `,
  imports: [TodoFormComponent, TodoListComponent],
  styles: [
    `
      :host {
        display: flex;
        flex: 1;
        margin: 25px;
      }

      h1 {
        font-size: 48px;
        background: linear-gradient(to right, #de45c4 0%, #1ec6e8 50%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    `,
  ],
})
export default class HomeComponent {
  todoService = inject(TodoService);
}
