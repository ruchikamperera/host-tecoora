"use strict";
(self["webpackChunksyndron"] = self["webpackChunksyndron"] || []).push([["default-src_app_components_lawyer_appointment-calendar_appointment-calendar_component_ts-src_-f8e80d"],{

/***/ 8234:
/*!******************************************************************************************!*\
  !*** ./src/app/components/lawyer/appointment-calendar/appointment-calendar.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppointmentCalendarComponent": () => (/* binding */ AppointmentCalendarComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9441);
/* harmony import */ var src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/constants/enums/toaster */ 7776);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var src_app_shared_services_data_transform_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/data-transform.service */ 3791);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _shared_services_appointment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/services/appointment.service */ 7535);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ 4183);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var _shared_services_timeslot_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../shared/services/timeslot.service */ 4764);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-calendar */ 9480);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);













const _c0 = ["modalContent"];
function AppointmentCalendarComponent_mwl_calendar_month_view_35_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mwl-calendar-month-view", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("dayClicked", function AppointmentCalendarComponent_mwl_calendar_month_view_35_Template_mwl_calendar_month_view_dayClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r3.dayClicked($event.day); })("dayClicked", function AppointmentCalendarComponent_mwl_calendar_month_view_35_Template_mwl_calendar_month_view_dayClicked_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](37); return ctx_r5.openModal(_r1); })("eventClicked", function AppointmentCalendarComponent_mwl_calendar_month_view_35_Template_mwl_calendar_month_view_eventClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r6.handleEvent("Clicked", $event.event); })("eventTimesChanged", function AppointmentCalendarComponent_mwl_calendar_month_view_35_Template_mwl_calendar_month_view_eventTimesChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r7.eventTimesChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("viewDate", ctx_r0.viewDate)("events", ctx_r0.events)("refresh", ctx_r0.refresh);
} }
function AppointmentCalendarComponent_ng_template_36_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const timeSlot_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", timeSlot_r9.isBooked ? "booked" : "btn-event-type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", timeSlot_r9.fromTime, " - ", timeSlot_r9.toTime, "");
} }
function AppointmentCalendarComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h4", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Add time slots");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppointmentCalendarComponent_ng_template_36_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r11.bsModalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ul", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, AppointmentCalendarComponent_ng_template_36_li_13_Template, 4, 3, "li", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Start Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "End Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "ngb-timepicker", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AppointmentCalendarComponent_ng_template_36_Template_ngb_timepicker_ngModelChange_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r13.timeStart = $event; })("ngModelChange", function AppointmentCalendarComponent_ng_template_36_Template_ngb_timepicker_ngModelChange_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r14.onTimeStartChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "ngb-timepicker", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AppointmentCalendarComponent_ng_template_36_Template_ngb_timepicker_ngModelChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r15.timeEnd = $event; })("ngModelChange", function AppointmentCalendarComponent_ng_template_36_Template_ngb_timepicker_ngModelChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r16.onTimeEndChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppointmentCalendarComponent_ng_template_36_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r17.addTimeSlot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppointmentCalendarComponent_ng_template_36_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r18.bsModalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.clickedDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.timeSlots);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hourStep", ctx_r2.hourStep)("minuteStep", ctx_r2.minuteStep)("ngModel", ctx_r2.timeStart)("spinners", false)("meridian", ctx_r2.meridianStart);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r2.timeEnd)("meridian", ctx_r2.meridianEnd)("spinners", false);
} }
const colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3',
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF',
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA',
    },
};
class AppointmentCalendarComponent {
    constructor(modal, appointmentService, modalService, toaster, datePipe, timeSlotService) {
        this.modal = modal;
        this.appointmentService = appointmentService;
        this.modalService = modalService;
        this.toaster = toaster;
        this.datePipe = datePipe;
        this.timeSlotService = timeSlotService;
        this.view = 'month';
        this.title = 'Modal Title';
        this.viewDate = new Date();
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.events = [];
        this.activeDayIsOpen = true;
        this.date = new Date();
        this._dateFormat = new src_app_shared_services_data_transform_service__WEBPACK_IMPORTED_MODULE_1__.DateTransformService(this.datePipe);
        this.timeSlots = [];
        this.meridianStart = true;
        this.meridianEnd = true;
        this.fromTime = null;
        this.toTime = null;
        this.startDate = this._dateFormat.dateTransformFullYear(new Date(this.date.getFullYear(), this.date.getMonth(), 1));
        this.endDate = this._dateFormat.dateTransformFullYear(new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0));
        this.timeStart = {
            hour: this.date.getHours(),
            minute: this.date.getMinutes(),
        };
        this.timeEnd = {
            hour: this.date.getHours() + 1,
            minute: this.date.getMinutes(),
        };
    }
    ngOnInit() {
        this.userId = Number(localStorage.getItem("userId"));
        this.getAppointments(this.userId);
    }
    dayClicked({ date, events }) {
        this.dayEvents = events;
        let day = new Date(date);
        this.clickedDay = day.toString().split(':')[0].slice(0, -3);
        this.timeSlots = [];
        this.isDayClicked = true;
        this.slotDate = day;
    }
    getTimeSlots() {
        let dayTimeSlots = [];
        this.timeSlotService.getTimeSlotsByLawyerId(this.userId).subscribe(res => {
            res.data.forEach(element => {
                let mockDay = element.fromTime.toString().split('T');
                let mockedDate = mockDay[0];
                let mockTime = mockDay[1];
                let clickedDate = this._dateFormat.dateFromString(`${mockedDate} ${mockTime}`);
                if (this.slotDate.getFullYear() == clickedDate.getFullYear()
                    && this.slotDate.getMonth() == clickedDate.getMonth()
                    && this.slotDate.getDate() == clickedDate.getDate()) {
                    dayTimeSlots.push(element);
                }
            });
            let bookedTimeSlotsIds = [];
            this.dayEvents.forEach(e => {
                bookedTimeSlotsIds.push(e.id);
            });
            dayTimeSlots.forEach(e => {
                if (bookedTimeSlotsIds.includes(e.id)) {
                    e.isBooked = true;
                }
                else {
                    e.isBooked = false;
                }
                e.fromTime = `${e.fromTime.split('T')[1].split(':')[0]}:${e.fromTime.split('T')[1].split(':')[1]}`;
                e.toTime = `${e.toTime.split('T')[1].split(':')[0]}:${e.toTime.split('T')[1].split(':')[1]}`;
                this.timeSlots.push(e);
            });
        }, error => {
        });
    }
    eventTimesChanged({ event, newStart, newEnd, }) {
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    }
    handleEvent(action, event) {
        this.modalData = { event, action };
        this.modal.open(this.modalContent, { size: 'lg' });
    }
    onTimeStartChange(value) {
        let selectedDate = this._dateFormat.dateTransformFullYear(this.slotDate);
        this.fromTime = this._dateFormat.dateFromString(`${selectedDate} ${value.hour}:${value.minute}`);
    }
    onTimeEndChange(value) {
        let selectedDate = this._dateFormat.dateTransformFullYear(this.slotDate);
        this.toTime = this._dateFormat.dateFromString(`${selectedDate} ${value.hour}:${value.minute}`);
    }
    addTimeSlot() {
        let selectedDate = this._dateFormat.dateTransformFullYear(this.slotDate);
        if (this.fromTime === null) {
            this.fromTime = this._dateFormat.dateFromString(`${selectedDate} ${this.timeStart.hour}:${this.timeStart.minute}`);
        }
        if (this.toTime === null) {
            this.toTime = this._dateFormat.dateFromString(`${selectedDate} ${this.timeEnd.hour}:${this.timeEnd.minute}`);
        }
        let timeSlotDto = {
            lawyerId: this.userId,
            fromTime: new _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe('en-US').transform(this.fromTime, 'yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\''),
            toTime: new _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe('en-US').transform(this.toTime, 'yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\''),
        };
        this.timeSlotService.createTimeSlot(timeSlotDto).subscribe(res => {
            this.timeSlots = [];
            this.getTimeSlots();
        });
    }
    getAppointments(loggedInUserId) {
        //get appointment by lawyer id service
        let appointmentRequestData = {
            lawyerId: loggedInUserId
        };
        this.appointmentService.getAppointmentsByStatusOrLawyerId(appointmentRequestData).subscribe(res => {
            let appointments = res.data;
            appointments.forEach((e) => {
                let day = e.appointmentDate.toString().split('T');
                let date = day[0];
                let time = day[1];
                let startTime = this._dateFormat.dateFromString(`${date} ${time}`);
                let endTime = this._dateFormat.dateFromString(`${date} ${time}`);
                this.events.push({
                    id: e.timeSlotId,
                    title: e.status,
                    color: colors.red,
                    start: startTime,
                    end: endTime,
                });
            });
            if (!this.events.length) {
                this.toaster.success(src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterEmptyAppointment, "", {
                    timeOut: src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterTimeout,
                });
            }
        }, error => {
            this.toaster.error(src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterAppointmentError, src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterFailure, {
                timeOut: src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterTimeout,
            });
        });
        if (this.view == 'month') {
            setTimeout(() => {
                if (document.getElementsByClassName('cal-open-day-events').length) {
                    document.getElementsByClassName('cal-open-day-events')[0].setAttribute('style', 'display: none;');
                }
            }, 50);
        }
    }
    openModal(template) {
        this.getTimeSlots();
        this.bsModalRef = this.modalService.show(template, {
            class: 'modal-dialog-centered modal-lg', // Change this line to set the size and position of the modal
        });
    }
    save() {
        // TODO: Implement logic to save data
        this.bsModalRef.hide();
    }
}
AppointmentCalendarComponent.ɵfac = function AppointmentCalendarComponent_Factory(t) { return new (t || AppointmentCalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_appointment_service__WEBPACK_IMPORTED_MODULE_2__.AppointmentService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__.BsModalService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_timeslot_service__WEBPACK_IMPORTED_MODULE_4__.TimeslotService)); };
AppointmentCalendarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppointmentCalendarComponent, selectors: [["app-appointment-calendar"]], viewQuery: function AppointmentCalendarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.modalContent = _t.first);
    } }, decls: 38, vars: 17, consts: [[1, "page-breadcrumb", "d-none", "d-sm-flex", "align-items-center", "mb-3"], [1, "breadcrumb-title", "pe-3"], [1, "ps-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0"], [1, "breadcrumb-item"], ["href", "#", 3, "click"], [1, "bx", "bx-home-alt"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "card"], [1, "card-content"], [1, "card-body"], [1, "row", "d-flex", "flex-wrap", "justify-content-md-between", "mb-3", "no-gutters"], [1, "col"], [1, "btn-group", "d-none", "d-sm-none", "d-md-none", "d-lg-block"], ["mwlCalendarPreviousView", "", 1, "btn", "btn-primary", 3, "view", "viewDate", "viewDateChange"], ["mwlCalendarToday", "", 1, "btn", "btn-danger", 3, "viewDate", "viewDateChange"], ["mwlCalendarNextView", "", 1, "btn", "btn-primary", 3, "view", "viewDate", "viewDateChange"], [1, "btn-group", "d-block", "d-sm-block", "d-md-block", "d-lg-none"], ["mwlCalendarPreviousView", "", 1, "btn", "btn-primary", "btn-sm", "pb-0", "bx", "bx-caret-left", 3, "view", "viewDate", "viewDateChange"], [1, "icon", "icon-arrows-left"], ["mwlCalendarToday", "", 1, "btn", "btn-danger", "btn-sm", "pb-0", "bx", "bx-caret-down", 3, "viewDate", "viewDateChange"], [1, "icon", "icon-arrows-sign-down"], ["mwlCalendarNextView", "", 1, "btn", "btn-primary", "btn-sm", "pb-0", "bx", "bx-caret-right", 3, "view", "viewDate", "viewDateChange"], [1, "icon", "icon-arrows-right"], [1, "col", "text-end", "align-self-center", "align-items-center"], [1, "mb-0"], [3, "ngSwitch"], [3, "viewDate", "events", "refresh", "dayClicked", "eventClicked", "eventTimesChanged", 4, "ngSwitchCase"], ["template", ""], [3, "viewDate", "events", "refresh", "dayClicked", "eventClicked", "eventTimesChanged"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], [1, "col-md-3"], [1, "list-group", "list-group-flush", "radius-10"], ["class", "col list-group-item d-flex align-items-center radius-10 mb-2 shadow-sm", 4, "ngFor", "ngForOf"], [1, "col-md-9"], [1, "col-md-5"], [1, "col-md-2"], ["id", "timePickerStart", 3, "hourStep", "minuteStep", "ngModel", "spinners", "meridian", "ngModelChange"], ["id", "timePickerEnd", 3, "ngModel", "meridian", "spinners", "ngModelChange"], [1, "col-md-2", "align-self-center"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "col", "list-group-item", "d-flex", "align-items-center", "radius-10", "mb-2", "shadow-sm"], [1, "flex-grow-1", 3, "ngClass"]], template: function AppointmentCalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppointmentCalendarComponent_Template_a_click_7_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Appointment Calender");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("viewDateChange", function AppointmentCalendarComponent_Template_a_viewDateChange_17_listener($event) { return ctx.viewDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " Previous ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("viewDateChange", function AppointmentCalendarComponent_Template_a_viewDateChange_19_listener($event) { return ctx.viewDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, " Today ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("viewDateChange", function AppointmentCalendarComponent_Template_a_viewDateChange_21_listener($event) { return ctx.viewDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("viewDateChange", function AppointmentCalendarComponent_Template_a_viewDateChange_24_listener($event) { return ctx.viewDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("viewDateChange", function AppointmentCalendarComponent_Template_a_viewDateChange_26_listener($event) { return ctx.viewDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("viewDateChange", function AppointmentCalendarComponent_Template_a_viewDateChange_28_listener($event) { return ctx.viewDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "h6", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](33, "calendarDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, AppointmentCalendarComponent_mwl_calendar_month_view_35_Template, 1, 3, "mwl-calendar-month-view", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, AppointmentCalendarComponent_ng_template_36_Template, 34, 10, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](33, 13, ctx.viewDate, ctx.view + "ViewTitle", "en"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitch", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", "month");
    } }, directives: [angular_calendar__WEBPACK_IMPORTED_MODULE_10__["ɵf"], angular_calendar__WEBPACK_IMPORTED_MODULE_10__["ɵh"], angular_calendar__WEBPACK_IMPORTED_MODULE_10__["ɵg"], _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitchCase, angular_calendar__WEBPACK_IMPORTED_MODULE_10__.CalendarMonthViewComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbTimepicker, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass], pipes: [angular_calendar__WEBPACK_IMPORTED_MODULE_10__["ɵi"]], styles: [".booked[_ngcontent-%COMP%] {\n  background-color: aqua;\n  color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcG9pbnRtZW50LWNhbGVuZGFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxXQUFBO0FBQ0oiLCJmaWxlIjoiYXBwb2ludG1lbnQtY2FsZW5kYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9va2Vke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcclxuICAgIGNvbG9yOiBibHVlO1xyXG59Il19 */"] });


/***/ }),

/***/ 5414:
/*!********************************************************************************!*\
  !*** ./src/app/components/lawyer/new-appointment/new-appointment.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewAppointmentComponent": () => (/* binding */ NewAppointmentComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/constants/enums/toaster */ 7776);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_appointment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/appointment.service */ 7535);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);





function NewAppointmentComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "No pending appointments.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NewAppointmentComponent_tr_32_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NewAppointmentComponent_tr_32_Template_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const event_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.appointmentCancel(event_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](event_r2.appointmentDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](event_r2.callType);
} }
class NewAppointmentComponent {
    constructor(appointmentService, toaster) {
        this.appointmentService = appointmentService;
        this.toaster = toaster;
        this.date = new Date();
        this.events = [];
        this.newAppointments = [];
    }
    ngOnInit() {
        this.userId = Number(localStorage.getItem("userId"));
        this.getAppointments('pending', this.userId);
    }
    getAppointments(status, loginUserId) {
        const appointmentRequestDto = {
            status: status,
            lawyerId: loginUserId,
        };
        this.appointmentService
            .getAppointmentsByStatusOrLawyerId(appointmentRequestDto)
            .subscribe((response) => {
            var _a;
            this.newAppointments = response.data;
            (_a = this.newAppointments) === null || _a === void 0 ? void 0 : _a.forEach((e) => {
                this.events.push({
                    appointmentDate: e.appointmentDate.toString().split('T')[0],
                    callType: e.callType,
                    id: e.id,
                    status: e.status,
                });
            });
            console.log(this.events, 'events');
            if (!this.events.length) {
                this.isEmpty = true;
                console.log(this.isEmpty);
            }
            else {
                this.isEmpty = false;
            }
        });
    }
    appointmentCancel(cancelAppointmentId) {
        this.toBeCanceledAppointment = this.newAppointments.filter((appointment) => {
            return appointment.id == cancelAppointmentId;
        });
        this.toBeCanceledAppointment[0].status = 'cancel';
        this.appointmentService
            .updateAppointments(this.toBeCanceledAppointment[0])
            .subscribe((response) => {
            this.events = [];
            this.getAppointments('pending', this.userId);
            this.toaster.success(src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterAppointmentCancel, src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterSuccess, {
                timeOut: src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterTimeout,
            });
        }, error => {
            this.toaster.error(src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterAppointmentCancel, src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterFailure, {
                timeOut: src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterTimeout,
            });
        });
    }
}
NewAppointmentComponent.ɵfac = function NewAppointmentComponent_Factory(t) { return new (t || NewAppointmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_appointment_service__WEBPACK_IMPORTED_MODULE_1__.AppointmentService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService)); };
NewAppointmentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NewAppointmentComponent, selectors: [["app-new-appointment"]], decls: 33, vars: 2, consts: [[1, "page-breadcrumb", "d-none", "d-sm-flex", "align-items-center", "mb-3"], [1, "breadcrumb-title", "pe-3"], [1, "ps-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0"], [1, "breadcrumb-item"], ["href", "#", 3, "click"], [1, "bx", "bx-home-alt"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "align-items-center", "mb-2", "mt-2", "gap-3"], [1, "row", "row-cols-1", "row-cols-md-1"], [1, "col"], [4, "ngIf"], [1, "card", "radius-10", "shadow-none", "overflow-hidden"], [1, "card-body"], [1, "table-responsive"], [1, "table", "align-middle", "mb-0"], [1, "table-light"], [4, "ngFor", "ngForOf"], [1, "text-center"], [1, "d-flex", "align-items-center", "text-danger"], [1, "bx", "bx-radio-circle-marked", "bx-burst", "bx-rotate-90", "align-middle", "font-18", "me-1"], [1, "d-flex", "order-actions"], [1, "btn", "btn-outline-danger", 3, "click"]], template: function NewAppointmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NewAppointmentComponent_Template_a_click_7_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "New Appointments");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Appointment Requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, NewAppointmentComponent_div_16_Template, 3, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "thead", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Call Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, NewAppointmentComponent_tr_32_Template, 14, 2, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isEmpty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.events);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctYXBwb2ludG1lbnQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 7911:
/*!**************************************************!*\
  !*** ./src/app/shared/constants/enums/common.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateTransform": () => (/* binding */ DateTransform)
/* harmony export */ });
class DateTransform {
}
DateTransform.dateTransformFullYear = 'yyyy-MM-dd';
DateTransform.dateTransformTime = 'HH:mm';
DateTransform.dateTransformAmPm = 'h:mm a';


/***/ }),

/***/ 3791:
/*!***********************************************************!*\
  !*** ./src/app/shared/services/data-transform.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateTransformService": () => (/* binding */ DateTransformService)
/* harmony export */ });
/* harmony import */ var _constants_enums_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/enums/common */ 7911);

class DateTransformService {
    constructor(datePipe) {
        this.datePipe = datePipe;
    }
    dateTransformFullYear(date) {
        return this.datePipe.transform(date, _constants_enums_common__WEBPACK_IMPORTED_MODULE_0__.DateTransform.dateTransformFullYear);
    }
    dateTransformTime(date) {
        return this.datePipe.transform(date, _constants_enums_common__WEBPACK_IMPORTED_MODULE_0__.DateTransform.dateTransformTime);
    }
    dateFromString(dateString) {
        return new Date(Date.parse(dateString.replace(/-/g, '/'))); //       / /g, 'T'
    }
}


/***/ }),

/***/ 4764:
/*!*****************************************************!*\
  !*** ./src/app/shared/services/timeslot.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeslotService": () => (/* binding */ TimeslotService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _constants_enums_action_names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/enums/action-names */ 7339);
/* harmony import */ var _01_base_service_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./01_base-service/base.service */ 9135);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);





class TimeslotService extends _01_base_service_base_service__WEBPACK_IMPORTED_MODULE_1__.BaseService {
    constructor(http) {
        super();
        this.http = http;
    }
    getTimeSlotsByLawyerId(lawyerId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
        // Begin assigning parameters
        params = params.append('lawyerId', lawyerId);
        return this.http.get(this.getBaseUrl(_constants_enums_action_names__WEBPACK_IMPORTED_MODULE_0__.ApiActionName.GetTimeSlotsByLawyerId), { params: params });
    }
    createTimeSlot(timeSlotDto) {
        return this.http.post(this.getBaseUrl(_constants_enums_action_names__WEBPACK_IMPORTED_MODULE_0__.ApiActionName.CreateTimeSlot), timeSlotDto);
    }
}
TimeslotService.ɵfac = function TimeslotService_Factory(t) { return new (t || TimeslotService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
TimeslotService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: TimeslotService, factory: TimeslotService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=default-src_app_components_lawyer_appointment-calendar_appointment-calendar_component_ts-src_-f8e80d.js.map