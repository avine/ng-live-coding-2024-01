import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Todo } from './todo-list.types';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  private httpClient = inject(HttpClient);

  public todos = signal<Todo[]>([]);

  public length = computed(() => this.todos().length);

  getTodos() {
    return this.httpClient.get<Todo[]>('https://jsonplaceholder.typicode.com/todos').pipe(
      map((todos) => todos.filter(({ completed }) => completed)),
      map((todos) => todos.slice(0, 10)),
      tap((todos) => this.todos.set(todos)),
    );
  }

  addTodo(id: number) {
    return this.httpClient.get<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`).pipe(
      tap((todo) => {
        this.todos.update((todos) => [...todos, todo]);
      })
    );
  }
}
