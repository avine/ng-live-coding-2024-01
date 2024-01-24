import { Component, inject } from '@angular/core';
import { TodoListService } from './todo-list.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  protected todoListService = inject(TodoListService)
}
