"use strict";
(self["webpackChunksyndron"] = self["webpackChunksyndron"] || []).push([["src_app_components_lawyer_lawyer_module_ts"],{

/***/ 4689:
/*!********************************************************************************!*\
  !*** ./src/app/components/lawyer/document-select/document-select.component.ts ***!
  \********************************************************************************/
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
/* harmony import */ var _shared_services_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/services/file.service */ 2965);
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

/***/ 9531:
/*!****************************************************!*\
  !*** ./src/app/components/lawyer/import.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImportModule": () => (/* binding */ ImportModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/table */ 5608);
/* harmony import */ var _input_file_button_input_file_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input-file-button/input-file-button.component */ 4955);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ 2165);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ 5532);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ 7119);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ 3512);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ 8879);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ 7555);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ 4357);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ 9141);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ 1172);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ 5933);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ 8076);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ 524);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ 3204);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ 1244);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material */ 938);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material */ 7314);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material */ 6567);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material */ 6630);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material */ 7719);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material */ 9129);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material */ 8396);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material */ 5635);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material */ 694);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material */ 5593);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material */ 6534);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material */ 7351);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material */ 7191);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material */ 7147);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material */ 9449);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material */ 7462);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);






class ImportModule {
}
ImportModule.ɵfac = function ImportModule_Factory(t) { return new (t || ImportModule)(); };
ImportModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ImportModule });
ImportModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__.CdkTableModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_5__.MatAutocompleteModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_7__.MatButtonToggleModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_8__.MatCardModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_10__.MatChipsModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_11__.MatStepperModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_13__.MatDialogModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_14__.MatExpansionModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_15__.MatGridListModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_16__.MatIconModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_18__.MatListModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_19__.MatMenuModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_20__.MatNativeDateModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_21__.MatPaginatorModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_22__.MatProgressBarModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_23__.MatProgressSpinnerModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_24__.MatRadioModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_20__.MatRippleModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_25__.MatSelectModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_26__.MatSidenavModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_27__.MatSliderModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_28__.MatSlideToggleModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_29__.MatSnackBarModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_30__.MatSortModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_31__.MatTableModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_32__.MatTabsModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_33__.MatToolbarModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_34__.MatTooltipModule,
        ], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__.CdkTableModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_5__.MatAutocompleteModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_7__.MatButtonToggleModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_8__.MatCardModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_10__.MatChipsModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_11__.MatStepperModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_13__.MatDialogModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_14__.MatExpansionModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_15__.MatGridListModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_16__.MatIconModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_18__.MatListModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_19__.MatMenuModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_20__.MatNativeDateModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_21__.MatPaginatorModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_22__.MatProgressBarModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_23__.MatProgressSpinnerModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_24__.MatRadioModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_20__.MatRippleModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_25__.MatSelectModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_26__.MatSidenavModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_27__.MatSliderModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_28__.MatSlideToggleModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_29__.MatSnackBarModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_30__.MatSortModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_31__.MatTableModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_32__.MatTabsModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_33__.MatToolbarModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_34__.MatTooltipModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ImportModule, { declarations: [_input_file_button_input_file_button_component__WEBPACK_IMPORTED_MODULE_0__.InputFileButtonComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__.CdkTableModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_5__.MatAutocompleteModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_7__.MatButtonToggleModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_8__.MatCardModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_10__.MatChipsModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_11__.MatStepperModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_13__.MatDialogModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_14__.MatExpansionModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_15__.MatGridListModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_16__.MatIconModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_18__.MatListModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_19__.MatMenuModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_20__.MatNativeDateModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_21__.MatPaginatorModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_22__.MatProgressBarModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_23__.MatProgressSpinnerModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_24__.MatRadioModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_20__.MatRippleModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_25__.MatSelectModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_26__.MatSidenavModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_27__.MatSliderModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_28__.MatSlideToggleModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_29__.MatSnackBarModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_30__.MatSortModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_31__.MatTableModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_32__.MatTabsModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_33__.MatToolbarModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_34__.MatTooltipModule], exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__.CdkTableModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_5__.MatAutocompleteModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_7__.MatButtonToggleModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_8__.MatCardModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_10__.MatChipsModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_11__.MatStepperModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_13__.MatDialogModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_14__.MatExpansionModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_15__.MatGridListModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_16__.MatIconModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_18__.MatListModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_19__.MatMenuModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_20__.MatNativeDateModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_21__.MatPaginatorModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_22__.MatProgressBarModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_23__.MatProgressSpinnerModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_24__.MatRadioModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_20__.MatRippleModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_25__.MatSelectModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_26__.MatSidenavModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_27__.MatSliderModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_28__.MatSlideToggleModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_29__.MatSnackBarModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_30__.MatSortModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_31__.MatTableModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_32__.MatTabsModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_33__.MatToolbarModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_34__.MatTooltipModule,
        _input_file_button_input_file_button_component__WEBPACK_IMPORTED_MODULE_0__.InputFileButtonComponent] }); })();


/***/ }),

/***/ 4955:
/*!************************************************************************************!*\
  !*** ./src/app/components/lawyer/input-file-button/input-file-button.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputFileButtonComponent": () => (/* binding */ InputFileButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4364);



const _c0 = ["fileName"];
const _c1 = ["fileInput"];
function InputFileButtonComponent_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 11, 12);
} }
function InputFileButtonComponent_i_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputFileButtonComponent_i_6_Template_i_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.handleInputCancel($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InputFileButtonComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.subString, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.dataAggiornamento);
} }
class InputFileButtonComponent {
    constructor() {
        this.fileAdded = false;
        this.emptyInputString = '';
        this.subString = ': ';
        this.dataAggiornamento = '';
        this.idInput = '';
        this.fileSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    handleInputChange(event) {
        this.fileAdded = true;
        const inputFile = event.target.files[0];
        this.fileName.nativeElement.innerHTML = inputFile.name;
    }
    handleInputClick() {
        if (this.fileName.nativeElement.innerHTML === this.emptyInputString) {
            this.fileAdded = false;
        }
    }
    handleInputCancel(ev) {
        this.fileInput.nativeElement.value = '';
        this.fileName.nativeElement.innerHTML = this.emptyInputString;
        //this prevevent the re-opening of the select-file dialog
        ev.preventDefault();
        this.fileAdded = false;
        // reset input
        this.inputFile = null;
        this.fileSelected.emit(null);
    }
}
InputFileButtonComponent.ɵfac = function InputFileButtonComponent_Factory(t) { return new (t || InputFileButtonComponent)(); };
InputFileButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputFileButtonComponent, selectors: [["app-input-file-button"]], viewQuery: function InputFileButtonComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileName = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
    } }, inputs: { emptyInputString: "emptyInputString", subString: "subString", dataAggiornamento: "dataAggiornamento", idInput: "idInput" }, outputs: { fileSelected: "fileSelected" }, decls: 12, vars: 6, consts: [[1, "wrapper", "text-center"], [1, "icon-wrapper"], ["type", "file", 1, "inputfile", 3, "id", "click", "change"], ["fileInput", ""], [3, "for"], ["class", "fa fa-upload", 4, "ngIf"], ["class", "fa fa-times", 3, "click", 4, "ngIf"], [1, "container"], ["id", "search"], ["fileName", ""], ["id", "text", 4, "ngIf"], [1, "fa", "fa-upload"], ["circleIcon", ""], [1, "fa", "fa-times", 3, "click"], ["closeIcon", ""], ["id", "text"]], template: function InputFileButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputFileButtonComponent_Template_input_click_2_listener() { return ctx.handleInputClick(); })("change", function InputFileButtonComponent_Template_input_change_2_listener($event) { return ctx.handleInputChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InputFileButtonComponent_i_5_Template, 2, 0, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InputFileButtonComponent_i_6_Template, 2, 0, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, InputFileButtonComponent_p_11_Template, 4, 2, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.idInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.idInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.fileAdded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fileAdded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.emptyInputString);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.fileAdded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: [".wrapper[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center;\n  margin: 10px;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-bottom: 5px;\n  margin-left: 5px;\n}\n\ni[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: #69C0Ca;\n  margin-bottom: 2px;\n}\n\n#text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  display: none;\n  margin-top: -20px;\n}\n\n.container[_ngcontent-%COMP%]:hover   p#text[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.inputfile[_ngcontent-%COMP%] {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n\n.inputfile[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  font-size: 1.25em;\n  font-weight: 700;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LWZpbGUtYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBR0EsWUFBQTtBQURKOztBQUlFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFFQSxtQkFBQTtFQUNBLGdCQUFBO0FBRko7O0FBS0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRko7O0FBS0U7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBRko7O0FBS0U7RUFDRSxjQUFBO0FBRko7O0FBT0U7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUpOOztBQU1FO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFITiIsImZpbGUiOiJpbnB1dC1maWxlLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVye1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyBcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvLyB3aWR0aDogMzAwcHg7XHJcbiAgICAvLyBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyeyBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAvLyBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGkge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6ICM2OUMwQ2E7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgfVxyXG4gIFxyXG4gICN0ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IC0yMHB4XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXI6aG92ZXIgcCN0ZXh0e1xyXG4gICAgZGlzcGxheTogYmxvY2s7IFxyXG4gICAgLy9oZWlnaHQ6IDIwcHg7XHJcbiAgICAvL3BhZGRpbmctdG9wOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuaW5wdXRmaWxlIHtcclxuICAgICAgd2lkdGg6IDAuMXB4O1xyXG4gICAgICBoZWlnaHQ6IDAuMXB4O1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuICAuaW5wdXRmaWxlICsgbGFiZWwge1xyXG4gICAgICBmb250LXNpemU6IDEuMjVlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ 7662:
/*!**********************************************************************************!*\
  !*** ./src/app/components/lawyer/lawyer-dashboard/lawyer-dashboard.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LawyerDashboardComponent": () => (/* binding */ LawyerDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_enum_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enum/common */ 8760);
/* harmony import */ var src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/constants/enums/toaster */ 7776);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/services/user.service */ 8613);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-multiselect-dropdown */ 460);










function LawyerDashboardComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "First name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LawyerDashboardComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LawyerDashboardComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Invalid email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LawyerDashboardComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Access area is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class LawyerDashboardComponent {
    constructor(staffBuilder, userService, toaster) {
        this.staffBuilder = staffBuilder;
        this.userService = userService;
        this.toaster = toaster;
        this.dropdownList = [];
        this.dropdownSettings = {};
    }
    ngOnInit() {
        this.dropdownList = [
            { item_id: 1, item_text: 'appointment handling' },
            { item_id: 2, item_text: 'payment' }
        ];
        this.dropdownSettings = {
            idField: 'item_id',
            textField: 'item_text',
        };
        this.createForm();
        this.setStatus();
    }
    setStatus() {
        (this.staffForm.controls['area'].value.length > 0) ? this.requiredField = true : this.requiredField = false;
    }
    onItemSelect(item) {
        this.setClass();
    }
    onSelectAll(items) {
        (items.length > 0) ? this.requiredField = true : this.requiredField = false;
    }
    setClass() {
        this.setStatus();
        if (this.staffForm.controls['area'].value.length > 0) {
            return 'validField';
        }
        else {
            return 'invalidField';
        }
    }
    createForm() {
        this.staffForm = this.staffBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            lastName: [''],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(src_app_enum_common__WEBPACK_IMPORTED_MODULE_0__.Regex.emailValidation)]],
            area: [''],
        });
    }
    getFormValues() {
        this.firstName = this.staffForm.controls['firstName'].value;
        this.lastName = this.staffForm.controls['lastName'].value;
        this.email = this.staffForm.controls['email'].value;
        this.area = this.staffForm.controls['area'].value;
    }
    save() {
        this.getFormValues();
        let accessArea = [];
        this.area.forEach(element => {
            accessArea.push(element.item_text);
        });
        let body = {
            FirstName: this.firstName,
            LastName: this.lastName,
            UserType: src_app_enum_common__WEBPACK_IMPORTED_MODULE_0__.UserRole.Staff,
            Email: this.email,
            accessArea: accessArea
        };
        this.staffForm.reset();
        //call staff crate api 
        this.userService.createUser(body).subscribe(res => {
            this.toaster.success(src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_1__.Message.toasterCreateStaff, src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_1__.Message.toasterSuccess, {
                timeOut: src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_1__.Message.toasterTimeout,
            });
        }, error => {
            this.toaster.error(src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_1__.Message.toasterCreateStaffError, src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_1__.Message.toasterFailure, {
                timeOut: src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_1__.Message.toasterTimeout,
            });
        });
    }
}
LawyerDashboardComponent.ɵfac = function LawyerDashboardComponent_Factory(t) { return new (t || LawyerDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService)); };
LawyerDashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LawyerDashboardComponent, selectors: [["app-lawyer-dashboard"]], decls: 60, vars: 9, consts: [[1, "background"], [1, "page-content"], [1, "card", "mt-5", "layout"], [1, "card-header", "p-0", "mt-3", "position-relative"], [1, "card-body", "pt-2"], [1, "align-items-center"], [1, "row", "justify-content-center"], [1, "col-sm-6", "text-center"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleLargeModal", 1, "card", "card-background", "move-on-hover", "home-button"], [1, "card-body", "pt-12"], ["type", "button", "routerLink", "appointment-calendar", 1, "card", "card-background", "move-on-hover", "home-button"], ["type", "button", "routerLink", "new-appointment", 1, "card", "card-background", "move-on-hover", "home-button"], ["type", "button", "routerLink", "points-calculator", 1, "card", "card-background", "move-on-hover", "home-button"], ["id", "exampleLargeModal", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "row", "g-3", 3, "formGroup"], [1, "col-md-12"], ["for", "inputFirstName", 1, "form-label"], ["type", "text", "formControlName", "firstName", "id", "inputFirstName", 1, "form-control"], ["class", "error ms-2 pt-2", 4, "ngIf"], ["for", "inputLastName", 1, "form-label"], ["type", "text", "formControlName", "lastName", "id", "inputLastName", 1, "form-control"], ["for", "inputBirthday", 1, "form-label"], ["type", "email", "formControlName", "email", "id", "inputBirthday", 1, "form-control"], ["for", "inputType", 1, "form-label"], ["formControlName", "area", 3, "settings", "data", "required", "onSelect", "onSelectAll"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", 3, "disabled", "click"], [1, "error", "ms-2", "pt-2"]], template: function LawyerDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Create staff account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " View appointment calendar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " New appointment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, " Points Calculator ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "h5", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Staff access form");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "form", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "First name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, LawyerDashboardComponent_div_39_Template, 2, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, LawyerDashboardComponent_div_48_Template, 2, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, LawyerDashboardComponent_div_49_Template, 2, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Access area");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "ng-multiselect-dropdown", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onSelect", function LawyerDashboardComponent_Template_ng_multiselect_dropdown_onSelect_53_listener($event) { return ctx.onItemSelect($event); })("onSelectAll", function LawyerDashboardComponent_Template_ng_multiselect_dropdown_onSelectAll_53_listener($event) { return ctx.onSelectAll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, LawyerDashboardComponent_div_54_Template, 2, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LawyerDashboardComponent_Template_button_click_58_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.staffForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.staffForm.controls["firstName"].hasError("required") && ctx.staffForm.controls["firstName"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.staffForm.controls["email"].hasError("required") && ctx.staffForm.controls["email"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.staffForm.controls["email"].hasError("pattern") && !ctx.staffForm.controls["email"].valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("settings", ctx.dropdownSettings)("data", ctx.dropdownList)("required", ctx.requiredField);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.requiredField);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.staffForm.valid || !ctx.requiredField);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__.MultiSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator], styles: [".card-header[_ngcontent-%COMP%] {\n  background-color: #001f49;\n}\n\n.layout[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: transparent;\n}\n\n.page-content[_ngcontent-%COMP%] {\n  background-image: url('download2.jpg');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhd3llci1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBRUE7RUFDQyxzQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0FBQ0QiLCJmaWxlIjoibGF3eWVyLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxZjQ5O1xyXG59XHJcblxyXG4ubGF5b3V0e1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ucGFnZS1jb250ZW50IHtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZy10aGVtZXMvZG93bmxvYWQyLmpwZyk7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIH1cclxuIl19 */"] });


/***/ }),

/***/ 2961:
/*!************************************************************!*\
  !*** ./src/app/components/lawyer/lawyer-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LawyerRoutingModule": () => (/* binding */ LawyerRoutingModule)
/* harmony export */ });
/* harmony import */ var _new_appointment_new_appointment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-appointment/new-appointment.component */ 5414);
/* harmony import */ var _student_form_student_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student-form/student-form.component */ 7253);
/* harmony import */ var _appointment_calendar_appointment_calendar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appointment-calendar/appointment-calendar.component */ 8234);
/* harmony import */ var _lawyer_dashboard_lawyer_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lawyer-dashboard/lawyer-dashboard.component */ 7662);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _points_calculator_points_calculator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./points-calculator/points-calculator.component */ 3251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);








const routes = [
    { path: '', component: _lawyer_dashboard_lawyer_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.LawyerDashboardComponent, data: { title: 'Lawyer Dashboard' } },
    { path: 'appointment-calendar', component: _appointment_calendar_appointment_calendar_component__WEBPACK_IMPORTED_MODULE_2__.AppointmentCalendarComponent, data: { title: 'Calendar' } },
    { path: 'new-appointment', component: _new_appointment_new_appointment_component__WEBPACK_IMPORTED_MODULE_0__.NewAppointmentComponent, data: { title: 'New Appointment' } },
    { path: 'new-appointment/student-form', component: _student_form_student_form_component__WEBPACK_IMPORTED_MODULE_1__.StudentFormComponent, data: { title: 'Student Form' } },
    { path: 'points-calculator', component: _points_calculator_points_calculator_component__WEBPACK_IMPORTED_MODULE_4__.PointsCalculatorComponent, data: { title: 'Points Calculator' } },
];
class LawyerRoutingModule {
}
LawyerRoutingModule.ɵfac = function LawyerRoutingModule_Factory(t) { return new (t || LawyerRoutingModule)(); };
LawyerRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: LawyerRoutingModule });
LawyerRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](LawyerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 8750:
/*!****************************************************!*\
  !*** ./src/app/components/lawyer/lawyer.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LawyerModule": () => (/* binding */ LawyerModule)
/* harmony export */ });
/* harmony import */ var _document_select_document_select_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./document-select/document-select.component */ 4689);
/* harmony import */ var ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-doc-viewer */ 13);
/* harmony import */ var _lawyer_dashboard_lawyer_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lawyer-dashboard/lawyer-dashboard.component */ 7662);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _lawyer_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lawyer-routing.module */ 2961);
/* harmony import */ var _appointment_calendar_appointment_calendar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appointment-calendar/appointment-calendar.component */ 8234);
/* harmony import */ var _new_appointment_new_appointment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-appointment/new-appointment.component */ 5414);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-calendar */ 9480);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ 5406);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-multiselect-dropdown */ 460);
/* harmony import */ var _student_form_student_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./student-form/student-form.component */ 7253);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _uploaded_documents_uploaded_documents_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uploaded-documents/uploaded-documents.component */ 1590);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 4461);
/* harmony import */ var img_pdf_viewer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! img-pdf-viewer */ 310);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _import_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./import.module */ 9531);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material */ 1172);
/* harmony import */ var _points_calculator_points_calculator_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./points-calculator/points-calculator.component */ 3251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2316);
























class LawyerModule {
}
LawyerModule.ɵfac = function LawyerModule_Factory(t) { return new (t || LawyerModule)(); };
LawyerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: LawyerModule });
LawyerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _lawyer_routing_module__WEBPACK_IMPORTED_MODULE_2__.LawyerRoutingModule,
            angular_calendar__WEBPACK_IMPORTED_MODULE_13__.CalendarModule.forRoot({
                provide: angular_calendar__WEBPACK_IMPORTED_MODULE_13__.DateAdapter,
                useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_14__.adapterFactory
            }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModalModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbDatepickerModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbTimepickerModule,
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_17__.NgMultiSelectDropDownModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModule,
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__.BsDatepickerModule.forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__.DatepickerModule.forRoot(),
            ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_19__.NgxDocViewerModule,
            img_pdf_viewer__WEBPACK_IMPORTED_MODULE_20__.ImgPdfViewerModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule,
            _import_module__WEBPACK_IMPORTED_MODULE_9__.ImportModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_21__.MatDialogModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](LawyerModule, { declarations: [_lawyer_dashboard_lawyer_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.LawyerDashboardComponent,
        _appointment_calendar_appointment_calendar_component__WEBPACK_IMPORTED_MODULE_3__.AppointmentCalendarComponent,
        _new_appointment_new_appointment_component__WEBPACK_IMPORTED_MODULE_4__.NewAppointmentComponent,
        _student_form_student_form_component__WEBPACK_IMPORTED_MODULE_5__.StudentFormComponent,
        _uploaded_documents_uploaded_documents_component__WEBPACK_IMPORTED_MODULE_6__.UploadedDocumentsComponent,
        _points_calculator_points_calculator_component__WEBPACK_IMPORTED_MODULE_10__.PointsCalculatorComponent,
        _document_select_document_select_component__WEBPACK_IMPORTED_MODULE_0__.DocumentSelectComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _lawyer_routing_module__WEBPACK_IMPORTED_MODULE_2__.LawyerRoutingModule, angular_calendar__WEBPACK_IMPORTED_MODULE_13__.CalendarModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModalModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbDatepickerModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbTimepickerModule,
        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_17__.NgMultiSelectDropDownModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__.BsDatepickerModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__.DatepickerModule, ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_19__.NgxDocViewerModule,
        img_pdf_viewer__WEBPACK_IMPORTED_MODULE_20__.ImgPdfViewerModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule,
        _import_module__WEBPACK_IMPORTED_MODULE_9__.ImportModule,
        _angular_material__WEBPACK_IMPORTED_MODULE_21__.MatDialogModule] }); })();


/***/ }),

/***/ 3251:
/*!************************************************************************************!*\
  !*** ./src/app/components/lawyer/points-calculator/points-calculator.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PointsCalculatorComponent": () => (/* binding */ PointsCalculatorComponent),
/* harmony export */   "Question": () => (/* binding */ Question)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/constants/enums/toaster */ 7776);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var src_app_shared_services_student_point_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/student-point-form.service */ 250);
/* harmony import */ var src_app_shared_services_question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/question.service */ 8505);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ 4183);
/* harmony import */ var _document_select_document_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../document-select/document-select.component */ 4689);











const _c0 = ["modalContent"];
function PointsCalculatorComponent_h5_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h5", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Australian point system");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function PointsCalculatorComponent_h5_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h5", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Canberra metrics system");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function PointsCalculatorComponent_form_28_label_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function PointsCalculatorComponent_form_28_label_3_Template_input_change_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const type_r9 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r11.onChangeType(type_r9.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", type_r9.name, " ");
} }
function PointsCalculatorComponent_form_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h5", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, PointsCalculatorComponent_form_28_label_3_Template, 3, 1, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.pointTypes == null ? null : ctx_r2.pointTypes.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.pointTypes == null ? null : ctx_r2.pointTypes.answers);
} }
function PointsCalculatorComponent_div_31_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](question_r13 == null ? null : question_r13.point);
} }
const _c1 = function () { return { standalone: true }; };
function PointsCalculatorComponent_div_31_div_1_label_10_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function PointsCalculatorComponent_div_31_div_1_label_10_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23); const question_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit; return question_r13.selected = $event; })("change", function PointsCalculatorComponent_div_31_div_1_label_10_Template_input_change_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23); const i_r20 = restoredCtx.index; const index_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).index; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r24.onChangeTypeTwo(index_r14, i_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r19 = ctx.$implicit;
    const i_r20 = ctx.index;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    const question_r13 = ctx_r26.$implicit;
    const index_r14 = ctx_r26.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", question_r13.selected)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](6, _c1))("name", index_r14)("id", index_r14 + i_r20)("value", i_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", answer_r19.name, "");
} }
function PointsCalculatorComponent_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, PointsCalculatorComponent_div_31_div_1_div_6_Template, 3, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, PointsCalculatorComponent_div_31_div_1_label_10_Template, 4, 7, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Instructions:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "textarea", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function PointsCalculatorComponent_div_31_div_1_Template_textarea_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29); const question_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; return question_r13.comment = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Alert:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function PointsCalculatorComponent_div_31_div_1_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29); const question_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; return question_r13.alert = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const index_r14 = ctx_r32.index;
    const question_r13 = ctx_r32.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", index_r14 + 1, ". ", question_r13.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", question_r13.point != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", question_r13.answers);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", question_r13.comment)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](8, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", question_r13.alert)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](9, _c1));
} }
function PointsCalculatorComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, PointsCalculatorComponent_div_31_div_1_Template, 24, 10, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", question_r13.show);
} }
function PointsCalculatorComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Points total: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r4.total);
} }
function PointsCalculatorComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Summary plan");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "textarea", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function PointsCalculatorComponent_div_33_Template_textarea_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r33.summary = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r5.summary);
} }
function PointsCalculatorComponent_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h4", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Document request");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PointsCalculatorComponent_ng_template_40_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r35.bsModalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "app-document-select");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PointsCalculatorComponent_ng_template_40_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r37.bsModalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class PointsCalculatorComponent {
    constructor(toaster, studentPointFormService, questionService, modalService) {
        this.toaster = toaster;
        this.studentPointFormService = studentPointFormService;
        this.questionService = questionService;
        this.modalService = modalService;
        this.selected = "australian";
        this.questions = [];
        this.isAnswer = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl();
        this.totalPoint = 0;
        this.criterias = [];
        this.subClassOneForm = [];
        this.pointFormOne = [];
        this.title = 'Modal Title';
        this.isAus = true;
        this.maxDate = new Date().toISOString().slice(0, -14);
    }
    ngOnInit() {
        this.userId = Number(localStorage.getItem("userId"));
        //pass student id from meeting
        this.getAttempt(1);
        //TODO set id correctly
        this.getVisaTypes(1);
    }
    getVisaTypes(id) {
        this.questionService.getQuestion(id).subscribe(res => {
            this.pointTypes = res.data;
            console.log(this.pointTypes, 'types');
        });
    }
    onChangeType(subClassId) {
        console.log(subClassId, 'type');
        this.showSummary = false;
        this.type = subClassId;
        this.getPointForm(this.type);
    }
    getPointForm(subClassId) {
        this.questionService.getPointForm(subClassId).subscribe(res => {
            console.log(res, "result");
            this.subClassOneForm = res.data;
            console.log(this.subClassOneForm, "sub ");
            this.pointFormOne = [];
            this.subClassOneForm.forEach(question => {
                let criteria = {
                    id: question.id,
                    name: question.name,
                    answers: question.answers,
                    selected: null,
                    alert: null,
                    comment: null,
                    show: false
                };
                this.pointFormOne.push(criteria);
            });
            console.log(this.pointFormOne, "point form");
            this.pointFormOne[0].show = true;
        });
    }
    getAttempt(studentId) {
        this.studentPointFormService.getStudentForms(studentId).subscribe(res => {
            var _a;
            let attemptArray = [];
            attemptArray.push(res.data);
            this.attempt = (_a = res.data[attemptArray[0].length - 1]) === null || _a === void 0 ? void 0 : _a.attempt;
            console.log(this.attempt, "attempt");
        });
    }
    onChangeTypeTwo(index, x) {
        this.pointFormOne[index].point = this.pointFormOne[index].answers[x].points;
        //get total of point calculator
        let sum = 0;
        this.pointFormOne.forEach(f => {
            if (f.point != null) {
                sum += f.point;
            }
        });
        this.total = sum;
        if (index < this.pointFormOne.length - 1) {
            this.pointFormOne[index + 1].show = true;
        }
        if (index == this.pointFormOne.length - 1) {
            this.showSummary = true;
            this.submitValue = this.pointFormOne;
        }
    }
    onClick(option) {
        this.showSummary = false;
        // this.pointFormOne[0].show = false;
        this.selected = option;
        if (option == 'australian') {
            location.reload();
            this.isAus = true;
        }
        else {
            this.isAus = false;
        }
        if (option == 'canberra') {
            this.getPointForm(5);
            this.type = 5;
            this.isCan = true;
        }
        else {
            this.isCan = false;
        }
    }
    selectDocuments(template) {
        this.bsModalRef = this.modalService.show(template, {
            class: 'modal-dialog-centered modal-lg', // Change this line to set the size and position of the modal
        });
    }
    toasterMessage() {
        this.toaster.success(src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterPointFormSubmit, src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterSuccess, {
            timeOut: src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterTimeout,
        });
    }
    submit() {
        if (this.attempt < 3) {
            console.log(this.submitValue, "submit object");
            this.submitValue.forEach(question => {
                let criteria = {
                    questionId: question.id,
                    answersId: question.selected,
                    //TODO correctly add student id with meeting
                    instructions: [
                        {
                            studentId: 1,
                            studentPointFormId: this.type,
                            lawyerId: this.userId,
                            comment: question.comment,
                            addedDate: new Date().toISOString(),
                            attempt: this.attempt + 1
                        }
                    ],
                    alert: new _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe('en-US').transform(question.alert, 'yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\'')
                };
                this.criterias.push(criteria);
            });
            console.log(this.criterias, "criterias");
            //TODO set student Id correctly
            const pointFormSubmit = {
                attempt: this.attempt + 1,
                studentUserId: 1,
                createLawyerId: this.userId,
                criterias: this.criterias,
                formTypeId: this.type,
                summaryPlan: this.summary
            };
            this.studentPointFormService.createStudentForm(pointFormSubmit).subscribe(res => {
                console.log(res, "result");
                if (res) {
                    this.toaster.success(src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterPointFormSubmit, src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterSuccess);
                }
                this.getAttempt(1);
            });
        }
        else {
            console.log("attempt exceed");
            this.toaster.error(src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterAttemptLimitExceed, src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterFailure, {
                timeOut: src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__.Message.toasterTimeout,
            });
        }
    }
}
PointsCalculatorComponent.ɵfac = function PointsCalculatorComponent_Factory(t) { return new (t || PointsCalculatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_student_point_form_service__WEBPACK_IMPORTED_MODULE_1__.StudentPointFormService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_question_service__WEBPACK_IMPORTED_MODULE_2__.QuestionService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__.BsModalService)); };
PointsCalculatorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: PointsCalculatorComponent, selectors: [["app-points-calculator"]], viewQuery: function PointsCalculatorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.modalContent = _t.first);
    } }, decls: 42, vars: 12, consts: [[1, "page-breadcrumb", "d-none", "d-sm-flex", "align-items-center", "mb-3"], [1, "breadcrumb-title", "pe-3"], [1, "ps-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "p-0"], [1, "breadcrumb-item"], ["href", "#", 3, "click"], [1, "bx", "bx-home-alt"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row", "justify-content-center", "text-center"], [1, "col"], [1, "btn-group", "group-background", ".custom-slider-bg"], ["id", "aus"], [1, "btn", "btn-text", "toggle-label", 3, "click"], ["id", "can"], [1, "row", "mt-5"], [1, "col-xl-12", "mx-auto"], [1, "card", "border-top", "border-0", "border-4", "border-primary"], [1, "card-body", "p-5"], [1, "card-title", "d-flex", "align-items-center"], ["class", "mb-0 text-primary", 4, "ngIf"], ["class", "row g-3 mb-5", 4, "ngIf"], [1, "row", "g-3"], ["class", "\n\t\t\t\t\t\tmb-3", 4, "ngFor", "ngForOf"], ["class", "row py-5", 4, "ngIf"], ["class", "row pb-3", 4, "ngIf"], [1, "row", "d-flex", "my-3"], [1, "align-buttons"], ["type", "button", 1, "btn", "btn-outline-primary", "me-2", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-outline-green", 3, "disabled", "click"], ["template", ""], [1, "mb-0", "text-primary"], [1, "row", "g-3", "mb-5"], [4, "ngFor", "ngForOf"], ["type", "radio", "name", "pointType", 3, "change"], [1, "mb-3"], [4, "ngIf"], [1, "row"], [1, "col-10"], [1, "text", "mb-2"], ["class", "col-2 text-end", 4, "ngIf"], ["class", "py-1", 4, "ngFor", "ngForOf"], [1, "row", "py-3"], [1, "col-md-10"], [1, "col-md-6"], [1, "form-group"], ["for", "text-input"], ["name", "myTextArea", "placeholder", "Enter instructions", "rows", "2", 1, "instruction", "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "date-input"], ["id", "date-input", "type", "date", "max", "maxDate", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "col-2", "text-end"], [1, "point"], [1, "py-1"], ["type", "radio", 3, "ngModel", "ngModelOptions", "name", "id", "value", "ngModelChange", "change"], [1, "row", "py-5"], [1, "col-md-10", "text-total"], [1, "col-md-2", "text-end"], [1, "row", "pb-3"], [1, "col-md-12"], ["for", "text-input", 1, "py-2"], ["name", "myTextArea", "placeholder", "Enter summary plan", "rows", "5", 1, "summary", 3, "ngModel", "ngModelChange"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click"]], template: function PointsCalculatorComponent_Template(rf, ctx) { if (rf & 1) {
        const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PointsCalculatorComponent_Template_a_click_7_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Points calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PointsCalculatorComponent_Template_a_click_15_listener() { return ctx.onClick("australian"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " Australian point system ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PointsCalculatorComponent_Template_a_click_18_listener() { return ctx.onClick("canberra"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, " Canberra metrics ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, PointsCalculatorComponent_h5_25_Template, 2, 0, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, PointsCalculatorComponent_h5_26_Template, 2, 0, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, PointsCalculatorComponent_form_28_Template, 4, 2, "form", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "form", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, PointsCalculatorComponent_div_31_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, PointsCalculatorComponent_div_32_Template, 7, 1, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, PointsCalculatorComponent_div_33_Template, 6, 1, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PointsCalculatorComponent_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r38); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](41); return ctx.selectDocuments(_r6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Select documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PointsCalculatorComponent_Template_button_click_38_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Submit form");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, PointsCalculatorComponent_ng_template_40_Template, 12, 0, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("custom-slider", ctx.selected === "australian");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("custom-slider", ctx.selected === "canberra");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isAus);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isAus);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isAus);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.pointFormOne);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showSummary);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showSummary);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.showSummary);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.showSummary);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RadioControlValueAccessor, _document_select_document_select_component__WEBPACK_IMPORTED_MODULE_4__.DocumentSelectComponent], styles: [".toggle-label[_ngcontent-%COMP%] {\n  width: 14rem;\n}\n\n.form-check-input[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  background-color: var(--contact-btn-background);\n  box-shadow: 0px 8px 22px 6px rgba(0, 0, 0, 0.25), inset 0px 6px 4px rgba(255, 255, 255, 0.25);\n}\n\n.form-check-input[_ngcontent-%COMP%]:checked[type=radio] {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-color: var(--primary-btn-background);\n  border-style: solid;\n  border-radius: 50%;\n  background-color: #4e3c3c;\n  color: var(--primary-icon-color);\n  font-weight: bold;\n  background-image: url(\"data:image/svg+xml;charset=utf8,<svg id='Expanded_finals_' data-name='Expanded (finals)' xmlns='http://www.w3.org/2000/svg' viewBox='-3 -3 30 30'><path fill='rgb(255,255,255)' d='M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z'/></svg>\");\n}\n\n.color[_ngcontent-%COMP%] {\n  background-color: #93acba;\n  border-color: black;\n}\n\n.text[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n\n.point[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: auto;\n  visibility: visible;\n  background-color: #472c8c;\n  color: white;\n  border-radius: 50%;\n  transform: rotateY(360deg);\n  padding: 0.2em;\n  font-size: 1.5em;\n  transition: transform 750ms ease-in-out;\n  margin-top: 0.5em;\n  min-width: 2em;\n  position: relative;\n  margin: 0em 0 0 0;\n  text-align: center;\n}\n\n.text-total[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  font-weight: bold;\n  align-self: end;\n}\n\n.summary[_ngcontent-%COMP%] {\n  min-width: 200px;\n  width: inherit;\n}\n\n.btn-select[_ngcontent-%COMP%] {\n  padding-right: 0px;\n}\n\n.align-buttons[_ngcontent-%COMP%] {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvaW50cy1jYWxjdWxhdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSwrQ0FBQTtFQUNBLDZGQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLHdTQUFBO0FBQUo7O0FBR0E7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtBQUFKOztBQUdBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtBQUFKIiwiZmlsZSI6InBvaW50cy1jYWxjdWxhdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvZ2dsZS1sYWJlbCB7XHJcbiAgICB3aWR0aDogMTRyZW07XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrLWlucHV0e1xyXG4gICAgd2lkdGg6IDIuNXJlbTtcclxuICAgIGhlaWdodDogMi41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGFjdC1idG4tYmFja2dyb3VuZCk7IFxyXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAyMnB4IDZweCByZ2IoMCAwIDAgLyAyNSUpLCBpbnNldCAwcHggNnB4IDRweCByZ2IoMjU1IDI1NSAyNTUgLyAyNSUpO1xyXG4gICAgXHJcbn1cclxuLmZvcm0tY2hlY2staW5wdXQ6Y2hlY2tlZFt0eXBlPXJhZGlvXSB7XHJcbiAgICB3aWR0aDogMi41cmVtO1xyXG4gICAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktYnRuLWJhY2tncm91bmQpO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzgsIDYwLCA2MCkgO1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktaWNvbi1jb2xvcik7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsPHN2ZyBpZD0nRXhwYW5kZWRfZmluYWxzXycgZGF0YS1uYW1lPSdFeHBhbmRlZCAoZmluYWxzKScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PSctMyAtMyAzMCAzMCc+PHBhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTIxIDYuMjg1bC0xMS4xNiAxMi43MzMtNi44NC02LjAxOCAxLjMxOS0xLjQ5IDUuMzQxIDQuNjg2IDkuODY1LTExLjE5NiAxLjQ3NSAxLjI4NXonLz48L3N2Zz5cIik7XHJcbn1cclxuXHJcbi5jb2xvcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDcsIDE3MiwgMTg2KTtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5wb2ludHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDI1NywgNTIlLCAzNiUsIDEpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XHJcbiAgICBwYWRkaW5nOiAwLjJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNzUwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxuICAgIG1pbi13aWR0aDogMmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAwZW0gMCAwIDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50ZXh0LXRvdGFse1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYWxpZ24tc2VsZjogZW5kO1xyXG59XHJcblxyXG4uc3VtbWFyeXtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxufVxyXG5cclxuLmJ0bi1zZWxlY3Qge1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcblxyXG4uYWxpZ24tYnV0dG9uc3tcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbiJdfQ== */"] });
class Question {
}


/***/ }),

/***/ 7253:
/*!**************************************************************************!*\
  !*** ./src/app/components/lawyer/student-form/student-form.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentFormComponent": () => (/* binding */ StudentFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);



class StudentFormComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goToDocumentSelect() {
        this.router.navigate(['/document-select']);
    }
}
StudentFormComponent.ɵfac = function StudentFormComponent_Factory(t) { return new (t || StudentFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
StudentFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentFormComponent, selectors: [["app-student-form"]], decls: 11, vars: 0, consts: [[1, "row", "mt-5"], [1, "col-xl-12", "mx-auto"], [1, "card", "border-top", "border-0", "border-4", "border-primary"], [1, "card-body", "p-5"], [1, "card-title", "d-flex", "align-items-center"], [1, "mb-0", "text-primary"], [1, "row", "g-3"], [1, "btn", "button", 3, "click"]], template: function StudentFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Student form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentFormComponent_Template_button_click_9_listener() { return ctx.goToDocumentSelect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Select documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHVkZW50LWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 1590:
/*!**************************************************************************************!*\
  !*** ./src/app/components/lawyer/uploaded-documents/uploaded-documents.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadedDocumentsComponent": () => (/* binding */ UploadedDocumentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_shared_constants_enums_toaster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/constants/enums/toaster */ 7776);
/* harmony import */ var src_app_enum_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/enum/common */ 8760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _shared_services_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/services/file.service */ 2965);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var img_pdf_viewer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! img-pdf-viewer */ 310);











function UploadedDocumentsComponent_tr_19_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Submitted");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UploadedDocumentsComponent_tr_19_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UploadedDocumentsComponent_tr_19_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UploadedDocumentsComponent_tr_19_div_7_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const document_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](25); return ctx_r8.openFullscreen(_r1, document_r3.fileUrl); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UploadedDocumentsComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, UploadedDocumentsComponent_tr_19_div_4_Template, 4, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, UploadedDocumentsComponent_tr_19_div_5_Template, 4, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, UploadedDocumentsComponent_tr_19_div_7_Template, 3, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const document_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", document_r3.fileType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !document_r3.isSubmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", document_r3.isSubmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !document_r3.isSubmitted);
} }
function UploadedDocumentsComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Modal title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UploadedDocumentsComponent_ng_template_24_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const modal_r11 = restoredCtx.$implicit; return modal_r11.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "ngx-imgPdf-viewer", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UploadedDocumentsComponent_ng_template_24_Template_button_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const modal_r11 = restoredCtx.$implicit; return modal_r11.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("documentURL", ctx_r2.url)("docPreviewConfig", ctx_r2.docPreviewConfig);
} }
class UploadedDocumentsComponent {
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
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            select: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
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
UploadedDocumentsComponent.ɵfac = function UploadedDocumentsComponent_Factory(t) { return new (t || UploadedDocumentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_file_service__WEBPACK_IMPORTED_MODULE_2__.FileService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe)); };
UploadedDocumentsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UploadedDocumentsComponent, selectors: [["app-uploaded-documents"]], decls: 26, vars: 2, consts: [[1, "col", "d-flex"], [1, "card", "radius-10", "w-100"], [1, "card-body"], [1, "row"], [1, "col", "text-center", "mt-3"], [1, "mb-1"], [1, "table-responsive", "mt-4"], [3, "formGroup"], ["id", "Transaction-History", 1, "table", "align-middle", "mb-0", "table-hover"], [1, "table-light"], [4, "ngFor", "ngForOf"], [1, "row", "justify-content-end", "mt-3", "mb-3"], [1, "col-1", "text-end"], ["type", "button", 1, "btn", "btn-outline-green", 3, "click"], ["content", ""], ["class", "d-flex align-items-center text-success", 4, "ngIf"], ["class", "d-flex align-items-center text-danger", 4, "ngIf"], [4, "ngIf"], [1, "d-flex", "align-items-center", "text-success"], [1, "bx", "bx-radio-circle-marked", "bx-burst", "bx-rotate-90", "align-middle", "font-18", "me-1"], [1, "d-flex", "align-items-center", "text-danger"], [1, "btn", "button", "btn-download", 3, "click"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "documentURL", "docPreviewConfig"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", 3, "click"]], template: function UploadedDocumentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "thead", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, UploadedDocumentsComponent_tr_19_Template, 8, 4, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UploadedDocumentsComponent_Template_button_click_22_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, UploadedDocumentsComponent_ng_template_24_Template, 9, 2, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.documentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.requestedDocuments);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, img_pdf_viewer__WEBPACK_IMPORTED_MODULE_9__.ImgPdfViewerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGxvYWRlZC1kb2N1bWVudHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_components_lawyer_lawyer_module_ts.js.map