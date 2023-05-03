"use strict";
(self["webpackChunksyndron"] = self["webpackChunksyndron"] || []).push([["src_app_components_account-settings_account-settings_module_ts"],{

/***/ 4723:
/*!********************************************************************************!*\
  !*** ./src/app/components/account-settings/account-settings-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountSettingsRoutingModule": () => (/* binding */ AccountSettingsRoutingModule)
/* harmony export */ });
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings/settings.component */ 7492);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    { path: '', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_0__.SettingsComponent, data: { title: 'Settings' } }
];
class AccountSettingsRoutingModule {
}
AccountSettingsRoutingModule.ɵfac = function AccountSettingsRoutingModule_Factory(t) { return new (t || AccountSettingsRoutingModule)(); };
AccountSettingsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AccountSettingsRoutingModule });
AccountSettingsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AccountSettingsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 1810:
/*!************************************************************************!*\
  !*** ./src/app/components/account-settings/account-settings.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountSettingsModule": () => (/* binding */ AccountSettingsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _account_settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-settings-routing.module */ 4723);
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings/settings.component */ 7492);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ 524);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ 5532);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);







class AccountSettingsModule {
}
AccountSettingsModule.ɵfac = function AccountSettingsModule_Factory(t) { return new (t || AccountSettingsModule)(); };
AccountSettingsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AccountSettingsModule });
AccountSettingsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _account_settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountSettingsRoutingModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModalModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AccountSettingsModule, { declarations: [_settings_settings_component__WEBPACK_IMPORTED_MODULE_1__.SettingsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _account_settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountSettingsRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModalModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule] }); })();


/***/ }),

/***/ 7492:
/*!****************************************************************************!*\
  !*** ./src/app/components/account-settings/settings/settings.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/constants/enums/toaster */ 7776);
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/user.service */ 8613);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var src_app_shared_services_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/file.service */ 2965);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ 5532);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ 524);










const _c0 = ["avatarImg"];
function SettingsComponent_div_6_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SettingsComponent_div_6_mat_icon_4_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r12.removePhoto(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SettingsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mouseleave", function SettingsComponent_div_6_Template_div_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r14.showAddPhotoOverlay = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SettingsComponent_div_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8); return ctx_r16.openFileInput(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "add_a_photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SettingsComponent_div_6_mat_icon_4_Template, 2, 0, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.photo && ctx_r1.photo !== "");
} }
function SettingsComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Consultation fee ($)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SettingsComponent_dt_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "dt", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "One hour");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SettingsComponent_dd_27_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "dd", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SettingsComponent_dd_27_Template_dd_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r17.oneHourFee = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r5.oneHourFee);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r5.user == null ? null : ctx_r5.user.consultationFeeForOneHour);
} }
function SettingsComponent_dt_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "dt", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Half an hour");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SettingsComponent_dd_29_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "dd", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SettingsComponent_dd_29_Template_dd_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r19.halfHourFee = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r7.halfHourFee);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.user == null ? null : ctx_r7.user.consultationFeeForHalfAndHour);
} }
function SettingsComponent_dt_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "dt", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Charging for extra minutes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SettingsComponent_dd_31_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "dd", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SettingsComponent_dd_31_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r21.isCharging = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r9.isCharging)("checked", ctx_r9.isCharging)("disabled", true);
} }
function SettingsComponent_form_45_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Consultation fee ($)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SettingsComponent_form_45_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "One hour");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SettingsComponent_form_45_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Half hour");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SettingsComponent_form_45_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function SettingsComponent_form_45_div_16_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r27.chargingChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Charging for extra minutes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx_r26.isCharging);
} }
function SettingsComponent_form_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Company name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, SettingsComponent_form_45_div_13_Template, 3, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, SettingsComponent_form_45_div_14_Template, 4, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, SettingsComponent_form_45_div_15_Template, 4, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, SettingsComponent_form_45_div_16_Template, 4, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r10.editForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r10.isStaff);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r10.isStaff);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r10.isStaff);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r10.isStaff);
} }
class SettingsComponent {
    constructor(userService, editBuilder, toaster, fileService) {
        this.userService = userService;
        this.editBuilder = editBuilder;
        this.toaster = toaster;
        this.fileService = fileService;
        this.isEdit = true;
        this.photoUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.showAddPhotoOverlay = false;
    }
    ngOnInit() {
        //need to pass actual logged in user id 
        this.userId = Number(localStorage.getItem("userId"));
        this.getProfileByLoggedInUserId(this.userId);
    }
    getProfileByLoggedInUserId(id) {
        //get userById endpoint
        this.userService.getUserById(id).subscribe((response) => {
            console.log(response, "user");
            this.user = response.data;
            this.name = this.user.firstName;
            this.state = this.user.state;
            this.companyName = this.user.companyName;
            this.oneHourFee = this.user.consultationFeeForOneHour;
            this.halfHourFee = this.user.consultationFeeForHalfAndHour;
            this.isCharging = this.user.chargingForExtraMin;
            this.photo = this.user.profileImageUrl;
            localStorage.setItem("profileImage", this.photo);
            if (this.user.userType == 'staff') {
                this.isStaff = true;
            }
            //fetch user fields to edit form
            this.createForm();
        });
    }
    createForm() {
        this.editForm = this.editBuilder.group({
            fName: [this.name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            fState: [this.state, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            fCompanyName: [this.companyName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            fHourCharge: [this.oneHourFee],
            fHalfHourCharge: [this.halfHourFee],
            fIsCharging: [this.isCharging]
        });
    }
    //set extra minute charging true or false
    chargingChange(evt) {
        this.isCharging = evt.target.checked;
    }
    //edit user profile
    saveEditedDetails() {
        let editedName = this.editForm.controls['fName'].value;
        let editedState = this.editForm.controls['fState'].value;
        let editedCompanyName = this.editForm.controls['fCompanyName'].value;
        let editedHourFee = this.editForm.controls['fHourCharge'].value;
        let editedHalfHourFee = this.editForm.controls['fHalfHourCharge'].value;
        let editedIsCharging = this.editForm.controls['fIsCharging'].value;
        if (this.editForm.controls['fName'].value != this.name
            || this.editForm.controls['fState'].value != this.state
            || this.editForm.controls['fCompanyName'].value != this.companyName
            || this.editForm.controls['fHourCharge'].value != this.oneHourFee
            || this.editForm.controls['fHalfHourCharge'].value != this.halfHourFee
            || this.editForm.controls['fIsCharging'].value != this.isCharging) {
            this.isEdit = true;
            let body = {
                id: this.user.id,
                firstName: editedName,
                lastName: this.user.lastName,
                userType: this.user.userType,
                email: this.user.email,
                companyName: editedCompanyName,
                dob: this.user.dob,
                studentType: this.user.studentType,
                state: editedState,
                noOfReviews: this.user.noOfReviews,
                yearsOfExperience: this.user.yearsOfExperience,
                consultationFeeForOneHour: editedHourFee,
                consultationFeeForHalfAndHour: editedHalfHourFee,
                chargingForExtraMin: editedIsCharging,
                profileImageUrl: this.photo
            };
            this.userService.updateUser(body).subscribe(res => {
                console.log(res, "update");
                this.getProfileByLoggedInUserId(this.user.id);
                this.toaster.success(src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterUpdateUser, src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterSuccess, {
                    timeOut: src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterTimeout,
                });
            }, error => {
                this.toaster.error(src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterUpdateUserError, src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterFailure, {
                    timeOut: src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterTimeout,
                });
            });
        }
        else {
            this.isEdit = false;
            this.toaster.success(src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterUpdateAsSame, src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterSuccess, {
                timeOut: src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterTimeout,
            });
        }
    }
    addPhoto(event) {
        const fileReader = new FileReader();
        fileReader.onload = () => {
            this.avatarImgElement.nativeElement.src = fileReader.result;
        };
        fileReader.readAsDataURL(event.target.files[0]);
        let image = event.target.files[0];
        let fileToUpload = event.target.files[0];
        const formData = new FormData();
        formData.append('file', fileToUpload, fileToUpload.name);
        console.log(image);
        // save the image in the back end database
        this.fileService.userFileUpload(formData).subscribe(res => {
            console.log(res, "image url");
            let url = res;
            this.photo = url;
            this.user.profileImageUrl = url;
            this.userService.updateUser(this.user).subscribe(res => {
                console.log(res, "updated user");
                localStorage.setItem("profileImage", this.photo);
                this.toaster.success(src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterUpdateUser, src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterSuccess, {
                    timeOut: src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterTimeout,
                });
                location.reload();
            });
        }, (error) => {
            console.log(error, 'error');
        });
    }
    openFileInput(fileInput) {
        fileInput.click();
        this.showAddPhotoOverlay = false;
    }
    removePhoto() {
        this.avatarImgElement.nativeElement.src = '';
        this.photo = null;
        this.user.profileImageUrl = this.photo;
        this.userService.updateUser(this.user).subscribe(res => {
            console.log(res, "updated user photo");
            localStorage.setItem("profileImage", this.photo);
            this.toaster.success(src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterUpdateUser, src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterSuccess, {
                timeOut: src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterTimeout,
            });
            location.reload();
        });
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_file_service__WEBPACK_IMPORTED_MODULE_2__.FileService)); };
SettingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], viewQuery: function SettingsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.avatarImgElement = _t.first);
    } }, outputs: { photoUpdated: "photoUpdated" }, decls: 52, vars: 16, consts: [[1, "card"], [1, "row", "g-0"], [1, "col-md-2", "p-5", "border-end"], ["id", "avatar-container"], ["id", "avatar-photo", "alt", "avatar photo", 1, "avatar-photo", 3, "src", "mouseenter"], ["avatarImg", ""], ["id", "add-photo-overlay", "class", "avatar-photo", 3, "mouseleave", 4, "ngIf"], ["type", "file", "name", "avatar", "accept", "image/png, image/jpeg", 2, "display", "none", 3, "change"], ["fileInput", ""], [1, "col-md-10"], [1, "card-body"], [1, "row"], [1, "col-sm-4"], ["ngDefaultControl", "", 1, "col-sm-8", 3, "ngModel", "ngModelChange"], ["class", "mt-3", 4, "ngIf"], ["class", "col-sm-4", 4, "ngIf"], ["class", "col-sm-8", "ngDefaultControl", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "col-sm-8", 4, "ngIf"], [1, "row", "row-cols-auto", "row-cols-1", "row-cols-md-3", "align-items-center"], [1, "col"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleLargeModal", 1, "btn", "btn-outline-primary"], ["id", "exampleLargeModal", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], ["class", "row g-3", 3, "formGroup", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], ["id", "add-photo-overlay", 1, "avatar-photo", 3, "mouseleave"], ["id", "add-avatar-photo-button", "mat-icon-button", "", 1, "center-positon-absolute", 3, "click"], ["id", "remove-avatar-photo-button", "matTooltip", "remove this photo", 3, "click", 4, "ngIf"], ["id", "remove-avatar-photo-button", "matTooltip", "remove this photo", 3, "click"], [1, "mt-3"], [1, "col-sm-8"], ["type", "checkbox", "id", "quantity", "ngDefaultControl", "", "value", "isCharging", 1, "checkbox-round", 3, "ngModel", "checked", "disabled", "ngModelChange"], [1, "row", "g-3", 3, "formGroup"], [1, "col-md-12"], ["for", "inputName", 1, "form-label"], ["type", "text", "formControlName", "fName", "id", "inputName", 1, "form-control"], ["for", "inputState", 1, "form-label"], ["type", "text", "formControlName", "fState", "id", "inputState", 1, "form-control"], ["for", "inputType", 1, "form-label"], ["type", "text", "formControlName", "fCompanyName", "id", "inputCompanyName", 1, "form-control"], [4, "ngIf"], ["class", "col-md-6", 4, "ngIf"], ["class", "col-md-12", 4, "ngIf"], [1, "col-md-6"], ["type", "text", "formControlName", "fHourCharge", "id", "inputCompanyName", 1, "form-control"], ["type", "text", "formControlName", "fHalfHourCharge", "id", "inputCompanyName", 1, "form-control"], ["type", "checkbox", "id", "quantity", "formControlName", "fIsCharging", "value", "isCharging", 1, "checkbox-round", "me-3", 3, "checked", "change"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "img", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mouseenter", function SettingsComponent_Template_img_mouseenter_4_listener() { return ctx.showAddPhotoOverlay = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SettingsComponent_div_6_Template, 5, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function SettingsComponent_Template_input_change_7_listener($event) { return ctx.addPhoto($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "dl", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "dt", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "dd", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_dd_ngModelChange_14_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "dt", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "dd", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_dd_ngModelChange_18_listener($event) { return ctx.state = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "dt", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Company name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "dd", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_dd_ngModelChange_22_listener($event) { return ctx.companyName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, SettingsComponent_div_25_Template, 3, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, SettingsComponent_dt_26_Template, 2, 0, "dt", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, SettingsComponent_dd_27_Template, 2, 2, "dd", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, SettingsComponent_dt_28_Template, 2, 0, "dt", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, SettingsComponent_dd_29_Template, 2, 2, "dd", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, SettingsComponent_dt_30_Template, 3, 0, "dt", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, SettingsComponent_dd_31_Template, 2, 3, "dd", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Update Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "h5", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Update Profile and Consultation Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, SettingsComponent_form_45_Template, 17, 5, "form", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_49_listener() { return ctx.saveEditedDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.photo && ctx.photo !== "" ? ctx.photo : "/assets/images/gallery/user_avatar.png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showAddPhotoOverlay);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.companyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.companyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isStaff);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isStaff);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isStaff);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isStaff);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isStaff);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isStaff);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isStaff);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.editForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_material__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName], styles: ["#avatar-container[_ngcontent-%COMP%] {\n  position: fixed;\n}\n\n#avatar-photo[_ngcontent-%COMP%], #add-photo-overlay[_ngcontent-%COMP%] {\n  height: 8rem;\n  width: 8rem;\n}\n\n#add-photo-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  z-index: 2;\n  background-color: rgba(233, 236, 239, 0.6);\n}\n\n#add-avatar-photo-button[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  color: #13293d;\n}\n\n#remove-avatar-photo-button[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  font-size: 20px;\n  top: 5%;\n  right: 5%;\n  z-index: 3;\n  color: white;\n  background-color: rgba(0, 0, 0, 0.57);\n  border-radius: 12px;\n}\n\n#remove-avatar-photo-button[_ngcontent-%COMP%]:hover {\n  background-color: #e74c3c;\n}\n\n.center-positon-absolute[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  \n  left: 50%;\n  \n  transform: translate(-50%, -50%);\n  \n  \n}\n\n.avatar-photo[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZUFBQTtBQUNEOztBQUVBOztFQUVDLFlBQUE7RUFDQSxXQUFBO0FBQ0Q7O0FBRUE7RUFDQyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsMENBQUE7QUFDRDs7QUFFQTtFQUNDLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFDRDs7QUFFQTtFQUNDLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0FBQ0Q7O0FBRUE7RUFDQyx5QkFBQTtBQUNEOztBQUVBO0VBQ0Msa0JBQUE7RUFDQSxRQUFBO0VBQ0Esc0VBQUE7RUFDQSxTQUFBO0VBQ0Esc0VBQUE7RUFDQSxnQ0FBQTtFQUNBLGlFQUFBO0VBQ0E7Ozs7O09BQUE7QUFNRDs7QUFFQTtFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwrR0FBQTtBQUNEIiwiZmlsZSI6InNldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2F2YXRhci1jb250YWluZXIge1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG5cclxuI2F2YXRhci1waG90byxcclxuI2FkZC1waG90by1vdmVybGF5IHtcclxuXHRoZWlnaHQ6IDhyZW07XHJcblx0d2lkdGg6IDhyZW07XHJcbn1cclxuXHJcbiNhZGQtcGhvdG8tb3ZlcmxheSB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMHB4O1xyXG5cdHotaW5kZXg6IDI7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzMsIDIzNiwgMjM5LCAwLjYpO1xyXG59XHJcblxyXG4jYWRkLWF2YXRhci1waG90by1idXR0b24ge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR6LWluZGV4OiAzO1xyXG5cdGNvbG9yOiAjMTMyOTNkO1xyXG59XHJcblxyXG4jcmVtb3ZlLWF2YXRhci1waG90by1idXR0b24ge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0d2lkdGg6IDIwcHg7XHJcblx0aGVpZ2h0OiAyMHB4O1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxuXHR0b3A6IDUlO1xyXG5cdHJpZ2h0OiA1JTtcclxuXHR6LWluZGV4OiAzO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTcpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuXHJcbiNyZW1vdmUtYXZhdGFyLXBob3RvLWJ1dHRvbjpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2U3NGMzYztcclxufVxyXG5cclxuLmNlbnRlci1wb3NpdG9uLWFic29sdXRlIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiA1MCU7XHJcblx0LyogcG9zaXRpb24gdGhlIHRvcCAgZWRnZSBvZiB0aGUgZWxlbWVudCBhdCB0aGUgbWlkZGxlIG9mIHRoZSBwYXJlbnQgKi9cclxuXHRsZWZ0OiA1MCU7XHJcblx0LyogcG9zaXRpb24gdGhlIGxlZnQgZWRnZSBvZiB0aGUgZWxlbWVudCBhdCB0aGUgbWlkZGxlIG9mIHRoZSBwYXJlbnQgKi9cclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHQvKiBUaGlzIGlzIGEgc2hvcnRoYW5kIG9mIHRyYW5zbGF0ZVgoLTUwJSkgYW5kIHRyYW5zbGF0ZVkoLTUwJSkgKi9cclxuXHQvKioqIEV4cGxhbmF0aW9uXHJcbiAgICBBZGRpbmcgdG9wL2xlZnQgb2YgNTAlIG1vdmVzIHRoZSB0b3AvbGVmdCBtYXJnaW4gZWRnZSBvZiB0aGUgZWxlbWVudCB0byB0aGUgbWlkZGxlIG9mIHRoZSBwYXJlbnQsIFxyXG4gICAgYW5kIHRyYW5zbGF0ZSgpIGZ1bmN0aW9uIHdpdGggdGhlIChuZWdhdGl2ZSkgdmFsdWUgb2YgLTUwJSBtb3ZlcyB0aGUgZWxlbWVudCBieSB0aGUgaGFsZiBvZiBpdHMgc2l6ZS4gXHJcbiAgICBIZW5jZSB0aGUgZWxlbWVudCB3aWxsIGJlIHBvc2l0aW9uZWQgYXQgdGhlIG1pZGRsZS5cclxuICAgIGxlYXJuIG1vcmU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzg1MDgyNzUvaG93LXRvLWNlbnRlci1hLXBvc2l0aW9uLWFic29sdXRlLWVsZW1lbnRcclxuICAgICoqL1xyXG59XHJcblxyXG4uYXZhdGFyLXBob3RvIHtcclxuXHRoZWlnaHQ6IDUwcHg7XHJcblx0d2lkdGg6IDUwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufSJdfQ== */"] });


/***/ }),

/***/ 7339:
/*!********************************************************!*\
  !*** ./src/app/shared/constants/enums/action-names.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiActionName": () => (/* binding */ ApiActionName)
/* harmony export */ });
var ApiActionName;
(function (ApiActionName) {
    ApiActionName["Login"] = "login";
    ApiActionName["GetUserById"] = "users";
    ApiActionName["GetUserByUserTypeOrSortByOrSerchByString"] = "users";
    ApiActionName["CreateUser"] = "user";
    ApiActionName["SignUp"] = "signUp";
    ApiActionName["UpdateUser"] = "user";
    ApiActionName["DeleteUserById"] = "user/id";
    ApiActionName["SendOTP"] = "sendOtp";
    ApiActionName["GetTimeSlotsByLawyerId"] = "timeslots/lawyerId";
    ApiActionName["CreateTimeSlot"] = "timeSlots";
    ApiActionName["GetStudentFormsByStudentId"] = "studentPointForms/studentId";
    ApiActionName["CreateStudentForm"] = "studentPointForms";
    ApiActionName["UpdateStudentForms"] = "studentPointForms";
    ApiActionName["DeleteStudentFormById"] = "studentPointForms/id";
    ApiActionName["GetCompanies"] = "companies";
    ApiActionName["CreateCompany"] = "company";
    ApiActionName["UpdateCompany"] = "company";
    ApiActionName["DeleteCompany"] = "company/id";
    ApiActionName["GetAppointments"] = "appointments";
    ApiActionName["CreateAppointments"] = "appointment";
    ApiActionName["UpdateAppointments"] = "appointments";
    ApiActionName["DeleteAppointment"] = "appointment/id";
    ApiActionName["GetAppointmentsByStatusOrLawyerId"] = "appointments";
    ApiActionName["AddLawyerRequestedFile"] = "lawyerRequestedFiles";
    ApiActionName["GetLawyerRequestedFile"] = "getUserRequestedFiles";
    ApiActionName["UserFileDetails"] = "userfiledetails";
    ApiActionName["UserFileUpload"] = "userFileUpload";
    ApiActionName["GetStudentUploadedFile"] = "getUserUploadedFile";
    ApiActionName["deleteUploadedFile"] = "userUploadedFile";
    ApiActionName["studentFileUpload"] = "studentFileUpload";
    ApiActionName["getPointForm"] = "questions";
    ApiActionName["getQuestion"] = "question";
})(ApiActionName || (ApiActionName = {}));


/***/ }),

/***/ 7776:
/*!***************************************************!*\
  !*** ./src/app/shared/constants/enums/toaster.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Message": () => (/* binding */ Message)
/* harmony export */ });
class Message {
}
Message.toasterTimeout = 5000;
Message.toasterSuccess = 'Success';
Message.toasterFailure = 'Failed';
Message.toasterSignUpSuccess = 'User Signup Success';
Message.toasterLoginSuccess = 'User Login.';
Message.toasterEmptyAppointment = 'No scheduled appointments.';
Message.toasterAppointmentError = 'Something wrong.';
Message.toasterAppointmentCancel = 'Appointment cancel.';
Message.toasterUpdateUser = 'Profile updated successfully.';
Message.toasterUpdateUserError = 'Profile update.';
Message.toasterUpdateAsSame = 'Same user profile';
Message.toasterSendOtp = 'Code sent successfully';
Message.toasterNotExistEmail = 'There is no user with entered email';
Message.toasterUserNormalSignIn = 'Please use the email and password to sign in';
Message.toasterNotStudent = 'You are not a student, please use the email and password to sign in';
Message.toasterSignInWithGoogle = 'You have sign in with google. please use google sign in';
Message.toasterSignInWithFacebook = 'You have sign in with facebook. please use facebook sign in';
Message.toasterInvalidAuthType = 'You signed in using social account. you can\'t proceed with password reset.';
Message.toasterNotExistOtp = 'Invalid code';
Message.toasterResetPassword = 'Reset password';
Message.toasterOtpValid = 'Code valid, continue password reset';
Message.fileSavedSuccess = 'File Saved Success';
Message.toasterCreateStaff = 'Staff created successfully.';
Message.toasterCreateStaffError = 'Staff create.';
Message.toasterDocumentRequest = 'Document request.';
Message.toasterDocumentUpload = 'Document upload.';
Message.toasterDocumentDelete = 'Document delete.';
Message.toasterPointFormSubmit = 'Point form submit.';
Message.toasterPointFormUpdate = 'Point form update.';
Message.toasterAttemptLimitExceed = 'Already submitted 3 times.';


/***/ }),

/***/ 9135:
/*!*****************************************************************!*\
  !*** ./src/app/shared/services/01_base-service/base.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseService": () => (/* binding */ BaseService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class BaseService {
    constructor() {
        this.baseApiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseApiUrl;
        this.getBaseUrl = (route) => {
            return `${this.baseApiUrl}/${route}`;
        };
    }
}
BaseService.ɵfac = function BaseService_Factory(t) { return new (t || BaseService)(); };
BaseService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BaseService, factory: BaseService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8613:
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _constants_enums_action_names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/enums/action-names */ 7339);
/* harmony import */ var _01_base_service_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./01_base-service/base.service */ 9135);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3882);




class UserService extends _01_base_service_base_service__WEBPACK_IMPORTED_MODULE_1__.BaseService {
    constructor(http) {
        super();
        this.http = http;
    }
    getUsers() {
        return this.http.get(this.getBaseUrl(_constants_enums_action_names__WEBPACK_IMPORTED_MODULE_0__.ApiActionName.GetUserById));
    }
    getUsersByType(user) {
        return this.http.post(this.getBaseUrl(_constants_enums_action_names__WEBPACK_IMPORTED_MODULE_0__.ApiActionName.GetUserByUserTypeOrSortByOrSerchByString), user);
    }
    createUser(user) {
        return this.http.post(this.getBaseUrl(_constants_enums_action_names__WEBPACK_IMPORTED_MODULE_0__.ApiActionName.SignUp), user);
    }
    updateUser(user) {
        return this.http.put(this.getBaseUrl(_constants_enums_action_names__WEBPACK_IMPORTED_MODULE_0__.ApiActionName.CreateUser), user);
    }
    signUpUser(user) {
        return this.http.post(this.getBaseUrl(_constants_enums_action_names__WEBPACK_IMPORTED_MODULE_0__.ApiActionName.SignUp), user);
    }
    getUserById(userId) {
        return this.http.get(this.getBaseUrl(`${_constants_enums_action_names__WEBPACK_IMPORTED_MODULE_0__.ApiActionName.GetUserById}/${userId}`));
    }
    emailSendOtp(email) {
        return this.http.get(this.getBaseUrl(`${email}/${_constants_enums_action_names__WEBPACK_IMPORTED_MODULE_0__.ApiActionName.SendOTP}`));
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_components_account-settings_account-settings_module_ts.js.map