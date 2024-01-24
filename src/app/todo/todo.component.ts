import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export default class TodoComponent {
  activatedRoute = inject(ActivatedRoute);

  id = toSignal(this.activatedRoute.params.pipe(map(({ id }) => id as string)), { initialValue: '' });
}
