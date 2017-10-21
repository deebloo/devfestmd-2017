import { Injectable, NgModule } from '@angular/core';

class CoreService {
    constructor() { }
    /**
     * @return {?}
     */
    getUsers() {
        return ['Danny', 'Cody', 'Beth'];
    }
}
CoreService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
CoreService.ctorParameters = () => [];

class CoreModule {
}
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
CoreModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { CoreModule, CoreService };
//# sourceMappingURL=core.js.map
