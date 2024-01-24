import { JsonPipe } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [RouterOutlet, RouterLink, JsonPipe],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export default class TodoComponent {
  @Input() myTodo: any;

  @Input() id!: string;
}
