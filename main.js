(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/uiigateway/pilar/fesm5/pilar.js":
/*!**********************************************!*\
  !*** ./dist/uiigateway/pilar/fesm5/pilar.js ***!
  \**********************************************/
/*! exports provided: AccordionComponent, AccordionGroupComponent, AccordionService, Alert, ChipsComponent, ConfirmdialogComponent, FileSizePipe, IMAGES_ROOT, IMAGE_PDF_PLACEHOLDER, IMAGE_PLACEHOLDER, ImageService, InfoBoxComponent, InformationComponent, LoadingBarEvent, LoadingBarEventType, LoadingBarService, MODAL, ModalDialogComponent, Paginate, PaginationComponent, PhotoUploadComponent, PilarComponent, PilarModule, PilarService, SwitchComponent, TablePageService, TableSkeletonComponent, TabsetComponent, TabsetDirective, ToastComponent, ToastDirective, ToastService, UiiImageUploadComponent, WizardComponent, WizardStepComponent, fadeIn, fadeOut, isPresent, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionComponent", function() { return AccordionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionGroupComponent", function() { return AccordionGroupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionService", function() { return AccordionService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipsComponent", function() { return ChipsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmdialogComponent", function() { return ConfirmdialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSizePipe", function() { return FileSizePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGES_ROOT", function() { return IMAGES_ROOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGE_PDF_PLACEHOLDER", function() { return IMAGE_PDF_PLACEHOLDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGE_PLACEHOLDER", function() { return IMAGE_PLACEHOLDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoBoxComponent", function() { return InfoBoxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationComponent", function() { return InformationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingBarEvent", function() { return LoadingBarEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingBarEventType", function() { return LoadingBarEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingBarService", function() { return LoadingBarService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODAL", function() { return MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDialogComponent", function() { return ModalDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paginate", function() { return Paginate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoUploadComponent", function() { return PhotoUploadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PilarComponent", function() { return PilarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PilarModule", function() { return PilarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PilarService", function() { return PilarService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchComponent", function() { return SwitchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablePageService", function() { return TablePageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableSkeletonComponent", function() { return TableSkeletonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsetComponent", function() { return TabsetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsetDirective", function() { return TabsetDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastComponent", function() { return ToastComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastDirective", function() { return ToastDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiiImageUploadComponent", function() { return UiiImageUploadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardComponent", function() { return WizardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardStepComponent", function() { return WizardStepComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeIn", function() { return fadeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOut", function() { return fadeOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPresent", function() { return isPresent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return ClientTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return FileUploadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return FormWizardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return FormWizardStepComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return MobileFilterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return ServerTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return TableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return TableActionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return TableFilterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return TableFooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return CollapseDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return TooltipComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return TooltipDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-contextmenu */ "./node_modules/ngx-contextmenu/fesm5/ngx-contextmenu.js");
/* harmony import */ var ngx_lazy_load_images__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-lazy-load-images */ "./node_modules/ngx-lazy-load-images/bundles/ngx-lazy-load-images.umd.min.js");
/* harmony import */ var ngx_lazy_load_images__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_lazy_load_images__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");













/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PilarComponent = /** @class */ (function () {
    function PilarComponent() {
    }
    PilarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'uii-pilar',
                    template: ""
                }] }
    ];
    return PilarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PilarService = /** @class */ (function () {
    function PilarService() {
    }
    PilarService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ PilarService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function PilarService_Factory() { return new PilarService(); }, token: PilarService, providedIn: "root" });
    return PilarService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AccordionService = /** @class */ (function () {
    function AccordionService() {
        /**
         * isOpen subscription
         */
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    AccordionService.prototype.setIsOpen = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.subject.next(value);
    };
    /**
     * @return {?}
     */
    AccordionService.prototype.getIsOpen = /**
     * @return {?}
     */
    function () {
        return this.subject.asObservable();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AccordionService.prototype.setIsAnimated = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._isAnimated = value;
    };
    /**
     * @return {?}
     */
    AccordionService.prototype.getIsAnimated = /**
     * @return {?}
     */
    function () {
        return this._isAnimated;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AccordionService.prototype.setCloseOthers = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._closeOthers = value;
    };
    /**
     * @return {?}
     */
    AccordionService.prototype.getCloseOthers = /**
     * @return {?}
     */
    function () {
        return this._closeOthers;
    };
    AccordionService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AccordionService.ctorParameters = function () { return []; };
    /** @nocollapse */ AccordionService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function AccordionService_Factory() { return new AccordionService(); }, token: AccordionService, providedIn: "root" });
    return AccordionService;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AccordionComponent = /** @class */ (function () {
    function AccordionComponent(accordionSvc) {
        this.accordionSvc = accordionSvc;
        this.groups = [];
    }
    Object.defineProperty(AccordionComponent.prototype, "isAnimated", {
        /** turn on/off animation */
        set: /**
         * turn on/off animation
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.accordionSvc.setIsAnimated(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionComponent.prototype, "closeOthers", {
        /** if 'true', expanding one item will close others */
        set: /**
         * if 'true', expanding one item will close others
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.accordionSvc.setCloseOthers(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} openGroup
     * @return {?}
     */
    AccordionComponent.prototype.closeOthersPanels = /**
     * @param {?} openGroup
     * @return {?}
     */
    function (openGroup) {
        if (!this.accordionSvc.getCloseOthers()) {
            return;
        }
        this.groups.forEach((/**
         * @param {?} group
         * @return {?}
         */
        function (group) {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        }));
    };
    /**
     * @param {?} group
     * @return {?}
     */
    AccordionComponent.prototype.addGroup = /**
     * @param {?} group
     * @return {?}
     */
    function (group) {
        this.groups.push(group);
    };
    AccordionComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'uii-accordion',
                    template: "<ng-content></ng-content>",
                    providers: [AccordionService]
                }] }
    ];
    /** @nocollapse */
    AccordionComponent.ctorParameters = function () { return [
        { type: AccordionService }
    ]; };
    AccordionComponent.propDecorators = {
        isAnimated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['isAnimated',] }],
        closeOthers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['closeOthers',] }]
    };
    return AccordionComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AccordionGroupComponent = /** @class */ (function () {
    function AccordionGroupComponent(accordionSvc, accordion) {
        this.accordionSvc = accordionSvc;
        /**
         * initialize accordion group condition
         */
        this.isOpen = false;
        /**
         * disable an accordion
         */
        this.isDisabled = false;
        /**
         * an emitter which will trigerred if user open/close a panel
         */
        this.isOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * enable/disable isAnimated for button
         */
        this.isAnimated = false;
        this.currentClass = 'uii-accordion-group-heading panel-default';
        this.accordion = accordion;
    }
    /**
     * @return {?}
     */
    AccordionGroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.accordion.addGroup(this);
        this.initIsAnimated();
    };
    /**
     * @return {?}
     */
    AccordionGroupComponent.prototype.initIsAnimated = /**
     * @return {?}
     */
    function () {
        this.isAnimated = this.accordionSvc.getIsAnimated();
    };
    /**
     * @return {?}
     */
    AccordionGroupComponent.prototype.panelClicked = /**
     * @return {?}
     */
    function () {
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
            this.accordionSvc.setIsOpen(this.isOpen);
            this.accordion.closeOthersPanels(this);
            this.isOpenChange.emit(this.isOpen);
        }
    };
    AccordionGroupComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'uii-accordion-group',
                    template: "\n    <div\n      class=\"uii-accordion-group panel-default\"\n      [ngClass]=\"{\n        'panel-primary': this.panelClass === 'panel-primary',\n        'panel-secondary': this.panelClass === 'panel-secondary',\n        'panel-tertiary': this.panelClass === 'panel-tertiary',\n        'panel-info': this.panelClass === 'panel-info',\n        'panel-warning': this.panelClass === 'panel-warning',\n        'panel-danger': this.panelClass === 'panel-danger'\n      }\">\n      <div (click)=\"panelClicked()\"\n           [class]=\"currentClass\"\n           [ngClass]=\"{\n              'disabled': isDisabled,\n              'panel-primary': this.panelClass === 'panel-primary',\n              'panel-secondary': this.panelClass === 'panel-secondary',\n              'panel-tertiary': this.panelClass === 'panel-tertiary',\n              'panel-info': this.panelClass === 'panel-info',\n              'panel-warning': this.panelClass === 'panel-warning',\n              'panel-danger': this.panelClass === 'panel-danger'\n            }\">\n        <h4 *ngIf=\"heading; else noHeading\">\n          {{ heading }}\n          <span class=\"animate-button\" *ngIf=\"isAnimated; else nonAnimate\">\n            <i class=\"fa fa-chevron-down\"\n               [ngClass]=\"{ 'open': isOpen }\"></i>\n          </span>\n          <ng-template #nonAnimate>\n            <span class=\"non-animate-button\">\n              <i class=\"fa fa-chevron-down\"\n                [ngClass]=\"{ 'open': isOpen }\"></i>\n            </span>\n          </ng-template>\n        </h4>\n        <ng-template #noHeading>\n          <h4>\n            <ng-content select=\"[uii-accordion-heading]\"></ng-content>\n          </h4>\n        </ng-template>\n      </div>\n      <div uiiCollapse [isOpen]=\"isOpen\" [selectedGroup]=\"isOpen\" class=\"uii-accordion-group-content uii-accordion-group-content-none uii-accordion-group-content-hide\">\n        <div>\n          <ng-content></ng-content>\n        </div>\n      </div>\n    </div>\n  ",
                    styles: [".relative{position:relative}.uii-accordion-group{padding:1px;box-shadow:0 6px 15px rgba(36,37,38,.08);margin-bottom:2rem}.uii-accordion-group-heading>h4{font-size:14px;color:#fff;padding:1.5rem;position:relative!important;margin:0}.uii-accordion-group-heading>h4>span.animate-button:first-child{position:absolute;top:30%;right:0;margin-right:2rem}.uii-accordion-group-heading>h4>span.animate-button:first-child>i{color:#fff;transition:.25s ease-in-out}.uii-accordion-group-heading>h4>span.animate-button:first-child>i.open{transform:rotate(180deg)}.uii-accordion-group-heading>h4>span.non-animate-button:first-child{position:absolute;top:30%;right:0;margin-right:2rem}.uii-accordion-group-heading>h4>span.non-animate-button:first-child>i{color:#fff}.uii-accordion-group-heading>h4>span.non-animate-button:first-child>i.open{transform:rotate(180deg)}.uii-accordion-group-heading:hover{cursor:pointer}.uii-accordion-group-heading.disabled{background-color:#bdbdbd!important}.uii-accordion-group-heading.disabled:hover{cursor:default!important}.uii-accordion-group-content{transition:.25s ease-in-out;background-color:#f5f5f5}.uii-accordion-group-content-none{display:none}.uii-accordion-group-content-none>div{padding:15px}.uii-accordion-group-content-hide{max-height:0;overflow:hidden}.uii-accordion-group-content-hide>div{padding:15px}.panel-default{background-color:#bdbdbd}.panel-primary{background-color:#093697!important}.panel-secondary{background-color:#29b6f6!important}.panel-tertiary{background-color:#c0ca33!important}.panel-info{background-color:#01579b!important}.panel-warning{background-color:#f9a825!important}.panel-danger{background-color:#d32f2f!important}"]
                }] }
    ];
    /** @nocollapse */
    AccordionGroupComponent.ctorParameters = function () { return [
        { type: AccordionService },
        { type: AccordionComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [AccordionComponent,] }] }
    ]; };
    AccordionGroupComponent.propDecorators = {
        isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['isOpen',] }],
        heading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['heading',] }],
        isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['isDisabled',] }],
        panelClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['panelClass',] }],
        isOpenChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['isOpenChange',] }],
        panelColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['panelColor',] }]
    };
    return AccordionGroupComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var /**
 * @template T
 */
PilTablePagedData = /** @class */ (function () {
    function PilTablePagedData() {
        this.data = new Array();
        this.page = new PilTablePage();
        this.response = new Array();
    }
    return PilTablePagedData;
}());
if (false) {}
var PilTablePage = /** @class */ (function () {
    function PilTablePage() {
        this.size = 0;
        this.totalElements = 0;
        this.totalPages = 0;
        this.pageNumber = 0;
    }
    return PilTablePage;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TablePageService = /** @class */ (function () {
    function TablePageService() {
        this.page = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"]({});
    }
    /**
     * @param {?} page
     * @return {?}
     */
    TablePageService.prototype.setTablePage = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        this.page.next(page);
    };
    /**
     * @return {?}
     */
    TablePageService.prototype.getTablePage = /**
     * @return {?}
     */
    function () {
        return this.page.asObservable();
    };
    TablePageService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TablePageService.ctorParameters = function () { return []; };
    /** @nocollapse */ TablePageService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function TablePageService_Factory() { return new TablePageService(); }, token: TablePageService, providedIn: "root" });
    return TablePageService;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ClientTableComponent = /** @class */ (function () {
    function ClientTableComponent(_tablePageSvc) {
        this._tablePageSvc = _tablePageSvc;
        this.editClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.commentClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.detailClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.exportClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.importClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inValidateClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.printClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.publishClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.radioSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.reloadClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedRows = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.switchChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.syncClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.validateClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.verifyClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.limitChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inputTextValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inputRadioValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.page = new PilTablePage();
        this._isAllRowsSelected = false;
        this._columns = [];
        this._rows = [];
        this._rowsCollection = [];
        this._rowsTemp = [];
        this._selectedRows = [];
    }
    Object.defineProperty(ClientTableComponent.prototype, "forceLimitOptions", {
        set: /**
         * @param {?} force
         * @return {?}
         */
        function (force) {
            var _this = this;
            this._forceLimitOptions = force;
            setTimeout((/**
             * @return {?}
             */
            function () {
                if (force) {
                    _this._footerInfo = false;
                    _this._limitOptions = false;
                    _this._paginationOptions = false;
                }
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientTableComponent.prototype, "limitOptions", {
        set: /**
         * @param {?} opt
         * @return {?}
         */
        function (opt) {
            this._limitOptions = opt;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientTableComponent.prototype, "footerInfo", {
        set: /**
         * @param {?} opt
         * @return {?}
         */
        function (opt) {
            this._footerInfo = opt;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientTableComponent.prototype, "paginationOptions", {
        set: /**
         * @param {?} opt
         * @return {?}
         */
        function (opt) {
            this._paginationOptions = opt;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientTableComponent.prototype, "columns", {
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            data.forEach((/**
             * @param {?} column
             * @return {?}
             */
            function (column) {
                column.sort = '';
            }));
            this._columns = data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientTableComponent.prototype, "rows", {
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            this._rowsCollection = data;
            this._rowsTemp = data;
            this.page.totalElements = data.length;
            this._isAllRowsSelected = false;
            this._selectedRows = [];
            this._rows = this.getDataOfCurrentPage(data);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ClientTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.page.size = 10;
        this.page.totalElements = this._rowsCollection.length;
        this._rows = this.getDataOfCurrentPage(this._rowsCollection);
        this._tablePageSvc.setTablePage(this.page);
    };
    /**
     * @return {?}
     */
    ClientTableComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        clearInterval(this.sortTimerInterval);
    };
    /**
     * @param {?} collection
     * @return {?}
     */
    ClientTableComponent.prototype.getDataOfCurrentPage = /**
     * @param {?} collection
     * @return {?}
     */
    function (collection) {
        var _this = this;
        /** @type {?} */
        var data = [];
        if (this._forceLimitOptions) {
            data = collection;
        }
        else {
            data = collection.slice((this.getStartPage(this.page) - 1), this.getEndPage(this.page));
        }
        data.forEach((/**
         * @param {?} element
         * @param {?} i
         * @return {?}
         */
        function (element, i) {
            element.hasAuth = _this.setRowElementAuthStatus(element.auth);
            element.number = _this.getStartPage(_this.page) + i;
        }));
        return data;
    };
    /**
     * @param {?} page
     * @return {?}
     */
    ClientTableComponent.prototype.getEndPage = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        /** @type {?} */
        var end = (page.pageNumber * page.size) + page.size;
        end = end > page.totalElements ? page.totalElements : end;
        return end;
    };
    /**
     * @param {?} page
     * @return {?}
     */
    ClientTableComponent.prototype.getStartPage = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        return page.pageNumber * page.size + 1;
    };
    /**
     * @param {?} prop
     * @return {?}
     */
    ClientTableComponent.prototype.mapActions = /**
     * @param {?} prop
     * @return {?}
     */
    function (prop) {
        /** @type {?} */
        var data = this._rows[prop.index];
        switch (prop.type) {
            case 'update':
                this.editClicked.emit(data);
                break;
            case 'delete':
                this.deleteClicked.emit(data);
                break;
            case 'detail':
                this.detailClicked.emit(data);
                break;
            case 'print':
                this.printClicked.emit(data);
                break;
            case 'reload':
                this.reloadClicked.emit(data);
                break;
            case 'verify':
                this.verifyClicked.emit(data);
                break;
            case 'validate':
                this.validateClicked.emit(data);
                break;
            case 'invalidate':
                this.inValidateClicked.emit(data);
                break;
            case 'publish':
                this.publishClicked.emit(data);
                break;
            case 'comment':
                this.commentClicked.emit(data);
                break;
            case 'export':
                this.exportClicked.emit(data);
                break;
            case 'import':
                this.importClicked.emit(data);
                break;
            case 'sync':
                this.syncClicked.emit(data);
                break;
            case 'activate':
                this.switchChanged.emit({ value: prop.$event, data: data });
                break;
        }
    };
    /**
     * @param {?} limit
     * @return {?}
     */
    ClientTableComponent.prototype.onLimitChange = /**
     * @param {?} limit
     * @return {?}
     */
    function (limit) {
        this.page.size = Number(limit);
        this.page.pageNumber = 0;
        this._rows = this.getDataOfCurrentPage(this._rowsCollection);
        this._tablePageSvc.setTablePage(this.page);
    };
    /**
     * @param {?} rowIndex
     * @param {?} prop
     * @return {?}
     */
    ClientTableComponent.prototype.onInputRadioChange = /**
     * @param {?} rowIndex
     * @param {?} prop
     * @return {?}
     */
    function (rowIndex, prop) {
        var _this = this;
        this._columns.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (item.type && item.type === 'input-radio') {
                _this._rows[rowIndex][item.prop] = (item.prop === prop) ? 1 : 0;
            }
        }));
        this.inputRadioValueChange.emit(this._rows[rowIndex]);
    };
    /**
     * @param {?} index
     * @param {?} column
     * @return {?}
     */
    ClientTableComponent.prototype.onInputTextChange = /**
     * @param {?} index
     * @param {?} column
     * @return {?}
     */
    function (index, column) {
        this.inputTextValueChange.emit({
            index: index,
            column: column,
            data: this._rows[index]
        });
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ClientTableComponent.prototype.onPageChange = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this.isAllCheckbox === false) {
            this._isAllRowsSelected = false;
            this._selectedRows = [];
            this.selectedRows.emit(this._selectedRows);
            this.page.pageNumber = $event.page;
            this._rows = this.getDataOfCurrentPage(this._rowsTemp);
            this._tablePageSvc.setTablePage(this.page);
        }
        else {
            this.page.pageNumber = $event.page;
            this._rows = this.getDataOfCurrentPage(this._rowsTemp);
            this._tablePageSvc.setTablePage(this.page);
        }
    };
    /**
     * @param {?} data
     * @return {?}
     */
    ClientTableComponent.prototype.onRadioSelect = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.reloadClicked.emit(data);
    };
    /**
     * @param {?} type
     * @param {?} $event
     * @param {?=} data
     * @return {?}
     */
    ClientTableComponent.prototype.onRowSelect = /**
     * @param {?} type
     * @param {?} $event
     * @param {?=} data
     * @return {?}
     */
    function (type, $event, data) {
        if ($event.target.checked) {
            type === 'single'
                ? this._selectedRows.push(data)
                : this._selectedRows = this.getDataOfCurrentPage(this._rowsTemp);
        }
        else {
            this._selectedRows = type === 'single'
                ? this._selectedRows.filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item.number !== data.number; }))
                : [];
        }
        this.selectedRows.emit(this._selectedRows);
    };
    /**
     * @param {?} type
     * @param {?} $event
     * @param {?=} data
     * @return {?}
     */
    ClientTableComponent.prototype.onRowSelectAll = /**
     * @param {?} type
     * @param {?} $event
     * @param {?=} data
     * @return {?}
     */
    function (type, $event, data) {
        if ($event.target.checked) {
            type === 'single'
                ? this._selectedRows.push(data)
                : this._selectedRows = this._rowsCollection;
        }
        else {
            this._selectedRows = type === 'single'
                ? this._selectedRows.filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item.number !== data.number; }))
                : [];
        }
        this.selectedRows.emit(this._selectedRows);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ClientTableComponent.prototype.onRowSelectMobile = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ($event.target.checked) {
            this._isAllRowsSelected = true;
            this._selectedRows = this.getDataOfCurrentPage(this._rowsTemp);
        }
        else {
            this._isAllRowsSelected = false;
            this._selectedRows = [];
        }
        this.selectedRows.emit(this._selectedRows);
    };
    /**
     * @param {?} keyword
     * @return {?}
     */
    ClientTableComponent.prototype.onSearchChange = /**
     * @param {?} keyword
     * @return {?}
     */
    function (keyword) {
        /** @type {?} */
        var filteredKeyword = keyword.toLowerCase();
        /** @type {?} */
        var columnsFiltered = this._columns;
        /** @type {?} */
        var tempFiltered = [];
        if (!filteredKeyword) {
            tempFiltered = this._rowsCollection;
        }
        else {
            tempFiltered = this._rowsCollection.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                for (var key in columnsFiltered) {
                    if (columnsFiltered.hasOwnProperty(key)) {
                        /** @type {?} */
                        var value = item[columnsFiltered[key].prop];
                        if (value !== undefined && String(value).toLowerCase().includes(filteredKeyword)) {
                            return true;
                        }
                    }
                }
                return false;
            }));
        }
        this._rowsTemp = tempFiltered;
        this.page.pageNumber = 0;
        this.page.totalElements = this._rowsTemp.length;
        this._tablePageSvc.setTablePage(this.page);
        this._rows = this.getDataOfCurrentPage(this._rowsTemp);
    };
    /**
     * @param {?} column
     * @param {?} index
     * @return {?}
     */
    ClientTableComponent.prototype.setColumnSortDirection = /**
     * @param {?} column
     * @param {?} index
     * @return {?}
     */
    function (column, index) {
        clearInterval(this.sortTimerInterval);
        this._columns.forEach((/**
         * @param {?} item
         * @param {?} idx
         * @return {?}
         */
        function (item, idx) {
            if (idx !== index) {
                item.sort = '';
            }
        }));
        column.sort = (column.sort === 'asc') ? 'desc' : 'asc';
        this.sortTimerInterval = setTimeout((/**
         * @return {?}
         */
        function () {
            column.sort = '';
        }), 2000);
    };
    /**
     * @param {?} auth
     * @return {?}
     */
    ClientTableComponent.prototype.setRowElementAuthStatus = /**
     * @param {?} auth
     * @return {?}
     */
    function (auth) {
        if (auth) {
            /** @type {?} */
            var authValues = Object.keys(auth).map((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return auth[key]; }));
            return authValues.includes(true);
        }
        return false;
    };
    /**
     * @param {?} column
     * @param {?} index
     * @return {?}
     */
    ClientTableComponent.prototype.sortTableColumn = /**
     * @param {?} column
     * @param {?} index
     * @return {?}
     */
    function (column, index) {
        this.setColumnSortDirection(column, index);
        this._rowsTemp.sort(this.sortColumnValue(column));
        this.page.pageNumber = 0; // reset page number on sort
        this._rows = this.getDataOfCurrentPage(this._rowsTemp);
        this._tablePageSvc.setTablePage(this.page);
    };
    /**
     * @param {?} column
     * @return {?}
     */
    ClientTableComponent.prototype.sortTableColumnMobile = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        this._rowsTemp.sort(this.sortColumnValue(column));
        this.page.pageNumber = 0;
        this._rows = this.getDataOfCurrentPage(this._rowsTemp);
        this._tablePageSvc.setTablePage(this.page);
        column.sort = '';
    };
    /**
     * @param {?} data
     * @return {?}
     */
    ClientTableComponent.prototype.sortColumnValue = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var sortOrder = 1;
        if (data.prop[0] === '-') {
            sortOrder = -1;
            data.prop = data.prop.substr(1);
        }
        return (/**
         * @param {?} currentValue
         * @param {?} nextValue
         * @return {?}
         */
        function (currentValue, nextValue) {
            /** @type {?} */
            var result;
            if (data.sort === 'asc') {
                result = (currentValue[data.prop] < nextValue[data.prop]) ? -1 : (currentValue[data.prop] > nextValue[data.prop]) ? 1 : 0;
            }
            else {
                result = (currentValue[data.prop] > nextValue[data.prop]) ? -1 : (currentValue[data.prop] < nextValue[data.prop]) ? 1 : 0;
            }
            return result * sortOrder;
        });
    };
    ClientTableComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'uii-client-table',
                    template: "<uii-table-filter\n  *ngIf=\"_limitOptions || searchOptions\"\n  [limitOptions]=\"_limitOptions\"\n  [searchOptions]=\"searchOptions\"\n  (limitChanged)=\"onLimitChange($event)\"\n  (searchChanged)=\"onSearchChange($event)\">\n</uii-table-filter>\n<div class=\"gateway-table\">\n  <div class=\"gateway-table-header\">\n    <div class=\"header-cell cell-radio-checkbox\" *ngIf=\"checkboxColumn\">\n      <div class=\"gateway-rcb\" *ngIf=\"isAllCheckbox === true\">\n        <input\n          type=\"checkbox\"\n          id=\"aba\"\n          class=\"gateway-rcb-select\"\n          [checked]=\"_isAllRowsSelected\"\n          (change)=\"_isAllRowsSelected = !_isAllRowsSelected; onRowSelectAll('multiple', $event)\"/>\n        <label for=\"aba\" class=\"gateway-rcb-label\"></label>\n      </div>\n      <div class=\"gateway-rcb\" *ngIf=\"isAllCheckbox === false\">\n        <input\n          type=\"checkbox\"\n          id=\"aba\"\n          class=\"gateway-rcb-select\"\n          [checked]=\"_isAllRowsSelected\"\n          (change)=\"_isAllRowsSelected = !_isAllRowsSelected; onRowSelect('multiple', $event)\"/>\n        <label for=\"aba\" class=\"gateway-rcb-label\"></label>\n      </div>\n    </div>\n    <div class=\"header-cell cell-radio-checkbox\" *ngIf=\"radioColumn\"></div>\n    <div\n      *ngFor=\"let column of _columns; let idx = index;\"\n      class=\"header-cell\"\n      [class.cell-number]=\"column.prop === 'number'\">\n      <span\n        *ngIf=\"column.prop === 'number'; else notNumber\"\n        class=\"cell\">{{ column.name }}</span>\n      <ng-template #notNumber>\n        <span\n          *ngIf=\"!column.hasOwnProperty('header-type')\"\n          class=\"cell order-able\"\n          (click)=\"sortTableColumn(column, idx)\"\n          [ngClass]=\"(column.sort === 'asc') ? 'icon-up' : column.sort === 'desc' ? 'icon-down' : ''\"\n        >{{ column.name }}</span>\n        <span\n          *ngIf=\"column.hasOwnProperty('header-type') && column['header-type'] === 'html'\"\n          class=\"cell order-able\"\n          (click)=\"sortTableColumn(column, idx)\"\n          [ngClass]=\"(column.sort === 'asc') ? 'icon-up' : column.sort === 'desc' ? 'icon-down' : ''\"\n          [innerHTML]=\"column.name\"></span>\n      </ng-template>\n    </div>\n    <div *ngIf=\"actionColumn\" class=\"header-cell cell-action\">\n      <span>{{ actionTitle }}</span>\n    </div>\n  </div>\n  <uii-mobile-filter\n    [checkboxColumn]=\"checkboxColumn\"\n    [columns]=\"_columns\"\n    [isAllRowsSelected]=\"_isAllRowsSelected\"\n    [limitOptions]=\"_limitOptions\"\n    [searchOptions]=\"searchOptions\"\n    (limitChanged)=\"onLimitChange($event)\"\n    (searchChanged)=\"onSearchChange($event)\"\n    (allRowsOnMobileSelected)=\"onRowSelectMobile($event)\"\n    (columnSorted)=\"sortTableColumnMobile($event)\">\n  </uii-mobile-filter>\n  <div *ngFor=\"let item of _rows; let i = index\" class=\"row-container\">\n    <div class=\"cell-radio-checkbox-mobile\" *ngIf=\"checkboxColumn\">\n      <div class=\"gateway-rcb\">\n        <input\n          type=\"checkbox\"\n          [checked]=\"_isAllRowsSelected\"\n          (change)=\"onRowSelect('single', $event, item)\"\n          class=\"gateway-rcb-select\"/>\n        <label class=\"gateway-rcb-label\"></label>\n      </div>\n    </div>\n    <div class=\"cell-radio-checkbox-mobile\" *ngIf=\"radioColumn\">\n      <div class=\"gateway-rcb\">\n        <input\n          type=\"radio\"\n          name=\"mtable-radio-item\"\n          [attr.id]=\"'mitem-'+ i\"\n          [checked]=\"item.flag_aktif === '1'\"\n          (change)=\"onRadioSelect(item)\"\n          class=\"gateway-rcb-select\"/>\n        <label class=\"gateway-rcb-label radio-label\"></label>\n      </div>\n    </div>\n    <div class=\"gateway-table-data\">\n      <div class=\"data-cell cell-radio-checkbox\" *ngIf=\"checkboxColumn\">\n        <div class=\"gateway-rcb\">\n          <input\n            type=\"checkbox\"\n            [checked]=\"_isAllRowsSelected\"\n            (change)=\"onRowSelect('single', $event, item)\"\n            class=\"gateway-rcb-select\"/>\n          <label class=\"gateway-rcb-label\"></label>\n        </div>\n      </div>\n      <div class=\"data-cell cell-radio-checkbox\" *ngIf=\"radioColumn\">\n        <div class=\"gateway-rcb\">\n          <input\n            type=\"radio\"\n            name=\"table-radio-item\"\n            [attr.id]=\"'item-'+ i\"\n            [checked]=\"item.flag_aktif === '1'\"\n            (change)=\"onRadioSelect(item)\"\n            class=\"gateway-rcb-select\"/>\n          <label class=\"gateway-rcb-label radio-label\"></label>\n        </div>\n      </div>\n      <ng-container *ngFor=\"let column of _columns; let colIdx = index\">\n        <div\n          class=\"data-cell\"\n          [ngClass]=\"(actionColumn && item.hasAuth) ? 'inaction' : 'outaction'\"\n          [class.hide-in-mobile]=\"column.hasOwnProperty('hide_in_mobile') &&\n            column.hide_in_mobile\">\n          <div class=\"mobile-view-header\">\n            <span *ngIf=\"!column.hasOwnProperty('header-type')\">{{ column.name }}</span>\n            <span\n              *ngIf=\"column.hasOwnProperty('header-type') &&\n                column['header-type'] === 'html'\"\n              [innerHTML]=\"column.name\"></span>\n          </div>\n          <div class=\"table-small-content\">\n            <ng-container *ngIf=\"column.hasOwnProperty('type')\">\n              <span\n                *ngIf=\"column.type === 'label'\"\n                class=\"cell-label\"\n                [ngClass]=\"item.class\"\n              >{{ item[column.prop.toString()] }}</span>\n              <span\n                *ngIf=\"column.type === 'html'\"\n                class=\"cell-html\"\n                [innerHTML]=\"item[column.prop.toString()]\"></span>\n              <span\n                *ngIf=\"column.type === 'date' && !column.format\"\n              >{{ item[column.prop.toString()] | date: 'dd MMMM y' }}</span>\n              <span *ngIf=\"column.type === 'input-text'\">\n                <input\n                  [type]=\"column.inputType\"\n                  [maxlength]=\"column.inputMaxLength\"\n                  class=\"table-input-text\"\n                  [class.uppercase]=\"column.textUppercase\"\n                  [class.lowercase]=\"column.textLowercase\"\n                  [(ngModel)]=\"item[column.prop.toString()]\"\n                  (change)=\"onInputTextChange(i, column.name)\">\n              </span>\n              <span *ngIf=\"column.type === 'input-radio'\">\n                <div class=\"gateway-rcb\">\n                  <input\n                    type=\"radio\"\n                    [attr.name]=\"'radio-' + i\"\n                    [attr.id]=\"'radio-' + i + '-' + colIdx\"\n                    [checked]=\"item[column.prop] === 1\"\n                    (change)=\"onInputRadioChange(i, column.prop)\"\n                    class=\"gateway-rcb-select\"/>\n                  <label class=\"gateway-rcb-label radio-label\"></label>\n                </div>\n              </span>\n            </ng-container>\n            <ng-container *ngIf=\"!column.hasOwnProperty('type')\">\n              <span class=\"cell\">{{ item[column.prop.toString()] }}</span>\n            </ng-container>\n          </div>\n        </div>\n      </ng-container>\n      <div\n        class=\"data-cell data-cell-action\"\n        [ngClass]=\"(actionColumn && item.hasAuth) ? 'inaction' : 'outaction'\"\n        *ngIf=\"actionColumn\">\n        <div class=\"mobile-view-header\"><span>{{ actionTitle }}</span></div>\n        <div class=\"table-small-content\">\n          <span>\n            <uii-table-action\n              [index]=\"i\"\n              [item]=\"item\"\n              [auth]=\"item.auth\"\n              [actionInValidation]=\"actionInValidation\"\n              (emitAction)=\"mapActions($event)\">\n            </uii-table-action>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div\n  class=\"gateway-empty-data\"\n  *ngIf=\"_rows.length === 0\">\n  <span>Tidak ada data yang ditampilkan</span>\n</div>\n<uii-table-footer\n  [footerInfo]=\"_footerInfo\"\n  [paginationOptions]=\"_paginationOptions\"\n  [totalElements]=\"page.totalElements\"\n  [startPage]=\"getStartPage(page)\"\n  [endPage]=\"getEndPage(page)\"\n  (pageChanged)=\"onPageChange($event)\">\n</uii-table-footer>\n"
                }] }
    ];
    /** @nocollapse */
    ClientTableComponent.ctorParameters = function () { return [
        { type: TablePageService }
    ]; };
    ClientTableComponent.propDecorators = {
        actionColumn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        actionTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        actionInValidation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isAllCheckbox: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        checkboxColumn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        radioColumn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        searchOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        forceLimitOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        limitOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        footerInfo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        paginationOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        columns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        editClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        commentClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        deleteClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        detailClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        exportClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        importClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        inValidateClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        pageChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        printClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        publishClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        radioSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        reloadClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        selectedRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        switchChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        syncClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        validateClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        verifyClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        limitChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        inputTextValueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        inputRadioValueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return ClientTableComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ConfirmdialogComponent = /** @class */ (function () {
    function ConfirmdialogComponent(_activeModal) {
        this._activeModal = _activeModal;
        this.active = false;
    }
    /**
     * @return {?}
     */
    ConfirmdialogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
    };
    /**
     * @return {?}
     */
    ConfirmdialogComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.onCancel();
    };
    /**
     * @param {?} config
     * @return {?}
     */
    ConfirmdialogComponent.prototype.showConfirmationModal = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.title = config.title ? config.title : '';
        this.message = config.message ? config.message : '';
        this.confirmBtnlabel = config.confirmBtnlabel ? config.confirmBtnlabel : '';
        this.cancelBtnLabel = config.cancelBtnLabel ? config.cancelBtnLabel : '';
        this.active = true;
    };
    /**
     * @return {?}
     */
    ConfirmdialogComponent.prototype.onConfirm = /**
     * @return {?}
     */
    function () {
        this.active = false;
        this.onClose.next(true);
        this._activeModal.hide();
    };
    /**
     * @return {?}
     */
    ConfirmdialogComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.active = false;
        this.onClose.next(false);
        this._activeModal.hide();
    };
    /**
     * @return {?}
     */
    ConfirmdialogComponent.prototype.hideConfirmationModal = /**
     * @return {?}
     */
    function () {
        this.active = false;
        this.onClose.next(null);
        this._activeModal.hide();
    };
    ConfirmdialogComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'uii-confirmdialog',
                    template: "<div class=\"modal-header\">\n</div>\n<div class=\"modal-body\">\n    <div class=\"modal-icon\">\n        <span class=\"fa fa-info icon-modal-info\" aria-hidden=\"true\"></span>\n        <span class=\"fa fa-check icon-modal-success\" aria-hidden=\"true\"></span>\n        <span class=\"material-icons icon-modal-warning\">priority_high</span>\n        <span class=\"fa fa-times icon-modal-danger\" aria-hidden=\"true\"></span>\n    </div>\n    <h3 class=\"modal-title\">{{ title || 'Konfirmasi' }}</h3>\n    <div class=\"modal-message\">\n        <p>{{ message }}</p>\n    </div>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"onCancel()\">{{ cancelBtnLabel || 'Tidak, batalkan' }}</button>\n    <button type=\"button\" class=\"btn btn-confirm\" (click)=\"onConfirm()\">{{ confirmBtnlabel || 'Ya, lanjutkan' }}</button>\n</div>"
                }] }
    ];
    /** @nocollapse */
    ConfirmdialogComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["BsModalRef"] }
    ]; };
    return ConfirmdialogComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileUploadComponent = /** @class */ (function () {
    function FileUploadComponent() {
        this.multiple = false;
        this.fileType = '.csv, .xlsx, application/pdf';
        this.maxFileSize = 1;
        this.maxFileType = 'MB';
        this.inputLabel = 'Upload';
        this.showPreview = true;
        this.showFileSize = true;
        this.filesSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.files = [];
        this.sizes = [];
        this.fileSizeOver = false;
        this._previewPosition = 'bottom';
    }
    Object.defineProperty(FileUploadComponent.prototype, "previewPosition", {
        set: /**
         * @param {?} position
         * @return {?}
         */
        function (position) {
            // for single upload only
            this._previewPosition = (this.multiple) ? 'bottom' : position;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileUploadComponent.prototype, "fileList", {
        set: /**
         * @param {?} files
         * @return {?}
         */
        function (files) {
            if (files) {
                this.onFileChange(files);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FileUploadComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.convertMaxFileSize();
    };
    /**
     * @private
     * @param {?} bytes
     * @return {?}
     */
    FileUploadComponent.prototype.countFileSize = /**
     * @private
     * @param {?} bytes
     * @return {?}
     */
    function (bytes) {
        if (bytes < 1024) {
            return bytes + 'B';
        }
        else if (bytes < 1048576) {
            return (bytes / 1024).toFixed(3) + ' KB';
        }
        else if (bytes < 1073741824) {
            return (bytes / 1048576).toFixed(3) + ' MB';
        }
        else {
            return (bytes / 1073741824).toFixed(3) + ' GB';
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    FileUploadComponent.prototype.onFileChange = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.fileSizeOver = false;
        /** @type {?} */
        var files = $event.target.files;
        if (this.multiple) {
            this.attacheMultipleFiles(files);
        }
        else {
            this.attachSingleFile(files);
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    FileUploadComponent.prototype.onFileItemRemove = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var _this = this;
        this.files.splice(index, 1);
        this.sizes.splice(index, 1);
        if (this.files.length > 0) {
            this.fileSizeOver = false;
            this.files.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                if (item.size > _this._maxFileSize) {
                    _this.fileSizeOver = true;
                }
            }));
            if (this.fileSizeOver) {
                this.filesSelected.emit(null);
                this.fileTag.nativeElement.value = '';
                return;
            }
            this.filesSelected.emit(this.files);
        }
        else {
            this.filesSelected.emit(null);
        }
        this.fileTag.nativeElement.value = '';
    };
    /**
     * @private
     * @param {?} files
     * @return {?}
     */
    FileUploadComponent.prototype.attacheMultipleFiles = /**
     * @private
     * @param {?} files
     * @return {?}
     */
    function (files) {
        var _this = this;
        Array.from(files).forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (item.size > _this._maxFileSize) {
                _this.fileSizeOver = true;
            }
            if (_this.isFileExist(item.name) < 0) {
                _this.files.push(item);
                _this.sizes.push(_this.countFileSize(item.size));
            }
        }));
        this.fileTag.nativeElement.value = '';
        if (this.fileSizeOver) {
            this.filesSelected.emit(null);
            return;
        }
        this.filesSelected.emit(this.files);
    };
    /**
     * @private
     * @param {?} files
     * @return {?}
     */
    FileUploadComponent.prototype.attachSingleFile = /**
     * @private
     * @param {?} files
     * @return {?}
     */
    function (files) {
        this.files[0] = files[0];
        this.sizes[0] = this.countFileSize(files[0].size);
        if (files[0].size > this._maxFileSize) {
            this.fileSizeOver = true;
            this.filesSelected.emit(null);
            return;
        }
        this.filesSelected.emit(this.files);
    };
    /**
     * @return {?}
     */
    FileUploadComponent.prototype.convertMaxFileSize = /**
     * @return {?}
     */
    function () {
        switch (this.maxFileType.toUpperCase()) {
            case 'KB':
                this._maxFileSize = this.maxFileSize * 1024;
                break;
            case 'MB':
                this._maxFileSize = this.maxFileSize * 1024 * 1024;
                break;
            case 'GB':
                this._maxFileSize = this.maxFileSize * 1024 * 1024 * 1024;
                break;
            case 'B':
                this._maxFileSize = this.maxFileSize;
                break;
            default:
                this._maxFileSize = this.maxFileSize;
                break;
        }
    };
    /**
     * @private
     * @param {?} fileName
     * @return {?}
     */
    FileUploadComponent.prototype.isFileExist = /**
     * @private
     * @param {?} fileName
     * @return {?}
     */
    function (fileName) {
        return this.files.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.name === fileName; }));
    };
    FileUploadComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'uii-file-upload',
                    template: "<div class=\"control-note max-file-upload\">\n  <p>Maksimal {{ maxFileSize }}{{maxFileType.toUpperCase()}}</p>\n</div>\n<div class=\"form-upload-file\" [class.flex-display]=\"_previewPosition !== 'bottom'\">\n  <button class=\"btn btn-primary form-control-file-upload\">\n    {{inputLabel}} <input #file type=\"file\" [accept]=\"fileType\" [multiple]=\"multiple\" (change)=\"onFileChange($event)\">\n  </button>\n  <div class=\"file-list\" *ngIf=\"files.length > 0 && showPreview\">\n    <p *ngFor=\"let file of files; let i = index\" \n      class=\"control-label file-name\" \n      [class.not-allowed]=\"file.size > _maxFileSize\" \n      [class.left-marign]=\"_previewPosition !== 'bottom'\">\n      <span class=\"fa fa-times table-cell\" aria-hidden=\"true\" (click)=\"onFileItemRemove(i)\"></span>\n      <span class=\"name table-cell\">{{file.name}}</span>\n      <span *ngIf=\"showFileSize\" class=\"table-cell\">{{sizes[i]}}</span>\n    </p>\n  </div>\n</div>\n<small *ngIf=\"fileSizeOver && files.length > 0\" class=\"text-danger\">\n  {{ 'Ukuran berkas terlalu besar' }}\n</small>",
                    styles: [".max-file-upload p{font-size:11px!important;margin:2px 0}.form-upload-file.flex-display{display:flex;align-items:flex-end}.form-upload-file .file-name{align-items:center;display:table-row-group;margin:2px 0;font-weight:400;font-size:13px}.form-upload-file .file-name .fa{font-size:18px;cursor:pointer;margin-right:5px}.form-upload-file .file-name.not-allowed{color:#a94442}.form-upload-file .file-name.left-marign{display:unset;margin-left:10px}.form-upload-file .file-name .table-cell{display:table-cell;padding:2px 3px}.form-control-file-upload{font-size:14px;position:relative}.form-control-file-upload input[type=file]{position:absolute;top:0;right:0;width:100%;height:100%;opacity:0;outline:0;cursor:inherit;display:block}"]
                }] }
    ];
    FileUploadComponent.propDecorators = {
        fileTag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['file',] }],
        multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fileType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxFileSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxFileType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        inputLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showPreview: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showFileSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        previewPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fileList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        filesSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return FileUploadComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormWizardStepComponent = /** @class */ (function () {
    function FormWizardStepComponent() {
        this.hidden = false;
        this.isValid = true;
        this.showNext = true;
        this.showPrev = true;
        // tslint:disable-next-line:no-output-on-prefix
        this.onNext = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // tslint:disable-next-line:no-output-on-prefix
        this.onPrev = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // tslint:disable-next-line:no-output-on-prefix
        this.onComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // tslint:disable-next-line:no-output-on-prefix
        this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._isActive = false;
        this.isDisabled = true;
    }
    /**
     * @return {?}
     */
    FormWizardStepComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    Object.defineProperty(FormWizardStepComponent.prototype, "isActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isActive;
        },
        set: /**
         * @param {?} isActive
         * @return {?}
         */
        function (isActive) {
            this._isActive = isActive;
            this.isDisabled = false;
        },
        enumerable: true,
        configurable: true
    });
    FormWizardStepComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'uii-form-wizard-step',
                    template: "\n    <div [hidden]=\"!isActive\">\n      <ng-content></ng-content>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    FormWizardStepComponent.ctorParameters = function () { return []; };
    FormWizardStepComponent.propDecorators = {
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        subtitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isValid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showNext: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showPrev: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onNext: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onPrev: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onComplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onCancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        isActive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['isActive',] }]
    };
    return FormWizardStepComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormWizardComponent = /** @class */ (function () {
    function FormWizardComponent() {
        this._steps = [];
        this.moreSteps = [];
        this._isCompleted = false;
        this.activeStepCurrent = 1;
        this.activeStepStart = 1;
        this.activeStepEnd = 1;
        this.clickTabEnable = true;
        this.onSubmitForm = false;
        // tslint:disable-next-line:no-output-on-prefix
        this.onStepChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} width
     * @return {?}
     */
    FormWizardComponent.prototype.onResize = /**
     * @param {?} width
     * @return {?}
     */
    function (width) {
        if (width < 490) {
            this.maxHorizontalStep = 4;
        }
        else {
            this.maxHorizontalStep = 7;
        }
        this.pushToSteps();
    };
    /**
     * @return {?}
     */
    FormWizardComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.onResize(window.innerWidth);
        if (!(this.activeStepStart === 1 && this.activeStepEnd === 1 && this.activeStepCurrent === 1)) {
            /** @type {?} */
            var indexCurrent = this.activeStepCurrent - 1;
            /** @type {?} */
            var indexStart = this.activeStepStart - 1;
            /** @type {?} */
            var indexEnd = this.activeStepEnd - 1;
            for (var i = indexStart; i <= indexEnd; i++) {
                this.steps[i].isDisabled = false;
                this.steps[i].isValid = true;
            }
            this.steps[indexCurrent].isActive = true;
        }
        else if (this.steps.length) {
            if (!this.steps.find((/**
             * @param {?} step
             * @return {?}
             */
            function (step) { return step.isActive === true; }))) {
                this.steps[0].isActive = true;
            }
        }
    };
    /**
     * @return {?}
     */
    FormWizardComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        if (this.steps.length) {
            this.pushToSteps();
        }
    };
    Object.defineProperty(FormWizardComponent.prototype, "steps", {
        get: /**
         * @return {?}
         */
        function () {
            return this._steps.filter((/**
             * @param {?} step
             * @return {?}
             */
            function (step) { return !step.hidden; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormWizardComponent.prototype, "isCompleted", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isCompleted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormWizardComponent.prototype, "activeStep", {
        get: /**
         * @return {?}
         */
        function () {
            return this.steps.find((/**
             * @param {?} step
             * @return {?}
             */
            function (step) { return step.isActive; }));
        },
        set: /**
         * @param {?} step
         * @return {?}
         */
        function (step) {
            if (step !== this.activeStep && !step.isDisabled) {
                this.activeStep.isActive = false;
                step.isActive = true;
                step.activeStepIndex = this.activeStepIndex;
                this.onStepChanged.emit(step);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormWizardComponent.prototype, "activeStepIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this.steps.indexOf(this.activeStep);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormWizardComponent.prototype, "hasNextStep", {
        get: /**
         * @return {?}
         */
        function () {
            return this.activeStepIndex < this.steps.length - 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormWizardComponent.prototype, "hasPrevStep", {
        get: /**
         * @return {?}
         */
        function () {
            return this.activeStepIndex > 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FormWizardComponent.prototype.pushToSteps = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._steps = [];
        this.moreSteps = [];
        this.wizardSteps.forEach((/**
         * @param {?} step
         * @return {?}
         */
        function (step) { return _this._steps.push(step); }));
        this.wizardSteps.forEach((/**
         * @param {?} step
         * @param {?} index
         * @return {?}
         */
        function (step, index) {
            if (_this.steps.length > _this.maxHorizontalStep && index > (_this.maxHorizontalStep - 3) && index !== _this.steps.length - 1) {
                _this.moreSteps.push(step);
            }
        }));
    };
    /**
     * @param {?} step
     * @return {?}
     */
    FormWizardComponent.prototype.goToStep = /**
     * @param {?} step
     * @return {?}
     */
    function (step) {
        if (!this.isCompleted) {
            this.activeStep = step;
        }
        if (this.moreSteps) {
            /** @type {?} */
            var findActiveMoreStep = this.moreSteps.find((/**
             * @param {?} steps
             * @return {?}
             */
            function (steps) { return steps._isActive === true; }));
            if (findActiveMoreStep) {
                this.moreStepsActive = true;
            }
            else {
                this.moreStepsActive = false;
            }
        }
    };
    /**
     * @param {?} stepIndex
     * @return {?}
     */
    FormWizardComponent.prototype.revertToStep = /**
     * @param {?} stepIndex
     * @return {?}
     */
    function (stepIndex) {
        this._isCompleted = false;
        /** @type {?} */
        var nextStep = this.steps[stepIndex];
        this.goToStep(nextStep);
    };
    /**
     * @return {?}
     */
    FormWizardComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        if (this.hasNextStep) {
            this.activeStep.onNext.emit(this.activeStepIndex);
            /** @type {?} */
            var nextStep = this.steps[this.activeStepIndex + 1];
            nextStep.isDisabled = false;
            this.activeStep = nextStep;
        }
        if (this.moreSteps) {
            /** @type {?} */
            var findActiveMoreStep = this.moreSteps.find((/**
             * @param {?} step
             * @return {?}
             */
            function (step) { return step._isActive === true; }));
            if (findActiveMoreStep) {
                this.moreStepsActive = true;
            }
            else {
                this.moreStepsActive = false;
            }
        }
    };
    /**
     * @return {?}
     */
    FormWizardComponent.prototype.previous = /**
     * @return {?}
     */
    function () {
        if (this.hasPrevStep) {
            this.activeStep.onPrev.emit();
            /** @type {?} */
            var prevStep = this.steps[this.activeStepIndex - 1];
            prevStep.isDisabled = false;
            this.activeStep = prevStep;
        }
        if (this.moreSteps) {
            /** @type {?} */
            var findActiveMoreStep = this.moreSteps.find((/**
             * @param {?} step
             * @return {?}
             */
            function (step) { return step._isActive === true; }));
            if (findActiveMoreStep) {
                this.moreStepsActive = true;
            }
            else {
                this.moreStepsActive = false;
            }
        }
    };
    /**
     * @return {?}
     */
    FormWizardComponent.prototype.complete = /**
     * @return {?}
     */
    function () {
        this.activeStep.onComplete.emit();
        this._isCompleted = true;
    };
    /**
     * @return {?}
     */
    FormWizardComponent.prototype.cancel = /**
     * @return {?}
     */
    function () {
        this.activeStep.onCancel.emit();
    };
    FormWizardComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'uii-wizard',
                    template: "\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <div class=\"wizard-steps wizard-widget wizard-helper-clearfix wizard-steps-readonly\">\n        <ul role=\"tablist\">\n          <li\n            class=\"wizard-steps-item\"\n            *ngFor=\"let step of steps; let i = index\"\n            [ngStyle]=\"{ 'width': steps.length < maxHorizontalStep ? (100 / steps.length + '%') : (100 / maxHorizontalStep + '%') }\"\n            [ngClass]=\"\n            {'wizard-state-highlight wizard-steps-current': step.isActive,\n            'wizard-state-highlight wizard-state-default': !step.isDisabled,\n            'wizard-state-disabled wizard-steps-incomplete': step.isDisabled,\n            'wizard-state-completed': isCompleted}\">\n            <span *ngIf=\"steps.length === maxHorizontalStep; else horizontalDisplay\">\n              <a class=\"wizard-menuitem-link\">\n                <span class=\"wizard-steps-line\"></span>\n                <span class=\"wizard-steps-number\" (click)=\"clickTabEnable ? goToStep(step) : false;\">{{i + 1}}</span>\n                <span class=\"wizard-steps-title\">{{step.title}}</span>\n              </a>\n            </span>\n            <ng-template #horizontalDisplay>\n              <span *ngIf=\"i < (maxHorizontalStep - 2) || i === (steps.length - 1); else stackDisplay\">\n                <a class=\"wizard-menuitem-link\">\n                  <span class=\"wizard-steps-line\"></span>\n                  <span class=\"wizard-steps-number\" (click)=\"clickTabEnable ? goToStep(step) : false;\">{{i + 1}}</span>\n                  <span class=\"wizard-steps-title\">{{step.title}}</span>\n                </a>\n              </span>\n              <ng-template #stackDisplay>\n                <span dropdown>\n                  <span\n                  [ngClass]=\"{ 'wizard-menuitem-more': moreStepsActive }\">\n                  <a *ngIf=\"i === (maxHorizontalStep - 2)\"\n                  id=\"expand-more\" class=\"wizard-menuitem-link\">\n                    <span class=\"wizard-steps-line\"></span>\n                    <span class=\"wizard-steps-number\" dropdownToggle (click)=\"false\" aria-controls=\"dropdown-more\">...</span>\n                    <span class=\"wizard-steps-title\">{{ pagingLabel?.more || 'More' }}</span>\n                  </a>\n                  </span>\n                  <ul id=\"dropdown-more\" *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"expand-more\">\n                    <li *ngFor=\"let moreStep of moreSteps; let j = index\"\n                    role=\"menuitem\" (click)=\"clickTabEnable ? goToStep(moreStep) : false;\"\n                    [ngClass]=\"{ 'dropdown-menu-item-active': moreStep.isActive }\">\n                      <a class=\"dropdown-item\" [ngClass]=\"{ 'dropdown-menu-item-text-active': moreStep.isActive || !moreStep.isDisabled }\">\n                        {{ j + (maxHorizontalStep - 1) }}. {{ moreStep.title }}\n                      </a>\n                    </li>\n                  </ul>\n                </span>\n              </ng-template>\n            </ng-template>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"card-block\">\n      <ng-content></ng-content>\n    </div>\n    <div class=\"card-footer\">\n      <div class=\"button-action-center\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"cancel()\">{{ pagingLabel?.cancel || 'Cancel' }}</button>\n        <button\n          type=\"button\"\n          class=\"btn btn-primary\"\n          (click)=\"previous()\"\n          [hidden]=\"!hasPrevStep || !activeStep.showPrev\">\n            {{ pagingLabel?.previous || 'Previous' }}\n        </button>\n        <button\n          type=\"button\"\n          class=\"btn btn-primary\"\n          (click)=\"next()\"\n          [disabled]=\"!activeStep.isValid\"\n          [hidden]=\"!hasNextStep || !activeStep.showNext\">\n            {{ pagingLabel?.next || 'Next' }}\n        </button>\n        <button\n          type=\"button\"\n          class=\"btn btn-success\"\n          (click)=\"complete()\"\n          [disabled]=\"!activeStep.isValid || onSubmitForm\"\n          [hidden]=\"hasNextStep\">\n            {{ pagingLabel?.done || 'Submit' }}\n        </button>\n      </div>\n    </div>\n  </div>\n  ",
                    styles: [".card{height:100%}.card-header{background-color:#fff;padding:0;font-size:1.25rem}.card-footer{background-color:#fff;border-top:0}.dropdown-menu{min-width:14.28%;left:71.42%}@media (max-width:490px){.dropdown-menu{width:auto;right:0;left:0}}.dropdown-menu li>a{padding:8px 16px;font-size:12.5px}.dropdown-menu .dropdown-menu-item-active .dropdown-menu-item-text-active{font-weight:700;color:#373a3c}.dropdown-menu-item-text-active{background-color:#f1f5ff}.wizard-widget{text-decoration:none;font-size:1em}.wizard-helper-clearfix::after,.wizard-helper-clearfix::before{content:\"\";display:table}.wizard-helper-clearfix::after{clear:both}.wizard-helper-clearfix{zoom:1}.wizard-steps{position:relative}.wizard-steps ul{list-style-type:none;padding:0;margin:0}.wizard-steps .wizard-steps-item{float:left;box-sizing:border-box;cursor:pointer;background-color:transparent;text-align:center}.wizard-steps .wizard-steps-item.wizard-state-disabled{opacity:1}.wizard-steps .wizard-steps-item .wizard-menuitem-link{background-color:transparent;overflow:hidden;text-decoration:none;display:block;padding:1em;position:relative;text-align:center}.wizard-steps .wizard-steps-item .wizard-menuitem-link .wizard-steps-line{content:' ';border:1px solid #c8c8c8;width:100%;top:42.5%;left:0;display:block;position:absolute}.wizard-steps .wizard-steps-item .wizard-menuitem-link .wizard-steps-number{display:inline-block;background-color:#fff;border-radius:50%;padding:.25em .563em;color:#747a7f;position:relative;width:28px;margin-top:0;font-size:1em;top:.875em;margin-bottom:.75em;border:1px solid #ccc}.wizard-steps .wizard-steps-item .wizard-menuitem-link .wizard-steps-title{overflow:auto;display:block;margin-top:.375em;color:#747a7f}.wizard-steps .wizard-steps-item.wizard-state-highlight .wizard-menuitem-link .wizard-steps-line{border:1px solid #093697}.wizard-steps .wizard-steps-item.wizard-state-highlight .wizard-menuitem-link .wizard-steps-number{cursor:pointer;background-color:#093697;color:#fff;border-color:#093697}.wizard-steps .wizard-steps-item:not(.wizard-state-highlight) .wizard-menuitem-link .wizard-steps-number:hover{background-color:#e6e6e6}.wizard-steps .wizard-steps-item.wizard-state-highlight .wizard-menuitem-link .wizard-steps-title{overflow:auto;color:#373a3c}.wizard-steps .wizard-steps-item.wizard-state-highlight .wizard-menuitem-more .wizard-menuitem-link .wizard-steps-number,.wizard-steps .wizard-steps-item.wizard-state-highlight .wizard-menuitem-more .wizard-menuitem-link .wizard-steps-title,.wizard-steps .wizard-steps-item.wizard-state-highlight.wizard-steps-current .wizard-menuitem-link .wizard-steps-number,.wizard-steps .wizard-steps-item.wizard-state-highlight.wizard-steps-current .wizard-menuitem-link .wizard-steps-title{font-weight:700}.wizard-steps .wizard-steps-item:last-child .wizard-menuitem-link{display:block}.wizard-steps.wizard-steps-readonly .wizard-steps-item{cursor:auto}.wizard-steps .wizard-steps-item.wizard-state-disabled .wizard-menuitem-link,.wizard-steps .wizard-steps-item.wizard-state-highlight .wizard-menuitem-link{cursor:default}.wizard-steps .wizard-steps-number{font-size:2em;display:block}.wizard-steps .wizard-steps-title{display:block;white-space:nowrap}@media (max-width:40em){.wizard-steps .wizard-steps-item .wizard-menuitem-link{padding:.5em}.wizard-steps .wizard-steps-item .wizard-steps-title{display:none}}"]
                }] }
    ];
    /** @nocollapse */
    FormWizardComponent.ctorParameters = function () { return []; };
    FormWizardComponent.propDecorators = {
        wizardSteps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [FormWizardStepComponent,] }],
        activeStepCurrent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        activeStepStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        activeStepEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        clickTabEnable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onSubmitForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pagingLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onStepChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:resize', ['$event.target.innerWidth'],] }]
    };
    return FormWizardComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InfoBoxComponent = /** @class */ (function () {
    function InfoBoxComponent() {
        this.title = 'Title';
        this.subtitle = 'Subtitle';
        this.infoIcon = '';
        this.type = 'default';
    }
    /**
     * @return {?}
     */
    InfoBoxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    InfoBoxComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'uii-info-box',
                    template: "<div [class]=\"'ugw-info-box info-box-' + type\" role=\"info-box\">\n  <h5 class=\"title\">{{title}}</h5>\n  <h6 class=\"subtitle\">{{subtitle}}</h6>\n  <i class=\"info-icon\">\n    <span class=\"{{infoIcon}}\"></span>\n  </i>\n  <ng-content></ng-content>\n</div>\n",
                    styles: [".ugw-info-box{position:relative;padding:10px;width:100%;justify-content:space-between;margin:0;list-style:none;color:#fff;min-height:85px}.ugw-info-box h5.title{font-size:larger}.ugw-info-box h6.subtitle{font-weight:300;font-size:small}.ugw-info-box.info-box-default{background-color:#093697}.ugw-info-box.info-box-success{background-color:#00796b}.ugw-info-box.info-box-info{background-color:#4db6ac}.ugw-info-box.info-box-danger{background-color:#ff5252}.ugw-info-box.info-box-warning{background-color:#fbc02d}.ugw-info-box.info-box-primary{background-color:#007bff}.ugw-info-box.info-box-dark{background-color:#343a40}.ugw-info-box.info-box-secondary{background-color:#6c757d}.ugw-info-box.info-box-oc-pink{background-color:#e91e63}.ugw-info-box.info-box-oc-purple{background-color:#9c27b0}.ugw-info-box.info-box-oc-deep-purple{background-color:#673ab7}.ugw-info-box.info-box-oc-cyan{background-color:#00bcd4}.ugw-info-box.info-box-oc-green{background-color:#4caf50}.ugw-info-box.info-box-oc-lime{background-color:#cddc39}.ugw-info-box.info-box-oc-orange{background-color:#ff9800}.ugw-info-box.info-box-oc-deep-orange{background-color:#ff5722}.ugw-info-box.info-box-oc-brown{background-color:#795548}.ugw-info-box.info-box-oc-blue-grey{background-color:#607d8b}.ugw-info-box i.info-icon{transition:.3s linear;position:absolute;top:-10px;right:10px;z-index:0;font-size:65px;color:rgba(0,0,0,.15)}.ugw-info-box:hover{transition:.3s linear}.ugw-info-box:hover i{font-size:70px}"]
                }] }
    ];
    /** @nocollapse */
    InfoBoxComponent.ctorParameters = function () { return []; };
    InfoBoxComponent.propDecorators = {
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        subtitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        infoIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return InfoBoxComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MobileFilterComponent = /** @class */ (function () {
    function MobileFilterComponent() {
        this.isAllRowsSelected = false;
        this.limitChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.allRowsOnMobileSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.columnSorted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.limitOpts = [
            {
                label: '10',
                value: 10
            },
            {
                label: '25',
                value: 25
            },
            {
                label: '50',
                value: 50
            },
            {
                label: '100',
                value: 100
            }
        ];
        this.toogleSearch = false;
        this.toggleLimit = false;
        this.isSortAsc = true;
        this.toggleSort = false;
    }
    /**
     * @return {?}
     */
    MobileFilterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.selectedLimit = this.limitOpts[0].value;
    };
    /**
     * @return {?}
     */
    MobileFilterComponent.prototype.emitColumnSort = /**
     * @return {?}
     */
    function () {
        this.selectedColumn.sort = this.isSortAsc ? 'asc' : 'desc';
        this.columnSorted.emit(this.selectedColumn);
    };
    /**
     * @param {?} column
     * @return {?}
     */
    MobileFilterComponent.prototype.onColumnSelect = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        this.selectedColumn = column;
        this.emitColumnSort();
    };
    /**
     * @param {?} limit
     * @return {?}
     */
    MobileFilterComponent.prototype.onLimitChange = /**
     * @param {?} limit
     * @return {?}
     */
    function (limit) {
        this.selectedLimit = Number(limit);
        this.limitChanged.emit(Number(limit));
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    MobileFilterComponent.prototype.onRowSelect = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.allRowsOnMobileSelected.emit($event);
    };
    /**
     * @param {?} keyword
     * @return {?}
     */
    MobileFilterComponent.prototype.onSearchChange = /**
     * @param {?} keyword
     * @return {?}
     */
    function (keyword) {
        this.searchChanged.emit(keyword);
    };
    /**
     * @return {?}
     */
    MobileFilterComponent.prototype.onSortTypeChange = /**
     * @return {?}
     */
    function () {
        this.isSortAsc = !this.isSortAsc;
        if (this.selectedColumn !== undefined && this.selectedColumn !== null) {
            this.emitColumnSort();
        }
    };
    MobileFilterComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'uii-mobile-filter',
                    template: "<div *ngIf=\"limitOptions || searchOptions || checkboxColumn\" class=\"mobile-filter-container\">\n  <div class=\"limit-check-container\">\n    <ul>\n      <li class=\"mobile-checkbox-container\" *ngIf=\"checkboxColumn\">\n        <div class=\"gateway-rcb\">\n          <input type=\"checkbox\" [checked]=\"isAllRowsSelected\" class=\"gateway-rcb-select\" (change)=\"onRowSelect($event)\" />\n          <label class=\"gateway-rcb-label\"></label>\n          <p>&nbsp;Semua &nbsp;&nbsp;</p>\n        </div>\n      </li>\n      <li *ngIf=\"limitOptions\" class=\"mobile-limit-container\">\n        <div class=\"limiting\">\n          <span class=\"filter-select\" (click)=\"toggleLimit = !toggleLimit; toogleSearch = false; toggleSort = false;\">{{selectedLimit}} ditampilkan</span>\n        </div>\n      </li>\n    </ul>\n  </div>\n  <div *ngIf=\"searchOptions\" class=\"mobile-search-container\">\n    <ul>\n      <li (click)=\"toggleSort = true; toggleLimit = false; toogleSearch = false\">\n        <span class=\"ikon fa fa-sort\"></span>\n        <span>&nbsp;urutkan &nbsp;</span>\n      </li>\n      <li (click)=\"toogleSearch = !toogleSearch; toggleLimit = false; toggleSort = false\">\n        <span class=\"ikon fa\" [ngClass]=\"toogleSearch ? 'fa-times' : 'fa-search'\" ></span>\n      </li>\n    </ul>\n  </div>\n  <div class=\"mobile-limit-overlay\" [ngClass]=\"toggleLimit ? '' : 'hide-limit-select'\">\n    <ol class=\"limit-item\">\n      <li *ngFor=\"let limit of limitOpts\" (click)=\"onLimitChange(limit.value) ;toggleLimit = !toggleLimit\" >{{limit.label}}</li>\n    </ol>\n  </div>\n</div>\n<div class=\"mobile-searching\" [ngClass]=\"toogleSearch ? '' : 'hide-search'\">\n  <input #searchKeyword type=\"text\" placeholder=\"Cari...\" (keyup.enter)=\"onSearchChange(searchKeyword.value)\" />\n  <div class=\"erase-keyword\" (click)=\"onSearchChange(''); searchKeyword.value = ''\" >\n    <p *ngIf=\"searchKeyword.value !== ''\">&times;</p>\n  </div>\n</div>\n<div class=\"mobile-sorting\" [ngClass]=\"toggleSort ? '' : 'hide-sort'\">\n  <div class=\"close-sort-container\" (click)=\"toggleSort = false;\">\n    <span class=\"fa fa-times\" ></span>\n  </div>\n  <div class=\"sort-type-container\">\n    <p><b>Jenis urutan</b></p>\n    <input type=\"checkbox\" id=\"sort-toggle\" (change)=\"onSortTypeChange()\" />\n    <label for=\"sort-toggle\">\n      <span class=\"fa\" [ngClass]=\"isSortAsc ? 'fa-sort-amount-desc' : 'fa-sort-amount-asc'\"></span>&nbsp;\n      Urut {{isSortAsc ? 'naik' : 'turun'}}\n    </label>\n  </div>\n  <div class=\"column-container\">\n    <p><b>Pilih kolom</b></p>\n    <ul class=\"column-list\">\n      <li *ngFor=\"let item of columns; let i = index\">\n        <input type=\"radio\" [attr.id]=\"'item-' + i\" name=\"radio-culoumn-filter\" (change)=\"onColumnSelect(item)\" />\n        <label class=\"radio-col\" [attr.for]=\"'item-' + i\" for>{{item.name}}</label>\n      </li>\n    </ul>\n  </div>\n</div>",
                    styles: [".gateway-rcb{height:15px!important;position:relative;display:flex;align-items:center}.gateway-rcb .gateway-rcb-select{position:absolute;top:0;opacity:0}.gateway-rcb .gateway-rcb-select:checked+.gateway-rcb-label:before{content:\"\\f00c\";display:flex;justify-content:space-around;background:#4db6ac;border-color:#4db6ac}.gateway-rcb .gateway-rcb-label::before{content:\"\";margin:5px 0 0;padding:0;display:block;width:15px;height:15px;color:#fff;font-size:10px!important;font-family:FontAwesome;text-rendering:auto;border:1px solid #bdbdbd}.gateway-rcb .radio-label::before{border-radius:50%}.gateway-rcb p{font-size:13px;padding:0;margin:0}.mobile-filter-container,.mobile-searching,.mobile-sorting{display:none}@media screen and (max-width:770px){.mobile-filter-container{position:relative;display:flex;justify-content:space-between;align-items:center;margin-bottom:15px;border-bottom:1px solid #ccc}.mobile-filter-container ul{list-style:none;padding:0;margin:0;display:flex;align-items:center}.mobile-filter-container ul li{height:35px;display:flex;align-items:center;justify-content:space-around;cursor:pointer}.mobile-filter-container .mobile-limit-container .filter-select{cursor:pointer}.mobile-filter-container .mobile-limit-container .filter-select::after{content:\"\\f078\";margin-left:5px;font-family:FontAwesome;text-rendering:auto;font-size:10px}.mobile-filter-container .mobile-search-container{width:auto}.mobile-filter-container .mobile-search-container ul .ikon{font-size:18px}.mobile-filter-container .mobile-search-container ul li:last-child{width:35px}.mobile-filter-container .mobile-search-overlay{position:absolute;left:0;top:35px;z-index:100;display:flex;align-items:center;width:100%}.mobile-filter-container .mobile-search-overlay input{height:35px;padding-left:5px;width:100%;outline:0;border-width:1px 1px 0;border-style:solid;border-color:#ccc}.mobile-filter-container .mobile-search-overlay button{width:35px;height:35px;font-size:18px;background:#093697;color:#fff;outline:0;border:none}.mobile-filter-container .mobile-search-overlay.hide-search{display:none!important}.mobile-filter-container .mobile-limit-overlay{position:absolute;display:block;left:0;top:35px;z-index:100;background:#fff;width:100%;border:1px solid #ccc}.mobile-filter-container .mobile-limit-overlay ol.limit-item{list-style:none;padding:0;margin:0}.mobile-filter-container .mobile-limit-overlay li{cursor:pointer;line-height:35px;padding-left:5px}.mobile-filter-container .mobile-limit-overlay li:hover{color:#fff;background:#093697}.mobile-filter-container .mobile-limit-overlay.hide-limit-select{display:none!important}.mobile-searching{position:relative;display:flex;align-items:center;width:100%;margin:-12px 0 15px}.mobile-searching input{height:35px;padding-left:5px;width:100%;outline:0;border-width:0 0 1px;border-style:solid;border-color:#ccc}.mobile-searching .erase-keyword{position:absolute;z-index:20;top:0;right:0;font-size:30px;cursor:pointer;color:#bdbdbd;background:#fff;height:33px;width:21px}.mobile-searching .erase-keyword p{margin:-4px 0 0;padding:0}.mobile-searching.hide-search{display:none!important}.mobile-sorting{padding:.75rem .75rem 0;width:100%;border:1px solid #bdbdbd;margin:-16px 0 15px;position:relative;display:block}.mobile-sorting div.close-sort-container{position:absolute;z-index:10;top:4px;right:0;font-size:14px;height:20px;width:20px;color:#bdbdbd}.mobile-sorting .sort-type-container{position:relative}.mobile-sorting .sort-type-container label{cursor:pointer;font-weight:400;border:2px solid #bdbdbd;padding:4px 0;width:90px;text-align:center}.mobile-sorting .sort-type-container input{position:absolute;opacity:0}.mobile-sorting .column-container{margin-top:5px}.mobile-sorting .column-container ul.column-list{list-style:none;padding:0}.mobile-sorting .column-container ul.column-list li{display:inline-block;position:relative}.mobile-sorting .column-container ul.column-list li .radio-col{cursor:pointer;border:2px solid #bdbdbd;padding:4px 7px;border-radius:10px;margin:3px 5px 3px 0;font-weight:400}.mobile-sorting .column-container ul.column-list li input{position:absolute;opacity:0;width:100%}.mobile-sorting .column-container ul.column-list li input:checked+.radio-col{background:#093697;border-color:#093697;color:#fff}.mobile-sorting.hide-sort{display:none}}"]
                }] }
    ];
    /** @nocollapse */
    MobileFilterComponent.ctorParameters = function () { return []; };
    MobileFilterComponent.propDecorators = {
        checkboxColumn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        columns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        limitOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        searchOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isAllRowsSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        limitChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        allRowsOnMobileSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        searchChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        columnSorted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return MobileFilterComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModalDialogComponent = /** @class */ (function () {
    function ModalDialogComponent(_activeModal) {
        this._activeModal = _activeModal;
        this.title = 'Information';
        this.message = 'Check what your done';
    }
    ModalDialogComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'uii-infodialog',
                    template: "<div class=\"modal-header\">\n</div>\n<div class=\"modal-body\">\n  <div class=\"modal-icon\">\n    <span class=\"fa fa-info icon-modal-info\" aria-hidden=\"true\"></span>\n    <span class=\"fa fa-check icon-modal-success\" aria-hidden=\"true\"></span>\n    <span class=\"material-icons icon-modal-warning\">priority_high</span>\n    <span class=\"fa fa-times icon-modal-danger\" aria-hidden=\"true\"></span>\n  </div>\n  <h4 class=\"modal-title\">{{ title }}</h4>\n  <div class=\"modal-message\">\n    <p>{{ message }}</p>\n  </div>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-confirm btn-info\" (click)=\"_activeModal.hide()\">OK</button>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    ModalDialogComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["BsModalRef"] }
    ]; };
    return ModalDialogComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.paginationALign = 'center';
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.currentPageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedPage = 1;
        this.isInitilized = false;
        this._dataPerPage = 10;
    }
    Object.defineProperty(PaginationComponent.prototype, "dataPerPage", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dataPerPage;
        },
        set: /**
         * @param {?} total
         * @return {?}
         */
        function (total) {
            this._dataPerPage = total;
            if (this.isDefined) {
                this.pageTotal = this.countPageTotal();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "amountOfData", {
        get: /**
         * @return {?}
         */
        function () {
            return this._amountOfData;
        },
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            this._amountOfData = data;
            if (this.isDefined) {
                this.pageTotal = this.countPageTotal();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "pageTotal", {
        get: /**
         * @return {?}
         */
        function () {
            return this._pageTotal;
        },
        set: /**
         * @param {?} total
         * @return {?}
         */
        function (total) {
            this._pageTotal = total;
            if (this.isInitilized) {
                this.doSelectPage(this.selectedPage);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "currentPage", {
        set: /**
         * @param {?} page
         * @return {?}
         */
        function (page) {
            if (page !== undefined) {
                this.doSelectPage(page);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PaginationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.pages = this.renderPage(1, this._pageTotal);
        this.isInitilized = true;
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.countPageTotal = /**
     * @return {?}
     */
    function () {
        return Math.ceil(this.amountOfData / this.dataPerPage);
    };
    /**
     * @param {?} currentPage
     * @param {?} pageTotal
     * @return {?}
     */
    PaginationComponent.prototype.renderPage = /**
     * @param {?} currentPage
     * @param {?} pageTotal
     * @return {?}
     */
    function (currentPage, pageTotal) {
        /** @type {?} */
        var startPage = 1;
        /** @type {?} */
        var endPage = pageTotal;
        if (pageTotal > 5) {
            startPage = Math.max(currentPage - Math.floor(5 / 2), 1);
            endPage = startPage + 5 - 1;
        }
        if (endPage > pageTotal) {
            endPage = pageTotal;
            startPage = endPage - 5 + 1;
        }
        /** @type {?} */
        var _pages = [];
        for (var num = startPage; num <= endPage; num++) {
            /** @type {?} */
            var page = this.makePage(num.toString(), num, num === currentPage);
            _pages.push(page);
        }
        return _pages;
    };
    /**
     * @param {?} label
     * @param {?} value
     * @param {?} active
     * @return {?}
     */
    PaginationComponent.prototype.makePage = /**
     * @param {?} label
     * @param {?} value
     * @param {?} active
     * @return {?}
     */
    function (label, value, active) {
        return { label: label, value: value, active: active };
    };
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    PaginationComponent.prototype.onPageSelect = /**
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) {
        this.doSelectPage(pageNumber);
        this.pageChanged.emit({ page: this.selectedPage - 1, dataPerPage: this._dataPerPage });
    };
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    PaginationComponent.prototype.doSelectPage = /**
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) {
        this.selectedPage = pageNumber;
        this.pages = this.renderPage(this.selectedPage, this.pageTotal);
        this.currentPageChange.emit(this.selectedPage);
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.isDefined = /**
     * @return {?}
     */
    function () {
        return this.amountOfData !== undefined && this.dataPerPage !== undefined;
    };
    PaginationComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'uii-pagination',
                    template: "<div *ngIf=\"amountOfData > dataPerPage\" class=\"ugw-pagination-container\" [ngClass]=\"paginationALign\">\n  <ul class=\"ugw-pagination-list\">\n    <li class=\"page-box\" [class.disabled-box]=\"selectedPage === 1\" (click)=\"onPageSelect(1)\">\n      <span class=\"nav-icon ugw-page-first fa fa-angle-double-left\"></span>\n    </li>\n    <li class=\"page-box\" [class.disabled-box]=\"selectedPage === 1\" (click)=\"onPageSelect(selectedPage - 1)\">\n      <span class=\"nav-icon ugw-page-prev fa fa-angle-left\"></span>\n    </li>\n    <ng-container *ngFor=\"let page of pages; let i = index\">\n      <li class=\"page-box\" [class.active]=\"page.active\" (click)=\"onPageSelect(page.value)\">\n        <span>{{page.label}}</span>\n      </li>\n    </ng-container>\n    <li class=\"page-box\" [class.disabled-box]=\"selectedPage === pageTotal\" (click)=\"onPageSelect(selectedPage + 1)\">\n      <span class=\"nav-icon ugw-page-next fa fa-angle-right\"></span>\n    </li>\n    <li class=\"page-box\" [class.disabled-box]=\"selectedPage === pageTotal\" (click)=\"onPageSelect(pageTotal)\">\n      <span class=\"nav-icon ugw-page-last fa fa-angle-double-right\"></span>\n    </li>\n  </ul>\n</div>\n",
                    styles: [".ugw-pagination-container{display:flex}.ugw-pagination-container.left{justify-content:flex-start}.ugw-pagination-container.center{justify-content:center}.ugw-pagination-container.right{justify-content:flex-end}.ugw-pagination-container ul.ugw-pagination-list{display:flex;list-style:none;padding:0}.ugw-pagination-container li.page-box{cursor:pointer;color:#093697;display:flex;align-items:center;justify-content:center;font-size:16px;min-width:40px;height:40px;border-width:1px 1px 1px 0;border-color:#ddd;border-style:solid}.ugw-pagination-container li.page-box:first-child{border-left:1px solid #ddd}.ugw-pagination-container li.page-box:last-child{border-right:1px solid #ddd}.ugw-pagination-container li.page-box.active,.ugw-pagination-container li.page-box:hover{background:#093697;color:#fff;border-color:#093697}.ugw-pagination-container li.page-box.disabled-box{pointer-events:none}.ugw-pagination-container li.page-box.disabled-box span{opacity:.4}.ugw-pagination-container .nav-icon{padding:0 7px;font-size:15px}"]
                }] }
    ];
    /** @nocollapse */
    PaginationComponent.ctorParameters = function () { return []; };
    PaginationComponent.propDecorators = {
        dataPerPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        amountOfData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        currentPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        paginationALign: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pageChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        currentPageChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return PaginationComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ServerTableComponent = /** @class */ (function () {
    function ServerTableComponent(_tablePageSvc) {
        this._tablePageSvc = _tablePageSvc;
        this.editClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.commentClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.detailClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.exportClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.importClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inValidateClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.printClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.publishClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.radioChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.reloadClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedRows = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.switchChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.syncClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.validateClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.verifyClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.limitChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inputTextValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inputRadioValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.page = new PilTablePage();
        this._isAllRowsSelected = false;
        this._columns = [];
        this._rows = [];
        this._rowsCollection = [];
        this._selectedRows = [];
    }
    Object.defineProperty(ServerTableComponent.prototype, "columns", {
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            data.forEach((/**
             * @param {?} column
             * @return {?}
             */
            function (column) {
                column.sort = '';
            }));
            this._columns = data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerTableComponent.prototype, "rows", {
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (data) {
                this._rows = this.setDataNumber(data);
                this._rowsCollection = data;
                this._tablePageSvc.setTablePage(this.page);
            }
            this._selectedRows = [];
            this._isAllRowsSelected = false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ServerTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.page.size = 10;
        this.page.page = 0;
        this.onPageChange(this.page);
    };
    /**
     * @return {?}
     */
    ServerTableComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        clearInterval(this.sortTimerInterval);
    };
    /**
     * @param {?} page
     * @return {?}
     */
    ServerTableComponent.prototype.getEndPage = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        /** @type {?} */
        var end = (page.pageNumber * page.size) + page.size;
        end = end > page.totalElements ? page.totalElements : end;
        return end;
    };
    /**
     * @param {?} page
     * @return {?}
     */
    ServerTableComponent.prototype.getStartPage = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        return page.pageNumber * page.size + 1;
    };
    /**
     * @param {?} prop
     * @return {?}
     */
    ServerTableComponent.prototype.mapActions = /**
     * @param {?} prop
     * @return {?}
     */
    function (prop) {
        /** @type {?} */
        var data = this._rowsCollection[prop.index];
        switch (prop.type) {
            case 'update':
                this.editClicked.emit(data);
                break;
            case 'delete':
                this.deleteClicked.emit(data);
                break;
            case 'detail':
                this.detailClicked.emit(data);
                break;
            case 'print':
                this.printClicked.emit(data);
                break;
            case 'reload':
                this.reloadClicked.emit(data);
                break;
            case 'verify':
                this.verifyClicked.emit(data);
                break;
            case 'validate':
                this.validateClicked.emit(data);
                break;
            case 'invalidate':
                this.inValidateClicked.emit(data);
                break;
            case 'publish':
                this.publishClicked.emit(data);
                break;
            case 'comment':
                this.commentClicked.emit(data);
                break;
            case 'export':
                this.exportClicked.emit(data);
                break;
            case 'import':
                this.importClicked.emit(data);
                break;
            case 'sync':
                this.syncClicked.emit(data);
                break;
            case 'activate':
                this.switchChanged.emit({ value: prop.$event, data: data });
                break;
        }
    };
    /**
     * @param {?} limit
     * @return {?}
     */
    ServerTableComponent.prototype.onLimitChange = /**
     * @param {?} limit
     * @return {?}
     */
    function (limit) {
        this.page.size = Number(limit);
        this.page.pageNumber = 0;
        this.limitChanged.emit(this.page);
    };
    /**
     * @param {?} rowIndex
     * @param {?} prop
     * @return {?}
     */
    ServerTableComponent.prototype.onInputRadioChange = /**
     * @param {?} rowIndex
     * @param {?} prop
     * @return {?}
     */
    function (rowIndex, prop) {
        var _this = this;
        this._columns.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (item.type && item.type === 'input-radio') {
                _this._rows[rowIndex][item.prop] = (item.prop === prop) ? 1 : 0;
            }
        }));
        this.inputRadioValueChange.emit(this._rows[rowIndex]);
    };
    /**
     * @param {?} index
     * @param {?} column
     * @return {?}
     */
    ServerTableComponent.prototype.onInputTextChange = /**
     * @param {?} index
     * @param {?} column
     * @return {?}
     */
    function (index, column) {
        this.inputTextValueChange.emit({
            index: index,
            column: column,
            data: this._rows[index]
        });
    };
    /**
     * @param {?} page
     * @return {?}
     */
    ServerTableComponent.prototype.onPageChange = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        this.page.pageNumber = page.page;
        this.pageChanged.emit(this.page);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    ServerTableComponent.prototype.onRadioSelect = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.reloadClicked.emit(data);
    };
    /**
     * @param {?} type
     * @param {?} $event
     * @param {?=} data
     * @return {?}
     */
    ServerTableComponent.prototype.onRowSelect = /**
     * @param {?} type
     * @param {?} $event
     * @param {?=} data
     * @return {?}
     */
    function (type, $event, data) {
        if ($event.target.checked) {
            (type === 'single') ? this._selectedRows.push(data) : this._selectedRows = this._rowsCollection;
        }
        else {
            this._selectedRows = (type === 'single') ? this._selectedRows.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.number !== data.number; })) : [];
        }
        this.selectedRows.emit(this._selectedRows);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ServerTableComponent.prototype.onRowSelectMobile = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ($event.target.checked) {
            this._isAllRowsSelected = true;
            this._selectedRows = this._rowsCollection;
        }
        else {
            this._isAllRowsSelected = false;
            this._selectedRows = [];
        }
        this.selectedRows.emit(this._selectedRows);
    };
    /**
     * @param {?} keyword
     * @return {?}
     */
    ServerTableComponent.prototype.onSearchChange = /**
     * @param {?} keyword
     * @return {?}
     */
    function (keyword) {
        this.page.pageNumber = 0;
        this.page.keyword = keyword.toLowerCase();
        this.searchChanged.emit(this.page);
    };
    /**
     * @param {?} column
     * @param {?} index
     * @return {?}
     */
    ServerTableComponent.prototype.setColumnSortDirection = /**
     * @param {?} column
     * @param {?} index
     * @return {?}
     */
    function (column, index) {
        clearInterval(this.sortTimerInterval);
        this._columns.forEach((/**
         * @param {?} item
         * @param {?} idx
         * @return {?}
         */
        function (item, idx) {
            if (idx !== index) {
                item.sort = '';
            }
        }));
        column.sort = (column.sort === 'asc') ? 'desc' : 'asc';
        this.sortTimerInterval = setTimeout((/**
         * @return {?}
         */
        function () {
            column.sort = '';
        }), 2000);
    };
    /**
     * @param {?} colleciton
     * @return {?}
     */
    ServerTableComponent.prototype.setDataNumber = /**
     * @param {?} colleciton
     * @return {?}
     */
    function (colleciton) {
        var _this = this;
        colleciton.forEach((/**
         * @param {?} element
         * @param {?} i
         * @return {?}
         */
        function (element, i) {
            element.hasAuth = _this.setRowElementAuthStatus(element.auth);
            element.number = _this.getStartPage(_this.page) + i;
        }));
        return colleciton;
    };
    /**
     * @param {?} auth
     * @return {?}
     */
    ServerTableComponent.prototype.setRowElementAuthStatus = /**
     * @param {?} auth
     * @return {?}
     */
    function (auth) {
        if (auth) {
            /** @type {?} */
            var authValues = Object.keys(auth).map((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return auth[key]; }));
            return authValues.includes(true);
        }
        return false;
    };
    /**
     * @param {?} column
     * @param {?} index
     * @return {?}
     */
    ServerTableComponent.prototype.sortTableColumn = /**
     * @param {?} column
     * @param {?} index
     * @return {?}
     */
    function (column, index) {
        this.setColumnSortDirection(column, index);
        this._rows.sort(this.sortColumValue(column));
    };
    /**
     * @param {?} column
     * @return {?}
     */
    ServerTableComponent.prototype.sortTableColumnMobile = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        this._rows.sort(this.sortColumValue(column));
        column.sort = '';
    };
    /**
     * @param {?} data
     * @return {?}
     */
    ServerTableComponent.prototype.sortColumValue = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var sortOrder = 1;
        if (data.prop[0] === '-') {
            sortOrder = -1;
            data.prop = data.prop.substr(1);
        }
        return (/**
         * @param {?} currentValue
         * @param {?} nextValue
         * @return {?}
         */
        function (currentValue, nextValue) {
            /** @type {?} */
            var result;
            if (data.sort === 'asc') {
                result = (currentValue[data.prop] < nextValue[data.prop]) ? -1 : (currentValue[data.prop] > nextValue[data.prop]) ? 1 : 0;
            }
            else {
                result = (currentValue[data.prop] > nextValue[data.prop]) ? -1 : (currentValue[data.prop] < nextValue[data.prop]) ? 1 : 0;
            }
            return result * sortOrder;
        });
    };
    ServerTableComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'uii-server-table',
                    template: "<uii-table-filter\n  *ngIf=\"limitOptions || searchOptions\"\n  [limitOptions]=\"limitOptions\"\n  [searchOptions]=\"searchOptions\"\n  (limitChanged)=\"onLimitChange($event)\"\n  (searchChanged)=\"onSearchChange($event)\">\n</uii-table-filter>\n<div class=\"gateway-table\">\n  <div class=\"gateway-table-header\">\n    <div class=\"header-cell cell-radio-checkbox\" *ngIf=\"checkboxColumn\">\n      <div class=\"gateway-rcb\">\n        <input type=\"checkbox\" id=\"aba\" class=\"gateway-rcb-select\" [checked]=\"_isAllRowsSelected\" (change)=\"_isAllRowsSelected = !_isAllRowsSelected; onRowSelect('multiple', $event)\"/>\n        <p for=\"aba\" class=\"gateway-rcb-label\"></p>\n      </div>\n    </div>\n    <div class=\"header-cell cell-radio-checkbox\" *ngIf=\"radioColumn\"></div>\n    <div *ngFor=\"let column of _columns; let idx = index;\" class=\"header-cell\" [class.cell-number]=\"column.prop === 'number'\">\n      <span\n        *ngIf=\"!column.hasOwnProperty('header-type')\"\n        class=\"cell order-able\"\n        (click)=\"sortTableColumn(column, idx)\"\n        [ngClass]=\"(column.sort === 'asc') ? 'icon-up' : column.sort === 'desc' ? 'icon-down' : ''\">{{column.name}}</span>\n        <span\n          *ngIf=\"column.hasOwnProperty('header-type') && column['header-type'] === 'html'\"\n          class=\"cell order-able\"\n          (click)=\"sortTableColumn(column, idx)\"\n          [ngClass]=\"(column.sort === 'asc') ? 'icon-up' : column.sort === 'desc' ? 'icon-down' : ''\" [innerHTML]=\"column.name\"></span>\n    </div>\n    <div *ngIf=\"actionColumn\" class=\"header-cell cell-action\">\n      <span>{{actionTitle}}</span>\n    </div>\n  </div>\n  <uii-mobile-filter\n    [checkboxColumn]=\"checkboxColumn\"\n    [columns]=\"_columns\"\n    [isAllRowsSelected]=\"_isAllRowsSelected\"\n    [limitOptions]=\"limitOptions\"\n    [searchOptions]=\"searchOptions\"\n    (limitChanged)=\"onLimitChange($event)\"\n    (searchChanged)=\"onSearchChange($event)\"\n    (allRowsOnMobileSelected)=\"onRowSelectMobile($event)\"\n    (columnSorted)=\"sortTableColumnMobile($event)\">\n  </uii-mobile-filter>\n  <div *ngFor=\"let item of _rows; let i = index\" class=\"row-container\">\n    <div class=\"cell-radio-checkbox-mobile\" *ngIf=\"checkboxColumn\">\n      <div class=\"gateway-rcb\">\n        <input type=\"checkbox\" [checked]=\"_isAllRowsSelected\" (change)=\"onRowSelect('single', $event, item)\" class=\"gateway-rcb-select\" />\n        <p for=\"aba\" class=\"gateway-rcb-label\"></p>\n      </div>\n    </div>\n    <div class=\"cell-radio-checkbox-mobile\" *ngIf=\"radioColumn\">\n      <div class=\"gateway-rcb\">\n        <input type=\"radio\" name=\"mtable-radio-item\" [attr.id]=\"'mitem-'+ i\" [checked]=\"item.flag_aktif === '1'\" (change)=\"onRadioSelect(item)\" class=\"gateway-rcb-select\" />\n        <p class=\"gateway-rcb-label radio-label\"></p>\n      </div>\n    </div>\n    <div class=\"gateway-table-data\">\n      <div class=\"data-cell cell-radio-checkbox\" *ngIf=\"checkboxColumn\">\n        <div class=\"gateway-rcb\">\n          <input type=\"checkbox\" [checked]=\"_isAllRowsSelected\" (change)=\"onRowSelect('single', $event, item)\" class=\"gateway-rcb-select\" />\n          <p for=\"aba\" class=\"gateway-rcb-label\"></p>\n        </div>\n      </div>\n      <div class=\"data-cell cell-radio-checkbox\" *ngIf=\"radioColumn\">\n        <div class=\"gateway-rcb\">\n          <input type=\"radio\" name=\"table-radio-item\" [attr.id]=\"'item-'+ i\" [checked]=\"item.flag_aktif === '1'\" (change)=\"onRadioSelect(item)\" class=\"gateway-rcb-select\" />\n          <p class=\"gateway-rcb-label radio-label\"></p>\n        </div>\n      </div>\n      <ng-container *ngFor=\"let column of _columns; let colIdx = index\">\n        <div class=\"data-cell\" [ngClass]=\"(actionColumn && item.hasAuth) ? 'inaction' : 'outaction'\" [class.hide-in-mobile]=\"column.hasOwnProperty('hide_in_mobile') && column.hide_in_mobile\">\n          <div class=\"mobile-view-header\">\n            <span *ngIf=\"!column.hasOwnProperty('header-type')\">{{column.name}}</span>\n            <span *ngIf=\"column.hasOwnProperty('header-type') && column['header-type'] === 'html'\" [innerHTML]=\"column.name\"></span>\n          </div>\n          <div class=\"table-small-content\">\n            <ng-container *ngIf=\"column.hasOwnProperty('type')\">\n              <span *ngIf=\"column.type === 'label'\" class=\"cell-label\" [ngClass]=\"item.class\">{{item[column.prop.toString()]}}</span>\n              <span *ngIf=\"column.type === 'html'\" class=\"cell-html\" [innerHTML]=\"item[column.prop.toString()]\"></span>\n              <span *ngIf=\"column.type === 'date' && !column.format\">{{item[column.prop.toString()] | date: 'dd MMMM y'}}</span>\n              <span *ngIf=\"column.type === 'input-text'\">\n                <input \n                  type=\"{{column.inputType}}\"\n                  maxlength=\"{{column.inputMaxLength}}\"\n                  class=\"table-input-text\" \n                  [class.uppercase]=\"column.textUppercase\"\n                  [class.lowercase]=\"column.textLowercase\"\n                  [(ngModel)]=\"item[column.prop.toString()]\" \n                  (change)=\"onInputTextChange(i, column.name)\">\n              </span>\n              <span *ngIf=\"column.type === 'input-radio'\">\n                <form>\n                  <div class=\"gateway-rcb\">\n                    <input type=\"radio\" \n                      [attr.name]=\"'radio-' + i\"\n                      [attr.id]=\"'radio-' + i + '-' + colIdx\"\n                      [checked]=\"item[column.prop] === 1\"\n                      (change)=\"onInputRadioChange(i, column.prop)\"\n                      class=\"gateway-rcb-select\" />\n                    <p class=\"gateway-rcb-label radio-label\"></p>\n                  </div>\n                </form>\n              </span>\n            </ng-container>\n            <ng-container *ngIf=\"!column.hasOwnProperty('type')\">\n              <span>{{item[column.prop.toString()]}}</span>\n            </ng-container>\n          </div>\n        </div>\n      </ng-container>\n      <div class=\"data-cell data-cell-action\" [ngClass]=\"(actionColumn && item.hasAuth) ? 'inaction' : 'outaction'\" *ngIf=\"actionColumn\">\n        <div class=\"mobile-view-header\"><span>{{actionTitle}}</span></div>\n        <div class=\"table-small-content\">\n          <span>\n            <uii-table-action\n              [index]=\"i\"\n              [item]=\"item\"\n              [auth]=\"item.auth\"\n              [actionInValidation]=\"actionInValidation\"\n              (emitAction)=\"mapActions($event)\">\n            </uii-table-action>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"gateway-empty-data\" *ngIf=\"_rowsCollection === undefined || _rowsCollection.length === 0\">\n  <span>Tidak ada data yang ditampilkan</span>\n</div>\n<uii-table-footer\n  [footerInfo]=\"footerInfo\"\n  [paginationOptions]=\"paginationOptions\"\n  [totalElements]=\"page.totalElements\"\n  [startPage]=\"getStartPage(page)\"\n  [endPage]=\"getEndPage(page)\"\n  (pageChanged)=\"onPageChange($event)\">\n</uii-table-footer>"
                }] }
    ];
    /** @nocollapse */
    ServerTableComponent.ctorParameters = function () { return [
        { type: TablePageService }
    ]; };
    ServerTableComponent.propDecorators = {
        actionColumn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        actionTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        actionInValidation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        checkboxColumn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        footerInfo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        limitOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        paginationOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        radioColumn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        searchOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        columns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        editClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        commentClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        deleteClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        detailClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        exportClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        importClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        inValidateClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        pageChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        printClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        publishClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        radioChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        reloadClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        selectedRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        switchChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        syncClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        validateClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        verifyClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        limitChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        searchChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        inputTextValueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        inputRadioValueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return ServerTableComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SwitchComponent = /** @class */ (function () {
    function SwitchComponent() {
        this.useOverlay = false;
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._checked = false;
        this._disabled = false;
    }
    Object.defineProperty(SwitchComponent.prototype, "checked", {
        get: /**
         * @return {?}
         */
        function () {
            return this._checked;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._checked = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwitchComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._disabled = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SwitchComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    SwitchComponent.prototype.onSwitchToggle = /**
     * @return {?}
     */
    function () {
        this._checked = !this._checked;
        this.changed.emit(this._checked);
    };
    /**
     * @return {?}
     */
    SwitchComponent.prototype.onOverlayToggle = /**
     * @return {?}
     */
    function () {
        this.changeEvent.emit(this._checked);
    };
    SwitchComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'uii-switch',
                    template: "<div class=\"ugw-switch-container\">\n  <label\n    for=\"ugw-switch\"\n    [class.switch-pane-checked]=\"_checked\"\n    class=\"ugw-switch-label-container\"\n    [class.disabled-switch]=\"_disabled\"\n    (click)=\"_disabled ? $event.preventDefault() : onSwitchToggle()\">\n    <label\n      for=\"ugw-switch\"\n      class=\"ugw-switch-ball\"\n      [class.switch-ball-checked]=\"_checked\"\n      [class.disabled-switch]=\"_disabled\">\n    </label>\n  </label>\n  <div\n    *ngIf=\"useOverlay\"\n    class=\"switch-overlay\"\n    [class.disabled-switch]=\"_disabled\"\n    (click)=\"_disabled ? $event.preventDefault() : onOverlayToggle()\"></div>\n    <ng-content></ng-content>\n</div>",
                    styles: [".ugw-switch-container{position:relative;height:22px;width:40px;display:inline-block}.ugw-switch-container label.ugw-switch-label-container{border:1px solid #ccc;position:absolute;z-index:0;top:0;left:0;height:100%;width:100%;border-radius:12px;cursor:pointer;transition:background 150ms}.ugw-switch-container label.ugw-switch-label-container.switch-pane-checked{background:#093697}.ugw-switch-container label.ugw-switch-ball{position:absolute;top:-1px;left:-1px;height:23px;width:23px;background:#fff;border:1px solid #ccc;border-radius:50%;cursor:pointer;transition:left .5s}.ugw-switch-container label.ugw-switch-ball.switch-ball-checked{left:40%}.ugw-switch-container .switch-overlay{position:absolute;width:100%;height:100%;z-index:100;cursor:pointer}.ugw-switch-container .disabled-switch{cursor:not-allowed!important;opacity:.5}"]
                }] }
    ];
    /** @nocollapse */
    SwitchComponent.ctorParameters = function () { return []; };
    SwitchComponent.propDecorators = {
        useOverlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        checked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        changed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        changeEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return SwitchComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TableComponent = /** @class */ (function () {
    function TableComponent() {
        this.actionColumn = true;
        this.actionInValidation = false;
        this.actionTitle = 'Aksi';
        this.checkboxColumn = false;
        this.isAllCheckbox = false;
        this.columns = [];
        this.footerInfo = true;
        this.forceLimitOptions = false;
        this.limitOptions = true;
        this.paginationOptions = true;
        this.radioColumn = false;
        this.rows = [];
        this.searchOptions = true;
        this.serverMode = false;
        this.commentClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.detailClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inValidateClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.limitChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.printClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.publishClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.radioChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.reloadClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedRow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.switchChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.validateClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.verifyClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inputTextValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inputRadioValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    TableComponent.prototype.onEditClick = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.editClicked.emit(data);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TableComponent.prototype.onCommentClick = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.commentClicked.emit(data);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TableComponent.prototype.onDeleteClick = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.deleteClicked.emit(data);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TableComponent.prototype.onDetailClick = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.detailClicked.emit(data);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TableComponent.prototype.onInValidateClick = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.inValidateClicked.emit(data);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TableComponent.prototype.onLimitChange = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.limitChanged.emit(data);
    };
    /**
     * @param {?} page
     * @return {?}
     */
    TableComponent.prototype.onPageChange = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        this.pageChanged.emit(page);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TableComponent.prototype.onPrintClick = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.printClicked.emit(data);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TableComponent.prototype.onPublishClick = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.publishClicked.emit(data);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TableComponent.prototype.onRadioSelect = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.radioChange.emit(data);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TableComponent.prototype.onReloadClick = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.reloadClicked.emit(data);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TableComponent.prototype.onRowSelect = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.selectedRow.emit(data);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TableComponent.prototype.onSearchChange = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.searchChanged.emit(data);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TableComponent.prototype.onSwitchChange = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.switchChanged.emit(data);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TableComponent.prototype.onValidateClick = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.validateClicked.emit(data);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TableComponent.prototype.onVerifyClick = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.verifyClicked.emit(data);
    };
    TableComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'uii-table',
                    template: "\n    <uii-server-table\n      *ngIf=\"serverMode; else clientMode\"\n      [actionColumn]=\"actionColumn\"\n      [actionTitle]=\"actionTitle\"\n      [checkboxColumn]=\"checkboxColumn\"\n      [columns]=\"columns\"\n      [footerInfo]=\"footerInfo\"\n      [limitOptions]=\"limitOptions\"\n      [paginationOptions]=\"paginationOptions\"\n      [radioColumn]=\"radioColumn\"\n      [rows]=\"rows\"\n      [searchOptions]=\"searchOptions\"\n      [searchOptions]=\"searchOptions\"\n      (limitChanged)=\"onLimitChange($event)\"\n      (pageChanged)=\"onPageChange($event)\"\n      (editClicked)=\"onEditClick($event)\"\n      (commentClicked)=\"onCommentClick($event)\"\n      (deleteClicked)=\"onDeleteClick($event)\"\n      (detailClicked)=\"onDetailClick($event)\"\n      (inValidateClicked)=\"onInValidateClick($event)\"\n      (printClicked)=\"onPrintClick($event)\"\n      (publishClicked)=\"onPublishClick($event)\"\n      (reloadClicked)=\"onReloadClick($event)\"\n      (searchChanged)=\"onSearchChange($event)\"\n      (switchChanged)=\"onSwitchChange($event)\"\n      (validateClicked)=\"onValidateClick($event)\"\n      (verifyClicked)=\"onVerifyClick($event)\"\n      (selectedRows)=\"onRowSelect($event)\"\n      (inputTextValueChange)=\"inputTextValueChange.emit($event)\"\n      (inputRadioValueChange)=\"inputRadioValueChange.emit($event)\">\n    </uii-server-table>\n    <ng-template #clientMode>\n      <uii-client-table\n        [actionColumn]=\"actionColumn\"\n        [actionInValidation]=\"actionInValidation\"\n        [actionTitle]=\"actionTitle\"\n        [checkboxColumn]=\"checkboxColumn\"\n        [isAllCheckbox]=\"isAllCheckbox\"\n        [columns]=\"columns\"\n        [footerInfo]=\"footerInfo\"\n        [forceLimitOptions]=\"forceLimitOptions\"\n        [limitOptions]=\"limitOptions\"\n        [paginationOptions]=\"paginationOptions\"\n        [radioColumn]=\"radioColumn\"\n        [rows]=\"rows\"\n        [searchOptions]=\"searchOptions\"\n        (editClicked)=\"onEditClick($event)\"\n        (commentClicked)=\"onCommentClick($event)\"\n        (deleteClicked)=\"onDeleteClick($event)\"\n        (detailClicked)=\"onDetailClick($event)\"\n        (inValidateClicked)=\"onInValidateClick($event)\"\n        (printClicked)=\"onPrintClick($event)\"\n        (publishClicked)=\"onPublishClick($event)\"\n        (radioSelect)=\"onRadioSelect($event)\"\n        (reloadClicked)=\"onReloadClick($event)\"\n        (switchChanged)=\"onSwitchChange($event)\"\n        (validateClicked)=\"onValidateClick($event)\"\n        (verifyClicked)=\"onVerifyClick($event)\"\n        (selectedRows)=\"onRowSelect($event)\"\n        (inputTextValueChange)=\"inputTextValueChange.emit($event)\"\n        (inputRadioValueChange)=\"inputRadioValueChange.emit($event)\">\n      </uii-client-table>\n    </ng-template>"
                }] }
    ];
    TableComponent.propDecorators = {
        actionColumn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        actionInValidation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        actionTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        checkboxColumn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isAllCheckbox: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        columns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        footerInfo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        forceLimitOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        limitOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        paginationOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        radioColumn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        searchOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        serverMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        commentClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        deleteClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        detailClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        editClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        inValidateClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        limitChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        pageChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        printClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        publishClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        radioChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        reloadClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        searchChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        selectedRow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        switchChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        validateClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        verifyClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        inputTextValueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        inputRadioValueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return TableComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TableActionComponent = /** @class */ (function () {
    function TableActionComponent() {
        this.emitAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TableActionComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'uii-table-action',
                    template: "\n    <div class=\"cell-action\">\n      <span *ngIf=\"auth && auth.canPublish\" class=\"action-icon icon-primary \" (click)=\"emitAction.emit({index: index, type: 'publish'})\" uiiTooltip=\"Terbit\">\n        <span class=\"fa fa-arrow-circle-up\"></span>\n      </span>\n        <span *ngIf=\"auth && auth.canUpdate\" class=\"action-icon icon-primary \" (click)=\"emitAction.emit({index: index, type: 'update'})\" uiiTooltip=\"Edit\">\n        <span class=\"fa fa-pencil\"></span>\n      </span>\n        <span *ngIf=\"auth && auth.canRead\" class=\"action-icon i-mat icon-primary \" (click)=\"emitAction.emit({index: index, type: 'detail'})\" uiiTooltip=\"Detail\">\n        <span class=\"material-icons\">visibility</span>\n      </span>\n        <span *ngIf=\"auth && auth.canVerify\" class=\"action-icon icon-primary \" (click)=\"emitAction.emit({index: index, type: 'verify'})\" uiiTooltip=\"Verifikasi\">\n        <span class=\"fa fa-check-square-o\"></span>\n      </span>\n        <span *ngIf=\"auth && auth.canValidate\" class=\"action-icon i-mat icon-primary \" (click)=\"emitAction.emit({index: index, type: 'validate'})\" uiiTooltip=\"Validasi\">\n        <span class=\"material-icons\">playlist_add_check</span>\n      </span>\n        <span *ngIf=\"auth && auth.canPrint\" class=\"action-icon icon-primary \" (click)=\"emitAction.emit({index: index, type: 'print'})\" uiiTooltip=\"Cetak\">\n        <span class=\"fa fa-print\"></span>\n      </span>\n        <span *ngIf=\"auth && auth.canReload\" class=\"action-icon icon-primary \" (click)=\"emitAction.emit({index: index, type: 'reload'})\" uiiTooltip=\"Muat ulang\">\n        <span class=\"fa fa-repeat\"></span>\n      </span>\n        <span *ngIf=\"actionInValidation === true\" class=\"action-icon icon-primary \" (click)=\"emitAction.emit({index: index, type: 'invalidate'})\" uiiTooltip=\"Batalkan validasi\">\n        <span class=\"fa fa-lock\"></span>\n      </span>\n        <span *ngIf=\"auth && auth.canDelete\" class=\"action-icon icon-primary \" (click)=\"emitAction.emit({index: index, type: 'delete'})\" uiiTooltip=\"Hapus\">\n        <span class=\"fa fa-trash\"></span>\n      </span>\n      <span *ngIf=\"auth && auth.canComment\" class=\"action-icon icon-primary \" (click)=\"emitAction.emit({index: index, type: 'comment'})\" uiiTooltip=\"Komentar\">\n        <span class=\"fa fa-comment\"></span>\n      </span>\n      <span *ngIf=\"auth && auth.canExport\" class=\"action-icon icon-primary \" (click)=\"emitAction.emit({index: index, type: 'export'})\" uiiTooltip=\"ekspor\">\n        <span class=\"fa fa-cloud-upload\"></span>\n      </span>\n      <span *ngIf=\"auth && auth.canImport\" class=\"action-icon icon-primary \" (click)=\"emitAction.emit({index: index, type: 'import'})\" uiiTooltip=\"Impor\">\n        <span class=\"fa fa-cloud-download\"></span>\n      </span>\n      <span *ngIf=\"auth && auth.canSync\" class=\"action-icon icon-primary \" (click)=\"emitAction.emit({index: index, type: 'sync'})\" uiiTooltip=\"Sinkron\">\n        <span class=\"fa fa-exchange\"></span>\n      </span>\n        <span *ngIf=\"auth && auth.canActivate\" class=\"action-icon i-on-off icon-primary\" uiiTooltip=\"Aktivasi\">\n        <uii-switch\n          [useOverlay]=\"true\"\n          [checked]=\"item.is_active === 1 || item.flag_aktif === 1 ? true : false\"\n          (changeEvent)=\"emitAction.emit({$event: $event, index: index, type: 'activate'})\">\n        </uii-switch>\n      </span>\n    </div>\n  ",
                    styles: [".cell-action{font-size:20px;width:100%}.cell-action .action-icon{cursor:pointer;margin:0 5px;vertical-align:middle;display:inline}.cell-action .action-icon.i-mat,.cell-action .action-icon.i-on-off{position:relative;top:5px}"]
                }] }
    ];
    TableActionComponent.propDecorators = {
        actionInValidation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        auth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        emitAction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return TableActionComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TableFilterComponent = /** @class */ (function () {
    function TableFilterComponent() {
        this.limitChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.limitOpts = [
            {
                label: '10',
                value: 10
            },
            {
                label: '25',
                value: 25
            },
            {
                label: '50',
                value: 50
            },
            {
                label: '100',
                value: 100
            }
        ];
    }
    /**
     * @return {?}
     */
    TableFilterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} keyword
     * @return {?}
     */
    TableFilterComponent.prototype.onSearchChange = /**
     * @param {?} keyword
     * @return {?}
     */
    function (keyword) {
        this.searchChanged.emit(keyword);
    };
    /**
     * @param {?} limit
     * @return {?}
     */
    TableFilterComponent.prototype.onLimitChange = /**
     * @param {?} limit
     * @return {?}
     */
    function (limit) {
        this.limitChanged.emit(limit);
    };
    TableFilterComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'uii-table-filter',
                    template: "<div class=\"filter-options\">\n  <div class=\"limit-options\" *ngIf=\"limitOptions\">\n    <span>\n      Tampilkan\n      <select (change)=\"onLimitChange($event.target.value)\">\n        <option *ngFor=\"let option of limitOpts\" [value]=\"option.value\">{{ option.label }}</option>\n      </select>\n      data\n    </span>\n  </div>\n  <div class=\"search-options\" *ngIf=\"searchOptions\">\n    <div class=\"input-container\">\n        <input #searchInput class=\"search-input\" type=\"text\" placeholder=\"Cari...\" (keyup.enter)=\"onSearchChange(searchInput.value)\"/>\n        <button><span class=\"fa fa-search\" (click)=\"onSearchChange(searchInput.value)\"></span></button>\n      </div>\n  </div>\n</div>",
                    styles: [".filter-options{width:100%;height:40px;position:relative;margin-bottom:15px}.filter-options .limit-options{font-size:12px}.filter-options .limit-options select{width:55px;height:40px;font-size:13px;background:#fff;outline:0}.filter-options .search-options{position:absolute;top:0;right:0;z-index:20}.filter-options .search-options .input-container{display:flex;align-items:center}.filter-options .search-options .search-input{height:40px;width:384px;margin:0;padding:0 10px;border:1px solid #ccc;outline:0}.filter-options .search-options button{background:#093697;box-shadow:none;color:#fff;height:40px;width:40px;border:none;outline:0;margin:0;font-size:20px}@media screen and (max-width:770px){.filter-options{display:none}}"]
                }] }
    ];
    /** @nocollapse */
    TableFilterComponent.ctorParameters = function () { return []; };
    TableFilterComponent.propDecorators = {
        limitOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        searchOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        limitChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        searchChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return TableFilterComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TableFooterComponent = /** @class */ (function () {
    function TableFooterComponent(_tablePageSvc) {
        this._tablePageSvc = _tablePageSvc;
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    TableFooterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setPageInfo();
    };
    /**
     * @return {?}
     */
    TableFooterComponent.prototype.setPageInfo = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._tablePageSvc.getTablePage().subscribe((/**
         * @param {?} page
         * @return {?}
         */
        function (page) {
            _this._page = page;
        }));
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    TableFooterComponent.prototype.selectedPageChange = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.pageChanged.emit($event);
    };
    TableFooterComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'uii-table-footer',
                    template: "\n    <div class=\"table-footer\" *ngIf=\"footerInfo && totalElements > 0\">\n      <span>Menampilkan {{startPage}} sampai {{endPage}} dari {{totalElements}} data</span>\n    </div>\n    <ng-container *ngIf=\"paginationOptions\">\n      <uii-pagination\n        [currentPage]=\"(_page.pageNumber + 1)\"\n        [dataPerPage]=\"_page.size\"\n        [amountOfData]=\"totalElements\"\n        (pageChanged)=\"selectedPageChange($event)\">\n      </uii-pagination>\n    </ng-container>",
                    styles: ["\n    .table-footer {\n      font-size: 12px;\n      margin: 20px 0;\n    }"]
                }] }
    ];
    /** @nocollapse */
    TableFooterComponent.ctorParameters = function () { return [
        { type: TablePageService }
    ]; };
    TableFooterComponent.propDecorators = {
        footerInfo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        paginationOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        totalElements: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        startPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        endPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pageChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return TableFooterComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function fadeIn() {
    return [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: 1 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])(400)
        ])
    ];
}
/**
 * @return {?}
 */
function fadeOut() {
    return [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: 0 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: 1 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])(400)
        ])
    ];
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TableSkeletonComponent = /** @class */ (function () {
    function TableSkeletonComponent() {
        this.columnCount = 3;
        this.rowCount = 10;
        this.showActionColumn = true;
        this.showButtonCreate = true;
        this.showCheckButton = false;
        this.showLimitOptions = true;
        this.showMobileLimitOptions = true;
        this.showNumberColumn = true;
        this.showRadioButton = false;
        this.showSearchOptions = true;
        this.useCustomElement = false;
        this.rows = Array;
        this.columns = Array;
    }
    TableSkeletonComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'uii-table-skeleton',
                    template: "<div [@fadeIn]=\"'in'\">\n  <div *ngIf=\"showButtonCreate\" class=\"button-action-right\">\n      <button class=\"btn btn-skeleton\"></button>\n  </div>\n  <div *ngIf=\"showMobileLimitOptions\" class=\"search-limit-mobile-options\"></div>\n  <div class=\"mobile-skeleton-container\">\n    <div *ngFor=\"let row of rows(rowCount)\" class=\"table-skeleton-mobile\">\n      <div class=\"cell-left\">\n          <ul class=\"mobile-cell-container\">\n            <li *ngIf=\"showNumberColumn\"></li>\n            <li *ngFor=\"let colum of columns(columnCount)\"></li>\n          </ul>\n        </div>\n      <div class=\"cell-right\">\n          <ul class=\"mobile-cell-container\">\n            <li *ngIf=\"showNumberColumn\"></li>\n            <li *ngFor=\"let colum of columns(columnCount)\"></li>\n          </ul>\n        </div>\n    </div>\n  </div>\n  <div class=\"row search-limit-options\" *ngIf=\"showSearchOptions || showLimitOptions\">\n      <div class=\"col-sm-6 skeleton\">\n        <div *ngIf=\"showLimitOptions\" class=\"linear-lg pull-left\"></div>\n      </div>\n      <div class=\"col-sm-6 skeleton\">\n        <div *ngIf=\"showSearchOptions\" class=\"linear-xl pull-right\"></div>\n      </div>\n  </div>\n  <table class=\"table table-skeleton table-striped\">\n    <thead>\n      <tr>\n        <th *ngIf=\"showNumberColumn\" width=\"40\"><label class=\"header-number\"></label></th>\n        <th *ngIf=\"showCheckButton || showRadioButton\" width=\"40\"><label class=\"header-number\"></label></th>\n        <th *ngFor=\"let colum of columns(columnCount)\"><label></label></th>\n        <th *ngIf=\"showActionColumn\" class=\"header-action\"><label></label></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let row of rows(rowCount)\">\n        <td *ngIf=\"showNumberColumn\"><label class=\"body-number\"></label></td>\n        <td *ngIf=\"showCheckButton || showRadioButton\"><label class=\"body-number\"></label></td>\n        <td *ngFor=\"let colum of columns(columnCount)\"><label class=\"body-label\"></label></td>\n        <td *ngIf=\"showActionColumn\" class=\"body-action\"><label class=\"body-label\"></label></td>\n      </tr>\n    </tbody>\n  </table>\n</div>",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('fadeIn', fadeIn()),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('fadeOut', fadeOut())
                    ]
                }] }
    ];
    TableSkeletonComponent.propDecorators = {
        customElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        columnCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rowCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showActionColumn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showButtonCreate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showCheckButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showLimitOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showMobileLimitOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showNumberColumn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showRadioButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showSearchOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        useCustomElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return TableSkeletonComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TabsetComponent = /** @class */ (function () {
    function TabsetComponent() {
        this.tabMobileAttr = 'both';
        this.tabs = [];
    }
    /**
     * @return {?}
     */
    TabsetComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} tab
     * @return {?}
     */
    TabsetComponent.prototype.addTab = /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        this.tabs.push(tab);
        this.tabs[0].active = true;
    };
    /**
     * @param {?} tab
     * @return {?}
     */
    TabsetComponent.prototype.onTabClick = /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        this.tabs.forEach((/**
         * @param {?} tabItem
         * @return {?}
         */
        function (tabItem) {
            if (tabItem === tab) {
                tabItem.active = true;
                tabItem.selectedTab = tab;
            }
            else {
                tabItem.active = false;
            }
        }));
    };
    /**
     * @return {?}
     */
    TabsetComponent.prototype.getLeft = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var index = this.tabs.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.active === true; }));
        return index * (100 / this.tabs.length);
    };
    /**
     * @return {?}
     */
    TabsetComponent.prototype.borderWidth = /**
     * @return {?}
     */
    function () {
        return (100 / this.tabs.length);
    };
    /**
     * @param {?} tabIndex
     * @return {?}
     */
    TabsetComponent.prototype.selectTab = /**
     * @param {?} tabIndex
     * @return {?}
     */
    function (tabIndex) {
        this.tabs.forEach((/**
         * @param {?} tabItem
         * @param {?} index
         * @return {?}
         */
        function (tabItem, index) {
            if (index === tabIndex) {
                tabItem.active = true;
                tabItem.selectedTab = tabItem;
            }
            else {
                tabItem.active = false;
            }
        }));
    };
    TabsetComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'uii-tabset',
                    template: "<ul class=\"ugw-tab-container\">\n  <li *ngFor=\"let tabItem of tabs; let i = index\"\n    [style.width.%]=\"(100 / tabs.length)\"\n    [class.tab-active]=\"tabItem.active\"\n    (click)=\"onTabClick(tabItem)\">\n    <a href=\"javascript:void(0);\">\n      <span class=\"tab-title-container\">\n        <span \n          *ngIf=\"tabItem.tabIcon\"\n          class=\"tab-icon\"\n          [ngClass]=\"tabItem.tabIcon ? tabItem.tabIcon : ''\"\n          [class.hide-tab-icon]=\"tabMobileAttr === 'title'\">\n        </span>\n        <span\n          class=\"tab-title\"\n          [class.hide-tab-title]=\"tabMobileAttr === 'icon'\">\n          {{tabItem.title}}</span>\n      </span>\n    </a>\n    <div class=\"tab-border\" [style.width.%]=\"borderWidth()\" [style.left.%]=\"getLeft()\" ></div>\n  </li>\n</ul>\n<div class=\"tab-item-content\">\n  <ng-content></ng-content>\n</div>",
                    styles: ["::-webkit-scrollbar{display:none}@media screen and (max-width:700px){.ugw-tab-container{-webkit-overflow-scrolling:touch;white-space:nowrap;overflow-y:scroll;list-style:none}.ugw-tab-container li{position:relative;display:inline-block;min-width:33%}.ugw-tab-container li span.tab-title-container{overflow:visible;vertical-align:middle}.ugw-tab-container li .hide-tab-icon,.ugw-tab-container li .hide-tab-title{display:none}.ugw-tab-container li.tab-active::after{content:'';position:absolute;left:0;bottom:0;height:4px;width:100%;background:#093697}.ugw-tab-container .tab-border{display:none}}.ugw-tab-container{position:relative;width:100%;display:flex;justify-content:space-between;padding:0;margin:0;border-bottom:1px solid #fbc02d;list-style:none}.ugw-tab-container li{margin:0;cursor:pointer;text-align:center;height:45px;font-weight:700;color:#093697;padding:0 4px}.ugw-tab-container li a{display:flex;align-items:center;justify-content:space-around;width:100%;height:100%}.ugw-tab-container li span.tab-icon{margin-right:2px}.ugw-tab-container li span.tab-title-container{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;vertical-align:middle}.ugw-tab-container .tab-border{position:absolute;bottom:0;height:4px;transition:left .3s;background:#093697}.tab-item-content{width:100%}.tab-item-content ::ng-deep .tab-active{display:block!important}.tab-item-content ::ng-deep .tab-pane{display:none}"]
                }] }
    ];
    /** @nocollapse */
    TabsetComponent.ctorParameters = function () { return []; };
    TabsetComponent.propDecorators = {
        tabMobileAttr: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return TabsetComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var IMAGES_ROOT = 'assets/img/';
// tslint:disable-next-line:max-line-length
/** @type {?} */
var IMAGE_PLACEHOLDER = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0MzJERDRFRkJERUYxMUU3QkUzRkJEOTJCNTZERjhCRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0MzJERDRGMEJERUYxMUU3QkUzRkJEOTJCNTZERjhCRCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQzMkRENEVEQkRFRjExRTdCRTNGQkQ5MkI1NkRGOEJEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQzMkRENEVFQkRFRjExRTdCRTNGQkQ5MkI1NkRGOEJEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+xQAUNwAAASBJREFUeNrs0jERAAAIxDDAv+fHACNjIqHXTlLwbSTAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsuK0AAwBL0gQp9PLLgwAAAABJRU5ErkJggg==';
// tslint:disable-next-line: max-line-length
/** @type {?} */
var IMAGE_PDF_PLACEHOLDER = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAPAAA/+EDLWh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMjEgNzkuMTU0OTExLCAyMDEzLzEwLzI5LTExOjQ3OjE2ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowRjJCM0I0QkIwRDIxMUU2OTZFMzlCRkEzRDM1NjA3MCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowRjJCM0I0QUIwRDIxMUU2OTZFMzlCRkEzRDM1NjA3MCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RkY0RjIxQjc5QUYzMTFFMzk0NzFEREFCQUUxQkFDMEQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RkY0RjIxQjg5QUYzMTFFMzk0NzFEREFCQUUxQkFDMEQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCAFAAeADAREAAhEBAxEB/8QAdwABAQEBAQEBAAAAAAAAAAAAAAUEAwECCAEBAQEBAAAAAAAAAAAAAAAAAAECAxABAAIBAgIHBgUDBQEAAAAAAAECAxEEEgUhQVFxsXI0MYGRwbJTYdEiMxWiEyOhMkKSFIIRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8A/SzogAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADnnyxhw2yT08MewEi3M95M6xeKx2REfOFxnXn8lvfuf01/Iw0/kt79z+mv5GGn8lvfuf01/Iw0/kt79z+mv5GGva8z3kTrN4t+ExHy0MNb9pzGmaYpeODJPs7JMXWxFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZuY+iye76oWJUvYY6ZNzWl44qzrrHuVIq/x+z+3Hxn80XD+P2f24+M/mGH8fs/tx8Z/MMZeY7Xb4tvxY6RW3FEa9JCsux29NxltS0zH6ZmJjt1hUc9xt8mDJw3/APm0eyQUNhzDj0xZZ/X7K27e/wDFFlUEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABm5j6LJ7vqhYlTeWesp3T4FSLaNAAMXNvSx5o+axKy8o9TbyT4wUinnwY8+OaXjunriUVD3O2ybfJw29n/ABt1S0yobDmHFpizT+r2VvPX+EosqgigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM3MfRZPd9ULEqbyz1lO6fAqRbRoABi5t6WPNHzWJWXlHqbeSfGCkV0Vzz4MebHNLxrHVPXE/gCJudtk2+Tht0xPTW3bDTKny3czlwzW863x9GvbHUlWNiKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzcx9Fk931QsSpvLPWU7p8CpFtGgAGXmWO+TazwxrNZi2n4QsSo1Ml6TrS01n2axOngqPv/ANW5+7f/ALSB/wCrc/dv/wBpB83y5b6cd7W09nFMz4g2cn/ev5fmlWKyKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzcx9Fk931QsSpvLPWU7p8CpFtGgAAHxOHDM6zSsz26QB/Ywfbr8IA/sYPt1+EAxc1x467es1pFZ446YiI6pWJXHk/79/L84KRWRQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGbmPosnu+qFiVN5Z6yndPgVIto0AAAAAAw839NXzx4SsSs/J/wB+/l+cFIrIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADNzH0WT3fVCxKm8s9ZTunwKkW0aAAAAAAYeb+mr548JWJWfk/wC/fy/OCkVkUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABm5j6LJ7vqhYlTeWesp3T4FSLaNAAAAAAMPN/TV88eErErPyf9+/l+cFIrIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADNzH0WT3fVCxKm8s9ZTunwKkW0aAAAAAAYeb+mr548JWJWfk/79/L84KRWRQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGbmPosnu+qFiVN5Z6yndPgVIto0AAAAAAw839NXzx4SsSs/J/37+X5wUisigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOO7xWy7e+Ov+6Y6O+J1EQrYslZmLVmJjqmGkecNuyfgBw27J+AHDbsn4AcNuyfgBw27J+AHDbsn4AcNuyfgBwW7J+AKfKtvkpNst4msTGlYnrSrFFFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeWnSJnsgEzDzTcXzUpNaaWtETpE9c6dq4mqdpisTMzpEdMyipuXm9uKYxUjh6ptr0+6FxNa9juMmfDN7xETxTEcPZpHaDQigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOObd7fDbhyX4baa6aTPR7oEe23OCtK3teIraNa69cdwrzFvNtlnhpkibdUdMT/qI7CvjLmxYo1yWivZqDnXebbLE1pkibTE6ROseKojbX1OLz18VRT5lucdcN8XF/ktEdGk+zVItT9lbb1zcWf/AGRHRrEzGvuVFrDOK2OLYoiKW6Y0jRlp9gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkc39TXyR4ysSvNrscm5p/cvfhrH6a9c9AOG5219tl4ZnXrraOhUVtpuePaf3b+2kTxz5UVItbLudx23vOkdkKjZk5TNcU2pk1vEa6aaRKauMe19Ti89fFUUOabas1ncazxREV4er2pFrFsttXcZZpaZrEV4tY74hUWcGKMWKuOJ1ivWy06AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkc39TXyR4ysStfK71naxWJ/VWZ1jv6SkZeb5KWzUrE6zSP1e/qIV12eO38bliPbfimPhp8gYtlkrj3WO9uisTpM98aKi1myUpite0xFdPay0h7X1OLz18WmVbmfo7d8eKRaxco9TbyT4wUiuigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJHN/U18keMrErnh2OfJhrlwz0zrExrpPtEdMPKs9rf5dKV6+nWf9DVxWpStKxWsaVrGkQipu65XebzfBpMT08E9Gncupjnh5XuLWj+7+ike2NdZ92hphj5fuabmtox/wCOt4nXWPZE94Y377Fky7a1Mca2mY0j2df4gzcu2m4w57WyU4azWYidYnp1jskpFFFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASOb+pr5I8ZWJW3lno698+JSNSKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9k=';
/** @type {?} */
var MODAL = {
    ALERT: {
        INFO: 'modal-alert modal-info',
        SUCCESS: 'modal-alert modal-info',
        WARNING: 'modal-alert modal-warning',
        DANGER: 'modal-alert modal-danger'
    },
    DETAIL: {
        SMALL: 'modal-sm modal-detail',
        DEFAULT: 'modal-detail',
        MEDIUM: 'modal-md modal-detail',
        LARGE: 'modal-lg modal-detail',
        XL: 'modal-xl modal-detail'
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ImageService = /** @class */ (function () {
    function ImageService(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} file
     * @param {?} callback
     * @return {?}
     */
    ImageService.prototype.imageBase64fromFile = /**
     * @param {?} file
     * @param {?} callback
     * @return {?}
     */
    function (file, callback) {
        /** @type {?} */
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (/**
         * @return {?}
         */
        function () {
            callback(reader.result);
        });
    };
    /**
     * @param {?} url
     * @param {?} callback
     * @return {?}
     */
    ImageService.prototype.imageBase64fromUrl = /**
     * @param {?} url
     * @param {?} callback
     * @return {?}
     */
    function (url, callback) {
        /** @type {?} */
        var xhr = new XMLHttpRequest();
        xhr.onload = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var reader = new FileReader();
            reader.onloadend = (/**
             * @return {?}
             */
            function () {
                callback(reader.result);
            });
            reader.readAsDataURL(xhr.response);
        });
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    };
    ImageService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    ImageService.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"] }
    ]; };
    return ImageService;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiiImageUploadComponent = /** @class */ (function () {
    function UiiImageUploadComponent(imageSvc) {
        this.imageSvc = imageSvc;
        this.required = false;
        this.fileType = ['png'];
        this.imageSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fileOversize = false;
        this.fileNotAllowed = false;
    }
    /**
     * @return {?}
     */
    UiiImageUploadComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.fileTypeAllowed = '';
        this.fileType.forEach((/**
         * @param {?} type
         * @param {?} index
         * @return {?}
         */
        function (type, index) {
            if (index > 0) {
                _this.fileTypeAllowed += ', ';
            }
            _this.fileTypeAllowed += '*.' + type;
        }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UiiImageUploadComponent.prototype.onFileChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.target.files.length > 0) {
            /** @type {?} */
            var file_1 = event.target.files[0];
            this.imageBase64 = IMAGE_PLACEHOLDER;
            /** @type {?} */
            var typeAllowed = this.fileType.filter((/**
             * @param {?} type
             * @return {?}
             */
            function (type) { return file_1.type === 'image/' + type; }));
            this.imageSelected.emit(null);
            if (typeAllowed.length === 0) {
                this.fileNotAllowed = true;
                return;
            }
            if (file_1.size >= this.maxFileSize) {
                this.fileOversize = true;
                return;
            }
            this.fileOversize = false;
            this.fileNotAllowed = false;
            /** @type {?} */
            var self_1 = this;
            this.imageSvc.imageBase64fromFile(file_1, (/**
             * @param {?} base64
             * @return {?}
             */
            function (base64) {
                self_1.imageBase64 = base64;
            }));
            this.imageSelected.emit(file_1);
        }
    };
    UiiImageUploadComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'uii-image-upload',
                    template: "<div class=\"form-upload-image\">\n  <div class=\"form-upload-image-input\">\n      <label class=\"control-label\" for=\"\">{{ label }}</label>\n      <label class=\"btn btn-primary form-control-file\">\n        Pilih gambar <input type=\"file\" (change)=\"onFileChange($event)\" #fileInput>\n      </label>\n      <div class=\"control-note\">\n        <p>Format {{ fileTypeAllowed }} <br /> Maksimal {{ maxFileSize | fileSize:'MB' }}</p>\n      </div>\n  </div>\n  <div class=\"form-upload-image-preview\">\n    <img src=\"{{ imageBase64 }}\" alt=\"\">\n  </div>\n</div>\n<div class=\"failed-upload-photo\">\n  <small *ngIf=\"fileOversize\" class=\"text-danger\">\n    Berkas melebihi ukuran\n  </small>\n  <small *ngIf=\"fileNotAllowed\" class=\"text-danger\">\n    Tipe berkas tidak diizinkan\n  </small>\n</div>"
                }] }
    ];
    /** @nocollapse */
    UiiImageUploadComponent.ctorParameters = function () { return [
        { type: ImageService }
    ]; };
    UiiImageUploadComponent.propDecorators = {
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fileType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxFileSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        imageBase64: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        imageSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return UiiImageUploadComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var WizardStepComponent = /** @class */ (function () {
    function WizardStepComponent() {
        this.hidden = false;
        this.isValid = true;
        this.isAllowed = -1;
        this.showNext = true;
        this.showPrev = true;
        // tslint:disable-next-line:no-output-on-prefix
        this.onNext = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // tslint:disable-next-line:no-output-on-prefix
        this.onPrev = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // tslint:disable-next-line:no-output-on-prefix
        this.onComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // tslint:disable-next-line:no-output-on-prefix
        this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._isActive = false;
        this.isDisabled = true;
    }
    /**
     * @return {?}
     */
    WizardStepComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    Object.defineProperty(WizardStepComponent.prototype, "isActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isActive;
        },
        set: /**
         * @param {?} isActive
         * @return {?}
         */
        function (isActive) {
            this._isActive = isActive;
            this.isDisabled = false;
        },
        enumerable: true,
        configurable: true
    });
    WizardStepComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'uii-wizard-step',
                    template: "\n    <div [hidden]=\"!isActive\">\n      <ng-content></ng-content>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    WizardStepComponent.ctorParameters = function () { return []; };
    WizardStepComponent.propDecorators = {
        activeStepIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        subtitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isValid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isAllowed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showNext: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showPrev: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onNext: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onPrev: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onComplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onCancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        isActive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['isActive',] }]
    };
    return WizardStepComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var WizardComponent = /** @class */ (function () {
    function WizardComponent() {
        this._steps = [];
        this._isCompleted = false;
        this.cancelLbl = 'Cancel';
        this.previousLbl = 'Previous';
        this.nextLbl = 'Next';
        this.doneLbl = 'Done';
        this.clickTabEnable = true;
        this.formSubmitting = false;
        // tslint:disable-next-line:no-output-on-prefix
        this.onStepChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    WizardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    WizardComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.wizardSteps.forEach((/**
         * @param {?} step
         * @return {?}
         */
        function (step) { return _this._steps.push(step); }));
        if (this.steps.length) {
            this.steps[0].isActive = true;
        }
        if (this.wizardNextTrigger) {
            this.wizardNextTrigger.subscribe((/**
             * @param {?} step
             * @return {?}
             */
            function (step) {
                /** @type {?} */
                var nextStep = _this.steps[step];
                nextStep.isDisabled = false;
                _this.activeStep = nextStep;
            }));
        }
    };
    /**
     * @return {?}
     */
    WizardComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.forceStep) {
            // this.revertToStep(this.forceStep);
        }
    };
    Object.defineProperty(WizardComponent.prototype, "steps", {
        get: /**
         * @return {?}
         */
        function () {
            return this._steps.filter((/**
             * @param {?} step
             * @return {?}
             */
            function (step) { return !step.hidden; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "isCompleted", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isCompleted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "activeStep", {
        get: /**
         * @return {?}
         */
        function () {
            return this.steps.find((/**
             * @param {?} step
             * @return {?}
             */
            function (step) { return step.isActive; }));
        },
        set: /**
         * @param {?} step
         * @return {?}
         */
        function (step) {
            if (step !== this.activeStep && !step.isDisabled) {
                this.activeStep.isActive = false;
                step.isActive = true;
                step.activeStepIndex = this.activeStepIndex;
                this.onStepChanged.emit(step);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "activeStepIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this.steps.indexOf(this.activeStep);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "hasNextStep", {
        get: /**
         * @return {?}
         */
        function () {
            return this.activeStepIndex < this.steps.length - 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "hasPrevStep", {
        get: /**
         * @return {?}
         */
        function () {
            return this.activeStepIndex > 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} step
     * @return {?}
     */
    WizardComponent.prototype.goToStep = /**
     * @param {?} step
     * @return {?}
     */
    function (step) {
        if (!this.isCompleted) {
            this.activeStep = step;
        }
    };
    /**
     * @param {?} stepIndex
     * @return {?}
     */
    WizardComponent.prototype.revertToStep = /**
     * @param {?} stepIndex
     * @return {?}
     */
    function (stepIndex) {
        this._isCompleted = false;
        /** @type {?} */
        var nextStep = this.steps[stepIndex];
        this.goToStep(nextStep);
    };
    /**
     * @return {?}
     */
    WizardComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.hasNextStep) {
            this.activeStep.onNext.emit(this.activeStepIndex);
            if (this.wizardNextTrigger) {
                this.wizardNextTrigger.subscribe((/**
                 * @param {?} step
                 * @return {?}
                 */
                function (step) {
                    /** @type {?} */
                    var nextStep = _this.steps[step];
                    nextStep.isDisabled = false;
                    _this.activeStep = nextStep;
                }));
            }
            else {
                /** @type {?} */
                var nextStep = this.steps[this.activeStepIndex + 1];
                nextStep.isDisabled = false;
                this.activeStep = nextStep;
            }
        }
    };
    /**
     * @return {?}
     */
    WizardComponent.prototype.previous = /**
     * @return {?}
     */
    function () {
        if (this.hasPrevStep) {
            this.activeStep.onPrev.emit();
            /** @type {?} */
            var prevStep = this.steps[this.activeStepIndex - 1];
            prevStep.isDisabled = false;
            this.activeStep = prevStep;
        }
    };
    /**
     * @return {?}
     */
    WizardComponent.prototype.complete = /**
     * @return {?}
     */
    function () {
        this.activeStep.onComplete.emit();
        if (this.forceStep) {
            this.revertToStep(this.forceStep);
        }
        else {
            this._isCompleted = true;
        }
    };
    /**
     * @return {?}
     */
    WizardComponent.prototype.cancel = /**
     * @return {?}
     */
    function () {
        this.activeStep.onCancel.emit();
    };
    WizardComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'uii-form-wizard',
                    template: "<div class=\"card\">\n    <div class=\"card-header\">\n      <ul class=\"nav nav-justified nav-wizard\">\n        <li\n          class=\"nav-item\"\n          *ngFor=\"let step of steps\"\n          [ngClass]=\"{'active': step.isActive, 'enabled': !step.isDisabled, 'disabled': step.isDisabled, 'completed': isCompleted}\">\n          <a (click)=\"clickTabEnable ? goToStep(step) : false;\">\n            <h3>{{step.title}}</h3>\n            <p *ngIf=\"step.subtitle\">{{step.subtitle}}</p>\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"card-block\">\n      <ng-content></ng-content>\n    </div>\n    <div class=\"card-footer\">\n        <button type=\"button\" class=\"btn btn-default float-left\" (click)=\"cancel()\">{{ pagingLabel.cancel }}</button>\n        <button\n          type=\"button\"\n          class=\"btn btn-success pull-right\"\n          (click)=\"complete()\"\n          [disabled]=\"!activeStep.isValid || formSubmitting\"\n          [hidden]=\"hasNextStep\">\n            {{ pagingLabel.done }}\n        </button>\n        <button\n          type=\"button\"\n          class=\"btn btn-primary pull-right\"\n          (click)=\"next()\"\n          [disabled]=\"!activeStep.isValid\"\n          [hidden]=\"!hasNextStep || !activeStep.showNext\">\n            {{ pagingLabel.next }} <span class=\"fa fa-arrow-right\"></span>\n        </button>\n        <button\n          type=\"button\"\n          class=\"btn btn-default pull-right\"\n          (click)=\"previous()\"\n          [hidden]=\"!hasPrevStep || !activeStep.showPrev\">\n            <span class=\"fa fa-arrow-left\"></span> {{ pagingLabel.previous }}\n        </button>\n    </div>\n  </div>",
                    styles: ['.card { height: 100%; }',
                        '.card-header { background-color: #fff; padding: 0; font-size: 1.25rem; }',
                        '.card-footer { background-color: #fff; border-top: 0 none; }',
                        '.active { font-weight: bold; color: black; border-bottom-color: #1976D2 !important; }',
                        '.enabled { cursor: pointer; border-bottom-color: rgb(88, 162, 234); }',
                        '.disabled { color: #ccc; }',
                        '.completed { cursor: default; }']
                }] }
    ];
    /** @nocollapse */
    WizardComponent.ctorParameters = function () { return []; };
    WizardComponent.propDecorators = {
        wizardSteps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [WizardStepComponent,] }],
        cancelLbl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        previousLbl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        nextLbl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        doneLbl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        clickTabEnable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        forceStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        formSubmitting: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pagingLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        wizardNextTrigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onStepChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return WizardComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PhotoUploadComponent = /** @class */ (function () {
    function PhotoUploadComponent(imageSvc) {
        this.imageSvc = imageSvc;
        this.inputLabel = 'Upload';
        this.required = false;
        this.fileType = ['png', 'jpg', 'jpeg'];
        this.maxFileSize = 5;
        this.maxFileType = 'MB';
        this.width = '120px';
        this.height = '160px';
        this.isImageExist = false;
        this.hideIconDelete = false;
        this.caption = '';
        this.imageSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fileOversize = false;
        this.fileNotAllowed = false;
        this.showCaption = true;
        this.index = 0;
    }
    /**
     * @return {?}
     */
    PhotoUploadComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.fileTypeAllowed = '';
        this.fileType.forEach((/**
         * @param {?} type
         * @param {?} index
         * @return {?}
         */
        function (type, index) {
            if (index > 0) {
                _this.fileTypeAllowed += ', ';
            }
            _this.fileTypeAllowed += '*.' + type;
        }));
        if (this.caption !== '') {
            this.showCaption = false;
        }
    };
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    PhotoUploadComponent.prototype.onFileChange = /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    function (event, index) {
        if (event.target.files.length > 0) {
            /** @type {?} */
            var file_1 = event.target.files[0];
            this.imageBase64 = IMAGE_PLACEHOLDER;
            /** @type {?} */
            var typeAllowed = this.fileType.filter((/**
             * @param {?} type
             * @return {?}
             */
            function (type) { return file_1.type === 'image/' + type || file_1.type === 'application/' + type; }));
            this.imageSelected.emit(null);
            this.fileOversize = false;
            this.fileNotAllowed = false;
            if (typeAllowed.length === 0) {
                this.onImageDelete();
                this.fileNotAllowed = true;
                return;
            }
            if (file_1.size >= this.maxFileSize) {
                this.onImageDelete();
                this.fileOversize = true;
                return;
            }
            if (file_1.type === 'application/pdf') {
                this.imageBase64 = IMAGE_PDF_PLACEHOLDER;
            }
            else {
                // tslint:disable-next-line: no-shadowed-variable
                /** @type {?} */
                var self_1 = this;
                this.imageSvc.imageBase64fromFile(file_1, (/**
                 * @param {?} base64
                 * @return {?}
                 */
                function (base64) {
                    self_1.imageBase64 = base64;
                }));
            }
            this.imageSelected.emit(file_1);
            this.isImageExist = true;
            this.index = index + 1;
        }
    };
    /**
     * @return {?}
     */
    PhotoUploadComponent.prototype.onImageDelete = /**
     * @return {?}
     */
    function () {
        this.isImageExist = false;
        this.imageSelected.emit(null);
        this.tagar.nativeElement.value = '';
    };
    PhotoUploadComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'uii-photo-upload',
                    template: "<label class=\"control-label\" [ngClass]=\"required ? 'control-required' : ''\">{{ label }}</label>\n<div class=\"form-upload-photo\" [ngStyle]=\"{'width': width, 'height': height}\">\n  <div class=\"form-upload-photo-input\">\n    <div class=\"control-label\" [ngStyle]=\"isImageExist ? {'display': 'none'} : ''\">\n        <label class=\"btn btn-primary form-control-file\">\n            {{inputLabel}}\n            <input #tagar type=\"file\" (change)=\"onFileChange($event, index)\" #fileInput>\n        </label>\n        <div class=\"control-note\">\n          <p *ngIf=\"showCaption\">Format<br/> {{ fileTypeAllowed }} <br /> maximal {{ maxFileSize | fileSize:maxFileType }}</p>\n          <p *ngIf=\"!showCaption\">{{ caption }}</p>\n          \n      </div>\n    </div>\n  </div>\n  <div class=\"form-upload-photo-preview\" [ngClass]=\"isImageExist ? 'showImage' : '' \">\n      <img src=\"{{ imageBase64 }}\" alt=\"\">\n      <div class=\"change-photo\" [ngClass]=\"hideIconDelete ? 'showIcon' : '' \">\n          <span class=\"fa fa-edit\" >\n            <input  #tagar type=\"file\" (change)=\"onFileChange($event, index)\" #fileInput>\n          </span>\n          <span class=\"fa fa-times\" [ngClass]=\"hideIconDelete ? 'showIcon' : '' \" (click)=\"onImageDelete()\"></span>\n      </div>\n      \n  </div>\n  <div class=\"form-upload-photo-failed\" [ngStyle]=\"{'top': height}\">\n      <small *ngIf=\"fileOversize\" class=\"text-danger\">\n        Berkas melebihi ukuran\n      </small>\n      <small *ngIf=\"fileNotAllowed\" class=\"text-danger\">\n        Tipe berkas tidak diizinkan\n      </small>\n  </div>\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    PhotoUploadComponent.ctorParameters = function () { return [
        { type: ImageService }
    ]; };
    PhotoUploadComponent.propDecorators = {
        tagar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['tagar',] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        inputLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fileType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxFileSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxFileType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        imageBase64: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isImageExist: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hideIconDelete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        caption: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        imageSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return PhotoUploadComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Toast = /** @class */ (function () {
    function Toast(type, title, description, timeOut, index, removeOnClick) {
        this.type = type;
        this.title = title;
        this.description = description;
        this.timeOut = timeOut;
        this.index = index;
        this.removeOnClick = removeOnClick;
    }
    return Toast;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ToastService = /** @class */ (function () {
    function ToastService(factoryResolver) {
        this.factoryResolver = factoryResolver;
        this.toasts = [];
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.toastHovered = false;
    }
    /**
     * @param {?} viewContainerRef
     * @return {?}
     */
    ToastService.prototype.setToastRootViewContainerRef = /**
     * @param {?} viewContainerRef
     * @return {?}
     */
    function (viewContainerRef) {
        this.rootViewContainer = viewContainerRef;
    };
    /**
     * @return {?}
     */
    ToastService.prototype.addToastDynamicComponent = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var factory = this.factoryResolver.resolveComponentFactory(ToastComponent);
        /** @type {?} */
        var component = factory.create(this.rootViewContainer.parentInjector);
        this.rootViewContainer.insert(component.hostView);
    };
    /**
     * @param {?} description
     * @param {?=} title
     * @param {?=} config
     * @param {?=} callback
     * @return {?}
     */
    ToastService.prototype.error = /**
     * @param {?} description
     * @param {?=} title
     * @param {?=} config
     * @param {?=} callback
     * @return {?}
     */
    function (description, title, config, callback) {
        /** @type {?} */
        var message = new Toast('error', title ? title : '', description ? description : '', config ? config.timeOut : 5000, this.toasts.length, config ? config.removeOnClick : false);
        this.pushToast(message);
        // an optional callback provided if only developers want to execute something after a toast has been pushed.
        if (callback) {
            callback();
        }
    };
    /**
     * @param {?} description
     * @param {?=} title
     * @param {?=} config
     * @param {?=} callback
     * @return {?}
     */
    ToastService.prototype.info = /**
     * @param {?} description
     * @param {?=} title
     * @param {?=} config
     * @param {?=} callback
     * @return {?}
     */
    function (description, title, config, callback) {
        /** @type {?} */
        var message = new Toast('info', title ? title : '', description ? description : '', config ? config.timeOut : 5000, this.toasts.length, config ? config.removeOnClick : false);
        this.pushToast(message);
        // an optional callback provided if only developers want to execute something after a toast has been pushed.
        if (callback) {
            callback();
        }
    };
    /**
     * @param {?} description
     * @param {?=} title
     * @param {?=} config
     * @param {?=} callback
     * @return {?}
     */
    ToastService.prototype.success = /**
     * @param {?} description
     * @param {?=} title
     * @param {?=} config
     * @param {?=} callback
     * @return {?}
     */
    function (description, title, config, callback) {
        /** @type {?} */
        var message = new Toast('success', title ? title : '', description ? description : '', config ? config.timeOut : 5000, this.toasts.length, config ? config.removeOnClick : false);
        this.pushToast(message);
        // an optional callback provided if only developers want to execute something after a toast has been pushed.
        if (callback) {
            callback();
        }
    };
    /**
     * @param {?} description
     * @param {?=} title
     * @param {?=} config
     * @param {?=} callback
     * @return {?}
     */
    ToastService.prototype.warning = /**
     * @param {?} description
     * @param {?=} title
     * @param {?=} config
     * @param {?=} callback
     * @return {?}
     */
    function (description, title, config, callback) {
        /** @type {?} */
        var message = new Toast('warning', title ? title : '', description ? description : '', config ? config.timeOut : 5000, this.toasts.length, config ? config.removeOnClick : false);
        this.pushToast(message);
        // an optional callback provided if only developers want to execute something after a toast has been pushed.
        if (callback) {
            callback();
        }
    };
    /**
     * @private
     * @param {?} message
     * @return {?}
     */
    ToastService.prototype.pushToast = /**
     * @private
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.toasts.push(message);
        this.subject.next(this.toasts);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    ToastService.prototype.removeToast = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.toasts = this.toasts.filter((/**
         * @param {?} toast
         * @return {?}
         */
        function (toast) {
            return toast.index !== index;
        }));
        this.subject.next(this.toasts);
    };
    /**
     * @return {?}
     */
    ToastService.prototype.retrieveToast = /**
     * @return {?}
     */
    function () {
        return this.subject.asObservable();
    };
    ToastService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ToastService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }
    ]; };
    /** @nocollapse */ ToastService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function ToastService_Factory() { return new ToastService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"])); }, token: ToastService, providedIn: "root" });
    return ToastService;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ToastComponent = /** @class */ (function () {
    function ToastComponent(toastSvc) {
        this.toastSvc = toastSvc;
    }
    /**
     * @return {?}
     */
    ToastComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    ToastComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscription = this.toastSvc.retrieveToast().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            _this.toasts = result;
        }));
    };
    /**
     * @param {?} index
     * @return {?}
     */
    ToastComponent.prototype.removeToast = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.toastSvc.removeToast(index);
    };
    ToastComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'uii-toast',
                    template: "\n  <div class=\"container uii-toast uii-toast-fixed\">\n    <div class=\"row\">\n      <div\n        class=\"col-xs-9 col-xs-offset-3 uii-toast-box\"\n        [ngClass]=\"{\n          'uii-toast-box-success': toast.type === 'success',\n          'uii-toast-box-warning': toast.type === 'warning',\n          'uii-toast-box-error': toast.type === 'error',\n          'uii-toast-box-info': toast.type === 'info'\n        }\"\n        *ngFor=\"let toast of toasts; let i = index\"\n        uiiToast\n        [timeOut]=toast.timeOut\n        [toastIndex]=toast.index\n        [removeOnClick]=\"toast.removeOnClick\"\n      >\n        <div class=\"col-xs-12 padding-0\">\n          <p class=\"uii-toast-title margin-0\"><strong>{{ toast.title }}</strong></p>\n          <p class=\"uii-toast-description margin-0\">{{ toast.description }}</p>\n        </div>\n      </div>\n    </div>\n  </div>",
                    styles: [".padding-0{padding:0}.margin-0{margin:0}.uii-toast{top:0;right:0;width:45rem;z-index:9999999;overflow:hidden;background:0 0!important}.uii-toast-title{font-size:14px;color:#fff}.uii-toast-description{word-wrap:break-word;color:#fff}.uii-toast-fixed{position:fixed}.uii-toast .row{padding:1rem 4rem;width:100%;background:0 0!important}.uii-toast-box{transition:.2s ease-in-out;padding:1.7rem;margin-top:.6rem;margin-bottom:.6rem;background-color:#fff;box-shadow:0 6px 15px rgba(36,37,38,.3);display:flex;align-items:center;opacity:0}.uii-toast-box-success{background-color:#4db6ac}.uii-toast-box-warning{background-color:#fbc02d}.uii-toast-box-error{background-color:#ff5252}.uii-toast-box-info{background-color:#0277bd}.uii-toast-symbol{width:2.5rem}.uii-toast-cancel{position:absolute;top:50%;right:1.3rem;transform:translateY(-50%)}.uii-toast-cancel:focus{outline:0}.uii-toast-cancel-image{width:1.5rem}"]
                }] }
    ];
    /** @nocollapse */
    ToastComponent.ctorParameters = function () { return [
        { type: ToastService }
    ]; };
    return ToastComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InformationComponent = /** @class */ (function () {
    function InformationComponent() {
        this.type = 'info';
        this.message = '';
    }
    /**
     * @return {?}
     */
    InformationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    InformationComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'uii-information',
                    template: "\n    <div class=\"uii-information container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 padding-0\">\n          <p class=\"uii-information-message uii-information-message-success margin-0\" *ngIf=\"type === 'success'\" [innerHTML]=\"message\"></p>\n          <p class=\"uii-information-message uii-information-message-warning margin-0\" *ngIf=\"type === 'warning'\" [innerHTML]=\"message\"></p>\n          <p class=\"uii-information-message uii-information-message-error margin-0\" *ngIf=\"type === 'error'\" [innerHTML]=\"message\"></p>\n          <p class=\"uii-information-message uii-information-message-info margin-0\" *ngIf=\"type === 'info'\" [innerHTML]=\"message\"></p>\n        </div>\n      </div>\n    </div>\n  ",
                    styles: [".border{border:1px dashed #00f}.padding-0{padding:0}.margin-0{margin:0}.uii-information-message{font-size:1.5rem;padding:1.5rem;font-weight:500;color:#555}.uii-information-message-success{background-color:#e0f2f1;border:1px solid #009688}.uii-information-message-warning{background-color:#fff9c4;border:1px solid #f9a825}.uii-information-message-error{background-color:#ffcdd2;border:1px solid #d32f2f}.uii-information-message-info{background-color:#e1f5fe;border:1px solid #01579b}"]
                }] }
    ];
    /** @nocollapse */
    InformationComponent.ctorParameters = function () { return []; };
    InformationComponent.propDecorators = {
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['type',] }],
        message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['message',] }]
    };
    return InformationComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TooltipComponent = /** @class */ (function () {
    // Constructor
    function TooltipComponent(element, cdr) {
        this.element = element;
        this.cdr = cdr;
        this.placement = 'bottom';
        this.animation = true;
        // Properties
        this.top = -100000;
        this.left = -100000;
        this.isIn = false;
        this.isFade = false;
    }
    // Lifecycle callbacks
    // Lifecycle callbacks
    /**
     * @return {?}
     */
    TooltipComponent.prototype.ngAfterViewInit = 
    // Lifecycle callbacks
    /**
     * @return {?}
     */
    function () {
        this.show();
        this.cdr.detectChanges();
    };
    // Public Methods
    // Public Methods
    /**
     * @return {?}
     */
    TooltipComponent.prototype.show = 
    // Public Methods
    /**
     * @return {?}
     */
    function () {
        if (!this.hostElement) {
            return;
        }
        /** @type {?} */
        var p = this.positionElements(this.hostElement, this.element.nativeElement.children[0], this.placement);
        this.top = p.top;
        this.left = p.left;
        this.isIn = true;
        if (this.animation) {
            this.isFade = true;
        }
    };
    /**
     * @return {?}
     */
    TooltipComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.top = -100000;
        this.left = -100000;
        this.isIn = true;
        if (this.animation) {
            this.isFade = false;
        }
    };
    // Private Methods
    // Private Methods
    /**
     * @private
     * @param {?} hostEl
     * @param {?} targetEl
     * @param {?} positionStr
     * @param {?=} appendToBody
     * @return {?}
     */
    TooltipComponent.prototype.positionElements = 
    // Private Methods
    /**
     * @private
     * @param {?} hostEl
     * @param {?} targetEl
     * @param {?} positionStr
     * @param {?=} appendToBody
     * @return {?}
     */
    function (hostEl, targetEl, positionStr, appendToBody) {
        if (appendToBody === void 0) { appendToBody = false; }
        /** @type {?} */
        var positionStrParts = positionStr.split('-');
        /** @type {?} */
        var positionStart = positionStrParts[0];
        /** @type {?} */
        var positionEnd = positionStrParts[1] || 'center';
        /** @type {?} */
        var hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);
        /** @type {?} */
        var targetElWidth = targetEl.offsetWidth;
        /** @type {?} */
        var targetElHeight = targetEl.offsetHeight;
        /** @type {?} */
        var shiftWidth = {
            center: (/**
             * @return {?}
             */
            function () {
                return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
            }),
            left: (/**
             * @return {?}
             */
            function () {
                return hostElPos.left;
            }),
            right: (/**
             * @return {?}
             */
            function () {
                return hostElPos.left + hostElPos.width;
            })
        };
        /** @type {?} */
        var shiftHeight = {
            center: (/**
             * @return {?}
             */
            function () {
                return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
            }),
            top: (/**
             * @return {?}
             */
            function () {
                return hostElPos.top;
            }),
            bottom: (/**
             * @return {?}
             */
            function () {
                return hostElPos.top + hostElPos.height;
            })
        };
        /** @type {?} */
        var targetElPos;
        switch (positionStart) {
            case 'right':
                targetElPos = {
                    top: shiftHeight[positionEnd](),
                    left: shiftWidth[positionStart]()
                };
                break;
            case 'left':
                targetElPos = {
                    top: shiftHeight[positionEnd](),
                    left: hostElPos.left - targetElWidth
                };
                break;
            case 'bottom':
                targetElPos = {
                    top: shiftHeight[positionStart](),
                    left: shiftWidth[positionEnd]()
                };
                break;
            default:
                targetElPos = {
                    top: hostElPos.top - targetElHeight,
                    left: shiftWidth[positionEnd]()
                };
                break;
        }
        return targetElPos;
    };
    /**
     * @private
     * @param {?} nativeEl
     * @return {?}
     */
    TooltipComponent.prototype.position = /**
     * @private
     * @param {?} nativeEl
     * @return {?}
     */
    function (nativeEl) {
        /** @type {?} */
        var offsetParentBCR = { top: 0, left: 0 };
        /** @type {?} */
        var elBoundingClientRect = this.offset(nativeEl);
        /** @type {?} */
        var offsetParentEl = this.parentOffsetEl(nativeEl);
        if (offsetParentEl !== window.document) {
            offsetParentBCR = this.offset(offsetParentEl);
            offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
            offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
        }
        /** @type {?} */
        var boundingClientRect = nativeEl.getBoundingClientRect();
        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: elBoundingClientRect.top - offsetParentBCR.top,
            left: elBoundingClientRect.left - offsetParentBCR.left
        };
    };
    /**
     * @private
     * @param {?} nativeEl
     * @return {?}
     */
    TooltipComponent.prototype.offset = /**
     * @private
     * @param {?} nativeEl
     * @return {?}
     */
    function (nativeEl) {
        /** @type {?} */
        var boundingClientRect = nativeEl.getBoundingClientRect();
        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: boundingClientRect.top + (window.pageYOffset || window.document.documentElement.scrollTop),
            left: boundingClientRect.left + (window.pageXOffset || window.document.documentElement.scrollLeft)
        };
    };
    /**
     * @private
     * @param {?} nativeEl
     * @param {?} cssProp
     * @return {?}
     */
    TooltipComponent.prototype.getStyle = /**
     * @private
     * @param {?} nativeEl
     * @param {?} cssProp
     * @return {?}
     */
    function (nativeEl, cssProp) {
        if (((/** @type {?} */ (nativeEl))).currentStyle) { // IE
            return ((/** @type {?} */ (nativeEl))).currentStyle[cssProp];
        }
        if (window.getComputedStyle) {
            return ((/** @type {?} */ (window.getComputedStyle(nativeEl))))[cssProp];
        }
        // finally try and get inline style
        return ((/** @type {?} */ (nativeEl.style)))[cssProp];
    };
    /**
     * @private
     * @param {?} nativeEl
     * @return {?}
     */
    TooltipComponent.prototype.isStaticPositioned = /**
     * @private
     * @param {?} nativeEl
     * @return {?}
     */
    function (nativeEl) {
        return (this.getStyle(nativeEl, 'position') || 'static') === 'static';
    };
    /**
     * @private
     * @param {?} nativeEl
     * @return {?}
     */
    TooltipComponent.prototype.parentOffsetEl = /**
     * @private
     * @param {?} nativeEl
     * @return {?}
     */
    function (nativeEl) {
        /** @type {?} */
        var offsetParent = nativeEl.offsetParent || window.document;
        while (offsetParent && offsetParent !== window.document && this.isStaticPositioned(offsetParent)) {
            offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || window.document;
    };
    TooltipComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'uii-tooltip',
                    template: "\n<span class='uiiTooltip {{ placement }}'\n     [style.top]=\"top + 'px'\"\n     [style.left]=\"left + 'px'\"\n     [class.in]='isIn'\n     [class.fade]='isFade'\n     role='tooltip'>\n    <span class='tooltip-arrow'></span>\n    <span class='tooltip-inner'>\n        <ng-content></ng-content>\n        {{ content }}\n    </span>\n</span>\n",
                    styles: [".uiiTooltip{position:absolute;z-index:999;display:block;font-size:12px;animation:.7s fadein;-moz-animation:.7s fadein;-webkit-animation:.7s fadein;-o-animation:.7s fadein}.uiiTooltip.in{opacity:.9}.uiiTooltip.top{margin-top:-3px;padding:5px 0}.uiiTooltip.right{margin-left:3px;padding:0 5px}.uiiTooltip.bottom{margin-top:3px;padding:5px 0}.uiiTooltip.left{margin-left:-3px;padding:0 5px}.tooltip-inner{max-width:200px;padding:3px 8px;color:#fff;text-align:center;background-color:#000;border-radius:.4em;box-shadow:0 3px 6px rgba(0,0,0,.5)}.tooltip-arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.uiiTooltip.top .tooltip-arrow{bottom:0;left:50%;margin-left:-5px;border-width:5px 5px 0;border-top-color:#000}.uiiTooltip.top-left .tooltip-arrow{bottom:0;right:5px;margin-bottom:-5px;border-width:5px 5px 0;border-top-color:#000}.uiiTooltip.top-right .tooltip-arrow{bottom:0;left:5px;margin-bottom:-5px;border-width:5px 5px 0;border-top-color:#000}.uiiTooltip.right .tooltip-arrow{top:50%;left:0;margin-top:-5px;border-width:5px 5px 5px 0;border-right-color:#000}.uiiTooltip.left .tooltip-arrow{top:50%;right:0;margin-top:-5px;border-width:5px 0 5px 5px;border-left-color:#000}.uiiTooltip.bottom .tooltip-arrow{top:0;left:50%;margin-left:-5px;border-width:0 5px 5px;border-bottom-color:#000}.uiiTooltip.bottom-left .tooltip-arrow{top:0;right:5px;margin-top:-5px;border-width:0 5px 5px;border-bottom-color:#000}.uiiTooltip.bottom-right .tooltip-arrow{top:0;left:5px;margin-top:-5px;border-width:0 5px 5px;border-bottom-color:#000}@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}"]
                }] }
    ];
    /** @nocollapse */
    TooltipComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    TooltipComponent.propDecorators = {
        hostElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        animation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return TooltipComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileSizePipe = /** @class */ (function () {
    function FileSizePipe() {
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    FileSizePipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    function (value, args) {
        try {
            if (args) {
                /** @type {?} */
                var size = void 0;
                switch (args) {
                    case 'KB':
                        if (value >= 1024) {
                            size = (value / 1024) + 'KB';
                        }
                        else {
                            size = value + 'B';
                        }
                        break;
                    case 'MB':
                        if (value >= (1024 * 1024)) {
                            size = (value / (1024 * 1024)) + 'MB';
                        }
                        else {
                            size = value + 'B';
                        }
                        break;
                    default:
                        break;
                }
                return size;
            }
            return value;
        }
        catch (error) {
            console.log(error);
            return value;
        }
    };
    FileSizePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: 'fileSize'
                },] }
    ];
    return FileSizePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var LoadingBarEventType = {
    PROGRESS: 0,
    HEIGHT: 1,
    COLOR: 2,
    VISIBLE: 3,
};
LoadingBarEventType[LoadingBarEventType.PROGRESS] = 'PROGRESS';
LoadingBarEventType[LoadingBarEventType.HEIGHT] = 'HEIGHT';
LoadingBarEventType[LoadingBarEventType.COLOR] = 'COLOR';
LoadingBarEventType[LoadingBarEventType.VISIBLE] = 'VISIBLE';
/**
 * @param {?} obj
 * @return {?}
 */
function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
var LoadingBarEvent = /** @class */ (function () {
    function LoadingBarEvent(type, value) {
        this.type = type;
        this.value = value;
    }
    return LoadingBarEvent;
}());
if (false) {}
var LoadingBarService = /** @class */ (function () {
    function LoadingBarService() {
        this._progress = 0;
        this._height = '2px';
        this._color = 'firebrick';
        this._visible = true;
        this._intervalCounterId = 0;
        this.interval = 500; // in milliseconds
        // in milliseconds
        this.eventSource = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.events = this.eventSource.asObservable();
    }
    Object.defineProperty(LoadingBarService.prototype, "progress", {
        get: /**
         * @return {?}
         */
        function () {
            return this._progress;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isPresent(value)) {
                if (value > 0) {
                    this.visible = true;
                }
                this._progress = value;
                this.emitEvent(new LoadingBarEvent(LoadingBarEventType.PROGRESS, this._progress));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadingBarService.prototype, "height", {
        get: /**
         * @return {?}
         */
        function () {
            return this._height;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isPresent(value)) {
                this._height = value;
                this.emitEvent(new LoadingBarEvent(LoadingBarEventType.HEIGHT, this._height));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadingBarService.prototype, "color", {
        get: /**
         * @return {?}
         */
        function () {
            return this._color;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isPresent(value)) {
                this._color = value;
                this.emitEvent(new LoadingBarEvent(LoadingBarEventType.COLOR, this._color));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadingBarService.prototype, "visible", {
        get: /**
         * @return {?}
         */
        function () {
            return this._visible;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isPresent(value)) {
                this._visible = value;
                this.emitEvent(new LoadingBarEvent(LoadingBarEventType.VISIBLE, this._visible));
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    LoadingBarService.prototype.emitEvent = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.eventSource) {
            // Push up a new event
            this.eventSource.next(event);
        }
    };
    /**
     * @param {?=} onCompleted
     * @return {?}
     */
    LoadingBarService.prototype.start = /**
     * @param {?=} onCompleted
     * @return {?}
     */
    function (onCompleted) {
        var _this = this;
        if (onCompleted === void 0) { onCompleted = null; }
        // Stop current timer
        this.stop();
        // Make it visible for sure
        this.visible = true;
        // Run the timer with milliseconds iterval
        this._intervalCounterId = setInterval((/**
         * @return {?}
         */
        function () {
            // Increment the progress and update view component
            _this.progress++;
            // If the progress is 100% - call complete
            if (_this.progress === 100) {
                _this.complete(onCompleted);
            }
        }), this.interval);
    };
    /**
     * @return {?}
     */
    LoadingBarService.prototype.stop = /**
     * @return {?}
     */
    function () {
        if (this._intervalCounterId) {
            clearInterval(this._intervalCounterId);
            this._intervalCounterId = null;
        }
    };
    /**
     * @return {?}
     */
    LoadingBarService.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.stop();
        this.progress = 0;
    };
    /**
     * @param {?=} onCompleted
     * @return {?}
     */
    LoadingBarService.prototype.complete = /**
     * @param {?=} onCompleted
     * @return {?}
     */
    function (onCompleted) {
        var _this = this;
        if (onCompleted === void 0) { onCompleted = null; }
        this.progress = 100;
        this.stop();
        setTimeout((/**
         * @return {?}
         */
        function () {
            // Hide it away
            _this.visible = false;
            setTimeout((/**
             * @return {?}
             */
            function () {
                // Drop to 0
                _this.progress = 0;
                if (onCompleted) {
                    onCompleted();
                }
            }), 250);
        }), 250);
    };
    LoadingBarService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    LoadingBarService.ctorParameters = function () { return []; };
    return LoadingBarService;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TabsetDirective = /** @class */ (function () {
    function TabsetDirective(tabset, elRef) {
        this.elRef = elRef;
        this.addClass = true;
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deselected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tabset = tabset;
        this.tabset.addTab(this);
    }
    Object.defineProperty(TabsetDirective.prototype, "active", {
        get: /**
         * @return {?}
         */
        function () {
            return this._active;
        },
        set: /**
         * @param {?} active
         * @return {?}
         */
        function (active) {
            if (this._active && !active) {
                this.deselected.emit(this);
            }
            this._active = active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsetDirective.prototype, "selectedTab", {
        set: /**
         * @param {?} tab
         * @return {?}
         */
        function (tab) {
            this.selected.emit(tab);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TabsetDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    TabsetDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'uiiTabItem, [uiiTabItem]'
                },] }
    ];
    /** @nocollapse */
    TabsetDirective.ctorParameters = function () { return [
        { type: TabsetComponent },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    TabsetDirective.propDecorators = {
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tabIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.tab-active',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectedTab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        addClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.tab-pane',] }],
        selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        deselected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return TabsetDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ToastDirective = /** @class */ (function () {
    function ToastDirective(renderer, hostElement, toastSvc) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.toastSvc = toastSvc;
        this.mouseClickCounter = 0;
        this.mouseOverCounter = 0;
    }
    /**
     * @return {?}
     */
    ToastDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.initToastInterval();
        this._fadeInTimeOut = setTimeout((/**
         * @return {?}
         */
        function () {
            _this.renderer.setStyle(_this.hostElement.nativeElement, 'opacity', '1');
            _this.createToastFadeOutBehaviour(_this.timeOut);
        }), 50);
    };
    /**
     * @param {?} remainingTimeOut
     * @return {?}
     */
    ToastDirective.prototype.createToastFadeOutBehaviour = /**
     * @param {?} remainingTimeOut
     * @return {?}
     */
    function (remainingTimeOut) {
        var _this = this;
        this._fadeOutTimeout = setTimeout((/**
         * @return {?}
         */
        function () {
            _this.renderer.setStyle(_this.hostElement.nativeElement, 'opacity', '0');
            _this._removeTimeout = setTimeout((/**
             * @return {?}
             */
            function () {
                _this.toastSvc.removeToast(_this.toastIndex);
            }), 170);
        }), remainingTimeOut);
    };
    /**
     * @return {?}
     */
    ToastDirective.prototype.initToastInterval = /**
     * @return {?}
     */
    function () {
        this.start = new Date();
        this.remaining = this.timeOut;
    };
    /**
     * @return {?}
     */
    ToastDirective.prototype.pauseToastInterval = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var current = new Date();
        this.remaining = this.remaining - (current - this.start);
    };
    /**
     * @return {?}
     */
    ToastDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (this.removeOnClick) {
            if (this.mouseClickCounter < 1) {
                clearTimeout(this._fadeOutTimeout);
                this.renderer.setStyle(this.hostElement.nativeElement, 'opacity', '1');
            }
            else {
                this.createToastFadeOutBehaviour(1);
            }
            this.mouseClickCounter++;
        }
    };
    /**
     * @return {?}
     */
    ToastDirective.prototype.onMouseHover = /**
     * @return {?}
     */
    function () {
        this.renderer.setStyle(this.hostElement.nativeElement, 'cursor', 'pointer');
        if (this.mouseOverCounter < 1) {
            clearTimeout(this._fadeOutTimeout);
            this.pauseToastInterval();
            this.renderer.setStyle(this.hostElement.nativeElement, 'opacity', '0.95');
        }
        this.mouseOverCounter++;
    };
    /**
     * @return {?}
     */
    ToastDirective.prototype.onMouseLeave = /**
     * @return {?}
     */
    function () {
        if (!(this.mouseClickCounter > 0)) {
            this.renderer.setStyle(this.hostElement.nativeElement, 'cursor', 'default');
            this.mouseOverCounter = 0;
            this.createToastFadeOutBehaviour(this.remaining);
            this.renderer.setStyle(this.hostElement.nativeElement, 'opacity', '1');
        }
    };
    ToastDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[uiiToast]'
                },] }
    ];
    /** @nocollapse */
    ToastDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: ToastService }
    ]; };
    ToastDirective.propDecorators = {
        timeOut: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['timeOut',] }],
        toastIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['toastIndex',] }],
        removeOnClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['removeOnClick',] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }],
        onMouseHover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseover',] }],
        onMouseLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseleave',] }]
    };
    return ToastDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TooltipDirective = /** @class */ (function () {
    function TooltipDirective(viewContainerRef, resolver) {
        this.viewContainerRef = viewContainerRef;
        this.resolver = resolver;
        this.tooltipAnimation = true;
        this.tooltipPlacement = 'top';
    }
    // Public Methods
    // Public Methods
    /**
     * @return {?}
     */
    TooltipDirective.prototype.show = 
    // Public Methods
    /**
     * @return {?}
     */
    function () {
        if (this.tooltipDisabled || this.visible) {
            return;
        }
        this.visible = true;
        if (typeof this.content === 'string') {
            /** @type {?} */
            var factory = this.resolver.resolveComponentFactory(TooltipComponent);
            if (!this.visible) {
                return;
            }
            this.tooltip = this.viewContainerRef.createComponent(factory);
            this.tooltip.instance.hostElement = this.viewContainerRef.element.nativeElement;
            this.tooltip.instance.content = (/** @type {?} */ (this.content));
            this.tooltip.instance.placement = this.tooltipPlacement;
            this.tooltip.instance.animation = this.tooltipAnimation;
        }
        else {
            /** @type {?} */
            var tooltip = (/** @type {?} */ (this.content));
            tooltip.hostElement = this.viewContainerRef.element.nativeElement;
            tooltip.placement = this.tooltipPlacement;
            tooltip.animation = this.tooltipAnimation;
            tooltip.show();
        }
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.hide = /**
     * @return {?}
     */
    function () {
        if (!this.visible) {
            return;
        }
        this.visible = false;
        if (this.tooltip) {
            this.tooltip.destroy();
        }
        if (this.content instanceof TooltipComponent) {
            ((/** @type {?} */ (this.content))).hide();
        }
    };
    TooltipDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[uiiTooltip]'
                },] }
    ];
    /** @nocollapse */
    TooltipDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }
    ]; };
    TooltipDirective.propDecorators = {
        content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['uiiTooltip',] }],
        tooltipDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipAnimation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tooltipPlacement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        show: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['focusin',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseenter',] }],
        hide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['focusout',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseleave',] }]
    };
    return TooltipDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CollapseDirective = /** @class */ (function () {
    function CollapseDirective(renderer, hostElement, accordionSvc) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.accordionSvc = accordionSvc;
        /**
         * turn on/off animation
         */
        this.isAnimated = false;
        /**
         * styles which will be applied if isAnimated = false
         */
        this.DISPLAY_SHOW_VALUE = 'block';
        this.DISPLAY_HIDE_VALUE = 'none';
        /**
         * a class which will be applied if isAnimated = false
         */
        this.DISPLAY_NONE_CLASS = 'uii-accordion-group-content-none';
        /**
         * a class which will be applied if isAnimated = true
         */
        this.DISPLAY_ANIMATED_CLASS = 'uii-accordion-group-content-hide';
        /**
         * store temporary changing height
         */
        this.tempHeight = 0;
    }
    Object.defineProperty(CollapseDirective.prototype, "isOpen", {
        /** update accordion group condition */
        set: /**
         * update accordion group condition
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.initOpenStatus(this.accordionSvc.getIsAnimated(), value);
            this.changeOpenStatus(this.accordionSvc.getIsAnimated(), value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CollapseDirective.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        if (this.hostElement.nativeElement.clientHeight !== this.tempHeight) {
            this.tempHeight = this.hostElement.nativeElement.clientHeight;
        }
    };
    /**
     * @param {?} isAnimated
     * @param {?} isOpen
     * @return {?}
     */
    CollapseDirective.prototype.initOpenStatus = /**
     * @param {?} isAnimated
     * @param {?} isOpen
     * @return {?}
     */
    function (isAnimated, isOpen) {
        if (!isAnimated) {
            this.renderer.removeClass(this.hostElement.nativeElement, 'uii-accordion-group-content-hide');
            if (isOpen) {
                this.renderer.setStyle(this.hostElement.nativeElement, 'display', this.DISPLAY_SHOW_VALUE);
            }
            else {
                this.renderer.setStyle(this.hostElement.nativeElement, 'display', this.DISPLAY_HIDE_VALUE);
            }
        }
        else {
            this.renderer.removeClass(this.hostElement.nativeElement, 'uii-accordion-group-content-none');
            if (isOpen) {
                /** @type {?} */
                var content = this.hostElement.nativeElement.scrollHeight;
                this.renderer.setStyle(this.hostElement.nativeElement, 'max-height', content + 'px');
            }
            else {
                this.renderer.setStyle(this.hostElement.nativeElement, 'max-height', 0 + 'px');
            }
        }
    };
    /**
     * @param {?} isAnimated
     * @param {?} isOpen
     * @return {?}
     */
    CollapseDirective.prototype.changeOpenStatus = /**
     * @param {?} isAnimated
     * @param {?} isOpen
     * @return {?}
     */
    function (isAnimated, isOpen) {
        var _this = this;
        if (!isAnimated) {
            this.renderer.removeClass(this.hostElement.nativeElement, 'uii-accordion-group-content-hide');
            if (isOpen) {
                this.renderer.setStyle(this.hostElement.nativeElement, 'display', this.DISPLAY_SHOW_VALUE);
            }
            else {
                this.renderer.setStyle(this.hostElement.nativeElement, 'display', this.DISPLAY_HIDE_VALUE);
            }
        }
        else {
            this.renderer.removeClass(this.hostElement.nativeElement, 'uii-accordion-group-content-none');
            if (isOpen) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.renderer.setStyle(_this.hostElement.nativeElement, 'overflow', 'hidden');
                }), 1);
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var content = _this.hostElement.nativeElement.scrollHeight;
                    _this.renderer.setStyle(_this.hostElement.nativeElement, 'max-height', content + 'px');
                }), 2);
            }
            else {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.renderer.setStyle(_this.hostElement.nativeElement, 'overflow', 'hidden');
                }), 1);
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.renderer.setStyle(_this.hostElement.nativeElement, 'max-height', 0 + 'px');
                }), 2);
                this.renderer.setStyle(this.hostElement.nativeElement, 'max-height', this.tempHeight + 'px');
            }
        }
    };
    /**
     * @return {?}
     */
    CollapseDirective.prototype.onTransitionEnd = /**
     * @return {?}
     */
    function () {
        if (this.selectedGroup) {
            this.renderer.setStyle(this.hostElement.nativeElement, 'max-height', 'none');
            this.renderer.setStyle(this.hostElement.nativeElement, 'overflow', 'visible');
        }
    };
    CollapseDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[uiiCollapse]'
                },] }
    ];
    /** @nocollapse */
    CollapseDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: AccordionService }
    ]; };
    CollapseDirective.propDecorators = {
        isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectedGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onTransitionEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['transitionend',] }]
    };
    return CollapseDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ChipsComponent = /** @class */ (function () {
    function ChipsComponent() {
        this.disabled = false;
        this.items = [];
        this.position = 'horizontal';
        this.sendData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isSelected = [];
        this.selectedData = [];
        this.isDefault = [];
    }
    /**
     * @return {?}
     */
    ChipsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        for (var i = 0; i < this.items.length; i++) {
            if (this.disabled === false) {
                this.isDefault[i] = true;
            }
            else {
                this.isDefault[i] = false;
            }
        }
    };
    /**
     * @param {?} index
     * @param {?} item
     * @param {?} $event
     * @return {?}
     */
    ChipsComponent.prototype.onChangeOptions = /**
     * @param {?} index
     * @param {?} item
     * @param {?} $event
     * @return {?}
     */
    function (index, item, $event) {
        /** @type {?} */
        var selected = $event.target.checked;
        this.isSelected[index] = selected;
        if (selected) {
            this.selectedData.push(item);
        }
        else {
            /** @type {?} */
            var deleteData = this.selectedData.indexOf(item);
            if (deleteData !== -1) {
                this.selectedData.splice(deleteData, 1);
            }
        }
        this.sendData.emit(this.selectedData);
    };
    ChipsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'uii-chips',
                    template: "<div class=\"display\">\n  <div class=\"checkbox\" [ngClass]=\"{'vertical': position === 'vertical', 'horizontal': position === 'horizontal'}\" *ngFor=\"let item of items; let i = index;\">\n    <label class=\"form-check-label\" [ngClass]=\"{\n          'default': isDefault[i] === true,\n          'disable': isDefault[i] === false,\n          'selected-options': isSelected[i] === true,\n          'unselected-options': isSelected[i] === false\n        }\">\n      <input type=\"checkbox\" [name]=\"item.label\" [value]=\"item.value\" [disabled]=\"disabled\"\n        (change)=\"onChangeOptions(i, item, $event)\"/>\n      {{ item.label }}</label>\n  </div>\n</div>",
                    styles: [".dislpay{display:block}.checkbox input[type=checkbox]{opacity:0}.chips{display:inline-block;margin:5px}.checkbox label{position:relative;display:inline-block;text-align:center;padding:5px 10px}.vertical{display:block;margin-top:5px}.horizontal{display:inline-block;padding-right:10px}.checkbox .unselected-options{height:35px;width:auto;left:0;top:-3px;padding:5px 10px;border-radius:5px;border:2px solid #03337b;background-color:#fff;font-weight:700;color:#03337b!important}.checkbox .selected-options{height:35px;width:auto;left:0;top:-3px;padding:5px 10px;border-radius:5px;background-color:#03337b;border:2px solid #00337b;font-weight:700;color:#fff!important}.checkbox .default{height:35px;width:auto;padding:5px 10px;left:0;top:-3px;border-radius:5px;border:2px solid #03337b;font-weight:700;color:#03337b}.disable{height:35px;width:auto;left:0;top:-3px;border-radius:5px;padding:5px 10px;background-color:#abbbbb;border:2px solid #abbbbb;opacity:80%;font-weight:700;color:#fff!important;cursor:not-allowed}"]
                }] }
    ];
    /** @nocollapse */
    ChipsComponent.ctorParameters = function () { return []; };
    ChipsComponent.propDecorators = {
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        textClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        sendData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return ChipsComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PilarModule = /** @class */ (function () {
    function PilarModule() {
    }
    /**
     * @return {?}
     */
    PilarModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: PilarModule,
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"],
                ImageService,
                LoadingBarService,
                TablePageService,
                ToastService
            ]
        };
    };
    PilarModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        /* components */
                        PilarComponent,
                        AccordionComponent,
                        AccordionGroupComponent,
                        ClientTableComponent,
                        ConfirmdialogComponent,
                        FileUploadComponent,
                        FormWizardComponent,
                        FormWizardStepComponent,
                        InfoBoxComponent,
                        MobileFilterComponent,
                        ModalDialogComponent,
                        PaginationComponent,
                        ServerTableComponent,
                        PhotoUploadComponent,
                        SwitchComponent,
                        TableComponent,
                        TableActionComponent,
                        TableFilterComponent,
                        TableFooterComponent,
                        TableSkeletonComponent,
                        TabsetComponent,
                        UiiImageUploadComponent,
                        WizardComponent,
                        WizardStepComponent,
                        ToastComponent,
                        InformationComponent,
                        /* pipes */
                        FileSizePipe,
                        /* directives */
                        TabsetDirective,
                        SwitchComponent,
                        ToastDirective,
                        CollapseDirective,
                        TooltipComponent,
                        TooltipDirective,
                        ChipsComponent
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                        ngx_lazy_load_images__WEBPACK_IMPORTED_MODULE_6__["LazyLoadImagesModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot(),
                        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsDropdownModule"].forRoot(),
                        ngx_contextmenu__WEBPACK_IMPORTED_MODULE_5__["ContextMenuModule"].forRoot(),
                        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(),
                        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ProgressbarModule"].forRoot(),
                        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TabsModule"].forRoot(),
                        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TimepickerModule"].forRoot(),
                        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TypeaheadModule"].forRoot()
                    ],
                    exports: [
                        /* components */
                        PilarComponent,
                        AccordionComponent,
                        AccordionGroupComponent,
                        ClientTableComponent,
                        ConfirmdialogComponent,
                        ngx_contextmenu__WEBPACK_IMPORTED_MODULE_5__["ContextMenuModule"],
                        FileUploadComponent,
                        FormWizardComponent,
                        FormWizardStepComponent,
                        InfoBoxComponent,
                        MobileFilterComponent,
                        ngx_lazy_load_images__WEBPACK_IMPORTED_MODULE_6__["LazyLoadImagesModule"],
                        ModalDialogComponent,
                        PaginationComponent,
                        PhotoUploadComponent,
                        ServerTableComponent,
                        SwitchComponent,
                        TableComponent,
                        TableActionComponent,
                        TableFilterComponent,
                        TableFooterComponent,
                        TableSkeletonComponent,
                        TabsetComponent,
                        UiiImageUploadComponent,
                        WizardComponent,
                        WizardStepComponent,
                        ToastComponent,
                        TooltipComponent,
                        InformationComponent,
                        FileSizePipe,
                        /* directives */
                        TabsetDirective,
                        ToastDirective,
                        TooltipDirective,
                        CollapseDirective,
                        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"],
                        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsDropdownModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalModule"],
                        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ProgressbarModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TabsModule"],
                        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TimepickerModule"],
                        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TypeaheadModule"],
                        ChipsComponent
                    ],
                    entryComponents: [
                        ConfirmdialogComponent,
                        ToastComponent,
                        TooltipComponent
                    ],
                },] }
    ];
    return PilarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Alert = /** @class */ (function () {
    function Alert() {
    }
    return Alert;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Paginate = /** @class */ (function () {
    function Paginate() {
    }
    return Paginate;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=pilar.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.ts":
/*!************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, HostBinding, ViewContainerRef } from '@angular/core';\nimport { ToastService } from 'pilar';\n\n@Component({\n  selector: 'ugw-root',\n  template: `<router-outlet></router-outlet>`\n})\nexport class AppComponent {\n  constructor(\n    private toastSvc: ToastService,\n    private viewContainerRef: ViewContainerRef\n  ) {\n    this.toastSvc.setToastRootViewContainerRef(this.viewContainerRef);\n    this.toastSvc.addToastDynamicComponent();\n  }\n  @HostBinding('class.has-sidebar') public hasSidebar: boolean;\n  @HostBinding('class.has-breadcrumb') public hasBreadcrumb: boolean;\n  @HostBinding('class.is-home') public isHome: boolean;\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-accordion/sections/animation-accordion/animation-accordion.component.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-accordion/sections/animation-accordion/animation-accordion.component.ts ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'ugw-animation-accordion',\n  templateUrl: './animation-accordion.component.html'\n})\nexport class AnimationAccordionComponent {\n\n  constructor() { }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-accordion/sections/basic-accordion/basic-accordion.component.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-accordion/sections/basic-accordion/basic-accordion.component.ts ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'ugw-basic-accordion',\n  templateUrl: './basic-accordion.component.html'\n})\nexport class BasicAccordionComponent {\n\n  constructor() { }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-accordion/sections/custom-html-accordion/custom-html-accordion.component.ts":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-accordion/sections/custom-html-accordion/custom-html-accordion.component.ts ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'ugw-custom-html-accordion',\n  templateUrl: './custom-html-accordion.component.html',\n  styleUrls: ['./custom-html-accordion.component.scss']\n})\nexport class CustomHtmlAccordionComponent {\n\n  constructor() { }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-accordion/sections/disable-accordion/disable-accordion.component.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-accordion/sections/disable-accordion/disable-accordion.component.ts ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'ugw-disable-accordion',\n  templateUrl: './disable-accordion.component.html',\n  styleUrls: ['./disable-accordion.component.scss']\n})\nexport class DisableAccordionComponent {\n\n  isDisabled = false;\n\n  constructor() { }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-accordion/sections/dynamic-accordion/dynamic-accordion.component.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-accordion/sections/dynamic-accordion/dynamic-accordion.component.ts ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'ugw-dynamic-accordion',\n  templateUrl: './dynamic-accordion.component.html',\n  styleUrls: ['./dynamic-accordion.component.scss']\n})\nexport class DynamicAccordionComponent {\n\n  groups = [\n    {\n      heading: 'Static header',\n      content: 'This is static header content.'\n    }\n  ];\n\n  constructor() { }\n\n  addGroup(): void {\n    this.groups.push({\n      heading: 'Static header',\n      content: 'This is static header content.'\n    });\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-accordion/sections/dynamic-body-accordion/dynamic-body-accordion.component.ts":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-accordion/sections/dynamic-body-accordion/dynamic-body-accordion.component.ts ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'ugw-dynamic-body-accordion',\n  templateUrl: './dynamic-body-accordion.component.html',\n  styleUrls: ['./dynamic-body-accordion.component.scss']\n})\nexport class DynamicBodyAccordionComponent {\n\n  items: string[] = [];\n\n  constructor() { }\n\n  addItem(): void {\n    this.items.push('-');\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-accordion/sections/initially-opened-accordion/initially-opened-accordion.component.ts":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-accordion/sections/initially-opened-accordion/initially-opened-accordion.component.ts ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'ugw-initially-opened-accordion',\n  templateUrl: './initially-opened-accordion.component.html'\n})\nexport class InitiallyOpenedAccordionComponent {\n\n  constructor() { }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-accordion/sections/manual-toggle-accordion/manual-toggle-accordion.component.ts":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-accordion/sections/manual-toggle-accordion/manual-toggle-accordion.component.ts ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'ugw-manual-toggle-accordion',\n  templateUrl: './manual-toggle-accordion.component.html',\n  styleUrls: ['./manual-toggle-accordion.component.scss']\n})\nexport class ManualToggleAccordionComponent {\n\n  isOpen = false;\n\n  constructor() { }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-accordion/sections/opening-event-accordion/opening-event-accordion.component.ts":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-accordion/sections/opening-event-accordion/opening-event-accordion.component.ts ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'ugw-opening-event-accordion',\n  templateUrl: './opening-event-accordion.component.html'\n})\nexport class OpeningEventAccordionComponent {\n\n  description: string;\n\n  constructor() { }\n\n  panelClicked(index: number): void {\n    this.description = `You clicked a group panel with index number: ${index}`;\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-accordion/sections/other-close-accordion/other-close-accordion.component.ts":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-accordion/sections/other-close-accordion/other-close-accordion.component.ts ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'ugw-other-close-accordion',\n  templateUrl: './other-close-accordion.component.html',\n  styleUrls: ['./other-close-accordion.component.scss']\n})\nexport class OtherCloseAccordionComponent {\n\n  closeOthers = false;\n\n  constructor() { }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-accordion/sections/styling-accordion/styling-accordion.component.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-accordion/sections/styling-accordion/styling-accordion.component.ts ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'ugw-styling-accordion',\n  templateUrl: './styling-accordion.component.html'\n})\nexport class StylingAccordionComponent {\n\n  constructor() { }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-button/sections/active-button/active-button.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-button/sections/active-button/active-button.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary active\">primary</button>\n&nbsp;\n<button class=\"btn btn-secondary active\">secondary</button>\n&nbsp;\n<button class=\"btn btn-tertiary active\">tertiary</button>\n&nbsp;\n<button class=\"btn btn-success active\">success</button>\n&nbsp;\n<button class=\"btn btn-info active\">info</button>\n&nbsp;\n<button class=\"btn btn-warning active\">warning</button>\n&nbsp;\n<button class=\"btn btn-danger active\">danger</button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-button/sections/active-button/active-button.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-button/sections/active-button/active-button.component.ts ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'ugw-active-button',\n  templateUrl: './active-button.component.html'\n})\nexport class ActiveButtonComponent {\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-button/sections/basic-button/basic-button.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-button/sections/basic-button/basic-button.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary\">primary</button>\n&nbsp;\n<button class=\"btn btn-default\">default</button>\n&nbsp;\n<button class=\"btn btn-secondary\">secondary</button>\n&nbsp;\n<button class=\"btn btn-tertiary\">tertiary</button>\n&nbsp;\n<button class=\"btn btn-success\">success</button>\n&nbsp;\n<button class=\"btn btn-info\">info</button>\n&nbsp;\n<button class=\"btn btn-warning\">warning</button>\n&nbsp;\n<button class=\"btn btn-danger\">danger</button>&nbsp;"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-button/sections/basic-button/basic-button.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-button/sections/basic-button/basic-button.component.ts ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'ugw-basic-button',\n  templateUrl: './basic-button.component.html'\n})\nexport class BasicButtonComponent  {\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-button/sections/block-button/block-button.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-button/sections/block-button/block-button.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary  btn-block\"> primary</button>\n<button class=\"btn btn-secondary  btn-block\"> secondary</button>\n<button class=\"btn btn-tertiary btn-block\"> tertiary</button>\n<button class=\"btn btn-success btn-block\"> success</button>\n<button class=\"btn btn-info btn-block\"> info</button>\n<button class=\"btn btn-warning btn-block\"> warning</button> \n<button class=\"btn btn-danger btn-block\"> danger</button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-button/sections/block-button/block-button.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-button/sections/block-button/block-button.component.ts ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'ugw-block-button',\n  templateUrl: './block-button.component.html',\n})\nexport class BlockButtonComponent {\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-button/sections/combination-icon-button/combination-icon-button.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-button/sections/combination-icon-button/combination-icon-button.component.html ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary\"> \n  primary <span class=\"fa fa-plus\"></span> \n</button> &nbsp;\n\n<button class=\"btn btn-secondary\"> \n <span class=\"fa fa-caret-down\"></span> secondary\n</button> &nbsp;\n\n<button class=\"btn btn-success\">\n  success <span class=\"fa fa-arrow-circle-right\"></span>\n</button> &nbsp;\n\n<button class=\"btn btn-info\"> \n  info <span class=\"fa fa-search\"></span>\n</button> &nbsp;\n\n<button class=\"btn btn-warning\">\n  warning <span class=\"fa fa-expand\"></span>\n</button> &nbsp;\n\n<button class=\"btn btn-danger\"> \n <span class=\"fa fa-star\"></span>danger\n</button> &nbsp;"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-button/sections/combination-icon-button/combination-icon-button.component.ts":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-button/sections/combination-icon-button/combination-icon-button.component.ts ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'ugw-combination-icon-button',\n  templateUrl: './combination-icon-button.component.html'\n})\nexport class CombinationIconButtonComponent {\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-button/sections/disabled-button/disabled-button.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-button/sections/disabled-button/disabled-button.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary\"  >primary</button>\n&nbsp;\n<button class=\"btn btn-secondary\" disabled>secondary</button>\n&nbsp;\n<button class=\"btn btn-tertiary\" disabled>tertiary</button>\n&nbsp;\n<button class=\"btn btn-success\" disabled>success</button>\n&nbsp;\n<button class=\"btn btn-info\" disabled>info</button>\n&nbsp;\n<button class=\"btn btn-warning\" disabled>warning</button>\n&nbsp;\n<button class=\"btn btn-danger\" disabled>danger</button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-button/sections/disabled-button/disabled-button.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-button/sections/disabled-button/disabled-button.component.ts ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'ugw-disabled-button',\n  templateUrl: './disabled-button.component.html'\n})\nexport class DisabledButtonComponent  {\n\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-button/sections/icon-button/icon-button.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-button/sections/icon-button/icon-button.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary\"> \n   <span class=\"fa fa-plus\"></span> \n</button>\n&nbsp;\n<button class=\"btn btn-secondary\"> \n  <span class=\"fa fa-caret-down\"></span> \n</button>\n&nbsp;\n<button class=\"btn btn-tertiary\">\n  <span class=\"fa fa-chevron-down\"></span>\n</button>\n&nbsp;\n<button class=\"btn btn-success\">\n  <span class=\"fa fa-arrow-circle-right\"></span>\n</button>\n&nbsp;\n<button class=\"btn btn-info\"> \n  <span class=\"fa fa-search\"></span>\n</button>\n&nbsp;\n<button class=\"btn btn-warning\">\n  <span class=\"fa fa-expand\"></span>\n</button>\n&nbsp;\n<button class=\"btn btn-danger\"> \n  <span class=\"fa fa-star\"></span>\n</button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-button/sections/icon-button/icon-button.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-button/sections/icon-button/icon-button.component.ts ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'ugw-icon-button',\n  templateUrl: './icon-button.component.html'\n})\nexport class IconButtonComponent {\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-button/sections/loader-button/loader-button.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-button/sections/loader-button/loader-button.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <button class=\"btn btn-primary\" [class.loading]=\"primaryPropetyLoading\" (click)=\"primaryPropetyLoading = !primaryPropetyLoading;\">\n    loading\n  </button>\n  &nbsp;\n  <button class=\"btn btn-secondary\" [class.loading]=\"secondaryPropetyLoading\" (click)=\"secondaryPropetyLoading = !secondaryPropetyLoading;\">\n    loading\n  </button>\n  &nbsp;\n  <button class=\"btn btn-success\" [class.loading]=\"successPropetyLoading\" (click)=\"successPropetyLoading = !successPropetyLoading;\">\n    loading\n  </button>\n  &nbsp;\n  <button class=\"btn btn-info\" [class.loading]=\"infoPropetyLoading\" (click)=\"infoPropetyLoading = !infoPropetyLoading;\">\n    loading\n  </button>\n  &nbsp;\n  <button class=\"btn btn-warning\" [class.loading]=\"warningPropetyLoading\" (click)=\"warningPropetyLoading = !warningPropetyLoading;\">\n    loading\n  </button>\n  &nbsp;\n  <button class=\"btn btn-danger\" [class.loading]=\"dangerPropetyLoading\" (click)=\"dangerPropetyLoading = !dangerPropetyLoading;\">\n    loading\n  </button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-button/sections/loader-button/loader-button.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-button/sections/loader-button/loader-button.component.ts ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'ugw-loader-button',\n  templateUrl: './loader-button.component.html',\n  styleUrls: ['./loader-button.component.scss']\n})\nexport class LoaderButtonComponent {\n  primaryPropetyLoading = false;\n  secondaryPropetyLoading = false;\n  successPropetyLoading = false;\n  infoPropetyLoading = false;\n  warningPropetyLoading = false;\n  dangerPropetyLoading = false;\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-button/sections/size-button/size-button.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-button/sections/size-button/size-button.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary btn-lg\">Large</button>\n&nbsp;\n<button class=\"btn btn-primary\">Medium</button>\n&nbsp;\n<button class=\"btn btn-primary btn-sm\">Small</button>\n&nbsp;\n<button class=\"btn btn-primary btn-xs\">Extra small</button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-button/sections/size-button/size-button.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-button/sections/size-button/size-button.component.ts ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'ugw-size-button',\n  templateUrl: './size-button.component.html',\n})\nexport class SizeButtonComponent  {\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-chips/sections/basic-chip/basic-chip.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-chips/sections/basic-chip/basic-chip.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<uii-chips [items]=\"dataDummy\" (sendData)=\"onGetData($event)\"></uii-chips>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-chips/sections/basic-chip/basic-chip.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-chips/sections/basic-chip/basic-chip.component.ts ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit, EventEmitter, Output } from '@angular/core';\n\n@Component({\n  selector: 'ugw-basic-chip',\n  templateUrl: './basic-chip.component.html',\n  styleUrls: ['./basic-chip.component.scss']\n})\nexport class BasicChipComponent implements OnInit {\n\n  dataDummy: Array<any> = [\n    {\n      label: 'Item 1 & Item 2',\n      value: 'item1_and_item2'\n    },\n    {\n      label: 'Item 2',\n      value: 'item_2'\n    },\n    {\n      label: 'Item 3',\n      value: 'item_3'\n    },\n    {\n      label: 'Item 4',\n      value: 'item_4'\n    },\n    {\n      label: 'Item 5',\n      value: 'item_5'\n    },\n  ];\n  constructor() {\n  }\n\n  ngOnInit() {\n  }\n\n  onGetData($event) {\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-chips/sections/disable-chip/disable-chip.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-chips/sections/disable-chip/disable-chip.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<uii-chips [disabled]=\"true\" [items]=\"dataDummy\"></uii-chips>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-chips/sections/disable-chip/disable-chip.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-chips/sections/disable-chip/disable-chip.component.ts ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'ugw-disable-chip',\n  templateUrl: './disable-chip.component.html',\n  styleUrls: ['./disable-chip.component.scss']\n})\nexport class DisableChipComponent implements OnInit {\n  dataDummy: Array<any> = [\n    {\n      label: 'Disable',\n      value: 'Disable'\n    }\n  ];\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-chips/sections/horizontal-chip/horizontal-chip.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-chips/sections/horizontal-chip/horizontal-chip.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<uii-chips [items]=\"dataDummy\" position=\"horizontal\" (sendData)=\"onGetData($event)\"></uii-chips>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-chips/sections/horizontal-chip/horizontal-chip.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-chips/sections/horizontal-chip/horizontal-chip.component.ts ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'ugw-horizontal-chip',\n  templateUrl: './horizontal-chip.component.html',\n  styleUrls: ['./horizontal-chip.component.scss']\n})\nexport class HorizontalChipComponent implements OnInit {\n\n  dataDummy: Array<any> = [\n    {\n      label: 'Item 1',\n      value: 'item_1'\n    },\n    {\n      label: 'Item 2',\n      value: 'item_2'\n    }\n  ];\n  constructor() {\n  }\n\n  ngOnInit() {\n  }\n\n  onGetData($event) {\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-chips/sections/vertical-chip/vertical-chip.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-chips/sections/vertical-chip/vertical-chip.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<uii-chips [items]=\"dataDummy\"  position=\"vertical\" (sendData)=\"onGetData($event)\"></uii-chips>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-chips/sections/vertical-chip/vertical-chip.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-chips/sections/vertical-chip/vertical-chip.component.ts ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'ugw-vertical-chip',\n  templateUrl: './vertical-chip.component.html',\n  styleUrls: ['./vertical-chip.component.scss']\n})\nexport class VerticalChipComponent implements OnInit {\n\n  dataDummy: Array<any> = [\n    {\n      label: 'Item 1',\n      value: 'item_1'\n    },\n    {\n      label: 'Item 2',\n      value: 'item_2'\n    },\n    {\n      label: 'Item 3',\n      value: 'item_3'\n    }\n  ];\n  constructor() {\n  }\n\n  ngOnInit() {\n  }\n\n  onGetData($event) {\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-file-upload/sections/basic-file-upload/basic-file-upload.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-file-upload/sections/basic-file-upload/basic-file-upload.component.ts ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'ugw-basic-file-upload',\n  templateUrl: './basic-file-upload.component.html'\n})\nexport class BasicFileUploadComponent {\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-file-upload/sections/events-file-upload/events-file-upload.component.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-file-upload/sections/events-file-upload/events-file-upload.component.ts ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'ugw-events-file-upload',\n  templateUrl: './events-file-upload.component.html'\n})\nexport class EventsFileUploadComponent {\n  selectedFiles: Array<any> = [];\n  onFileSelected($event: any) {\n    this.selectedFiles = ($event) ? $event : [];\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-file-upload/sections/multiple-file-upload/multiple-file-upload.component.ts":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-file-upload/sections/multiple-file-upload/multiple-file-upload.component.ts ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'ugw-multiple-file-upload',\n  templateUrl: './multiple-file-upload.component.html'\n})\nexport class MultipleFileUploadComponent {\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-file-upload/sections/prev-position-file-upload/prev-position-file-upload.component.ts":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-file-upload/sections/prev-position-file-upload/prev-position-file-upload.component.ts ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'ugw-prev-position-file-upload',\n  templateUrl: './prev-position-file-upload.component.html'\n})\nexport class PrevPositionFileUploadComponent {\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-file-upload/sections/set-file-upload/set-file-upload.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-file-upload/sections/set-file-upload/set-file-upload.component.ts ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'ugw-set-file-upload',\n  templateUrl: './set-file-upload.component.html'\n})\nexport class SetFileUploadComponent {\n  selectedFiles: File;\n\n  onFileSelect($event: any) {\n    this.selectedFiles = $event;\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-file-upload/sections/size-file-upload/size-file-upload.component.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-file-upload/sections/size-file-upload/size-file-upload.component.ts ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'ugw-size-file-upload',\n  templateUrl: './size-file-upload.component.html'\n})\nexport class SizeFileUploadComponent {\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-file-upload/sections/type-file-upload/type-file-upload.component.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-file-upload/sections/type-file-upload/type-file-upload.component.ts ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'ugw-type-file-upload',\n  templateUrl: './type-file-upload.component.html'\n})\nexport class TypeFileUploadComponent {\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-form-wizard/sections/active-step-option-form-wizard/active-step-option-form-wizard.component.ts":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-form-wizard/sections/active-step-option-form-wizard/active-step-option-form-wizard.component.ts ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'ugw-active-step-option-form-wizard',\n  templateUrl: './active-step-option-form-wizard.component.html'\n})\nexport class ActiveStepOptionFormWizardComponent implements OnInit {\n\n  activeStepCurrent = 2;\n  activeStepStart = 1;\n  activeStepEnd = 3;\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-form-wizard/sections/basic-form-wizard/basic-form-wizard.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-form-wizard/sections/basic-form-wizard/basic-form-wizard.component.ts ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'ugw-basic-form-wizard',\n  templateUrl: './basic-form-wizard.component.html'\n})\nexport class BasicFormWizardComponent implements OnInit {\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-form-wizard/sections/custom-pagination-label-form-wizard/custom-pagination-label-form-wizard.component.ts":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-form-wizard/sections/custom-pagination-label-form-wizard/custom-pagination-label-form-wizard.component.ts ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'ugw-custom-pagination-label-form-wizard',\n  templateUrl: './custom-pagination-label-form-wizard.component.html'\n})\nexport class CustomPaginationLabelFormWizardComponent implements OnInit {\n\n  paginateLabel = {\n    cancel: 'Batal',\n    next: 'Selanjutnya',\n    previous: 'Sebelumnya',\n    more: 'Lainnya',\n    done: 'Simpan'\n  };\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-form-wizard/sections/disabled-click-step-form-wizard/disabled-click-step-form-wizard.component.ts":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-form-wizard/sections/disabled-click-step-form-wizard/disabled-click-step-form-wizard.component.ts ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'ugw-disabled-click-step-form-wizard',\n  templateUrl: './disabled-click-step-form-wizard.component.html'\n})\nexport class DisabledClickStepFormWizardComponent implements OnInit {\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-form-wizard/sections/disabled-submit-form-wizard/disabled-submit-form-wizard.component.ts":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-form-wizard/sections/disabled-submit-form-wizard/disabled-submit-form-wizard.component.ts ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'ugw-disabled-submit-form-wizard',\n  templateUrl: './disabled-submit-form-wizard.component.html'\n})\nexport class DisabledSubmitFormWizardComponent implements OnInit {\n\n  btnSubmit = true;\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n  onBtnEnableDisable() {\n    this.btnSubmit = !this.btnSubmit;\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-form-wizard/sections/emit-event-paginate-change-form-wizard/emit-event-paginate-change-form-wizard.component.ts":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-form-wizard/sections/emit-event-paginate-change-form-wizard/emit-event-paginate-change-form-wizard.component.ts ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'ugw-emit-event-paginate-change-form-wizard',\n  templateUrl: './emit-event-paginate-change-form-wizard.component.html'\n})\nexport class EmitEventPaginateChangeFormWizardComponent implements OnInit {\n\n  currentStep = 0;\n  cancelBtnClickCount = 0;\n  nextBtnClickCount = 0;\n  prevBtnClickCount = 0;\n  submitBtnClickCount = 0;\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n  onStepChange($event) {\n    this.currentStep = $event.activeStepIndex;\n  }\n\n  onBtnCancelClick() {\n    this.cancelBtnClickCount++;\n  }\n\n  onBtnNextClick() {\n    this.nextBtnClickCount++;\n  }\n\n  onBtnPrevClick() {\n    this.prevBtnClickCount++;\n  }\n\n  onBtnSubmitClick() {\n    this.submitBtnClickCount++;\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-form-wizard/sections/many-step-form-wizard/many-step-form-wizard.component.ts":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-form-wizard/sections/many-step-form-wizard/many-step-form-wizard.component.ts ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'ugw-many-step-form-wizard',\n  templateUrl: './many-step-form-wizard.component.html'\n})\nexport class ManyStepFormWizardComponent implements OnInit {\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-form-wizard/sections/steps-option-form-wizard/steps-option-form-wizard.component.ts":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-form-wizard/sections/steps-option-form-wizard/steps-option-form-wizard.component.ts ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'ugw-steps-option-form-wizard',\n  templateUrl: './steps-option-form-wizard.component.html'\n})\nexport class StepsOptionFormWizardComponent implements OnInit {\n\n  showStep1 = false;\n  showPrevStep2 = true;\n  isValidStep3 = true;\n  showNextStep4 = true;\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n  onBtnShowStep1Click() {\n    this.showStep1 = !this.showStep1;\n  }\n\n  onBtnShowPrevStep2Click() {\n    this.showPrevStep2 = !this.showPrevStep2;\n  }\n\n  onBtnIsValidStep3Click() {\n    this.isValidStep3 = !this.isValidStep3;\n  }\n\n  onBtnShowNextStep4Click() {\n    this.showNextStep4 = !this.showNextStep4;\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-image-upload/sections/basic-image-upload/basic-image-upload.component.ts":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-image-upload/sections/basic-image-upload/basic-image-upload.component.ts ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'ugw-basic-image-upload',\n  templateUrl: './basic-image-upload.component.html',\n  styleUrls: ['./basic-image-upload.component.scss']\n})\nexport class BasicImageUploadComponent implements OnInit {\n\n  constructor(\n  ) { }\n\n  ngOnInit() {\n  }\n}\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-image-upload/sections/labeling-button-image-upload/labeling-button-image-upload.component.ts":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-image-upload/sections/labeling-button-image-upload/labeling-button-image-upload.component.ts ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'ugw-labeling-button-image-upload',\n  templateUrl: './labeling-button-image-upload.component.html',\n  styleUrls: ['./labeling-button-image-upload.component.scss']\n})\nexport class LabelingButtonImageUploadComponent implements OnInit {\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-infobox/sections/basic-infobox/basic-infobox.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-infobox/sections/basic-infobox/basic-infobox.component.ts ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'ugw-basic-infobox',\n  templateUrl: './basic-infobox.component.html',\n  styleUrls: ['./basic-infobox.component.scss']\n})\nexport class BasicInfoboxComponent implements OnInit {\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-infobox/sections/color-infobox/color-infobox.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-infobox/sections/color-infobox/color-infobox.component.ts ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'ugw-color-infobox',\n  templateUrl: './color-infobox.component.html',\n  styleUrls: ['./color-infobox.component.scss']\n})\nexport class ColorInfoboxComponent implements OnInit {\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-infobox/sections/group-infobox/group-infobox.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-infobox/sections/group-infobox/group-infobox.component.ts ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'ugw-basic-infobox',\n  templateUrl: './group-infobox.component.html',\n  styleUrls: ['./group-infobox.component.scss']\n})\nexport class GroupInfoboxComponent implements OnInit {\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-information/sections/basic-information/basic-information.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-information/sections/basic-information/basic-information.component.ts ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'ugw-basic-information',\n  templateUrl: './basic-information.component.html',\n  styleUrls: ['./basic-information.component.scss']\n})\nexport class BasicInformationComponent implements OnInit {\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-information/sections/information-with-tag-html/information-with-tag-html.component.ts":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-information/sections/information-with-tag-html/information-with-tag-html.component.ts ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'ugw-information-with-tag-html',\n  templateUrl: './information-with-tag-html.component.html',\n  styleUrls: ['./information-with-tag-html.component.scss']\n})\nexport class InformationWithTagHtmlComponent implements OnInit {\n\n  message_success = '<div class=\\\"information-title\\\"><h4>This is success</h4><p>This is the success text using the html tag</p></div>';\n  message_warning = '<div class=\\\"information-title\\\"><h4>This is warning</h4><p>This is the warning text using the html tag</p></div>';\n  message_error = '<div class=\\\"information-title\\\"><h4>This is error</h4><p>This is the error text using the html tag</p></div>';\n  message_info = '<div class=\\\"information-title\\\"><h4>This is info</h4><p>This is the info text using the html tag</p></div>';\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-pagination/sections/basic-pagination/basic-pagination.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-pagination/sections/basic-pagination/basic-pagination.component.ts ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'ugw-basic-pagination',\n  templateUrl: './basic-pagination.component.html',\n})\nexport class BasicPaginationComponent {}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-pagination/sections/page-change-event/page-change-event.component.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-pagination/sections/page-change-event/page-change-event.component.ts ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'ugw-page-change-event',\n  templateUrl: './page-change-event.component.html'\n})\nexport class PageChangeEventComponent {\n  currentPage = 1;\n  onPageChange($event: any) {\n    this.currentPage = $event;\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-pagination/sections/set-page/set-page.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-pagination/sections/set-page/set-page.component.ts ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'ugw-set-page',\n  templateUrl: './set-page.component.html'\n})\nexport class SetPageComponent {\n\n  currentPage: number;\n\n  onPageChange(page: number) {\n    this.currentPage = page;\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-switch/sections/basic-switch/basic-switch.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-switch/sections/basic-switch/basic-switch.component.ts ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'ugw-basic-switch',\n  templateUrl: './basic-switch.component.html'\n})\nexport class BasicSwitchComponent {}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-switch/sections/changed-switch/changed-switch.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-switch/sections/changed-switch/changed-switch.component.ts ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'ugw-changed-switch',\n  templateUrl: './changed-switch.component.html'\n})\nexport class ChangedSwitchComponent {\n\n  checked = false;\n\n  onSwitchChanged($event: any) {\n    this.checked = $event;\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-switch/sections/checked-switch/checked-switch.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-switch/sections/checked-switch/checked-switch.component.ts ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'ugw-checked-switch',\n  templateUrl: './checked-switch.component.html'\n})\nexport class CheckedSwitchComponent {\n\n  checked = true;\n\n  onCheckedToggled() {\n    this.checked = !this.checked;\n  }\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-switch/sections/delayed-switch/delayed-switch.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-switch/sections/delayed-switch/delayed-switch.component.ts ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'ugw-delayed-switch',\n  templateUrl: './delayed-switch.component.html'\n})\nexport class DelayedSwitchComponent {\n\n  checked = false;\n  timeOut: any;\n\n  onChangeEvent($event: boolean) {\n    this.timeOut = 3;\n    const interval = setInterval(() => {\n      if (this.timeOut <= 1) {\n        this.checked = !$event;\n        clearInterval(interval);\n      }\n      this.timeOut --;\n    }, 1000);\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-switch/sections/disabled-switch/disabled-switch.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-switch/sections/disabled-switch/disabled-switch.component.ts ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'ugw-disabled-switch',\n  templateUrl: './disabled-switch.component.html'\n})\nexport class DisabledSwitchComponent {\n\n  disabled = true;\n\n  onSwitchToggled() {\n    this.disabled = !this.disabled;\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-table/sections/basic-table/basic-table.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-table/sections/basic-table/basic-table.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<uii-table\n  [rows]=\"rows\"\n  [columns]=\"columns\"\n  [actionTitle]=\"'Action'\"></uii-table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-table/sections/basic-table/basic-table.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-table/sections/basic-table/basic-table.component.ts ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'ugw-basic-table',\n  templateUrl: './basic-table.component.html',\n  styleUrls: ['./basic-table.component.scss']\n})\nexport class BasicTableComponent implements OnInit {\n\n  rows: Array<any> = [];\n  columns: Array<any> = [];\n\n  constructor() { }\n\n  ngOnInit() {\n    this.columns = [\n      {\n        name: 'No',\n        prop: 'number'\n      },\n      {\n        name: 'Name',\n        prop: 'name'\n      },\n      {\n        name: 'Age',\n        prop: 'age'\n      },\n    ];\n\n    this.rows = [\n      {\n        name: 'Marta Mccoy',\n        age: 31\n      },\n      {\n        name: 'Fanny Holman',\n        age: 23\n      },\n      {\n        name: 'Latonya Gibson',\n        age: 22\n      },\n      {\n        name: 'Ines Wiggins',\n        age: 35\n      },\n      {\n        name: 'Kathrine Irwin',\n        age: 38\n      },\n      {\n        name: 'Higgins Oneal',\n        age: 35\n      },\n      {\n        name: 'Russell Duke',\n        age: 37\n      },\n      {\n        name: 'Sara Quinn',\n        age: 23\n      },\n      {\n        name: 'Dona Patterson',\n        age: 32\n      },\n      {\n        name: 'Clarice Keith',\n        age: 22\n      },\n      {\n        name: 'Petersen Maldonado',\n        age: 20\n      },\n      {\n        name: 'Tonya Colon',\n        age: 38\n      },\n      {\n        name: 'Ann Bass',\n        age: 30\n      },\n      {\n        name: 'Cherie Pickett',\n        age: 21\n      },\n      {\n        name: 'Holland Mcdonald',\n        age: 28\n      },\n      {\n        name: 'Casey Dudley',\n        age: 23\n      },\n      {\n        name: 'Sophie Slater',\n        age: 33\n      },\n      {\n        name: 'Rhoda Kent',\n        age: 32\n      },\n      {\n        name: 'Bennett Sheppard',\n        age: 32\n      },\n      {\n        name: 'Foreman Hood',\n        age: 25\n      }\n    ];\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-table/sections/table-with-checkbox/table-with-checkbox.component.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-table/sections/table-with-checkbox/table-with-checkbox.component.ts ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'ugw-table-with-checkbox',\n  templateUrl: './table-with-checkbox.component.html',\n  styleUrls: ['./table-with-checkbox.component.scss']\n})\nexport class TableWithCheckboxComponent implements OnInit {\n\n  rows: Array<any> = [];\n  columns: Array<any> = [];\n\n  constructor() { }\n\n  ngOnInit() {\n    this.columns = [\n      {\n        name: 'No',\n        prop: 'number'\n      },\n      {\n        name: 'Name',\n        prop: 'name'\n      },\n      {\n        name: 'Age',\n        prop: 'age'\n      },\n    ];\n\n    this.rows = [\n      {\n        name: 'Marta Mccoy',\n        age: 31\n      },\n      {\n        name: 'Fanny Holman',\n        age: 23\n      },\n      {\n        name: 'Latonya Gibson',\n        age: 22\n      },\n      {\n        name: 'Ines Wiggins',\n        age: 35\n      },\n      {\n        name: 'Kathrine Irwin',\n        age: 38\n      },\n      {\n        name: 'Higgins Oneal',\n        age: 35\n      },\n      {\n        name: 'Russell Duke',\n        age: 37\n      },\n      {\n        name: 'Sara Quinn',\n        age: 23\n      },\n      {\n        name: 'Dona Patterson',\n        age: 32\n      },\n      {\n        name: 'Clarice Keith',\n        age: 22\n      },\n      {\n        name: 'Petersen Maldonado',\n        age: 20\n      },\n      {\n        name: 'Tonya Colon',\n        age: 38\n      },\n      {\n        name: 'Ann Bass',\n        age: 30\n      },\n      {\n        name: 'Cherie Pickett',\n        age: 21\n      },\n      {\n        name: 'Holland Mcdonald',\n        age: 28\n      },\n      {\n        name: 'Casey Dudley',\n        age: 23\n      },\n      {\n        name: 'Sophie Slater',\n        age: 33\n      },\n      {\n        name: 'Rhoda Kent',\n        age: 32\n      },\n      {\n        name: 'Bennett Sheppard',\n        age: 32\n      },\n      {\n        name: 'Foreman Hood',\n        age: 25\n      }\n    ];\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-tabset/sections/basic-tabset/basic-tabset.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-tabset/sections/basic-tabset/basic-tabset.component.ts ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'ugw-basic-tabset',\n  templateUrl: './basic-tabset.component.html'\n})\nexport class BasicTabsetComponent {}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-tabset/sections/manually-tab-selection/manually-tab-selection.component.ts":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-tabset/sections/manually-tab-selection/manually-tab-selection.component.ts ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'ugw-manually-tab-selection',\n  templateUrl: './manually-tab-selection.component.html'\n})\nexport class ManuallyTabSelectionComponent implements OnInit {\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-tabset/sections/tabset-deselect-event/tabset-deselect-event.component.ts":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-tabset/sections/tabset-deselect-event/tabset-deselect-event.component.ts ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'ugw-tabset-deselect-event',\n  templateUrl: './tabset-deselect-event.component.html'\n})\nexport class TabsetDeselectEventComponent {\n  tabTitle: string;\n\n  onTabItemDeselect($event) {\n    this.tabTitle = $event.title;\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-tabset/sections/tabset-select-event/tabset-select-event.component.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-tabset/sections/tabset-select-event/tabset-select-event.component.ts ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'ugw-tabset-select-event',\n  templateUrl: './tabset-select-event.component.html'\n})\nexport class TabsetSelectEventComponent {\n  tabTitle: string;\n\n  onTabItemSelect($event: any) {\n    this.tabTitle = $event.title;\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-tabset/sections/tabset-with-icon-text/tabset-with-icon-text.component.ts":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-tabset/sections/tabset-with-icon-text/tabset-with-icon-text.component.ts ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'ugw-tabset-with-icon-text',\n  templateUrl: './tabset-with-icon-text.component.html'\n})\nexport class TabsetWithIconTextComponent {}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-tabset/sections/tabset-with-icon/tabset-with-icon.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-tabset/sections/tabset-with-icon/tabset-with-icon.component.ts ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'ugw-tabset-with-icon',\n  templateUrl: './tabset-with-icon.component.html'\n})\nexport class TabsetWithIconComponent {}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-toast/sections/basic-toast/basic-toast.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-toast/sections/basic-toast/basic-toast.component.ts ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\nimport { ToastService } from 'pilar';\n\n@Component({\n  selector: 'ugw-basic-toast',\n  templateUrl: './basic-toast.component.html',\n  styleUrls: ['./basic-toast.component.scss']\n})\nexport class BasicToastComponent {\n\n  constructor(private toastSvc: ToastService) { }\n\n  pushSuccessToast(): void {\n    this.toastSvc.success('wohoo, this toast is working.', 'success', {\n      timeOut: 5000\n    });\n  }\n\n  pushWarningToast(): void {\n    this.toastSvc.warning('wohoo, this toast is working.', 'warning',  {\n      timeOut: 5000\n    });\n  }\n\n  pushErrorToast(): void {\n    this.toastSvc.error('wohoo, this toast is working.', 'error',  {\n      timeOut: 5000\n    });\n  }\n\n  pushInfoToast(): void {\n    this.toastSvc.info('wohoo, this toast is working.', 'info',  {\n      timeOut: 5000\n    });\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-toast/sections/pause-onclick-toast/pause-onclick-toast.component.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-toast/sections/pause-onclick-toast/pause-onclick-toast.component.ts ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\nimport { ToastService } from 'pilar';\n\n@Component({\n  selector: 'ugw-pause-onclick-toast',\n  templateUrl: './pause-onclick-toast.component.html',\n  styleUrls: ['./pause-onclick-toast.component.scss']\n})\nexport class PauseOnclickToastComponent implements OnInit {\n\n  timeout = 5000;\n\n  constructor(private toastSvc: ToastService) { }\n\n  ngOnInit() {\n  }\n\n  pushInfoToast(): void {\n    this.toastSvc.info('click this toast to prevent being removed!', 'info', {\n      timeOut: this.timeout,\n      removeOnClick: true\n    });\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-toast/sections/timeout-toast/timeout-toast.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-toast/sections/timeout-toast/timeout-toast.component.ts ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\nimport { ToastService } from 'pilar';\n\n@Component({\n  selector: 'ugw-timeout-toast',\n  templateUrl: './timeout-toast.component.html',\n  styleUrls: ['./timeout-toast.component.scss']\n})\nexport class TimeoutToastComponent implements OnInit {\n\n  timeOut: number;\n\n  constructor(private toastSvc: ToastService) { }\n\n  ngOnInit() {\n  }\n\n  pushInfoToast() {\n    this.toastSvc.info('wohooo, this toast is working.', 'info', {\n      timeOut: this.timeOut\n    });\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-tooltip/sections/basic-tooltip/basic-tooltip.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-tooltip/sections/basic-tooltip/basic-tooltip.component.ts ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'ugw-basic-tooltip',\n  templateUrl: './basic-tooltip.component.html',\n  styleUrls: ['./basic-tooltip.component.scss']\n})\nexport class BasicTooltipComponent implements OnInit {\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-tooltip/sections/disabled-tooltip/disabled-tooltip.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-tooltip/sections/disabled-tooltip/disabled-tooltip.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary margin-5\" uiiTooltip=\"This tooltip is disabled\" [tooltipDisabled]=\"true\">Tooltip disabled!</button>\n<button class=\"btn btn-primary margin-5\" uiiTooltip=\"This tooltip is not disabled\" [tooltipDisabled]=\"false\">Tooltip is not disabled!</button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-tooltip/sections/disabled-tooltip/disabled-tooltip.component.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-tooltip/sections/disabled-tooltip/disabled-tooltip.component.ts ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'ugw-disabled-tooltip',\n  templateUrl: './disabled-tooltip.component.html',\n  styleUrls: ['./disabled-tooltip.component.scss']\n})\nexport class DisabledTooltipComponent implements OnInit {\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-tooltip/sections/dynamic-html-tooltip/dynamic-html-tooltip.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-tooltip/sections/dynamic-html-tooltip/dynamic-html-tooltip.component.html ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <uii-tooltip #myTooltip>\n    <span class=\"glyphicon glyphicon-warning-sign\"></span>\n    <b>Very</b> <span style=\"color: #C21F39\">Dynamic</span> <span style=\"color: #00b3ee\">Reusable</span>\n    <b><i><span style=\"color: #ffc520\">Tooltip With</span></i></b> <small>Html support</small>.\n  </uii-tooltip>\n\n  <button class=\"btn btn-primary\" [uiiTooltip]=\"myTooltip\" tooltipPlacement=\"right\">Hover this button to see a tooltip</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-tooltip/sections/dynamic-html-tooltip/dynamic-html-tooltip.component.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-tooltip/sections/dynamic-html-tooltip/dynamic-html-tooltip.component.ts ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'ugw-dynamic-html-tooltip',\n  templateUrl: './dynamic-html-tooltip.component.html',\n  styleUrls: ['./dynamic-html-tooltip.component.scss']\n})\nexport class DynamicHtmlTooltipComponent implements OnInit {\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-tooltip/sections/paragraph-tooltip/paragraph-tooltip.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-tooltip/sections/paragraph-tooltip/paragraph-tooltip.component.ts ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'ugw-paragraph-tooltip',\n  templateUrl: './paragraph-tooltip.component.html',\n  styleUrls: ['./paragraph-tooltip.component.scss']\n})\nexport class ParagraphTooltipComponent implements OnInit {\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-tooltip/sections/placement-tooltip/placement-tooltip.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-tooltip/sections/placement-tooltip/placement-tooltip.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary\" uiiTooltip=\"Hi! I am tooltip on right\" tooltipPlacement=\"right\">Tooltip on right</button>\n<button class=\"btn btn-primary\" uiiTooltip=\"Hi! I am tooltip on bottom\" tooltipPlacement=\"bottom\">Tooltip on bottom</button>\n<button class=\"btn btn-primary\" uiiTooltip=\"Hi! I am tooltip on left\" tooltipPlacement=\"left\">Tooltip on left</button>\n<button class=\"btn btn-primary\" uiiTooltip=\"Hi! I am tooltip on top\" tooltipPlacement=\"top\">Tooltip on top</button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-tooltip/sections/placement-tooltip/placement-tooltip.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/components/doc-tooltip/sections/placement-tooltip/placement-tooltip.component.ts ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'ugw-placement-tooltip',\n  templateUrl: './placement-tooltip.component.html',\n  styleUrls: ['./placement-tooltip.component.scss']\n})\nexport class PlacementTooltipComponent implements OnInit {\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./showcase/showcase.module": [
		"./src/app/showcase/showcase.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var pilar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pilar */ "./dist/uiigateway/pilar/fesm5/pilar.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(toastSvc, viewContainerRef) {
        this.toastSvc = toastSvc;
        this.viewContainerRef = viewContainerRef;
        this.toastSvc.setToastRootViewContainerRef(this.viewContainerRef);
        this.toastSvc.addToastDynamicComponent();
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.has-sidebar'),
        __metadata("design:type", Boolean)
    ], AppComponent.prototype, "hasSidebar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.has-breadcrumb'),
        __metadata("design:type", Boolean)
    ], AppComponent.prototype, "hasBreadcrumb", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.is-home'),
        __metadata("design:type", Boolean)
    ], AppComponent.prototype, "isHome", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-root',
            template: "<router-outlet></router-outlet>"
        }),
        __metadata("design:paramtypes", [pilar__WEBPACK_IMPORTED_MODULE_1__["ToastService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var pilar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pilar */ "./dist/uiigateway/pilar/fesm5/pilar.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _showcase_showcase_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./showcase/showcase.module */ "./src/app/showcase/showcase.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_4__["AppRoutes"],
                pilar__WEBPACK_IMPORTED_MODULE_3__["PilarModule"].forRoot(),
                _showcase_showcase_module__WEBPACK_IMPORTED_MODULE_6__["ShowcaseModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            exports: [
                pilar__WEBPACK_IMPORTED_MODULE_3__["PilarModule"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

var routes = [
    {
        path: '',
        loadChildren: './showcase/showcase.module#ShowcaseModule'
    },
    { path: '**', redirectTo: '' },
];
var AppRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/showcase/common/demo-footer/demo-footer.component.html":
/*!************************************************************************!*\
  !*** ./src/app/showcase/common/demo-footer/demo-footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-container\">\n  <p class=\"footer-pilar-text\"><span>PilarNG</span> by PilarTeam &copy; 2019</p>\n  <ul>\n    <li>\n      <a><i class=\"fa fa-github\" aria-hidden=\"true\"></i></a>\n    </li>\n    <li>\n      <a><i class=\"fa fa-gitlab\" aria-hidden=\"true\"></i></a>\n    </li>\n    <li>\n      <a><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\n    </li>\n    <li>\n      <a><i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i></a>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/showcase/common/demo-footer/demo-footer.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/showcase/common/demo-footer/demo-footer.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-container {\n  text-align: center;\n  margin: 60px 0;\n  color: #8994a3;\n}\n.footer-container .footer-pilar-text span {\n  font-weight: bold;\n  margin: 0;\n}\n.footer-container ul {\n  list-style: none;\n  display: flex;\n  width: 200px;\n  margin: 0 auto;\n  justify-content: space-around;\n  padding: 0;\n}\n.footer-container ul li a {\n  font-size: 22px;\n  color: #8994a3;\n}"

/***/ }),

/***/ "./src/app/showcase/common/demo-footer/demo-footer.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/showcase/common/demo-footer/demo-footer.component.ts ***!
  \**********************************************************************/
/*! exports provided: DemoFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoFooterComponent", function() { return DemoFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DemoFooterComponent = /** @class */ (function () {
    function DemoFooterComponent() {
    }
    DemoFooterComponent.prototype.ngOnInit = function () {
    };
    DemoFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-demo-footer',
            template: __webpack_require__(/*! ./demo-footer.component.html */ "./src/app/showcase/common/demo-footer/demo-footer.component.html"),
            styles: [__webpack_require__(/*! ./demo-footer.component.scss */ "./src/app/showcase/common/demo-footer/demo-footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DemoFooterComponent);
    return DemoFooterComponent;
}());



/***/ }),

/***/ "./src/app/showcase/common/demo-header/demo-header.component.html":
/*!************************************************************************!*\
  !*** ./src/app/showcase/common/demo-header/demo-header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"demo-nav\" [class.scroled]=\"isTop\" [class.header-mobile]=\"_showSidebar\">\n  <div id=\"demo-humberger\" (click)=\"onHumbergerButtonClick()\">\n    <div [class.anim-plus]=\"_showSidebar\"></div>\n    <div [style.display]=\"_showSidebar ? 'none' : 'block'\"></div>\n    <div [class.anim-minus]=\"_showSidebar\"></div>\n  </div>\n  <div id=\"demo-brand\">\n    <a [routerLink]=\"['/']\">\n      <img src=\"assets/images/pilar-logo.png\" [class.scroled]=\"isTop\"/>\n    </a>\n  </div>\n  <div id=\"demo-icon\">\n    <ul>\n      <li>\n        <a href=\"https://stackoverflow.com/\" target=\"_blank\">\n          <i class=\"fa fa-stack-overflow\" aria-hidden=\"true\"></i>\n        </a>\n      </li>\n      <li>\n        <a href=\"https://gitlab-cloud.uii.ac.id/uii-gateway/frontend/lib-uii-gateway-pilar-angular\" target=\"_blank\">\n          <i class=\"fa fa-gitlab\" aria-hidden=\"true\"></i>\n        </a>\n      </li>\n      <li>v1.11.11</li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/showcase/common/demo-header/demo-header.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/showcase/common/demo-header/demo-header.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".demo-nav {\n  width: 100%;\n  height: 80px;\n  padding: 0 70px;\n  color: #555555;\n  background: #ffffff;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  z-index: 100;\n  border-bottom: 1px solid #f1f1f1;\n  transition: 0.35s;\n}\n.demo-nav.scroled {\n  height: 60px;\n}\n@media screen and (max-width: 768px) {\n  .demo-nav {\n    height: 60px;\n    justify-content: center;\n  }\n}\n#demo-humberger {\n  cursor: pointer;\n  border-radius: 3px;\n  padding: 3px;\n  display: none;\n  width: 30px;\n  height: 30px;\n}\n@media screen and (max-width: 768px) {\n  #demo-humberger {\n    display: block;\n    position: absolute;\n    z-index: 2000;\n    left: 20px;\n  }\n}\n#demo-humberger div {\n  height: 4px;\n  background: #555555;\n  margin: 3px 0;\n  border-radius: 3px;\n  transition: 0.35s;\n}\n#demo-humberger div.anim-plus {\n  -webkit-transform: rotate(-225deg);\n          transform: rotate(-225deg);\n  margin-bottom: -7px;\n  margin-top: 10px;\n}\n#demo-humberger div.anim-minus {\n  -webkit-transform: rotate(225deg);\n          transform: rotate(225deg);\n}\n#demo-brand a img {\n  width: 155px;\n  transition: 0.35s;\n}\n#demo-brand a img.scroled {\n  width: 130px;\n}\n@media screen and (max-width: 768px) {\n  #demo-brand a img {\n    width: 130px;\n  }\n}\n#demo-icon {\n  width: 115px;\n}\n@media screen and (max-width: 768px) {\n  #demo-icon {\n    display: none;\n  }\n}\n#demo-icon ul {\n  list-style: none;\n  padding: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n#demo-icon li .fa {\n  font-size: 20px;\n}"

/***/ }),

/***/ "./src/app/showcase/common/demo-header/demo-header.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/showcase/common/demo-header/demo-header.component.ts ***!
  \**********************************************************************/
/*! exports provided: DemoHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoHeaderComponent", function() { return DemoHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DemoHeaderComponent = /** @class */ (function () {
    function DemoHeaderComponent() {
        this.showSidebarChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isTop = false;
    }
    Object.defineProperty(DemoHeaderComponent.prototype, "showSidebar", {
        set: function (value) {
            this._showSidebar = value;
        },
        enumerable: true,
        configurable: true
    });
    DemoHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.addEventListener('scroll', function () {
            _this.isTop = window.scrollY > 80;
        });
    };
    DemoHeaderComponent.prototype.onHumbergerButtonClick = function () {
        this._showSidebar = !this._showSidebar;
        this.showSidebarChange.emit(this._showSidebar);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], DemoHeaderComponent.prototype, "showSidebar", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DemoHeaderComponent.prototype, "showSidebarChange", void 0);
    DemoHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-demo-header',
            template: __webpack_require__(/*! ./demo-header.component.html */ "./src/app/showcase/common/demo-header/demo-header.component.html"),
            styles: [__webpack_require__(/*! ./demo-header.component.scss */ "./src/app/showcase/common/demo-header/demo-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DemoHeaderComponent);
    return DemoHeaderComponent;
}());



/***/ }),

/***/ "./src/app/showcase/common/demo-sidebar/demo-sidebar.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/showcase/common/demo-sidebar/demo-sidebar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"demo-sidebar\">\n  <ul class=\"menu-list\">\n    <li class=\"menu-list-container\">\n      <ul class=\"mobile-icon\">\n        <li>\n          <a href=\"https://stackoverflow.com/\" target=\"_blank\">\n            <i class=\"fa fa-stack-overflow\" aria-hidden=\"true\"></i>\n          </a>\n        </li>\n        <li>\n          <a href=\"https://gitlab-cloud.uii.ac.id/uii-gateway/frontend/lib-uii-gateway-pilar-angular\" target=\"_blank\">\n            <i class=\"fa fa-gitlab\" aria-hidden=\"true\"></i>\n          </a>\n        </li>\n        <li>v1</li>\n      </ul>\n    </li>\n    <li \n      *ngFor=\"let menu of menus; let i = index\" \n      class=\"menu-item\" \n      [class.active]=\"menu.active || isMenuActive(menu.url)\" \n      (click)=\"onMenuCLick(menu, i)\">\n        {{menu.label}}\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/showcase/common/demo-sidebar/demo-sidebar.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/showcase/common/demo-sidebar/demo-sidebar.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-list {\n  list-style: none;\n  padding: 22px 0 0 0;\n  height: 90vh;\n  overflow-y: auto;\n}\n\n.menu-item {\n  cursor: pointer;\n  padding: 5px 0 0 70px;\n  font-size: 18px;\n  transition: color 0.2s ease-in-out;\n}\n\n.menu-item:hover {\n  color: #00afd1;\n}\n\n.menu-item.active {\n  color: #00afd1;\n}\n\n.menu-list-container {\n  border-bottom: 1px solid #f1f1f1;\n  padding: 4px 0;\n}\n\n@media screen and (min-width: 768px) {\n  .menu-list-container {\n    display: none;\n  }\n}\n\n.mobile-icon {\n  display: flex;\n  padding: 0;\n  justify-content: space-between;\n  align-items: center;\n  list-style: none;\n  width: 40%;\n  margin: 0 auto;\n}\n\n.mobile-icon li {\n  font-size: 22px;\n}\n\n.mobile-icon li:last-child {\n  font-size: 18px;\n}\n\n.mobile-icon li a {\n  color: #555555;\n}"

/***/ }),

/***/ "./src/app/showcase/common/demo-sidebar/demo-sidebar.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/showcase/common/demo-sidebar/demo-sidebar.component.ts ***!
  \************************************************************************/
/*! exports provided: DemoSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoSidebarComponent", function() { return DemoSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DemoSidebarComponent = /** @class */ (function () {
    function DemoSidebarComponent(router) {
        this.router = router;
        this.menus = [];
        this.menuItemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._showSidebar = false;
    }
    Object.defineProperty(DemoSidebarComponent.prototype, "showSideBar", {
        set: function (value) {
            this._showSidebar = value;
        },
        enumerable: true,
        configurable: true
    });
    DemoSidebarComponent.prototype.onMenuCLick = function (item, i) {
        this.menus.forEach(function (element, index) {
            element.active = index === i ? true : false;
        });
        this.menuItemClick.emit(true);
        this.router.navigate([item.url]);
    };
    DemoSidebarComponent.prototype.ngOnInit = function () {
    };
    DemoSidebarComponent.prototype.isMenuActive = function (itemUrl) {
        if (itemUrl === 'installation') {
            itemUrl = '';
        }
        var url = this.router.url.toString().split('#');
        return url[0].replace(/\//g, '') === itemUrl;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DemoSidebarComponent.prototype, "showSideBar", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DemoSidebarComponent.prototype, "menus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DemoSidebarComponent.prototype, "menuItemClick", void 0);
    DemoSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-demo-sidebar',
            template: __webpack_require__(/*! ./demo-sidebar.component.html */ "./src/app/showcase/common/demo-sidebar/demo-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./demo-sidebar.component.scss */ "./src/app/showcase/common/demo-sidebar/demo-sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DemoSidebarComponent);
    return DemoSidebarComponent;
}());



/***/ }),

/***/ "./src/app/showcase/common/right-sidebar/right-sidebar.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/showcase/common/right-sidebar/right-sidebar.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul *ngIf=\"menus.length > 0\" class=\"right-menu\">\n  <li #menuRef *ngFor=\"let item of menus\">\n    <a href=\"{{baseAnchor}}#{{item.anchor}}\">{{item.title}}</a>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/showcase/common/right-sidebar/right-sidebar.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/showcase/common/right-sidebar/right-sidebar.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".right-menu {\n  padding: 22px 20px 0 0;\n  list-style: none;\n}\n.right-menu li {\n  padding-left: 22px;\n  margin: 3px 0;\n}\n.right-menu li a {\n  color: #555555;\n  transition: color 0.2s ease-in-out;\n}\n.right-menu li.active {\n  position: relative;\n}\n.right-menu li.active a {\n  color: #00afd1;\n}\n.right-menu li.active::before {\n  content: \"\";\n  left: -4px;\n  top: 9px;\n  border-radius: 50%;\n  width: 6px;\n  position: absolute;\n  background: #00afd1;\n  height: 6px;\n}"

/***/ }),

/***/ "./src/app/showcase/common/right-sidebar/right-sidebar.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/showcase/common/right-sidebar/right-sidebar.component.ts ***!
  \**************************************************************************/
/*! exports provided: RightSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightSidebarComponent", function() { return RightSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _showcase_right_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../showcase-right-nav.service */ "./src/app/showcase/showcase-right-nav.service.ts");
/* harmony import */ var _element_ref_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../element-ref.service */ "./src/app/showcase/element-ref.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RightSidebarComponent = /** @class */ (function () {
    function RightSidebarComponent(router, rightMenuSvc, elementRefSvc) {
        this.router = router;
        this.rightMenuSvc = rightMenuSvc;
        this.elementRefSvc = elementRefSvc;
        this.baseAnchor = router.url.split('#')[0];
    }
    RightSidebarComponent.prototype.ngOnInit = function () {
        this.anchorSubscription();
        this.fetchRighMenu();
    };
    RightSidebarComponent.prototype.anchorSubscription = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                _this.baseAnchor = event.url.split('#')[0];
            }
        });
    };
    RightSidebarComponent.prototype.fetchRighMenu = function () {
        var _this = this;
        this.rightMenuSvc.getRightMenu().subscribe(function (menus) {
            _this.menus = menus;
            setTimeout(function () {
                _this.elementRefSvc.setRightNavCollectionRef(_this.rightNavRef);
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('menuRef'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], RightSidebarComponent.prototype, "rightNavRef", void 0);
    RightSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-right-sidebar',
            template: __webpack_require__(/*! ./right-sidebar.component.html */ "./src/app/showcase/common/right-sidebar/right-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./right-sidebar.component.scss */ "./src/app/showcase/common/right-sidebar/right-sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _showcase_right_nav_service__WEBPACK_IMPORTED_MODULE_2__["ShowcaseRightNavService"],
            _element_ref_service__WEBPACK_IMPORTED_MODULE_3__["ElementRefService"]])
    ], RightSidebarComponent);
    return RightSidebarComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-accordion/doc-accordion.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/showcase/components/doc-accordion/doc-accordion.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ugw-component-header [title]=\"title\" [description]=\"description\"></ugw-component-header>\n<ugw-section [sections]=\"accordionSection\" [apiDocSections]=\"apiDocSection\"></ugw-section>"

/***/ }),

/***/ "./src/app/showcase/components/doc-accordion/doc-accordion.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/showcase/components/doc-accordion/doc-accordion.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/showcase/components/doc-accordion/doc-accordion.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/showcase/components/doc-accordion/doc-accordion.component.ts ***!
  \******************************************************************************/
/*! exports provided: DocAccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocAccordionComponent", function() { return DocAccordionComponent; });
/* harmony import */ var _sections_custom_html_accordion_custom_html_accordion_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sections/custom-html-accordion/custom-html-accordion.component */ "./src/app/showcase/components/doc-accordion/sections/custom-html-accordion/custom-html-accordion.component.ts");
/* harmony import */ var _sections_disable_accordion_disable_accordion_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections/disable-accordion/disable-accordion.component */ "./src/app/showcase/components/doc-accordion/sections/disable-accordion/disable-accordion.component.ts");
/* harmony import */ var _sections_opening_event_accordion_opening_event_accordion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/opening-event-accordion/opening-event-accordion.component */ "./src/app/showcase/components/doc-accordion/sections/opening-event-accordion/opening-event-accordion.component.ts");
/* harmony import */ var _sections_animation_accordion_animation_accordion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/animation-accordion/animation-accordion.component */ "./src/app/showcase/components/doc-accordion/sections/animation-accordion/animation-accordion.component.ts");
/* harmony import */ var _sections_basic_accordion_basic_accordion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/basic-accordion/basic-accordion.component */ "./src/app/showcase/components/doc-accordion/sections/basic-accordion/basic-accordion.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _showcase_right_nav_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../showcase-right-nav.service */ "./src/app/showcase/showcase-right-nav.service.ts");
/* harmony import */ var _sections_initially_opened_accordion_initially_opened_accordion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections/initially-opened-accordion/initially-opened-accordion.component */ "./src/app/showcase/components/doc-accordion/sections/initially-opened-accordion/initially-opened-accordion.component.ts");
/* harmony import */ var _sections_dynamic_accordion_dynamic_accordion_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sections/dynamic-accordion/dynamic-accordion.component */ "./src/app/showcase/components/doc-accordion/sections/dynamic-accordion/dynamic-accordion.component.ts");
/* harmony import */ var _sections_dynamic_body_accordion_dynamic_body_accordion_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sections/dynamic-body-accordion/dynamic-body-accordion.component */ "./src/app/showcase/components/doc-accordion/sections/dynamic-body-accordion/dynamic-body-accordion.component.ts");
/* harmony import */ var _sections_manual_toggle_accordion_manual_toggle_accordion_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sections/manual-toggle-accordion/manual-toggle-accordion.component */ "./src/app/showcase/components/doc-accordion/sections/manual-toggle-accordion/manual-toggle-accordion.component.ts");
/* harmony import */ var _sections_other_close_accordion_other_close_accordion_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sections/other-close-accordion/other-close-accordion.component */ "./src/app/showcase/components/doc-accordion/sections/other-close-accordion/other-close-accordion.component.ts");
/* harmony import */ var _sections_styling_accordion_styling_accordion_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sections/styling-accordion/styling-accordion.component */ "./src/app/showcase/components/doc-accordion/sections/styling-accordion/styling-accordion.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var DocAccordionComponent = /** @class */ (function () {
    function DocAccordionComponent(rightMenuSvc) {
        this.rightMenuSvc = rightMenuSvc;
        this.initializeMetaData();
        this.initializeApiDocumentation();
        this.initializeSection();
        this.setRightMenu();
    }
    DocAccordionComponent.prototype.initializeApiDocumentation = function () {
        this.apiDocSection = {
            title: this.title.toLowerCase(),
            selector: 'pil-accordion',
            properties: [
                {
                    name: 'heading',
                    type: 'string',
                    default: '',
                    description: 'Provide default header text.'
                },
                {
                    name: 'isAnimated',
                    type: 'boolean',
                    default: 'false',
                    description: 'Expand/collapse group panels with animation.'
                },
                {
                    name: 'isDisabled',
                    type: 'boolean',
                    default: 'false',
                    description: 'Disable group panels.'
                },
                {
                    name: 'isOpen',
                    type: 'boolean',
                    default: 'false',
                    description: 'Initially open group panels.'
                },
                {
                    name: 'closeOthers',
                    type: 'boolean',
                    default: 'false',
                    deacription: 'Only open one group panel at a time.'
                },
                {
                    name: 'panelColor',
                    type: 'string (default, primary, secondary & tertiary)',
                    default: 'default',
                    description: 'Panel color options.'
                }
            ],
            events: [
                {
                    name: 'isOpenChange',
                    type: 'EventEmitter<>',
                    default: '',
                    description: 'Event trigerred when a group is clicked.'
                }
            ]
        };
    };
    DocAccordionComponent.prototype.initializeMetaData = function () {
        this.title = 'Accordion';
        this.description = 'Accordion is a component we can use to push notifications that will be displayed at the top right corner of our screen.';
    };
    DocAccordionComponent.prototype.initializeSection = function () {
        this.accordionSection = [
            {
                anchor: 'basic',
                title: 'Basic',
                desc: 'Click header to expand/collapse the content.',
                component: _sections_basic_accordion_basic_accordion_component__WEBPACK_IMPORTED_MODULE_4__["BasicAccordionComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/basic-accordion/basic-accordion.component.html */ "./src/app/showcase/components/doc-accordion/sections/basic-accordion/basic-accordion.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/basic-accordion/basic-accordion.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-accordion/sections/basic-accordion/basic-accordion.component.ts")
            },
            {
                anchor: 'animation',
                title: 'With animation',
                desc: 'Use input property isAnimated to enable/disable animation.',
                component: _sections_animation_accordion_animation_accordion_component__WEBPACK_IMPORTED_MODULE_3__["AnimationAccordionComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/animation-accordion/animation-accordion.component.html */ "./src/app/showcase/components/doc-accordion/sections/animation-accordion/animation-accordion.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/animation-accordion/animation-accordion.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-accordion/sections/animation-accordion/animation-accordion.component.ts")
            },
            {
                anchor: 'opening-event',
                title: 'Group opening event',
                desc: 'Accordion with isOpenChange event listener.',
                component: _sections_opening_event_accordion_opening_event_accordion_component__WEBPACK_IMPORTED_MODULE_2__["OpeningEventAccordionComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/opening-event-accordion/opening-event-accordion.component.html */ "./src/app/showcase/components/doc-accordion/sections/opening-event-accordion/opening-event-accordion.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/opening-event-accordion/opening-event-accordion.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-accordion/sections/opening-event-accordion/opening-event-accordion.component.ts")
            },
            {
                anchor: 'disabled',
                title: 'Disabled',
                desc: 'Use input property isDisabled to disable group panels.',
                component: _sections_disable_accordion_disable_accordion_component__WEBPACK_IMPORTED_MODULE_1__["DisableAccordionComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/disable-accordion/disable-accordion.component.html */ "./src/app/showcase/components/doc-accordion/sections/disable-accordion/disable-accordion.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/disable-accordion/disable-accordion.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-accordion/sections/disable-accordion/disable-accordion.component.ts")
            },
            {
                anchor: 'intially-opened',
                title: 'Initially opened',
                desc: 'Use input property isOpen to initially opened group panels',
                component: _sections_initially_opened_accordion_initially_opened_accordion_component__WEBPACK_IMPORTED_MODULE_7__["InitiallyOpenedAccordionComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/initially-opened-accordion/initially-opened-accordion.component.html */ "./src/app/showcase/components/doc-accordion/sections/initially-opened-accordion/initially-opened-accordion.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/initially-opened-accordion/initially-opened-accordion.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-accordion/sections/initially-opened-accordion/initially-opened-accordion.component.ts")
            },
            {
                anchor: 'dynamic',
                title: 'Dynamic accordion',
                desc: '',
                component: _sections_dynamic_accordion_dynamic_accordion_component__WEBPACK_IMPORTED_MODULE_8__["DynamicAccordionComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/dynamic-accordion/dynamic-accordion.component.html */ "./src/app/showcase/components/doc-accordion/sections/dynamic-accordion/dynamic-accordion.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/dynamic-accordion/dynamic-accordion.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-accordion/sections/dynamic-accordion/dynamic-accordion.component.ts")
            },
            {
                anchor: 'dynamic-body-content',
                title: 'Dynamic body content',
                desc: '',
                component: _sections_dynamic_body_accordion_dynamic_body_accordion_component__WEBPACK_IMPORTED_MODULE_9__["DynamicBodyAccordionComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/dynamic-body-accordion/dynamic-body-accordion.component.html */ "./src/app/showcase/components/doc-accordion/sections/dynamic-body-accordion/dynamic-body-accordion.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/dynamic-body-accordion/dynamic-body-accordion.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-accordion/sections/dynamic-body-accordion/dynamic-body-accordion.component.ts")
            },
            {
                anchor: 'manual-toggle',
                title: 'Manual toggle',
                desc: '',
                component: _sections_manual_toggle_accordion_manual_toggle_accordion_component__WEBPACK_IMPORTED_MODULE_10__["ManualToggleAccordionComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/manual-toggle-accordion/manual-toggle-accordion.component.html */ "./src/app/showcase/components/doc-accordion/sections/manual-toggle-accordion/manual-toggle-accordion.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/manual-toggle-accordion/manual-toggle-accordion.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-accordion/sections/manual-toggle-accordion/manual-toggle-accordion.component.ts")
            },
            {
                anchor: 'other-close',
                title: 'Open only one at a time',
                desc: 'Use input property closeOthers to open one group at a time.',
                component: _sections_other_close_accordion_other_close_accordion_component__WEBPACK_IMPORTED_MODULE_11__["OtherCloseAccordionComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/other-close-accordion/other-close-accordion.component.html */ "./src/app/showcase/components/doc-accordion/sections/other-close-accordion/other-close-accordion.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/other-close-accordion/other-close-accordion.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-accordion/sections/other-close-accordion/other-close-accordion.component.ts")
            },
            {
                anchor: 'custom-html',
                title: 'Custom HTML',
                desc: 'If you want a custom heading, just simply inject uii-accordion-heading inside accordion group and ignore input property heading.',
                component: _sections_custom_html_accordion_custom_html_accordion_component__WEBPACK_IMPORTED_MODULE_0__["CustomHtmlAccordionComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/custom-html-accordion/custom-html-accordion.component.html */ "./src/app/showcase/components/doc-accordion/sections/custom-html-accordion/custom-html-accordion.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/custom-html-accordion/custom-html-accordion.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-accordion/sections/custom-html-accordion/custom-html-accordion.component.ts")
            },
            {
                anchor: 'styling',
                title: 'Styling',
                desc: 'There are 4 types of accordion which are default, primary, secondary, tertiary.',
                component: _sections_styling_accordion_styling_accordion_component__WEBPACK_IMPORTED_MODULE_12__["StylingAccordionComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/styling-accordion/styling-accordion.component.html */ "./src/app/showcase/components/doc-accordion/sections/styling-accordion/styling-accordion.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/styling-accordion/styling-accordion.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-accordion/sections/styling-accordion/styling-accordion.component.ts")
            }
        ];
    };
    DocAccordionComponent.prototype.setRightMenu = function () {
        var apiDocs = [{
                anchor: 'accordion-api-docs',
                title: 'API documentation',
                desc: null,
                component: null,
                markup: null,
                typescript: null
            }];
        var customRightMenu = this.accordionSection.concat(apiDocs);
        this.rightMenuSvc.setRightMenu(customRightMenu);
    };
    DocAccordionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'ugw-doc-accordion',
            template: __webpack_require__(/*! ./doc-accordion.component.html */ "./src/app/showcase/components/doc-accordion/doc-accordion.component.html"),
            styles: [__webpack_require__(/*! ./doc-accordion.component.scss */ "./src/app/showcase/components/doc-accordion/doc-accordion.component.scss")]
        }),
        __metadata("design:paramtypes", [_showcase_right_nav_service__WEBPACK_IMPORTED_MODULE_6__["ShowcaseRightNavService"]])
    ], DocAccordionComponent);
    return DocAccordionComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-accordion/sections/animation-accordion/animation-accordion.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-accordion/sections/animation-accordion/animation-accordion.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<uii-accordion [isAnimated]=\"true\">\n    <uii-accordion-group [heading]=\"'Static header'\">\n      <p class=\"padding\">\n        This is static header content.\n      </p>\n    </uii-accordion-group>\n</uii-accordion>"

/***/ }),

/***/ "./src/app/showcase/components/doc-accordion/sections/animation-accordion/animation-accordion.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-accordion/sections/animation-accordion/animation-accordion.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: AnimationAccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationAccordionComponent", function() { return AnimationAccordionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnimationAccordionComponent = /** @class */ (function () {
    function AnimationAccordionComponent() {
    }
    AnimationAccordionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-animation-accordion',
            template: __webpack_require__(/*! ./animation-accordion.component.html */ "./src/app/showcase/components/doc-accordion/sections/animation-accordion/animation-accordion.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AnimationAccordionComponent);
    return AnimationAccordionComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-accordion/sections/basic-accordion/basic-accordion.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-accordion/sections/basic-accordion/basic-accordion.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<uii-accordion>\n  <uii-accordion-group [panelClass]=\"'panel-primary'\" [heading]=\"'Otoritas'\">\n    <select>\n      <option value=\"volvo\">Volvo</option>\n      <option value=\"saab\">Saab</option>\n      <option value=\"opel\">Opel</option>\n      <option value=\"audi\">Audi</option>\n    </select>\n  </uii-accordion-group>\n  <uii-accordion-group [heading]=\"'Static header 2'\">\n  <p>\n    This is static header 2 content.\n  </p>\n  </uii-accordion-group>\n  <uii-accordion-group [heading]=\"'Static header 3'\">\n    <p>\n        This is static header 3 content.\n    </p>\n  </uii-accordion-group>\n</uii-accordion>\n"

/***/ }),

/***/ "./src/app/showcase/components/doc-accordion/sections/basic-accordion/basic-accordion.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-accordion/sections/basic-accordion/basic-accordion.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: BasicAccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicAccordionComponent", function() { return BasicAccordionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BasicAccordionComponent = /** @class */ (function () {
    function BasicAccordionComponent() {
    }
    BasicAccordionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-basic-accordion',
            template: __webpack_require__(/*! ./basic-accordion.component.html */ "./src/app/showcase/components/doc-accordion/sections/basic-accordion/basic-accordion.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], BasicAccordionComponent);
    return BasicAccordionComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-accordion/sections/custom-html-accordion/custom-html-accordion.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-accordion/sections/custom-html-accordion/custom-html-accordion.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<uii-accordion>\n  <uii-accordion-group>\n    <div uii-accordion-heading class=\"custom-heading\">\n      <button type=\"button\">\n        This is a markup!\n      </button>\n    </div>\n    <p class=\"padding\">\n      This is static header content.\n    </p>\n  </uii-accordion-group>\n</uii-accordion>\n"

/***/ }),

/***/ "./src/app/showcase/components/doc-accordion/sections/custom-html-accordion/custom-html-accordion.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-accordion/sections/custom-html-accordion/custom-html-accordion.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padding {\n  padding: 2rem;\n}\n\n.custom-heading {\n  padding: 0.5rem;\n  text-align: right;\n  color: black;\n}"

/***/ }),

/***/ "./src/app/showcase/components/doc-accordion/sections/custom-html-accordion/custom-html-accordion.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-accordion/sections/custom-html-accordion/custom-html-accordion.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: CustomHtmlAccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomHtmlAccordionComponent", function() { return CustomHtmlAccordionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomHtmlAccordionComponent = /** @class */ (function () {
    function CustomHtmlAccordionComponent() {
    }
    CustomHtmlAccordionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-custom-html-accordion',
            template: __webpack_require__(/*! ./custom-html-accordion.component.html */ "./src/app/showcase/components/doc-accordion/sections/custom-html-accordion/custom-html-accordion.component.html"),
            styles: [__webpack_require__(/*! ./custom-html-accordion.component.scss */ "./src/app/showcase/components/doc-accordion/sections/custom-html-accordion/custom-html-accordion.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomHtmlAccordionComponent);
    return CustomHtmlAccordionComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-accordion/sections/disable-accordion/disable-accordion.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-accordion/sections/disable-accordion/disable-accordion.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-primary margin-bottom\" (click)=\"isDisabled = !isDisabled\">Enable / disable second group panel</button>\n  <uii-accordion [isAnimated]=\"false\">\n    <uii-accordion-group [heading]=\"'Static header 1'\">\n      <p class=\"padding\">\n        This is static header 1 content.\n      </p>\n    </uii-accordion-group>\n    <uii-accordion-group [heading]=\"'Static header 2'\" [isDisabled]=\"isDisabled\">\n      <p class=\"padding\">\n        This is static header 2 content.\n      </p>\n    </uii-accordion-group>\n</uii-accordion>"

/***/ }),

/***/ "./src/app/showcase/components/doc-accordion/sections/disable-accordion/disable-accordion.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-accordion/sections/disable-accordion/disable-accordion.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin-bottom {\n  margin-bottom: 2rem;\n}"

/***/ }),

/***/ "./src/app/showcase/components/doc-accordion/sections/disable-accordion/disable-accordion.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-accordion/sections/disable-accordion/disable-accordion.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: DisableAccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisableAccordionComponent", function() { return DisableAccordionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DisableAccordionComponent = /** @class */ (function () {
    function DisableAccordionComponent() {
        this.isDisabled = false;
    }
    DisableAccordionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-disable-accordion',
            template: __webpack_require__(/*! ./disable-accordion.component.html */ "./src/app/showcase/components/doc-accordion/sections/disable-accordion/disable-accordion.component.html"),
            styles: [__webpack_require__(/*! ./disable-accordion.component.scss */ "./src/app/showcase/components/doc-accordion/sections/disable-accordion/disable-accordion.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DisableAccordionComponent);
    return DisableAccordionComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-accordion/sections/dynamic-accordion/dynamic-accordion.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-accordion/sections/dynamic-accordion/dynamic-accordion.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-primary margin-bottom\" (click)=\"addGroup()\">Add group item</button>\n<uii-accordion [closeOthers]=\"true\">\n    <uii-accordion-group *ngFor=\"let group of groups; let i = index;\" [heading]=\"group.heading + ' ' + (i+1)\">\n        <div style=\"padding: 2rem; font-size: 14px;\">\n            <p>{{ group.content }}</p>\n        </div>\n    </uii-accordion-group>\n</uii-accordion>\n"

/***/ }),

/***/ "./src/app/showcase/components/doc-accordion/sections/dynamic-accordion/dynamic-accordion.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-accordion/sections/dynamic-accordion/dynamic-accordion.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin-bottom {\n  margin-bottom: 2rem;\n}"

/***/ }),

/***/ "./src/app/showcase/components/doc-accordion/sections/dynamic-accordion/dynamic-accordion.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-accordion/sections/dynamic-accordion/dynamic-accordion.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: DynamicAccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicAccordionComponent", function() { return DynamicAccordionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DynamicAccordionComponent = /** @class */ (function () {
    function DynamicAccordionComponent() {
        this.groups = [
            {
                heading: 'Static header',
                content: 'This is static header content.'
            }
        ];
    }
    DynamicAccordionComponent.prototype.addGroup = function () {
        this.groups.push({
            heading: 'Static header',
            content: 'This is static header content.'
        });
    };
    DynamicAccordionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-dynamic-accordion',
            template: __webpack_require__(/*! ./dynamic-accordion.component.html */ "./src/app/showcase/components/doc-accordion/sections/dynamic-accordion/dynamic-accordion.component.html"),
            styles: [__webpack_require__(/*! ./dynamic-accordion.component.scss */ "./src/app/showcase/components/doc-accordion/sections/dynamic-accordion/dynamic-accordion.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DynamicAccordionComponent);
    return DynamicAccordionComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-accordion/sections/dynamic-body-accordion/dynamic-body-accordion.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-accordion/sections/dynamic-body-accordion/dynamic-body-accordion.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<uii-accordion [isAnimated]=\"true\">\n  <uii-accordion-group [heading]=\"'Static header'\">\n    <div class=\"padding\">\n      <button type=\"button\" class=\"btn btn-primary margin-bottom\" (click)=\"addItem()\">Add item</button>\n    </div>\n    <ul>\n      <li *ngFor=\"let item of items; let i = index;\">{{ 'Item number: ' + (i+1) }}</li>\n    </ul>\n  </uii-accordion-group>\n</uii-accordion>"

/***/ }),

/***/ "./src/app/showcase/components/doc-accordion/sections/dynamic-body-accordion/dynamic-body-accordion.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-accordion/sections/dynamic-body-accordion/dynamic-body-accordion.component.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin-bottom {\n  margin-bottom: 2rem;\n}"

/***/ }),

/***/ "./src/app/showcase/components/doc-accordion/sections/dynamic-body-accordion/dynamic-body-accordion.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-accordion/sections/dynamic-body-accordion/dynamic-body-accordion.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: DynamicBodyAccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicBodyAccordionComponent", function() { return DynamicBodyAccordionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DynamicBodyAccordionComponent = /** @class */ (function () {
    function DynamicBodyAccordionComponent() {
        this.items = [];
    }
    DynamicBodyAccordionComponent.prototype.addItem = function () {
        this.items.push('-');
    };
    DynamicBodyAccordionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-dynamic-body-accordion',
            template: __webpack_require__(/*! ./dynamic-body-accordion.component.html */ "./src/app/showcase/components/doc-accordion/sections/dynamic-body-accordion/dynamic-body-accordion.component.html"),
            styles: [__webpack_require__(/*! ./dynamic-body-accordion.component.scss */ "./src/app/showcase/components/doc-accordion/sections/dynamic-body-accordion/dynamic-body-accordion.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DynamicBodyAccordionComponent);
    return DynamicBodyAccordionComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-accordion/sections/initially-opened-accordion/initially-opened-accordion.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-accordion/sections/initially-opened-accordion/initially-opened-accordion.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<uii-accordion>\n  <uii-accordion-group [heading]=\"'Static header 1'\">\n    <p class=\"padding\">\n      This is static header 1 content.\n    </p>\n  </uii-accordion-group>\n  <uii-accordion-group [heading]=\"'Static header 2 - Initially expanded'\" [isOpen]=\"true\">\n    <p class=\"padding\">\n      This is static header 2 content.\n    </p>\n  </uii-accordion-group>\n</uii-accordion>\n"

/***/ }),

/***/ "./src/app/showcase/components/doc-accordion/sections/initially-opened-accordion/initially-opened-accordion.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-accordion/sections/initially-opened-accordion/initially-opened-accordion.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: InitiallyOpenedAccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitiallyOpenedAccordionComponent", function() { return InitiallyOpenedAccordionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InitiallyOpenedAccordionComponent = /** @class */ (function () {
    function InitiallyOpenedAccordionComponent() {
    }
    InitiallyOpenedAccordionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-initially-opened-accordion',
            template: __webpack_require__(/*! ./initially-opened-accordion.component.html */ "./src/app/showcase/components/doc-accordion/sections/initially-opened-accordion/initially-opened-accordion.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], InitiallyOpenedAccordionComponent);
    return InitiallyOpenedAccordionComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-accordion/sections/manual-toggle-accordion/manual-toggle-accordion.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-accordion/sections/manual-toggle-accordion/manual-toggle-accordion.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-primary margin-bottom\" (click)=\"isOpen = !isOpen\">Toggle panel</button>\n<uii-accordion>\n  <uii-accordion-group [heading]=\"'Static header'\" [isOpen]=\"isOpen\">\n    <p class=\"padding\">\n      This is static header content.\n    </p>\n  </uii-accordion-group>\n</uii-accordion>\n"

/***/ }),

/***/ "./src/app/showcase/components/doc-accordion/sections/manual-toggle-accordion/manual-toggle-accordion.component.scss":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-accordion/sections/manual-toggle-accordion/manual-toggle-accordion.component.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin-bottom {\n  margin-bottom: 2rem;\n}"

/***/ }),

/***/ "./src/app/showcase/components/doc-accordion/sections/manual-toggle-accordion/manual-toggle-accordion.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-accordion/sections/manual-toggle-accordion/manual-toggle-accordion.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: ManualToggleAccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualToggleAccordionComponent", function() { return ManualToggleAccordionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManualToggleAccordionComponent = /** @class */ (function () {
    function ManualToggleAccordionComponent() {
        this.isOpen = false;
    }
    ManualToggleAccordionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-manual-toggle-accordion',
            template: __webpack_require__(/*! ./manual-toggle-accordion.component.html */ "./src/app/showcase/components/doc-accordion/sections/manual-toggle-accordion/manual-toggle-accordion.component.html"),
            styles: [__webpack_require__(/*! ./manual-toggle-accordion.component.scss */ "./src/app/showcase/components/doc-accordion/sections/manual-toggle-accordion/manual-toggle-accordion.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ManualToggleAccordionComponent);
    return ManualToggleAccordionComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-accordion/sections/opening-event-accordion/opening-event-accordion.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-accordion/sections/opening-event-accordion/opening-event-accordion.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<uii-accordion>\n  <uii-accordion-group [heading]=\"'Static header 1'\" (isOpenChange)=\"panelClicked(1)\">\n    <p class=\"padding\">\n      This is static header 1 content.\n    </p>\n  </uii-accordion-group>\n  <uii-accordion-group [heading]=\"'Static header 2'\" (isOpenChange)=\"panelClicked(2)\">\n    <p class=\"padding\">\n      This is static header 2 content.\n    </p>\n  </uii-accordion-group>\n  <uii-accordion-group [heading]=\"'Static header 3'\" (isOpenChange)=\"panelClicked(3)\">\n    <p class=\"padding\">\n      This is static header 3 content.\n    </p>\n  </uii-accordion-group>\n</uii-accordion>\n<div class=\"well well-default\">{{ description }}</div>"

/***/ }),

/***/ "./src/app/showcase/components/doc-accordion/sections/opening-event-accordion/opening-event-accordion.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-accordion/sections/opening-event-accordion/opening-event-accordion.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: OpeningEventAccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpeningEventAccordionComponent", function() { return OpeningEventAccordionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OpeningEventAccordionComponent = /** @class */ (function () {
    function OpeningEventAccordionComponent() {
    }
    OpeningEventAccordionComponent.prototype.panelClicked = function (index) {
        this.description = "You clicked a group panel with index number: " + index;
    };
    OpeningEventAccordionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-opening-event-accordion',
            template: __webpack_require__(/*! ./opening-event-accordion.component.html */ "./src/app/showcase/components/doc-accordion/sections/opening-event-accordion/opening-event-accordion.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], OpeningEventAccordionComponent);
    return OpeningEventAccordionComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-accordion/sections/other-close-accordion/other-close-accordion.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-accordion/sections/other-close-accordion/other-close-accordion.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-primary margin-bottom\" (click)=\"closeOthers = !closeOthers\">Open only one at a time</button>\n  <uii-accordion [isAnimated]=\"true\" [closeOthers]=\"closeOthers\">\n  <uii-accordion-group [heading]=\"'Static header 1'\">\n    <p class=\"padding\">\n      This is static header 1 content.\n    </p>\n  </uii-accordion-group>\n  <uii-accordion-group [heading]=\"'Static header 2'\">\n    <p class=\"padding\">\n      This is static header 2 content.\n    </p>\n  </uii-accordion-group>\n  <uii-accordion-group [heading]=\"'Static header 3'\">\n    <p class=\"padding\">\n      This is static header 3 content.\n    </p>\n  </uii-accordion-group>\n</uii-accordion>"

/***/ }),

/***/ "./src/app/showcase/components/doc-accordion/sections/other-close-accordion/other-close-accordion.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-accordion/sections/other-close-accordion/other-close-accordion.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin-bottom {\n  margin-bottom: 2rem;\n}"

/***/ }),

/***/ "./src/app/showcase/components/doc-accordion/sections/other-close-accordion/other-close-accordion.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-accordion/sections/other-close-accordion/other-close-accordion.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: OtherCloseAccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherCloseAccordionComponent", function() { return OtherCloseAccordionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OtherCloseAccordionComponent = /** @class */ (function () {
    function OtherCloseAccordionComponent() {
        this.closeOthers = false;
    }
    OtherCloseAccordionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-other-close-accordion',
            template: __webpack_require__(/*! ./other-close-accordion.component.html */ "./src/app/showcase/components/doc-accordion/sections/other-close-accordion/other-close-accordion.component.html"),
            styles: [__webpack_require__(/*! ./other-close-accordion.component.scss */ "./src/app/showcase/components/doc-accordion/sections/other-close-accordion/other-close-accordion.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OtherCloseAccordionComponent);
    return OtherCloseAccordionComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-accordion/sections/styling-accordion/styling-accordion.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-accordion/sections/styling-accordion/styling-accordion.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<uii-accordion>\n  <uii-accordion-group [heading]=\"'Static header 1'\">\n    <p class=\"padding\">\n      This is static header 1 content.\n    </p>\n  </uii-accordion-group>\n  <uii-accordion-group [heading]=\"'Static header 2'\" [panelColor]=\"'primary'\"> \n    <p class=\"padding\">\n      This is static header 2 content.\n    </p>\n  </uii-accordion-group>\n  <uii-accordion-group [heading]=\"'Static header 3'\" [panelColor]=\"'secondary'\">\n    <p class=\"padding\">\n      This is static header 3 content.\n    </p>\n  </uii-accordion-group>\n  <uii-accordion-group [heading]=\"'Static header 4'\" [panelColor]=\"'tertiary'\">\n    <p class=\"padding\">\n      This is static header 4 content.\n    </p>\n  </uii-accordion-group>\n</uii-accordion>"

/***/ }),

/***/ "./src/app/showcase/components/doc-accordion/sections/styling-accordion/styling-accordion.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-accordion/sections/styling-accordion/styling-accordion.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: StylingAccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylingAccordionComponent", function() { return StylingAccordionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StylingAccordionComponent = /** @class */ (function () {
    function StylingAccordionComponent() {
    }
    StylingAccordionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-styling-accordion',
            template: __webpack_require__(/*! ./styling-accordion.component.html */ "./src/app/showcase/components/doc-accordion/sections/styling-accordion/styling-accordion.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], StylingAccordionComponent);
    return StylingAccordionComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-button/doc-button.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/showcase/components/doc-button/doc-button.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ugw-component-header [title]=\"title\" [description]=\"description\"></ugw-component-header>\n<ugw-section [sections]=\"buttonSections\" [apiDocSections]=\"apiDocSection\"></ugw-section>"

/***/ }),

/***/ "./src/app/showcase/components/doc-button/doc-button.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/showcase/components/doc-button/doc-button.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/showcase/components/doc-button/doc-button.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/showcase/components/doc-button/doc-button.component.ts ***!
  \************************************************************************/
/*! exports provided: DocButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocButtonComponent", function() { return DocButtonComponent; });
/* harmony import */ var _sections_size_button_size_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sections/size-button/size-button.component */ "./src/app/showcase/components/doc-button/sections/size-button/size-button.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _showcase_right_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../showcase-right-nav.service */ "./src/app/showcase/showcase-right-nav.service.ts");
/* harmony import */ var _sections_basic_button_basic_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/basic-button/basic-button.component */ "./src/app/showcase/components/doc-button/sections/basic-button/basic-button.component.ts");
/* harmony import */ var _sections_block_button_block_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/block-button/block-button.component */ "./src/app/showcase/components/doc-button/sections/block-button/block-button.component.ts");
/* harmony import */ var _sections_active_button_active_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/active-button/active-button.component */ "./src/app/showcase/components/doc-button/sections/active-button/active-button.component.ts");
/* harmony import */ var _sections_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sections/icon-button/icon-button.component */ "./src/app/showcase/components/doc-button/sections/icon-button/icon-button.component.ts");
/* harmony import */ var _sections_combination_icon_button_combination_icon_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections/combination-icon-button/combination-icon-button.component */ "./src/app/showcase/components/doc-button/sections/combination-icon-button/combination-icon-button.component.ts");
/* harmony import */ var _sections_loader_button_loader_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sections/loader-button/loader-button.component */ "./src/app/showcase/components/doc-button/sections/loader-button/loader-button.component.ts");
/* harmony import */ var _sections_disabled_button_disabled_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sections/disabled-button/disabled-button.component */ "./src/app/showcase/components/doc-button/sections/disabled-button/disabled-button.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DocButtonComponent = /** @class */ (function () {
    function DocButtonComponent(rightMenuSvc) {
        this.rightMenuSvc = rightMenuSvc;
        this.initializeMetaData();
        this.initializeApiDocumentation();
        this.initializeSection();
        this.setRightMenu();
    }
    DocButtonComponent.prototype.initializeApiDocumentation = function () {
        this.apiDocSection = {
            title: this.title.toLowerCase(),
            selector: 'pil-button',
            properties: [
                {
                    name: 'disabled',
                    description: 'When button disabled'
                },
                {
                    name: 'active',
                    description: 'When button active'
                }
            ]
        };
    };
    DocButtonComponent.prototype.initializeMetaData = function () {
        this.title = 'Button';
        this.description = 'Commonly used operating buttons, button combinations, button layouts.';
    };
    DocButtonComponent.prototype.initializeSection = function () {
        this.buttonSections = [
            {
                anchor: 'basic',
                title: 'Basic',
                desc: 'This is the most basic element in the component, you can quickly create a styled button.',
                component: _sections_basic_button_basic_button_component__WEBPACK_IMPORTED_MODULE_3__["BasicButtonComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/basic-button/basic-button.component.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-button/sections/basic-button/basic-button.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/basic-button/basic-button.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-button/sections/basic-button/basic-button.component.ts")
            },
            {
                anchor: 'active',
                title: 'Active',
                desc: 'When the button is active.',
                component: _sections_active_button_active_button_component__WEBPACK_IMPORTED_MODULE_5__["ActiveButtonComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/active-button/active-button.component.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-button/sections/active-button/active-button.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/active-button/active-button.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-button/sections/active-button/active-button.component.ts")
            },
            {
                anchor: 'disable',
                title: 'Disable',
                desc: 'When the button is disable.',
                component: _sections_disabled_button_disabled_button_component__WEBPACK_IMPORTED_MODULE_9__["DisabledButtonComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/disabled-button/disabled-button.component.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-button/sections/disabled-button/disabled-button.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/disabled-button/disabled-button.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-button/sections/disabled-button/disabled-button.component.ts")
            },
            {
                anchor: 'icon',
                title: 'Icon',
                desc: 'icon button.',
                component: _sections_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_6__["IconButtonComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/icon-button/icon-button.component.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-button/sections/icon-button/icon-button.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/icon-button/icon-button.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-button/sections/icon-button/icon-button.component.ts")
            },
            {
                anchor: 'combination icon',
                title: 'combination icon',
                desc: 'Combination icon and text button.',
                component: _sections_combination_icon_button_combination_icon_button_component__WEBPACK_IMPORTED_MODULE_7__["CombinationIconButtonComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/combination-icon-button/combination-icon-button.component.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-button/sections/combination-icon-button/combination-icon-button.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/combination-icon-button/combination-icon-button.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-button/sections/combination-icon-button/combination-icon-button.component.ts")
            },
            {
                anchor: 'loader',
                title: 'Loader',
                desc: 'Loader button.',
                component: _sections_loader_button_loader_button_component__WEBPACK_IMPORTED_MODULE_8__["LoaderButtonComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/loader-button/loader-button.component.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-button/sections/loader-button/loader-button.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/loader-button/loader-button.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-button/sections/loader-button/loader-button.component.ts")
            },
            {
                anchor: 'size',
                title: 'Size',
                desc: 'Property to set the button size.',
                component: _sections_size_button_size_button_component__WEBPACK_IMPORTED_MODULE_0__["SizeButtonComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/size-button/size-button.component.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-button/sections/size-button/size-button.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/size-button/size-button.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-button/sections/size-button/size-button.component.ts")
            },
            {
                anchor: 'block',
                title: 'Block',
                desc: 'Block buttom.',
                component: _sections_block_button_block_button_component__WEBPACK_IMPORTED_MODULE_4__["BlockButtonComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/block-button/block-button.component.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-button/sections/block-button/block-button.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/block-button/block-button.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-button/sections/block-button/block-button.component.ts")
            }
        ];
    };
    DocButtonComponent.prototype.setRightMenu = function () {
        var apiDocs = [{
                anchor: 'button-api-docs',
                title: 'API documentation',
                desc: null,
                component: null,
                markup: null,
                typescript: null
            }];
        var customRightMenu = this.buttonSections.concat(apiDocs);
        this.rightMenuSvc.setRightMenu(customRightMenu);
    };
    DocButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ugw-doc-button',
            template: __webpack_require__(/*! ./doc-button.component.html */ "./src/app/showcase/components/doc-button/doc-button.component.html"),
            styles: [__webpack_require__(/*! ./doc-button.component.scss */ "./src/app/showcase/components/doc-button/doc-button.component.scss")]
        }),
        __metadata("design:paramtypes", [_showcase_right_nav_service__WEBPACK_IMPORTED_MODULE_2__["ShowcaseRightNavService"]])
    ], DocButtonComponent);
    return DocButtonComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-button/sections/active-button/active-button.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-button/sections/active-button/active-button.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ActiveButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveButtonComponent", function() { return ActiveButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ActiveButtonComponent = /** @class */ (function () {
    function ActiveButtonComponent() {
    }
    ActiveButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-active-button',
            template: __webpack_require__(/*! ./active-button.component.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-button/sections/active-button/active-button.component.html")
        })
    ], ActiveButtonComponent);
    return ActiveButtonComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-button/sections/basic-button/basic-button.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-button/sections/basic-button/basic-button.component.ts ***!
  \************************************************************************************************/
/*! exports provided: BasicButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicButtonComponent", function() { return BasicButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BasicButtonComponent = /** @class */ (function () {
    function BasicButtonComponent() {
    }
    BasicButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-basic-button',
            template: __webpack_require__(/*! ./basic-button.component.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-button/sections/basic-button/basic-button.component.html")
        })
    ], BasicButtonComponent);
    return BasicButtonComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-button/sections/block-button/block-button.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-button/sections/block-button/block-button.component.ts ***!
  \************************************************************************************************/
/*! exports provided: BlockButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockButtonComponent", function() { return BlockButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BlockButtonComponent = /** @class */ (function () {
    function BlockButtonComponent() {
    }
    BlockButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-block-button',
            template: __webpack_require__(/*! ./block-button.component.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-button/sections/block-button/block-button.component.html"),
        })
    ], BlockButtonComponent);
    return BlockButtonComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-button/sections/combination-icon-button/combination-icon-button.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-button/sections/combination-icon-button/combination-icon-button.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: CombinationIconButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombinationIconButtonComponent", function() { return CombinationIconButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CombinationIconButtonComponent = /** @class */ (function () {
    function CombinationIconButtonComponent() {
    }
    CombinationIconButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-combination-icon-button',
            template: __webpack_require__(/*! ./combination-icon-button.component.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-button/sections/combination-icon-button/combination-icon-button.component.html")
        })
    ], CombinationIconButtonComponent);
    return CombinationIconButtonComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-button/sections/disabled-button/disabled-button.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-button/sections/disabled-button/disabled-button.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: DisabledButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisabledButtonComponent", function() { return DisabledButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DisabledButtonComponent = /** @class */ (function () {
    function DisabledButtonComponent() {
    }
    DisabledButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-disabled-button',
            template: __webpack_require__(/*! ./disabled-button.component.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-button/sections/disabled-button/disabled-button.component.html")
        })
    ], DisabledButtonComponent);
    return DisabledButtonComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-button/sections/icon-button/icon-button.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-button/sections/icon-button/icon-button.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: IconButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconButtonComponent", function() { return IconButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IconButtonComponent = /** @class */ (function () {
    function IconButtonComponent() {
    }
    IconButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-icon-button',
            template: __webpack_require__(/*! ./icon-button.component.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-button/sections/icon-button/icon-button.component.html")
        })
    ], IconButtonComponent);
    return IconButtonComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-button/sections/loader-button/loader-button.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-button/sections/loader-button/loader-button.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/showcase/components/doc-button/sections/loader-button/loader-button.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-button/sections/loader-button/loader-button.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: LoaderButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderButtonComponent", function() { return LoaderButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoaderButtonComponent = /** @class */ (function () {
    function LoaderButtonComponent() {
        this.primaryPropetyLoading = false;
        this.secondaryPropetyLoading = false;
        this.successPropetyLoading = false;
        this.infoPropetyLoading = false;
        this.warningPropetyLoading = false;
        this.dangerPropetyLoading = false;
    }
    LoaderButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-loader-button',
            template: __webpack_require__(/*! ./loader-button.component.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-button/sections/loader-button/loader-button.component.html"),
            styles: [__webpack_require__(/*! ./loader-button.component.scss */ "./src/app/showcase/components/doc-button/sections/loader-button/loader-button.component.scss")]
        })
    ], LoaderButtonComponent);
    return LoaderButtonComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-button/sections/size-button/size-button.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-button/sections/size-button/size-button.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: SizeButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizeButtonComponent", function() { return SizeButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SizeButtonComponent = /** @class */ (function () {
    function SizeButtonComponent() {
    }
    SizeButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-size-button',
            template: __webpack_require__(/*! ./size-button.component.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-button/sections/size-button/size-button.component.html"),
        })
    ], SizeButtonComponent);
    return SizeButtonComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-chips/doc-chips.component.html":
/*!************************************************************************!*\
  !*** ./src/app/showcase/components/doc-chips/doc-chips.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ugw-component-header [title]=\"title\" [description]=\"description\"></ugw-component-header>\n<ugw-section [sections]=\"chipsSections\" [apiDocSections]=\"apiDocSection\"></ugw-section>\n"

/***/ }),

/***/ "./src/app/showcase/components/doc-chips/doc-chips.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/showcase/components/doc-chips/doc-chips.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/showcase/components/doc-chips/doc-chips.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/showcase/components/doc-chips/doc-chips.component.ts ***!
  \**********************************************************************/
/*! exports provided: DocChipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocChipsComponent", function() { return DocChipsComponent; });
/* harmony import */ var _sections_disable_chip_disable_chip_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sections/disable-chip/disable-chip.component */ "./src/app/showcase/components/doc-chips/sections/disable-chip/disable-chip.component.ts");
/* harmony import */ var _sections_basic_chip_basic_chip_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections/basic-chip/basic-chip.component */ "./src/app/showcase/components/doc-chips/sections/basic-chip/basic-chip.component.ts");
/* harmony import */ var _showcase_right_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../showcase-right-nav.service */ "./src/app/showcase/showcase-right-nav.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sections_vertical_chip_vertical_chip_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/vertical-chip/vertical-chip.component */ "./src/app/showcase/components/doc-chips/sections/vertical-chip/vertical-chip.component.ts");
/* harmony import */ var _sections_horizontal_chip_horizontal_chip_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/horizontal-chip/horizontal-chip.component */ "./src/app/showcase/components/doc-chips/sections/horizontal-chip/horizontal-chip.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DocChipsComponent = /** @class */ (function () {
    function DocChipsComponent(rightMenuSvc) {
        this.rightMenuSvc = rightMenuSvc;
        this.initializeMetaData();
        this.initializeApiDocumentation();
        this.initializeSection();
        this.setRightMenu();
    }
    DocChipsComponent.prototype.initializeApiDocumentation = function () {
        // For API on Bottom
        this.apiDocSection = {
            title: this.title.toLowerCase(),
            selector: 'chips',
            properties: [
                {
                    name: '[items]',
                    type: 'Array',
                    default: 'null',
                    description: 'Provide default items of chip.'
                },
                {
                    name: '[disabled]',
                    type: 'booelan',
                    default: 'false',
                    description: 'Disable all options on some of form'
                },
                {
                    name: 'position',
                    type: 'string',
                    default: 'horizontal',
                    description: 'Change position chip (vertical | horizontal)'
                },
            ],
            events: [
                {
                    name: '(sendData)',
                    type: 'EventEmitter<>',
                    default: 'null',
                    description: 'Fired when selected files changed'
                }
            ]
        };
    };
    DocChipsComponent.prototype.initializeMetaData = function () {
        this.title = 'Chips';
        this.description = 'A chip is a component that is basically like a checkbox';
    };
    DocChipsComponent.prototype.initializeSection = function () {
        this.chipsSections = [
            {
                anchor: 'basic',
                title: 'Basic',
                desc: 'Click on options from them',
                component: _sections_basic_chip_basic_chip_component__WEBPACK_IMPORTED_MODULE_1__["BasicChipComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/basic-chip/basic-chip.component.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-chips/sections/basic-chip/basic-chip.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/basic-chip/basic-chip.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-chips/sections/basic-chip/basic-chip.component.ts")
            },
            {
                anchor: 'disable',
                title: 'Disable',
                desc: 'Disable chip',
                component: _sections_disable_chip_disable_chip_component__WEBPACK_IMPORTED_MODULE_0__["DisableChipComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/disable-chip/disable-chip.component.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-chips/sections/disable-chip/disable-chip.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/disable-chip/disable-chip.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-chips/sections/disable-chip/disable-chip.component.ts")
            },
            {
                anchor: 'vertical',
                title: 'Vertical',
                desc: 'Vertical chip',
                component: _sections_vertical_chip_vertical_chip_component__WEBPACK_IMPORTED_MODULE_4__["VerticalChipComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/vertical-chip/vertical-chip.component.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-chips/sections/vertical-chip/vertical-chip.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/vertical-chip/vertical-chip.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-chips/sections/vertical-chip/vertical-chip.component.ts")
            },
            {
                anchor: 'horizontal',
                title: 'Horizontal',
                desc: 'Hertical chip',
                component: _sections_horizontal_chip_horizontal_chip_component__WEBPACK_IMPORTED_MODULE_5__["HorizontalChipComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/horizontal-chip/horizontal-chip.component.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-chips/sections/horizontal-chip/horizontal-chip.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/horizontal-chip/horizontal-chip.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-chips/sections/horizontal-chip/horizontal-chip.component.ts")
            },
        ];
    };
    DocChipsComponent.prototype.setRightMenu = function () {
        var apiDocs = [{
                anchor: 'chips-api-docs',
                title: 'API documentation',
                desc: null,
                component: null,
                markup: null,
                typescript: null
            }];
        var customRightMenu = this.chipsSections.concat(apiDocs);
        this.rightMenuSvc.setRightMenu(customRightMenu);
    };
    DocChipsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'ugw-doc-chips',
            template: __webpack_require__(/*! ./doc-chips.component.html */ "./src/app/showcase/components/doc-chips/doc-chips.component.html"),
            styles: [__webpack_require__(/*! ./doc-chips.component.scss */ "./src/app/showcase/components/doc-chips/doc-chips.component.scss")]
        }),
        __metadata("design:paramtypes", [_showcase_right_nav_service__WEBPACK_IMPORTED_MODULE_2__["ShowcaseRightNavService"]])
    ], DocChipsComponent);
    return DocChipsComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-chips/sections/basic-chip/basic-chip.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-chips/sections/basic-chip/basic-chip.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/showcase/components/doc-chips/sections/basic-chip/basic-chip.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-chips/sections/basic-chip/basic-chip.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: BasicChipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicChipComponent", function() { return BasicChipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BasicChipComponent = /** @class */ (function () {
    function BasicChipComponent() {
        this.dataDummy = [
            {
                label: 'Item 1 & Item 2',
                value: 'item1_and_item2'
            },
            {
                label: 'Item 2',
                value: 'item_2'
            },
            {
                label: 'Item 3',
                value: 'item_3'
            },
            {
                label: 'Item 4',
                value: 'item_4'
            },
            {
                label: 'Item 5',
                value: 'item_5'
            },
        ];
    }
    BasicChipComponent.prototype.ngOnInit = function () {
    };
    BasicChipComponent.prototype.onGetData = function ($event) {
    };
    BasicChipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-basic-chip',
            template: __webpack_require__(/*! ./basic-chip.component.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-chips/sections/basic-chip/basic-chip.component.html"),
            styles: [__webpack_require__(/*! ./basic-chip.component.scss */ "./src/app/showcase/components/doc-chips/sections/basic-chip/basic-chip.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicChipComponent);
    return BasicChipComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-chips/sections/disable-chip/disable-chip.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-chips/sections/disable-chip/disable-chip.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/showcase/components/doc-chips/sections/disable-chip/disable-chip.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-chips/sections/disable-chip/disable-chip.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: DisableChipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisableChipComponent", function() { return DisableChipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DisableChipComponent = /** @class */ (function () {
    function DisableChipComponent() {
        this.dataDummy = [
            {
                label: 'Disable',
                value: 'Disable'
            }
        ];
    }
    DisableChipComponent.prototype.ngOnInit = function () {
    };
    DisableChipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-disable-chip',
            template: __webpack_require__(/*! ./disable-chip.component.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-chips/sections/disable-chip/disable-chip.component.html"),
            styles: [__webpack_require__(/*! ./disable-chip.component.scss */ "./src/app/showcase/components/doc-chips/sections/disable-chip/disable-chip.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DisableChipComponent);
    return DisableChipComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-chips/sections/horizontal-chip/horizontal-chip.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-chips/sections/horizontal-chip/horizontal-chip.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/showcase/components/doc-chips/sections/horizontal-chip/horizontal-chip.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-chips/sections/horizontal-chip/horizontal-chip.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: HorizontalChipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalChipComponent", function() { return HorizontalChipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HorizontalChipComponent = /** @class */ (function () {
    function HorizontalChipComponent() {
        this.dataDummy = [
            {
                label: 'Item 1',
                value: 'item_1'
            },
            {
                label: 'Item 2',
                value: 'item_2'
            }
        ];
    }
    HorizontalChipComponent.prototype.ngOnInit = function () {
    };
    HorizontalChipComponent.prototype.onGetData = function ($event) {
    };
    HorizontalChipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-horizontal-chip',
            template: __webpack_require__(/*! ./horizontal-chip.component.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-chips/sections/horizontal-chip/horizontal-chip.component.html"),
            styles: [__webpack_require__(/*! ./horizontal-chip.component.scss */ "./src/app/showcase/components/doc-chips/sections/horizontal-chip/horizontal-chip.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HorizontalChipComponent);
    return HorizontalChipComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-chips/sections/vertical-chip/vertical-chip.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-chips/sections/vertical-chip/vertical-chip.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/showcase/components/doc-chips/sections/vertical-chip/vertical-chip.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-chips/sections/vertical-chip/vertical-chip.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: VerticalChipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalChipComponent", function() { return VerticalChipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VerticalChipComponent = /** @class */ (function () {
    function VerticalChipComponent() {
        this.dataDummy = [
            {
                label: 'Item 1',
                value: 'item_1'
            },
            {
                label: 'Item 2',
                value: 'item_2'
            },
            {
                label: 'Item 3',
                value: 'item_3'
            }
        ];
    }
    VerticalChipComponent.prototype.ngOnInit = function () {
    };
    VerticalChipComponent.prototype.onGetData = function ($event) {
    };
    VerticalChipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-vertical-chip',
            template: __webpack_require__(/*! ./vertical-chip.component.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-chips/sections/vertical-chip/vertical-chip.component.html"),
            styles: [__webpack_require__(/*! ./vertical-chip.component.scss */ "./src/app/showcase/components/doc-chips/sections/vertical-chip/vertical-chip.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], VerticalChipComponent);
    return VerticalChipComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-file-upload/doc-file-upload.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-file-upload/doc-file-upload.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ugw-component-header [title]=\"title\" [description]=\"description\"></ugw-component-header>\n<ugw-section [sections]=\"fileUploadSections\" [apiDocSections]=\"apiDocSection\"></ugw-section>"

/***/ }),

/***/ "./src/app/showcase/components/doc-file-upload/doc-file-upload.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-file-upload/doc-file-upload.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/showcase/components/doc-file-upload/doc-file-upload.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/showcase/components/doc-file-upload/doc-file-upload.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DocFileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocFileUploadComponent", function() { return DocFileUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _showcase_right_nav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../showcase-right-nav.service */ "./src/app/showcase/showcase-right-nav.service.ts");
/* harmony import */ var _sections_basic_file_upload_basic_file_upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/basic-file-upload/basic-file-upload.component */ "./src/app/showcase/components/doc-file-upload/sections/basic-file-upload/basic-file-upload.component.ts");
/* harmony import */ var _sections_multiple_file_upload_multiple_file_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/multiple-file-upload/multiple-file-upload.component */ "./src/app/showcase/components/doc-file-upload/sections/multiple-file-upload/multiple-file-upload.component.ts");
/* harmony import */ var _sections_size_file_upload_size_file_upload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/size-file-upload/size-file-upload.component */ "./src/app/showcase/components/doc-file-upload/sections/size-file-upload/size-file-upload.component.ts");
/* harmony import */ var _sections_type_file_upload_type_file_upload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/type-file-upload/type-file-upload.component */ "./src/app/showcase/components/doc-file-upload/sections/type-file-upload/type-file-upload.component.ts");
/* harmony import */ var _sections_events_file_upload_events_file_upload_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sections/events-file-upload/events-file-upload.component */ "./src/app/showcase/components/doc-file-upload/sections/events-file-upload/events-file-upload.component.ts");
/* harmony import */ var _sections_prev_position_file_upload_prev_position_file_upload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections/prev-position-file-upload/prev-position-file-upload.component */ "./src/app/showcase/components/doc-file-upload/sections/prev-position-file-upload/prev-position-file-upload.component.ts");
/* harmony import */ var _sections_set_file_upload_set_file_upload_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sections/set-file-upload/set-file-upload.component */ "./src/app/showcase/components/doc-file-upload/sections/set-file-upload/set-file-upload.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DocFileUploadComponent = /** @class */ (function () {
    function DocFileUploadComponent(rightMenuSvc) {
        this.rightMenuSvc = rightMenuSvc;
        this.initializeMetaData();
        this.initializeApiDocumentation();
        this.initializeSection();
        this.setRightMenu();
    }
    DocFileUploadComponent.prototype.initializeApiDocumentation = function () {
        this.apiDocSection = {
            title: this.title.toLowerCase(),
            selector: 'pil-file-upload',
            properties: [
                {
                    name: 'inputLabel',
                    type: 'string',
                    default: 'Pilih berkas',
                    description: 'Label of upload file button'
                },
                {
                    name: 'fileType',
                    type: 'string',
                    default: '.csv, .xlsx, application/pdf',
                    description: 'Type of file to upload'
                },
                {
                    name: 'maxFileSize',
                    type: 'number',
                    default: '1',
                    description: 'Maximum size of file to upload, this property depends on maxFileType'
                },
                {
                    name: 'showFileSize',
                    type: 'boolean',
                    default: 'true',
                    description: 'Hide or show size of the file'
                },
                {
                    name: 'maxFileType',
                    type: 'string',
                    default: 'KB',
                    description: 'Size type'
                },
                {
                    name: 'previewPosition',
                    type: 'string',
                    default: 'bottom',
                    description: 'Set the placement of file preview, this property just for single file upload'
                },
                {
                    name: 'showPreview',
                    type: 'boolean',
                    default: 'true',
                    description: 'Hide or show file preview'
                },
                {
                    name: 'multiple',
                    type: 'boolean',
                    default: 'false',
                    description: 'Muiltiple means you can upload more than one file'
                },
                {
                    name: 'fileList',
                    type: 'Array<any>',
                    default: '[ ]',
                    description: 'List of files from your component into send to upload component'
                }
            ],
            events: [
                {
                    name: 'filesSelected',
                    type: 'EventEmitter<>',
                    default: 'null',
                    description: 'Fired when selected files changed'
                }
            ]
        };
    };
    DocFileUploadComponent.prototype.initializeMetaData = function () {
        this.title = 'File upload';
        this.description = 'Upload your file';
    };
    DocFileUploadComponent.prototype.initializeSection = function () {
        this.fileUploadSections = [
            {
                anchor: 'basic',
                title: 'Basic',
                desc: 'Basic file upload implementation',
                component: _sections_basic_file_upload_basic_file_upload_component__WEBPACK_IMPORTED_MODULE_2__["BasicFileUploadComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/basic-file-upload/basic-file-upload.component.html */ "./src/app/showcase/components/doc-file-upload/sections/basic-file-upload/basic-file-upload.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/basic-file-upload/basic-file-upload.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-file-upload/sections/basic-file-upload/basic-file-upload.component.ts")
            },
            {
                anchor: 'file-type',
                title: 'File type',
                desc: 'You can specify the file type',
                component: _sections_type_file_upload_type_file_upload_component__WEBPACK_IMPORTED_MODULE_5__["TypeFileUploadComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/type-file-upload/type-file-upload.component.html */ "./src/app/showcase/components/doc-file-upload/sections/type-file-upload/type-file-upload.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/type-file-upload/type-file-upload.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-file-upload/sections/type-file-upload/type-file-upload.component.ts")
            },
            {
                anchor: 'file-size',
                title: 'File size',
                desc: 'You can specify the maximum size of file',
                component: _sections_size_file_upload_size_file_upload_component__WEBPACK_IMPORTED_MODULE_4__["SizeFileUploadComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/size-file-upload/size-file-upload.component.html */ "./src/app/showcase/components/doc-file-upload/sections/size-file-upload/size-file-upload.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/size-file-upload/size-file-upload.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-file-upload/sections/size-file-upload/size-file-upload.component.ts")
            },
            {
                anchor: 'multiple-file',
                title: 'Multiple files',
                desc: 'You can upload multiple files',
                component: _sections_multiple_file_upload_multiple_file_upload_component__WEBPACK_IMPORTED_MODULE_3__["MultipleFileUploadComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/multiple-file-upload/multiple-file-upload.component.html */ "./src/app/showcase/components/doc-file-upload/sections/multiple-file-upload/multiple-file-upload.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/multiple-file-upload/multiple-file-upload.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-file-upload/sections/multiple-file-upload/multiple-file-upload.component.ts")
            },
            {
                anchor: 'preview-position',
                title: 'Preview position',
                desc: 'If you upload a single file, you can specify the position of preview',
                component: _sections_prev_position_file_upload_prev_position_file_upload_component__WEBPACK_IMPORTED_MODULE_7__["PrevPositionFileUploadComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/prev-position-file-upload/prev-position-file-upload.component.html */ "./src/app/showcase/components/doc-file-upload/sections/prev-position-file-upload/prev-position-file-upload.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/prev-position-file-upload/prev-position-file-upload.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-file-upload/sections/prev-position-file-upload/prev-position-file-upload.component.ts")
            },
            {
                anchor: 'set-file',
                title: 'Set files',
                desc: 'You can set the files from your component',
                component: _sections_set_file_upload_set_file_upload_component__WEBPACK_IMPORTED_MODULE_8__["SetFileUploadComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/set-file-upload/set-file-upload.component.html */ "./src/app/showcase/components/doc-file-upload/sections/set-file-upload/set-file-upload.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/set-file-upload/set-file-upload.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-file-upload/sections/set-file-upload/set-file-upload.component.ts")
            },
            {
                anchor: 'file-upload-event',
                title: 'Selected files event',
                desc: 'Triggered when files selected',
                component: _sections_events_file_upload_events_file_upload_component__WEBPACK_IMPORTED_MODULE_6__["EventsFileUploadComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/events-file-upload/events-file-upload.component.html */ "./src/app/showcase/components/doc-file-upload/sections/events-file-upload/events-file-upload.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/events-file-upload/events-file-upload.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-file-upload/sections/events-file-upload/events-file-upload.component.ts")
            }
        ];
    };
    DocFileUploadComponent.prototype.setRightMenu = function () {
        var apiDocs = [{
                anchor: 'file-upload-api-docs',
                title: 'API documentation',
                desc: null,
                component: null,
                markup: null,
                typescript: null
            }];
        var customRightMenu = this.fileUploadSections.concat(apiDocs);
        this.rightMenuSvc.setRightMenu(customRightMenu);
    };
    DocFileUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-doc-file-upload',
            template: __webpack_require__(/*! ./doc-file-upload.component.html */ "./src/app/showcase/components/doc-file-upload/doc-file-upload.component.html"),
            styles: [__webpack_require__(/*! ./doc-file-upload.component.scss */ "./src/app/showcase/components/doc-file-upload/doc-file-upload.component.scss")]
        }),
        __metadata("design:paramtypes", [_showcase_right_nav_service__WEBPACK_IMPORTED_MODULE_1__["ShowcaseRightNavService"]])
    ], DocFileUploadComponent);
    return DocFileUploadComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-file-upload/sections/basic-file-upload/basic-file-upload.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-file-upload/sections/basic-file-upload/basic-file-upload.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<uii-file-upload></uii-file-upload>"

/***/ }),

/***/ "./src/app/showcase/components/doc-file-upload/sections/basic-file-upload/basic-file-upload.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-file-upload/sections/basic-file-upload/basic-file-upload.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: BasicFileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicFileUploadComponent", function() { return BasicFileUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BasicFileUploadComponent = /** @class */ (function () {
    function BasicFileUploadComponent() {
    }
    BasicFileUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-basic-file-upload',
            template: __webpack_require__(/*! ./basic-file-upload.component.html */ "./src/app/showcase/components/doc-file-upload/sections/basic-file-upload/basic-file-upload.component.html")
        })
    ], BasicFileUploadComponent);
    return BasicFileUploadComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-file-upload/sections/events-file-upload/events-file-upload.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-file-upload/sections/events-file-upload/events-file-upload.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<uii-file-upload [multiple]=\"true\" (filesSelected)=\"onFileSelected($event)\"></uii-file-upload>\n<div class=\"well well-default\">\n  {{selectedFiles.length}} files selected\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/doc-file-upload/sections/events-file-upload/events-file-upload.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-file-upload/sections/events-file-upload/events-file-upload.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: EventsFileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsFileUploadComponent", function() { return EventsFileUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EventsFileUploadComponent = /** @class */ (function () {
    function EventsFileUploadComponent() {
        this.selectedFiles = [];
    }
    EventsFileUploadComponent.prototype.onFileSelected = function ($event) {
        this.selectedFiles = ($event) ? $event : [];
    };
    EventsFileUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-events-file-upload',
            template: __webpack_require__(/*! ./events-file-upload.component.html */ "./src/app/showcase/components/doc-file-upload/sections/events-file-upload/events-file-upload.component.html")
        })
    ], EventsFileUploadComponent);
    return EventsFileUploadComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-file-upload/sections/multiple-file-upload/multiple-file-upload.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-file-upload/sections/multiple-file-upload/multiple-file-upload.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<uii-file-upload [multiple]=\"true\"></uii-file-upload>"

/***/ }),

/***/ "./src/app/showcase/components/doc-file-upload/sections/multiple-file-upload/multiple-file-upload.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-file-upload/sections/multiple-file-upload/multiple-file-upload.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: MultipleFileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleFileUploadComponent", function() { return MultipleFileUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MultipleFileUploadComponent = /** @class */ (function () {
    function MultipleFileUploadComponent() {
    }
    MultipleFileUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-multiple-file-upload',
            template: __webpack_require__(/*! ./multiple-file-upload.component.html */ "./src/app/showcase/components/doc-file-upload/sections/multiple-file-upload/multiple-file-upload.component.html")
        })
    ], MultipleFileUploadComponent);
    return MultipleFileUploadComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-file-upload/sections/prev-position-file-upload/prev-position-file-upload.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-file-upload/sections/prev-position-file-upload/prev-position-file-upload.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<uii-file-upload [previewPosition]=\"'right'\"></uii-file-upload>"

/***/ }),

/***/ "./src/app/showcase/components/doc-file-upload/sections/prev-position-file-upload/prev-position-file-upload.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-file-upload/sections/prev-position-file-upload/prev-position-file-upload.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: PrevPositionFileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrevPositionFileUploadComponent", function() { return PrevPositionFileUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PrevPositionFileUploadComponent = /** @class */ (function () {
    function PrevPositionFileUploadComponent() {
    }
    PrevPositionFileUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-prev-position-file-upload',
            template: __webpack_require__(/*! ./prev-position-file-upload.component.html */ "./src/app/showcase/components/doc-file-upload/sections/prev-position-file-upload/prev-position-file-upload.component.html")
        })
    ], PrevPositionFileUploadComponent);
    return PrevPositionFileUploadComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-file-upload/sections/set-file-upload/set-file-upload.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-file-upload/sections/set-file-upload/set-file-upload.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"well well-default\">\n  <input type=\"file\" (change)=\"onFileSelect($event)\">\n</div>\n<uii-file-upload [fileList]=\"selectedFiles\"></uii-file-upload>"

/***/ }),

/***/ "./src/app/showcase/components/doc-file-upload/sections/set-file-upload/set-file-upload.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-file-upload/sections/set-file-upload/set-file-upload.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: SetFileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetFileUploadComponent", function() { return SetFileUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SetFileUploadComponent = /** @class */ (function () {
    function SetFileUploadComponent() {
    }
    SetFileUploadComponent.prototype.onFileSelect = function ($event) {
        this.selectedFiles = $event;
    };
    SetFileUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-set-file-upload',
            template: __webpack_require__(/*! ./set-file-upload.component.html */ "./src/app/showcase/components/doc-file-upload/sections/set-file-upload/set-file-upload.component.html")
        })
    ], SetFileUploadComponent);
    return SetFileUploadComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-file-upload/sections/size-file-upload/size-file-upload.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-file-upload/sections/size-file-upload/size-file-upload.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<uii-file-upload [maxFileSize]=\"160\" [maxFileType]=\"'KB'\"></uii-file-upload>"

/***/ }),

/***/ "./src/app/showcase/components/doc-file-upload/sections/size-file-upload/size-file-upload.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-file-upload/sections/size-file-upload/size-file-upload.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: SizeFileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizeFileUploadComponent", function() { return SizeFileUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SizeFileUploadComponent = /** @class */ (function () {
    function SizeFileUploadComponent() {
    }
    SizeFileUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-size-file-upload',
            template: __webpack_require__(/*! ./size-file-upload.component.html */ "./src/app/showcase/components/doc-file-upload/sections/size-file-upload/size-file-upload.component.html")
        })
    ], SizeFileUploadComponent);
    return SizeFileUploadComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-file-upload/sections/type-file-upload/type-file-upload.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-file-upload/sections/type-file-upload/type-file-upload.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<uii-file-upload [inputLabel]=\"'xlsx'\" [fileType]=\"'.xlsx'\"></uii-file-upload>\n<uii-file-upload [inputLabel]=\"'pdf'\" [fileType]=\"'application/pdf'\"></uii-file-upload>\n<uii-file-upload [inputLabel]=\"'csv, xlsx, pdf'\" [fileType]=\"'.csv, .xlsx, application/pdf'\"></uii-file-upload>\n"

/***/ }),

/***/ "./src/app/showcase/components/doc-file-upload/sections/type-file-upload/type-file-upload.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-file-upload/sections/type-file-upload/type-file-upload.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: TypeFileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeFileUploadComponent", function() { return TypeFileUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TypeFileUploadComponent = /** @class */ (function () {
    function TypeFileUploadComponent() {
    }
    TypeFileUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-type-file-upload',
            template: __webpack_require__(/*! ./type-file-upload.component.html */ "./src/app/showcase/components/doc-file-upload/sections/type-file-upload/type-file-upload.component.html")
        })
    ], TypeFileUploadComponent);
    return TypeFileUploadComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-form-wizard/doc-form-wizard.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-form-wizard/doc-form-wizard.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ugw-component-header [title]=\"title\" [description]=\"description\"></ugw-component-header>\n<ugw-section [sections]=\"accordionSection\" [apiDocSections]=\"apiDocSection\"></ugw-section>"

/***/ }),

/***/ "./src/app/showcase/components/doc-form-wizard/doc-form-wizard.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-form-wizard/doc-form-wizard.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/showcase/components/doc-form-wizard/doc-form-wizard.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/showcase/components/doc-form-wizard/doc-form-wizard.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DocFormWizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocFormWizardComponent", function() { return DocFormWizardComponent; });
/* harmony import */ var _sections_emit_event_paginate_change_form_wizard_emit_event_paginate_change_form_wizard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sections/emit-event-paginate-change-form-wizard/emit-event-paginate-change-form-wizard.component */ "./src/app/showcase/components/doc-form-wizard/sections/emit-event-paginate-change-form-wizard/emit-event-paginate-change-form-wizard.component.ts");
/* harmony import */ var _sections_steps_option_form_wizard_steps_option_form_wizard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections/steps-option-form-wizard/steps-option-form-wizard.component */ "./src/app/showcase/components/doc-form-wizard/sections/steps-option-form-wizard/steps-option-form-wizard.component.ts");
/* harmony import */ var _sections_custom_pagination_label_form_wizard_custom_pagination_label_form_wizard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/custom-pagination-label-form-wizard/custom-pagination-label-form-wizard.component */ "./src/app/showcase/components/doc-form-wizard/sections/custom-pagination-label-form-wizard/custom-pagination-label-form-wizard.component.ts");
/* harmony import */ var _sections_disabled_submit_form_wizard_disabled_submit_form_wizard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/disabled-submit-form-wizard/disabled-submit-form-wizard.component */ "./src/app/showcase/components/doc-form-wizard/sections/disabled-submit-form-wizard/disabled-submit-form-wizard.component.ts");
/* harmony import */ var _sections_many_step_form_wizard_many_step_form_wizard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/many-step-form-wizard/many-step-form-wizard.component */ "./src/app/showcase/components/doc-form-wizard/sections/many-step-form-wizard/many-step-form-wizard.component.ts");
/* harmony import */ var _sections_disabled_click_step_form_wizard_disabled_click_step_form_wizard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/disabled-click-step-form-wizard/disabled-click-step-form-wizard.component */ "./src/app/showcase/components/doc-form-wizard/sections/disabled-click-step-form-wizard/disabled-click-step-form-wizard.component.ts");
/* harmony import */ var _sections_basic_form_wizard_basic_form_wizard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sections/basic-form-wizard/basic-form-wizard.component */ "./src/app/showcase/components/doc-form-wizard/sections/basic-form-wizard/basic-form-wizard.component.ts");
/* harmony import */ var _showcase_right_nav_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../showcase-right-nav.service */ "./src/app/showcase/showcase-right-nav.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sections_active_step_option_form_wizard_active_step_option_form_wizard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sections/active-step-option-form-wizard/active-step-option-form-wizard.component */ "./src/app/showcase/components/doc-form-wizard/sections/active-step-option-form-wizard/active-step-option-form-wizard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DocFormWizardComponent = /** @class */ (function () {
    function DocFormWizardComponent(rightMenuSvc) {
        this.rightMenuSvc = rightMenuSvc;
        this.initializeMetaData();
        this.initializeApiDocumentation();
        this.initializeSection();
        this.setRightMenu();
    }
    DocFormWizardComponent.prototype.initializeMetaData = function () {
        this.title = 'Form Wizard';
        this.description = 'Form wizard is a form extension that allow us to make multi step form.';
    };
    DocFormWizardComponent.prototype.initializeApiDocumentation = function () {
        this.apiDocSection = {
            title: this.title.toLowerCase(),
            selector: 'pil-form-wizard',
            properties: [
                {
                    name: 'clickTabEnable',
                    type: 'boolean',
                    default: 'true',
                    description: 'uii-wizard properties. Enable or disable click on step number to change step.'
                },
                {
                    name: 'onSubmitForm',
                    type: 'boolean',
                    default: 'false',
                    description: 'uii-wizard properties. Enable or disable submit button.'
                },
                {
                    name: 'pagingLabel',
                    type: 'Object',
                    default: '',
                    description: 'uii-wizard properties. Label for pagination. Need to specify pagination properties such as cancel, previous, next, more and done with string value.'
                },
                {
                    name: 'activeStepCurrent',
                    type: 'number',
                    default: 1,
                    description: 'uii-wizard properties. Set step active current.'
                },
                {
                    name: 'activeStepStart',
                    type: 'number',
                    default: 1,
                    description: 'uii-wizard properties. Set step active start.'
                },
                {
                    name: 'activeStepEnd',
                    type: 'number',
                    default: 1,
                    description: 'uii-wizard properties. Set step active end.'
                },
                {
                    name: 'title',
                    type: 'string',
                    default: '',
                    description: 'uii-form-wizard-step properties. Label for step title'
                },
                {
                    name: 'subtitle',
                    type: 'string',
                    default: '',
                    description: 'uii-form-wizard-step properties. Label for step subtitle'
                },
                {
                    name: 'hidden',
                    type: 'boolean',
                    default: 'false',
                    description: 'uii-form-wizard-step properties. Show or hidden step'
                },
                {
                    name: 'isValid',
                    type: 'boolean',
                    default: 'true',
                    description: 'uii-form-wizard-step properties. Set validity of step. Invalid step cannot be accessed'
                },
                {
                    name: 'showNext',
                    type: 'boolean',
                    default: 'true',
                    description: 'uii-form-wizard-step properties. Show or hidden next button to proceed to next step'
                },
                {
                    name: 'showPrev',
                    type: 'boolean',
                    default: 'true',
                    description: 'uii-form-wizard-step properties. Show or hidden previous button to proceed to previous step'
                },
                {
                    name: 'isActive',
                    type: 'boolean',
                    default: 'false',
                    description: 'uii-form-wizard-step properties. Set step to activate / deactivate'
                }
            ],
            events: [
                {
                    name: 'onStepChanged',
                    type: 'EventEmitter<FormWizardStepComponent>',
                    default: '',
                    description: 'uii-wizard properties. Event trigerred when step is changed.'
                },
                {
                    name: 'onNext',
                    type: 'EventEmitter<any>',
                    default: '',
                    description: 'uii-form-wizard-step properties. Event trigerred when next button is clicked.'
                },
                {
                    name: 'onPrev',
                    type: 'EventEmitter<any>',
                    default: '',
                    description: 'uii-form-wizard-step properties. Event trigerred when previous button is clicked.'
                },
                {
                    name: 'onComplete',
                    type: 'EventEmitter<any>',
                    default: '',
                    description: 'uii-form-wizard-step properties. Event trigerred when complete button is clicked.'
                },
                {
                    name: 'onCancel',
                    type: 'EventEmitter<any>',
                    default: '',
                    description: 'uii-form-wizard-step properties. Event trigerred when cancel button is clicked.'
                }
            ]
        };
    };
    DocFormWizardComponent.prototype.initializeSection = function () {
        this.accordionSection = [
            {
                anchor: 'basic',
                title: 'Basic',
                desc: 'Basic usage of Form Wizard.',
                component: _sections_basic_form_wizard_basic_form_wizard_component__WEBPACK_IMPORTED_MODULE_6__["BasicFormWizardComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/basic-form-wizard/basic-form-wizard.component.html */ "./src/app/showcase/components/doc-form-wizard/sections/basic-form-wizard/basic-form-wizard.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/basic-form-wizard/basic-form-wizard.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-form-wizard/sections/basic-form-wizard/basic-form-wizard.component.ts")
            },
            {
                anchor: 'many-step',
                title: 'Many step',
                desc: 'In desktop size window, if wizard has many step then maximum steps shown are 7 steps and the other steps is grouped. For mobile size window, the maximum steps are 4.',
                component: _sections_many_step_form_wizard_many_step_form_wizard_component__WEBPACK_IMPORTED_MODULE_4__["ManyStepFormWizardComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/many-step-form-wizard/many-step-form-wizard.component.html */ "./src/app/showcase/components/doc-form-wizard/sections/many-step-form-wizard/many-step-form-wizard.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/many-step-form-wizard/many-step-form-wizard.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-form-wizard/sections/many-step-form-wizard/many-step-form-wizard.component.ts")
            },
            {
                anchor: 'emit-event-paginate-change',
                title: 'Emit event when paginate change',
                desc: 'When paginate button such as next, previous, cancel and submit is clicked, emit some event.',
                component: _sections_emit_event_paginate_change_form_wizard_emit_event_paginate_change_form_wizard_component__WEBPACK_IMPORTED_MODULE_0__["EmitEventPaginateChangeFormWizardComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/emit-event-paginate-change-form-wizard/emit-event-paginate-change-form-wizard.component.html */ "./src/app/showcase/components/doc-form-wizard/sections/emit-event-paginate-change-form-wizard/emit-event-paginate-change-form-wizard.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/emit-event-paginate-change-form-wizard/emit-event-paginate-change-form-wizard.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-form-wizard/sections/emit-event-paginate-change-form-wizard/emit-event-paginate-change-form-wizard.component.ts")
            },
            {
                anchor: 'disabled-submit-form',
                title: 'Disable submit button',
                desc: 'Disable submit button on form wizard.',
                component: _sections_disabled_submit_form_wizard_disabled_submit_form_wizard_component__WEBPACK_IMPORTED_MODULE_3__["DisabledSubmitFormWizardComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/disabled-submit-form-wizard/disabled-submit-form-wizard.component.html */ "./src/app/showcase/components/doc-form-wizard/sections/disabled-submit-form-wizard/disabled-submit-form-wizard.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/disabled-submit-form-wizard/disabled-submit-form-wizard.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-form-wizard/sections/disabled-submit-form-wizard/disabled-submit-form-wizard.component.ts")
            },
            {
                anchor: 'disabled-click-step',
                title: 'Disable click step number',
                desc: 'Disable click on step number to change step. By default, click on step number is allowed to change step if the step is already activated before.',
                component: _sections_disabled_click_step_form_wizard_disabled_click_step_form_wizard_component__WEBPACK_IMPORTED_MODULE_5__["DisabledClickStepFormWizardComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/disabled-click-step-form-wizard/disabled-click-step-form-wizard.component.html */ "./src/app/showcase/components/doc-form-wizard/sections/disabled-click-step-form-wizard/disabled-click-step-form-wizard.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/disabled-click-step-form-wizard/disabled-click-step-form-wizard.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-form-wizard/sections/disabled-click-step-form-wizard/disabled-click-step-form-wizard.component.ts")
            },
            {
                anchor: 'custom-paginate-label',
                title: 'Custom pagination label',
                desc: 'Set custom label for pagination cancel, next, previous and complete.',
                component: _sections_custom_pagination_label_form_wizard_custom_pagination_label_form_wizard_component__WEBPACK_IMPORTED_MODULE_2__["CustomPaginationLabelFormWizardComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/custom-pagination-label-form-wizard/custom-pagination-label-form-wizard.component.html */ "./src/app/showcase/components/doc-form-wizard/sections/custom-pagination-label-form-wizard/custom-pagination-label-form-wizard.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/custom-pagination-label-form-wizard/custom-pagination-label-form-wizard.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-form-wizard/sections/custom-pagination-label-form-wizard/custom-pagination-label-form-wizard.component.ts")
            },
            {
                anchor: 'active-step-option',
                title: 'Active step option',
                desc: 'Set current active step with [activeStepCurrent], active step start with [activeStepStart], and active step end with [activeStepEnd]',
                component: _sections_active_step_option_form_wizard_active_step_option_form_wizard_component__WEBPACK_IMPORTED_MODULE_9__["ActiveStepOptionFormWizardComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/active-step-option-form-wizard/active-step-option-form-wizard.component.html */ "./src/app/showcase/components/doc-form-wizard/sections/active-step-option-form-wizard/active-step-option-form-wizard.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/active-step-option-form-wizard/active-step-option-form-wizard.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-form-wizard/sections/active-step-option-form-wizard/active-step-option-form-wizard.component.ts")
            },
            {
                anchor: 'steps-option',
                title: 'Steps option',
                desc: 'Set option for step form wizard with properties [hidden] to hidden step, [showPrev] to show or hide previous button, [showNext] to show or hide next button, [isValid] to set step status valid or invalid',
                component: _sections_steps_option_form_wizard_steps_option_form_wizard_component__WEBPACK_IMPORTED_MODULE_1__["StepsOptionFormWizardComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/steps-option-form-wizard/steps-option-form-wizard.component.html */ "./src/app/showcase/components/doc-form-wizard/sections/steps-option-form-wizard/steps-option-form-wizard.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/steps-option-form-wizard/steps-option-form-wizard.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-form-wizard/sections/steps-option-form-wizard/steps-option-form-wizard.component.ts")
            },
        ];
    };
    DocFormWizardComponent.prototype.setRightMenu = function () {
        var apiDocs = [{
                anchor: 'form-wizard-api-docs',
                title: 'API documentation',
                desc: null,
                component: null,
                markup: null,
                typescript: null
            }];
        var customRightMenu = this.accordionSection.concat(apiDocs);
        this.rightMenuSvc.setRightMenu(customRightMenu);
    };
    DocFormWizardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
            selector: 'ugw-doc-form-wizard',
            template: __webpack_require__(/*! ./doc-form-wizard.component.html */ "./src/app/showcase/components/doc-form-wizard/doc-form-wizard.component.html"),
            styles: [__webpack_require__(/*! ./doc-form-wizard.component.scss */ "./src/app/showcase/components/doc-form-wizard/doc-form-wizard.component.scss")]
        }),
        __metadata("design:paramtypes", [_showcase_right_nav_service__WEBPACK_IMPORTED_MODULE_7__["ShowcaseRightNavService"]])
    ], DocFormWizardComponent);
    return DocFormWizardComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-form-wizard/sections/active-step-option-form-wizard/active-step-option-form-wizard.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-form-wizard/sections/active-step-option-form-wizard/active-step-option-form-wizard.component.html ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<uii-wizard [activeStepCurrent]=\"2\" [activeStepStart]=\"1\" [activeStepEnd]=\"3\">\n  <uii-form-wizard-step [title]=\"'Step 1'\">\n    <div>This is step 1</div>\n  </uii-form-wizard-step>\n  <uii-form-wizard-step [title]=\"'Step 2'\">\n    <div>This is step 2</div>\n  </uii-form-wizard-step>\n  <uii-form-wizard-step [title]=\"'Step 3'\">\n    <div>This is step 3</div>\n  </uii-form-wizard-step>\n  <uii-form-wizard-step [title]=\"'Step 4'\">\n    <div>This is step 4</div>\n  </uii-form-wizard-step>\n  <uii-form-wizard-step [title]=\"'Step 5'\">\n    <div>This is step 5</div>\n  </uii-form-wizard-step>\n</uii-wizard>\nActive step current: {{ activeStepCurrent }}<br>\nActive step start: {{ activeStepStart }}<br>\nActive step end: {{ activeStepEnd }}<br>\n"

/***/ }),

/***/ "./src/app/showcase/components/doc-form-wizard/sections/active-step-option-form-wizard/active-step-option-form-wizard.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-form-wizard/sections/active-step-option-form-wizard/active-step-option-form-wizard.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: ActiveStepOptionFormWizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveStepOptionFormWizardComponent", function() { return ActiveStepOptionFormWizardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActiveStepOptionFormWizardComponent = /** @class */ (function () {
    function ActiveStepOptionFormWizardComponent() {
        this.activeStepCurrent = 2;
        this.activeStepStart = 1;
        this.activeStepEnd = 3;
    }
    ActiveStepOptionFormWizardComponent.prototype.ngOnInit = function () {
    };
    ActiveStepOptionFormWizardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-active-step-option-form-wizard',
            template: __webpack_require__(/*! ./active-step-option-form-wizard.component.html */ "./src/app/showcase/components/doc-form-wizard/sections/active-step-option-form-wizard/active-step-option-form-wizard.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ActiveStepOptionFormWizardComponent);
    return ActiveStepOptionFormWizardComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-form-wizard/sections/basic-form-wizard/basic-form-wizard.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-form-wizard/sections/basic-form-wizard/basic-form-wizard.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<uii-wizard>\n  <uii-form-wizard-step [title]=\"'Step 1'\">\n    <div>This is step 1</div>\n  </uii-form-wizard-step>\n  <uii-form-wizard-step [title]=\"'Step 2'\">\n    <div>This is step 2</div>\n  </uii-form-wizard-step>\n  <uii-form-wizard-step [title]=\"'Step 3'\">\n    <div>This is step 3</div>\n  </uii-form-wizard-step>\n</uii-wizard>\n"

/***/ }),

/***/ "./src/app/showcase/components/doc-form-wizard/sections/basic-form-wizard/basic-form-wizard.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-form-wizard/sections/basic-form-wizard/basic-form-wizard.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: BasicFormWizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicFormWizardComponent", function() { return BasicFormWizardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BasicFormWizardComponent = /** @class */ (function () {
    function BasicFormWizardComponent() {
    }
    BasicFormWizardComponent.prototype.ngOnInit = function () {
    };
    BasicFormWizardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-basic-form-wizard',
            template: __webpack_require__(/*! ./basic-form-wizard.component.html */ "./src/app/showcase/components/doc-form-wizard/sections/basic-form-wizard/basic-form-wizard.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], BasicFormWizardComponent);
    return BasicFormWizardComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-form-wizard/sections/custom-pagination-label-form-wizard/custom-pagination-label-form-wizard.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-form-wizard/sections/custom-pagination-label-form-wizard/custom-pagination-label-form-wizard.component.html ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<uii-wizard [pagingLabel]=\"paginateLabel\">\n  <uii-form-wizard-step [title]=\"'Step 1'\">\n    <div>This is step 1</div>\n  </uii-form-wizard-step>\n  <uii-form-wizard-step [title]=\"'Step 2'\">\n    <div>This is step 2</div>\n  </uii-form-wizard-step>\n  <uii-form-wizard-step [title]=\"'Step 3'\">\n    <div>This is step 3</div>\n  </uii-form-wizard-step>\n  <uii-form-wizard-step [title]=\"'Step 4'\">\n    <div>This is step 4</div>\n  </uii-form-wizard-step>\n  <uii-form-wizard-step [title]=\"'Step 5'\">\n    <div>This is step 5</div>\n  </uii-form-wizard-step>\n  <uii-form-wizard-step [title]=\"'Step 6'\">\n    <div>This is step 6</div>\n  </uii-form-wizard-step>\n  <uii-form-wizard-step [title]=\"'Step 7'\">\n    <div>This is step 7</div>\n  </uii-form-wizard-step>\n  <uii-form-wizard-step [title]=\"'Step 8'\">\n    <div>This is step 8</div>\n  </uii-form-wizard-step>\n  <uii-form-wizard-step [title]=\"'Step 9'\">\n    <div>This is step 9</div>\n  </uii-form-wizard-step>\n</uii-wizard>\n"

/***/ }),

/***/ "./src/app/showcase/components/doc-form-wizard/sections/custom-pagination-label-form-wizard/custom-pagination-label-form-wizard.component.ts":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-form-wizard/sections/custom-pagination-label-form-wizard/custom-pagination-label-form-wizard.component.ts ***!
  \***************************************************************************************************************************************************/
/*! exports provided: CustomPaginationLabelFormWizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPaginationLabelFormWizardComponent", function() { return CustomPaginationLabelFormWizardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomPaginationLabelFormWizardComponent = /** @class */ (function () {
    function CustomPaginationLabelFormWizardComponent() {
        this.paginateLabel = {
            cancel: 'Batal',
            next: 'Selanjutnya',
            previous: 'Sebelumnya',
            more: 'Lainnya',
            done: 'Simpan'
        };
    }
    CustomPaginationLabelFormWizardComponent.prototype.ngOnInit = function () {
    };
    CustomPaginationLabelFormWizardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-custom-pagination-label-form-wizard',
            template: __webpack_require__(/*! ./custom-pagination-label-form-wizard.component.html */ "./src/app/showcase/components/doc-form-wizard/sections/custom-pagination-label-form-wizard/custom-pagination-label-form-wizard.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], CustomPaginationLabelFormWizardComponent);
    return CustomPaginationLabelFormWizardComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-form-wizard/sections/disabled-click-step-form-wizard/disabled-click-step-form-wizard.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-form-wizard/sections/disabled-click-step-form-wizard/disabled-click-step-form-wizard.component.html ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<uii-wizard [clickTabEnable]=\"false\">\n  <uii-form-wizard-step [title]=\"'Step 1'\">\n    <div>This is step 1</div>\n  </uii-form-wizard-step>\n  <uii-form-wizard-step [title]=\"'Step 2'\">\n    <div>This is step 2</div>\n  </uii-form-wizard-step>\n  <uii-form-wizard-step [title]=\"'Step 3'\">\n    <div>This is step 3</div>\n  </uii-form-wizard-step>\n</uii-wizard>\n"

/***/ }),

/***/ "./src/app/showcase/components/doc-form-wizard/sections/disabled-click-step-form-wizard/disabled-click-step-form-wizard.component.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-form-wizard/sections/disabled-click-step-form-wizard/disabled-click-step-form-wizard.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: DisabledClickStepFormWizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisabledClickStepFormWizardComponent", function() { return DisabledClickStepFormWizardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DisabledClickStepFormWizardComponent = /** @class */ (function () {
    function DisabledClickStepFormWizardComponent() {
    }
    DisabledClickStepFormWizardComponent.prototype.ngOnInit = function () {
    };
    DisabledClickStepFormWizardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-disabled-click-step-form-wizard',
            template: __webpack_require__(/*! ./disabled-click-step-form-wizard.component.html */ "./src/app/showcase/components/doc-form-wizard/sections/disabled-click-step-form-wizard/disabled-click-step-form-wizard.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], DisabledClickStepFormWizardComponent);
    return DisabledClickStepFormWizardComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-form-wizard/sections/disabled-submit-form-wizard/disabled-submit-form-wizard.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-form-wizard/sections/disabled-submit-form-wizard/disabled-submit-form-wizard.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<uii-wizard [onSubmitForm]=\"btnSubmit\">\n  <uii-form-wizard-step [title]=\"'Step 1'\">\n    <div>This is step 1</div>\n  </uii-form-wizard-step>\n  <uii-form-wizard-step [title]=\"'Step 2'\">\n    <div>This is step 2</div>\n  </uii-form-wizard-step>\n  <uii-form-wizard-step [title]=\"'Step 3'\">\n    Enable submit button : {{ btnSubmit }}<br>\n    <button class=\"btn btn-primary\" (click)=\"onBtnEnableDisable()\">Enable / disable Submit button</button>\n  </uii-form-wizard-step>\n</uii-wizard>\n"

/***/ }),

/***/ "./src/app/showcase/components/doc-form-wizard/sections/disabled-submit-form-wizard/disabled-submit-form-wizard.component.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-form-wizard/sections/disabled-submit-form-wizard/disabled-submit-form-wizard.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: DisabledSubmitFormWizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisabledSubmitFormWizardComponent", function() { return DisabledSubmitFormWizardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DisabledSubmitFormWizardComponent = /** @class */ (function () {
    function DisabledSubmitFormWizardComponent() {
        this.btnSubmit = true;
    }
    DisabledSubmitFormWizardComponent.prototype.ngOnInit = function () {
    };
    DisabledSubmitFormWizardComponent.prototype.onBtnEnableDisable = function () {
        this.btnSubmit = !this.btnSubmit;
    };
    DisabledSubmitFormWizardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-disabled-submit-form-wizard',
            template: __webpack_require__(/*! ./disabled-submit-form-wizard.component.html */ "./src/app/showcase/components/doc-form-wizard/sections/disabled-submit-form-wizard/disabled-submit-form-wizard.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], DisabledSubmitFormWizardComponent);
    return DisabledSubmitFormWizardComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-form-wizard/sections/emit-event-paginate-change-form-wizard/emit-event-paginate-change-form-wizard.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-form-wizard/sections/emit-event-paginate-change-form-wizard/emit-event-paginate-change-form-wizard.component.html ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<uii-wizard (onStepChanged)=\"onStepChange($event)\">\n  <uii-form-wizard-step [title]=\"'Step 1'\" (onCancel)=\"onBtnCancelClick()\" (onNext)=\"onBtnNextClick()\">\n    <div>This is step 1</div>\n  </uii-form-wizard-step>\n  <uii-form-wizard-step [title]=\"'Step 2'\" (onCancel)=\"onBtnCancelClick()\" (onNext)=\"onBtnNextClick()\" (onPrev)=\"onBtnPrevClick()\">\n    <div>This is step 2</div>\n  </uii-form-wizard-step>\n  <uii-form-wizard-step [title]=\"'Step 3'\" (onCancel)=\"onBtnCancelClick()\" (onPrev)=\"onBtnPrevClick()\" (onComplete)=\"onBtnSubmitClick()\">\n    <div>This is step 3</div>\n  </uii-form-wizard-step>\n</uii-wizard>\nCancel click count : {{ cancelBtnClickCount }}<br>\nNext click count : {{ nextBtnClickCount }}<br>\nPrevious click count : {{ prevBtnClickCount }}<br>\nSubmit click count : {{ submitBtnClickCount }}<br>\nStep index active : {{ currentStep }}\n"

/***/ }),

/***/ "./src/app/showcase/components/doc-form-wizard/sections/emit-event-paginate-change-form-wizard/emit-event-paginate-change-form-wizard.component.ts":
/*!*********************************************************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-form-wizard/sections/emit-event-paginate-change-form-wizard/emit-event-paginate-change-form-wizard.component.ts ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: EmitEventPaginateChangeFormWizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmitEventPaginateChangeFormWizardComponent", function() { return EmitEventPaginateChangeFormWizardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmitEventPaginateChangeFormWizardComponent = /** @class */ (function () {
    function EmitEventPaginateChangeFormWizardComponent() {
        this.currentStep = 0;
        this.cancelBtnClickCount = 0;
        this.nextBtnClickCount = 0;
        this.prevBtnClickCount = 0;
        this.submitBtnClickCount = 0;
    }
    EmitEventPaginateChangeFormWizardComponent.prototype.ngOnInit = function () {
    };
    EmitEventPaginateChangeFormWizardComponent.prototype.onStepChange = function ($event) {
        this.currentStep = $event.activeStepIndex;
    };
    EmitEventPaginateChangeFormWizardComponent.prototype.onBtnCancelClick = function () {
        this.cancelBtnClickCount++;
    };
    EmitEventPaginateChangeFormWizardComponent.prototype.onBtnNextClick = function () {
        this.nextBtnClickCount++;
    };
    EmitEventPaginateChangeFormWizardComponent.prototype.onBtnPrevClick = function () {
        this.prevBtnClickCount++;
    };
    EmitEventPaginateChangeFormWizardComponent.prototype.onBtnSubmitClick = function () {
        this.submitBtnClickCount++;
    };
    EmitEventPaginateChangeFormWizardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-emit-event-paginate-change-form-wizard',
            template: __webpack_require__(/*! ./emit-event-paginate-change-form-wizard.component.html */ "./src/app/showcase/components/doc-form-wizard/sections/emit-event-paginate-change-form-wizard/emit-event-paginate-change-form-wizard.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], EmitEventPaginateChangeFormWizardComponent);
    return EmitEventPaginateChangeFormWizardComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-form-wizard/sections/many-step-form-wizard/many-step-form-wizard.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-form-wizard/sections/many-step-form-wizard/many-step-form-wizard.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<uii-wizard>\n  <uii-form-wizard-step [title]=\"'Step 1'\">\n    <div>This is step 1</div>\n  </uii-form-wizard-step>\n  <uii-form-wizard-step [title]=\"'Step 2'\">\n    <div>This is step 2</div>\n  </uii-form-wizard-step>\n  <uii-form-wizard-step [title]=\"'Step 3'\">\n    <div>This is step 3</div>\n  </uii-form-wizard-step>\n  <uii-form-wizard-step [title]=\"'Step 4'\">\n    <div>This is step 4</div>\n  </uii-form-wizard-step>\n  <uii-form-wizard-step [title]=\"'Step 5'\">\n    <div>This is step 5</div>\n  </uii-form-wizard-step>\n  <uii-form-wizard-step [title]=\"'Step 6'\">\n    <div>This is step 6</div>\n  </uii-form-wizard-step>\n  <uii-form-wizard-step [title]=\"'Step 7'\">\n    <div>This is step 7</div>\n  </uii-form-wizard-step>\n  <uii-form-wizard-step [title]=\"'Step 8'\">\n    <div>This is step 8</div>\n  </uii-form-wizard-step>\n  <uii-form-wizard-step [title]=\"'Step 9'\">\n    <div>This is step 9</div>\n  </uii-form-wizard-step>\n</uii-wizard>\n"

/***/ }),

/***/ "./src/app/showcase/components/doc-form-wizard/sections/many-step-form-wizard/many-step-form-wizard.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-form-wizard/sections/many-step-form-wizard/many-step-form-wizard.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: ManyStepFormWizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManyStepFormWizardComponent", function() { return ManyStepFormWizardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManyStepFormWizardComponent = /** @class */ (function () {
    function ManyStepFormWizardComponent() {
    }
    ManyStepFormWizardComponent.prototype.ngOnInit = function () {
    };
    ManyStepFormWizardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-many-step-form-wizard',
            template: __webpack_require__(/*! ./many-step-form-wizard.component.html */ "./src/app/showcase/components/doc-form-wizard/sections/many-step-form-wizard/many-step-form-wizard.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ManyStepFormWizardComponent);
    return ManyStepFormWizardComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-form-wizard/sections/steps-option-form-wizard/steps-option-form-wizard.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-form-wizard/sections/steps-option-form-wizard/steps-option-form-wizard.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<uii-wizard>\n  <uii-form-wizard-step [title]=\"'Step 1'\" [hidden]=\"!showStep1\">\n    <div>This is step 1</div>\n  </uii-form-wizard-step>\n  <uii-form-wizard-step [title]=\"'Step 2'\" [showPrev]=\"showPrevStep2\">\n    Show step 1 : {{ showStep1 }}<br>\n    <button class=\"btn btn-primary\" (click)=\"onBtnShowStep1Click()\">Show / hide Step 1</button><br>\n    Show previous button : {{ showPrevStep2 }}<br>\n    <button class=\"btn btn-primary\" (click)=\"onBtnShowPrevStep2Click()\">Show / hide Previous button on Step 2</button>\n  </uii-form-wizard-step>\n  <uii-form-wizard-step [title]=\"'Step 3'\" [isValid]=\"isValidStep3\">\n    Step 3 valid : {{ isValidStep3 }}<br>\n    <button class=\"btn btn-primary\" (click)=\"onBtnIsValidStep3Click()\">Set valid / invalid on Step 3</button>\n  </uii-form-wizard-step>\n  <uii-form-wizard-step [title]=\"'Step 4'\" [showNext]=\"showNextStep4\">\n    Show next button : {{ showNextStep4 }}<br>\n    <button class=\"btn btn-primary\" (click)=\"onBtnShowNextStep4Click()\">Show / hide Next button on Step 4</button>\n  </uii-form-wizard-step>\n  <uii-form-wizard-step [title]=\"'Step 5'\">\n    This is step 5\n  </uii-form-wizard-step>\n  <uii-form-wizard-step [title]=\"'Step 6'\">\n    This is step 6\n  </uii-form-wizard-step>\n  <uii-form-wizard-step [title]=\"'Step 7'\">\n    This is step 7\n  </uii-form-wizard-step>\n  <uii-form-wizard-step [title]=\"'Step 8'\">\n    This is step 8\n  </uii-form-wizard-step>\n</uii-wizard>"

/***/ }),

/***/ "./src/app/showcase/components/doc-form-wizard/sections/steps-option-form-wizard/steps-option-form-wizard.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-form-wizard/sections/steps-option-form-wizard/steps-option-form-wizard.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: StepsOptionFormWizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepsOptionFormWizardComponent", function() { return StepsOptionFormWizardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StepsOptionFormWizardComponent = /** @class */ (function () {
    function StepsOptionFormWizardComponent() {
        this.showStep1 = false;
        this.showPrevStep2 = true;
        this.isValidStep3 = true;
        this.showNextStep4 = true;
    }
    StepsOptionFormWizardComponent.prototype.ngOnInit = function () {
    };
    StepsOptionFormWizardComponent.prototype.onBtnShowStep1Click = function () {
        this.showStep1 = !this.showStep1;
    };
    StepsOptionFormWizardComponent.prototype.onBtnShowPrevStep2Click = function () {
        this.showPrevStep2 = !this.showPrevStep2;
    };
    StepsOptionFormWizardComponent.prototype.onBtnIsValidStep3Click = function () {
        this.isValidStep3 = !this.isValidStep3;
    };
    StepsOptionFormWizardComponent.prototype.onBtnShowNextStep4Click = function () {
        this.showNextStep4 = !this.showNextStep4;
    };
    StepsOptionFormWizardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-steps-option-form-wizard',
            template: __webpack_require__(/*! ./steps-option-form-wizard.component.html */ "./src/app/showcase/components/doc-form-wizard/sections/steps-option-form-wizard/steps-option-form-wizard.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], StepsOptionFormWizardComponent);
    return StepsOptionFormWizardComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-image-upload/doc-image-upload.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-image-upload/doc-image-upload.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ugw-component-header [title]=\"title\" [description]=\"description\"></ugw-component-header>\n<ugw-section [sections]=\"imageUploadSection\" [apiDocSections]=\"apiDocSection\"></ugw-section>"

/***/ }),

/***/ "./src/app/showcase/components/doc-image-upload/doc-image-upload.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-image-upload/doc-image-upload.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/showcase/components/doc-image-upload/doc-image-upload.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-image-upload/doc-image-upload.component.ts ***!
  \************************************************************************************/
/*! exports provided: DocImageUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocImageUploadComponent", function() { return DocImageUploadComponent; });
/* harmony import */ var _sections_labeling_button_image_upload_labeling_button_image_upload_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sections/labeling-button-image-upload/labeling-button-image-upload.component */ "./src/app/showcase/components/doc-image-upload/sections/labeling-button-image-upload/labeling-button-image-upload.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _showcase_right_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../showcase-right-nav.service */ "./src/app/showcase/showcase-right-nav.service.ts");
/* harmony import */ var _sections_basic_image_upload_basic_image_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/basic-image-upload/basic-image-upload.component */ "./src/app/showcase/components/doc-image-upload/sections/basic-image-upload/basic-image-upload.component.ts");
/* harmony import */ var _sections_hide_delete_image_upload_hide_delete_image_upload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/hide-delete-image-upload/hide-delete-image-upload.component */ "./src/app/showcase/components/doc-image-upload/sections/hide-delete-image-upload/hide-delete-image-upload.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DocImageUploadComponent = /** @class */ (function () {
    function DocImageUploadComponent(rightMenuSvc) {
        this.rightMenuSvc = rightMenuSvc;
    }
    DocImageUploadComponent.prototype.ngOnInit = function () {
        this.initializeMetaData();
        this.initializeApiDocumentation();
        this.initializeSection();
        this.setRightMenu();
    };
    DocImageUploadComponent.prototype.initializeMetaData = function () {
        this.title = 'Image Upload';
        this.description = 'Image Upload is used to upload image with extention .jpg, .jpeg, .png and you can view image was uploaded.';
    };
    DocImageUploadComponent.prototype.initializeApiDocumentation = function () {
        this.apiDocSection = {
            title: this.title.toLowerCase(),
            selector: 'pil-image-upload',
            properties: [
                {
                    name: 'inputLabel',
                    type: 'string',
                    default: 'Upload',
                    description: 'Set your label button of image.'
                },
                {
                    name: 'label',
                    type: 'string',
                    default: '',
                    description: 'Set your label of image.'
                },
                {
                    name: 'caption',
                    type: 'string',
                    default: '',
                    description: 'Set your caption in image.'
                },
                {
                    name: 'required',
                    type: 'boolean',
                    default: 'false',
                    description: 'Set your required of file image upload.'
                },
                {
                    name: 'fileType',
                    type: 'Array<string>',
                    default: '[jpg, jpeg, png]',
                    description: 'Set your type of image.'
                },
                {
                    name: 'imaxFileSize',
                    type: 'string',
                    default: '5B',
                    description: 'Set your maximum file size.'
                },
                {
                    name: 'fileTypeAllowed',
                    type: 'string',
                    default: '',
                    description: 'Set your type file to allowed.'
                },
                {
                    name: 'fileOversize',
                    type: 'boolean',
                    default: '',
                    description: 'Set your oversize.'
                },
                {
                    name: 'fileNotAllowed',
                    type: 'boolean',
                    default: '',
                    description: 'Set your allowed file.'
                },
                {
                    name: 'hideIconDelete',
                    type: 'boolean',
                    default: 'false',
                    description: 'Set your allowed file.'
                }
            ],
            events: [
                {
                    name: 'imageSelected',
                    type: 'EventEmitter<>',
                    default: 'null',
                    description: ''
                }
            ]
        };
    };
    DocImageUploadComponent.prototype.initializeSection = function () {
        this.imageUploadSection = [
            {
                anchor: 'basic',
                title: 'Basic',
                desc: 'This is a basic image upload implementation.',
                component: _sections_basic_image_upload_basic_image_upload_component__WEBPACK_IMPORTED_MODULE_3__["BasicImageUploadComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/basic-image-upload/basic-image-upload.component.html */ "./src/app/showcase/components/doc-image-upload/sections/basic-image-upload/basic-image-upload.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/basic-image-upload/basic-image-upload.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-image-upload/sections/basic-image-upload/basic-image-upload.component.ts")
            },
            {
                anchor: 'hide',
                title: 'Hide icon delete',
                desc: 'You can hide icon delete when you upload the image.',
                component: _sections_hide_delete_image_upload_hide_delete_image_upload_component__WEBPACK_IMPORTED_MODULE_4__["HideDeleteImageUploadComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/basic-image-upload/basic-image-upload.component.html */ "./src/app/showcase/components/doc-image-upload/sections/basic-image-upload/basic-image-upload.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/basic-image-upload/basic-image-upload.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-image-upload/sections/basic-image-upload/basic-image-upload.component.ts")
            },
            {
                anchor: 'label',
                title: 'Label ',
                desc: 'You can make label in button and you can choose type file alloed',
                component: _sections_labeling_button_image_upload_labeling_button_image_upload_component__WEBPACK_IMPORTED_MODULE_0__["LabelingButtonImageUploadComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/labeling-button-image-upload/labeling-button-image-upload.component.html */ "./src/app/showcase/components/doc-image-upload/sections/labeling-button-image-upload/labeling-button-image-upload.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/labeling-button-image-upload/labeling-button-image-upload.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-image-upload/sections/labeling-button-image-upload/labeling-button-image-upload.component.ts")
            }
        ];
    };
    DocImageUploadComponent.prototype.setRightMenu = function () {
        var apiDocs = [{
                anchor: 'image-upload-api-docs',
                title: 'API documentation',
                desc: null,
                component: null,
                markup: null,
                typescript: null
            }];
        var customRightMenu = this.imageUploadSection.concat(apiDocs);
        this.rightMenuSvc.setRightMenu(customRightMenu);
    };
    DocImageUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ugw-doc-image-upload',
            template: __webpack_require__(/*! ./doc-image-upload.component.html */ "./src/app/showcase/components/doc-image-upload/doc-image-upload.component.html"),
            styles: [__webpack_require__(/*! ./doc-image-upload.component.scss */ "./src/app/showcase/components/doc-image-upload/doc-image-upload.component.scss")]
        }),
        __metadata("design:paramtypes", [_showcase_right_nav_service__WEBPACK_IMPORTED_MODULE_2__["ShowcaseRightNavService"]])
    ], DocImageUploadComponent);
    return DocImageUploadComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-image-upload/sections/basic-image-upload/basic-image-upload.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-image-upload/sections/basic-image-upload/basic-image-upload.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<uii-photo-upload\n  [fileType]=\"['jpg', 'jpeg', 'png', 'pdf']\"\n  [maxFileSize]=\"2097152\">\n</uii-photo-upload>\n\n"

/***/ }),

/***/ "./src/app/showcase/components/doc-image-upload/sections/basic-image-upload/basic-image-upload.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-image-upload/sections/basic-image-upload/basic-image-upload.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/showcase/components/doc-image-upload/sections/basic-image-upload/basic-image-upload.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-image-upload/sections/basic-image-upload/basic-image-upload.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: BasicImageUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicImageUploadComponent", function() { return BasicImageUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BasicImageUploadComponent = /** @class */ (function () {
    function BasicImageUploadComponent() {
    }
    BasicImageUploadComponent.prototype.ngOnInit = function () {
    };
    BasicImageUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-basic-image-upload',
            template: __webpack_require__(/*! ./basic-image-upload.component.html */ "./src/app/showcase/components/doc-image-upload/sections/basic-image-upload/basic-image-upload.component.html"),
            styles: [__webpack_require__(/*! ./basic-image-upload.component.scss */ "./src/app/showcase/components/doc-image-upload/sections/basic-image-upload/basic-image-upload.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicImageUploadComponent);
    return BasicImageUploadComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-image-upload/sections/hide-delete-image-upload/hide-delete-image-upload.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-image-upload/sections/hide-delete-image-upload/hide-delete-image-upload.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<uii-photo-upload\n  [maxFileSize]=\"2097152\"\n  [hideIconDelete]=\"true\">\n</uii-photo-upload>\n "

/***/ }),

/***/ "./src/app/showcase/components/doc-image-upload/sections/hide-delete-image-upload/hide-delete-image-upload.component.scss":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-image-upload/sections/hide-delete-image-upload/hide-delete-image-upload.component.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/showcase/components/doc-image-upload/sections/hide-delete-image-upload/hide-delete-image-upload.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-image-upload/sections/hide-delete-image-upload/hide-delete-image-upload.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: HideDeleteImageUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HideDeleteImageUploadComponent", function() { return HideDeleteImageUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HideDeleteImageUploadComponent = /** @class */ (function () {
    function HideDeleteImageUploadComponent() {
    }
    HideDeleteImageUploadComponent.prototype.ngOnInit = function () {
    };
    HideDeleteImageUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-hide-delete-image-upload',
            template: __webpack_require__(/*! ./hide-delete-image-upload.component.html */ "./src/app/showcase/components/doc-image-upload/sections/hide-delete-image-upload/hide-delete-image-upload.component.html"),
            styles: [__webpack_require__(/*! ./hide-delete-image-upload.component.scss */ "./src/app/showcase/components/doc-image-upload/sections/hide-delete-image-upload/hide-delete-image-upload.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HideDeleteImageUploadComponent);
    return HideDeleteImageUploadComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-image-upload/sections/labeling-button-image-upload/labeling-button-image-upload.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-image-upload/sections/labeling-button-image-upload/labeling-button-image-upload.component.html ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<uii-photo-upload\n  [maxFileSize]=\"2097152\"\n  [inputLabel]=\"'Import'\"\n  [caption]=\"'import here'\"\n  [label]=\"'import file'\">\n</uii-photo-upload>\n"

/***/ }),

/***/ "./src/app/showcase/components/doc-image-upload/sections/labeling-button-image-upload/labeling-button-image-upload.component.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-image-upload/sections/labeling-button-image-upload/labeling-button-image-upload.component.scss ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/showcase/components/doc-image-upload/sections/labeling-button-image-upload/labeling-button-image-upload.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-image-upload/sections/labeling-button-image-upload/labeling-button-image-upload.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: LabelingButtonImageUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelingButtonImageUploadComponent", function() { return LabelingButtonImageUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LabelingButtonImageUploadComponent = /** @class */ (function () {
    function LabelingButtonImageUploadComponent() {
    }
    LabelingButtonImageUploadComponent.prototype.ngOnInit = function () {
    };
    LabelingButtonImageUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-labeling-button-image-upload',
            template: __webpack_require__(/*! ./labeling-button-image-upload.component.html */ "./src/app/showcase/components/doc-image-upload/sections/labeling-button-image-upload/labeling-button-image-upload.component.html"),
            styles: [__webpack_require__(/*! ./labeling-button-image-upload.component.scss */ "./src/app/showcase/components/doc-image-upload/sections/labeling-button-image-upload/labeling-button-image-upload.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LabelingButtonImageUploadComponent);
    return LabelingButtonImageUploadComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-infobox/doc-infobox.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/showcase/components/doc-infobox/doc-infobox.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ugw-component-header [title]=\"title\" [description]=\"description\"></ugw-component-header>\n<ugw-section [sections]=\"infoboxSection\" [apiDocSections]=\"apiDocSection\"></ugw-section>\n"

/***/ }),

/***/ "./src/app/showcase/components/doc-infobox/doc-infobox.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/showcase/components/doc-infobox/doc-infobox.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/showcase/components/doc-infobox/doc-infobox.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/showcase/components/doc-infobox/doc-infobox.component.ts ***!
  \**************************************************************************/
/*! exports provided: DocInfoboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocInfoboxComponent", function() { return DocInfoboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sections_basic_infobox_basic_infobox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections/basic-infobox/basic-infobox.component */ "./src/app/showcase/components/doc-infobox/sections/basic-infobox/basic-infobox.component.ts");
/* harmony import */ var _sections_color_infobox_color_infobox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/color-infobox/color-infobox.component */ "./src/app/showcase/components/doc-infobox/sections/color-infobox/color-infobox.component.ts");
/* harmony import */ var _showcase_right_nav_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../showcase-right-nav.service */ "./src/app/showcase/showcase-right-nav.service.ts");
/* harmony import */ var _sections_group_infobox_group_infobox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/group-infobox/group-infobox.component */ "./src/app/showcase/components/doc-infobox/sections/group-infobox/group-infobox.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DocInfoboxComponent = /** @class */ (function () {
    function DocInfoboxComponent(rightMenuSvc) {
        this.rightMenuSvc = rightMenuSvc;
    }
    DocInfoboxComponent.prototype.ngOnInit = function () {
        this.initializeMetaData();
        this.initializeApiDocumentation();
        this.initializeSection();
        this.setRightMenu();
    };
    DocInfoboxComponent.prototype.initializeMetaData = function () {
        this.title = 'Infobox';
        this.description = 'Use these shorthand utilities for quickly displaying your summary data. There are eight types of summary color in use only such as default, primary, success, info, danger , warning, dark, secondary. You can flexibly set the width fit to column and set your own icon.';
    };
    DocInfoboxComponent.prototype.initializeApiDocumentation = function () {
        this.apiDocSection = {
            title: this.title.toLowerCase(),
            selector: 'pil-infobox',
            properties: [
                {
                    name: 'title',
                    type: 'string',
                    default: 'Title',
                    description: 'Set your title of summary.'
                },
                {
                    name: 'subtitle',
                    type: 'string',
                    default: 'Subtitle',
                    description: 'Set your subtitle of summary value.'
                },
                {
                    name: 'type',
                    type: 'string',
                    default: 'Default',
                    description: 'Set your type of summary color.'
                },
                {
                    name: 'infoIcon',
                    type: 'string',
                    default: '',
                    description: 'Set your icon of summary.'
                }
            ],
            events: [
                {
                    name: 'none',
                    type: 'none',
                    default: 'none',
                    description: ''
                }
            ]
        };
    };
    DocInfoboxComponent.prototype.initializeSection = function () {
        this.infoboxSection = [
            {
                anchor: 'basic',
                title: 'Basic',
                desc: 'This is a basic infobox implementation',
                component: _sections_basic_infobox_basic_infobox_component__WEBPACK_IMPORTED_MODULE_1__["BasicInfoboxComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/basic-infobox/basic-infobox.component.html */ "./src/app/showcase/components/doc-infobox/sections/basic-infobox/basic-infobox.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/basic-infobox/basic-infobox.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-infobox/sections/basic-infobox/basic-infobox.component.ts")
            },
            {
                anchor: 'group-infobox',
                title: 'Group Infobox',
                desc: 'This is example of group infobox to diplay more than 1 summary and different icon',
                component: _sections_group_infobox_group_infobox_component__WEBPACK_IMPORTED_MODULE_4__["GroupInfoboxComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/group-infobox/group-infobox.component.html */ "./src/app/showcase/components/doc-infobox/sections/group-infobox/group-infobox.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/group-infobox/group-infobox.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-infobox/sections/group-infobox/group-infobox.component.ts")
            },
            {
                anchor: 'color-infobox',
                title: 'Color Infobox',
                desc: 'This is example of color infobox to diplay more than 1 summary',
                component: _sections_color_infobox_color_infobox_component__WEBPACK_IMPORTED_MODULE_2__["ColorInfoboxComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/color-infobox/color-infobox.component.html */ "./src/app/showcase/components/doc-infobox/sections/color-infobox/color-infobox.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/color-infobox/color-infobox.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-infobox/sections/color-infobox/color-infobox.component.ts")
            },
        ];
    };
    DocInfoboxComponent.prototype.setRightMenu = function () {
        var apiDocs = [{
                anchor: 'infobox-api-docs',
                title: 'API documentation',
                desc: null,
                component: null,
                markup: null,
                typescript: null
            }];
        var customRightMenu = this.infoboxSection.concat(apiDocs);
        this.rightMenuSvc.setRightMenu(customRightMenu);
    };
    DocInfoboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-doc-infobox',
            template: __webpack_require__(/*! ./doc-infobox.component.html */ "./src/app/showcase/components/doc-infobox/doc-infobox.component.html"),
            styles: [__webpack_require__(/*! ./doc-infobox.component.scss */ "./src/app/showcase/components/doc-infobox/doc-infobox.component.scss")]
        }),
        __metadata("design:paramtypes", [_showcase_right_nav_service__WEBPACK_IMPORTED_MODULE_3__["ShowcaseRightNavService"]])
    ], DocInfoboxComponent);
    return DocInfoboxComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-infobox/sections/basic-infobox/basic-infobox.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-infobox/sections/basic-infobox/basic-infobox.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<uii-info-box></uii-info-box>\n"

/***/ }),

/***/ "./src/app/showcase/components/doc-infobox/sections/basic-infobox/basic-infobox.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-infobox/sections/basic-infobox/basic-infobox.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/showcase/components/doc-infobox/sections/basic-infobox/basic-infobox.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-infobox/sections/basic-infobox/basic-infobox.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: BasicInfoboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicInfoboxComponent", function() { return BasicInfoboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BasicInfoboxComponent = /** @class */ (function () {
    function BasicInfoboxComponent() {
    }
    BasicInfoboxComponent.prototype.ngOnInit = function () {
    };
    BasicInfoboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-basic-infobox',
            template: __webpack_require__(/*! ./basic-infobox.component.html */ "./src/app/showcase/components/doc-infobox/sections/basic-infobox/basic-infobox.component.html"),
            styles: [__webpack_require__(/*! ./basic-infobox.component.scss */ "./src/app/showcase/components/doc-infobox/sections/basic-infobox/basic-infobox.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicInfoboxComponent);
    return BasicInfoboxComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-infobox/sections/color-infobox/color-infobox.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-infobox/sections/color-infobox/color-infobox.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12 col-md-3\"><uii-info-box title=\"OC Pink\" subtitle=\"100%\" type=\"oc-pink\" infoIcon=\"fa fa-bar-chart\"></uii-info-box></div>\n  <div class=\"col-sm-12 col-md-3\"><uii-info-box title=\"OC Purple\" subtitle=\"Yes\" type=\"oc-purple\" infoIcon=\"fa fa-check\"></uii-info-box></div>\n  <div class=\"col-sm-12 col-md-3\"><uii-info-box title=\"OC Deep Purple\" subtitle=\"85.0\" type=\"oc-deep-purple\" infoIcon=\"fa fa-area-chart\"></uii-info-box></div>\n  <div class=\"col-sm-12 col-md-3\"><uii-info-box title=\"OC Cyan\" subtitle=\"20\" type=\"oc-cyan\" infoIcon=\"fa fa-exclamation-triangle\"></uii-info-box></div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12 col-md-3\"><uii-info-box title=\"OC green\" subtitle=\"100%\" type=\"oc-green\" infoIcon=\"fa fa-adjust\"></uii-info-box></div>\n  <div class=\"col-sm-12 col-md-3\"><uii-info-box title=\"OC Lime\" subtitle=\"Yes\" type=\"oc-lime\" infoIcon=\"fa fa-check-circle\"></uii-info-box></div>\n  <div class=\"col-sm-12 col-md-3\"><uii-info-box title=\"OC Orange\" subtitle=\"85.0\" type=\"oc-orange\" infoIcon=\"fa fa-arrow-circle-up\"></uii-info-box></div>\n  <div class=\"col-sm-12 col-md-3\"><uii-info-box title=\"OC Deep Orange\" subtitle=\"20\" type=\"oc-deep-orange\" infoIcon=\"fa fa-angle-double-up\"></uii-info-box></div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12 col-md-3\"><uii-info-box title=\"OC Brown\" subtitle=\"100%\" type=\"oc-brown\" infoIcon=\"fa fa-arrows-alt\"></uii-info-box></div>\n  <div class=\"col-sm-12 col-md-3\"><uii-info-box title=\"OC Blue Grey\" subtitle=\"Yes\" type=\"oc-blue-grey\" infoIcon=\"fa fa-asterisk\"></uii-info-box></div>\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/doc-infobox/sections/color-infobox/color-infobox.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-infobox/sections/color-infobox/color-infobox.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  margin-bottom: 10px;\n}"

/***/ }),

/***/ "./src/app/showcase/components/doc-infobox/sections/color-infobox/color-infobox.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-infobox/sections/color-infobox/color-infobox.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ColorInfoboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorInfoboxComponent", function() { return ColorInfoboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ColorInfoboxComponent = /** @class */ (function () {
    function ColorInfoboxComponent() {
    }
    ColorInfoboxComponent.prototype.ngOnInit = function () {
    };
    ColorInfoboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-color-infobox',
            template: __webpack_require__(/*! ./color-infobox.component.html */ "./src/app/showcase/components/doc-infobox/sections/color-infobox/color-infobox.component.html"),
            styles: [__webpack_require__(/*! ./color-infobox.component.scss */ "./src/app/showcase/components/doc-infobox/sections/color-infobox/color-infobox.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ColorInfoboxComponent);
    return ColorInfoboxComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-infobox/sections/group-infobox/group-infobox.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-infobox/sections/group-infobox/group-infobox.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12 col-md-3\"><uii-info-box title=\"Success\" subtitle=\"100%\" type=\"success\" infoIcon=\"fa fa-bar-chart\"></uii-info-box></div>\n  <div class=\"col-sm-12 col-md-3\"><uii-info-box title=\"Info\" subtitle=\"Yes\" type=\"info\" infoIcon=\"fa fa-check\"></uii-info-box></div>\n  <div class=\"col-sm-12 col-md-3\"><uii-info-box title=\"Danger\" subtitle=\"85.0\" type=\"danger\" infoIcon=\"fa fa-area-chart\"></uii-info-box></div>\n  <div class=\"col-sm-12 col-md-3\"><uii-info-box title=\"Warning\" subtitle=\"20\" type=\"warning\" infoIcon=\"fa fa-exclamation-triangle\"></uii-info-box></div>\n</div>\n"

/***/ }),

/***/ "./src/app/showcase/components/doc-infobox/sections/group-infobox/group-infobox.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-infobox/sections/group-infobox/group-infobox.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/showcase/components/doc-infobox/sections/group-infobox/group-infobox.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-infobox/sections/group-infobox/group-infobox.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: GroupInfoboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupInfoboxComponent", function() { return GroupInfoboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GroupInfoboxComponent = /** @class */ (function () {
    function GroupInfoboxComponent() {
    }
    GroupInfoboxComponent.prototype.ngOnInit = function () {
    };
    GroupInfoboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-basic-infobox',
            template: __webpack_require__(/*! ./group-infobox.component.html */ "./src/app/showcase/components/doc-infobox/sections/group-infobox/group-infobox.component.html"),
            styles: [__webpack_require__(/*! ./group-infobox.component.scss */ "./src/app/showcase/components/doc-infobox/sections/group-infobox/group-infobox.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GroupInfoboxComponent);
    return GroupInfoboxComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-information/doc-information.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-information/doc-information.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ugw-component-header [title]=\"title\" [description]=\"description\"></ugw-component-header>\n<ugw-section [sections]=\"informationSection\" [apiDocSections]=\"apiDocSection\"></ugw-section>\n"

/***/ }),

/***/ "./src/app/showcase/components/doc-information/doc-information.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-information/doc-information.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/showcase/components/doc-information/doc-information.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/showcase/components/doc-information/doc-information.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DocInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocInformationComponent", function() { return DocInformationComponent; });
/* harmony import */ var _sections_information_with_tag_html_information_with_tag_html_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sections/information-with-tag-html/information-with-tag-html.component */ "./src/app/showcase/components/doc-information/sections/information-with-tag-html/information-with-tag-html.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _showcase_right_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../showcase-right-nav.service */ "./src/app/showcase/showcase-right-nav.service.ts");
/* harmony import */ var _sections_basic_information_basic_information_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/basic-information/basic-information.component */ "./src/app/showcase/components/doc-information/sections/basic-information/basic-information.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DocInformationComponent = /** @class */ (function () {
    function DocInformationComponent(rightMenuSvc) {
        this.rightMenuSvc = rightMenuSvc;
        this.initializeMetaData();
        this.initializeApiDocumentation();
        this.initializeSection();
        this.setRightMenu();
    }
    DocInformationComponent.prototype.initializeApiDocumentation = function () {
        this.apiDocSection = {
            title: this.title.toLowerCase(),
            selector: 'pil-toast',
            properties: [
                {
                    name: 'type',
                    type: 'string',
                    default: 'info',
                    description: 'Type of a displayed information.'
                },
                {
                    name: 'message',
                    type: 'string',
                    default: '',
                    description: 'Message of a displayed information.'
                }
            ]
        };
    };
    DocInformationComponent.prototype.initializeMetaData = function () {
        this.title = 'Information';
        this.description = 'Information is a component we can use to display an additional information on a special case.';
    };
    DocInformationComponent.prototype.initializeSection = function () {
        this.informationSection = [
            {
                anchor: 'basic',
                title: 'Basic',
                desc: 'This is the basic implementation of information.',
                component: _sections_basic_information_basic_information_component__WEBPACK_IMPORTED_MODULE_3__["BasicInformationComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/basic-information/basic-information.component.html */ "./src/app/showcase/components/doc-information/sections/basic-information/basic-information.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/basic-information/basic-information.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-information/sections/basic-information/basic-information.component.ts")
            },
            {
                anchor: 'With tag HTML',
                title: 'With tag HTML',
                desc: 'This is the basic implementation of information with Tag HTML.',
                component: _sections_information_with_tag_html_information_with_tag_html_component__WEBPACK_IMPORTED_MODULE_0__["InformationWithTagHtmlComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/information-with-tag-html/information-with-tag-html.component.html */ "./src/app/showcase/components/doc-information/sections/information-with-tag-html/information-with-tag-html.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/information-with-tag-html/information-with-tag-html.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-information/sections/information-with-tag-html/information-with-tag-html.component.ts")
            },
        ];
    };
    DocInformationComponent.prototype.setRightMenu = function () {
        var apiDocs = [{
                anchor: 'information-api-docs',
                title: 'API documentation',
                desc: null,
                component: null,
                markup: null,
                typescript: null
            }];
        var customRightMenu = this.informationSection.concat(apiDocs);
        this.rightMenuSvc.setRightMenu(customRightMenu);
    };
    DocInformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ugw-doc-information',
            template: __webpack_require__(/*! ./doc-information.component.html */ "./src/app/showcase/components/doc-information/doc-information.component.html"),
            styles: [__webpack_require__(/*! ./doc-information.component.scss */ "./src/app/showcase/components/doc-information/doc-information.component.scss")]
        }),
        __metadata("design:paramtypes", [_showcase_right_nav_service__WEBPACK_IMPORTED_MODULE_2__["ShowcaseRightNavService"]])
    ], DocInformationComponent);
    return DocInformationComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-information/sections/basic-information/basic-information.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-information/sections/basic-information/basic-information.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n    <uii-information [type]=\"'success'\" [message]=\"'This is success.'\"></uii-information>\n  </div>\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n    <uii-information [type]=\"'warning'\" [message]=\"'This is warning.'\"></uii-information>\n  </div>\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n    <uii-information [type]=\"'error'\" [message]=\"'This is an error.'\"></uii-information>\n  </div>\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n    <uii-information [type]=\"'info'\" [message]=\"'This is an info.'\"></uii-information>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/doc-information/sections/basic-information/basic-information.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-information/sections/basic-information/basic-information.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row > div {\n  margin-bottom: 1.25rem;\n}"

/***/ }),

/***/ "./src/app/showcase/components/doc-information/sections/basic-information/basic-information.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-information/sections/basic-information/basic-information.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: BasicInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicInformationComponent", function() { return BasicInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BasicInformationComponent = /** @class */ (function () {
    function BasicInformationComponent() {
    }
    BasicInformationComponent.prototype.ngOnInit = function () {
    };
    BasicInformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-basic-information',
            template: __webpack_require__(/*! ./basic-information.component.html */ "./src/app/showcase/components/doc-information/sections/basic-information/basic-information.component.html"),
            styles: [__webpack_require__(/*! ./basic-information.component.scss */ "./src/app/showcase/components/doc-information/sections/basic-information/basic-information.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicInformationComponent);
    return BasicInformationComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-information/sections/information-with-tag-html/information-with-tag-html.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-information/sections/information-with-tag-html/information-with-tag-html.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n    <uii-information [type]=\"'success'\" [message]=\"message_success\"></uii-information>\n  </div>\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n    <uii-information [type]=\"'warning'\" [message]=\"message_warning\"></uii-information>\n  </div>\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n    <uii-information [type]=\"'error'\" [message]=\"message_error\"></uii-information>\n  </div>\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n    <uii-information [type]=\"'info'\" [message]=\"message_info\"></uii-information>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/doc-information/sections/information-with-tag-html/information-with-tag-html.component.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-information/sections/information-with-tag-html/information-with-tag-html.component.scss ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row > div {\n  margin-bottom: 1.25rem;\n}"

/***/ }),

/***/ "./src/app/showcase/components/doc-information/sections/information-with-tag-html/information-with-tag-html.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-information/sections/information-with-tag-html/information-with-tag-html.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: InformationWithTagHtmlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationWithTagHtmlComponent", function() { return InformationWithTagHtmlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InformationWithTagHtmlComponent = /** @class */ (function () {
    function InformationWithTagHtmlComponent() {
        this.message_success = '<div class=\"information-title\"><h4>This is success</h4><p>This is the success text using the html tag</p></div>';
        this.message_warning = '<div class=\"information-title\"><h4>This is warning</h4><p>This is the warning text using the html tag</p></div>';
        this.message_error = '<div class=\"information-title\"><h4>This is error</h4><p>This is the error text using the html tag</p></div>';
        this.message_info = '<div class=\"information-title\"><h4>This is info</h4><p>This is the info text using the html tag</p></div>';
    }
    InformationWithTagHtmlComponent.prototype.ngOnInit = function () {
    };
    InformationWithTagHtmlComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-information-with-tag-html',
            template: __webpack_require__(/*! ./information-with-tag-html.component.html */ "./src/app/showcase/components/doc-information/sections/information-with-tag-html/information-with-tag-html.component.html"),
            styles: [__webpack_require__(/*! ./information-with-tag-html.component.scss */ "./src/app/showcase/components/doc-information/sections/information-with-tag-html/information-with-tag-html.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InformationWithTagHtmlComponent);
    return InformationWithTagHtmlComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-pagination/doc-pagination.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/showcase/components/doc-pagination/doc-pagination.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ugw-component-header [title]=\"title\" [description]=\"description\"></ugw-component-header>\n<ugw-section [sections]=\"paginationSection\" [apiDocSections]=\"apiDocSection\"></ugw-section>"

/***/ }),

/***/ "./src/app/showcase/components/doc-pagination/doc-pagination.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/showcase/components/doc-pagination/doc-pagination.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/showcase/components/doc-pagination/doc-pagination.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/showcase/components/doc-pagination/doc-pagination.component.ts ***!
  \********************************************************************************/
/*! exports provided: DocPaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocPaginationComponent", function() { return DocPaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sections_set_page_set_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections/set-page/set-page.component */ "./src/app/showcase/components/doc-pagination/sections/set-page/set-page.component.ts");
/* harmony import */ var _showcase_right_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../showcase-right-nav.service */ "./src/app/showcase/showcase-right-nav.service.ts");
/* harmony import */ var _sections_page_change_event_page_change_event_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/page-change-event/page-change-event.component */ "./src/app/showcase/components/doc-pagination/sections/page-change-event/page-change-event.component.ts");
/* harmony import */ var _sections_basic_pagination_basic_pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/basic-pagination/basic-pagination.component */ "./src/app/showcase/components/doc-pagination/sections/basic-pagination/basic-pagination.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DocPaginationComponent = /** @class */ (function () {
    function DocPaginationComponent(rightMenuSvc) {
        this.rightMenuSvc = rightMenuSvc;
        this.initializeMetaData();
        this.initializeApiDocumentation();
        this.initializeSection();
        this.setRightMenu();
    }
    DocPaginationComponent.prototype.initializeApiDocumentation = function () {
        this.apiDocSection = {
            title: this.title.toLowerCase(),
            selector: 'pil-pagination',
            properties: [
                {
                    name: 'amountOfData',
                    type: 'number',
                    default: '100',
                    description: 'The sum of all available data.'
                },
                {
                    name: 'dataPerPage',
                    type: 'number',
                    default: '10',
                    description: 'Amount of data that will be displayed on one page.'
                },
                {
                    name: 'pageTotal',
                    type: 'number',
                    default: '5',
                    description: 'Limit of page number to be displayed.'
                }
            ],
            events: [
                {
                    name: 'onPageChange',
                    type: 'EventEmitter<>',
                    default: '',
                    description: 'Event trigered when page selected'
                }
            ]
        };
    };
    DocPaginationComponent.prototype.initializeMetaData = function () {
        this.title = 'Pagination';
        this.description = 'Pagination is the way to divide a content into some separate pages.';
    };
    DocPaginationComponent.prototype.initializeSection = function () {
        this.paginationSection = [
            {
                anchor: 'basic',
                title: 'Basic',
                desc: 'Basic pagination implementation',
                component: _sections_basic_pagination_basic_pagination_component__WEBPACK_IMPORTED_MODULE_4__["BasicPaginationComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/basic-pagination/basic-pagination.component.html */ "./src/app/showcase/components/doc-pagination/sections/basic-pagination/basic-pagination.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/basic-pagination/basic-pagination.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-pagination/sections/basic-pagination/basic-pagination.component.ts")
            },
            {
                anchor: 'page-change-event',
                title: 'Page change event',
                desc: 'You can do some stuff when page selected',
                component: _sections_page_change_event_page_change_event_component__WEBPACK_IMPORTED_MODULE_3__["PageChangeEventComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/page-change-event/page-change-event.component.html */ "./src/app/showcase/components/doc-pagination/sections/page-change-event/page-change-event.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/page-change-event/page-change-event.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-pagination/sections/page-change-event/page-change-event.component.ts")
            },
            {
                anchor: 'set-page',
                title: 'Set Page',
                desc: 'Set the page manualy from your component',
                component: _sections_set_page_set_page_component__WEBPACK_IMPORTED_MODULE_1__["SetPageComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/set-page/set-page.component.html */ "./src/app/showcase/components/doc-pagination/sections/set-page/set-page.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/set-page/set-page.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-pagination/sections/set-page/set-page.component.ts")
            }
        ];
    };
    DocPaginationComponent.prototype.setRightMenu = function () {
        var apiDocs = [{
                anchor: 'pagination-api-docs',
                title: 'API documentation',
                desc: null,
                component: null,
                markup: null,
                typescript: null
            }];
        var customRightMenu = this.paginationSection.concat(apiDocs);
        this.rightMenuSvc.setRightMenu(customRightMenu);
    };
    DocPaginationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-doc-pagination',
            template: __webpack_require__(/*! ./doc-pagination.component.html */ "./src/app/showcase/components/doc-pagination/doc-pagination.component.html"),
            styles: [__webpack_require__(/*! ./doc-pagination.component.scss */ "./src/app/showcase/components/doc-pagination/doc-pagination.component.scss")]
        }),
        __metadata("design:paramtypes", [_showcase_right_nav_service__WEBPACK_IMPORTED_MODULE_2__["ShowcaseRightNavService"]])
    ], DocPaginationComponent);
    return DocPaginationComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-pagination/sections/basic-pagination/basic-pagination.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-pagination/sections/basic-pagination/basic-pagination.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<uii-pagination [amountOfData]=\"100\" [dataPerPage]=\"10\" [paginationALign]=\"'left'\"></uii-pagination>"

/***/ }),

/***/ "./src/app/showcase/components/doc-pagination/sections/basic-pagination/basic-pagination.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-pagination/sections/basic-pagination/basic-pagination.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: BasicPaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicPaginationComponent", function() { return BasicPaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BasicPaginationComponent = /** @class */ (function () {
    function BasicPaginationComponent() {
    }
    BasicPaginationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-basic-pagination',
            template: __webpack_require__(/*! ./basic-pagination.component.html */ "./src/app/showcase/components/doc-pagination/sections/basic-pagination/basic-pagination.component.html"),
        })
    ], BasicPaginationComponent);
    return BasicPaginationComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-pagination/sections/page-change-event/page-change-event.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-pagination/sections/page-change-event/page-change-event.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"well well-default\">Current page is {{currentPage}}</div>\n<uii-pagination \n  [amountOfData]=\"100\"\n  [dataPerPage]=\"10\"\n  [paginationALign]=\"'left'\"\n  (currentPageChange)=\"onPageChange($event)\">\n</uii-pagination>"

/***/ }),

/***/ "./src/app/showcase/components/doc-pagination/sections/page-change-event/page-change-event.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-pagination/sections/page-change-event/page-change-event.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: PageChangeEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageChangeEventComponent", function() { return PageChangeEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageChangeEventComponent = /** @class */ (function () {
    function PageChangeEventComponent() {
        this.currentPage = 1;
    }
    PageChangeEventComponent.prototype.onPageChange = function ($event) {
        this.currentPage = $event;
    };
    PageChangeEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-page-change-event',
            template: __webpack_require__(/*! ./page-change-event.component.html */ "./src/app/showcase/components/doc-pagination/sections/page-change-event/page-change-event.component.html")
        })
    ], PageChangeEventComponent);
    return PageChangeEventComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-pagination/sections/set-page/set-page.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-pagination/sections/set-page/set-page.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary\" (click)=\"onPageChange(5)\">Go to Page 5</button>\n<div class=\"well well-default\">Current page is {{currentPage || 1}}</div>\n<uii-pagination\n  [amountOfData]=\"100\"\n  [dataPerPage]=\"10\"\n  [paginationALign]=\"'left'\"\n  [(currentPage)]=\"currentPage\">\n</uii-pagination>"

/***/ }),

/***/ "./src/app/showcase/components/doc-pagination/sections/set-page/set-page.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-pagination/sections/set-page/set-page.component.ts ***!
  \********************************************************************************************/
/*! exports provided: SetPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetPageComponent", function() { return SetPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SetPageComponent = /** @class */ (function () {
    function SetPageComponent() {
    }
    SetPageComponent.prototype.onPageChange = function (page) {
        this.currentPage = page;
    };
    SetPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-set-page',
            template: __webpack_require__(/*! ./set-page.component.html */ "./src/app/showcase/components/doc-pagination/sections/set-page/set-page.component.html")
        })
    ], SetPageComponent);
    return SetPageComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-switch/doc-switch.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/showcase/components/doc-switch/doc-switch.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ugw-component-header [title]=\"title\" [description]=\"description\"></ugw-component-header>\n<ugw-section [sections]=\"switchSection\" [apiDocSections]=\"apiDocSection\"></ugw-section>"

/***/ }),

/***/ "./src/app/showcase/components/doc-switch/doc-switch.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/showcase/components/doc-switch/doc-switch.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/showcase/components/doc-switch/doc-switch.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/showcase/components/doc-switch/doc-switch.component.ts ***!
  \************************************************************************/
/*! exports provided: DocSwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocSwitchComponent", function() { return DocSwitchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _showcase_right_nav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../showcase-right-nav.service */ "./src/app/showcase/showcase-right-nav.service.ts");
/* harmony import */ var _sections_basic_switch_basic_switch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/basic-switch/basic-switch.component */ "./src/app/showcase/components/doc-switch/sections/basic-switch/basic-switch.component.ts");
/* harmony import */ var _sections_changed_switch_changed_switch_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/changed-switch/changed-switch.component */ "./src/app/showcase/components/doc-switch/sections/changed-switch/changed-switch.component.ts");
/* harmony import */ var _sections_checked_switch_checked_switch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/checked-switch/checked-switch.component */ "./src/app/showcase/components/doc-switch/sections/checked-switch/checked-switch.component.ts");
/* harmony import */ var _sections_disabled_switch_disabled_switch_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/disabled-switch/disabled-switch.component */ "./src/app/showcase/components/doc-switch/sections/disabled-switch/disabled-switch.component.ts");
/* harmony import */ var _sections_delayed_switch_delayed_switch_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sections/delayed-switch/delayed-switch.component */ "./src/app/showcase/components/doc-switch/sections/delayed-switch/delayed-switch.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DocSwitchComponent = /** @class */ (function () {
    function DocSwitchComponent(rightMenuSvc) {
        this.rightMenuSvc = rightMenuSvc;
        this.initializeMetaData();
        this.initializeApiDocumentation();
        this.initializeSection();
        this.setRightMenu();
    }
    DocSwitchComponent.prototype.initializeApiDocumentation = function () {
        this.apiDocSection = {
            title: this.title.toLowerCase(),
            selector: 'pil-switch',
            properties: [
                {
                    name: 'checked',
                    type: 'boolean',
                    default: 'false',
                    description: 'Check or uncheck switch'
                },
                {
                    name: 'disabled',
                    type: 'boolean',
                    default: 'false',
                    description: 'Enable or disable switch'
                },
                {
                    name: 'useOverlay',
                    type: 'boolean',
                    default: 'false',
                    description: 'With useOverlay, you can delay the checked of value depending on certain conditions'
                }
            ],
            events: [
                {
                    name: 'changed',
                    type: 'EventEmitter<>',
                    default: '',
                    description: 'Fired when swith`s value changed and useOverlay is false'
                },
                {
                    name: 'changeEvent',
                    type: 'EventEmitter<>',
                    default: '',
                    description: 'Fired when swith`s value changed and useOverlay is true'
                }
            ]
        };
    };
    DocSwitchComponent.prototype.initializeMetaData = function () {
        this.title = 'Switch';
        this.description = 'Switch is used to toggle a boolean value';
    };
    DocSwitchComponent.prototype.initializeSection = function () {
        this.switchSection = [
            {
                anchor: 'basic',
                title: 'Basic',
                desc: 'Basic switch implementation',
                component: _sections_basic_switch_basic_switch_component__WEBPACK_IMPORTED_MODULE_2__["BasicSwitchComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/basic-switch/basic-switch.component.html */ "./src/app/showcase/components/doc-switch/sections/basic-switch/basic-switch.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/basic-switch/basic-switch.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-switch/sections/basic-switch/basic-switch.component.ts")
            },
            {
                anchor: 'disabled',
                title: 'Disabled',
                desc: 'Disable switch from your component',
                component: _sections_disabled_switch_disabled_switch_component__WEBPACK_IMPORTED_MODULE_5__["DisabledSwitchComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/disabled-switch/disabled-switch.component.html */ "./src/app/showcase/components/doc-switch/sections/disabled-switch/disabled-switch.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/disabled-switch/disabled-switch.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-switch/sections/disabled-switch/disabled-switch.component.ts")
            },
            {
                anchor: 'checked',
                title: 'Checked',
                desc: 'Checked or unchecked switch from you component',
                component: _sections_checked_switch_checked_switch_component__WEBPACK_IMPORTED_MODULE_4__["CheckedSwitchComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/checked-switch/checked-switch.component.html */ "./src/app/showcase/components/doc-switch/sections/checked-switch/checked-switch.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/checked-switch/checked-switch.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-switch/sections/checked-switch/checked-switch.component.ts")
            },
            {
                anchor: 'delayed',
                title: 'Delay status',
                desc: 'You can delay the switch checked value base on some condition',
                component: _sections_delayed_switch_delayed_switch_component__WEBPACK_IMPORTED_MODULE_6__["DelayedSwitchComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/delayed-switch/delayed-switch.component.html */ "./src/app/showcase/components/doc-switch/sections/delayed-switch/delayed-switch.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/delayed-switch/delayed-switch.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-switch/sections/delayed-switch/delayed-switch.component.ts")
            },
            {
                anchor: 'changed',
                title: 'Changed',
                desc: "Fired when switch's checked status change and useOverlay is false",
                component: _sections_changed_switch_changed_switch_component__WEBPACK_IMPORTED_MODULE_3__["ChangedSwitchComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/changed-switch/changed-switch.component.html */ "./src/app/showcase/components/doc-switch/sections/changed-switch/changed-switch.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/changed-switch/changed-switch.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-switch/sections/changed-switch/changed-switch.component.ts")
            }
        ];
    };
    DocSwitchComponent.prototype.setRightMenu = function () {
        var apiDocs = [{
                anchor: 'switch-api-docs',
                title: 'API documentation',
                desc: null,
                component: null,
                markup: null,
                typescript: null
            }];
        var customRightMenu = this.switchSection.concat(apiDocs);
        this.rightMenuSvc.setRightMenu(customRightMenu);
    };
    DocSwitchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-doc-switch',
            template: __webpack_require__(/*! ./doc-switch.component.html */ "./src/app/showcase/components/doc-switch/doc-switch.component.html"),
            styles: [__webpack_require__(/*! ./doc-switch.component.scss */ "./src/app/showcase/components/doc-switch/doc-switch.component.scss")]
        }),
        __metadata("design:paramtypes", [_showcase_right_nav_service__WEBPACK_IMPORTED_MODULE_1__["ShowcaseRightNavService"]])
    ], DocSwitchComponent);
    return DocSwitchComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-switch/sections/basic-switch/basic-switch.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-switch/sections/basic-switch/basic-switch.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<uii-switch [checked]=\"true\"></uii-switch>\n<uii-switch></uii-switch>"

/***/ }),

/***/ "./src/app/showcase/components/doc-switch/sections/basic-switch/basic-switch.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-switch/sections/basic-switch/basic-switch.component.ts ***!
  \************************************************************************************************/
/*! exports provided: BasicSwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicSwitchComponent", function() { return BasicSwitchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BasicSwitchComponent = /** @class */ (function () {
    function BasicSwitchComponent() {
    }
    BasicSwitchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-basic-switch',
            template: __webpack_require__(/*! ./basic-switch.component.html */ "./src/app/showcase/components/doc-switch/sections/basic-switch/basic-switch.component.html")
        })
    ], BasicSwitchComponent);
    return BasicSwitchComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-switch/sections/changed-switch/changed-switch.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-switch/sections/changed-switch/changed-switch.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<uii-switch (changed)=\"onSwitchChanged($event)\"></uii-switch>\n<div class=\"well well-default\">\n  Checked status is {{checked}}\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/doc-switch/sections/changed-switch/changed-switch.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-switch/sections/changed-switch/changed-switch.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ChangedSwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangedSwitchComponent", function() { return ChangedSwitchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChangedSwitchComponent = /** @class */ (function () {
    function ChangedSwitchComponent() {
        this.checked = false;
    }
    ChangedSwitchComponent.prototype.onSwitchChanged = function ($event) {
        this.checked = $event;
    };
    ChangedSwitchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-changed-switch',
            template: __webpack_require__(/*! ./changed-switch.component.html */ "./src/app/showcase/components/doc-switch/sections/changed-switch/changed-switch.component.html")
        })
    ], ChangedSwitchComponent);
    return ChangedSwitchComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-switch/sections/checked-switch/checked-switch.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-switch/sections/checked-switch/checked-switch.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"margin-bottom-10\">\n  <button class=\"btn btn-primary\" (click)=\"onCheckedToggled()\">Toogle checked</button>\n</div>\n<uii-switch [checked]=\"checked\"></uii-switch>"

/***/ }),

/***/ "./src/app/showcase/components/doc-switch/sections/checked-switch/checked-switch.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-switch/sections/checked-switch/checked-switch.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: CheckedSwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckedSwitchComponent", function() { return CheckedSwitchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CheckedSwitchComponent = /** @class */ (function () {
    function CheckedSwitchComponent() {
        this.checked = true;
    }
    CheckedSwitchComponent.prototype.onCheckedToggled = function () {
        this.checked = !this.checked;
    };
    CheckedSwitchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-checked-switch',
            template: __webpack_require__(/*! ./checked-switch.component.html */ "./src/app/showcase/components/doc-switch/sections/checked-switch/checked-switch.component.html")
        })
    ], CheckedSwitchComponent);
    return CheckedSwitchComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-switch/sections/delayed-switch/delayed-switch.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-switch/sections/delayed-switch/delayed-switch.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<uii-switch \n  [useOverlay]=\"true\" \n  [checked]=\"checked\" \n  (changeEvent)=\"onChangeEvent($event)\">\n</uii-switch>\n<div class=\"well well-default\">\n  Value will be change in {{timeOut}} seconds\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/doc-switch/sections/delayed-switch/delayed-switch.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-switch/sections/delayed-switch/delayed-switch.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: DelayedSwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelayedSwitchComponent", function() { return DelayedSwitchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DelayedSwitchComponent = /** @class */ (function () {
    function DelayedSwitchComponent() {
        this.checked = false;
    }
    DelayedSwitchComponent.prototype.onChangeEvent = function ($event) {
        var _this = this;
        this.timeOut = 3;
        var interval = setInterval(function () {
            if (_this.timeOut <= 1) {
                _this.checked = !$event;
                clearInterval(interval);
            }
            _this.timeOut--;
        }, 1000);
    };
    DelayedSwitchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-delayed-switch',
            template: __webpack_require__(/*! ./delayed-switch.component.html */ "./src/app/showcase/components/doc-switch/sections/delayed-switch/delayed-switch.component.html")
        })
    ], DelayedSwitchComponent);
    return DelayedSwitchComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-switch/sections/disabled-switch/disabled-switch.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-switch/sections/disabled-switch/disabled-switch.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"margin-bottom-10\">\n  <button class=\"btn btn-primary\" (click)=\"onSwitchToggled()\">Toggle status</button>\n</div>\n<uii-switch [disabled]=\"disabled\" [checked]=\"true\"></uii-switch>\n<uii-switch [disabled]=\"disabled\"></uii-switch>"

/***/ }),

/***/ "./src/app/showcase/components/doc-switch/sections/disabled-switch/disabled-switch.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-switch/sections/disabled-switch/disabled-switch.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: DisabledSwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisabledSwitchComponent", function() { return DisabledSwitchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DisabledSwitchComponent = /** @class */ (function () {
    function DisabledSwitchComponent() {
        this.disabled = true;
    }
    DisabledSwitchComponent.prototype.onSwitchToggled = function () {
        this.disabled = !this.disabled;
    };
    DisabledSwitchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-disabled-switch',
            template: __webpack_require__(/*! ./disabled-switch.component.html */ "./src/app/showcase/components/doc-switch/sections/disabled-switch/disabled-switch.component.html")
        })
    ], DisabledSwitchComponent);
    return DisabledSwitchComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-table/doc-table.component.html":
/*!************************************************************************!*\
  !*** ./src/app/showcase/components/doc-table/doc-table.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ugw-component-header [title]=\"title\" [description]=\"description\"></ugw-component-header>\n<ugw-section [sections]=\"tableSection\" [apiDocSections]=\"apiDocSection\"></ugw-section>\n"

/***/ }),

/***/ "./src/app/showcase/components/doc-table/doc-table.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/showcase/components/doc-table/doc-table.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/showcase/components/doc-table/doc-table.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/showcase/components/doc-table/doc-table.component.ts ***!
  \**********************************************************************/
/*! exports provided: DocTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocTableComponent", function() { return DocTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sections_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections/basic-table/basic-table.component */ "./src/app/showcase/components/doc-table/sections/basic-table/basic-table.component.ts");
/* harmony import */ var _showcase_right_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../showcase-right-nav.service */ "./src/app/showcase/showcase-right-nav.service.ts");
/* harmony import */ var _sections_table_with_checkbox_table_with_checkbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/table-with-checkbox/table-with-checkbox.component */ "./src/app/showcase/components/doc-table/sections/table-with-checkbox/table-with-checkbox.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DocTableComponent = /** @class */ (function () {
    function DocTableComponent(rightMenuSvc) {
        this.rightMenuSvc = rightMenuSvc;
    }
    DocTableComponent.prototype.ngOnInit = function () {
        this.initializeMetaData();
        this.initializeApiDocumentation();
        this.initializeSection();
        this.setRightMenu();
    };
    DocTableComponent.prototype.initializeMetaData = function () {
        this.title = 'Table';
        this.description = "\n      Documentation and examples for Pilar Table component.\n      The component is used to display list of data in a table,\n      but with a lot of functionality out-of-the-box like sorting,\n      searching, paging, etc.\n    ";
    };
    DocTableComponent.prototype.initializeApiDocumentation = function () {
        this.apiDocSection = {
            title: this.title.toLowerCase(),
            selector: 'pil-table',
            properties: [
                {
                    name: 'columns',
                    type: 'array',
                    default: '[]',
                    description: "\n            The column should be an object that contains at least \"name\" & \"prop\" properties.\n            You may specify column \"type\" in one of: label, html, input-text, date, input-radio.\n            Other column possible properties: hide_in_mobile, inputType, inputMaxLength,\n            textUppercase, textLowercase.\n          "
                },
                {
                    name: 'rows',
                    type: 'array',
                    default: '[]',
                    description: 'The list of data that needs to display in the table.'
                },
                {
                    name: 'isAllCheckbox',
                    type: 'boolean',
                    default: false,
                    description: "\n            Set this to \"true\" if you want the check-all-box to\n            check the checkbox in all pages, not just the current page.\n          "
                }
            ],
            events: [
                {
                    name: 'none',
                    type: 'none',
                    default: 'none',
                    description: ''
                }
            ]
        };
    };
    DocTableComponent.prototype.initializeSection = function () {
        this.tableSection = [
            {
                anchor: 'basic',
                title: 'Basic',
                desc: 'This is a basic table implementation',
                component: _sections_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_1__["BasicTableComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/basic-table/basic-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-table/sections/basic-table/basic-table.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/basic-table/basic-table.component */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-table/sections/basic-table/basic-table.component.ts")
            },
            {
                anchor: 'table-with-checkbox',
                title: 'Table with checkbox',
                desc: 'Display the checkbox in the table.',
                component: _sections_table_with_checkbox_table_with_checkbox_component__WEBPACK_IMPORTED_MODULE_3__["TableWithCheckboxComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/table-with-checkbox/table-with-checkbox.component.html */ "./src/app/showcase/components/doc-table/sections/table-with-checkbox/table-with-checkbox.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/table-with-checkbox/table-with-checkbox.component */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-table/sections/table-with-checkbox/table-with-checkbox.component.ts")
            },
        ];
    };
    DocTableComponent.prototype.setRightMenu = function () {
        var apiDocs = [{
                anchor: 'table-api-docs',
                title: 'API documentation',
                desc: null,
                component: null,
                markup: null,
                typescript: null
            }];
        var customRightMenu = this.tableSection.concat(apiDocs);
        this.rightMenuSvc.setRightMenu(customRightMenu);
    };
    DocTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-doc-infobox',
            template: __webpack_require__(/*! ./doc-table.component.html */ "./src/app/showcase/components/doc-table/doc-table.component.html"),
            styles: [__webpack_require__(/*! ./doc-table.component.scss */ "./src/app/showcase/components/doc-table/doc-table.component.scss")]
        }),
        __metadata("design:paramtypes", [_showcase_right_nav_service__WEBPACK_IMPORTED_MODULE_2__["ShowcaseRightNavService"]])
    ], DocTableComponent);
    return DocTableComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-table/sections/basic-table/basic-table.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-table/sections/basic-table/basic-table.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/showcase/components/doc-table/sections/basic-table/basic-table.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-table/sections/basic-table/basic-table.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: BasicTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicTableComponent", function() { return BasicTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BasicTableComponent = /** @class */ (function () {
    function BasicTableComponent() {
        this.rows = [];
        this.columns = [];
    }
    BasicTableComponent.prototype.ngOnInit = function () {
        this.columns = [
            {
                name: 'No',
                prop: 'number'
            },
            {
                name: 'Name',
                prop: 'name'
            },
            {
                name: 'Age',
                prop: 'age'
            },
        ];
        this.rows = [
            {
                name: 'Marta Mccoy',
                age: 31
            },
            {
                name: 'Fanny Holman',
                age: 23
            },
            {
                name: 'Latonya Gibson',
                age: 22
            },
            {
                name: 'Ines Wiggins',
                age: 35
            },
            {
                name: 'Kathrine Irwin',
                age: 38
            },
            {
                name: 'Higgins Oneal',
                age: 35
            },
            {
                name: 'Russell Duke',
                age: 37
            },
            {
                name: 'Sara Quinn',
                age: 23
            },
            {
                name: 'Dona Patterson',
                age: 32
            },
            {
                name: 'Clarice Keith',
                age: 22
            },
            {
                name: 'Petersen Maldonado',
                age: 20
            },
            {
                name: 'Tonya Colon',
                age: 38
            },
            {
                name: 'Ann Bass',
                age: 30
            },
            {
                name: 'Cherie Pickett',
                age: 21
            },
            {
                name: 'Holland Mcdonald',
                age: 28
            },
            {
                name: 'Casey Dudley',
                age: 23
            },
            {
                name: 'Sophie Slater',
                age: 33
            },
            {
                name: 'Rhoda Kent',
                age: 32
            },
            {
                name: 'Bennett Sheppard',
                age: 32
            },
            {
                name: 'Foreman Hood',
                age: 25
            }
        ];
    };
    BasicTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-basic-table',
            template: __webpack_require__(/*! ./basic-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-table/sections/basic-table/basic-table.component.html"),
            styles: [__webpack_require__(/*! ./basic-table.component.scss */ "./src/app/showcase/components/doc-table/sections/basic-table/basic-table.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicTableComponent);
    return BasicTableComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-table/sections/table-with-checkbox/table-with-checkbox.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-table/sections/table-with-checkbox/table-with-checkbox.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<uii-table\n  [rows]=\"rows\"\n  [columns]=\"columns\"\n  [checkboxColumn]=\"true\"\n  [actionTitle]=\"'Action'\"></uii-table>\n"

/***/ }),

/***/ "./src/app/showcase/components/doc-table/sections/table-with-checkbox/table-with-checkbox.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-table/sections/table-with-checkbox/table-with-checkbox.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/showcase/components/doc-table/sections/table-with-checkbox/table-with-checkbox.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-table/sections/table-with-checkbox/table-with-checkbox.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: TableWithCheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableWithCheckboxComponent", function() { return TableWithCheckboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TableWithCheckboxComponent = /** @class */ (function () {
    function TableWithCheckboxComponent() {
        this.rows = [];
        this.columns = [];
    }
    TableWithCheckboxComponent.prototype.ngOnInit = function () {
        this.columns = [
            {
                name: 'No',
                prop: 'number'
            },
            {
                name: 'Name',
                prop: 'name'
            },
            {
                name: 'Age',
                prop: 'age'
            },
        ];
        this.rows = [
            {
                name: 'Marta Mccoy',
                age: 31
            },
            {
                name: 'Fanny Holman',
                age: 23
            },
            {
                name: 'Latonya Gibson',
                age: 22
            },
            {
                name: 'Ines Wiggins',
                age: 35
            },
            {
                name: 'Kathrine Irwin',
                age: 38
            },
            {
                name: 'Higgins Oneal',
                age: 35
            },
            {
                name: 'Russell Duke',
                age: 37
            },
            {
                name: 'Sara Quinn',
                age: 23
            },
            {
                name: 'Dona Patterson',
                age: 32
            },
            {
                name: 'Clarice Keith',
                age: 22
            },
            {
                name: 'Petersen Maldonado',
                age: 20
            },
            {
                name: 'Tonya Colon',
                age: 38
            },
            {
                name: 'Ann Bass',
                age: 30
            },
            {
                name: 'Cherie Pickett',
                age: 21
            },
            {
                name: 'Holland Mcdonald',
                age: 28
            },
            {
                name: 'Casey Dudley',
                age: 23
            },
            {
                name: 'Sophie Slater',
                age: 33
            },
            {
                name: 'Rhoda Kent',
                age: 32
            },
            {
                name: 'Bennett Sheppard',
                age: 32
            },
            {
                name: 'Foreman Hood',
                age: 25
            }
        ];
    };
    TableWithCheckboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-table-with-checkbox',
            template: __webpack_require__(/*! ./table-with-checkbox.component.html */ "./src/app/showcase/components/doc-table/sections/table-with-checkbox/table-with-checkbox.component.html"),
            styles: [__webpack_require__(/*! ./table-with-checkbox.component.scss */ "./src/app/showcase/components/doc-table/sections/table-with-checkbox/table-with-checkbox.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TableWithCheckboxComponent);
    return TableWithCheckboxComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-tabset/doc-tabset.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/showcase/components/doc-tabset/doc-tabset.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ugw-component-header [title]=\"title\" [description]=\"description\"></ugw-component-header>\n<ugw-section [sections]=\"tabsetSection\" [apiDocSections]=\"apiDocSection\"></ugw-section>"

/***/ }),

/***/ "./src/app/showcase/components/doc-tabset/doc-tabset.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/showcase/components/doc-tabset/doc-tabset.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/showcase/components/doc-tabset/doc-tabset.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/showcase/components/doc-tabset/doc-tabset.component.ts ***!
  \************************************************************************/
/*! exports provided: DocTabsetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocTabsetComponent", function() { return DocTabsetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sections_basic_tabset_basic_tabset_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections/basic-tabset/basic-tabset.component */ "./src/app/showcase/components/doc-tabset/sections/basic-tabset/basic-tabset.component.ts");
/* harmony import */ var _showcase_right_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../showcase-right-nav.service */ "./src/app/showcase/showcase-right-nav.service.ts");
/* harmony import */ var _sections_tabset_with_icon_text_tabset_with_icon_text_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/tabset-with-icon-text/tabset-with-icon-text.component */ "./src/app/showcase/components/doc-tabset/sections/tabset-with-icon-text/tabset-with-icon-text.component.ts");
/* harmony import */ var _sections_tabset_with_icon_tabset_with_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/tabset-with-icon/tabset-with-icon.component */ "./src/app/showcase/components/doc-tabset/sections/tabset-with-icon/tabset-with-icon.component.ts");
/* harmony import */ var _sections_manually_tab_selection_manually_tab_selection_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/manually-tab-selection/manually-tab-selection.component */ "./src/app/showcase/components/doc-tabset/sections/manually-tab-selection/manually-tab-selection.component.ts");
/* harmony import */ var _sections_tabset_select_event_tabset_select_event_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sections/tabset-select-event/tabset-select-event.component */ "./src/app/showcase/components/doc-tabset/sections/tabset-select-event/tabset-select-event.component.ts");
/* harmony import */ var _sections_tabset_deselect_event_tabset_deselect_event_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections/tabset-deselect-event/tabset-deselect-event.component */ "./src/app/showcase/components/doc-tabset/sections/tabset-deselect-event/tabset-deselect-event.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DocTabsetComponent = /** @class */ (function () {
    function DocTabsetComponent(rightMenuSvc) {
        this.rightMenuSvc = rightMenuSvc;
        this.initializeMetaData();
        this.initializeApiDocumentation();
        this.initializeSection();
        this.setRightMenu();
    }
    DocTabsetComponent.prototype.initializeApiDocumentation = function () {
        this.apiDocSection = {
            title: this.title.toLowerCase(),
            selector: 'pil-tabset',
            properties: [
                {
                    name: 'title',
                    type: 'string',
                    default: '',
                    description: 'Size of the calendar and entire components. Can be medium which is default or large.'
                },
                {
                    name: 'tabIcon',
                    type: 'string',
                    default: '',
                    description: 'Size of the calendar and entire components. Can be medium which is default or large.'
                },
                {
                    name: 'tabMobileAttr',
                    type: 'string',
                    default: 'both',
                    description: 'Size of the calendar and entire components. Can be medium which is or large.'
                }
            ],
            events: [
                {
                    name: 'selected',
                    type: 'EventEmitter<>',
                    default: '',
                    description: 'event yang terjadi ketika halaman nomor halaman dipilih'
                },
                {
                    name: 'deselected',
                    type: 'EventEmitter<>',
                    default: '',
                    description: 'event yang terjadi ketika halaman nomor halaman dipilih'
                }
            ]
        };
    };
    DocTabsetComponent.prototype.initializeMetaData = function () {
        this.title = 'Tabset';
        this.description = 'Used to group content into different tab in one page';
    };
    DocTabsetComponent.prototype.initializeSection = function () {
        this.tabsetSection = [
            {
                anchor: 'basic',
                title: 'Basic',
                desc: 'This is a basic tabset implementation',
                component: _sections_basic_tabset_basic_tabset_component__WEBPACK_IMPORTED_MODULE_1__["BasicTabsetComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/basic-tabset/basic-tabset.component.html */ "./src/app/showcase/components/doc-tabset/sections/basic-tabset/basic-tabset.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/basic-tabset/basic-tabset.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-tabset/sections/basic-tabset/basic-tabset.component.ts")
            },
            {
                anchor: 'tabset-with-icon',
                title: 'Tabset with icon',
                desc: 'You can use icon in every tab header',
                component: _sections_tabset_with_icon_tabset_with_icon_component__WEBPACK_IMPORTED_MODULE_4__["TabsetWithIconComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/tabset-with-icon/tabset-with-icon.component.html */ "./src/app/showcase/components/doc-tabset/sections/tabset-with-icon/tabset-with-icon.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/tabset-with-icon/tabset-with-icon.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-tabset/sections/tabset-with-icon/tabset-with-icon.component.ts")
            },
            {
                anchor: 'tabset-with-icon-text',
                title: 'Tabset with icon and text',
                desc: 'You can use icon and text in every tab header',
                component: _sections_tabset_with_icon_text_tabset_with_icon_text_component__WEBPACK_IMPORTED_MODULE_3__["TabsetWithIconTextComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/tabset-with-icon-text/tabset-with-icon-text.component.html */ "./src/app/showcase/components/doc-tabset/sections/tabset-with-icon-text/tabset-with-icon-text.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/tabset-with-icon-text/tabset-with-icon-text.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-tabset/sections/tabset-with-icon-text/tabset-with-icon-text.component.ts")
            },
            {
                anchor: 'manually-tab-selection',
                title: 'Manually tab selection',
                desc: 'You can select tab form your component',
                component: _sections_manually_tab_selection_manually_tab_selection_component__WEBPACK_IMPORTED_MODULE_5__["ManuallyTabSelectionComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/manually-tab-selection/manually-tab-selection.component.html */ "./src/app/showcase/components/doc-tabset/sections/manually-tab-selection/manually-tab-selection.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/manually-tab-selection/manually-tab-selection.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-tabset/sections/manually-tab-selection/manually-tab-selection.component.ts")
            },
            {
                anchor: 'tabset-select-event',
                title: 'Select event',
                desc: 'You can do something when tab is selected',
                component: _sections_tabset_select_event_tabset_select_event_component__WEBPACK_IMPORTED_MODULE_6__["TabsetSelectEventComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/tabset-select-event/tabset-select-event.component.html */ "./src/app/showcase/components/doc-tabset/sections/tabset-select-event/tabset-select-event.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/tabset-select-event/tabset-select-event.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-tabset/sections/tabset-select-event/tabset-select-event.component.ts")
            },
            {
                anchor: 'tabset-deselect-event',
                title: 'Deselect event',
                desc: 'You can do something when tab is deselected',
                component: _sections_tabset_deselect_event_tabset_deselect_event_component__WEBPACK_IMPORTED_MODULE_7__["TabsetDeselectEventComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/tabset-deselect-event/tabset-deselect-event.component.html */ "./src/app/showcase/components/doc-tabset/sections/tabset-deselect-event/tabset-deselect-event.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/tabset-deselect-event/tabset-deselect-event.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-tabset/sections/tabset-deselect-event/tabset-deselect-event.component.ts")
            }
        ];
    };
    DocTabsetComponent.prototype.setRightMenu = function () {
        var apiDocs = [{
                anchor: 'tabset-api-docs',
                title: 'API documentation',
                desc: null,
                component: null,
                markup: null,
                typescript: null
            }];
        var customRightMenu = this.tabsetSection.concat(apiDocs);
        this.rightMenuSvc.setRightMenu(customRightMenu);
    };
    DocTabsetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-doc-tabset',
            template: __webpack_require__(/*! ./doc-tabset.component.html */ "./src/app/showcase/components/doc-tabset/doc-tabset.component.html"),
            styles: [__webpack_require__(/*! ./doc-tabset.component.scss */ "./src/app/showcase/components/doc-tabset/doc-tabset.component.scss")]
        }),
        __metadata("design:paramtypes", [_showcase_right_nav_service__WEBPACK_IMPORTED_MODULE_2__["ShowcaseRightNavService"]])
    ], DocTabsetComponent);
    return DocTabsetComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-tabset/sections/basic-tabset/basic-tabset.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-tabset/sections/basic-tabset/basic-tabset.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<uii-tabset>\n  <uiiTabItem title=\"Tab 1\">\n    Tab 1 content\n  </uiiTabItem>\n  <uiiTabItem title=\"Tab 2\">\n    Tab 2 content\n  </uiiTabItem>\n  <uiiTabItem title=\"Tab 3\">\n    Tab 3 content\n  </uiiTabItem>\n  <uiiTabItem title=\"Tab 4\">\n    Tab 4 content\n  </uiiTabItem>\n</uii-tabset>\n"

/***/ }),

/***/ "./src/app/showcase/components/doc-tabset/sections/basic-tabset/basic-tabset.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-tabset/sections/basic-tabset/basic-tabset.component.ts ***!
  \************************************************************************************************/
/*! exports provided: BasicTabsetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicTabsetComponent", function() { return BasicTabsetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BasicTabsetComponent = /** @class */ (function () {
    function BasicTabsetComponent() {
    }
    BasicTabsetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-basic-tabset',
            template: __webpack_require__(/*! ./basic-tabset.component.html */ "./src/app/showcase/components/doc-tabset/sections/basic-tabset/basic-tabset.component.html")
        })
    ], BasicTabsetComponent);
    return BasicTabsetComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-tabset/sections/manually-tab-selection/manually-tab-selection.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-tabset/sections/manually-tab-selection/manually-tab-selection.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  manually-tab-selecyion works!\n</p>\n"

/***/ }),

/***/ "./src/app/showcase/components/doc-tabset/sections/manually-tab-selection/manually-tab-selection.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-tabset/sections/manually-tab-selection/manually-tab-selection.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: ManuallyTabSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManuallyTabSelectionComponent", function() { return ManuallyTabSelectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManuallyTabSelectionComponent = /** @class */ (function () {
    function ManuallyTabSelectionComponent() {
    }
    ManuallyTabSelectionComponent.prototype.ngOnInit = function () {
    };
    ManuallyTabSelectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-manually-tab-selection',
            template: __webpack_require__(/*! ./manually-tab-selection.component.html */ "./src/app/showcase/components/doc-tabset/sections/manually-tab-selection/manually-tab-selection.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ManuallyTabSelectionComponent);
    return ManuallyTabSelectionComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-tabset/sections/tabset-deselect-event/tabset-deselect-event.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-tabset/sections/tabset-deselect-event/tabset-deselect-event.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"well well-default\">Deselected tab title is {{tabTitle}}</div>\n<uii-tabset>\n  <uiiTabItem title=\"Tab 1\" (deselected)=\"onTabItemDeselect($event)\">\n    Tab 1 content\n  </uiiTabItem>\n  <uiiTabItem title=\"Tab 2\"  (deselected)=\"onTabItemDeselect($event)\">\n    Tab 2 content\n  </uiiTabItem>\n  <uiiTabItem title=\"Tab 3\"  (deselected)=\"onTabItemDeselect($event)\">\n    Tab 3 content\n  </uiiTabItem>\n  <uiiTabItem title=\"Tab 4\"  (deselected)=\"onTabItemDeselect($event)\">\n    Tab 4 content\n  </uiiTabItem>\n</uii-tabset>"

/***/ }),

/***/ "./src/app/showcase/components/doc-tabset/sections/tabset-deselect-event/tabset-deselect-event.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-tabset/sections/tabset-deselect-event/tabset-deselect-event.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: TabsetDeselectEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsetDeselectEventComponent", function() { return TabsetDeselectEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TabsetDeselectEventComponent = /** @class */ (function () {
    function TabsetDeselectEventComponent() {
    }
    TabsetDeselectEventComponent.prototype.onTabItemDeselect = function ($event) {
        this.tabTitle = $event.title;
    };
    TabsetDeselectEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-tabset-deselect-event',
            template: __webpack_require__(/*! ./tabset-deselect-event.component.html */ "./src/app/showcase/components/doc-tabset/sections/tabset-deselect-event/tabset-deselect-event.component.html")
        })
    ], TabsetDeselectEventComponent);
    return TabsetDeselectEventComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-tabset/sections/tabset-select-event/tabset-select-event.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-tabset/sections/tabset-select-event/tabset-select-event.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"well well-default\">Selected tab title is {{tabTitle}}</div>\n<uii-tabset>\n  <uiiTabItem title=\"Tab 1\" (selected)=\"onTabItemSelect($event)\">\n    Tab 1 content\n  </uiiTabItem>\n  <uiiTabItem title=\"Tab 2\"  (selected)=\"onTabItemSelect($event)\">\n    Tab 2 content\n  </uiiTabItem>\n  <uiiTabItem title=\"Tab 3\"  (selected)=\"onTabItemSelect($event)\">\n    Tab 3 content\n  </uiiTabItem>\n  <uiiTabItem title=\"Tab 4\"  (selected)=\"onTabItemSelect($event)\">\n    Tab 4 content\n  </uiiTabItem>\n</uii-tabset>"

/***/ }),

/***/ "./src/app/showcase/components/doc-tabset/sections/tabset-select-event/tabset-select-event.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-tabset/sections/tabset-select-event/tabset-select-event.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: TabsetSelectEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsetSelectEventComponent", function() { return TabsetSelectEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TabsetSelectEventComponent = /** @class */ (function () {
    function TabsetSelectEventComponent() {
    }
    TabsetSelectEventComponent.prototype.onTabItemSelect = function ($event) {
        this.tabTitle = $event.title;
    };
    TabsetSelectEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-tabset-select-event',
            template: __webpack_require__(/*! ./tabset-select-event.component.html */ "./src/app/showcase/components/doc-tabset/sections/tabset-select-event/tabset-select-event.component.html")
        })
    ], TabsetSelectEventComponent);
    return TabsetSelectEventComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-tabset/sections/tabset-with-icon-text/tabset-with-icon-text.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-tabset/sections/tabset-with-icon-text/tabset-with-icon-text.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<uii-tabset [tabMobileAttr]=\"'icon'\">\n  <uiiTabItem title=\"Tab 1\" tabIcon=\"fa fa-address-card\">\n    Tab 1 content\n  </uiiTabItem>\n  <uiiTabItem title=\"Tab 2\" tabIcon=\"fa fa-graduation-cap\">\n    Tab 2 content\n  </uiiTabItem>\n  <uiiTabItem title=\"Tab 3\" tabIcon=\"fa fa-users\">\n    Tab 3 content\n  </uiiTabItem>\n  <uiiTabItem title=\"Tab 4\" tabIcon=\"fa fa-area-chart\">\n    Tab 4 content\n  </uiiTabItem>\n</uii-tabset>"

/***/ }),

/***/ "./src/app/showcase/components/doc-tabset/sections/tabset-with-icon-text/tabset-with-icon-text.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-tabset/sections/tabset-with-icon-text/tabset-with-icon-text.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: TabsetWithIconTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsetWithIconTextComponent", function() { return TabsetWithIconTextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TabsetWithIconTextComponent = /** @class */ (function () {
    function TabsetWithIconTextComponent() {
    }
    TabsetWithIconTextComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-tabset-with-icon-text',
            template: __webpack_require__(/*! ./tabset-with-icon-text.component.html */ "./src/app/showcase/components/doc-tabset/sections/tabset-with-icon-text/tabset-with-icon-text.component.html")
        })
    ], TabsetWithIconTextComponent);
    return TabsetWithIconTextComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-tabset/sections/tabset-with-icon/tabset-with-icon.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-tabset/sections/tabset-with-icon/tabset-with-icon.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<uii-tabset [tabMobileAttr]=\"'icon'\">\n  <uiiTabItem tabIcon=\"fa fa-address-card\">\n    Tab 1 content\n  </uiiTabItem>\n  <uiiTabItem tabIcon=\"fa fa-graduation-cap\">\n      Tab 2 content\n    </uiiTabItem>\n  <uiiTabItem tabIcon=\"fa fa-users\">\n    Tab 3 content\n  </uiiTabItem>\n  <uiiTabItem tabIcon=\"fa fa-area-chart\">\n    Tab 4 content\n  </uiiTabItem>\n</uii-tabset>"

/***/ }),

/***/ "./src/app/showcase/components/doc-tabset/sections/tabset-with-icon/tabset-with-icon.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-tabset/sections/tabset-with-icon/tabset-with-icon.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: TabsetWithIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsetWithIconComponent", function() { return TabsetWithIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TabsetWithIconComponent = /** @class */ (function () {
    function TabsetWithIconComponent() {
    }
    TabsetWithIconComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-tabset-with-icon',
            template: __webpack_require__(/*! ./tabset-with-icon.component.html */ "./src/app/showcase/components/doc-tabset/sections/tabset-with-icon/tabset-with-icon.component.html")
        })
    ], TabsetWithIconComponent);
    return TabsetWithIconComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-toast/doc-toast.component.html":
/*!************************************************************************!*\
  !*** ./src/app/showcase/components/doc-toast/doc-toast.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ugw-component-header [title]=\"title\" [description]=\"description\"></ugw-component-header>\n<ugw-section [sections]=\"toastSection\" [apiDocSections]=\"apiDocSection\"></ugw-section>"

/***/ }),

/***/ "./src/app/showcase/components/doc-toast/doc-toast.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/showcase/components/doc-toast/doc-toast.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/showcase/components/doc-toast/doc-toast.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/showcase/components/doc-toast/doc-toast.component.ts ***!
  \**********************************************************************/
/*! exports provided: DocToastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocToastComponent", function() { return DocToastComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _showcase_right_nav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../showcase-right-nav.service */ "./src/app/showcase/showcase-right-nav.service.ts");
/* harmony import */ var _sections_basic_toast_basic_toast_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/basic-toast/basic-toast.component */ "./src/app/showcase/components/doc-toast/sections/basic-toast/basic-toast.component.ts");
/* harmony import */ var _sections_blank_toast_blank_toast_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/blank-toast/blank-toast.component */ "./src/app/showcase/components/doc-toast/sections/blank-toast/blank-toast.component.ts");
/* harmony import */ var _sections_timeout_toast_timeout_toast_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/timeout-toast/timeout-toast.component */ "./src/app/showcase/components/doc-toast/sections/timeout-toast/timeout-toast.component.ts");
/* harmony import */ var _sections_pause_onclick_toast_pause_onclick_toast_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/pause-onclick-toast/pause-onclick-toast.component */ "./src/app/showcase/components/doc-toast/sections/pause-onclick-toast/pause-onclick-toast.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DocToastComponent = /** @class */ (function () {
    function DocToastComponent(rightMenuSvc) {
        this.rightMenuSvc = rightMenuSvc;
        this.initializeMetaData();
        this.initializeApiDocumentation();
        this.initializeSection();
        this.setRightMenu();
    }
    DocToastComponent.prototype.initializeApiDocumentation = function () {
        this.apiDocSection = {
            title: this.title.toLowerCase(),
            selector: 'pil-toast',
            properties: [
                {
                    name: 'description',
                    type: 'string',
                    default: '',
                    description: 'Description of a displayed toast.'
                },
                {
                    name: 'title (optional)',
                    type: 'string',
                    default: '',
                    description: 'Title of a displayed toast.'
                },
                {
                    name: 'config (optional)',
                    type: '{timeOut: number, removeOnClick: boolean}',
                    default: 'timeOut',
                    description: "Configuration for toast's time out and remove on click."
                }
            ],
            events: [
                {
                    name: 'success',
                    type: '(description: string, title?: string, config?: {timeOut: number, removeOnClick: boolean}, callback?: () => void) => void',
                    description: 'Event triggered when button clicked.'
                },
                {
                    name: 'warning',
                    type: '(description: string, title?: string, config?: {timeOut: number, removeOnClick: boolean}, callback?: () => void) => void',
                    description: 'Event triggered when button clicked.'
                },
                {
                    name: 'error',
                    type: '(description: string, title?: string, config?: {timeOut: number, removeOnClick: boolean}, callback?: () => void) => void',
                    description: 'Event triggered when button clicked.'
                },
                {
                    name: 'info',
                    type: '(description: string, title?: string, config?: {timeOut: number, removeOnClick: boolean}, callback?: () => void) => void',
                    description: 'Event triggered when button clicked.'
                }
            ]
        };
    };
    DocToastComponent.prototype.initializeMetaData = function () {
        this.title = 'Toast';
        this.description = 'Toast is a component we can use to push notifications that will be displayed at the top right corner of our screen.';
    };
    DocToastComponent.prototype.initializeSection = function () {
        this.toastSection = [
            {
                anchor: 'usage',
                title: 'Usage',
                desc: 'We need to dynamically add toast to our app component by adding ViewContainerRef as an argument to setToastRootViewContainerRef and invoke addToastDynamicComponent from ToastService afterwards inside of constructor in our app component.',
                component: _sections_blank_toast_blank_toast_component__WEBPACK_IMPORTED_MODULE_3__["BlankToastComponent"],
                typescript: __webpack_require__(/*! !raw-loader!../../../app.component.ts */ "./node_modules/raw-loader/index.js!./src/app/app.component.ts")
            },
            {
                anchor: 'basic',
                title: 'Basic',
                desc: 'In order to use our toast properly, we need to invoke one of functions provided within ToastService such as success, warning, error, info.',
                component: _sections_basic_toast_basic_toast_component__WEBPACK_IMPORTED_MODULE_2__["BasicToastComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/basic-toast/basic-toast.component.html */ "./src/app/showcase/components/doc-toast/sections/basic-toast/basic-toast.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/basic-toast/basic-toast.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-toast/sections/basic-toast/basic-toast.component.ts")
            },
            {
                anchor: 'timeout',
                title: 'Timeout',
                desc: 'We could simply set a timeout for a toast by adding timeOut from config and set the value in terms of number.',
                component: _sections_timeout_toast_timeout_toast_component__WEBPACK_IMPORTED_MODULE_4__["TimeoutToastComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/timeout-toast/timeout-toast.component.html */ "./src/app/showcase/components/doc-toast/sections/timeout-toast/timeout-toast.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/timeout-toast/timeout-toast.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-toast/sections/timeout-toast/timeout-toast.component.ts")
            },
            {
                anchor: 'removeOnClick',
                title: 'Remove Toast On Click',
                desc: 'We could simply prevent a toast for being removed by adding removeOnClick from config and set the value to true.',
                component: _sections_pause_onclick_toast_pause_onclick_toast_component__WEBPACK_IMPORTED_MODULE_5__["PauseOnclickToastComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/pause-onclick-toast/pause-onclick-toast.component.html */ "./src/app/showcase/components/doc-toast/sections/pause-onclick-toast/pause-onclick-toast.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/pause-onclick-toast/pause-onclick-toast.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-toast/sections/pause-onclick-toast/pause-onclick-toast.component.ts")
            }
        ];
    };
    DocToastComponent.prototype.setRightMenu = function () {
        var apiDocs = [{
                anchor: 'toast-api-docs',
                title: 'API documentation',
                desc: null,
                component: null,
                markup: null,
                typescript: null
            }];
        var customRightMenu = this.toastSection.concat(apiDocs);
        this.rightMenuSvc.setRightMenu(customRightMenu);
    };
    DocToastComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-doc-toast',
            template: __webpack_require__(/*! ./doc-toast.component.html */ "./src/app/showcase/components/doc-toast/doc-toast.component.html"),
            styles: [__webpack_require__(/*! ./doc-toast.component.scss */ "./src/app/showcase/components/doc-toast/doc-toast.component.scss")]
        }),
        __metadata("design:paramtypes", [_showcase_right_nav_service__WEBPACK_IMPORTED_MODULE_1__["ShowcaseRightNavService"]])
    ], DocToastComponent);
    return DocToastComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-toast/sections/basic-toast/basic-toast.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-toast/sections/basic-toast/basic-toast.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-bottom: 10px;\">\n    <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"pushSuccessToast()\"><strong>success</strong></button>\n    </div>\n    <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n        <button type=\"button\" class=\"btn btn-warning\" (click)=\"pushWarningToast()\"><strong>warning</strong></button>\n    </div>\n</div>\n<div class=\"row\" style=\"margin-bottom: 10px;\">\n    <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"pushErrorToast()\"><strong>error</strong></button>\n    </div>\n    <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n        <button type=\"button\" class=\"btn btn-info\" (click)=\"pushInfoToast()\"><strong>info</strong></button>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/showcase/components/doc-toast/sections/basic-toast/basic-toast.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-toast/sections/basic-toast/basic-toast.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  width: 100%;\n}"

/***/ }),

/***/ "./src/app/showcase/components/doc-toast/sections/basic-toast/basic-toast.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-toast/sections/basic-toast/basic-toast.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: BasicToastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicToastComponent", function() { return BasicToastComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var pilar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pilar */ "./dist/uiigateway/pilar/fesm5/pilar.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BasicToastComponent = /** @class */ (function () {
    function BasicToastComponent(toastSvc) {
        this.toastSvc = toastSvc;
    }
    BasicToastComponent.prototype.pushSuccessToast = function () {
        this.toastSvc.success('wohoo, this toast is working.', 'success', {
            timeOut: 5000
        });
    };
    BasicToastComponent.prototype.pushWarningToast = function () {
        this.toastSvc.warning('wohoo, this toast is working.', 'warning', {
            timeOut: 5000
        });
    };
    BasicToastComponent.prototype.pushErrorToast = function () {
        this.toastSvc.error('wohoo, this toast is working.', 'error', {
            timeOut: 5000
        });
    };
    BasicToastComponent.prototype.pushInfoToast = function () {
        this.toastSvc.info('wohoo, this toast is working.', 'info', {
            timeOut: 5000
        });
    };
    BasicToastComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-basic-toast',
            template: __webpack_require__(/*! ./basic-toast.component.html */ "./src/app/showcase/components/doc-toast/sections/basic-toast/basic-toast.component.html"),
            styles: [__webpack_require__(/*! ./basic-toast.component.scss */ "./src/app/showcase/components/doc-toast/sections/basic-toast/basic-toast.component.scss")]
        }),
        __metadata("design:paramtypes", [pilar__WEBPACK_IMPORTED_MODULE_1__["ToastService"]])
    ], BasicToastComponent);
    return BasicToastComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-toast/sections/blank-toast/blank-toast.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-toast/sections/blank-toast/blank-toast.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/showcase/components/doc-toast/sections/blank-toast/blank-toast.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-toast/sections/blank-toast/blank-toast.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/showcase/components/doc-toast/sections/blank-toast/blank-toast.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-toast/sections/blank-toast/blank-toast.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: BlankToastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankToastComponent", function() { return BlankToastComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlankToastComponent = /** @class */ (function () {
    function BlankToastComponent() {
    }
    BlankToastComponent.prototype.ngOnInit = function () {
    };
    BlankToastComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-blank-toast',
            template: __webpack_require__(/*! ./blank-toast.component.html */ "./src/app/showcase/components/doc-toast/sections/blank-toast/blank-toast.component.html"),
            styles: [__webpack_require__(/*! ./blank-toast.component.scss */ "./src/app/showcase/components/doc-toast/sections/blank-toast/blank-toast.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BlankToastComponent);
    return BlankToastComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-toast/sections/pause-onclick-toast/pause-onclick-toast.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-toast/sections/pause-onclick-toast/pause-onclick-toast.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>A toast would remains shown if it's clicked and removed when it's clicked again!</p>\n<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"pushInfoToast()\">Click Me!</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/showcase/components/doc-toast/sections/pause-onclick-toast/pause-onclick-toast.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-toast/sections/pause-onclick-toast/pause-onclick-toast.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  margin-bottom: 2rem;\n}\n.row button {\n  width: 100%;\n}"

/***/ }),

/***/ "./src/app/showcase/components/doc-toast/sections/pause-onclick-toast/pause-onclick-toast.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-toast/sections/pause-onclick-toast/pause-onclick-toast.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: PauseOnclickToastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PauseOnclickToastComponent", function() { return PauseOnclickToastComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var pilar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pilar */ "./dist/uiigateway/pilar/fesm5/pilar.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PauseOnclickToastComponent = /** @class */ (function () {
    function PauseOnclickToastComponent(toastSvc) {
        this.toastSvc = toastSvc;
        this.timeout = 5000;
    }
    PauseOnclickToastComponent.prototype.ngOnInit = function () {
    };
    PauseOnclickToastComponent.prototype.pushInfoToast = function () {
        this.toastSvc.info('click this toast to prevent being removed!', 'info', {
            timeOut: this.timeout,
            removeOnClick: true
        });
    };
    PauseOnclickToastComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-pause-onclick-toast',
            template: __webpack_require__(/*! ./pause-onclick-toast.component.html */ "./src/app/showcase/components/doc-toast/sections/pause-onclick-toast/pause-onclick-toast.component.html"),
            styles: [__webpack_require__(/*! ./pause-onclick-toast.component.scss */ "./src/app/showcase/components/doc-toast/sections/pause-onclick-toast/pause-onclick-toast.component.scss")]
        }),
        __metadata("design:paramtypes", [pilar__WEBPACK_IMPORTED_MODULE_1__["ToastService"]])
    ], PauseOnclickToastComponent);
    return PauseOnclickToastComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-toast/sections/timeout-toast/timeout-toast.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-toast/sections/timeout-toast/timeout-toast.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Set desired timeout for the toast and <strong>click me!</strong> afterwards.</p>\n<div class=\"row\">\n  <div class=\"col-xs-3 col-sm-3 col-md-3 col-lg-3\">\n    <div class=\"input-group\">\n      <input type=\"number\" class=\"form-control\" [(ngModel)]=\"timeOut\" name=\"timeOut\"/>\n      <div class=\"input-group-addon\">ms</div>\n    </div>\n  </div>\n  <div class=\"col-xs-9 col-sm-9 col-md-9 col-lg-9\">\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"pushInfoToast()\">click me!</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/doc-toast/sections/timeout-toast/timeout-toast.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-toast/sections/timeout-toast/timeout-toast.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  margin-bottom: 2rem;\n}\n.row button {\n  width: 100%;\n}"

/***/ }),

/***/ "./src/app/showcase/components/doc-toast/sections/timeout-toast/timeout-toast.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-toast/sections/timeout-toast/timeout-toast.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: TimeoutToastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutToastComponent", function() { return TimeoutToastComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var pilar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pilar */ "./dist/uiigateway/pilar/fesm5/pilar.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimeoutToastComponent = /** @class */ (function () {
    function TimeoutToastComponent(toastSvc) {
        this.toastSvc = toastSvc;
    }
    TimeoutToastComponent.prototype.ngOnInit = function () {
    };
    TimeoutToastComponent.prototype.pushInfoToast = function () {
        this.toastSvc.info('wohooo, this toast is working.', 'info', {
            timeOut: this.timeOut
        });
    };
    TimeoutToastComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-timeout-toast',
            template: __webpack_require__(/*! ./timeout-toast.component.html */ "./src/app/showcase/components/doc-toast/sections/timeout-toast/timeout-toast.component.html"),
            styles: [__webpack_require__(/*! ./timeout-toast.component.scss */ "./src/app/showcase/components/doc-toast/sections/timeout-toast/timeout-toast.component.scss")]
        }),
        __metadata("design:paramtypes", [pilar__WEBPACK_IMPORTED_MODULE_1__["ToastService"]])
    ], TimeoutToastComponent);
    return TimeoutToastComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-tooltip/doc-tooltip.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/showcase/components/doc-tooltip/doc-tooltip.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ugw-component-header [title]=\"title\" [description]=\"description\"></ugw-component-header>\n<ugw-section [sections]=\"tooltipSection\" [apiDocSections]=\"apiDocSection\"></ugw-section>\n"

/***/ }),

/***/ "./src/app/showcase/components/doc-tooltip/doc-tooltip.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/showcase/components/doc-tooltip/doc-tooltip.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/showcase/components/doc-tooltip/doc-tooltip.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/showcase/components/doc-tooltip/doc-tooltip.component.ts ***!
  \**************************************************************************/
/*! exports provided: DocTooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocTooltipComponent", function() { return DocTooltipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _showcase_right_nav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../showcase-right-nav.service */ "./src/app/showcase/showcase-right-nav.service.ts");
/* harmony import */ var _sections_basic_tooltip_basic_tooltip_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/basic-tooltip/basic-tooltip.component */ "./src/app/showcase/components/doc-tooltip/sections/basic-tooltip/basic-tooltip.component.ts");
/* harmony import */ var _sections_placement_tooltip_placement_tooltip_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/placement-tooltip/placement-tooltip.component */ "./src/app/showcase/components/doc-tooltip/sections/placement-tooltip/placement-tooltip.component.ts");
/* harmony import */ var _sections_paragraph_tooltip_paragraph_tooltip_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/paragraph-tooltip/paragraph-tooltip.component */ "./src/app/showcase/components/doc-tooltip/sections/paragraph-tooltip/paragraph-tooltip.component.ts");
/* harmony import */ var _sections_disabled_tooltip_disabled_tooltip_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/disabled-tooltip/disabled-tooltip.component */ "./src/app/showcase/components/doc-tooltip/sections/disabled-tooltip/disabled-tooltip.component.ts");
/* harmony import */ var _sections_dynamic_html_tooltip_dynamic_html_tooltip_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sections/dynamic-html-tooltip/dynamic-html-tooltip.component */ "./src/app/showcase/components/doc-tooltip/sections/dynamic-html-tooltip/dynamic-html-tooltip.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DocTooltipComponent = /** @class */ (function () {
    function DocTooltipComponent(rightMenuSvc) {
        this.rightMenuSvc = rightMenuSvc;
    }
    DocTooltipComponent.prototype.ngOnInit = function () {
        this.initializeMetaData();
        this.initializeApiDocumentation();
        this.initializeSection();
        this.setRightMenu();
    };
    DocTooltipComponent.prototype.initializeMetaData = function () {
        this.title = 'Tooltip';
        this.description = 'Use these shorthand utilities for quickly displaying your tooltip message. You can set the placement on bottom, left, right and top';
    };
    DocTooltipComponent.prototype.initializeApiDocumentation = function () {
        this.apiDocSection = {
            title: this.title.toLowerCase(),
            selector: 'pil-tooltip',
            properties: [
                {
                    name: 'uiiTooltip',
                    type: 'string',
                    default: '',
                    description: 'Set your tooltip message text here.'
                },
                {
                    name: 'tooltipPlacement',
                    type: 'string',
                    default: 'Top',
                    description: '"top|bottom|left|right" Indicates where the tooltip should be placed.'
                },
                {
                    name: '[tooltipDisabled]',
                    type: 'boolean',
                    default: 'False',
                    description: '"true|false" Indicates if tooltip should be disabled. If tooltip is disabled then it will not be shown'
                }
            ],
            events: [
                {
                    name: '[uiiTooltip]',
                    type: 'EventEmitter<>',
                    default: 'none',
                    description: 'To trigger your html view using tag <tooltip-content></tooltip-content>. In that tag, make sure you set #contentName. Look at the example dynamic html in tooltip'
                }
            ]
        };
    };
    DocTooltipComponent.prototype.initializeSection = function () {
        this.tooltipSection = [
            {
                anchor: 'basic',
                title: 'Basic',
                desc: 'This is a basic tooltip implementation',
                component: _sections_basic_tooltip_basic_tooltip_component__WEBPACK_IMPORTED_MODULE_2__["BasicTooltipComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/basic-tooltip/basic-tooltip.component.html */ "./src/app/showcase/components/doc-tooltip/sections/basic-tooltip/basic-tooltip.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/basic-tooltip/basic-tooltip.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-tooltip/sections/basic-tooltip/basic-tooltip.component.ts")
            },
            {
                anchor: 'placement-tooltip',
                title: 'Placement Tooltip',
                desc: 'This is where you can set the placement of tooltip implementation',
                component: _sections_placement_tooltip_placement_tooltip_component__WEBPACK_IMPORTED_MODULE_3__["PlacementTooltipComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/placement-tooltip/placement-tooltip.component.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-tooltip/sections/placement-tooltip/placement-tooltip.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/placement-tooltip/placement-tooltip.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-tooltip/sections/placement-tooltip/placement-tooltip.component.ts")
            },
            {
                anchor: 'paragraph-tooltip',
                title: 'Tooltips in Paragraph',
                desc: 'You can use many tooltips in any paragraph. To differ set the text which having tooltip, you can use <span></span> tags each.',
                component: _sections_paragraph_tooltip_paragraph_tooltip_component__WEBPACK_IMPORTED_MODULE_4__["ParagraphTooltipComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/paragraph-tooltip/paragraph-tooltip.component.html */ "./src/app/showcase/components/doc-tooltip/sections/paragraph-tooltip/paragraph-tooltip.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/paragraph-tooltip/paragraph-tooltip.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-tooltip/sections/paragraph-tooltip/paragraph-tooltip.component.ts")
            },
            {
                anchor: 'dynamic-html-tooltip',
                title: 'Dynamic html content in Tooltip',
                desc: 'Customize your own message in tooltip with a html content.',
                component: _sections_dynamic_html_tooltip_dynamic_html_tooltip_component__WEBPACK_IMPORTED_MODULE_6__["DynamicHtmlTooltipComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/dynamic-html-tooltip/dynamic-html-tooltip.component.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-tooltip/sections/dynamic-html-tooltip/dynamic-html-tooltip.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/dynamic-html-tooltip/dynamic-html-tooltip.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-tooltip/sections/dynamic-html-tooltip/dynamic-html-tooltip.component.ts")
            },
            {
                anchor: 'disabled-tooltip',
                title: 'Disabled tooltip',
                desc: 'If you feel like to disable your tooltip',
                component: _sections_disabled_tooltip_disabled_tooltip_component__WEBPACK_IMPORTED_MODULE_5__["DisabledTooltipComponent"],
                markup: __webpack_require__(/*! !raw-loader!./sections/disabled-tooltip/disabled-tooltip.component.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-tooltip/sections/disabled-tooltip/disabled-tooltip.component.html"),
                typescript: __webpack_require__(/*! !raw-loader!./sections/disabled-tooltip/disabled-tooltip.component.ts */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-tooltip/sections/disabled-tooltip/disabled-tooltip.component.ts")
            }
        ];
    };
    DocTooltipComponent.prototype.setRightMenu = function () {
        var apiDocs = [{
                anchor: 'tooltip-api-docs',
                title: 'API documentation',
                desc: null,
                component: null,
                markup: null,
                typescript: null
            }];
        var customRightMenu = this.tooltipSection.concat(apiDocs);
        this.rightMenuSvc.setRightMenu(customRightMenu);
    };
    DocTooltipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-doc-tooltip',
            template: __webpack_require__(/*! ./doc-tooltip.component.html */ "./src/app/showcase/components/doc-tooltip/doc-tooltip.component.html"),
            styles: [__webpack_require__(/*! ./doc-tooltip.component.scss */ "./src/app/showcase/components/doc-tooltip/doc-tooltip.component.scss")]
        }),
        __metadata("design:paramtypes", [_showcase_right_nav_service__WEBPACK_IMPORTED_MODULE_1__["ShowcaseRightNavService"]])
    ], DocTooltipComponent);
    return DocTooltipComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-tooltip/sections/basic-tooltip/basic-tooltip.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-tooltip/sections/basic-tooltip/basic-tooltip.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary\" uiiTooltip=\"Hi! I am default tooltip\">Tooltip default</button>\n"

/***/ }),

/***/ "./src/app/showcase/components/doc-tooltip/sections/basic-tooltip/basic-tooltip.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-tooltip/sections/basic-tooltip/basic-tooltip.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/showcase/components/doc-tooltip/sections/basic-tooltip/basic-tooltip.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-tooltip/sections/basic-tooltip/basic-tooltip.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: BasicTooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicTooltipComponent", function() { return BasicTooltipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BasicTooltipComponent = /** @class */ (function () {
    function BasicTooltipComponent() {
    }
    BasicTooltipComponent.prototype.ngOnInit = function () {
    };
    BasicTooltipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-basic-tooltip',
            template: __webpack_require__(/*! ./basic-tooltip.component.html */ "./src/app/showcase/components/doc-tooltip/sections/basic-tooltip/basic-tooltip.component.html"),
            styles: [__webpack_require__(/*! ./basic-tooltip.component.scss */ "./src/app/showcase/components/doc-tooltip/sections/basic-tooltip/basic-tooltip.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicTooltipComponent);
    return BasicTooltipComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-tooltip/sections/disabled-tooltip/disabled-tooltip.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-tooltip/sections/disabled-tooltip/disabled-tooltip.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/showcase/components/doc-tooltip/sections/disabled-tooltip/disabled-tooltip.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-tooltip/sections/disabled-tooltip/disabled-tooltip.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: DisabledTooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisabledTooltipComponent", function() { return DisabledTooltipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DisabledTooltipComponent = /** @class */ (function () {
    function DisabledTooltipComponent() {
    }
    DisabledTooltipComponent.prototype.ngOnInit = function () {
    };
    DisabledTooltipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-disabled-tooltip',
            template: __webpack_require__(/*! ./disabled-tooltip.component.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-tooltip/sections/disabled-tooltip/disabled-tooltip.component.html"),
            styles: [__webpack_require__(/*! ./disabled-tooltip.component.scss */ "./src/app/showcase/components/doc-tooltip/sections/disabled-tooltip/disabled-tooltip.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DisabledTooltipComponent);
    return DisabledTooltipComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-tooltip/sections/dynamic-html-tooltip/dynamic-html-tooltip.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-tooltip/sections/dynamic-html-tooltip/dynamic-html-tooltip.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/showcase/components/doc-tooltip/sections/dynamic-html-tooltip/dynamic-html-tooltip.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-tooltip/sections/dynamic-html-tooltip/dynamic-html-tooltip.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: DynamicHtmlTooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicHtmlTooltipComponent", function() { return DynamicHtmlTooltipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DynamicHtmlTooltipComponent = /** @class */ (function () {
    function DynamicHtmlTooltipComponent() {
    }
    DynamicHtmlTooltipComponent.prototype.ngOnInit = function () {
    };
    DynamicHtmlTooltipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-dynamic-html-tooltip',
            template: __webpack_require__(/*! ./dynamic-html-tooltip.component.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-tooltip/sections/dynamic-html-tooltip/dynamic-html-tooltip.component.html"),
            styles: [__webpack_require__(/*! ./dynamic-html-tooltip.component.scss */ "./src/app/showcase/components/doc-tooltip/sections/dynamic-html-tooltip/dynamic-html-tooltip.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DynamicHtmlTooltipComponent);
    return DynamicHtmlTooltipComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-tooltip/sections/paragraph-tooltip/paragraph-tooltip.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-tooltip/sections/paragraph-tooltip/paragraph-tooltip.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-body\">\n    <p class=\"text-justify\">\n      It is a long established <span uiiTooltip=\"Hello fact!\"><b>fact</b></span> that a reader will be distracted by the readable content of a page when looking at its layout.\n      The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.\n      <br>\n      <span uiiTooltip=\"many, but not all\" tooltipPlacement=\"top\"><b>Many desktop</b></span> publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.\n      <span uiiTooltip=\"various, but not all\" tooltipPlacement=\"left\"><b>Various versions</b></span> have evolved over the years, sometimes by accident, <span uiiTooltip=\"another hint\" tooltipPlacement=\"right\"><b>sometimes on purpose</b></span> (injected humour and the like)\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/showcase/components/doc-tooltip/sections/paragraph-tooltip/paragraph-tooltip.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-tooltip/sections/paragraph-tooltip/paragraph-tooltip.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/showcase/components/doc-tooltip/sections/paragraph-tooltip/paragraph-tooltip.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-tooltip/sections/paragraph-tooltip/paragraph-tooltip.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ParagraphTooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParagraphTooltipComponent", function() { return ParagraphTooltipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParagraphTooltipComponent = /** @class */ (function () {
    function ParagraphTooltipComponent() {
    }
    ParagraphTooltipComponent.prototype.ngOnInit = function () {
    };
    ParagraphTooltipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-paragraph-tooltip',
            template: __webpack_require__(/*! ./paragraph-tooltip.component.html */ "./src/app/showcase/components/doc-tooltip/sections/paragraph-tooltip/paragraph-tooltip.component.html"),
            styles: [__webpack_require__(/*! ./paragraph-tooltip.component.scss */ "./src/app/showcase/components/doc-tooltip/sections/paragraph-tooltip/paragraph-tooltip.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ParagraphTooltipComponent);
    return ParagraphTooltipComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/doc-tooltip/sections/placement-tooltip/placement-tooltip.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-tooltip/sections/placement-tooltip/placement-tooltip.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/showcase/components/doc-tooltip/sections/placement-tooltip/placement-tooltip.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/showcase/components/doc-tooltip/sections/placement-tooltip/placement-tooltip.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: PlacementTooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacementTooltipComponent", function() { return PlacementTooltipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlacementTooltipComponent = /** @class */ (function () {
    function PlacementTooltipComponent() {
    }
    PlacementTooltipComponent.prototype.ngOnInit = function () {
    };
    PlacementTooltipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-placement-tooltip',
            template: __webpack_require__(/*! ./placement-tooltip.component.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/components/doc-tooltip/sections/placement-tooltip/placement-tooltip.component.html"),
            styles: [__webpack_require__(/*! ./placement-tooltip.component.scss */ "./src/app/showcase/components/doc-tooltip/sections/placement-tooltip/placement-tooltip.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PlacementTooltipComponent);
    return PlacementTooltipComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/get-started/get-started.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/showcase/components/get-started/get-started.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p style=\"padding: 20px\">Heyy you, yuk ikut berkontribusi di sini dan dapatkan hadiah kaos bagi yang mau beli.</p>"

/***/ }),

/***/ "./src/app/showcase/components/get-started/get-started.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/showcase/components/get-started/get-started.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/showcase/components/get-started/get-started.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/showcase/components/get-started/get-started.component.ts ***!
  \**************************************************************************/
/*! exports provided: GetStartedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStartedComponent", function() { return GetStartedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _showcase_right_nav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../showcase-right-nav.service */ "./src/app/showcase/showcase-right-nav.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetStartedComponent = /** @class */ (function () {
    function GetStartedComponent(rightMenuSvc) {
        this.rightMenuSvc = rightMenuSvc;
    }
    GetStartedComponent.prototype.ngOnInit = function () {
        this.rightMenuSvc.setRightMenu([]);
    };
    GetStartedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-get-started',
            template: __webpack_require__(/*! ./get-started.component.html */ "./src/app/showcase/components/get-started/get-started.component.html"),
            styles: [__webpack_require__(/*! ./get-started.component.scss */ "./src/app/showcase/components/get-started/get-started.component.scss")]
        }),
        __metadata("design:paramtypes", [_showcase_right_nav_service__WEBPACK_IMPORTED_MODULE_1__["ShowcaseRightNavService"]])
    ], GetStartedComponent);
    return GetStartedComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/installation/installation.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/showcase/components/installation/installation.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <h3>Installation</h3>\n  <p>Install pillar form <span class=\"text-lang\">verdaccio</span> registry with <span class=\"text-lang\">npm</span></p>\n  <pre class=\"pre-pilar\"><code [highlight]=\"'npm install pilar --registry https://npm.uii.ac.id'\"></code></pre>\n  <h3>Setup</h3>\n  <h4 class=\"section-title\">Import module</h4>\n  <p>Import module in your <span class=\"text-lang\">ngModule</span></p>\n  <pre class=\"pre-pilar\"><code [highlight]=\"import\"></code></pre>\n  <h4 class=\"section-title\">Applying style</h4>\n  <p>Pilar has it's own style, so you need to configure the style in your <span class=\"text-lang\">angular.json</span> file</p>\n  <pre class=\"pre-pilar\"><code [highlight]=\"useStyle\"></code></pre>\n</section>\n"

/***/ }),

/***/ "./src/app/showcase/components/installation/installation.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/showcase/components/installation/installation.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/showcase/components/installation/installation.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/showcase/components/installation/installation.component.ts ***!
  \****************************************************************************/
/*! exports provided: InstallationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallationComponent", function() { return InstallationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _showcase_right_nav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../showcase-right-nav.service */ "./src/app/showcase/showcase-right-nav.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InstallationComponent = /** @class */ (function () {
    function InstallationComponent(rightMenuSvc) {
        this.rightMenuSvc = rightMenuSvc;
        this.installation = 'npm install pilar --registry https://npm.uii.ac.id';
        this.import = "import { PilarModule } from 'pilar';\n  @NgModule({\n      imports: [\n          PilarModule.forRoot()\n      ],\n  });";
        this.useStyle = "\"styles\": [\n    \"./node_modules/pilar/assets/stylesheets/styles.scss\"\n  ],";
    }
    InstallationComponent.prototype.ngOnInit = function () {
        this.rightMenuSvc.setRightMenu([]);
    };
    InstallationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-installation',
            template: __webpack_require__(/*! ./installation.component.html */ "./src/app/showcase/components/installation/installation.component.html"),
            styles: [__webpack_require__(/*! ./installation.component.scss */ "./src/app/showcase/components/installation/installation.component.scss")]
        }),
        __metadata("design:paramtypes", [_showcase_right_nav_service__WEBPACK_IMPORTED_MODULE_1__["ShowcaseRightNavService"]])
    ], InstallationComponent);
    return InstallationComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/under-development/under-development.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/showcase/components/under-development/under-development.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"under-development-container\">\n  <p>COMING SOON</p>\n  <span>This component is under construction, we are working hard on this component to give you the best experince.</span>\n</div>\n"

/***/ }),

/***/ "./src/app/showcase/components/under-development/under-development.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/showcase/components/under-development/under-development.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".under-development-container {\n  width: 400px;\n  text-align: center;\n  margin: 120px auto 0 auto;\n  max-width: 100%;\n  padding: 0 20px;\n  height: 100%;\n}\n.under-development-container p {\n  font-size: 28px;\n}"

/***/ }),

/***/ "./src/app/showcase/components/under-development/under-development.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/showcase/components/under-development/under-development.component.ts ***!
  \**************************************************************************************/
/*! exports provided: UnderDevelopmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnderDevelopmentComponent", function() { return UnderDevelopmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _showcase_right_nav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../showcase-right-nav.service */ "./src/app/showcase/showcase-right-nav.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnderDevelopmentComponent = /** @class */ (function () {
    function UnderDevelopmentComponent(rightMenuSvc) {
        this.rightMenuSvc = rightMenuSvc;
    }
    UnderDevelopmentComponent.prototype.ngOnInit = function () {
        this.rightMenuSvc.setRightMenu([]);
    };
    UnderDevelopmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-under-development',
            template: __webpack_require__(/*! ./under-development.component.html */ "./src/app/showcase/components/under-development/under-development.component.html"),
            styles: [__webpack_require__(/*! ./under-development.component.scss */ "./src/app/showcase/components/under-development/under-development.component.scss")]
        }),
        __metadata("design:paramtypes", [_showcase_right_nav_service__WEBPACK_IMPORTED_MODULE_1__["ShowcaseRightNavService"]])
    ], UnderDevelopmentComponent);
    return UnderDevelopmentComponent;
}());



/***/ }),

/***/ "./src/app/showcase/element-ref.service.ts":
/*!*************************************************!*\
  !*** ./src/app/showcase/element-ref.service.ts ***!
  \*************************************************/
/*! exports provided: ElementRefService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementRefService", function() { return ElementRefService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ElementRefService = /** @class */ (function () {
    function ElementRefService() {
        this.sectionElRef = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.rightNavElRef = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
    }
    ElementRefService.prototype.setSectionTitleCollectionRef = function (sectionElRef) {
        this.sectionElRef.next(sectionElRef);
    };
    ElementRefService.prototype.getSectionTitleCollectionRef = function () {
        return this.sectionElRef.asObservable();
    };
    ElementRefService.prototype.setRightNavCollectionRef = function (rightNavElRef) {
        this.rightNavElRef.next(rightNavElRef);
    };
    ElementRefService.prototype.getRightNavCollectionRef = function () {
        return this.rightNavElRef.asObservable();
    };
    ElementRefService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ElementRefService);
    return ElementRefService;
}());



/***/ }),

/***/ "./src/app/showcase/showcase-menu.ts":
/*!*******************************************!*\
  !*** ./src/app/showcase/showcase-menu.ts ***!
  \*******************************************/
/*! exports provided: MENU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU", function() { return MENU; });
var MENU = [
    {
        label: 'Installation',
        active: false,
        url: 'installation'
    },
    {
        label: 'Accordion',
        active: false,
        url: 'accordion'
    },
    {
        label: 'Button',
        active: false,
        url: 'button'
    },
    {
        label: 'Chips',
        active: false,
        url: 'chips'
    },
    {
        label: 'Date & time picker',
        active: false,
        url: 'datetimepicker'
    },
    {
        label: 'Dropdown',
        active: false,
        url: 'dropdown'
    },
    {
        label: 'File upload',
        active: false,
        url: 'file-upload'
    },
    {
        label: 'Form wizard',
        active: false,
        url: 'form-wizard'
    },
    {
        label: 'Image upload',
        active: false,
        url: 'image-upload'
    },
    {
        label: 'Infobox',
        active: false,
        url: 'infobox'
    },
    {
        label: 'Information',
        active: false,
        url: 'information'
    },
    {
        label: 'Progress bar',
        active: false,
        url: 'progress-bar'
    },
    {
        label: 'Modal',
        active: false,
        url: 'modal'
    },
    {
        label: 'Pagination',
        active: false,
        url: 'pagination'
    },
    {
        label: 'Switch',
        active: false,
        url: 'switch'
    },
    {
        label: 'Tabset',
        active: false,
        url: 'tabset'
    },
    {
        label: 'Table',
        active: false,
        url: 'table'
    },
    {
        label: 'Toast',
        active: false,
        url: 'toast'
    },
    {
        label: 'Tooltip',
        active: false,
        url: 'tooltip'
    },
    {
        label: 'Text Editor',
        active: false,
        url: 'texteditor'
    }
];


/***/ }),

/***/ "./src/app/showcase/showcase-right-nav.service.ts":
/*!********************************************************!*\
  !*** ./src/app/showcase/showcase-right-nav.service.ts ***!
  \********************************************************/
/*! exports provided: ShowcaseRightNavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseRightNavService", function() { return ShowcaseRightNavService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowcaseRightNavService = /** @class */ (function () {
    function ShowcaseRightNavService() {
        this.rightMenu = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
    }
    ShowcaseRightNavService.prototype.setRightMenu = function (menu) {
        this.rightMenu.next(menu);
    };
    ShowcaseRightNavService.prototype.getRightMenu = function () {
        return this.rightMenu.asObservable();
    };
    ShowcaseRightNavService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ShowcaseRightNavService);
    return ShowcaseRightNavService;
}());



/***/ }),

/***/ "./src/app/showcase/showcase.component.html":
/*!**************************************************!*\
  !*** ./src/app/showcase/showcase.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"demo-header\">\n  <ugw-demo-header [(showSidebar)]=\"showRightNav\"></ugw-demo-header>\n</div>\n<div class=\"demo-container\" [class.scroled]=\"isTop\">\n  <div\n    class=\"demo-sidebar-wrapper\"\n    [class.sidebar-open]=\"showRightNav || !clientWidthIsMobile\">\n      <ugw-demo-sidebar\n        [menus]=\"menus\"\n        [showSideBar]=\"showRightNav\"\n        (menuItemClick)=\"onMenuItemClick()\">\n      </ugw-demo-sidebar>\n  </div>\n  <div\n    class=\"demo-main-wrapper\"\n    [class.hide-main]=\"showRightNav || !clientWidthIsMobile\">\n      <router-outlet></router-outlet>\n  </div>\n  <div class=\"right-sidebar\">\n    <ugw-right-sidebar></ugw-right-sidebar>\n  </div>\n  <div class=\"demo-footer\">\n    <ugw-demo-footer></ugw-demo-footer>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/showcase/showcase.component.ts":
/*!************************************************!*\
  !*** ./src/app/showcase/showcase.component.ts ***!
  \************************************************/
/*! exports provided: ShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseComponent", function() { return ShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _element_ref_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element-ref.service */ "./src/app/showcase/element-ref.service.ts");
/* harmony import */ var _showcase_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showcase-menu */ "./src/app/showcase/showcase-menu.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShowcaseComponent = /** @class */ (function () {
    function ShowcaseComponent(renderer, elementRefSvc) {
        this.renderer = renderer;
        this.elementRefSvc = elementRefSvc;
        this.isTop = false;
        this.rightNavElements = [];
        this.sectionElements = [];
    }
    ShowcaseComponent.prototype.ngOnInit = function () {
        this.menus = _showcase_menu__WEBPACK_IMPORTED_MODULE_2__["MENU"];
        this.showRightNav = document.documentElement.clientWidth > 768;
        this.clientWidthIsMobile = document.documentElement.clientWidth < 768;
        this.getRightNavElementRef();
        this.getSectionElementRef();
        this.windowEventListener();
    };
    ShowcaseComponent.prototype.windowEventListener = function () {
        var _this = this;
        window.addEventListener('scroll', function () {
            var scrollPosition = window.scrollY;
            _this.isTop = scrollPosition > 80;
            if (_this.rightNavElements.length > 0 && document.documentElement.clientWidth >= 1200) {
                _this.updateActiveNav((scrollPosition + 100), 'active');
            }
        });
        window.addEventListener('resize', function () {
            _this.clientWidthIsMobile = document.documentElement.clientWidth < 768;
            if (_this.clientWidthIsMobile === true) {
                _this.showRightNav = false;
            }
        });
    };
    ShowcaseComponent.prototype.onMenuItemClick = function () {
        if (this.clientWidthIsMobile === true) {
            this.showRightNav = false;
        }
    };
    ShowcaseComponent.prototype.getRightNavElementRef = function () {
        var _this = this;
        this.elementRefSvc.getRightNavCollectionRef().subscribe(function (elementRef) {
            _this.rightNavElements = [];
            elementRef.forEach(function (element, index) {
                if (index === 0) {
                    _this.renderer.addClass(element.nativeElement, 'active');
                }
                _this.rightNavElements.push(element);
            });
        });
    };
    ShowcaseComponent.prototype.getSectionElementRef = function () {
        var _this = this;
        this.elementRefSvc.getSectionTitleCollectionRef().subscribe(function (elementRef) {
            _this.sectionElements = elementRef.map(function (item) { return item.nativeElement.offsetTop; });
        });
    };
    ShowcaseComponent.prototype.updateActiveNav = function (scrollPosition, className) {
        var _this = this;
        this.sectionElements.forEach(function (sectionOffsetTop, i) {
            if (scrollPosition >= sectionOffsetTop) {
                if ((i - 1) >= 0) {
                    _this.renderer.removeClass(_this.rightNavElements[(i - 1)].nativeElement, className);
                }
                _this.renderer.addClass(_this.rightNavElements[i].nativeElement, className);
            }
            else {
                _this.renderer.removeClass(_this.rightNavElements[i].nativeElement, className);
                if (i === 0) {
                    _this.renderer.addClass(_this.rightNavElements[i].nativeElement, className);
                }
            }
        });
    };
    ShowcaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-showcase',
            template: __webpack_require__(/*! ./showcase.component.html */ "./src/app/showcase/showcase.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _element_ref_service__WEBPACK_IMPORTED_MODULE_1__["ElementRefService"]])
    ], ShowcaseComponent);
    return ShowcaseComponent;
}());



/***/ }),

/***/ "./src/app/showcase/showcase.directive.ts":
/*!************************************************!*\
  !*** ./src/app/showcase/showcase.directive.ts ***!
  \************************************************/
/*! exports provided: ShowcaseDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseDirective", function() { return ShowcaseDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowcaseDirective = /** @class */ (function () {
    function ShowcaseDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    ShowcaseDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[ugwShowCaseDirective]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], ShowcaseDirective);
    return ShowcaseDirective;
}());



/***/ }),

/***/ "./src/app/showcase/showcase.module.ts":
/*!*********************************************!*\
  !*** ./src/app/showcase/showcase.module.ts ***!
  \*********************************************/
/*! exports provided: hljsLanguages, ShowcaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hljsLanguages", function() { return hljsLanguages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseModule", function() { return ShowcaseModule; });
/* harmony import */ var _components_doc_information_sections_information_with_tag_html_information_with_tag_html_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/doc-information/sections/information-with-tag-html/information-with-tag-html.component */ "./src/app/showcase/components/doc-information/sections/information-with-tag-html/information-with-tag-html.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var pilar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pilar */ "./dist/uiigateway/pilar/fesm5/pilar.js");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/fesm5/ngx-highlightjs.js");
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highlight.js/lib/languages/typescript */ "./node_modules/highlight.js/lib/languages/typescript.js");
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! highlight.js/lib/languages/xml */ "./node_modules/highlight.js/lib/languages/xml.js");
/* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! highlight.js/lib/languages/scss */ "./node_modules/highlight.js/lib/languages/scss.js");
/* harmony import */ var highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _showcase_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./showcase.component */ "./src/app/showcase/showcase.component.ts");
/* harmony import */ var _showcase_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./showcase.routing */ "./src/app/showcase/showcase.routing.ts");
/* harmony import */ var _showcase_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./showcase.directive */ "./src/app/showcase/showcase.directive.ts");
/* harmony import */ var _components_doc_image_upload_sections_hide_delete_image_upload_hide_delete_image_upload_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/doc-image-upload/sections/hide-delete-image-upload/hide-delete-image-upload.component */ "./src/app/showcase/components/doc-image-upload/sections/hide-delete-image-upload/hide-delete-image-upload.component.ts");
/* harmony import */ var _components_installation_installation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/installation/installation.component */ "./src/app/showcase/components/installation/installation.component.ts");
/* harmony import */ var _common_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./common/right-sidebar/right-sidebar.component */ "./src/app/showcase/common/right-sidebar/right-sidebar.component.ts");
/* harmony import */ var _components_doc_pagination_doc_pagination_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/doc-pagination/doc-pagination.component */ "./src/app/showcase/components/doc-pagination/doc-pagination.component.ts");
/* harmony import */ var _components_get_started_get_started_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/get-started/get-started.component */ "./src/app/showcase/components/get-started/get-started.component.ts");
/* harmony import */ var _templates_code_section_code_section_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./templates/code-section/code-section.component */ "./src/app/showcase/templates/code-section/code-section.component.ts");
/* harmony import */ var _templates_docs_api_docs_api_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./templates/docs-api/docs-api.component */ "./src/app/showcase/templates/docs-api/docs-api.component.ts");
/* harmony import */ var _templates_docs_section_docs_section_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./templates/docs-section/docs-section.component */ "./src/app/showcase/templates/docs-section/docs-section.component.ts");
/* harmony import */ var _components_doc_pagination_sections_set_page_set_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/doc-pagination/sections/set-page/set-page.component */ "./src/app/showcase/components/doc-pagination/sections/set-page/set-page.component.ts");
/* harmony import */ var _components_doc_pagination_sections_page_change_event_page_change_event_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/doc-pagination/sections/page-change-event/page-change-event.component */ "./src/app/showcase/components/doc-pagination/sections/page-change-event/page-change-event.component.ts");
/* harmony import */ var _components_doc_pagination_sections_basic_pagination_basic_pagination_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/doc-pagination/sections/basic-pagination/basic-pagination.component */ "./src/app/showcase/components/doc-pagination/sections/basic-pagination/basic-pagination.component.ts");
/* harmony import */ var _templates_component_header_component_header_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./templates/component-header/component-header.component */ "./src/app/showcase/templates/component-header/component-header.component.ts");
/* harmony import */ var _common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./common/demo-sidebar/demo-sidebar.component */ "./src/app/showcase/common/demo-sidebar/demo-sidebar.component.ts");
/* harmony import */ var _common_demo_header_demo_header_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./common/demo-header/demo-header.component */ "./src/app/showcase/common/demo-header/demo-header.component.ts");
/* harmony import */ var _components_doc_tabset_doc_tabset_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/doc-tabset/doc-tabset.component */ "./src/app/showcase/components/doc-tabset/doc-tabset.component.ts");
/* harmony import */ var _components_doc_tabset_sections_basic_tabset_basic_tabset_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/doc-tabset/sections/basic-tabset/basic-tabset.component */ "./src/app/showcase/components/doc-tabset/sections/basic-tabset/basic-tabset.component.ts");
/* harmony import */ var _components_doc_tabset_sections_tabset_with_icon_tabset_with_icon_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/doc-tabset/sections/tabset-with-icon/tabset-with-icon.component */ "./src/app/showcase/components/doc-tabset/sections/tabset-with-icon/tabset-with-icon.component.ts");
/* harmony import */ var _components_doc_tabset_sections_tabset_with_icon_text_tabset_with_icon_text_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/doc-tabset/sections/tabset-with-icon-text/tabset-with-icon-text.component */ "./src/app/showcase/components/doc-tabset/sections/tabset-with-icon-text/tabset-with-icon-text.component.ts");
/* harmony import */ var _components_doc_tabset_sections_manually_tab_selection_manually_tab_selection_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/doc-tabset/sections/manually-tab-selection/manually-tab-selection.component */ "./src/app/showcase/components/doc-tabset/sections/manually-tab-selection/manually-tab-selection.component.ts");
/* harmony import */ var _components_doc_tabset_sections_tabset_select_event_tabset_select_event_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/doc-tabset/sections/tabset-select-event/tabset-select-event.component */ "./src/app/showcase/components/doc-tabset/sections/tabset-select-event/tabset-select-event.component.ts");
/* harmony import */ var _components_doc_tabset_sections_tabset_deselect_event_tabset_deselect_event_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/doc-tabset/sections/tabset-deselect-event/tabset-deselect-event.component */ "./src/app/showcase/components/doc-tabset/sections/tabset-deselect-event/tabset-deselect-event.component.ts");
/* harmony import */ var _templates_section_section_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./templates/section/section.component */ "./src/app/showcase/templates/section/section.component.ts");
/* harmony import */ var _common_demo_footer_demo_footer_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./common/demo-footer/demo-footer.component */ "./src/app/showcase/common/demo-footer/demo-footer.component.ts");
/* harmony import */ var _components_doc_infobox_doc_infobox_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/doc-infobox/doc-infobox.component */ "./src/app/showcase/components/doc-infobox/doc-infobox.component.ts");
/* harmony import */ var _components_doc_infobox_sections_basic_infobox_basic_infobox_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/doc-infobox/sections/basic-infobox/basic-infobox.component */ "./src/app/showcase/components/doc-infobox/sections/basic-infobox/basic-infobox.component.ts");
/* harmony import */ var _components_doc_infobox_sections_group_infobox_group_infobox_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/doc-infobox/sections/group-infobox/group-infobox.component */ "./src/app/showcase/components/doc-infobox/sections/group-infobox/group-infobox.component.ts");
/* harmony import */ var _components_doc_toast_doc_toast_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/doc-toast/doc-toast.component */ "./src/app/showcase/components/doc-toast/doc-toast.component.ts");
/* harmony import */ var _components_doc_toast_sections_basic_toast_basic_toast_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/doc-toast/sections/basic-toast/basic-toast.component */ "./src/app/showcase/components/doc-toast/sections/basic-toast/basic-toast.component.ts");
/* harmony import */ var _components_doc_toast_sections_blank_toast_blank_toast_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/doc-toast/sections/blank-toast/blank-toast.component */ "./src/app/showcase/components/doc-toast/sections/blank-toast/blank-toast.component.ts");
/* harmony import */ var _components_doc_toast_sections_timeout_toast_timeout_toast_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/doc-toast/sections/timeout-toast/timeout-toast.component */ "./src/app/showcase/components/doc-toast/sections/timeout-toast/timeout-toast.component.ts");
/* harmony import */ var _components_doc_information_doc_information_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/doc-information/doc-information.component */ "./src/app/showcase/components/doc-information/doc-information.component.ts");
/* harmony import */ var _components_doc_information_sections_basic_information_basic_information_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/doc-information/sections/basic-information/basic-information.component */ "./src/app/showcase/components/doc-information/sections/basic-information/basic-information.component.ts");
/* harmony import */ var _components_doc_accordion_doc_accordion_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/doc-accordion/doc-accordion.component */ "./src/app/showcase/components/doc-accordion/doc-accordion.component.ts");
/* harmony import */ var _components_doc_accordion_sections_basic_accordion_basic_accordion_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/doc-accordion/sections/basic-accordion/basic-accordion.component */ "./src/app/showcase/components/doc-accordion/sections/basic-accordion/basic-accordion.component.ts");
/* harmony import */ var _components_doc_accordion_sections_animation_accordion_animation_accordion_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/doc-accordion/sections/animation-accordion/animation-accordion.component */ "./src/app/showcase/components/doc-accordion/sections/animation-accordion/animation-accordion.component.ts");
/* harmony import */ var _components_doc_accordion_sections_opening_event_accordion_opening_event_accordion_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/doc-accordion/sections/opening-event-accordion/opening-event-accordion.component */ "./src/app/showcase/components/doc-accordion/sections/opening-event-accordion/opening-event-accordion.component.ts");
/* harmony import */ var _components_doc_accordion_sections_disable_accordion_disable_accordion_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/doc-accordion/sections/disable-accordion/disable-accordion.component */ "./src/app/showcase/components/doc-accordion/sections/disable-accordion/disable-accordion.component.ts");
/* harmony import */ var _components_doc_accordion_sections_initially_opened_accordion_initially_opened_accordion_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/doc-accordion/sections/initially-opened-accordion/initially-opened-accordion.component */ "./src/app/showcase/components/doc-accordion/sections/initially-opened-accordion/initially-opened-accordion.component.ts");
/* harmony import */ var _components_doc_accordion_sections_dynamic_accordion_dynamic_accordion_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/doc-accordion/sections/dynamic-accordion/dynamic-accordion.component */ "./src/app/showcase/components/doc-accordion/sections/dynamic-accordion/dynamic-accordion.component.ts");
/* harmony import */ var _components_doc_accordion_sections_dynamic_body_accordion_dynamic_body_accordion_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/doc-accordion/sections/dynamic-body-accordion/dynamic-body-accordion.component */ "./src/app/showcase/components/doc-accordion/sections/dynamic-body-accordion/dynamic-body-accordion.component.ts");
/* harmony import */ var _components_doc_accordion_sections_manual_toggle_accordion_manual_toggle_accordion_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/doc-accordion/sections/manual-toggle-accordion/manual-toggle-accordion.component */ "./src/app/showcase/components/doc-accordion/sections/manual-toggle-accordion/manual-toggle-accordion.component.ts");
/* harmony import */ var _components_doc_accordion_sections_other_close_accordion_other_close_accordion_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/doc-accordion/sections/other-close-accordion/other-close-accordion.component */ "./src/app/showcase/components/doc-accordion/sections/other-close-accordion/other-close-accordion.component.ts");
/* harmony import */ var _components_doc_accordion_sections_custom_html_accordion_custom_html_accordion_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/doc-accordion/sections/custom-html-accordion/custom-html-accordion.component */ "./src/app/showcase/components/doc-accordion/sections/custom-html-accordion/custom-html-accordion.component.ts");
/* harmony import */ var _components_doc_accordion_sections_styling_accordion_styling_accordion_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/doc-accordion/sections/styling-accordion/styling-accordion.component */ "./src/app/showcase/components/doc-accordion/sections/styling-accordion/styling-accordion.component.ts");
/* harmony import */ var _components_under_development_under_development_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./components/under-development/under-development.component */ "./src/app/showcase/components/under-development/under-development.component.ts");
/* harmony import */ var _components_doc_file_upload_doc_file_upload_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./components/doc-file-upload/doc-file-upload.component */ "./src/app/showcase/components/doc-file-upload/doc-file-upload.component.ts");
/* harmony import */ var _components_doc_file_upload_sections_basic_file_upload_basic_file_upload_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./components/doc-file-upload/sections/basic-file-upload/basic-file-upload.component */ "./src/app/showcase/components/doc-file-upload/sections/basic-file-upload/basic-file-upload.component.ts");
/* harmony import */ var _components_doc_file_upload_sections_type_file_upload_type_file_upload_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./components/doc-file-upload/sections/type-file-upload/type-file-upload.component */ "./src/app/showcase/components/doc-file-upload/sections/type-file-upload/type-file-upload.component.ts");
/* harmony import */ var _components_doc_file_upload_sections_size_file_upload_size_file_upload_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./components/doc-file-upload/sections/size-file-upload/size-file-upload.component */ "./src/app/showcase/components/doc-file-upload/sections/size-file-upload/size-file-upload.component.ts");
/* harmony import */ var _components_doc_file_upload_sections_multiple_file_upload_multiple_file_upload_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./components/doc-file-upload/sections/multiple-file-upload/multiple-file-upload.component */ "./src/app/showcase/components/doc-file-upload/sections/multiple-file-upload/multiple-file-upload.component.ts");
/* harmony import */ var _components_doc_file_upload_sections_events_file_upload_events_file_upload_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./components/doc-file-upload/sections/events-file-upload/events-file-upload.component */ "./src/app/showcase/components/doc-file-upload/sections/events-file-upload/events-file-upload.component.ts");
/* harmony import */ var _components_doc_file_upload_sections_prev_position_file_upload_prev_position_file_upload_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./components/doc-file-upload/sections/prev-position-file-upload/prev-position-file-upload.component */ "./src/app/showcase/components/doc-file-upload/sections/prev-position-file-upload/prev-position-file-upload.component.ts");
/* harmony import */ var _components_doc_file_upload_sections_set_file_upload_set_file_upload_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./components/doc-file-upload/sections/set-file-upload/set-file-upload.component */ "./src/app/showcase/components/doc-file-upload/sections/set-file-upload/set-file-upload.component.ts");
/* harmony import */ var _components_doc_switch_doc_switch_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./components/doc-switch/doc-switch.component */ "./src/app/showcase/components/doc-switch/doc-switch.component.ts");
/* harmony import */ var _components_doc_switch_sections_basic_switch_basic_switch_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./components/doc-switch/sections/basic-switch/basic-switch.component */ "./src/app/showcase/components/doc-switch/sections/basic-switch/basic-switch.component.ts");
/* harmony import */ var _components_doc_switch_sections_disabled_switch_disabled_switch_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./components/doc-switch/sections/disabled-switch/disabled-switch.component */ "./src/app/showcase/components/doc-switch/sections/disabled-switch/disabled-switch.component.ts");
/* harmony import */ var _components_doc_switch_sections_checked_switch_checked_switch_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./components/doc-switch/sections/checked-switch/checked-switch.component */ "./src/app/showcase/components/doc-switch/sections/checked-switch/checked-switch.component.ts");
/* harmony import */ var _components_doc_switch_sections_changed_switch_changed_switch_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./components/doc-switch/sections/changed-switch/changed-switch.component */ "./src/app/showcase/components/doc-switch/sections/changed-switch/changed-switch.component.ts");
/* harmony import */ var _components_doc_switch_sections_delayed_switch_delayed_switch_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./components/doc-switch/sections/delayed-switch/delayed-switch.component */ "./src/app/showcase/components/doc-switch/sections/delayed-switch/delayed-switch.component.ts");
/* harmony import */ var _components_doc_image_upload_sections_basic_image_upload_basic_image_upload_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./components/doc-image-upload/sections/basic-image-upload/basic-image-upload.component */ "./src/app/showcase/components/doc-image-upload/sections/basic-image-upload/basic-image-upload.component.ts");
/* harmony import */ var _components_doc_toast_sections_pause_onclick_toast_pause_onclick_toast_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./components/doc-toast/sections/pause-onclick-toast/pause-onclick-toast.component */ "./src/app/showcase/components/doc-toast/sections/pause-onclick-toast/pause-onclick-toast.component.ts");
/* harmony import */ var _components_doc_image_upload_doc_image_upload_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./components/doc-image-upload/doc-image-upload.component */ "./src/app/showcase/components/doc-image-upload/doc-image-upload.component.ts");
/* harmony import */ var _components_doc_infobox_sections_color_infobox_color_infobox_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./components/doc-infobox/sections/color-infobox/color-infobox.component */ "./src/app/showcase/components/doc-infobox/sections/color-infobox/color-infobox.component.ts");
/* harmony import */ var _components_doc_form_wizard_doc_form_wizard_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./components/doc-form-wizard/doc-form-wizard.component */ "./src/app/showcase/components/doc-form-wizard/doc-form-wizard.component.ts");
/* harmony import */ var _components_doc_form_wizard_sections_basic_form_wizard_basic_form_wizard_component__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./components/doc-form-wizard/sections/basic-form-wizard/basic-form-wizard.component */ "./src/app/showcase/components/doc-form-wizard/sections/basic-form-wizard/basic-form-wizard.component.ts");
/* harmony import */ var _components_doc_form_wizard_sections_many_step_form_wizard_many_step_form_wizard_component__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./components/doc-form-wizard/sections/many-step-form-wizard/many-step-form-wizard.component */ "./src/app/showcase/components/doc-form-wizard/sections/many-step-form-wizard/many-step-form-wizard.component.ts");
/* harmony import */ var _components_doc_form_wizard_sections_emit_event_paginate_change_form_wizard_emit_event_paginate_change_form_wizard_component__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./components/doc-form-wizard/sections/emit-event-paginate-change-form-wizard/emit-event-paginate-change-form-wizard.component */ "./src/app/showcase/components/doc-form-wizard/sections/emit-event-paginate-change-form-wizard/emit-event-paginate-change-form-wizard.component.ts");
/* harmony import */ var _components_doc_form_wizard_sections_disabled_submit_form_wizard_disabled_submit_form_wizard_component__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./components/doc-form-wizard/sections/disabled-submit-form-wizard/disabled-submit-form-wizard.component */ "./src/app/showcase/components/doc-form-wizard/sections/disabled-submit-form-wizard/disabled-submit-form-wizard.component.ts");
/* harmony import */ var _components_doc_form_wizard_sections_disabled_click_step_form_wizard_disabled_click_step_form_wizard_component__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./components/doc-form-wizard/sections/disabled-click-step-form-wizard/disabled-click-step-form-wizard.component */ "./src/app/showcase/components/doc-form-wizard/sections/disabled-click-step-form-wizard/disabled-click-step-form-wizard.component.ts");
/* harmony import */ var _components_doc_form_wizard_sections_custom_pagination_label_form_wizard_custom_pagination_label_form_wizard_component__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./components/doc-form-wizard/sections/custom-pagination-label-form-wizard/custom-pagination-label-form-wizard.component */ "./src/app/showcase/components/doc-form-wizard/sections/custom-pagination-label-form-wizard/custom-pagination-label-form-wizard.component.ts");
/* harmony import */ var _components_doc_form_wizard_sections_active_step_option_form_wizard_active_step_option_form_wizard_component__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./components/doc-form-wizard/sections/active-step-option-form-wizard/active-step-option-form-wizard.component */ "./src/app/showcase/components/doc-form-wizard/sections/active-step-option-form-wizard/active-step-option-form-wizard.component.ts");
/* harmony import */ var _components_doc_form_wizard_sections_steps_option_form_wizard_steps_option_form_wizard_component__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./components/doc-form-wizard/sections/steps-option-form-wizard/steps-option-form-wizard.component */ "./src/app/showcase/components/doc-form-wizard/sections/steps-option-form-wizard/steps-option-form-wizard.component.ts");
/* harmony import */ var _components_doc_tooltip_doc_tooltip_component__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./components/doc-tooltip/doc-tooltip.component */ "./src/app/showcase/components/doc-tooltip/doc-tooltip.component.ts");
/* harmony import */ var _components_doc_tooltip_sections_basic_tooltip_basic_tooltip_component__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./components/doc-tooltip/sections/basic-tooltip/basic-tooltip.component */ "./src/app/showcase/components/doc-tooltip/sections/basic-tooltip/basic-tooltip.component.ts");
/* harmony import */ var _components_doc_tooltip_sections_paragraph_tooltip_paragraph_tooltip_component__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./components/doc-tooltip/sections/paragraph-tooltip/paragraph-tooltip.component */ "./src/app/showcase/components/doc-tooltip/sections/paragraph-tooltip/paragraph-tooltip.component.ts");
/* harmony import */ var _components_doc_tooltip_sections_placement_tooltip_placement_tooltip_component__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./components/doc-tooltip/sections/placement-tooltip/placement-tooltip.component */ "./src/app/showcase/components/doc-tooltip/sections/placement-tooltip/placement-tooltip.component.ts");
/* harmony import */ var _components_doc_tooltip_sections_dynamic_html_tooltip_dynamic_html_tooltip_component__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./components/doc-tooltip/sections/dynamic-html-tooltip/dynamic-html-tooltip.component */ "./src/app/showcase/components/doc-tooltip/sections/dynamic-html-tooltip/dynamic-html-tooltip.component.ts");
/* harmony import */ var _components_doc_tooltip_sections_disabled_tooltip_disabled_tooltip_component__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./components/doc-tooltip/sections/disabled-tooltip/disabled-tooltip.component */ "./src/app/showcase/components/doc-tooltip/sections/disabled-tooltip/disabled-tooltip.component.ts");
/* harmony import */ var _components_doc_chips_doc_chips_component__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./components/doc-chips/doc-chips.component */ "./src/app/showcase/components/doc-chips/doc-chips.component.ts");
/* harmony import */ var _components_doc_chips_sections_basic_chip_basic_chip_component__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./components/doc-chips/sections/basic-chip/basic-chip.component */ "./src/app/showcase/components/doc-chips/sections/basic-chip/basic-chip.component.ts");
/* harmony import */ var _components_doc_chips_sections_disable_chip_disable_chip_component__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./components/doc-chips/sections/disable-chip/disable-chip.component */ "./src/app/showcase/components/doc-chips/sections/disable-chip/disable-chip.component.ts");
/* harmony import */ var _components_doc_chips_sections_vertical_chip_vertical_chip_component__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./components/doc-chips/sections/vertical-chip/vertical-chip.component */ "./src/app/showcase/components/doc-chips/sections/vertical-chip/vertical-chip.component.ts");
/* harmony import */ var _components_doc_chips_sections_horizontal_chip_horizontal_chip_component__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./components/doc-chips/sections/horizontal-chip/horizontal-chip.component */ "./src/app/showcase/components/doc-chips/sections/horizontal-chip/horizontal-chip.component.ts");
/* harmony import */ var _components_doc_button_sections_disabled_button_disabled_button_component__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./components/doc-button/sections/disabled-button/disabled-button.component */ "./src/app/showcase/components/doc-button/sections/disabled-button/disabled-button.component.ts");
/* harmony import */ var _components_doc_button_sections_loader_button_loader_button_component__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./components/doc-button/sections/loader-button/loader-button.component */ "./src/app/showcase/components/doc-button/sections/loader-button/loader-button.component.ts");
/* harmony import */ var _components_doc_button_sections_combination_icon_button_combination_icon_button_component__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./components/doc-button/sections/combination-icon-button/combination-icon-button.component */ "./src/app/showcase/components/doc-button/sections/combination-icon-button/combination-icon-button.component.ts");
/* harmony import */ var _components_doc_button_sections_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./components/doc-button/sections/icon-button/icon-button.component */ "./src/app/showcase/components/doc-button/sections/icon-button/icon-button.component.ts");
/* harmony import */ var _components_doc_button_sections_active_button_active_button_component__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./components/doc-button/sections/active-button/active-button.component */ "./src/app/showcase/components/doc-button/sections/active-button/active-button.component.ts");
/* harmony import */ var _components_doc_button_sections_block_button_block_button_component__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./components/doc-button/sections/block-button/block-button.component */ "./src/app/showcase/components/doc-button/sections/block-button/block-button.component.ts");
/* harmony import */ var _components_doc_button_sections_size_button_size_button_component__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./components/doc-button/sections/size-button/size-button.component */ "./src/app/showcase/components/doc-button/sections/size-button/size-button.component.ts");
/* harmony import */ var _components_doc_button_sections_basic_button_basic_button_component__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./components/doc-button/sections/basic-button/basic-button.component */ "./src/app/showcase/components/doc-button/sections/basic-button/basic-button.component.ts");
/* harmony import */ var _components_doc_button_doc_button_component__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./components/doc-button/doc-button.component */ "./src/app/showcase/components/doc-button/doc-button.component.ts");
/* harmony import */ var _components_doc_image_upload_sections_labeling_button_image_upload_labeling_button_image_upload_component__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ./components/doc-image-upload/sections/labeling-button-image-upload/labeling-button-image-upload.component */ "./src/app/showcase/components/doc-image-upload/sections/labeling-button-image-upload/labeling-button-image-upload.component.ts");
/* harmony import */ var _components_doc_table_doc_table_component__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ./components/doc-table/doc-table.component */ "./src/app/showcase/components/doc-table/doc-table.component.ts");
/* harmony import */ var _components_doc_table_sections_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! ./components/doc-table/sections/basic-table/basic-table.component */ "./src/app/showcase/components/doc-table/sections/basic-table/basic-table.component.ts");
/* harmony import */ var _components_doc_table_sections_table_with_checkbox_table_with_checkbox_component__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! ./components/doc-table/sections/table-with-checkbox/table-with-checkbox.component */ "./src/app/showcase/components/doc-table/sections/table-with-checkbox/table-with-checkbox.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








function hljsLanguages() {
    return [
        { name: 'typescript', func: highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_5___default.a },
        { name: 'scss', func: highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_7___default.a },
        { name: 'xml', func: highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_6___default.a }
    ];
}



































































































var ShowcaseModule = /** @class */ (function () {
    function ShowcaseModule() {
    }
    ShowcaseModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _showcase_component__WEBPACK_IMPORTED_MODULE_8__["ShowcaseComponent"],
                _common_demo_header_demo_header_component__WEBPACK_IMPORTED_MODULE_24__["DemoHeaderComponent"],
                _common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_23__["DemoSidebarComponent"],
                _common_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["RightSidebarComponent"],
                _components_doc_pagination_doc_pagination_component__WEBPACK_IMPORTED_MODULE_14__["DocPaginationComponent"],
                _components_doc_pagination_sections_basic_pagination_basic_pagination_component__WEBPACK_IMPORTED_MODULE_21__["BasicPaginationComponent"],
                _components_doc_image_upload_sections_basic_image_upload_basic_image_upload_component__WEBPACK_IMPORTED_MODULE_70__["BasicImageUploadComponent"],
                _components_doc_image_upload_sections_hide_delete_image_upload_hide_delete_image_upload_component__WEBPACK_IMPORTED_MODULE_11__["HideDeleteImageUploadComponent"],
                _components_doc_image_upload_sections_labeling_button_image_upload_labeling_button_image_upload_component__WEBPACK_IMPORTED_MODULE_103__["LabelingButtonImageUploadComponent"],
                _components_doc_pagination_sections_page_change_event_page_change_event_component__WEBPACK_IMPORTED_MODULE_20__["PageChangeEventComponent"],
                _components_doc_pagination_sections_set_page_set_page_component__WEBPACK_IMPORTED_MODULE_19__["SetPageComponent"],
                _components_get_started_get_started_component__WEBPACK_IMPORTED_MODULE_15__["GetStartedComponent"],
                _templates_code_section_code_section_component__WEBPACK_IMPORTED_MODULE_16__["CodeSectionComponent"],
                _templates_component_header_component_header_component__WEBPACK_IMPORTED_MODULE_22__["ComponentHeaderComponent"],
                _templates_docs_api_docs_api_component__WEBPACK_IMPORTED_MODULE_17__["DocsApiComponent"],
                _components_doc_image_upload_doc_image_upload_component__WEBPACK_IMPORTED_MODULE_72__["DocImageUploadComponent"],
                _templates_docs_section_docs_section_component__WEBPACK_IMPORTED_MODULE_18__["DocsSectionComponent"],
                _showcase_directive__WEBPACK_IMPORTED_MODULE_10__["ShowcaseDirective"],
                _components_doc_tabset_doc_tabset_component__WEBPACK_IMPORTED_MODULE_25__["DocTabsetComponent"],
                _components_doc_tabset_sections_basic_tabset_basic_tabset_component__WEBPACK_IMPORTED_MODULE_26__["BasicTabsetComponent"],
                _components_doc_tabset_sections_tabset_with_icon_tabset_with_icon_component__WEBPACK_IMPORTED_MODULE_27__["TabsetWithIconComponent"],
                _components_doc_tabset_sections_tabset_with_icon_text_tabset_with_icon_text_component__WEBPACK_IMPORTED_MODULE_28__["TabsetWithIconTextComponent"],
                _components_doc_tabset_sections_manually_tab_selection_manually_tab_selection_component__WEBPACK_IMPORTED_MODULE_29__["ManuallyTabSelectionComponent"],
                _components_installation_installation_component__WEBPACK_IMPORTED_MODULE_12__["InstallationComponent"],
                _components_doc_tabset_sections_tabset_select_event_tabset_select_event_component__WEBPACK_IMPORTED_MODULE_30__["TabsetSelectEventComponent"],
                _components_doc_tabset_sections_tabset_deselect_event_tabset_deselect_event_component__WEBPACK_IMPORTED_MODULE_31__["TabsetDeselectEventComponent"],
                _templates_section_section_component__WEBPACK_IMPORTED_MODULE_32__["SectionComponent"],
                _common_demo_footer_demo_footer_component__WEBPACK_IMPORTED_MODULE_33__["DemoFooterComponent"],
                _components_doc_button_doc_button_component__WEBPACK_IMPORTED_MODULE_102__["DocButtonComponent"],
                _components_doc_button_sections_size_button_size_button_component__WEBPACK_IMPORTED_MODULE_100__["SizeButtonComponent"],
                _components_doc_button_sections_block_button_block_button_component__WEBPACK_IMPORTED_MODULE_99__["BlockButtonComponent"],
                _components_doc_button_sections_basic_button_basic_button_component__WEBPACK_IMPORTED_MODULE_101__["BasicButtonComponent"],
                _components_doc_button_sections_disabled_button_disabled_button_component__WEBPACK_IMPORTED_MODULE_94__["DisabledButtonComponent"],
                _components_doc_button_sections_loader_button_loader_button_component__WEBPACK_IMPORTED_MODULE_95__["LoaderButtonComponent"],
                _components_doc_button_sections_combination_icon_button_combination_icon_button_component__WEBPACK_IMPORTED_MODULE_96__["CombinationIconButtonComponent"],
                _components_doc_button_sections_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_97__["IconButtonComponent"],
                _components_doc_button_sections_active_button_active_button_component__WEBPACK_IMPORTED_MODULE_98__["ActiveButtonComponent"],
                _components_doc_infobox_doc_infobox_component__WEBPACK_IMPORTED_MODULE_34__["DocInfoboxComponent"],
                _components_doc_infobox_sections_basic_infobox_basic_infobox_component__WEBPACK_IMPORTED_MODULE_35__["BasicInfoboxComponent"],
                _components_doc_infobox_sections_color_infobox_color_infobox_component__WEBPACK_IMPORTED_MODULE_73__["ColorInfoboxComponent"],
                _components_doc_infobox_sections_group_infobox_group_infobox_component__WEBPACK_IMPORTED_MODULE_36__["GroupInfoboxComponent"],
                _components_doc_toast_doc_toast_component__WEBPACK_IMPORTED_MODULE_37__["DocToastComponent"],
                _components_doc_toast_sections_basic_toast_basic_toast_component__WEBPACK_IMPORTED_MODULE_38__["BasicToastComponent"],
                _components_doc_toast_sections_blank_toast_blank_toast_component__WEBPACK_IMPORTED_MODULE_39__["BlankToastComponent"],
                _components_doc_toast_sections_timeout_toast_timeout_toast_component__WEBPACK_IMPORTED_MODULE_40__["TimeoutToastComponent"],
                _components_doc_information_doc_information_component__WEBPACK_IMPORTED_MODULE_41__["DocInformationComponent"],
                _components_doc_information_sections_basic_information_basic_information_component__WEBPACK_IMPORTED_MODULE_42__["BasicInformationComponent"],
                _components_doc_information_sections_information_with_tag_html_information_with_tag_html_component__WEBPACK_IMPORTED_MODULE_0__["InformationWithTagHtmlComponent"],
                _components_doc_accordion_doc_accordion_component__WEBPACK_IMPORTED_MODULE_43__["DocAccordionComponent"],
                _components_doc_accordion_sections_basic_accordion_basic_accordion_component__WEBPACK_IMPORTED_MODULE_44__["BasicAccordionComponent"],
                _components_doc_accordion_sections_animation_accordion_animation_accordion_component__WEBPACK_IMPORTED_MODULE_45__["AnimationAccordionComponent"],
                _components_doc_accordion_sections_opening_event_accordion_opening_event_accordion_component__WEBPACK_IMPORTED_MODULE_46__["OpeningEventAccordionComponent"],
                _components_doc_accordion_sections_disable_accordion_disable_accordion_component__WEBPACK_IMPORTED_MODULE_47__["DisableAccordionComponent"],
                _components_doc_accordion_sections_initially_opened_accordion_initially_opened_accordion_component__WEBPACK_IMPORTED_MODULE_48__["InitiallyOpenedAccordionComponent"],
                _components_doc_accordion_sections_dynamic_accordion_dynamic_accordion_component__WEBPACK_IMPORTED_MODULE_49__["DynamicAccordionComponent"],
                _components_doc_accordion_sections_dynamic_body_accordion_dynamic_body_accordion_component__WEBPACK_IMPORTED_MODULE_50__["DynamicBodyAccordionComponent"],
                _components_doc_accordion_sections_manual_toggle_accordion_manual_toggle_accordion_component__WEBPACK_IMPORTED_MODULE_51__["ManualToggleAccordionComponent"],
                _components_doc_accordion_sections_other_close_accordion_other_close_accordion_component__WEBPACK_IMPORTED_MODULE_52__["OtherCloseAccordionComponent"],
                _components_doc_accordion_sections_custom_html_accordion_custom_html_accordion_component__WEBPACK_IMPORTED_MODULE_53__["CustomHtmlAccordionComponent"],
                _components_doc_accordion_sections_styling_accordion_styling_accordion_component__WEBPACK_IMPORTED_MODULE_54__["StylingAccordionComponent"],
                _components_under_development_under_development_component__WEBPACK_IMPORTED_MODULE_55__["UnderDevelopmentComponent"],
                _components_doc_file_upload_doc_file_upload_component__WEBPACK_IMPORTED_MODULE_56__["DocFileUploadComponent"],
                _components_doc_file_upload_sections_basic_file_upload_basic_file_upload_component__WEBPACK_IMPORTED_MODULE_57__["BasicFileUploadComponent"],
                _components_doc_file_upload_sections_type_file_upload_type_file_upload_component__WEBPACK_IMPORTED_MODULE_58__["TypeFileUploadComponent"],
                _components_doc_file_upload_sections_size_file_upload_size_file_upload_component__WEBPACK_IMPORTED_MODULE_59__["SizeFileUploadComponent"],
                _components_doc_file_upload_sections_multiple_file_upload_multiple_file_upload_component__WEBPACK_IMPORTED_MODULE_60__["MultipleFileUploadComponent"],
                _components_doc_file_upload_sections_events_file_upload_events_file_upload_component__WEBPACK_IMPORTED_MODULE_61__["EventsFileUploadComponent"],
                _components_doc_file_upload_sections_prev_position_file_upload_prev_position_file_upload_component__WEBPACK_IMPORTED_MODULE_62__["PrevPositionFileUploadComponent"],
                _components_doc_file_upload_sections_set_file_upload_set_file_upload_component__WEBPACK_IMPORTED_MODULE_63__["SetFileUploadComponent"],
                _components_doc_switch_doc_switch_component__WEBPACK_IMPORTED_MODULE_64__["DocSwitchComponent"],
                _components_doc_switch_sections_basic_switch_basic_switch_component__WEBPACK_IMPORTED_MODULE_65__["BasicSwitchComponent"],
                _components_doc_switch_sections_disabled_switch_disabled_switch_component__WEBPACK_IMPORTED_MODULE_66__["DisabledSwitchComponent"],
                _components_doc_switch_sections_checked_switch_checked_switch_component__WEBPACK_IMPORTED_MODULE_67__["CheckedSwitchComponent"],
                _components_doc_switch_sections_changed_switch_changed_switch_component__WEBPACK_IMPORTED_MODULE_68__["ChangedSwitchComponent"],
                _components_doc_switch_sections_delayed_switch_delayed_switch_component__WEBPACK_IMPORTED_MODULE_69__["DelayedSwitchComponent"],
                _components_doc_toast_sections_pause_onclick_toast_pause_onclick_toast_component__WEBPACK_IMPORTED_MODULE_71__["PauseOnclickToastComponent"],
                _components_doc_form_wizard_doc_form_wizard_component__WEBPACK_IMPORTED_MODULE_74__["DocFormWizardComponent"],
                _components_doc_form_wizard_sections_basic_form_wizard_basic_form_wizard_component__WEBPACK_IMPORTED_MODULE_75__["BasicFormWizardComponent"],
                _components_doc_form_wizard_sections_many_step_form_wizard_many_step_form_wizard_component__WEBPACK_IMPORTED_MODULE_76__["ManyStepFormWizardComponent"],
                _components_doc_form_wizard_sections_emit_event_paginate_change_form_wizard_emit_event_paginate_change_form_wizard_component__WEBPACK_IMPORTED_MODULE_77__["EmitEventPaginateChangeFormWizardComponent"],
                _components_doc_form_wizard_sections_disabled_submit_form_wizard_disabled_submit_form_wizard_component__WEBPACK_IMPORTED_MODULE_78__["DisabledSubmitFormWizardComponent"],
                _components_doc_form_wizard_sections_disabled_click_step_form_wizard_disabled_click_step_form_wizard_component__WEBPACK_IMPORTED_MODULE_79__["DisabledClickStepFormWizardComponent"],
                _components_doc_form_wizard_sections_custom_pagination_label_form_wizard_custom_pagination_label_form_wizard_component__WEBPACK_IMPORTED_MODULE_80__["CustomPaginationLabelFormWizardComponent"],
                _components_doc_form_wizard_sections_active_step_option_form_wizard_active_step_option_form_wizard_component__WEBPACK_IMPORTED_MODULE_81__["ActiveStepOptionFormWizardComponent"],
                _components_doc_form_wizard_sections_steps_option_form_wizard_steps_option_form_wizard_component__WEBPACK_IMPORTED_MODULE_82__["StepsOptionFormWizardComponent"],
                _components_doc_tooltip_doc_tooltip_component__WEBPACK_IMPORTED_MODULE_83__["DocTooltipComponent"],
                _components_doc_tooltip_sections_basic_tooltip_basic_tooltip_component__WEBPACK_IMPORTED_MODULE_84__["BasicTooltipComponent"],
                _components_doc_tooltip_sections_paragraph_tooltip_paragraph_tooltip_component__WEBPACK_IMPORTED_MODULE_85__["ParagraphTooltipComponent"],
                _components_doc_tooltip_sections_placement_tooltip_placement_tooltip_component__WEBPACK_IMPORTED_MODULE_86__["PlacementTooltipComponent"],
                _components_doc_tooltip_sections_dynamic_html_tooltip_dynamic_html_tooltip_component__WEBPACK_IMPORTED_MODULE_87__["DynamicHtmlTooltipComponent"],
                _components_doc_tooltip_sections_disabled_tooltip_disabled_tooltip_component__WEBPACK_IMPORTED_MODULE_88__["DisabledTooltipComponent"],
                _components_doc_chips_doc_chips_component__WEBPACK_IMPORTED_MODULE_89__["DocChipsComponent"],
                _components_doc_chips_sections_basic_chip_basic_chip_component__WEBPACK_IMPORTED_MODULE_90__["BasicChipComponent"],
                _components_doc_chips_sections_disable_chip_disable_chip_component__WEBPACK_IMPORTED_MODULE_91__["DisableChipComponent"],
                _components_doc_chips_sections_vertical_chip_vertical_chip_component__WEBPACK_IMPORTED_MODULE_92__["VerticalChipComponent"],
                _components_doc_chips_sections_horizontal_chip_horizontal_chip_component__WEBPACK_IMPORTED_MODULE_93__["HorizontalChipComponent"],
                _components_doc_table_doc_table_component__WEBPACK_IMPORTED_MODULE_104__["DocTableComponent"],
                _components_doc_table_sections_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_105__["BasicTableComponent"],
                _components_doc_table_sections_table_with_checkbox_table_with_checkbox_component__WEBPACK_IMPORTED_MODULE_106__["TableWithCheckboxComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ngx_highlightjs__WEBPACK_IMPORTED_MODULE_4__["HighlightModule"].forRoot({
                    languages: hljsLanguages
                }),
                pilar__WEBPACK_IMPORTED_MODULE_3__["PilarModule"],
                _showcase_routing__WEBPACK_IMPORTED_MODULE_9__["ShowcaseRoutes"]
            ],
            entryComponents: [
                _components_doc_pagination_sections_basic_pagination_basic_pagination_component__WEBPACK_IMPORTED_MODULE_21__["BasicPaginationComponent"],
                _components_doc_pagination_sections_page_change_event_page_change_event_component__WEBPACK_IMPORTED_MODULE_20__["PageChangeEventComponent"],
                _components_doc_pagination_sections_set_page_set_page_component__WEBPACK_IMPORTED_MODULE_19__["SetPageComponent"],
                _components_doc_tabset_sections_basic_tabset_basic_tabset_component__WEBPACK_IMPORTED_MODULE_26__["BasicTabsetComponent"],
                _components_doc_tabset_sections_tabset_with_icon_tabset_with_icon_component__WEBPACK_IMPORTED_MODULE_27__["TabsetWithIconComponent"],
                _components_doc_tabset_sections_tabset_with_icon_text_tabset_with_icon_text_component__WEBPACK_IMPORTED_MODULE_28__["TabsetWithIconTextComponent"],
                _components_doc_tabset_sections_manually_tab_selection_manually_tab_selection_component__WEBPACK_IMPORTED_MODULE_29__["ManuallyTabSelectionComponent"],
                _components_doc_tabset_sections_tabset_select_event_tabset_select_event_component__WEBPACK_IMPORTED_MODULE_30__["TabsetSelectEventComponent"],
                _components_doc_tabset_sections_tabset_deselect_event_tabset_deselect_event_component__WEBPACK_IMPORTED_MODULE_31__["TabsetDeselectEventComponent"],
                _components_doc_infobox_sections_basic_infobox_basic_infobox_component__WEBPACK_IMPORTED_MODULE_35__["BasicInfoboxComponent"],
                _components_doc_infobox_sections_color_infobox_color_infobox_component__WEBPACK_IMPORTED_MODULE_73__["ColorInfoboxComponent"],
                _components_doc_infobox_sections_group_infobox_group_infobox_component__WEBPACK_IMPORTED_MODULE_36__["GroupInfoboxComponent"],
                _components_doc_toast_sections_basic_toast_basic_toast_component__WEBPACK_IMPORTED_MODULE_38__["BasicToastComponent"],
                _components_doc_toast_sections_blank_toast_blank_toast_component__WEBPACK_IMPORTED_MODULE_39__["BlankToastComponent"],
                _components_doc_toast_sections_timeout_toast_timeout_toast_component__WEBPACK_IMPORTED_MODULE_40__["TimeoutToastComponent"],
                _components_doc_toast_sections_pause_onclick_toast_pause_onclick_toast_component__WEBPACK_IMPORTED_MODULE_71__["PauseOnclickToastComponent"],
                _components_doc_information_sections_basic_information_basic_information_component__WEBPACK_IMPORTED_MODULE_42__["BasicInformationComponent"],
                _components_doc_information_sections_information_with_tag_html_information_with_tag_html_component__WEBPACK_IMPORTED_MODULE_0__["InformationWithTagHtmlComponent"],
                _components_doc_accordion_sections_basic_accordion_basic_accordion_component__WEBPACK_IMPORTED_MODULE_44__["BasicAccordionComponent"],
                _components_doc_accordion_sections_animation_accordion_animation_accordion_component__WEBPACK_IMPORTED_MODULE_45__["AnimationAccordionComponent"],
                _components_doc_accordion_sections_opening_event_accordion_opening_event_accordion_component__WEBPACK_IMPORTED_MODULE_46__["OpeningEventAccordionComponent"],
                _components_doc_accordion_sections_disable_accordion_disable_accordion_component__WEBPACK_IMPORTED_MODULE_47__["DisableAccordionComponent"],
                _components_doc_accordion_sections_initially_opened_accordion_initially_opened_accordion_component__WEBPACK_IMPORTED_MODULE_48__["InitiallyOpenedAccordionComponent"],
                _components_doc_accordion_sections_dynamic_accordion_dynamic_accordion_component__WEBPACK_IMPORTED_MODULE_49__["DynamicAccordionComponent"],
                _components_doc_accordion_sections_dynamic_body_accordion_dynamic_body_accordion_component__WEBPACK_IMPORTED_MODULE_50__["DynamicBodyAccordionComponent"],
                _components_doc_accordion_sections_manual_toggle_accordion_manual_toggle_accordion_component__WEBPACK_IMPORTED_MODULE_51__["ManualToggleAccordionComponent"],
                _components_doc_accordion_sections_other_close_accordion_other_close_accordion_component__WEBPACK_IMPORTED_MODULE_52__["OtherCloseAccordionComponent"],
                _components_doc_accordion_sections_custom_html_accordion_custom_html_accordion_component__WEBPACK_IMPORTED_MODULE_53__["CustomHtmlAccordionComponent"],
                _components_doc_accordion_sections_styling_accordion_styling_accordion_component__WEBPACK_IMPORTED_MODULE_54__["StylingAccordionComponent"],
                _components_doc_button_sections_block_button_block_button_component__WEBPACK_IMPORTED_MODULE_99__["BlockButtonComponent"],
                _components_doc_button_sections_disabled_button_disabled_button_component__WEBPACK_IMPORTED_MODULE_94__["DisabledButtonComponent"],
                _components_doc_button_sections_basic_button_basic_button_component__WEBPACK_IMPORTED_MODULE_101__["BasicButtonComponent"],
                _components_doc_button_sections_loader_button_loader_button_component__WEBPACK_IMPORTED_MODULE_95__["LoaderButtonComponent"],
                _components_doc_button_sections_combination_icon_button_combination_icon_button_component__WEBPACK_IMPORTED_MODULE_96__["CombinationIconButtonComponent"],
                _components_doc_button_sections_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_97__["IconButtonComponent"],
                _components_doc_button_sections_active_button_active_button_component__WEBPACK_IMPORTED_MODULE_98__["ActiveButtonComponent"],
                _components_doc_button_sections_size_button_size_button_component__WEBPACK_IMPORTED_MODULE_100__["SizeButtonComponent"],
                _components_doc_file_upload_sections_basic_file_upload_basic_file_upload_component__WEBPACK_IMPORTED_MODULE_57__["BasicFileUploadComponent"],
                _components_doc_image_upload_sections_hide_delete_image_upload_hide_delete_image_upload_component__WEBPACK_IMPORTED_MODULE_11__["HideDeleteImageUploadComponent"],
                _components_doc_image_upload_sections_labeling_button_image_upload_labeling_button_image_upload_component__WEBPACK_IMPORTED_MODULE_103__["LabelingButtonImageUploadComponent"],
                _components_doc_image_upload_sections_basic_image_upload_basic_image_upload_component__WEBPACK_IMPORTED_MODULE_70__["BasicImageUploadComponent"],
                _components_doc_file_upload_sections_type_file_upload_type_file_upload_component__WEBPACK_IMPORTED_MODULE_58__["TypeFileUploadComponent"],
                _components_doc_file_upload_sections_size_file_upload_size_file_upload_component__WEBPACK_IMPORTED_MODULE_59__["SizeFileUploadComponent"],
                _components_doc_file_upload_sections_multiple_file_upload_multiple_file_upload_component__WEBPACK_IMPORTED_MODULE_60__["MultipleFileUploadComponent"],
                _components_doc_file_upload_sections_events_file_upload_events_file_upload_component__WEBPACK_IMPORTED_MODULE_61__["EventsFileUploadComponent"],
                _components_doc_file_upload_sections_prev_position_file_upload_prev_position_file_upload_component__WEBPACK_IMPORTED_MODULE_62__["PrevPositionFileUploadComponent"],
                _components_doc_file_upload_sections_set_file_upload_set_file_upload_component__WEBPACK_IMPORTED_MODULE_63__["SetFileUploadComponent"],
                _components_doc_switch_sections_basic_switch_basic_switch_component__WEBPACK_IMPORTED_MODULE_65__["BasicSwitchComponent"],
                _components_doc_switch_sections_disabled_switch_disabled_switch_component__WEBPACK_IMPORTED_MODULE_66__["DisabledSwitchComponent"],
                _components_doc_switch_sections_checked_switch_checked_switch_component__WEBPACK_IMPORTED_MODULE_67__["CheckedSwitchComponent"],
                _components_doc_switch_sections_changed_switch_changed_switch_component__WEBPACK_IMPORTED_MODULE_68__["ChangedSwitchComponent"],
                _components_doc_switch_sections_delayed_switch_delayed_switch_component__WEBPACK_IMPORTED_MODULE_69__["DelayedSwitchComponent"],
                _components_doc_form_wizard_sections_basic_form_wizard_basic_form_wizard_component__WEBPACK_IMPORTED_MODULE_75__["BasicFormWizardComponent"],
                _components_doc_form_wizard_sections_many_step_form_wizard_many_step_form_wizard_component__WEBPACK_IMPORTED_MODULE_76__["ManyStepFormWizardComponent"],
                _components_doc_form_wizard_sections_emit_event_paginate_change_form_wizard_emit_event_paginate_change_form_wizard_component__WEBPACK_IMPORTED_MODULE_77__["EmitEventPaginateChangeFormWizardComponent"],
                _components_doc_form_wizard_sections_disabled_submit_form_wizard_disabled_submit_form_wizard_component__WEBPACK_IMPORTED_MODULE_78__["DisabledSubmitFormWizardComponent"],
                _components_doc_form_wizard_sections_disabled_click_step_form_wizard_disabled_click_step_form_wizard_component__WEBPACK_IMPORTED_MODULE_79__["DisabledClickStepFormWizardComponent"],
                _components_doc_form_wizard_sections_custom_pagination_label_form_wizard_custom_pagination_label_form_wizard_component__WEBPACK_IMPORTED_MODULE_80__["CustomPaginationLabelFormWizardComponent"],
                _components_doc_form_wizard_sections_active_step_option_form_wizard_active_step_option_form_wizard_component__WEBPACK_IMPORTED_MODULE_81__["ActiveStepOptionFormWizardComponent"],
                _components_doc_form_wizard_sections_steps_option_form_wizard_steps_option_form_wizard_component__WEBPACK_IMPORTED_MODULE_82__["StepsOptionFormWizardComponent"],
                _components_doc_tooltip_sections_basic_tooltip_basic_tooltip_component__WEBPACK_IMPORTED_MODULE_84__["BasicTooltipComponent"],
                _components_doc_tooltip_sections_paragraph_tooltip_paragraph_tooltip_component__WEBPACK_IMPORTED_MODULE_85__["ParagraphTooltipComponent"],
                _components_doc_tooltip_sections_placement_tooltip_placement_tooltip_component__WEBPACK_IMPORTED_MODULE_86__["PlacementTooltipComponent"],
                _components_doc_tooltip_sections_dynamic_html_tooltip_dynamic_html_tooltip_component__WEBPACK_IMPORTED_MODULE_87__["DynamicHtmlTooltipComponent"],
                _components_doc_tooltip_sections_disabled_tooltip_disabled_tooltip_component__WEBPACK_IMPORTED_MODULE_88__["DisabledTooltipComponent"],
                _components_doc_chips_sections_basic_chip_basic_chip_component__WEBPACK_IMPORTED_MODULE_90__["BasicChipComponent"],
                _components_doc_chips_sections_disable_chip_disable_chip_component__WEBPACK_IMPORTED_MODULE_91__["DisableChipComponent"],
                _components_doc_chips_sections_vertical_chip_vertical_chip_component__WEBPACK_IMPORTED_MODULE_92__["VerticalChipComponent"],
                _components_doc_chips_sections_horizontal_chip_horizontal_chip_component__WEBPACK_IMPORTED_MODULE_93__["HorizontalChipComponent"],
                _components_doc_table_doc_table_component__WEBPACK_IMPORTED_MODULE_104__["DocTableComponent"],
                _components_doc_table_sections_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_105__["BasicTableComponent"],
                _components_doc_table_sections_table_with_checkbox_table_with_checkbox_component__WEBPACK_IMPORTED_MODULE_106__["TableWithCheckboxComponent"]
            ],
        })
    ], ShowcaseModule);
    return ShowcaseModule;
}());



/***/ }),

/***/ "./src/app/showcase/showcase.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/showcase/showcase.routing.ts ***!
  \**********************************************/
/*! exports provided: ShowcaseRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseRoutes", function() { return ShowcaseRoutes; });
/* harmony import */ var _components_doc_chips_doc_chips_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/doc-chips/doc-chips.component */ "./src/app/showcase/components/doc-chips/doc-chips.component.ts");
/* harmony import */ var _components_doc_button_doc_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/doc-button/doc-button.component */ "./src/app/showcase/components/doc-button/doc-button.component.ts");
/* harmony import */ var _components_doc_form_wizard_doc_form_wizard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/doc-form-wizard/doc-form-wizard.component */ "./src/app/showcase/components/doc-form-wizard/doc-form-wizard.component.ts");
/* harmony import */ var _components_doc_image_upload_doc_image_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/doc-image-upload/doc-image-upload.component */ "./src/app/showcase/components/doc-image-upload/doc-image-upload.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _showcase_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./showcase.component */ "./src/app/showcase/showcase.component.ts");
/* harmony import */ var _components_installation_installation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/installation/installation.component */ "./src/app/showcase/components/installation/installation.component.ts");
/* harmony import */ var _components_doc_pagination_doc_pagination_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/doc-pagination/doc-pagination.component */ "./src/app/showcase/components/doc-pagination/doc-pagination.component.ts");
/* harmony import */ var _components_doc_tabset_doc_tabset_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/doc-tabset/doc-tabset.component */ "./src/app/showcase/components/doc-tabset/doc-tabset.component.ts");
/* harmony import */ var _components_doc_infobox_doc_infobox_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/doc-infobox/doc-infobox.component */ "./src/app/showcase/components/doc-infobox/doc-infobox.component.ts");
/* harmony import */ var _components_doc_toast_doc_toast_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/doc-toast/doc-toast.component */ "./src/app/showcase/components/doc-toast/doc-toast.component.ts");
/* harmony import */ var _components_doc_information_doc_information_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/doc-information/doc-information.component */ "./src/app/showcase/components/doc-information/doc-information.component.ts");
/* harmony import */ var _components_doc_accordion_doc_accordion_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/doc-accordion/doc-accordion.component */ "./src/app/showcase/components/doc-accordion/doc-accordion.component.ts");
/* harmony import */ var _components_under_development_under_development_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/under-development/under-development.component */ "./src/app/showcase/components/under-development/under-development.component.ts");
/* harmony import */ var _components_doc_file_upload_doc_file_upload_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/doc-file-upload/doc-file-upload.component */ "./src/app/showcase/components/doc-file-upload/doc-file-upload.component.ts");
/* harmony import */ var _components_doc_switch_doc_switch_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/doc-switch/doc-switch.component */ "./src/app/showcase/components/doc-switch/doc-switch.component.ts");
/* harmony import */ var _components_doc_tooltip_doc_tooltip_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/doc-tooltip/doc-tooltip.component */ "./src/app/showcase/components/doc-tooltip/doc-tooltip.component.ts");
/* harmony import */ var _components_doc_table_doc_table_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/doc-table/doc-table.component */ "./src/app/showcase/components/doc-table/doc-table.component.ts");


















var routes = [
    {
        path: '',
        component: _showcase_component__WEBPACK_IMPORTED_MODULE_5__["ShowcaseComponent"],
        children: [
            {
                path: '',
                component: _components_installation_installation_component__WEBPACK_IMPORTED_MODULE_6__["InstallationComponent"]
            },
            {
                path: 'cooming-soon',
                component: _components_under_development_under_development_component__WEBPACK_IMPORTED_MODULE_13__["UnderDevelopmentComponent"]
            },
            {
                path: 'file-upload',
                component: _components_doc_file_upload_doc_file_upload_component__WEBPACK_IMPORTED_MODULE_14__["DocFileUploadComponent"]
            },
            {
                path: 'form-wizard',
                component: _components_doc_form_wizard_doc_form_wizard_component__WEBPACK_IMPORTED_MODULE_2__["DocFormWizardComponent"]
            },
            {
                path: 'image-upload',
                component: _components_doc_image_upload_doc_image_upload_component__WEBPACK_IMPORTED_MODULE_3__["DocImageUploadComponent"]
            },
            {
                path: 'accordion',
                component: _components_doc_accordion_doc_accordion_component__WEBPACK_IMPORTED_MODULE_12__["DocAccordionComponent"]
            },
            {
                path: 'button',
                component: _components_doc_button_doc_button_component__WEBPACK_IMPORTED_MODULE_1__["DocButtonComponent"]
            },
            {
                path: 'infobox',
                component: _components_doc_infobox_doc_infobox_component__WEBPACK_IMPORTED_MODULE_9__["DocInfoboxComponent"]
            },
            {
                path: 'information',
                component: _components_doc_information_doc_information_component__WEBPACK_IMPORTED_MODULE_11__["DocInformationComponent"]
            },
            {
                path: 'toast',
                component: _components_doc_toast_doc_toast_component__WEBPACK_IMPORTED_MODULE_10__["DocToastComponent"]
            },
            {
                path: 'installation',
                redirectTo: ''
            },
            {
                path: 'pagination',
                component: _components_doc_pagination_doc_pagination_component__WEBPACK_IMPORTED_MODULE_7__["DocPaginationComponent"]
            },
            {
                path: 'tabset',
                component: _components_doc_tabset_doc_tabset_component__WEBPACK_IMPORTED_MODULE_8__["DocTabsetComponent"]
            },
            {
                path: 'table',
                component: _components_doc_table_doc_table_component__WEBPACK_IMPORTED_MODULE_17__["DocTableComponent"]
            },
            {
                path: 'tooltip',
                component: _components_doc_tooltip_doc_tooltip_component__WEBPACK_IMPORTED_MODULE_16__["DocTooltipComponent"]
            },
            {
                path: 'chips',
                component: _components_doc_chips_doc_chips_component__WEBPACK_IMPORTED_MODULE_0__["DocChipsComponent"]
            },
            {
                path: 'switch',
                component: _components_doc_switch_doc_switch_component__WEBPACK_IMPORTED_MODULE_15__["DocSwitchComponent"]
            }
        ]
    },
    { path: '**', redirectTo: 'cooming-soon' },
];
var ShowcaseRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/showcase/templates/code-section/code-section.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/showcase/templates/code-section/code-section.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"code-sample-box\">\n  <tabset *ngIf=\"typescript && markup; else typescriptCode\">\n    <tab heading=\"Typescript\">\n    <pre class=\"pre-pilar\"><code [highlight]=\"typescript\"></code></pre>\n    </tab>\n    <tab heading='Markup'>\n      <pre class=\"pre-pilar\"><code [highlight]=\"markup\"></code></pre>\n    </tab>\n    <tab *ngIf=\"style\" heading='Css'>\n      <pre class=\"pre-pilar lang-bash\">{{style}}</pre>\n    </tab>\n  </tabset>\n  <ng-template #typescriptCode>\n    <pre class=\"pre-pilar\"><code [highlight]=\"typescript\"></code></pre>\n  </ng-template>\n</div>"

/***/ }),

/***/ "./src/app/showcase/templates/code-section/code-section.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/showcase/templates/code-section/code-section.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".code-sample-box {\n  margin-top: 10px;\n}"

/***/ }),

/***/ "./src/app/showcase/templates/code-section/code-section.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/showcase/templates/code-section/code-section.component.ts ***!
  \***************************************************************************/
/*! exports provided: CodeSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeSectionComponent", function() { return CodeSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CodeSectionComponent = /** @class */ (function () {
    function CodeSectionComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CodeSectionComponent.prototype, "markup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CodeSectionComponent.prototype, "typescript", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CodeSectionComponent.prototype, "style", void 0);
    CodeSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-code-section',
            template: __webpack_require__(/*! ./code-section.component.html */ "./src/app/showcase/templates/code-section/code-section.component.html"),
            styles: [__webpack_require__(/*! ./code-section.component.scss */ "./src/app/showcase/templates/code-section/code-section.component.scss")]
        })
    ], CodeSectionComponent);
    return CodeSectionComponent;
}());



/***/ }),

/***/ "./src/app/showcase/templates/component-header/component-header.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/showcase/templates/component-header/component-header.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"component-header\">\n  <p class=\"component-header-title\">{{title}}</p>\n  <span class=\"component-header-desc\">{{description}}</span>\n</div>"

/***/ }),

/***/ "./src/app/showcase/templates/component-header/component-header.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/showcase/templates/component-header/component-header.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".component-header {\n  width: 100%;\n  padding: 20px;\n}\n.component-header .component-header-title {\n  font-size: 28px;\n  margin: 0;\n}"

/***/ }),

/***/ "./src/app/showcase/templates/component-header/component-header.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/showcase/templates/component-header/component-header.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ComponentHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentHeaderComponent", function() { return ComponentHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComponentHeaderComponent = /** @class */ (function () {
    function ComponentHeaderComponent() {
    }
    ComponentHeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ComponentHeaderComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ComponentHeaderComponent.prototype, "description", void 0);
    ComponentHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-component-header',
            template: __webpack_require__(/*! ./component-header.component.html */ "./src/app/showcase/templates/component-header/component-header.component.html"),
            styles: [__webpack_require__(/*! ./component-header.component.scss */ "./src/app/showcase/templates/component-header/component-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ComponentHeaderComponent);
    return ComponentHeaderComponent;
}());



/***/ }),

/***/ "./src/app/showcase/templates/docs-api/docs-api.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/showcase/templates/docs-api/docs-api.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"api-docs-input\">\n  <h3 class=\"section-title\">API Documention</h3>\n  <h4 class=\"section-title api-title\">Properties</h4>\n  <div class=\"api-docs-table\">\n    <div class=\"api-docs-row\" *ngFor=\"let item of apiData.properties\">\n      <div class=\"table-cell text-lang\">{{item.name}}</div>\n      <div class=\"table-cell\">\n          <div class=\"property-type\">\n            Type: <span>{{item.type}}</span>\n          </div>\n          <div>Default: {{item.default}}</div>\n          <div class=\"docs-desc\">{{item.description}}</div>\n      </div>\n    </div>\n  </div>\n\n  <h4 class=\"section-title api-title\">Events</h4>\n  <div class=\"api-docs-table\">\n    <div class=\"api-docs-row\" *ngFor=\"let item of apiData.events\">\n      <div class=\"table-cell text-lang\">{{item.name}}</div>\n      <div class=\"table-cell\">\n          <div class=\"property-type\">\n            Type: <span>{{item.type}}</span>\n          </div>\n          <div>Default: {{item.default}}</div>\n          <div class=\"docs-desc\">{{item.description}}</div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/showcase/templates/docs-api/docs-api.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/showcase/templates/docs-api/docs-api.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".api-docs-input {\n  width: 100%;\n}\n.api-docs-input .api-title {\n  margin: 15px 0;\n}\n.api-docs-table {\n  width: 100%;\n  display: table;\n}\n.api-docs-table .api-docs-row {\n  display: table-row-group;\n}\n.api-docs-table .api-docs-row .table-cell {\n  border-top: 1px solid #e3e3e3;\n  padding: 5px;\n  display: table-cell;\n}\n@media screen and (max-width: 700px) {\n  .api-docs-table .api-docs-row .table-cell {\n    display: unset;\n    border: none;\n    padding: 0;\n  }\n}\n.api-docs-table .api-docs-row .table-cell .property-type span {\n  background: #e3e3e3;\n  color: #8994a3;\n  padding: 2px;\n  font-family: monospace, monospace;\n}\n.api-docs-table .api-docs-row .table-cell div {\n  padding: 5px 0;\n}\n@media screen and (max-width: 768px) {\n  .api-docs-table .api-docs-row .table-cell .docs-desc {\n    margin-bottom: 10px;\n  }\n}"

/***/ }),

/***/ "./src/app/showcase/templates/docs-api/docs-api.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/showcase/templates/docs-api/docs-api.component.ts ***!
  \*******************************************************************/
/*! exports provided: DocsApiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsApiComponent", function() { return DocsApiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DocsApiComponent = /** @class */ (function () {
    function DocsApiComponent() {
    }
    DocsApiComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DocsApiComponent.prototype, "apiData", void 0);
    DocsApiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-docs-api',
            template: __webpack_require__(/*! ./docs-api.component.html */ "./src/app/showcase/templates/docs-api/docs-api.component.html"),
            styles: [__webpack_require__(/*! ./docs-api.component.scss */ "./src/app/showcase/templates/docs-api/docs-api.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DocsApiComponent);
    return DocsApiComponent;
}());



/***/ }),

/***/ "./src/app/showcase/templates/docs-section/docs-section.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/showcase/templates/docs-section/docs-section.component.ts ***!
  \***************************************************************************/
/*! exports provided: DocsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsSectionComponent", function() { return DocsSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _showcase_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../showcase.directive */ "./src/app/showcase/showcase.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DocsSectionComponent = /** @class */ (function () {
    function DocsSectionComponent(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }
    Object.defineProperty(DocsSectionComponent.prototype, "demoComponent", {
        set: function (component) {
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
            this.adHost.viewContainerRef.createComponent(componentFactory);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DocsSectionComponent.prototype, "demoComponent", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_showcase_directive__WEBPACK_IMPORTED_MODULE_1__["ShowcaseDirective"]),
        __metadata("design:type", _showcase_directive__WEBPACK_IMPORTED_MODULE_1__["ShowcaseDirective"])
    ], DocsSectionComponent.prototype, "adHost", void 0);
    DocsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-docs-section',
            template: "<ng-template ugwShowCaseDirective></ng-template>"
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], DocsSectionComponent);
    return DocsSectionComponent;
}());



/***/ }),

/***/ "./src/app/showcase/templates/section/section.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/showcase/templates/section/section.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngFor=\"let section of sections\" id=\"{{section.anchor}}\">\n  <h3 class=\"section-title\" #sectionTitleRef>{{section.title}}</h3>\n  <p class=\"section-desc\">{{section.desc}}</p>\n  <ugw-docs-section [demoComponent]=\"section.component\"></ugw-docs-section>\n  <ugw-code-section [markup]=\"section.markup\" [typescript]=\"section.typescript\"></ugw-code-section>\n</section>\n<section #sectionTitleRef id=\"{{_apiDocSections.title}}-api-docs\">\n  <ugw-docs-api [apiData]=\"_apiDocSections\"></ugw-docs-api>\n</section>"

/***/ }),

/***/ "./src/app/showcase/templates/section/section.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/showcase/templates/section/section.component.ts ***!
  \*****************************************************************/
/*! exports provided: SectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionComponent", function() { return SectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _element_ref_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../element-ref.service */ "./src/app/showcase/element-ref.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SectionComponent = /** @class */ (function () {
    function SectionComponent(elementRefSvc) {
        this.elementRefSvc = elementRefSvc;
    }
    Object.defineProperty(SectionComponent.prototype, "apiDocSections", {
        set: function (apiDocumentations) {
            apiDocumentations.title = apiDocumentations.title.split(' ').join('-');
            this._apiDocSections = apiDocumentations;
        },
        enumerable: true,
        configurable: true
    });
    SectionComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.elementRefSvc.setSectionTitleCollectionRef(_this.sectionTitle);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('sectionTitleRef'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], SectionComponent.prototype, "sectionTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SectionComponent.prototype, "sections", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], SectionComponent.prototype, "apiDocSections", null);
    SectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ugw-section',
            template: __webpack_require__(/*! ./section.component.html */ "./src/app/showcase/templates/section/section.component.html")
        }),
        __metadata("design:paramtypes", [_element_ref_service__WEBPACK_IMPORTED_MODULE_1__["ElementRefService"]])
    ], SectionComponent);
    return SectionComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
    apiUrl: 'http://192.168.203.204'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bsi-luthfianggy/lib-uii-gateway-pilar-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map