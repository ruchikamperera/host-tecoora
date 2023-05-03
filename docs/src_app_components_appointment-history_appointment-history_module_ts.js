"use strict";
(self["webpackChunksyndron"] = self["webpackChunksyndron"] || []).push([["src_app_components_appointment-history_appointment-history_module_ts"],{

/***/ 7938:
/*!**************************************************************************************!*\
  !*** ./src/app/components/appointment-history/appointment-history-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppointmentHistoryRoutingModule": () => (/* binding */ AppointmentHistoryRoutingModule)
/* harmony export */ });
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history/history.component */ 8348);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    { path: '', component: _history_history_component__WEBPACK_IMPORTED_MODULE_0__.HistoryComponent, data: { title: 'history' } }
];
class AppointmentHistoryRoutingModule {
}
AppointmentHistoryRoutingModule.ɵfac = function AppointmentHistoryRoutingModule_Factory(t) { return new (t || AppointmentHistoryRoutingModule)(); };
AppointmentHistoryRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppointmentHistoryRoutingModule });
AppointmentHistoryRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppointmentHistoryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 1346:
/*!******************************************************************************!*\
  !*** ./src/app/components/appointment-history/appointment-history.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppointmentHistoryModule": () => (/* binding */ AppointmentHistoryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _appointment_history_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appointment-history-routing.module */ 7938);
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history/history.component */ 8348);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





class AppointmentHistoryModule {
}
AppointmentHistoryModule.ɵfac = function AppointmentHistoryModule_Factory(t) { return new (t || AppointmentHistoryModule)(); };
AppointmentHistoryModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppointmentHistoryModule });
AppointmentHistoryModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _appointment_history_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppointmentHistoryRoutingModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppointmentHistoryModule, { declarations: [_history_history_component__WEBPACK_IMPORTED_MODULE_1__.HistoryComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _appointment_history_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppointmentHistoryRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModule] }); })();


/***/ }),

/***/ 8348:
/*!*****************************************************************************!*\
  !*** ./src/app/components/appointment-history/history/history.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryComponent": () => (/* binding */ HistoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class HistoryComponent {
    constructor() { }
    ngOnInit() {
    }
}
HistoryComponent.ɵfac = function HistoryComponent_Factory(t) { return new (t || HistoryComponent)(); };
HistoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HistoryComponent, selectors: [["app-history"]], decls: 2, vars: 0, template: function HistoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This feature currently not available");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoaXN0b3J5LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_components_appointment-history_appointment-history_module_ts.js.map