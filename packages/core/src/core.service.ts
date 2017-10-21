import { Injectable } from '@angular/core';

@Injectable()
export class CoreService {
  constructor() { }

  getUsers() {
    return ['Danny', 'Cody', 'Beth'];
  }
}
