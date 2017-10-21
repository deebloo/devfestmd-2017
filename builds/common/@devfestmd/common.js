import { Component, Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var CoreService = (function () {
    function CoreService() {
    }
    /**
     * @return {?}
     */
    CoreService.prototype.getUsers = function () {
        return ['Danny', 'Cody', 'Beth'];
    };
    return CoreService;
}());
CoreService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
CoreService.ctorParameters = function () { return []; };
var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                exports: [],
                declarations: [],
                providers: [CoreService],
            },] },
];
/**
 * @nocollapse
 */
CoreModule.ctorParameters = function () { return []; };

class UsersComponent {
    /**
     * @param {?} cs
     */
    constructor(cs) {
        this.cs = cs;
        this.users = this.cs.getUsers();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
UsersComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-users',
                template: `
    <ul>
      <li *ngFor="let user of users">{{user}}</li>
    </ul>
  `
            },] },
];
/**
 * @nocollapse
 */
UsersComponent.ctorParameters = () => [
    { type: CoreService, },
];

class DevfestCommonModule {
}
DevfestCommonModule.decorators = [
    { type: NgModule, args: [{
                imports: [CoreModule, CommonModule],
                exports: [UsersComponent],
                declarations: [UsersComponent],
                providers: [],
            },] },
];
/**
 * @nocollapse
 */
DevfestCommonModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { DevfestCommonModule, UsersComponent as ɵa };
//# sourceMappingURL=common.js.map
