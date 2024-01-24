import { CanMatchFn } from '@angular/router';

export const todoGuard: CanMatchFn = (route, segments) => {

  console.log(route, segments[0].path)

  return segments[0].path === '1';
};
