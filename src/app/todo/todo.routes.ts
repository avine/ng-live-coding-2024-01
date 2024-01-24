import { Routes } from '@angular/router';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import TodoComponent from './todo.component';

export const todoRoutes: Routes = [
  {
    path: ':id',
    component: TodoComponent,
    title: 'Todo ID',

    resolve: {
    },

    canActivate: [],
    canMatch: [],

    children: [
      {
        path: 'details',
        component: TodoDetailsComponent,
        title: 'Todo ID details',
      },
    ],
  },
];

export default todoRoutes;
