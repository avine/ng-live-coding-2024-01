import { Routes } from '@angular/router';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import TodoComponent from './todo.component';
import { todoResolver } from './todo.resolver';
import { NoTodoComponent } from './no-todo/no-todo.component';
import { todoGuard } from './todo.guard';

export const todoRoutes: Routes = [
  {
    path: ':id',
    component: TodoComponent,
    title: 'Todo ID',

    resolve: {
      myTodo: todoResolver
    },

    canActivate: [],
    canMatch: [todoGuard],

    children: [
      {
        path: 'details',
        component: TodoDetailsComponent,
        title: 'Todo ID details',
      },
    ],
  },

  {
    path: ':id',
    component: NoTodoComponent,
  }
];

export default todoRoutes;
