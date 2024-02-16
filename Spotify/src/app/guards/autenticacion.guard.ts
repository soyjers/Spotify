import { CanMatchFn } from '@angular/router';

export const autenticacionGuard: CanMatchFn = (route, segments) => {
  return false;

};
