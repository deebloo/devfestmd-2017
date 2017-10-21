import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@devfestmd/core';

import { UsersComponent } from './users.component';

@NgModule({
  imports: [CoreModule, CommonModule],
  exports: [UsersComponent],
  declarations: [UsersComponent],
  providers: [],
})
export class DevfestCommonModule { }
