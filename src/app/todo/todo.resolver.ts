import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

type Todo = any;

export const todoResolver: ResolveFn<Todo> = (route, state) => {
  return inject(HttpClient).get<Todo>(`https://jsonplaceholder.typicode.com/todos/${route.params['id']}`);
};
