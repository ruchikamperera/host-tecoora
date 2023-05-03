"use strict";
(self["webpackChunksyndron"] = self["webpackChunksyndron"] || []).push([["src_app_components_home_home_module_ts"],{

/***/ 5133:
/*!**********************************************************************!*\
  !*** ./src/app/components/home/appointment/appointment.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppointmentComponent": () => (/* binding */ AppointmentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);




class AppointmentComponent {
    constructor(calendar, route) {
        this.calendar = calendar;
        this.route = route;
    }
    selectToday() {
        this.model = this.calendar.getToday();
    }
    ngOnInit() {
    }
    redirectPayment() {
        this.route.navigateByUrl('/dashboard/payment');
    }
}
AppointmentComponent.ɵfac = function AppointmentComponent_Factory(t) { return new (t || AppointmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbCalendar), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AppointmentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppointmentComponent, selectors: [["app-appointment"]], decls: 87, vars: 1, consts: [[1, "page-breadcrumb", "d-none", "d-sm-flex", "align-items-center", "mb-3"], [1, "breadcrumb-title", "pe-3"], [1, "ps-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0"], [1, "breadcrumb-item"], ["href", "#", 3, "click"], [1, "bx", "bx-home-alt"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row", "text-center"], [1, "col"], [1, "col", "d-flex"], [1, "card", "radius-10", "w-100"], [1, "card-body"], [3, "ngModel", "ngModelChange", "navigate"], ["dp", ""], [1, "row", "row-cols-1", "row-cols-xl-2", "mt-3"], [1, "row", "text-center", "mt-3"], [1, "mt-3", "mb-2"], [1, "row", "text-center", "ms-5", "mb-2"], [1, "col-6", "text-end", "mt-2"], [1, "chip", "color"], [1, "col-6", "text-start"], ["type", "radio", "value", "", "id", "flexCheckDefault", "disabled", "", 1, "form-check-input"], [1, "chip"], ["type", "radio", "value", "", "id", "flexCheckDefault", 1, "form-check-input"], [1, "row", "text-center", "mt-3", "mb-3"], [1, "mt-3"], [1, "col-5", "text-end", "mt-2"], ["for", "flexRadioDefault1", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault1", "checked", "", 1, "form-check-input"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault1", 1, "form-check-input"], [1, "row", "mt-2", "text-end", "justify-content-end"], [1, "box"], [1, "btn", "btn-primary", 3, "click"]], template: function AppointmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppointmentComponent_Template_a_click_7_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Appointment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Lawyer name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Appointment calender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ngb-datepicker", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppointmentComponent_Template_ngb_datepicker_ngModelChange_23_listener($event) { return ctx.model = $event; })("navigate", function AppointmentComponent_Template_ngb_datepicker_navigate_23_listener($event) { return ctx.date = $event.next; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Available time slots");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "30 September 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Time Slot 01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Time Slot 02");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Time Slot 03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Time Slot 04");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h3", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Select call type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Audio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppointmentComponent_Template_button_click_85_listener() { return ctx.redirectPayment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Make an appointment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbDatepicker, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel], styles: ["ngb-datepicker[_ngcontent-%COMP%] {\n  background-color: #cacbcf;\n  width: 600px;\n}\n\n[_nghost-%COMP%]  ngb-datepicker {\n  border: none !important;\n}\n\n[_nghost-%COMP%] .ngb-dp-month {\n  width: 100%;\n  height: 100%;\n  margin-left: 1rem;\n}\n\n[_nghost-%COMP%] .ngb-dp-week {\n  margin-left: 2.5rem;\n  margin-bottom: 0.8rem;\n}\n\n[_nghost-%COMP%] .ngb-dp-week.ngb-dp-weekdays {\n  border-bottom: none !important;\n}\n\n[_nghost-%COMP%] .ngb-dp-day {\n  width: 100%;\n}\n\n[_nghost-%COMP%] .ngb-dp-weekday.small {\n  width: 100%;\n  height: 100%;\n  text-align: start !important;\n  font-family: var(--font-roboto);\n  font-style: normal;\n  font-weight: bold;\n  font-size: var(--small);\n  color: var(--primary-text) !important;\n}\n\n[_nghost-%COMP%] .ngb-dp-content.ngb-dp-months {\n  margin-top: 3.5rem;\n}\n\n.form-check-input[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  background-color: var(--contact-btn-background);\n  box-shadow: 0px 8px 22px 6px rgba(0, 0, 0, 0.25), inset 0px 6px 4px rgba(255, 255, 255, 0.25);\n}\n\n.form-check-input[_ngcontent-%COMP%]:checked[type=radio] {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-color: var(--primary-btn-background);\n  border-style: solid;\n  border-radius: 50%;\n  background-color: #4e3c3c;\n  color: var(--primary-icon-color);\n  font-weight: bold;\n  background-image: url(\"data:image/svg+xml;charset=utf8,<svg id='Expanded_finals_' data-name='Expanded (finals)' xmlns='http://www.w3.org/2000/svg' viewBox='-3 -3 30 30'><path fill='rgb(255,255,255)' d='M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z'/></svg>\");\n}\n\n.color[_ngcontent-%COMP%] {\n  background-color: #ccc01f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcG9pbnRtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0cseUJBQUE7RUFDQSxZQUFBO0FBQ0g7O0FBRUE7RUFDSSx1QkFBQTtBQUNKOztBQU1BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUhKOztBQU1BO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtBQUhKOztBQU9BO0VBQ0ksOEJBQUE7QUFKSjs7QUFRQTtFQUNJLFdBQUE7QUFMSjs7QUFTQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFDQUFBO0FBTko7O0FBU0E7RUFDSSxrQkFBQTtBQU5KOztBQWVBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSwrQ0FBQTtFQUNBLDZGQUFBO0FBWko7O0FBZUE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLHdTQUFBO0FBYko7O0FBZ0JBO0VBQ0kseUJBQUE7QUFiSiIsImZpbGUiOiJhcHBvaW50bWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5nYi1kYXRlcGlja2VyIHtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMiwgMjAzLCAyMDcpO1xyXG4gICB3aWR0aDogNjAwcHg7XHJcbn1cclxuXHJcbjpob3N0OjpuZy1kZWVwIG5nYi1kYXRlcGlja2VyIHtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdDo6bmctZGVlcCAubmdiLWRwLWhlYWRlciB7XHJcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IDMuNXJlbTtcclxufVxyXG5cclxuOmhvc3Q6Om5nLWRlZXAubmdiLWRwLW1vbnRoe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxufVxyXG5cclxuOmhvc3Q6Om5nLWRlZXAubmdiLWRwLXdlZWt7XHJcbiAgICBtYXJnaW4tbGVmdDogMi41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xyXG59XHJcblxyXG5cclxuOmhvc3Q6Om5nLWRlZXAubmdiLWRwLXdlZWsubmdiLWRwLXdlZWtkYXlze1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IDIuNXJlbTtcclxufVxyXG5cclxuOmhvc3Q6Om5nLWRlZXAubmdiLWRwLWRheXtcclxuICAgIHdpZHRoOiAxMDAlOyBcclxufVxyXG5cclxuXHJcbjpob3N0OjpuZy1kZWVwLm5nYi1kcC13ZWVrZGF5LnNtYWxse1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtcm9ib3RvKTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1zbWFsbCk7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdDo6bmctZGVlcC5uZ2ItZHAtY29udGVudC5uZ2ItZHAtbW9udGhze1xyXG4gICAgbWFyZ2luLXRvcDogMy41cmVtO1xyXG59XHJcblxyXG4vLyAvKiByYWRpbyBidXR0b24gKi9cclxuLy8gLmZvcm0tY2hlY2sgLnllcy1jbGFzcy5mb3JtLWNoZWNrLWlucHV0IHtcclxuLy8gICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IDAuNWVtICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi5mb3JtLWNoZWNrLWlucHV0e1xyXG4gICAgd2lkdGg6IDIuNXJlbTtcclxuICAgIGhlaWdodDogMi41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGFjdC1idG4tYmFja2dyb3VuZCk7IFxyXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAyMnB4IDZweCByZ2IoMCAwIDAgLyAyNSUpLCBpbnNldCAwcHggNnB4IDRweCByZ2IoMjU1IDI1NSAyNTUgLyAyNSUpO1xyXG4gICAgXHJcbn1cclxuLmZvcm0tY2hlY2staW5wdXQ6Y2hlY2tlZFt0eXBlPXJhZGlvXSB7XHJcbiAgICB3aWR0aDogMi41cmVtO1xyXG4gICAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktYnRuLWJhY2tncm91bmQpO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzgsIDYwLCA2MCkgO1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktaWNvbi1jb2xvcik7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsPHN2ZyBpZD0nRXhwYW5kZWRfZmluYWxzXycgZGF0YS1uYW1lPSdFeHBhbmRlZCAoZmluYWxzKScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PSctMyAtMyAzMCAzMCc+PHBhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTIxIDYuMjg1bC0xMS4xNiAxMi43MzMtNi44NC02LjAxOCAxLjMxOS0xLjQ5IDUuMzQxIDQuNjg2IDkuODY1LTExLjE5NiAxLjQ3NSAxLjI4NXonLz48L3N2Zz5cIik7XHJcbn1cclxuXHJcbi5jb2xvcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDQsIDE5MiwgMzEpO1xyXG59Il19 */"] });


/***/ }),

/***/ 7198:
/*!****************************************************************************!*\
  !*** ./src/app/components/home/consult-lawyer/consult-lawyer.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultLawyerComponent": () => (/* binding */ ConsultLawyerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/services/user.service */ 8613);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);





function ConsultLawyerComponent_div_31_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h5", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " one trained and licensed to prepare, manage, and either prosecute or defend a court action as an agent. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConsultLawyerComponent_div_31_div_2_Template_button_click_15_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const user_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r5.redirectProfile(user_r4.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " View profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", user_r4.FirstName, " ", user_r4.LastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r4.State);
} }
function ConsultLawyerComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ConsultLawyerComponent_div_31_div_2_Template, 17, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.users);
} }
function ConsultLawyerComponent_div_32_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h5", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConsultLawyerComponent_div_32_div_2_Template_button_click_15_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const user_r8 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.redirectProfile(user_r8.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " View profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r8.FirstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r8.State);
} }
function ConsultLawyerComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ConsultLawyerComponent_div_32_div_2_Template, 17, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.users);
} }
class ConsultLawyerComponent {
    constructor(route, userService) {
        this.route = route;
        this.userService = userService;
        this.selected = "lawyer";
    }
    ngOnInit() {
        this.search = "";
        this.sort = "";
        this.getUsers();
    }
    onSelected(value) {
        this.sort = value;
        this.getUsers();
    }
    getUsers() {
        let body = {
            UserType: this.selected,
            sortBy: this.sort,
            searh: this.search
        };
        // this.userService.getUsersByType(body).subscribe(res => {});
        console.log(body, 'response body');
        this.users = [{
                Id: 1,
                FirstName: "chathura",
                LastName: "Ravisankha",
                UserType: "Lawyer",
                Email: "chathurasika9591@gmail.com",
                CompanyName: "Tecoora",
                DOB: new Date(),
                StudentType: "RT",
                State: "southern",
                noOfReviews: 100,
                yearsOfExperience: 3
            },
            {
                Id: 2,
                FirstName: "chathura",
                LastName: "Ravisankha",
                UserType: "Lawyer",
                Email: "chathurasika9591@gmail.com",
                CompanyName: "Tecoora",
                DOB: new Date(),
                StudentType: "RT",
                State: "southern",
                noOfReviews: 100,
                yearsOfExperience: 3
            },
            {
                Id: 3,
                FirstName: "chathura",
                LastName: "Ravisankha",
                UserType: "Lawyer",
                Email: "chathurasika9591@gmail.com",
                CompanyName: "Tecoora",
                DOB: new Date(),
                StudentType: "RT",
                State: "southern",
                noOfReviews: 100,
                yearsOfExperience: 3
            },
            {
                Id: 4,
                FirstName: "chathura",
                LastName: "Ravisankha",
                UserType: "Lawyer",
                Email: "chathurasika9591@gmail.com",
                CompanyName: "Tecoora",
                DOB: new Date(),
                StudentType: "RT",
                State: "southern",
                noOfReviews: 100,
                yearsOfExperience: 3
            }];
        console.log(this.users);
    }
    redirectProfile(id) {
        console.log(id, "clicked");
        this.route.navigateByUrl(`dashboard/lawyer-profile/${id}`);
    }
    onClick(option) {
        this.selected = option;
        this.getUsers();
    }
    keyup() {
        this.getUsers();
    }
}
ConsultLawyerComponent.ɵfac = function ConsultLawyerComponent_Factory(t) { return new (t || ConsultLawyerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService)); };
ConsultLawyerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ConsultLawyerComponent, selectors: [["app-consult-lawyer"]], decls: 33, vars: 7, consts: [[1, "page-breadcrumb", "d-none", "d-sm-flex", "align-items-center", "mb-3"], [1, "breadcrumb-title", "pe-3"], [1, "ps-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0"], [1, "breadcrumb-item"], ["href", "#", 3, "click"], [1, "bx", "bx-home-alt"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row", "mb-3"], [1, "col-3", "justify-content-start"], ["type", "text", "placeholder", "Search", 1, "form-control", "ps-5", 3, "ngModel", "ngModelChange", "keyup"], [1, "col-6", "text-center"], [1, "btn-group", "group-background", ".custom-slider-bg"], ["id", "day"], [1, "btn", "btn-text", "toggle-label", 3, "click"], ["id", "week"], [1, "col-3", "justify-content-end", "text-end"], ["aria-label", "Default select example", 1, "form-select", "mb-3", 3, "change"], ["sort", ""], ["default", "", "selected", ""], [4, "ngIf"], [1, "row", "row-cols-1", "row-cols-md-1", "row-cols-lg-2", "row-cols-xl-2"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "col"], [1, "card"], [1, "row", "g-0"], [1, "col-md-4"], ["src", "assets/images/avatars/avatar-1.png", "alt", "...", 1, "card-img"], [1, "col-md-8"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "text-muted"], [1, "col", "text-end"], ["type", "button", 1, "btn", "btn-outline-secondary", "px-5", 3, "click"], ["src", "assets/images/gallery/01.jpg", "height", "211px", "alt", "...", 1, "card-img"]], template: function ConsultLawyerComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConsultLawyerComponent_Template_a_click_7_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Consult lawyer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ConsultLawyerComponent_Template_input_ngModelChange_13_listener($event) { return ctx.search = $event; })("keyup", function ConsultLawyerComponent_Template_input_keyup_13_listener() { return ctx.keyup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConsultLawyerComponent_Template_a_click_17_listener() { return ctx.onClick("lawyer"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Lawyer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConsultLawyerComponent_Template_a_click_20_listener() { return ctx.onClick("agency"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Agency ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "select", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ConsultLawyerComponent_Template_select_change_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](24); return ctx.onSelected(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Sort by");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "No of reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Years of experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, ConsultLawyerComponent_div_31_Template, 3, 1, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ConsultLawyerComponent_div_32_Template, 3, 1, "div", 21);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("custom-slider", ctx.selected === "lawyer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("custom-slider", ctx.selected === "agency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selected == "lawyer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selected == "agency");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25zdWx0LWxhd3llci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 7738:
/*!******************************************************************************!*\
  !*** ./src/app/components/home/document-upload/document-upload.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentUploadComponent": () => (/* binding */ DocumentUploadComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_enum_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enum/common */ 8760);
/* harmony import */ var src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/constants/enums/toaster */ 7776);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _shared_services_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/services/file.service */ 2965);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _input_file_button_input_file_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input-file-button/input-file-button.component */ 5159);










function DocumentUploadComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " No, requested files yet. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DocumentUploadComponent_div_2_tr_21_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Submitted");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DocumentUploadComponent_div_2_tr_21_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "app-input-file-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("fileSelected", function DocumentUploadComponent_div_2_tr_21_div_7_Template_app_input_file_button_fileSelected_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const document_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r8.getFile(document_r3.fileType); })("change", function DocumentUploadComponent_div_2_tr_21_div_7_Template_app_input_file_button_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const document_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r11.onChange($event.target.files, document_r3.fileType, document_r3.fileTypeDes, document_r3.studentId, document_r3.lawyerId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const document_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("idInput", document_r3.fileType);
} }
function DocumentUploadComponent_div_2_tr_21_i_9_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DocumentUploadComponent_div_2_tr_21_i_9_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const document_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r14.deleteFile(document_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DocumentUploadComponent_div_2_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, DocumentUploadComponent_div_2_tr_21_div_6_Template, 3, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, DocumentUploadComponent_div_2_tr_21_div_7_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, DocumentUploadComponent_div_2_tr_21_i_9_Template, 1, 0, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const document_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](document_r3.fileTypeDes);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](document_r3.dueDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", document_r3.isUploaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !document_r3.isUploaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", document_r3.isUploaded);
} }
function DocumentUploadComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Documents required from you (Click on the document to upload)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "thead", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Due date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, DocumentUploadComponent_div_2_tr_21_Template, 10, 5, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DocumentUploadComponent_div_2_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r17.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DocumentUploadComponent_div_2_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r19.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r1.documentForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.arrData);
} }
class DocumentUploadComponent {
    constructor(documentBuilder, router, fileService, toaster) {
        this.documentBuilder = documentBuilder;
        this.router = router;
        this.fileService = fileService;
        this.toaster = toaster;
        this.documents = [];
        this.dataAggiornamentoTemplate = '10/10/2018';
        this.submitObject = [];
        this.arrData = [];
        this.isUploaded = false;
    }
    ngOnInit() {
        this.userId = Number(localStorage.getItem("userId"));
        this.createForm();
        //TODO set real lawyer id that selected
        this.getUserUploadedFiles(1, this.userId).then(() => {
            this.getLawyerRequestedFile(1, this.userId);
        });
    }
    getLawyerRequestedFile(lawyerId, studentId) {
        let fileRequestDetail = {
            lawyerId: lawyerId,
            studentId: studentId,
        };
        this.fileService.getUserRequestedFiles(fileRequestDetail).subscribe((res) => {
            this.documents = res.data;
            console.log(this.documents, "documents");
            if (this.documents.length == 0) {
                this.isEmpty = true;
            }
            else {
                this.isEmpty = false;
            }
            this.documents.forEach(element => {
                var _a;
                (_a = this.uploadedDocuments) === null || _a === void 0 ? void 0 : _a.forEach(c => {
                    this.fileUrl = null;
                    this.fileSavedId = 0;
                    if (c.fileType == element.fileType && c.fileUrl) {
                        element.isUploaded = true;
                        this.fileSavedId = c.id;
                        element.fileUrl = c.fileUrl;
                    }
                });
                let fileTypeDes;
                switch (element.fileType) {
                    case 1: {
                        fileTypeDes = src_app_enum_common__WEBPACK_IMPORTED_MODULE_0__.FileType.case1;
                        break;
                    }
                    case 2: {
                        fileTypeDes = src_app_enum_common__WEBPACK_IMPORTED_MODULE_0__.FileType.case2;
                        break;
                    }
                    case 3: {
                        fileTypeDes = src_app_enum_common__WEBPACK_IMPORTED_MODULE_0__.FileType.case3;
                        break;
                    }
                    case 4: {
                        fileTypeDes = src_app_enum_common__WEBPACK_IMPORTED_MODULE_0__.FileType.case4;
                        break;
                    }
                }
                let elementData = {
                    dueDate: element.dueDate.split('T')[0],
                    fileType: element.fileType,
                    fileTypeDes: fileTypeDes,
                    id: this.fileSavedId,
                    isDeleted: element.isDeleted,
                    lawyerId: element.lawyerId,
                    studentId: element.studentId,
                    isUploaded: element.isUploaded,
                    fileUrl: element.fileUrl,
                };
                this.arrData.push(elementData);
            });
        }, (error) => {
            console.log(error);
        });
    }
    getUserUploadedFiles(lawyerId, studentId) {
        return new Promise((resolve, reject) => {
            let fileUploadedDetail = {
                lawyerId: lawyerId,
                studentId: studentId,
            };
            this.fileService.getUserUploadedFiles(fileUploadedDetail).subscribe(res => {
                console.log(res);
                this.uploadedDocuments = res.data;
            }, (error) => {
                console.log(error);
            });
            resolve();
        });
    }
    createForm() {
        this.documentForm = this.documentBuilder.group({
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            select: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        });
    }
    getFile(fileType) {
        if (fileType) {
            const index = this.submitObject.findIndex(obj => obj.fileType === fileType);
            if (index !== -1) {
                this.submitObject.splice(index, 1);
            }
            console.log(this.submitObject, 'this.submitObject');
        }
    }
    onChange(file, fileType, fileTypeDes, studentId, lawyerId) {
        if (file) {
            let fileToUpload = file[0];
            const formData = new FormData();
            formData.append('file', fileToUpload, fileToUpload.name);
            this.inputFile = file[0];
            let fileEnum;
            switch (fileTypeDes) {
                case src_app_enum_common__WEBPACK_IMPORTED_MODULE_0__.FileType.case1: {
                    fileEnum = 1;
                    break;
                }
                case src_app_enum_common__WEBPACK_IMPORTED_MODULE_0__.FileType.case2: {
                    fileEnum = 2;
                    break;
                }
                case src_app_enum_common__WEBPACK_IMPORTED_MODULE_0__.FileType.case3: {
                    fileEnum = 3;
                    break;
                }
                case src_app_enum_common__WEBPACK_IMPORTED_MODULE_0__.FileType.case4: {
                    fileEnum = 4;
                    break;
                }
            }
            this.fileService.userFileUpload(formData).subscribe(res => {
                let oneObject = {
                    studentId: studentId,
                    lawyerId: lawyerId,
                    fileType: fileEnum,
                    fileUrl: res,
                    isDeleted: false
                };
                this.submitObject.push(oneObject);
            }, (error) => {
                console.log(error, 'error');
            });
        }
    }
    save() {
        this.fileService.userFileUploadSave(this.submitObject).subscribe(res => {
            if (res.success === true) {
                this.getLawyerRequestedFile(1, 1);
                this.toaster.success(src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_1__.Message.fileSavedSuccess);
                this.getUserUploadedFiles(1, 1);
            }
            else {
                this.toaster.error(src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_1__.Message.toasterFailure);
            }
        });
    }
    upload(files, fileType) {
        console.log(files[0], 'file');
        const formData = new FormData();
        let fileEnum;
        formData.append('fileKey', files[0], "123");
        switch (fileType) {
            case src_app_enum_common__WEBPACK_IMPORTED_MODULE_0__.FileType.case1: {
                fileEnum = 1;
                break;
            }
            case src_app_enum_common__WEBPACK_IMPORTED_MODULE_0__.FileType.case2: {
                fileEnum = 2;
                break;
            }
            case src_app_enum_common__WEBPACK_IMPORTED_MODULE_0__.FileType.case3: {
                fileEnum = 3;
                break;
            }
            case src_app_enum_common__WEBPACK_IMPORTED_MODULE_0__.FileType.case4: {
                fileEnum = 4;
                break;
            }
        }
        this.fileService.addUserFileDetail(formData).subscribe((res) => {
            this.toaster.success(src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_1__.Message.toasterDocumentUpload, src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_1__.Message.toasterSuccess, {
                timeOut: src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_1__.Message.toasterTimeout,
            });
        }, (error) => {
            this.toaster.error(src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_1__.Message.toasterDocumentUpload, src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_1__.Message.toasterFailure, {
                timeOut: src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_1__.Message.toasterTimeout,
            });
        });
    }
    deleteFile(document) {
        let userFileDetail = {
            studentId: document.studentId,
            lawyerId: document.lawyerId,
            fileType: document.fileType,
            fileUrl: document.fileUrl,
            isDeleted: false,
        };
        console.log(userFileDetail, 'Delete', document.fileType);
        this.fileService.userFileDelete(userFileDetail).subscribe((res) => {
            this.toaster.success(src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_1__.Message.toasterDocumentDelete, src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_1__.Message.toasterSuccess, {
                timeOut: src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_1__.Message.toasterTimeout,
            });
            console.log(res);
        }, (error) => {
            console.log(error, 'error');
            this.toaster.error(src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_1__.Message.toasterDocumentDelete, src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_1__.Message.toasterFailure, {
                timeOut: src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_1__.Message.toasterTimeout,
            });
        });
    }
    cancel() {
        this.router.navigate(['/student-dashboard']);
    }
}
DocumentUploadComponent.ɵfac = function DocumentUploadComponent_Factory(t) { return new (t || DocumentUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_file_service__WEBPACK_IMPORTED_MODULE_2__.FileService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService)); };
DocumentUploadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DocumentUploadComponent, selectors: [["app-document-upload"]], decls: 3, vars: 2, consts: [[1, "container-fluid"], [4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-xl-12", "d-flex"], [1, "card", "radius-10", "w-100"], [1, "card-body"], [1, "d-flex", "align-items-center"], [1, "mb-1"], [1, "table-responsive", "mt-4"], [3, "formGroup"], ["id", "Transaction-History", 1, "table", "align-middle", "mb-0", "table-hover"], [1, "table-light"], [4, "ngFor", "ngForOf"], [1, "row", "justify-content-end", "mt-3", "mb-3"], [1, "col-11", "text-end", "btn-cancel"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click"], [1, "col-1", "text-end"], ["type", "button", 1, "btn", "btn-outline-green", 3, "click"], ["class", "badge rounded-pill text-success bg-light-success p-2 text-uppercase px-3", 4, "ngIf"], [1, "text-start"], ["class", "bx bx-trash bx-sm btn-delete", 3, "click", 4, "ngIf"], [1, "badge", "rounded-pill", "text-success", "bg-light-success", "p-2", "text-uppercase", "px-3"], [1, "bx", "bxs-circle", "me-1"], [3, "idInput", "fileSelected", "change"], [1, "bx", "bx-trash", "bx-sm", "btn-delete", 3, "click"]], template: function DocumentUploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DocumentUploadComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DocumentUploadComponent_div_2_Template, 29, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isEmpty);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isEmpty);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _input_file_button_input_file_button_component__WEBPACK_IMPORTED_MODULE_3__.InputFileButtonComponent], styles: [".btn-cancel[_ngcontent-%COMP%] {\n  padding-right: unset;\n}\n\n.btn-delete[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50LXVwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0oiLCJmaWxlIjoiZG9jdW1lbnQtdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1jYW5jZWx7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiB1bnNldDtcclxufVxyXG5cclxuLmJ0bi1kZWxldGV7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 2322:
/*!********************************************************!*\
  !*** ./src/app/components/home/home-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoutingModule": () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment/payment.component */ 9314);
/* harmony import */ var _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appointment/appointment.component */ 5133);
/* harmony import */ var _lawyer_profile_lawyer_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lawyer-profile/lawyer-profile.component */ 2152);
/* harmony import */ var _consult_lawyer_consult_lawyer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consult-lawyer/consult-lawyer.component */ 7198);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _student_dashboard_student_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./student-dashboard/student-dashboard.component */ 5284);
/* harmony import */ var _document_upload_document_upload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./document-upload/document-upload.component */ 7738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);









const routes = [
    { path: '', component: _student_dashboard_student_dashboard_component__WEBPACK_IMPORTED_MODULE_4__.StudentDashboardComponent, data: { title: 'Student Dashboard' } },
    { path: 'consult', component: _consult_lawyer_consult_lawyer_component__WEBPACK_IMPORTED_MODULE_3__.ConsultLawyerComponent, data: { title: 'Consult Lawyer' } },
    { path: 'appointment', component: _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_1__.AppointmentComponent, data: { title: 'Appointment' } },
    { path: 'payment', component: _payment_payment_component__WEBPACK_IMPORTED_MODULE_0__.PaymentComponent, data: { title: 'Payment' } },
    { path: 'lawyer-profile/:userId', component: _lawyer_profile_lawyer_profile_component__WEBPACK_IMPORTED_MODULE_2__.LawyerProfileComponent, data: { title: 'Lawyer Profile' } },
    { path: 'document-upload', component: _document_upload_document_upload_component__WEBPACK_IMPORTED_MODULE_5__.DocumentUploadComponent, data: { title: 'Document Upload' } },
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); };
HomeRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 3783:
/*!************************************************!*\
  !*** ./src/app/components/home/home.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 2322);
/* harmony import */ var _student_dashboard_student_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student-dashboard/student-dashboard.component */ 5284);
/* harmony import */ var _consult_lawyer_consult_lawyer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consult-lawyer/consult-lawyer.component */ 7198);
/* harmony import */ var _lawyer_profile_lawyer_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lawyer-profile/lawyer-profile.component */ 2152);
/* harmony import */ var _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./appointment/appointment.component */ 5133);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-calendar */ 9480);
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ 5406);
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment/payment.component */ 9314);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _document_upload_document_upload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./document-upload/document-upload.component */ 7738);
/* harmony import */ var _import_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./import.module */ 8893);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ 1172);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ 7483);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);

















class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule,
            angular_calendar__WEBPACK_IMPORTED_MODULE_12__.CalendarModule.forRoot({
                provide: angular_calendar__WEBPACK_IMPORTED_MODULE_12__.DateAdapter,
                useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_13__.adapterFactory
            }),
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule,
            _import_module__WEBPACK_IMPORTED_MODULE_8__.ImportModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_9__.NgxPaginationModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_student_dashboard_student_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.StudentDashboardComponent,
        _consult_lawyer_consult_lawyer_component__WEBPACK_IMPORTED_MODULE_2__.ConsultLawyerComponent,
        _lawyer_profile_lawyer_profile_component__WEBPACK_IMPORTED_MODULE_3__.LawyerProfileComponent,
        _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_4__.AppointmentComponent,
        _payment_payment_component__WEBPACK_IMPORTED_MODULE_5__.PaymentComponent,
        _document_upload_document_upload_component__WEBPACK_IMPORTED_MODULE_7__.DocumentUploadComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule, angular_calendar__WEBPACK_IMPORTED_MODULE_12__.CalendarModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule,
        _import_module__WEBPACK_IMPORTED_MODULE_8__.ImportModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_9__.NgxPaginationModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModule] }); })();


/***/ }),

/***/ 2152:
/*!****************************************************************************!*\
  !*** ./src/app/components/home/lawyer-profile/lawyer-profile.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LawyerProfileComponent": () => (/* binding */ LawyerProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/services/user.service */ 8613);



class LawyerProfileComponent {
    constructor(route, userService) {
        this.route = route;
        this.userService = userService;
    }
    ngOnInit() {
        this.getUsers();
    }
    redirectAppointment() {
        this.route.navigateByUrl('/dashboard/appointment');
    }
    getUsers() {
        this.userService.getUsers().subscribe(res => {
            console.log(res, 'user');
        });
        this.user = {
            Id: 1,
            FirstName: "chathura",
            LastName: "Ravisankha",
            UserType: "Lawyer",
            Email: "chathurasika9591@gmail.com",
            CompanyName: "Tecoora",
            DOB: Date,
            StudentType: "RT",
            State: "southern",
            noOfReviews: 100,
            yearsOfExperience: 3
        };
    }
}
LawyerProfileComponent.ɵfac = function LawyerProfileComponent_Factory(t) { return new (t || LawyerProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService)); };
LawyerProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LawyerProfileComponent, selectors: [["app-lawyer-profile"]], decls: 84, vars: 6, consts: [[1, "page-breadcrumb", "d-none", "d-sm-flex", "align-items-center", "mb-3"], [1, "breadcrumb-title", "pe-3"], [1, "ps-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0"], [1, "breadcrumb-item"], ["href", "#", 3, "click"], [1, "bx", "bx-home-alt"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "container"], [1, "main-body"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "d-flex", "flex-column"], [1, "col-2", "mt-3", "ms-3"], ["src", "assets/images/avatars/avatar-2.png", "alt", "Admin", "width", "110", 1, "rounded-circle", "p-1", "bg-primary"], [1, "col-5"], [1, "mt-3"], [1, "text-secondary", "mb-1"], [1, "text-muted", "font-size-sm"], [1, "d-flex", "align-items-center"], [1, "bx", "bxs-star", "text-warning"], [1, "bx", "bxs-star", "text-secondary"], [1, "mb-0"], [1, "col-4", "text-end", "mt-3"], [1, "btn", "btn-primary", 3, "click"], [1, "card-title"], ["id", "accordionExample", 1, "accordion"], [1, "accordion-item"], ["id", "headingOne", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseOne", "aria-expanded", "true", "aria-controls", "collapseOne", 1, "accordion-button"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse", "show"], [1, "accordion-body"], ["id", "headingTwo", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseTwo", "aria-expanded", "false", "aria-controls", "collapseTwo", 1, "accordion-button", "collapsed"], ["id", "collapseTwo", "aria-labelledby", "headingTwo", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse"], ["id", "headingThree", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseThree", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "accordion-button", "collapsed"], ["id", "collapseThree", "aria-labelledby", "headingThree", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse"]], template: function LawyerProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LawyerProfileComponent_Template_a_click_7_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Lawyer Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LawyerProfileComponent_Template_button_click_40_listener() { return ctx.redirectAppointment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Make an appointment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "h5", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Reviews (3)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "h2", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " Review 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "This is the first item's accordion body.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, ".accordion-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, ", though the transition does limit overflow.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "h2", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, " Review 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "This is the second item's accordion body.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, ".accordion-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, ", though the transition does limit overflow.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "h2", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, " Review 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "This is the third item's accordion body.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, " It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, ".accordion-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, ", though the transition does limit overflow.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.user.FirstName, " ", ctx.user.LastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user.State);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user.CompanyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.user.yearsOfExperience, " years");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("4.2(", ctx.user.noOfReviews, ")");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXd5ZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 5284:
/*!**********************************************************************************!*\
  !*** ./src/app/components/home/student-dashboard/student-dashboard.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentDashboardComponent": () => (/* binding */ StudentDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_appointment_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/appointment.service */ 7535);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-pagination */ 7483);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);





function StudentDashboardComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Empty consulted lawyers");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function StudentDashboardComponent_tr_19_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function StudentDashboardComponent_tr_19_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lawyer_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", lawyer_r2.user.profileImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function StudentDashboardComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, StudentDashboardComponent_tr_19_div_3_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, StudentDashboardComponent_tr_19_ng_template_4_Template, 2, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h6", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lawyer_r2 = ctx.$implicit;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", lawyer_r2.user.profileImageUrl === null)("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", lawyer_r2.user.firstName, " ", lawyer_r2.user.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](lawyer_r2.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](lawyer_r2.user.companyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](lawyer_r2.user.state);
} }
const _c0 = function (a1) { return { itemsPerPage: 10, currentPage: a1, id: "1" }; };
class StudentDashboardComponent {
    constructor(appointmentService) {
        this.appointmentService = appointmentService;
        this.filterValue = [];
    }
    ngOnInit() {
        this.userId = localStorage.getItem("userId");
        this.getLawyerListFromAppointments();
    }
    getLawyerListFromAppointments() {
        let requestBody = {
            studentId: this.userId
        };
        this.appointmentService.getAppointmentsByStatusOrLawyerId(requestBody).subscribe(res => {
            var _a;
            if (!((_a = res.data) === null || _a === void 0 ? void 0 : _a.length)) {
                this.isEmpty = true;
            }
            console.log(res, "appointment list");
            let user = [];
            user = res.data;
            let result = user.filter((item, i, arr) => arr.findIndex((t) => t.lawyerId === item.lawyerId) === i);
            this.lawyers = result;
            this.filterValue = this.lawyers;
        });
    }
    filterByText(initial) {
        this.lawyers = this.filterValue;
        this.lawyers = this.lawyers.filter(i => i.user.firstName.toLowerCase().indexOf(initial.toLocaleLowerCase()) !== -1);
        console.log(this.lawyers);
    }
}
StudentDashboardComponent.ɵfac = function StudentDashboardComponent_Factory(t) { return new (t || StudentDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_appointment_service__WEBPACK_IMPORTED_MODULE_0__.AppointmentService)); };
StudentDashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: StudentDashboardComponent, selectors: [["app-student-dashboard"]], decls: 22, vars: 7, consts: [[1, "mb-0", "text-uppercase"], [1, "row", "my-3", "justify-content-end"], [1, "col-4"], ["type", "text", "placeholder", "Search by name", 1, "form-control", 3, "keyup"], [4, "ngIf"], [1, "card", "radius-10"], [1, "card-body"], ["id", "Transaction-History", 1, "table", "align-middle", "mb-0", "table-hover"], [1, "table-light"], ["class", "clickable", "routerLink", "document-upload", 4, "ngFor", "ngForOf"], ["id", "1", "maxSize", "10", "directionLinks", "true", "autoHide", "true", 3, "pageChange"], ["routerLink", "document-upload", 1, "clickable"], [1, "d-flex", "align-items-center"], ["class", "", 4, "ngIf", "ngIfElse"], ["second", ""], [1, "ms-2"], [1, "mb-1", "font-14"], [1, "mb-0", "font-13", "text-secondary"], [1, ""], ["src", "/assets/images/gallery/user_avatar.png", "alt", "", "width", "46", "height", "46", 1, "rounded-circle"], ["alt", "", "width", "46", "height", "46", 1, "rounded-circle", 3, "src"]], template: function StudentDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h6", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Consulted Lawyers");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function StudentDashboardComponent_Template_input_keyup_5_listener($event) { return ctx.filterByText($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, StudentDashboardComponent_div_6_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "thead", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Lawyer Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, StudentDashboardComponent_tr_19_Template, 15, 7, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "pagination-controls", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("pageChange", function StudentDashboardComponent_Template_pagination_controls_pageChange_21_listener($event) { return ctx.page = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isEmpty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](20, 2, ctx.lawyers, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, ctx.page)));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, ngx_pagination__WEBPACK_IMPORTED_MODULE_1__.PaginationControlsComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_1__.PaginatePipe], styles: [".card-header[_ngcontent-%COMP%] {\n  background-color: #001f49;\n}\n\n.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWRlbnQtZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSiIsImZpbGUiOiJzdHVkZW50LWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxZjQ5O1xyXG59XHJcblxyXG4uY2xpY2thYmxle1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"] });


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
//# sourceMappingURL=src_app_components_home_home_module_ts.js.map