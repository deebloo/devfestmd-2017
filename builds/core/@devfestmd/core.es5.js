import { Injectable, NgModule } from '@angular/core';
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
/**
 * Generated bundle index. Do not edit.
 */
export { CoreModule, CoreService };
//# sourceMappingURL=core.es5.js.map
