(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global.core = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

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

exports.CoreModule = CoreModule;
exports.CoreService = CoreService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=core.umd.js.map
