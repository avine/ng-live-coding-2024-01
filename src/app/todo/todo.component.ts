import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [RouterOutlet, RouterLink, JsonPipe],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export default class TodoComponent {
  activatedRoute = inject(ActivatedRoute);

  todo = toSignal(this.activatedRoute.data.pipe(map(({ myTodo }) => myTodo)), { initialValue: '' });
}
