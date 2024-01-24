import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-todo-details',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './todo-details.component.html',
  styleUrl: './todo-details.component.css'
})
export class TodoDetailsComponent {
  activatedRoute = inject(ActivatedRoute);

  id$ = this.activatedRoute.parent?.params.pipe(map(({ id }) => id as string));
}
