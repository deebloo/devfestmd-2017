import { OnInit } from '@angular/core';
import { CoreService } from '@devfestmd/core';
export declare class UsersComponent implements OnInit {
    private cs;
    users: string[];
    constructor(cs: CoreService);
    ngOnInit(): void;
}
