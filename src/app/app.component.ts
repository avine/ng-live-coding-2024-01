import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from "./todo-list/todo-list.component";
import { TodoListService } from './todo-list/todo-list.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, TodoListComponent]
})
export class AppComponent {
  protected todoListService = inject(TodoListService);

  constructor() {
    this.todoListService.getTodos().subscribe();
  }
}
