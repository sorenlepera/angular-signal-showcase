import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateTodo } from '../../shared/interfaces/todo';

@Component({
  standalone: true,
  selector: 'app-todo-form',
  template: `
    <form
      [formGroup]="todoForm"
      (ngSubmit)="todoSubmitted.emit(todoForm.getRawValue())"
    >
      <input type="text" formControlName="title" placeholder="Title" />
      <input
        type="text"
        formControlName="description"
        placeholder="Description"
      />
      <button [disabled]="!todoForm.valid" type="submit">Add todo</button>
    </form>
  `,
  imports: [ReactiveFormsModule],
  styles: [
    `
      button {
        background-color: #11161f;
        color: white;
      }
    `,
  ],
})
export class TodoFormComponent {
  @Output() todoSubmitted = new EventEmitter<CreateTodo>();

  private fb = inject(FormBuilder);

  todoForm = this.fb.nonNullable.group({
    title: ['', Validators.required],
    description: [''],
  });
}
