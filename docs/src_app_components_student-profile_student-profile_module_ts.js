"use strict";
(self["webpackChunksyndron"] = self["webpackChunksyndron"] || []).push([["src_app_components_student-profile_student-profile_module_ts"],{

/***/ 4468:
/*!*************************************************************************!*\
  !*** ./src/app/components/student-profile/details/details.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsComponent": () => (/* binding */ DetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/user.service */ 8613);
/* harmony import */ var src_app_shared_services_student_point_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/student-point-form.service */ 250);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);





function DetailsComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Birthday :");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.selectedStudent == null ? null : ctx_r0.selectedStudent.dob);
} }
function DetailsComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DetailsComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r3.selectedStudent.profileImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function DetailsComponent_h4_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Point Calculator Sessions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DetailsComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DetailsComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DetailsComponent_div_30_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const session_r7 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.loadPointForm(session_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const session_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("session ", session_r7.attempt, "");
} }
class DetailsComponent {
    constructor(router, userService, studentPointFormService) {
        var _a;
        this.router = router;
        this.userService = userService;
        this.studentPointFormService = studentPointFormService;
        if (this.router.getCurrentNavigation().extras.state == null) {
            this.router.navigate(['/student-profile']);
        }
        else {
            this.studentId = (_a = this.router.getCurrentNavigation().extras.state) === null || _a === void 0 ? void 0 : _a.id;
        }
    }
    ngOnInit() {
        this.getStudentDetails();
    }
    getStudentDetails() {
        this.userService.getUserById(this.studentId).subscribe(res => {
            this.selectedStudent = res.data;
            if (this.selectedStudent.dob) {
                this.selectedStudent.dob = this.selectedStudent.dob.split('T')[0];
            }
            this.getAttempts(this.studentId);
        });
    }
    getAttempts(selectedStudent) {
        this.studentPointFormService.getStudentForms(selectedStudent).subscribe(res => {
            this.sessions = res.data;
            if (this.sessions.length == 0) {
                this.isEmptySessions = true;
            }
            else {
                this.isEmptySessions = false;
            }
        });
    }
    loadPointForm(session) {
        this.router.navigateByUrl('/student-profile/point-form', { state: { session: JSON.stringify(session) } });
    }
}
DetailsComponent.ɵfac = function DetailsComponent_Factory(t) { return new (t || DetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_student_point_form_service__WEBPACK_IMPORTED_MODULE_1__.StudentPointFormService)); };
DetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DetailsComponent, selectors: [["app-details"]], decls: 31, vars: 9, consts: [[1, "row"], [1, "col-12", "mx-auto"], [1, "mb-0", "text-uppercase"], [1, "card", "radius-10"], [1, "card-body"], [1, "col"], [1, "col-md-12"], ["for", "inputName", 1, "form-label"], [1, "name"], ["for", "inputEmail", 1, "form-label"], [1, "email"], ["class", "col-md-12", 4, "ngIf"], ["class", "col text-end", 4, "ngIf", "ngIfElse"], ["second", ""], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["for", "inputBirthday", 1, "form-label"], [1, "dob"], [1, "col", "text-end"], ["src", "/assets/images/gallery/user_avatar.png", "alt", "", "width", "90", "height", "90", 1, "rounded-circle", "p-1", "border"], ["alt", "", "width", "90", "height", "90", 1, "rounded-circle", "p-1", "border", 3, "src"], [1, "btn", "btn-success", "my-2", 3, "click"]], template: function DetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h6", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Student details");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Email :");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, DetailsComponent_div_22_Template, 6, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, DetailsComponent_div_23_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, DetailsComponent_ng_template_24_Template, 2, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, DetailsComponent_h4_28_Template, 2, 0, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, DetailsComponent_span_29_Template, 2, 0, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, DetailsComponent_div_30_Template, 3, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx.selectedStudent == null ? null : ctx.selectedStudent.firstName, " ", ctx.selectedStudent == null ? null : ctx.selectedStudent.lastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.selectedStudent == null ? null : ctx.selectedStudent.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.selectedStudent == null ? null : ctx.selectedStudent.dob) != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.selectedStudent == null ? null : ctx.selectedStudent.profileImageUrl) === null)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sessions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isEmptySessions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.sessions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], styles: [".name[_ngcontent-%COMP%] {\n  margin-left: 27px;\n}\n\n.email[_ngcontent-%COMP%] {\n  margin-left: 30px;\n}\n\n.dob[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0oiLCJmaWxlIjoiZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYW1le1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI3cHg7XHJcbn1cclxuXHJcbi5lbWFpbHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4uZG9ie1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 8786:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/student-profile/document-select/document-select.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentSelectComponent": () => (/* binding */ DocumentSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/constants/enums/toaster */ 7776);
/* harmony import */ var src_app_enum_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/enum/common */ 8760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _shared_services_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/file.service */ 2965);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 4461);
/* harmony import */ var img_pdf_viewer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! img-pdf-viewer */ 310);












function DocumentSelectComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "input", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function DocumentSelectComponent_tr_23_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r8.changeDate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function DocumentSelectComponent_tr_23_Template_input_change_10_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const i_r6 = restoredCtx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r10.onChange($event, i_r6 + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const document_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", document_r5.type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("minDate", ctx_r0.minDate);
} }
function DocumentSelectComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please select due date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DocumentSelectComponent_div_30_tr_19_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Submitted");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DocumentSelectComponent_div_30_tr_19_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DocumentSelectComponent_div_30_tr_19_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DocumentSelectComponent_div_30_tr_19_div_7_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const document_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](32); return ctx_r17.openFullscreen(_r3, document_r12.fileUrl); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DocumentSelectComponent_div_30_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, DocumentSelectComponent_div_30_tr_19_div_4_Template, 4, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, DocumentSelectComponent_div_30_tr_19_div_5_Template, 4, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, DocumentSelectComponent_div_30_tr_19_div_7_Template, 3, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const document_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", document_r12.fileType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !document_r12.isSubmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", document_r12.isSubmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !document_r12.isSubmitted);
} }
function DocumentSelectComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "thead", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, DocumentSelectComponent_div_30_tr_19_Template, 8, 4, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DocumentSelectComponent_div_30_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r20.add(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r2.documentForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.requestedDocuments);
} }
function DocumentSelectComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h4", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Modal title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DocumentSelectComponent_ng_template_31_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24); const modal_r22 = restoredCtx.$implicit; return modal_r22.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "ngx-imgPdf-viewer", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DocumentSelectComponent_ng_template_31_Template_button_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24); const modal_r22 = restoredCtx.$implicit; return modal_r22.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("documentURL", ctx_r4.url)("docPreviewConfig", ctx_r4.docPreviewConfig);
} }
class DocumentSelectComponent {
    constructor(documentBuilder, router, fileService, toaster, modalService, datePipe) {
        this.documentBuilder = documentBuilder;
        this.router = router;
        this.fileService = fileService;
        this.toaster = toaster;
        this.modalService = modalService;
        this.datePipe = datePipe;
        this.documents = [];
        this.submitObject = [];
        this.isSelectDate = true;
        this.dueDate = "";
        this.uploadedFiles = [];
        this.docPreviewConfig = {
            zoomIn: true,
            zoomOut: true,
            rotate: true,
            download: true,
            openModal: true,
            close: false,
            docScreenWidth: '100%',
            modalSize: 'md',
            customStyle: '',
            zoomIndicator: true,
        };
    }
    ngOnInit() {
        const date = new Date();
        this.minDate = new Date(this.datePipe.transform(date, "yyyy-MM-dd"));
        this.documents = [
            {
                id: 1,
                type: 'PaySlips',
            },
            {
                id: 2,
                type: 'Bachelor certificate',
            },
            {
                id: 3,
                type: 'Passport',
            },
            {
                id: 4,
                type: 'Australian/Home country driving license',
            },
        ];
        this.createForm();
        this.getUploadedDocuments(1, 1);
        this.getRequestedFiles(1, 1);
    }
    //To identify already requested file types
    getRequestedFiles(lawyerId, studentId) {
        let requestBody = {
            lawyerId: lawyerId,
            studentId: studentId
        };
        this.fileService.getUserRequestedFiles(requestBody).subscribe(res => {
            console.log(res, 'requested files');
            const seen = new Set();
            const arr = res.data;
            const filteredArr = arr.filter(el => {
                const duplicate = seen.has(el.fileType);
                seen.add(el.fileType);
                return !duplicate;
            });
            this.requestedDocuments = filteredArr;
            this.requestedDocuments.forEach(element => {
                this.uploadedFiles.forEach(value => {
                    if (value.fileType == element.fileType && value.fileUrl !== "") {
                        element.isSubmitted = true;
                        element.fileUrl = value.fileUrl;
                    }
                    else {
                        element.isSubmitted = false;
                    }
                });
            });
            this.requestedDocuments.forEach(element => {
                switch (element.fileType) {
                    case 1: {
                        return element.fileType = src_app_enum_common__WEBPACK_IMPORTED_MODULE_1__.FileType.case1;
                    }
                    case 2: {
                        return element.fileType = src_app_enum_common__WEBPACK_IMPORTED_MODULE_1__.FileType.case2;
                    }
                    case 3: {
                        return element.fileType = src_app_enum_common__WEBPACK_IMPORTED_MODULE_1__.FileType.case3;
                    }
                    case 4: {
                        return element.fileType = src_app_enum_common__WEBPACK_IMPORTED_MODULE_1__.FileType.case4;
                    }
                }
            });
            console.log(this.requestedDocuments, 'f list');
        }, (error) => {
            console.log(error);
        });
    }
    getUploadedDocuments(lawyerId, studentId) {
        let fileUploadedDetail = {
            lawyerId: lawyerId,
            studentId: studentId,
        };
        this.fileService.getUserUploadedFiles(fileUploadedDetail).subscribe(res => {
            this.uploadedFiles = res.data;
            console.log(res, 'uploaded');
        }, (error) => {
            console.log(error);
        });
        this.uploadedFiles.forEach(element => {
            switch (element.fileType) {
                case 1: {
                    return element.fileType = src_app_enum_common__WEBPACK_IMPORTED_MODULE_1__.FileType.case1;
                }
                case 2: {
                    return element.fileType = src_app_enum_common__WEBPACK_IMPORTED_MODULE_1__.FileType.case2;
                }
                case 3: {
                    return element.fileType = src_app_enum_common__WEBPACK_IMPORTED_MODULE_1__.FileType.case3;
                }
                case 4: {
                    return element.fileType = src_app_enum_common__WEBPACK_IMPORTED_MODULE_1__.FileType.case4;
                }
            }
        });
        this.uploadedFiles = this.uploadedFiles.filter(obj => obj.fileUrl !== null);
    }
    changeDate(event) {
        this.dueDate = event;
        if (this.dueDate == "") {
            this.isSelectDate = false;
        }
        else {
            this.isSelectDate = true;
        }
    }
    createForm() {
        this.documentForm = this.documentBuilder.group({
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            select: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        });
    }
    onChange(event, fileType) {
        if (event.target.checked == true) {
            let dueDate = this.dueDate;
            if (dueDate == "") {
                this.isSelectDate = false;
                event.target.checked = false;
            }
            else {
                this.isSelectDate = true;
                let oneObject = {
                    // TODO studentId, lawyerId need to be real value with signin integration
                    studentId: 1,
                    lawyerId: 1,
                    fileType: fileType,
                    dueDate: new Date(dueDate),
                    isDeleted: false,
                };
                this.submitObject.push(oneObject);
                dueDate = "";
                this.dueDate = "";
            }
        }
        else {
            this.submitObject = this.submitObject.filter(obj => obj.fileType !== fileType);
        }
    }
    request() {
        this.fileService
            .addLawyerRequestedFiles(this.submitObject)
            .subscribe((res) => {
            this.toaster.success(src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterDocumentRequest, src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterSuccess, {
                timeOut: src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterTimeout,
            });
            this.documentForm.reset();
            this.dueDate = "";
            this.submitObject = [];
        }, (error) => {
            this.toaster.error(src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterDocumentRequest, src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterFailure, {
                timeOut: src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterTimeout,
            });
            this.documentForm.reset();
            this.dueDate = "";
            this.submitObject = [];
        });
    }
    uploadedDocuments() {
        this.isClickUploaded = !this.isClickUploaded;
    }
    viewDocument(url) {
        this.router.navigate(['/document-view']);
    }
    // cancel() {
    //   this.router.navigate(['/lawyer-dashboard']);
    // }
    add() {
    }
    openFullscreen(content, url) {
        this.url = "https://tecoorastorage.blob.core.windows.net/tecoora-files/91e28f7c-ad22-4efd-b1da-0ce6d2158253.png";
        this.modalService.open(content);
    }
}
DocumentSelectComponent.ɵfac = function DocumentSelectComponent_Factory(t) { return new (t || DocumentSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_file_service__WEBPACK_IMPORTED_MODULE_2__.FileService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe)); };
DocumentSelectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DocumentSelectComponent, selectors: [["app-document-select"]], decls: 33, vars: 5, consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-12", "d-flex"], [1, "card", "radius-10", "w-100"], [1, "card-body"], [1, "d-flex", "align-items-center"], [1, "mb-1"], [1, "font-22", "ms-auto"], [1, "table", "mt-4"], [3, "formGroup"], ["id", "Transaction-History", 1, "table", "align-middle", "mb-0", "table-hover"], [1, "table-light"], [4, "ngFor", "ngForOf"], [1, "row", "justify-content-end", "mt-3", "mb-3"], [1, "col-6"], ["class", "error", 4, "ngIf"], [1, "col", "text-end"], ["type", "button", 1, "btn", "btn-outline-green", 3, "disabled", "click"], ["class", "col d-flex", 4, "ngIf"], ["content", ""], [1, "input-group"], ["type", "text", "formControlName", "date", "placeholder", "dd/mm/yyyy", "bsDatepicker", "", 1, "form-control", 3, "minDate", "ngModelChange"], ["dp", "bsDatepicker"], [1, "form-check"], ["formControlName", "select", "type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input", 3, "change"], [1, "form-check-label"], [1, "error"], [1, "col", "d-flex"], [1, "col", "text-center", "mt-3"], [1, "table-responsive", "mt-4"], [1, "col-1", "text-end"], ["type", "button", 1, "btn", "btn-outline-green", 3, "click"], ["class", "d-flex align-items-center text-success", 4, "ngIf"], ["class", "d-flex align-items-center text-danger", 4, "ngIf"], [4, "ngIf"], [1, "d-flex", "align-items-center", "text-success"], [1, "bx", "bx-radio-circle-marked", "bx-burst", "bx-rotate-90", "align-middle", "font-18", "me-1"], [1, "d-flex", "align-items-center", "text-danger"], [1, "btn", "button", "btn-download", 3, "click"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "documentURL", "docPreviewConfig"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", 3, "click"]], template: function DocumentSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Select which documents are required by the student");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "student name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "thead", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Due date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, DocumentSelectComponent_tr_23_Template, 12, 2, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, DocumentSelectComponent_div_26_Template, 2, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DocumentSelectComponent_Template_button_click_28_listener() { return ctx.request(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, DocumentSelectComponent_div_30_Template, 24, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, DocumentSelectComponent_ng_template_31_Template, 9, 2, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.documentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.documents);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isSelectDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.documentForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isClickUploaded);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_3__.BsDatepickerInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_3__.BsDatepickerDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxControlValueAccessor, img_pdf_viewer__WEBPACK_IMPORTED_MODULE_10__.ImgPdfViewerComponent], styles: [".btn-cancel[_ngcontent-%COMP%] {\n  padding-right: 0px;\n}\n\n.btn-download[_ngcontent-%COMP%] {\n  color: navy;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50LXNlbGVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0oiLCJmaWxlIjoiZG9jdW1lbnQtc2VsZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1jYW5jZWwge1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcblxyXG4uYnRuLWRvd25sb2Fke1xyXG4gICAgY29sb3I6IG5hdnk7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 402:
/*!*******************************************************************************!*\
  !*** ./src/app/components/student-profile/point-form/point-form.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PointFormComponent": () => (/* binding */ PointFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var src_app_enum_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enum/common */ 8760);
/* harmony import */ var src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/constants/enums/toaster */ 7776);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var src_app_shared_services_question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/question.service */ 8505);
/* harmony import */ var src_app_shared_services_student_point_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/student-point-form.service */ 250);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ 4183);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _selected_documents_selected_documents_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../selected-documents/selected-documents.component */ 6802);












const _c0 = ["modalContent"];
function PointFormComponent_div_4_div_13_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](question_r6 == null ? null : question_r6.point);
} }
const _c1 = function () { return { standalone: true }; };
function PointFormComponent_div_4_div_13_label_11_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function PointFormComponent_div_4_div_13_label_11_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const question_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; return question_r6.selected = $event; })("change", function PointFormComponent_div_4_div_13_label_11_Template_input_change_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const i_r13 = restoredCtx.index; const index_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r17.onChangeTypeTwo(index_r7, i_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const question_r6 = ctx_r19.$implicit;
    const index_r7 = ctx_r19.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", question_r6.selected)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](7, _c1))("name", index_r7)("id", index_r7 + i_r13)("value", i_r13)("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", answer_r12.name, "");
} }
function PointFormComponent_div_4_div_13_span_19_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PointFormComponent_div_4_div_13_span_19_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21); const question_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](8); return ctx_r20.viewEditedInstructions(_r3, question_r6.instructions); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Edited");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PointFormComponent_div_4_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, PointFormComponent_div_4_div_13_div_7_Template, 3, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, PointFormComponent_div_4_div_13_label_11_Template, 4, 8, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Instructions:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, PointFormComponent_div_4_div_13_span_19_Template, 2, 0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "textarea", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function PointFormComponent_div_4_div_13_Template_textarea_ngModelChange_21_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24); const question_r6 = restoredCtx.$implicit; return question_r6.comment = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Alert:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function PointFormComponent_div_4_div_13_Template_input_ngModelChange_25_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24); const question_r6 = restoredCtx.$implicit; return question_r6.alert = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r6 = ctx.$implicit;
    const index_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", index_r7 + 1, ". ", question_r6.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", question_r6.point != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", question_r6.answers);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", question_r6.instructions.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", question_r6.comment)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", question_r6.alert)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](10, _c1));
} }
function PointFormComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, PointFormComponent_div_4_div_13_Template, 26, 11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, " Points total: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Summary plan");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "textarea", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function PointFormComponent_div_4_Template_textarea_ngModelChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r26.summary = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PointFormComponent_div_4_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](6); return ctx_r28.requestDocuments(_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PointFormComponent_div_4_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r29.update(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Update form");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.visaType);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.formType);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.pointForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.summary);
} }
function PointFormComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h4", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PointFormComponent_ng_template_5_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r30.bsModalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "app-selected-documents", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PointFormComponent_ng_template_5_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r32.bsModalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("session", ctx_r2.session);
} }
function PointFormComponent_ng_template_7_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const instruction_r34 = ctx.$implicit;
    const i_r35 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r35 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](instruction_r34.comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](instruction_r34.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](instruction_r34.time);
} }
function PointFormComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h4", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Instruction History");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PointFormComponent_ng_template_7_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r36.bsModalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "table", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Instruction");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, PointFormComponent_ng_template_7_tr_20_Template, 9, 4, "tr", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PointFormComponent_ng_template_7_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r38.bsModalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r4.instructions);
} }
class PointFormComponent {
    constructor(router, questionService, studentPointFromService, toaster, modalService) {
        var _a;
        this.router = router;
        this.questionService = questionService;
        this.studentPointFromService = studentPointFromService;
        this.toaster = toaster;
        this.modalService = modalService;
        this.pointForm = [];
        this.total = 0;
        this.updatedAnswers = [];
        if (this.router.getCurrentNavigation().extras.state == null) {
            this.router.navigate(['/student-profile']);
        }
        else {
            this.session = JSON.parse((_a = this.router.getCurrentNavigation().extras.state) === null || _a === void 0 ? void 0 : _a.session);
            this.summary = this.session.summaryPlan;
        }
    }
    ngOnInit() {
        for (let i = 0; i < this.session.criterias.length; i++) {
            if (this.session.criterias[i].instructions.length > 1) {
                this.session.criterias[i].instructions = this.session.criterias[i].instructions.sort((b, a) => new Date(a.addedDate).getTime() - new Date(b.addedDate).getTime());
            }
        }
        switch (this.session.formTypeId) {
            case 1: {
                this.formType = src_app_enum_common__WEBPACK_IMPORTED_MODULE_0__.FormType.one;
                this.visaType = src_app_enum_common__WEBPACK_IMPORTED_MODULE_0__.VisaType.australian;
                break;
            }
            case 2: {
                this.formType = src_app_enum_common__WEBPACK_IMPORTED_MODULE_0__.FormType.two;
                this.visaType = src_app_enum_common__WEBPACK_IMPORTED_MODULE_0__.VisaType.australian;
                break;
            }
            case 3: {
                this.formType = src_app_enum_common__WEBPACK_IMPORTED_MODULE_0__.FormType.tree;
                this.visaType = src_app_enum_common__WEBPACK_IMPORTED_MODULE_0__.VisaType.australian;
                break;
            }
            case 4: {
                this.formType = src_app_enum_common__WEBPACK_IMPORTED_MODULE_0__.FormType.four;
                this.visaType = src_app_enum_common__WEBPACK_IMPORTED_MODULE_0__.VisaType.australian;
                break;
            }
            case 5: {
                this.formType = "";
                this.visaType = src_app_enum_common__WEBPACK_IMPORTED_MODULE_0__.VisaType.canberra;
                break;
            }
        }
        this.clickOneSession(this.session.formTypeId);
    }
    clickOneSession(selectedSessionId) {
        this.questionService.getPointForm(selectedSessionId).subscribe(res => {
            this.questions = res.data;
            this.questions.forEach(question => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
                this.questionList = this.session.criterias.filter(obj => obj.questionId === question.id);
                (_a = this.questionList[0]) === null || _a === void 0 ? void 0 : _a.instructions.forEach(element => {
                    const dateTimeString = element.addedDate;
                    const dateTime = new Date(dateTimeString);
                    element.date = dateTime.toDateString();
                    element.time = dateTime.toLocaleTimeString();
                });
                let viewQuestion = {
                    id: question.id,
                    name: question.name,
                    answers: question.answers,
                    selected: (_b = this.questionList[0]) === null || _b === void 0 ? void 0 : _b.answersId,
                    alert: (_d = (_c = this.questionList[0]) === null || _c === void 0 ? void 0 : _c.alert) === null || _d === void 0 ? void 0 : _d.split('T')[0],
                    comment: (_f = (_e = this.questionList[0]) === null || _e === void 0 ? void 0 : _e.instructions[0]) === null || _f === void 0 ? void 0 : _f.comment,
                    point: (_h = question.answers[(_g = this.questionList[0]) === null || _g === void 0 ? void 0 : _g.answersId]) === null || _h === void 0 ? void 0 : _h.points,
                    cId: (_j = this.questionList[0]) === null || _j === void 0 ? void 0 : _j.id,
                    instructions: (_k = this.questionList[0]) === null || _k === void 0 ? void 0 : _k.instructions
                };
                this.pointForm.push(viewQuestion);
            });
            this.total = 0;
            this.pointForm.forEach(e => {
                this.total = this.total + e.point;
            });
        });
    }
    update() {
        this.updatedAnswers = [];
        this.pointForm.forEach(element => {
            this.session.criterias.forEach(beforeEdit => {
                var _a;
                if (beforeEdit.id == element.cId) {
                    let instruction = [];
                    let comment = (_a = beforeEdit.instructions[0]) === null || _a === void 0 ? void 0 : _a.comment;
                    if ((element.comment !== null && element.comment !== "") && comment !== element.comment) {
                        instruction = [{
                                studentId: this.session.studentUserId,
                                studentPointFormId: this.session.formTypeId,
                                lawyerId: this.session.createLawyerId,
                                comment: element.comment,
                                addedDate: new _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe('en-US').transform(new Date(), 'yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\''),
                                attempt: this.session.attempt
                            }];
                        let criteria = {
                            id: element.cId,
                            questionId: element.id,
                            answersId: element.selected,
                            instructions: instruction,
                            alert: new _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe('en-US').transform(element.alert, 'yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\'')
                        };
                        let toBeUpdatedInstruction = [];
                        if (criteria.instructions[0]) {
                            toBeUpdatedInstruction.push(criteria.instructions[0]);
                        }
                        criteria.instructions = toBeUpdatedInstruction;
                        this.updatedAnswers.push(criteria);
                    }
                }
            });
        });
        this.studentPointFromService.updateStudentForms(this.session.id, this.session.attempt, this.session.studentUserId, this.session.createLawyerId, this.session.formTypeId, this.summary, this.updatedAnswers).subscribe(res => {
            this.toaster.success(src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_1__.Message.toasterPointFormUpdate, src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_1__.Message.toasterSuccess, {
                timeOut: src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_1__.Message.toasterTimeout,
            });
            this.router.navigateByUrl('/student-profile/details', { state: { id: this.session.studentUserId } });
        });
    }
    requestDocuments(template) {
        this.bsModalRef = this.modalService.show(template, {
            class: 'modal-dialog-centered modal-lg', // Change this line to set the size and position of the modal
        });
    }
    viewEditedInstructions(content, instructions) {
        this.instructions = instructions.filter((instruction) => instruction.comment !== "" && instruction.comment !== null);
        this.bsModalRef = this.modalService.show(content, {
            class: 'modal-dialog-centered modal-lg', // Change this line to set the size and position of the modal
        });
    }
}
PointFormComponent.ɵfac = function PointFormComponent_Factory(t) { return new (t || PointFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_question_service__WEBPACK_IMPORTED_MODULE_2__.QuestionService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_student_point_form_service__WEBPACK_IMPORTED_MODULE_3__.StudentPointFormService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__.BsModalService)); };
PointFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: PointFormComponent, selectors: [["app-point-form"]], viewQuery: function PointFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.modalContent = _t.first);
    } }, decls: 9, vars: 2, consts: [[1, "row", "g-3", "my-3"], [1, "col", "text-center"], [4, "ngIf"], ["template", ""], ["content", ""], [1, "row", "card-title", "g-3", "mb-3", "d-flex", "align-items-center"], [1, "mb-0", "text-primary", "text-center"], [1, "col"], [1, "card", "border-top", "border-0", "border-4", "border-primary"], [1, "card-body", "p-5"], [1, "row", "g-3"], ["class", "\n            mb-3", 4, "ngFor", "ngForOf"], [1, "row", "py-5"], [1, "col-md-10", "text-total"], [1, "col-md-2", "text-end"], [1, "point"], [1, "row", "pb-3"], [1, "col-md-12"], ["for", "text-input", 1, "py-2"], ["name", "myTextArea", "placeholder", "Enter summary plan", "rows", "5", 1, "summary", 3, "ngModel", "ngModelChange"], [1, "row", "d-flex", "my-3"], [1, "align-buttons"], ["type", "button", 1, "btn", "btn-outline-primary", "me-2", 3, "click"], ["type", "button", 1, "btn", "btn-outline-green", 3, "click"], [1, "mb-3"], [1, "row"], [1, "col-10"], [1, "text", "mb-2"], ["class", "col-2 text-end", 4, "ngIf"], ["class", "py-1", 4, "ngFor", "ngForOf"], [1, "row", "py-3"], [1, "col-md-10"], [1, "col-md-6"], [1, "form-group"], ["for", "text-input", 1, "m-1"], ["class", "badge bg-edit", 3, "click", 4, "ngIf"], ["name", "myTextArea", "placeholder", "Enter instructions", "rows", "2", 1, "instruction", "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "date-input", 1, "m-1"], ["id", "date-input", "type", "date", "max", "maxDate", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "col-2", "text-end"], [1, "py-1"], ["type", "radio", 3, "ngModel", "ngModelOptions", "name", "id", "value", "disabled", "ngModelChange", "change"], [1, "badge", "bg-edit", 3, "click"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "session"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click"], [1, "modal-body", "body-size"], [1, "table", "mb-0", "table-striped"], ["scope", "col"], [4, "ngFor", "ngForOf"]], template: function PointFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, PointFormComponent_div_4_Template, 33, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, PointFormComponent_ng_template_5_Template, 12, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, PointFormComponent_ng_template_7_Template, 24, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Session ", ctx.session == null ? null : ctx.session.attempt, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.questions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RadioControlValueAccessor, _selected_documents_selected_documents_component__WEBPACK_IMPORTED_MODULE_5__.SelectedDocumentsComponent], styles: [".point[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: auto;\n  visibility: visible;\n  background-color: #472c8c;\n  color: white;\n  border-radius: 50%;\n  transform: rotateY(360deg);\n  padding: 0.2em;\n  font-size: 1.5em;\n  transition: transform 750ms ease-in-out;\n  margin-top: 0.5em;\n  min-width: 2em;\n  position: relative;\n  margin: 0em 0 0 0;\n  text-align: center;\n}\n\n.text-total[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  font-weight: bold;\n  align-self: end;\n}\n\n.summary[_ngcontent-%COMP%] {\n  min-width: 200px;\n  width: inherit;\n}\n\n.align-buttons[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.bg-edit[_ngcontent-%COMP%] {\n  background-color: #472c8c;\n  color: white;\n  cursor: pointer;\n}\n\n.body-size[_ngcontent-%COMP%] {\n  max-height: 300px;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvaW50LWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJwb2ludC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvaW50e1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjU3LCA1MiUsIDM2JSwgMSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKTtcclxuICAgIHBhZGRpbmc6IDAuMmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA3NTBtcyBlYXNlLWluLW91dDtcclxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xyXG4gICAgbWluLXdpZHRoOiAyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDBlbSAwIDAgMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRleHQtdG90YWx7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XHJcbn1cclxuXHJcbi5zdW1tYXJ5e1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG59XHJcblxyXG4uYWxpZ24tYnV0dG9uc3tcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uYmctZWRpdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjU3LCA1MiUsIDM2JSwgMSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5ib2R5LXNpemUge1xyXG4gICAgbWF4LWhlaWdodDogMzAwcHg7IFxyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufSJdfQ== */"] });


/***/ }),

/***/ 4160:
/*!*************************************************************************!*\
  !*** ./src/app/components/student-profile/profile/profile.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_student_point_form_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/student-point-form.service */ 250);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var src_app_shared_services_appointment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/appointment.service */ 7535);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ 7483);






function ProfileComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Empty student profiles");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProfileComponent_tr_20_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProfileComponent_tr_20_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const student_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", student_r2.user.profileImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function ProfileComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProfileComponent_tr_20_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const student_r2 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.studentDetails(student_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ProfileComponent_tr_20_div_3_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ProfileComponent_tr_20_ng_template_4_Template, 2, 1, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const student_r2 = ctx.$implicit;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", student_r2.user.profileImageUrl === null)("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", student_r2.user.firstName, " ", student_r2.user.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](student_r2.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](student_r2.user.companyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](student_r2.user.state);
} }
const _c0 = function (a1) { return { itemsPerPage: 10, currentPage: a1, id: "1" }; };
class ProfileComponent {
    constructor(studentPointFormService, router, appointmentService) {
        this.studentPointFormService = studentPointFormService;
        this.router = router;
        this.appointmentService = appointmentService;
        this.filterValue = [];
    }
    ngOnInit() {
        this.userId = Number(localStorage.getItem("userId"));
        this.getStudentListFromAppointment();
    }
    getStudentListFromAppointment() {
        let requestBody = {
            lawyerId: this.userId
        };
        this.appointmentService.getAppointmentsByStatusOrLawyerId(requestBody).subscribe(res => {
            var _a;
            if (!((_a = res.data) === null || _a === void 0 ? void 0 : _a.length)) {
                this.isEmpty = true;
            }
            console.log(res, "appointment list");
            let user = [];
            user = res.data;
            let result = user === null || user === void 0 ? void 0 : user.filter((item, i, arr) => arr.findIndex((t) => t.studentId === item.studentId) === i);
            this.students = result;
            this.filterValue = this.students;
        });
    }
    filterByText(initial) {
        this.students = this.filterValue;
        this.students = this.students.filter(i => i.firstName.toLowerCase().indexOf(initial.toLocaleLowerCase()) !== -1);
        console.log(this.students);
    }
    studentDetails(student) {
        console.log(student, 'selected student');
        if (student.dob) {
            student.dob = student.dob.split('T')[0];
        }
        this.selectedStudent = student;
        this.router.navigateByUrl('/student-profile/details', { state: { id: student.user.id } });
        this.getAttempts(student.id);
    }
    getAttempts(selectedStudent) {
        this.studentPointFormService.getStudentForms(selectedStudent).subscribe(res => {
            console.log(res, "attempts");
            this.sessions = res.data;
        });
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_student_point_form_service__WEBPACK_IMPORTED_MODULE_0__.StudentPointFormService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_appointment_service__WEBPACK_IMPORTED_MODULE_1__.AppointmentService)); };
ProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 23, vars: 7, consts: [[1, "mb-0", "text-uppercase"], [1, "row", "my-3", "justify-content-end"], [1, "col-4"], ["type", "text", "placeholder", "Search by name", 1, "form-control", 3, "keyup"], [4, "ngIf"], [1, "card", "radius-10"], [1, "card-body"], [1, "table-responsive", "mt-4"], ["id", "Transaction-History", 1, "table", "align-middle", "mb-0", "table-hover"], [1, "table-light"], ["class", "clickable", 3, "click", 4, "ngFor", "ngForOf"], ["id", "1", "maxSize", "10", "directionLinks", "true", "autoHide", "true", 3, "pageChange"], [1, "clickable", 3, "click"], [1, "d-flex", "align-items-center"], ["class", "", 4, "ngIf", "ngIfElse"], ["second", ""], [1, "ms-2"], [1, "mb-1", "font-14"], [1, "mb-0", "font-13", "text-secondary"], [1, ""], ["src", "/assets/images/gallery/user_avatar.png", "alt", "", "width", "46", "height", "46", 1, "rounded-circle"], ["alt", "", "width", "46", "height", "46", 1, "rounded-circle", 3, "src"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h6", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Student list");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function ProfileComponent_Template_input_keyup_5_listener($event) { return ctx.filterByText($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ProfileComponent_div_6_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "thead", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Student Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, ProfileComponent_tr_20_Template, 15, 7, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "pagination-controls", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("pageChange", function ProfileComponent_Template_pagination_controls_pageChange_22_listener($event) { return ctx.page = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isEmpty);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](21, 2, ctx.students, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, ctx.page)));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.PaginationControlsComponent], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.PaginatePipe], styles: [".clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0oiLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGlja2FibGV7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 6802:
/*!***********************************************************************************************!*\
  !*** ./src/app/components/student-profile/selected-documents/selected-documents.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectedDocumentsComponent": () => (/* binding */ SelectedDocumentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/constants/enums/toaster */ 7776);
/* harmony import */ var src_app_enum_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/enum/common */ 8760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _shared_services_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/file.service */ 2965);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ 4183);
/* harmony import */ var img_pdf_viewer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! img-pdf-viewer */ 310);
/* harmony import */ var _document_select_document_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../document-select/document-select.component */ 8786);













const _c0 = ["modalContent"];
function SelectedDocumentsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Empty requested documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SelectedDocumentsComponent_table_6_tr_10_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Submitted");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SelectedDocumentsComponent_table_6_tr_10_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SelectedDocumentsComponent_table_6_tr_10_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SelectedDocumentsComponent_table_6_tr_10_div_7_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const document_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](12); return ctx_r12.openFullscreen(_r2, document_r7.fileUrl); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SelectedDocumentsComponent_table_6_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, SelectedDocumentsComponent_table_6_tr_10_div_4_Template, 4, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, SelectedDocumentsComponent_table_6_tr_10_div_5_Template, 4, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, SelectedDocumentsComponent_table_6_tr_10_div_7_Template, 3, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const document_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", document_r7.fileType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !document_r7.isSubmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", document_r7.isSubmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !document_r7.isSubmitted);
} }
function SelectedDocumentsComponent_table_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "thead", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, SelectedDocumentsComponent_table_6_tr_10_Template, 8, 4, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.requestedDocuments);
} }
function SelectedDocumentsComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h4", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Modal title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SelectedDocumentsComponent_ng_template_11_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const modal_r15 = restoredCtx.$implicit; return modal_r15.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "ngx-imgPdf-viewer", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SelectedDocumentsComponent_ng_template_11_Template_button_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const modal_r15 = restoredCtx.$implicit; return modal_r15.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("documentURL", ctx_r3.url)("docPreviewConfig", ctx_r3.docPreviewConfig);
} }
function SelectedDocumentsComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h4", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Document request");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SelectedDocumentsComponent_ng_template_13_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r19.bsModalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "app-document-select");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SelectedDocumentsComponent_ng_template_13_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r21.closeModels(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class SelectedDocumentsComponent {
    constructor(documentBuilder, router, fileService, toaster, modalService, datePipe, serviceModal) {
        this.documentBuilder = documentBuilder;
        this.router = router;
        this.fileService = fileService;
        this.toaster = toaster;
        this.modalService = modalService;
        this.datePipe = datePipe;
        this.serviceModal = serviceModal;
        this.documents = [];
        this.submitObject = [];
        this.isSelectDate = true;
        this.dueDate = "";
        this.uploadedFiles = [];
        this.docPreviewConfig = {
            zoomIn: true,
            zoomOut: true,
            rotate: true,
            download: true,
            openModal: true,
            close: false,
            docScreenWidth: '100%',
            modalSize: 'md',
            customStyle: '',
            zoomIndicator: true,
        };
    }
    ngOnInit() {
        this.userId = Number(localStorage.getItem("userId"));
        const date = new Date();
        this.minDate = new Date(this.datePipe.transform(date, "yyyy-MM-dd"));
        this.documents = [
            {
                id: 1,
                type: 'PaySlips',
            },
            {
                id: 2,
                type: 'Bachelor certificate',
            },
            {
                id: 3,
                type: 'Passport',
            },
            {
                id: 4,
                type: 'Australian/Home country driving license',
            },
        ];
        this.createForm();
        //TODO set student id correctly
        this.getUploadedDocuments(this.userId, 1);
        this.getRequestedFiles(this.userId, 1);
    }
    //To identify already requested file types
    getRequestedFiles(lawyerId, studentId) {
        let requestBody = {
            lawyerId: lawyerId,
            studentId: studentId
        };
        this.fileService.getUserRequestedFiles(requestBody).subscribe(res => {
            console.log(res, 'requested files');
            const seen = new Set();
            const arr = res.data;
            const filteredArr = arr.filter(el => {
                const duplicate = seen.has(el.fileType);
                seen.add(el.fileType);
                return !duplicate;
            });
            this.requestedDocuments = filteredArr;
            this.requestedDocuments.forEach(element => {
                this.uploadedFiles.forEach(value => {
                    if (value.fileType == element.fileType && value.fileUrl !== "") {
                        element.isSubmitted = true;
                        element.fileUrl = value.fileUrl;
                    }
                    else {
                        element.isSubmitted = false;
                    }
                });
            });
            this.requestedDocuments.forEach(element => {
                switch (element.fileType) {
                    case 1: {
                        return element.fileType = src_app_enum_common__WEBPACK_IMPORTED_MODULE_1__.FileType.case1;
                    }
                    case 2: {
                        return element.fileType = src_app_enum_common__WEBPACK_IMPORTED_MODULE_1__.FileType.case2;
                    }
                    case 3: {
                        return element.fileType = src_app_enum_common__WEBPACK_IMPORTED_MODULE_1__.FileType.case3;
                    }
                    case 4: {
                        return element.fileType = src_app_enum_common__WEBPACK_IMPORTED_MODULE_1__.FileType.case4;
                    }
                }
            });
            console.log(this.requestedDocuments, 'f list');
            if (this.requestedDocuments.length == 0) {
                this.isEmpty = true;
            }
        }, (error) => {
            console.log(error);
        });
    }
    getUploadedDocuments(lawyerId, studentId) {
        let fileUploadedDetail = {
            lawyerId: lawyerId,
            studentId: studentId,
        };
        this.fileService.getUserUploadedFiles(fileUploadedDetail).subscribe(res => {
            this.uploadedFiles = res.data;
            console.log(res, 'uploaded');
        }, (error) => {
            console.log(error);
        });
        this.uploadedFiles.forEach(element => {
            switch (element.fileType) {
                case 1: {
                    return element.fileType = src_app_enum_common__WEBPACK_IMPORTED_MODULE_1__.FileType.case1;
                }
                case 2: {
                    return element.fileType = src_app_enum_common__WEBPACK_IMPORTED_MODULE_1__.FileType.case2;
                }
                case 3: {
                    return element.fileType = src_app_enum_common__WEBPACK_IMPORTED_MODULE_1__.FileType.case3;
                }
                case 4: {
                    return element.fileType = src_app_enum_common__WEBPACK_IMPORTED_MODULE_1__.FileType.case4;
                }
            }
        });
        this.uploadedFiles = this.uploadedFiles.filter(obj => obj.fileUrl !== null);
    }
    changeDate(event) {
        this.dueDate = event;
        if (this.dueDate == "") {
            this.isSelectDate = false;
        }
        else {
            this.isSelectDate = true;
        }
    }
    createForm() {
        this.documentForm = this.documentBuilder.group({
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            select: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        });
    }
    onChange(event, fileType) {
        if (event.target.checked == true) {
            let dueDate = this.dueDate;
            if (dueDate == "") {
                this.isSelectDate = false;
                event.target.checked = false;
            }
            else {
                this.isSelectDate = true;
                let oneObject = {
                    // TODO studentId,need to be real value with selected student
                    studentId: 1,
                    lawyerId: this.userId,
                    fileType: fileType,
                    dueDate: new Date(dueDate),
                    isDeleted: false,
                };
                this.submitObject.push(oneObject);
                dueDate = "";
                this.dueDate = "";
            }
        }
        else {
            this.submitObject = this.submitObject.filter(obj => obj.fileType !== fileType);
        }
    }
    request() {
        this.fileService
            .addLawyerRequestedFiles(this.submitObject)
            .subscribe((res) => {
            this.toaster.success(src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterDocumentRequest, src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterSuccess, {
                timeOut: src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterTimeout,
            });
            this.documentForm.reset();
            this.dueDate = "";
            this.submitObject = [];
        }, (error) => {
            this.toaster.error(src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterDocumentRequest, src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterFailure, {
                timeOut: src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterTimeout,
            });
            this.documentForm.reset();
            this.dueDate = "";
            this.submitObject = [];
        });
    }
    uploadedDocuments() {
        this.isClickUploaded = !this.isClickUploaded;
    }
    viewDocument(url) {
        this.router.navigate(['/document-view']);
    }
    selectDocuments(template) {
        this.bsModalRef = this.serviceModal.show(template, {
            class: 'modal-dialog-centered modal-lg', // Change this line to set the size and position of the modal
        });
    }
    closeModels() {
        this.bsModalRef.hide();
        console.log(this.session, "session");
        //this.router.navigateByUrl('/student-profile/point-form', { state: { session:this.session } });
    }
    //TODO set real url 
    openFullscreen(content, url) {
        this.url = url;
        this.modalService.open(content);
    }
}
SelectedDocumentsComponent.ɵfac = function SelectedDocumentsComponent_Factory(t) { return new (t || SelectedDocumentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_file_service__WEBPACK_IMPORTED_MODULE_2__.FileService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__.BsModalService)); };
SelectedDocumentsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SelectedDocumentsComponent, selectors: [["app-selected-documents"]], viewQuery: function SelectedDocumentsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.modalContent = _t.first);
    } }, inputs: { session: "session" }, decls: 15, vars: 3, consts: [[1, "col"], [1, ""], [1, "card-body"], [4, "ngIf"], [1, "table", "mt-4"], [3, "formGroup"], ["class", "table align-middle mb-0 table-hover", "id", "Transaction-History", 4, "ngIf"], [1, "row", "justify-content-end", "mt-3", "mb-3"], [1, "col", "text-end"], ["type", "button", 1, "btn", "btn-outline-green", 3, "click"], ["content", ""], ["template", ""], ["id", "Transaction-History", 1, "table", "align-middle", "mb-0", "table-hover"], [1, "table-light"], [4, "ngFor", "ngForOf"], ["class", "d-flex align-items-center text-success", 4, "ngIf"], ["class", "d-flex align-items-center text-danger", 4, "ngIf"], [1, "d-flex", "align-items-center", "text-success"], [1, "bx", "bx-radio-circle-marked", "bx-burst", "bx-rotate-90", "align-middle", "font-18", "me-1"], [1, "d-flex", "align-items-center", "text-danger"], [1, "btn", "button", "btn-download", 3, "click"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "documentURL", "docPreviewConfig"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", 3, "click"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "row"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click"]], template: function SelectedDocumentsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, SelectedDocumentsComponent_div_3_Template, 4, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, SelectedDocumentsComponent_table_6_Template, 11, 1, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SelectedDocumentsComponent_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](14); return ctx.selectDocuments(_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, SelectedDocumentsComponent_ng_template_11_Template, 9, 2, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, SelectedDocumentsComponent_ng_template_13_Template, 12, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isEmpty);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.documentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isEmpty);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, img_pdf_viewer__WEBPACK_IMPORTED_MODULE_11__.ImgPdfViewerComponent, _document_select_document_select_component__WEBPACK_IMPORTED_MODULE_4__.DocumentSelectComponent], styles: [".btn-cancel[_ngcontent-%COMP%] {\n  padding-right: 0px;\n}\n\n.btn-download[_ngcontent-%COMP%] {\n  color: navy;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdGVkLWRvY3VtZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0oiLCJmaWxlIjoic2VsZWN0ZWQtZG9jdW1lbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1jYW5jZWwge1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcblxyXG4uYnRuLWRvd25sb2Fke1xyXG4gICAgY29sb3I6IG5hdnk7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 6122:
/*!******************************************************************************!*\
  !*** ./src/app/components/student-profile/student-profile-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentProfileRoutingModule": () => (/* binding */ StudentProfileRoutingModule)
/* harmony export */ });
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile/profile.component */ 4160);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details/details.component */ 4468);
/* harmony import */ var _point_form_point_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./point-form/point-form.component */ 402);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);






const routes = [
    { path: '', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent, data: { title: 'Profile' } },
    { path: 'details', component: _details_details_component__WEBPACK_IMPORTED_MODULE_1__.DetailsComponent, data: { title: 'Profile' } },
    { path: 'point-form', component: _point_form_point_form_component__WEBPACK_IMPORTED_MODULE_2__.PointFormComponent, data: { title: 'Profile' },
        // children: [
        //   {
        //     path: 'details',
        //     component: DetailsComponent,
        //     data: {
        //       title: 'Details'
        //     }
        //   },
        // ] 
    }
];
class StudentProfileRoutingModule {
}
StudentProfileRoutingModule.ɵfac = function StudentProfileRoutingModule_Factory(t) { return new (t || StudentProfileRoutingModule)(); };
StudentProfileRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: StudentProfileRoutingModule });
StudentProfileRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](StudentProfileRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 8637:
/*!**********************************************************************!*\
  !*** ./src/app/components/student-profile/student-profile.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentProfileModule": () => (/* binding */ StudentProfileModule)
/* harmony export */ });
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-pagination */ 7483);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _student_profile_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student-profile-routing.module */ 6122);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/profile.component */ 4160);
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details/details.component */ 4468);
/* harmony import */ var _point_form_point_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./point-form/point-form.component */ 402);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _home_import_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../home/import.module */ 8893);
/* harmony import */ var _selected_documents_selected_documents_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selected-documents/selected-documents.component */ 6802);
/* harmony import */ var ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-doc-viewer */ 13);
/* harmony import */ var img_pdf_viewer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! img-pdf-viewer */ 310);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var _document_select_document_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./document-select/document-select.component */ 8786);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 4461);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);



















class StudentProfileModule {
}
StudentProfileModule.ɵfac = function StudentProfileModule_Factory(t) { return new (t || StudentProfileModule)(); };
StudentProfileModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: StudentProfileModule });
StudentProfileModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _student_profile_routing_module__WEBPACK_IMPORTED_MODULE_1__.StudentProfileRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModalModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbDatepickerModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
            ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_15__.NgxDocViewerModule,
            img_pdf_viewer__WEBPACK_IMPORTED_MODULE_16__.ImgPdfViewerModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
            _home_import_module__WEBPACK_IMPORTED_MODULE_6__.ImportModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_0__.NgxPaginationModule,
            ngx_toastr__WEBPACK_IMPORTED_MODULE_17__.ToastrModule,
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__.BsDatepickerModule.forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](StudentProfileModule, { declarations: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__.ProfileComponent,
        _details_details_component__WEBPACK_IMPORTED_MODULE_3__.DetailsComponent,
        _point_form_point_form_component__WEBPACK_IMPORTED_MODULE_4__.PointFormComponent,
        _selected_documents_selected_documents_component__WEBPACK_IMPORTED_MODULE_7__.SelectedDocumentsComponent,
        _document_select_document_select_component__WEBPACK_IMPORTED_MODULE_8__.DocumentSelectComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _student_profile_routing_module__WEBPACK_IMPORTED_MODULE_1__.StudentProfileRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModalModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbDatepickerModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
        ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_15__.NgxDocViewerModule,
        img_pdf_viewer__WEBPACK_IMPORTED_MODULE_16__.ImgPdfViewerModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
        _home_import_module__WEBPACK_IMPORTED_MODULE_6__.ImportModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_0__.NgxPaginationModule,
        ngx_toastr__WEBPACK_IMPORTED_MODULE_17__.ToastrModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__.BsDatepickerModule] }); })();


/***/ }),

/***/ 7535:
/*!********************************************************!*\
  !*** ./src/app/shared/services/appointment.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppointmentService": () => (/* binding */ AppointmentService)
/* harmony export */ });
/* harmony import */ var _constants_enums_action_names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/enums/action-names */ 7339);
/* harmony import */ var _01_base_service_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./01_base-service/base.service */ 9135);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3882);




class AppointmentService extends _01_base_service_base_service__WEBPACK_IMPORTED_MODULE_1__.BaseService {
    constructor(http) {
        super();
        this.http = http;
    }
    getAppointments() {
        return this.http.get(this.getBaseUrl(_constants_enums_action_names__WEBPACK_IMPORTED_MODULE_0__.ApiActionName.GetAppointments));
    }
    createAppointments(appointment) {
        return this.http.post(this.getBaseUrl(_constants_enums_action_names__WEBPACK_IMPORTED_MODULE_0__.ApiActionName.CreateAppointments), appointment);
    }
    updateAppointments(appointment) {
        return this.http.put(this.getBaseUrl(_constants_enums_action_names__WEBPACK_IMPORTED_MODULE_0__.ApiActionName.UpdateAppointments), appointment);
    }
    getAppointmentsByStatusOrLawyerId(appointmentRequestData) {
        return this.http.post(this.getBaseUrl(_constants_enums_action_names__WEBPACK_IMPORTED_MODULE_0__.ApiActionName.GetAppointmentsByStatusOrLawyerId), appointmentRequestData);
    }
}
AppointmentService.ɵfac = function AppointmentService_Factory(t) { return new (t || AppointmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
AppointmentService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AppointmentService, factory: AppointmentService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_components_student-profile_student-profile_module_ts.js.map