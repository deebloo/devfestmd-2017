import { Component, OnInit } from '@angular/core';
import { CoreService } from '@devfestmd/core';

@Component({
  selector: 'app-users',
  template: `
    <ul>
      <li *ngFor="let user of users">{{user}}</li>
    </ul>
  `
})
export class UsersComponent implements OnInit {
  users = this.cs.getUsers();

  constructor(private cs: CoreService) { }

  ngOnInit() { }
}
