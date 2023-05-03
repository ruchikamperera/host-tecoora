"use strict";(self.webpackChunksyndron=self.webpackChunksyndron||[]).push([[170],{170:(Bt,C,s)=>{s.r(C),s.d(C,{LawyerModule:()=>Ht});var ot=s(7744),p=s(8583),nt=s(5414),t=s(7716),g=s(4145),l=s(3679);let it=(()=>{class o{constructor(e){this.router=e}ngOnInit(){}goToDocumentSelect(){this.router.navigate(["/document-select"])}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(g.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-student-form"]],decls:11,vars:0,consts:[[1,"row","mt-5"],[1,"col-xl-12","mx-auto"],[1,"card","border-top","border-0","border-4","border-primary"],[1,"card-body","p-5"],[1,"card-title","d-flex","align-items-center"],[1,"mb-0","text-primary"],[1,"row","g-3"],[1,"btn","button",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"h5",5),t._uU(6,"Student form"),t.qZA(),t.qZA(),t._UZ(7,"hr"),t.TgZ(8,"form",6),t.TgZ(9,"button",7),t.NdJ("click",function(){return n.goToDocumentSelect()}),t._uU(10,"Select documents"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA())},directives:[l._Y,l.JL,l.F],styles:[""]}),o})();var rt=s(9505),u=s(8760),c=s(7776),st=s(3625),b=s(2290),y=s(7827);function at(o,a){1&o&&(t.TgZ(0,"div",34),t._uU(1,"First name is required."),t.qZA())}function lt(o,a){1&o&&(t.TgZ(0,"div",34),t._uU(1,"Email is required."),t.qZA())}function ct(o,a){1&o&&(t.TgZ(0,"div",34),t._uU(1,"Invalid email."),t.qZA())}function dt(o,a){1&o&&(t.TgZ(0,"div",34),t._uU(1,"Access area is required."),t.qZA())}let mt=(()=>{class o{constructor(e,n,i){this.staffBuilder=e,this.userService=n,this.toaster=i,this.dropdownList=[],this.dropdownSettings={}}ngOnInit(){this.dropdownList=[{item_id:1,item_text:"appointment handling"},{item_id:2,item_text:"payment"}],this.dropdownSettings={idField:"item_id",textField:"item_text"},this.createForm(),this.setStatus()}setStatus(){this.requiredField=this.staffForm.controls.area.value.length>0}onItemSelect(e){this.setClass()}onSelectAll(e){this.requiredField=e.length>0}setClass(){return this.setStatus(),this.staffForm.controls.area.value.length>0?"validField":"invalidField"}createForm(){this.staffForm=this.staffBuilder.group({firstName:["",l.kI.required],lastName:[""],email:["",[l.kI.required,l.kI.pattern(u.i$.emailValidation)]],area:[""]})}getFormValues(){this.firstName=this.staffForm.controls.firstName.value,this.lastName=this.staffForm.controls.lastName.value,this.email=this.staffForm.controls.email.value,this.area=this.staffForm.controls.area.value}save(){this.getFormValues();let e=[];this.area.forEach(i=>{e.push(i.item_text)});let n={FirstName:this.firstName,LastName:this.lastName,UserType:u.i4.Staff,Email:this.email,accessArea:e};this.staffForm.reset(),this.userService.createUser(n).subscribe(i=>{this.toaster.success(c.v.toasterCreateStaff,c.v.toasterSuccess,{timeOut:c.v.toasterTimeout})},i=>{this.toaster.error(c.v.toasterCreateStaffError,c.v.toasterFailure,{timeOut:c.v.toasterTimeout})})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(l.qu),t.Y36(st.K),t.Y36(b._W))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-lawyer-dashboard"]],decls:60,vars:9,consts:[[1,"background"],[1,"page-content"],[1,"card","mt-5","layout"],[1,"card-header","p-0","mt-3","position-relative"],[1,"card-body","pt-2"],[1,"align-items-center"],[1,"row","justify-content-center"],[1,"col-sm-6","text-center"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleLargeModal",1,"card","card-background","move-on-hover","home-button"],[1,"card-body","pt-12"],["type","button","routerLink","appointment-calendar",1,"card","card-background","move-on-hover","home-button"],["type","button","routerLink","new-appointment",1,"card","card-background","move-on-hover","home-button"],["type","button","routerLink","points-calculator",1,"card","card-background","move-on-hover","home-button"],["id","exampleLargeModal","tabindex","-1","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[1,"row","g-3",3,"formGroup"],[1,"col-md-12"],["for","inputFirstName",1,"form-label"],["type","text","formControlName","firstName","id","inputFirstName",1,"form-control"],["class","error ms-2 pt-2",4,"ngIf"],["for","inputLastName",1,"form-label"],["type","text","formControlName","lastName","id","inputLastName",1,"form-control"],["for","inputBirthday",1,"form-label"],["type","email","formControlName","email","id","inputBirthday",1,"form-control"],["for","inputType",1,"form-label"],["formControlName","area",3,"settings","data","required","onSelect","onSelectAll"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"],["type","submit","data-bs-dismiss","modal",1,"btn","btn-primary",3,"disabled","click"],[1,"error","ms-2","pt-2"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t._UZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t.TgZ(6,"div",6),t.TgZ(7,"div",7),t.TgZ(8,"div",8),t.TgZ(9,"div",9),t._uU(10," Create staff account "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"div",6),t.TgZ(12,"div",7),t.TgZ(13,"div",10),t.TgZ(14,"div",9),t._uU(15," View appointment calendar "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"div",6),t.TgZ(17,"div",7),t.TgZ(18,"div",11),t.TgZ(19,"div",9),t._uU(20," New appointment "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(21,"div",6),t.TgZ(22,"div",7),t.TgZ(23,"div",12),t.TgZ(24,"div",9),t._uU(25," Points Calculator "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(26,"div",13),t.TgZ(27,"div",14),t.TgZ(28,"div",15),t.TgZ(29,"div",16),t.TgZ(30,"h5",17),t._uU(31,"Staff access form"),t.qZA(),t._UZ(32,"button",18),t.qZA(),t.TgZ(33,"div",19),t.TgZ(34,"form",20),t.TgZ(35,"div",21),t.TgZ(36,"label",22),t._uU(37,"First name"),t.qZA(),t._UZ(38,"input",23),t.YNc(39,at,2,0,"div",24),t.qZA(),t.TgZ(40,"div",21),t.TgZ(41,"label",25),t._uU(42,"Last name"),t.qZA(),t._UZ(43,"input",26),t.qZA(),t.TgZ(44,"div",21),t.TgZ(45,"label",27),t._uU(46,"Email address"),t.qZA(),t._UZ(47,"input",28),t.YNc(48,lt,2,0,"div",24),t.YNc(49,ct,2,0,"div",24),t.qZA(),t.TgZ(50,"div",21),t.TgZ(51,"label",29),t._uU(52,"Access area"),t.qZA(),t.TgZ(53,"ng-multiselect-dropdown",30),t.NdJ("onSelect",function(r){return n.onItemSelect(r)})("onSelectAll",function(r){return n.onSelectAll(r)}),t.qZA(),t.YNc(54,dt,2,0,"div",24),t.qZA(),t.qZA(),t.qZA(),t.TgZ(55,"div",31),t.TgZ(56,"button",32),t._uU(57,"Close"),t.qZA(),t.TgZ(58,"button",33),t.NdJ("click",function(){return n.save()}),t._uU(59,"Save changes"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(34),t.Q6J("formGroup",n.staffForm),t.xp6(5),t.Q6J("ngIf",n.staffForm.controls.firstName.hasError("required")&&n.staffForm.controls.firstName.touched),t.xp6(9),t.Q6J("ngIf",n.staffForm.controls.email.hasError("required")&&n.staffForm.controls.email.touched),t.xp6(1),t.Q6J("ngIf",n.staffForm.controls.email.hasError("pattern")&&!n.staffForm.controls.email.valid),t.xp6(4),t.Q6J("settings",n.dropdownSettings)("data",n.dropdownList)("required",n.requiredField),t.xp6(1),t.Q6J("ngIf",!n.requiredField),t.xp6(4),t.Q6J("disabled",!n.staffForm.valid||!n.requiredField))},directives:[g.rH,l._Y,l.JL,l.sg,l.Fj,l.JJ,l.u,p.O5,y.OP,l.Q7],styles:[".card-header[_ngcontent-%COMP%]{background-color:#001f49}.layout[_ngcontent-%COMP%]{width:100%;background-color:transparent}.page-content[_ngcontent-%COMP%]{background-image:url(download2.31109e638a6fc712fe8d.jpg);background-size:cover;background-position:center;background-repeat:no-repeat;background-attachment:fixed}"]}),o})();var ut=s(250),pt=s(8505),gt=s(3301),Zt=s(2965),Z=s(8392),h=s(1946),q=s(9802);function ft(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t.TgZ(4,"div",14),t.TgZ(5,"div",20),t.TgZ(6,"input",21,22),t.NdJ("ngModelChange",function(i){return t.CHM(e),t.oxw().changeDate(i)}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(8,"td"),t.TgZ(9,"div",23),t.TgZ(10,"input",24),t.NdJ("change",function(i){const d=t.CHM(e).index;return t.oxw().onChange(i,d+1)}),t.qZA(),t._UZ(11,"label",25),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=a.$implicit,n=t.oxw();t.xp6(2),t.hij("",e.type," "),t.xp6(4),t.Q6J("minDate",n.minDate)}}function ht(o,a){1&o&&(t.TgZ(0,"div",26),t._uU(1," Please select due date "),t.qZA())}function vt(o,a){1&o&&(t.TgZ(0,"div",35),t._UZ(1,"i",36),t.TgZ(2,"span"),t._uU(3,"Submitted"),t.qZA(),t.qZA())}function Tt(o,a){1&o&&(t.TgZ(0,"div",37),t._UZ(1,"i",36),t.TgZ(2,"span"),t._uU(3,"Pending"),t.qZA(),t.qZA())}function bt(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"a",38),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,r=t.oxw(2),d=t.MAs(32);return r.openFullscreen(d,i.fileUrl)}),t._uU(2,"Download"),t.qZA(),t.qZA()}}function At(o,a){if(1&o&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t.YNc(4,vt,4,0,"div",32),t.YNc(5,Tt,4,0,"div",33),t.qZA(),t.TgZ(6,"td"),t.YNc(7,bt,3,0,"div",34),t.qZA(),t.qZA()),2&o){const e=a.$implicit;t.xp6(2),t.hij("",e.fileType," "),t.xp6(2),t.Q6J("ngIf",!e.isSubmitted),t.xp6(1),t.Q6J("ngIf",e.isSubmitted),t.xp6(2),t.Q6J("ngIf",!e.isSubmitted)}}function _t(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div",27),t.TgZ(1,"div",3),t.TgZ(2,"div",4),t.TgZ(3,"div",1),t.TgZ(4,"div",28),t.TgZ(5,"h5",6),t._uU(6,"Documents"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"div",29),t.TgZ(8,"form",9),t.TgZ(9,"table",10),t.TgZ(10,"thead",11),t.TgZ(11,"tr"),t.TgZ(12,"th"),t._uU(13,"Description"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Status"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"Option"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(18,"tbody"),t.YNc(19,At,8,4,"tr",12),t.qZA(),t.qZA(),t.qZA(),t.TgZ(20,"div",13),t.TgZ(21,"div",30),t.TgZ(22,"button",31),t.NdJ("click",function(){return t.CHM(e),t.oxw().add()}),t._uU(23,"Add"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=t.oxw();t.xp6(8),t.Q6J("formGroup",e.documentForm),t.xp6(11),t.Q6J("ngForOf",e.requestedDocuments)}}function Ct(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div",39),t.TgZ(1,"h4",40),t._uU(2,"Modal title"),t.qZA(),t.TgZ(3,"button",41),t.NdJ("click",function(){return t.CHM(e).$implicit.dismiss("Cross click")}),t.qZA(),t.qZA(),t.TgZ(4,"div",42),t._UZ(5,"ngx-imgPdf-viewer",43),t.qZA(),t.TgZ(6,"div",44),t.TgZ(7,"button",45),t.NdJ("click",function(){return t.CHM(e).$implicit.close("Close click")}),t._uU(8,"Close"),t.qZA(),t.qZA()}if(2&o){const e=t.oxw();t.xp6(5),t.Q6J("documentURL",e.url)("docPreviewConfig",e.docPreviewConfig)}}let yt=(()=>{class o{constructor(e,n,i,r,d,T){this.documentBuilder=e,this.router=n,this.fileService=i,this.toaster=r,this.modalService=d,this.datePipe=T,this.documents=[],this.submitObject=[],this.isSelectDate=!0,this.dueDate="",this.uploadedFiles=[],this.docPreviewConfig={zoomIn:!0,zoomOut:!0,rotate:!0,download:!0,openModal:!0,close:!1,docScreenWidth:"100%",modalSize:"md",customStyle:"",zoomIndicator:!0}}ngOnInit(){const e=new Date;this.minDate=new Date(this.datePipe.transform(e,"yyyy-MM-dd")),this.documents=[{id:1,type:"PaySlips"},{id:2,type:"Bachelor certificate"},{id:3,type:"Passport"},{id:4,type:"Australian/Home country driving license"}],this.createForm(),this.getUploadedDocuments(1,1),this.getRequestedFiles(1,1)}getRequestedFiles(e,n){this.fileService.getUserRequestedFiles({lawyerId:e,studentId:n}).subscribe(r=>{console.log(r,"requested files");const d=new Set,Rt=r.data.filter(m=>{const f=d.has(m.fileType);return d.add(m.fileType),!f});this.requestedDocuments=Rt,this.requestedDocuments.forEach(m=>{this.uploadedFiles.forEach(f=>{f.fileType==m.fileType&&""!==f.fileUrl?(m.isSubmitted=!0,m.fileUrl=f.fileUrl):m.isSubmitted=!1})}),this.requestedDocuments.forEach(m=>{switch(m.fileType){case 1:return m.fileType=u.Tv.case1;case 2:return m.fileType=u.Tv.case2;case 3:return m.fileType=u.Tv.case3;case 4:return m.fileType=u.Tv.case4}}),console.log(this.requestedDocuments,"f list")},r=>{console.log(r)})}getUploadedDocuments(e,n){this.fileService.getUserUploadedFiles({lawyerId:e,studentId:n}).subscribe(r=>{this.uploadedFiles=r.data,console.log(r,"uploaded")},r=>{console.log(r)}),this.uploadedFiles.forEach(r=>{switch(r.fileType){case 1:return r.fileType=u.Tv.case1;case 2:return r.fileType=u.Tv.case2;case 3:return r.fileType=u.Tv.case3;case 4:return r.fileType=u.Tv.case4}}),this.uploadedFiles=this.uploadedFiles.filter(r=>null!==r.fileUrl)}changeDate(e){this.dueDate=e,this.isSelectDate=""!=this.dueDate}createForm(){this.documentForm=this.documentBuilder.group({date:["",l.kI.required],select:["",l.kI.required]})}onChange(e,n){if(1==e.target.checked){let i=this.dueDate;if(""==i)this.isSelectDate=!1,e.target.checked=!1;else{this.isSelectDate=!0;let r={studentId:1,lawyerId:1,fileType:n,dueDate:new Date(i),isDeleted:!1};this.submitObject.push(r),i="",this.dueDate=""}}else this.submitObject=this.submitObject.filter(i=>i.fileType!==n)}request(){this.fileService.addLawyerRequestedFiles(this.submitObject).subscribe(e=>{this.toaster.success(c.v.toasterDocumentRequest,c.v.toasterSuccess,{timeOut:c.v.toasterTimeout}),this.documentForm.reset(),this.dueDate="",this.submitObject=[]},e=>{this.toaster.error(c.v.toasterDocumentRequest,c.v.toasterFailure,{timeOut:c.v.toasterTimeout}),this.documentForm.reset(),this.dueDate="",this.submitObject=[]})}uploadedDocuments(){this.isClickUploaded=!this.isClickUploaded}viewDocument(e){this.router.navigate(["/document-view"])}add(){}openFullscreen(e,n){this.url="https://tecoorastorage.blob.core.windows.net/tecoora-files/91e28f7c-ad22-4efd-b1da-0ce6d2158253.png",this.modalService.open(e)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(l.qu),t.Y36(g.F0),t.Y36(Zt.I),t.Y36(b._W),t.Y36(Z.FF),t.Y36(p.uU))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-document-select"]],decls:33,vars:5,consts:[[1,"container-fluid"],[1,"row"],[1,"col-xl-12","d-flex"],[1,"card","radius-10","w-100"],[1,"card-body"],[1,"d-flex","align-items-center"],[1,"mb-1"],[1,"font-22","ms-auto"],[1,"table","mt-4"],[3,"formGroup"],["id","Transaction-History",1,"table","align-middle","mb-0","table-hover"],[1,"table-light"],[4,"ngFor","ngForOf"],[1,"row","justify-content-end","mt-3","mb-3"],[1,"col-6"],["class","error",4,"ngIf"],[1,"col","text-end"],["type","button",1,"btn","btn-outline-green",3,"disabled","click"],["class","col d-flex",4,"ngIf"],["content",""],[1,"input-group"],["type","text","formControlName","date","placeholder","dd/mm/yyyy","bsDatepicker","",1,"form-control",3,"minDate","ngModelChange"],["dp","bsDatepicker"],[1,"form-check"],["formControlName","select","type","checkbox","value","","id","flexCheckDefault",1,"form-check-input",3,"change"],[1,"form-check-label"],[1,"error"],[1,"col","d-flex"],[1,"col","text-center","mt-3"],[1,"table-responsive","mt-4"],[1,"col-1","text-end"],["type","button",1,"btn","btn-outline-green",3,"click"],["class","d-flex align-items-center text-success",4,"ngIf"],["class","d-flex align-items-center text-danger",4,"ngIf"],[4,"ngIf"],[1,"d-flex","align-items-center","text-success"],[1,"bx","bx-radio-circle-marked","bx-burst","bx-rotate-90","align-middle","font-18","me-1"],[1,"d-flex","align-items-center","text-danger"],[1,"btn","button","btn-download",3,"click"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[3,"documentURL","docPreviewConfig"],[1,"modal-footer"],["type","button",1,"btn","btn-light",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t.TgZ(6,"div"),t.TgZ(7,"h5",6),t._uU(8,"Select which documents are required by the student"),t.qZA(),t.qZA(),t.TgZ(9,"div",7),t._uU(10,"student name"),t.qZA(),t.qZA(),t.TgZ(11,"div",8),t.TgZ(12,"form",9),t.TgZ(13,"table",10),t.TgZ(14,"thead",11),t.TgZ(15,"tr"),t.TgZ(16,"th"),t._uU(17,"Description"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"Due date"),t.qZA(),t.TgZ(20,"th"),t._uU(21,"Select"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(22,"tbody"),t.YNc(23,ft,12,2,"tr",12),t.qZA(),t.qZA(),t.qZA(),t.TgZ(24,"div",13),t.TgZ(25,"div",14),t.YNc(26,ht,2,0,"div",15),t.qZA(),t.TgZ(27,"div",16),t.TgZ(28,"button",17),t.NdJ("click",function(){return n.request()}),t._uU(29,"Request"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(30,_t,24,2,"div",18),t.YNc(31,Ct,9,2,"ng-template",null,19,t.W1O)),2&e&&(t.xp6(12),t.Q6J("formGroup",n.documentForm),t.xp6(11),t.Q6J("ngForOf",n.documents),t.xp6(3),t.Q6J("ngIf",!n.isSelectDate),t.xp6(2),t.Q6J("disabled",!n.documentForm.valid),t.xp6(2),t.Q6J("ngIf",n.isClickUploaded))},directives:[l._Y,l.JL,l.sg,p.sg,p.O5,l.Fj,h.Y5,l.JJ,l.u,h.Np,l.Wl,q.CW],styles:[".btn-cancel[_ngcontent-%COMP%]{padding-right:0}.btn-download[_ngcontent-%COMP%]{color:navy}"]}),o})();const qt=["modalContent"];function xt(o,a){1&o&&(t.TgZ(0,"h5",31),t._uU(1,"Australian point system"),t.qZA())}function Ft(o,a){1&o&&(t.TgZ(0,"h5",31),t._uU(1,"Canberra metrics system"),t.qZA())}function St(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"label"),t.TgZ(1,"input",34),t.NdJ("change",function(){const r=t.CHM(e).$implicit;return t.oxw(2).onChangeType(r.id)}),t.qZA(),t._uU(2),t.qZA()}if(2&o){const e=a.$implicit;t.xp6(2),t.hij(" ",e.name," ")}}function wt(o,a){if(1&o&&(t.TgZ(0,"form",32),t.TgZ(1,"h5",31),t._uU(2),t.qZA(),t.YNc(3,St,3,1,"label",33),t.qZA()),2&o){const e=t.oxw();t.xp6(2),t.Oqu(null==e.pointTypes?null:e.pointTypes.name),t.xp6(1),t.Q6J("ngForOf",null==e.pointTypes?null:e.pointTypes.answers)}}function Ut(o,a){if(1&o&&(t.TgZ(0,"div",50),t.TgZ(1,"span",51),t._uU(2),t.qZA(),t.qZA()),2&o){const e=t.oxw(2).$implicit;t.xp6(2),t.Oqu(null==e?null:e.point)}}const A=function(){return{standalone:!0}};function Dt(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"label",52),t.TgZ(1,"input",53),t.NdJ("ngModelChange",function(i){return t.CHM(e),t.oxw(2).$implicit.selected=i})("change",function(){const r=t.CHM(e).index,d=t.oxw(2).index;return t.oxw().onChangeTypeTwo(d,r)}),t.qZA(),t._uU(2),t._UZ(3,"br"),t.qZA()}if(2&o){const e=a.$implicit,n=a.index,i=t.oxw(2),r=i.$implicit,d=i.index;t.xp6(1),t.Q6J("ngModel",r.selected)("ngModelOptions",t.DdM(6,A))("name",d)("id",d+n)("value",n),t.xp6(1),t.hij(" ",e.name,"")}}function Mt(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"div",37),t.TgZ(2,"div",38),t.TgZ(3,"div",39),t.TgZ(4,"strong"),t._uU(5),t.qZA(),t.qZA(),t.qZA(),t.YNc(6,Ut,3,1,"div",40),t.qZA(),t.TgZ(7,"div",37),t.TgZ(8,"div",38),t.TgZ(9,"div",37),t.YNc(10,Dt,4,7,"label",41),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"div",42),t.TgZ(12,"div",43),t.TgZ(13,"div",37),t.TgZ(14,"div",44),t.TgZ(15,"div",45),t.TgZ(16,"label",46),t._uU(17,"Instructions:"),t.qZA(),t._UZ(18,"br"),t.TgZ(19,"textarea",47),t.NdJ("ngModelChange",function(i){return t.CHM(e),t.oxw().$implicit.comment=i}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(20,"div",44),t.TgZ(21,"label",48),t._uU(22,"Alert:"),t.qZA(),t.TgZ(23,"input",49),t.NdJ("ngModelChange",function(i){return t.CHM(e),t.oxw().$implicit.alert=i}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=t.oxw(),n=e.index,i=e.$implicit;t.xp6(5),t.AsE("",n+1,". ",i.name,""),t.xp6(1),t.Q6J("ngIf",null!=i.point),t.xp6(4),t.Q6J("ngForOf",i.answers),t.xp6(9),t.Q6J("ngModel",i.comment)("ngModelOptions",t.DdM(8,A)),t.xp6(4),t.Q6J("ngModel",i.alert)("ngModelOptions",t.DdM(9,A))}}function Ot(o,a){if(1&o&&(t.TgZ(0,"div",35),t.YNc(1,Mt,24,10,"div",36),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.Q6J("ngIf",e.show)}}function Nt(o,a){if(1&o&&(t.TgZ(0,"div",54),t._UZ(1,"hr"),t.TgZ(2,"div",55),t._uU(3," Points total: "),t.qZA(),t.TgZ(4,"div",56),t.TgZ(5,"span",51),t._uU(6),t.qZA(),t.qZA(),t.qZA()),2&o){const e=t.oxw();t.xp6(6),t.Oqu(e.total)}}function Pt(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div",57),t.TgZ(1,"div",58),t.TgZ(2,"label",59),t._uU(3,"Summary plan"),t.qZA(),t._UZ(4,"br"),t.TgZ(5,"textarea",60),t.NdJ("ngModelChange",function(i){return t.CHM(e),t.oxw().summary=i}),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=t.oxw();t.xp6(5),t.Q6J("ngModel",e.summary)}}function Jt(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div",61),t.TgZ(1,"h4",62),t._uU(2,"Document request"),t.qZA(),t.TgZ(3,"button",63),t.NdJ("click",function(){return t.CHM(e),t.oxw().bsModalRef.hide()}),t.TgZ(4,"span",64),t._uU(5,"\xd7"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(6,"div",65),t.TgZ(7,"div",37),t._UZ(8,"app-document-select"),t.qZA(),t.qZA(),t.TgZ(9,"div",66),t.TgZ(10,"button",67),t.NdJ("click",function(){return t.CHM(e),t.oxw().bsModalRef.hide()}),t._uU(11,"Cancel"),t.qZA(),t.qZA()}}const kt=[{path:"",component:mt,data:{title:"Lawyer Dashboard"}},{path:"appointment-calendar",component:rt.X,data:{title:"Calendar"}},{path:"new-appointment",component:nt.J,data:{title:"New Appointment"}},{path:"new-appointment/student-form",component:it,data:{title:"Student Form"}},{path:"points-calculator",component:(()=>{class o{constructor(e,n,i,r){this.toaster=e,this.studentPointFormService=n,this.questionService=i,this.modalService=r,this.selected="australian",this.questions=[],this.isAnswer=new l.NI,this.totalPoint=0,this.criterias=[],this.subClassOneForm=[],this.pointFormOne=[],this.title="Modal Title",this.isAus=!0,this.maxDate=(new Date).toISOString().slice(0,-14)}ngOnInit(){this.userId=Number(localStorage.getItem("userId")),this.getAttempt(1),this.getVisaTypes(1)}getVisaTypes(e){this.questionService.getQuestion(e).subscribe(n=>{this.pointTypes=n.data,console.log(this.pointTypes,"types")})}onChangeType(e){console.log(e,"type"),this.showSummary=!1,this.type=e,this.getPointForm(this.type)}getPointForm(e){this.questionService.getPointForm(e).subscribe(n=>{console.log(n,"result"),this.subClassOneForm=n.data,console.log(this.subClassOneForm,"sub "),this.pointFormOne=[],this.subClassOneForm.forEach(i=>{this.pointFormOne.push({id:i.id,name:i.name,answers:i.answers,selected:null,alert:null,comment:null,show:!1})}),console.log(this.pointFormOne,"point form"),this.pointFormOne[0].show=!0})}getAttempt(e){this.studentPointFormService.getStudentForms(e).subscribe(n=>{var i;let r=[];r.push(n.data),this.attempt=null===(i=n.data[r[0].length-1])||void 0===i?void 0:i.attempt,console.log(this.attempt,"attempt")})}onChangeTypeTwo(e,n){this.pointFormOne[e].point=this.pointFormOne[e].answers[n].points;let i=0;this.pointFormOne.forEach(r=>{null!=r.point&&(i+=r.point)}),this.total=i,e<this.pointFormOne.length-1&&(this.pointFormOne[e+1].show=!0),e==this.pointFormOne.length-1&&(this.showSummary=!0,this.submitValue=this.pointFormOne)}onClick(e){this.showSummary=!1,this.selected=e,"australian"==e?(location.reload(),this.isAus=!0):this.isAus=!1,"canberra"==e?(this.getPointForm(5),this.type=5,this.isCan=!0):this.isCan=!1}selectDocuments(e){this.bsModalRef=this.modalService.show(e,{class:"modal-dialog-centered modal-lg"})}toasterMessage(){this.toaster.success(c.v.toasterPointFormSubmit,c.v.toasterSuccess,{timeOut:c.v.toasterTimeout})}submit(){this.attempt<3?(console.log(this.submitValue,"submit object"),this.submitValue.forEach(n=>{let i={questionId:n.id,answersId:n.selected,instructions:[{studentId:1,studentPointFormId:this.type,lawyerId:this.userId,comment:n.comment,addedDate:(new Date).toISOString(),attempt:this.attempt+1}],alert:new p.uU("en-US").transform(n.alert,"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")};this.criterias.push(i)}),console.log(this.criterias,"criterias"),this.studentPointFormService.createStudentForm({attempt:this.attempt+1,studentUserId:1,createLawyerId:this.userId,criterias:this.criterias,formTypeId:this.type,summaryPlan:this.summary}).subscribe(n=>{console.log(n,"result"),n&&this.toaster.success(c.v.toasterPointFormSubmit,c.v.toasterSuccess),this.getAttempt(1)})):(console.log("attempt exceed"),this.toaster.error(c.v.toasterAttemptLimitExceed,c.v.toasterFailure,{timeOut:c.v.toasterTimeout}))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(b._W),t.Y36(ut.A),t.Y36(pt.a),t.Y36(gt.tT))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-points-calculator"]],viewQuery:function(e,n){if(1&e&&t.Gf(qt,5),2&e){let i;t.iGM(i=t.CRH())&&(n.modalContent=i.first)}},decls:42,vars:12,consts:[[1,"page-breadcrumb","d-none","d-sm-flex","align-items-center","mb-3"],[1,"breadcrumb-title","pe-3"],[1,"ps-3"],["aria-label","breadcrumb"],[1,"breadcrumb","mb-0","p-0"],[1,"breadcrumb-item"],["href","#",3,"click"],[1,"bx","bx-home-alt"],["aria-current","page",1,"breadcrumb-item","active"],[1,"row","justify-content-center","text-center"],[1,"col"],[1,"btn-group","group-background",".custom-slider-bg"],["id","aus"],[1,"btn","btn-text","toggle-label",3,"click"],["id","can"],[1,"row","mt-5"],[1,"col-xl-12","mx-auto"],[1,"card","border-top","border-0","border-4","border-primary"],[1,"card-body","p-5"],[1,"card-title","d-flex","align-items-center"],["class","mb-0 text-primary",4,"ngIf"],["class","row g-3 mb-5",4,"ngIf"],[1,"row","g-3"],["class","\n\t\t\t\t\t\tmb-3",4,"ngFor","ngForOf"],["class","row py-5",4,"ngIf"],["class","row pb-3",4,"ngIf"],[1,"row","d-flex","my-3"],[1,"align-buttons"],["type","button",1,"btn","btn-outline-primary","me-2",3,"disabled","click"],["type","button",1,"btn","btn-outline-green",3,"disabled","click"],["template",""],[1,"mb-0","text-primary"],[1,"row","g-3","mb-5"],[4,"ngFor","ngForOf"],["type","radio","name","pointType",3,"change"],[1,"mb-3"],[4,"ngIf"],[1,"row"],[1,"col-10"],[1,"text","mb-2"],["class","col-2 text-end",4,"ngIf"],["class","py-1",4,"ngFor","ngForOf"],[1,"row","py-3"],[1,"col-md-10"],[1,"col-md-6"],[1,"form-group"],["for","text-input"],["name","myTextArea","placeholder","Enter instructions","rows","2",1,"instruction","form-control",3,"ngModel","ngModelOptions","ngModelChange"],["for","date-input"],["id","date-input","type","date","max","maxDate",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],[1,"col-2","text-end"],[1,"point"],[1,"py-1"],["type","radio",3,"ngModel","ngModelOptions","name","id","value","ngModelChange","change"],[1,"row","py-5"],[1,"col-md-10","text-total"],[1,"col-md-2","text-end"],[1,"row","pb-3"],[1,"col-md-12"],["for","text-input",1,"py-2"],["name","myTextArea","placeholder","Enter summary plan","rows","5",1,"summary",3,"ngModel","ngModelChange"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-danger",3,"click"]],template:function(e,n){if(1&e){const i=t.EpF();t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._uU(2,"Dashboard"),t.qZA(),t.TgZ(3,"div",2),t.TgZ(4,"nav",3),t.TgZ(5,"ol",4),t.TgZ(6,"li",5),t.TgZ(7,"a",6),t.NdJ("click",function(d){return d.preventDefault()}),t._UZ(8,"i",7),t.qZA(),t.qZA(),t.TgZ(9,"li",8),t._uU(10,"Points calculator"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"div",9),t.TgZ(12,"div",10),t.TgZ(13,"div",11),t.TgZ(14,"div",12),t.TgZ(15,"a",13),t.NdJ("click",function(){return n.onClick("australian")}),t._uU(16," Australian point system "),t.qZA(),t.qZA(),t.TgZ(17,"div",14),t.TgZ(18,"a",13),t.NdJ("click",function(){return n.onClick("canberra")}),t._uU(19," Canberra metrics "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(20,"div",15),t.TgZ(21,"div",16),t.TgZ(22,"div",17),t.TgZ(23,"div",18),t.TgZ(24,"div",19),t.YNc(25,xt,2,0,"h5",20),t.YNc(26,Ft,2,0,"h5",20),t.qZA(),t._UZ(27,"hr"),t.YNc(28,wt,4,2,"form",21),t.TgZ(29,"form",22),t.TgZ(30,"div"),t.YNc(31,Ot,2,1,"div",23),t.YNc(32,Nt,7,1,"div",24),t.YNc(33,Pt,6,1,"div",25),t.TgZ(34,"div",26),t.TgZ(35,"div",27),t.TgZ(36,"button",28),t.NdJ("click",function(){t.CHM(i);const d=t.MAs(41);return n.selectDocuments(d)}),t._uU(37,"Select documents"),t.qZA(),t.TgZ(38,"button",29),t.NdJ("click",function(){return n.submit()}),t._uU(39,"Submit form"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(40,Jt,12,0,"ng-template",null,30,t.W1O)}2&e&&(t.xp6(15),t.ekj("custom-slider","australian"===n.selected),t.xp6(3),t.ekj("custom-slider","canberra"===n.selected),t.xp6(7),t.Q6J("ngIf",n.isAus),t.xp6(1),t.Q6J("ngIf",!n.isAus),t.xp6(2),t.Q6J("ngIf",n.isAus),t.xp6(3),t.Q6J("ngForOf",n.pointFormOne),t.xp6(1),t.Q6J("ngIf",n.showSummary),t.xp6(1),t.Q6J("ngIf",n.showSummary),t.xp6(3),t.Q6J("disabled",!n.showSummary),t.xp6(2),t.Q6J("disabled",!n.showSummary))},directives:[p.O5,l._Y,l.JL,l.F,p.sg,l.Fj,l.JJ,l.On,l._,yt],styles:[".toggle-label[_ngcontent-%COMP%]{width:14rem}.form-check-input[_ngcontent-%COMP%]{width:2.5rem;height:2.5rem;background-color:var(--contact-btn-background);box-shadow:0 8px 22px 6px #00000040,inset 0 6px 4px #ffffff40}.form-check-input[_ngcontent-%COMP%]:checked[type=radio]{width:2.5rem;height:2.5rem;border-color:var(--primary-btn-background);border-style:solid;border-radius:50%;background-color:#4e3c3c;color:var(--primary-icon-color);font-weight:bold;background-image:url(\"data:image/svg+xml;charset=utf8,<svg id='Expanded_finals_' data-name='Expanded (finals)' xmlns='http://www.w3.org/2000/svg' viewBox='-3 -3 30 30'><path fill='rgb(255,255,255)' d='M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z'/></svg>\")}.color[_ngcontent-%COMP%]{background-color:#93acba;border-color:#000}.text[_ngcontent-%COMP%]{font-weight:800}.point[_ngcontent-%COMP%]{display:inline-block;height:auto;visibility:visible;background-color:#472c8c;color:#fff;border-radius:50%;transform:rotateY(360deg);padding:.2em;font-size:1.5em;transition:transform .75s ease-in-out;min-width:2em;position:relative;margin:0;text-align:center}.text-total[_ngcontent-%COMP%]{font-size:1.5em;font-weight:bold;align-self:end}.summary[_ngcontent-%COMP%]{min-width:200px;width:inherit}.btn-select[_ngcontent-%COMP%]{padding-right:0}.align-buttons[_ngcontent-%COMP%]{text-align:right}"]}),o})(),data:{title:"Points Calculator"}}];let Lt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[g.Bz.forChild(kt)],g.Bz]}),o})();var x=s(6618),Qt=s(3173),Yt=s(1841),Et=s(4466),F=s(6091),S=s(8351),w=s(1948),U=s(6253),D=s(5116),M=s(8179),O=s(3768),N=s(2837),P=s(8781),_=s(7950),J=s(3470),I=s(6515),k=s(3837),L=s(2508),Q=s(9285),Y=s(823),v=s(8556),E=s(1139),j=s(4569),H=s(5223),R=s(9114),B=s(5637),$=s(4078),X=s(7124),V=s(7143),z=s(9171),W=s(2557),G=s(8613),K=s(4360),tt=s(3682),et=s(6870);let jt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[],imports:[[p.ez,l.u5,l.UX,F.HT,S.Bb,w.ot,U.vV,D.QW,M.p9,O.Hi,N.T5,P.FA,_.Is,J.To,I.N6,k.Ps,L.c,Q.ie,Y.Tx,v.XK,E.TU,j.Cv,H.Cq,R.Fk,v.si,B.LD,$.SJ,X.KP,V.rP,z.ZX,W.JX,G.p0,K.Nh,tt.g0,et.AV],l.u5,l.UX,F.HT,S.Bb,w.ot,U.vV,D.QW,M.p9,O.Hi,N.T5,P.FA,_.Is,J.To,I.N6,k.Ps,L.c,Q.ie,Y.Tx,v.XK,E.TU,j.Cv,H.Cq,R.Fk,v.si,B.LD,$.SJ,X.KP,V.rP,z.ZX,W.JX,G.p0,K.Nh,tt.g0,et.AV]}),o})(),Ht=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[p.ez,Lt,x._8.forRoot({provide:x._A,useFactory:Qt.x}),Yt.JF,Z.bz,Z.M,Z.UL,y.ZQ,l.u5,l.UX,Z.IJ,h.kn.forRoot(),h.ZU.forRoot(),ot.cX,q.V7,Et.m,jt,_.Is]]}),o})()}}]);