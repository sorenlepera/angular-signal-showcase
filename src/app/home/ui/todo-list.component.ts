import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Todo } from '../../shared/interfaces/todo';
import { TodoService } from '../../shared/data-access/todo.service';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-todo-list',
  template: `
    <ul>
      @for (todo of todos; track todo.id){
      <li>
        <a routerLink="/detail/{{ todo.id }}">{{ todo.title }}</a>
        <p>{{ todo.id | date : 'medium' }}</p>
        <button class="delete" (click)="todoService.removeTodo(todo)">
          <mat-icon class="delete-icon">delete</mat-icon>
        </button>
      </li>
      } @empty {
      <li>Nothing to do!</li>
      }
    </ul>
  `,
  imports: [RouterLink, MatIconModule, CommonModule],
  styles: [
    `
      ul {
        margin: 0;
        padding: 1rem;
      }

      li {
        display: flex;
        align-items: center;
        font-size: 18px;
        gap: 5px;
      }

      button {
        background-color: #3d0704;
        color: #d2d2d2;
      }

      .delete {
        height: 22px;
        width: 22px;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .delete-icon {
        font-size: 15px;
        height: 15px;
      }
    `,
  ],
})
export class TodoListComponent {
  @Input({ required: true }) todos!: Todo[];
  todoService = inject(TodoService);
}
