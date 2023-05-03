"use strict";
(self["webpackChunksyndron"] = self["webpackChunksyndron"] || []).push([["common"],{

/***/ 9314:
/*!**************************************************************!*\
  !*** ./src/app/components/home/payment/payment.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentComponent": () => (/* binding */ PaymentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class PaymentComponent {
    constructor() {
        this.paymentHandler = null;
    }
    ngOnInit() {
        this.invokeStripe();
    }
    initializePayment(amount) {
        const paymentHandler = window.StripeCheckout.configure({
            key: 'pk_test_sLUqHXtqXOkwSdPosC8ZikQ800snMatYMb',
            locale: 'auto',
            token: function (stripeToken) {
                console.log({ stripeToken });
                alert('Stripe token generated!');
            }
        });
        paymentHandler.open({
            name: 'Tecoora',
            description: 'Consultation fee',
            amount: amount * 100
        });
    }
    invokeStripe() {
        if (!window.document.getElementById('stripe-script')) {
            const script = window.document.createElement("script");
            script.id = "stripe-script";
            script.type = "text/javascript";
            script.src = "https://checkout.stripe.com/checkout.js";
            script.onload = () => {
                this.paymentHandler = window.StripeCheckout.configure({
                    key: 'pk_test_sLUqHXtqXOkwSdPosC8ZikQ800snMatYMb',
                    locale: 'auto',
                    token: function (stripeToken) {
                        console.log(stripeToken);
                        alert('Payment has been successfull!');
                    }
                });
            };
            window.document.body.appendChild(script);
        }
    }
}
PaymentComponent.ɵfac = function PaymentComponent_Factory(t) { return new (t || PaymentComponent)(); };
PaymentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaymentComponent, selectors: [["app-payment"]], decls: 15, vars: 0, consts: [[1, "page-breadcrumb", "d-none", "d-sm-flex", "align-items-center", "mb-3"], [1, "breadcrumb-title", "pe-3"], [1, "ps-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0"], [1, "breadcrumb-item"], ["href", "#", 3, "click"], [1, "bx", "bx-home-alt"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row", "text-center"], [1, "col-4", "text-center"], [1, "btn", "btn-success", 3, "click"]], template: function PaymentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentComponent_Template_a_click_7_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentComponent_Template_button_click_13_listener() { return ctx.initializePayment(35); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Payment of $35");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 2965:
/*!*************************************************!*\
  !*** ./src/app/shared/services/file.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileService": () => (/* binding */ FileService)
/* harmony export */ });
/* harmony import */ var _01_base_service_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./01_base-service/base.service */ 9135);
/* harmony import */ var _constants_enums_action_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/enums/action-names */ 7339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3882);




class FileService extends _01_base_service_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
    constructor(http) {
        super();
        this.http = http;
    }
    addLawyerRequestedFiles(lawyerRequestedFiles) {
        return this.http.post(this.getBaseUrl(_constants_enums_action_names__WEBPACK_IMPORTED_MODULE_1__.ApiActionName.AddLawyerRequestedFile), lawyerRequestedFiles);
    }
    getUserRequestedFiles(lawyerRequestedFile) {
        return this.http.post(this.getBaseUrl(_constants_enums_action_names__WEBPACK_IMPORTED_MODULE_1__.ApiActionName.GetLawyerRequestedFile), lawyerRequestedFile);
    }
    addUserFileDetail(userFile) {
        return this.http.post(this.getBaseUrl(_constants_enums_action_names__WEBPACK_IMPORTED_MODULE_1__.ApiActionName.UserFileDetails), userFile);
    }
    userFileUpload(files) {
        const requestOptions = Object.assign({ responseType: 'text' });
        return this.http.post(this.getBaseUrl(_constants_enums_action_names__WEBPACK_IMPORTED_MODULE_1__.ApiActionName.UserFileUpload), files, requestOptions);
    }
    getUserUploadedFiles(studentUploadedFile) {
        return this.http.post(this.getBaseUrl(_constants_enums_action_names__WEBPACK_IMPORTED_MODULE_1__.ApiActionName.GetStudentUploadedFile), studentUploadedFile);
    }
    userFileDelete(files) {
        return this.http.delete(this.getBaseUrl(_constants_enums_action_names__WEBPACK_IMPORTED_MODULE_1__.ApiActionName.deleteUploadedFile), files);
    }
    userFileUploadSave(saveUploadData) {
        return this.http.post(this.getBaseUrl(_constants_enums_action_names__WEBPACK_IMPORTED_MODULE_1__.ApiActionName.studentFileUpload), saveUploadData);
    }
}
FileService.ɵfac = function FileService_Factory(t) { return new (t || FileService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
FileService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: FileService, factory: FileService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8505:
/*!*****************************************************!*\
  !*** ./src/app/shared/services/question.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionService": () => (/* binding */ QuestionService)
/* harmony export */ });
/* harmony import */ var _01_base_service_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./01_base-service/base.service */ 9135);
/* harmony import */ var _constants_enums_action_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/enums/action-names */ 7339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3882);




class QuestionService extends _01_base_service_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
    constructor(http) {
        super();
        this.http = http;
    }
    getPointForm(subClassId) {
        return this.http.get(this.getBaseUrl(`${_constants_enums_action_names__WEBPACK_IMPORTED_MODULE_1__.ApiActionName.getPointForm}/${subClassId}`));
    }
    getQuestion(id) {
        return this.http.get(this.getBaseUrl(`${_constants_enums_action_names__WEBPACK_IMPORTED_MODULE_1__.ApiActionName.getQuestion}/${id}`));
    }
}
QuestionService.ɵfac = function QuestionService_Factory(t) { return new (t || QuestionService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
QuestionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: QuestionService, factory: QuestionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 250:
/*!***************************************************************!*\
  !*** ./src/app/shared/services/student-point-form.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentPointFormService": () => (/* binding */ StudentPointFormService)
/* harmony export */ });
/* harmony import */ var _constants_enums_action_names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/enums/action-names */ 7339);
/* harmony import */ var _01_base_service_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./01_base-service/base.service */ 9135);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3882);




class StudentPointFormService extends _01_base_service_base_service__WEBPACK_IMPORTED_MODULE_1__.BaseService {
    constructor(http) {
        super();
        this.http = http;
    }
    getStudentForms(studentId) {
        return this.http.get(this.getBaseUrl(_constants_enums_action_names__WEBPACK_IMPORTED_MODULE_0__.ApiActionName.GetStudentFormsByStudentId), {
            params: {
                studentId: studentId
            }
        });
    }
    createStudentForm(studentForm) {
        return this.http.post(this.getBaseUrl(_constants_enums_action_names__WEBPACK_IMPORTED_MODULE_0__.ApiActionName.CreateStudentForm), studentForm);
    }
    updateStudentForms(id, attempt, studentId, lawyerId, formTypeId, summaryPlan, criteria) {
        let body = {
            id: id,
            attempt: attempt,
            studentUserId: studentId,
            createLawyerId: lawyerId,
            criterias: criteria,
            formTypeId: formTypeId,
            summaryPlan: summaryPlan,
        };
        return this.http.put(this.getBaseUrl(_constants_enums_action_names__WEBPACK_IMPORTED_MODULE_0__.ApiActionName.UpdateStudentForms), body);
    }
    deleteStudentForm(studentFormId) {
        return this.http.delete(this.getBaseUrl(_constants_enums_action_names__WEBPACK_IMPORTED_MODULE_0__.ApiActionName.DeleteStudentFormById), studentFormId);
    }
}
StudentPointFormService.ɵfac = function StudentPointFormService_Factory(t) { return new (t || StudentPointFormService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
StudentPointFormService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: StudentPointFormService, factory: StudentPointFormService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map