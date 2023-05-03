"use strict";
(self["webpackChunksyndron"] = self["webpackChunksyndron"] || []).push([["src_app_components_visa-process-status_visa-process-status_module_ts"],{

/***/ 8339:
/*!***************************************************************************!*\
  !*** ./src/app/components/visa-process-status/status/status.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatusComponent": () => (/* binding */ StatusComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class StatusComponent {
    constructor() { }
    ngOnInit() {
    }
}
StatusComponent.ɵfac = function StatusComponent_Factory(t) { return new (t || StatusComponent)(); };
StatusComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatusComponent, selectors: [["app-status"]], decls: 2, vars: 0, template: function StatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "status works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0dXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6388:
/*!**************************************************************************************!*\
  !*** ./src/app/components/visa-process-status/visa-process-status-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisaProcessStatusRoutingModule": () => (/* binding */ VisaProcessStatusRoutingModule)
/* harmony export */ });
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./status/status.component */ 8339);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    { path: '', component: _status_status_component__WEBPACK_IMPORTED_MODULE_0__.StatusComponent, data: { title: 'status' } }
];
class VisaProcessStatusRoutingModule {
}
VisaProcessStatusRoutingModule.ɵfac = function VisaProcessStatusRoutingModule_Factory(t) { return new (t || VisaProcessStatusRoutingModule)(); };
VisaProcessStatusRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: VisaProcessStatusRoutingModule });
VisaProcessStatusRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VisaProcessStatusRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 565:
/*!******************************************************************************!*\
  !*** ./src/app/components/visa-process-status/visa-process-status.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisaProcessStatusModule": () => (/* binding */ VisaProcessStatusModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _visa_process_status_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visa-process-status-routing.module */ 6388);
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./status/status.component */ 8339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




class VisaProcessStatusModule {
}
VisaProcessStatusModule.ɵfac = function VisaProcessStatusModule_Factory(t) { return new (t || VisaProcessStatusModule)(); };
VisaProcessStatusModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: VisaProcessStatusModule });
VisaProcessStatusModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _visa_process_status_routing_module__WEBPACK_IMPORTED_MODULE_0__.VisaProcessStatusRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](VisaProcessStatusModule, { declarations: [_status_status_component__WEBPACK_IMPORTED_MODULE_1__.StatusComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _visa_process_status_routing_module__WEBPACK_IMPORTED_MODULE_0__.VisaProcessStatusRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_components_visa-process-status_visa-process-status_module_ts.js.map