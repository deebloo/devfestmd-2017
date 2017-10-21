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
var UsersComponent = (function () {
    /**
     * @param {?} cs
     */
    function UsersComponent(cs) {
        this.cs = cs;
        this.users = this.cs.getUsers();
    }
    /**
     * @return {?}
     */
    UsersComponent.prototype.ngOnInit = function () { };
    return UsersComponent;
}());
UsersComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-users',
                template: "\n    <ul>\n      <li *ngFor=\"let user of users\">{{user}}</li>\n    </ul>\n  "
            },] },
];
/**
 * @nocollapse
 */
UsersComponent.ctorParameters = function () { return [
    { type: CoreService, },
]; };
var DevfestCommonModule = (function () {
    function DevfestCommonModule() {
    }
    return DevfestCommonModule;
}());
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
DevfestCommonModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { DevfestCommonModule, UsersComponent as ɵa };
//# sourceMappingURL=common.es5.js.map
