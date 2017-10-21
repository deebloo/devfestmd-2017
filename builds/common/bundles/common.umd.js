(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global.common = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

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
    { type: core.Injectable },
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
    { type: core.NgModule, args: [{
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
    { type: core.Component, args: [{
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
    { type: core.NgModule, args: [{
                imports: [CoreModule, common.CommonModule],
                exports: [UsersComponent],
                declarations: [UsersComponent],
                providers: [],
            },] },
];
/**
 * @nocollapse
 */
DevfestCommonModule.ctorParameters = function () { return []; };

exports.DevfestCommonModule = DevfestCommonModule;
exports.ɵa = UsersComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=common.umd.js.map
