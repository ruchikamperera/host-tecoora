"use strict";
(self["webpackChunksyndron"] = self["webpackChunksyndron"] || []).push([["src_app_components_staff_staff_module_ts-src_app_shared_constants_enums_action-names_ts-src_a-232d43"],{

/***/ 3837:
/*!*******************************************************************************!*\
  !*** ./src/app/components/staff/staff-dashboard/staff-dashboard.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaffDashboardComponent": () => (/* binding */ StaffDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);


class StaffDashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
StaffDashboardComponent.ɵfac = function StaffDashboardComponent_Factory(t) { return new (t || StaffDashboardComponent)(); };
StaffDashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StaffDashboardComponent, selectors: [["app-staff-dashboard"]], decls: 14, vars: 0, consts: [[1, "card", "radius-10", "m-5"], [1, "card-header"], [1, "row", "text-center", "m-5"], [1, "col"], ["type", "button", "routerLink", "appointment-calendar", 1, "btn-lg", "btn-outline-primary", "px-5", "radius-30", "home-button"], ["type", "button", "routerLink", "new-appointment", 1, "btn-lg", "btn-outline-primary", "px-5", "radius-30", "home-button"], ["type", "button", "routerLink", "payment", 1, "btn-lg", "btn-outline-primary", "px-5", "radius-30", "home-button"]], template: function StaffDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Appointment calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "New appointment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Finance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink], styles: [".card-header[_ngcontent-%COMP%] {\n  background-color: #001f49;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YWZmLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0oiLCJmaWxlIjoic3RhZmYtZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDFmNDk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 2232:
/*!**********************************************************!*\
  !*** ./src/app/components/staff/staff-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaffRoutingModule": () => (/* binding */ StaffRoutingModule)
/* harmony export */ });
/* harmony import */ var _staff_dashboard_staff_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staff-dashboard/staff-dashboard.component */ 3837);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _lawyer_appointment_calendar_appointment_calendar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lawyer/appointment-calendar/appointment-calendar.component */ 8234);
/* harmony import */ var _lawyer_new_appointment_new_appointment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lawyer/new-appointment/new-appointment.component */ 5414);
/* harmony import */ var _home_payment_payment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/payment/payment.component */ 9314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);







const routes = [
    { path: '', component: _staff_dashboard_staff_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.StaffDashboardComponent, data: { title: 'Dashboard' } },
    { path: 'appointment-calendar', component: _lawyer_appointment_calendar_appointment_calendar_component__WEBPACK_IMPORTED_MODULE_1__.AppointmentCalendarComponent, data: { title: 'Calendar' } },
    { path: 'new-appointment', component: _lawyer_new_appointment_new_appointment_component__WEBPACK_IMPORTED_MODULE_2__.NewAppointmentComponent, data: { title: 'New Appointment' } },
    { path: 'payment', component: _home_payment_payment_component__WEBPACK_IMPORTED_MODULE_3__.PaymentComponent, data: { title: 'Payment' } },
];
class StaffRoutingModule {
}
StaffRoutingModule.ɵfac = function StaffRoutingModule_Factory(t) { return new (t || StaffRoutingModule)(); };
StaffRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: StaffRoutingModule });
StaffRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](StaffRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 2117:
/*!**************************************************!*\
  !*** ./src/app/components/staff/staff.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaffModule": () => (/* binding */ StaffModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _staff_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staff-routing.module */ 2232);
/* harmony import */ var _staff_dashboard_staff_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./staff-dashboard/staff-dashboard.component */ 3837);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-calendar */ 9480);
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ 5406);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);







class StaffModule {
}
StaffModule.ɵfac = function StaffModule_Factory(t) { return new (t || StaffModule)(); };
StaffModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: StaffModule });
StaffModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _staff_routing_module__WEBPACK_IMPORTED_MODULE_0__.StaffRoutingModule,
            angular_calendar__WEBPACK_IMPORTED_MODULE_4__.CalendarModule.forRoot({
                provide: angular_calendar__WEBPACK_IMPORTED_MODULE_4__.DateAdapter,
                useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_5__.adapterFactory
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](StaffModule, { declarations: [_staff_dashboard_staff_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.StaffDashboardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _staff_routing_module__WEBPACK_IMPORTED_MODULE_0__.StaffRoutingModule, angular_calendar__WEBPACK_IMPORTED_MODULE_4__.CalendarModule] }); })();


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


/***/ })

}]);
//# sourceMappingURL=src_app_components_staff_staff_module_ts-src_app_shared_constants_enums_action-names_ts-src_a-232d43.js.map