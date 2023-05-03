import { TimeslotService } from './../../../shared/services/timeslot.service';
import { AppointmentService } from './../../../shared/services/appointment.service';
import { Component, ViewChild, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent,
} from 'angular-calendar';
import { Appointment } from 'src/app/shared/models/appointment.model';
import { ToastrService } from 'ngx-toastr';
import { Message } from 'src/app/shared/constants/enums/toaster';
import { DatePipe } from '@angular/common';
import { DateTransformService } from 'src/app/shared/services/data-transform.service';

const colors: any = {
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

@Component({
  selector: 'app-appointment-calendar',
  templateUrl: './appointment-calendar.component.html',
  styleUrls: ['./appointment-calendar.component.scss'],
})
export class AppointmentCalendarComponent {
  @ViewChild('modalContent', { static: false }) modalContent: TemplateRef<any>;

  view: string = 'month';

  title = 'Modal Title';
  bsModalRef: BsModalRef;

  newEvent: CalendarEvent;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [];

  activeDayIsOpen: boolean = true;

  date: Date = new Date();
  _dateFormat = new DateTransformService(this.datePipe);
  dayEvents: any[];
  isBooked: boolean;
  timeSlots: any[]=[];
  startDate: string;
  endDate: string;
  clickedDay: any;

  timeStart;
  timeEnd;
  meridianStart = true;
  meridianEnd = true;
  isDayClicked: boolean;
  slotDate: Date;
  fromTime: Date = null;
  toTime: Date = null;
  userId: number;

  constructor(private modal: NgbModal, private appointmentService: AppointmentService,public modalService: BsModalService,
    public toaster: ToastrService, public datePipe: DatePipe, private timeSlotService: TimeslotService) {

      this.startDate = this._dateFormat.dateTransformFullYear(
        new Date(this.date.getFullYear(), this.date.getMonth(), 1)
      );
      this.endDate = this._dateFormat.dateTransformFullYear(
        new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0)
      );

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

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    this.dayEvents = events
    let day = new Date(date);
    this.clickedDay = day.toString().split(':')[0].slice(0,-3);
    this.timeSlots = [];
    this.isDayClicked = true;
    this.slotDate = day;
  }

  getTimeSlots(){
      let dayTimeSlots = [];
     this.timeSlotService.getTimeSlotsByLawyerId(this.userId).subscribe(res => {

      res.data.forEach(element => {

        let mockDay = element.fromTime.toString().split('T');
        let mockedDate = mockDay[0];
        let mockTime = mockDay[1];
        let clickedDate = this._dateFormat.dateFromString(`${mockedDate} ${mockTime}`);
        if(this.slotDate.getFullYear() == clickedDate.getFullYear()
        && this.slotDate.getMonth() == clickedDate.getMonth()
        && this.slotDate.getDate() == clickedDate.getDate()){
          dayTimeSlots.push(element);
        }
      });

      let bookedTimeSlotsIds = [];
      this.dayEvents.forEach(e => {
        bookedTimeSlotsIds.push(e.id);
      })
      dayTimeSlots.forEach(e => {
        if (bookedTimeSlotsIds.includes(e.id)) {
          e.isBooked = true;
        }else {
          e.isBooked = false;
        }
        e.fromTime = `${e.fromTime.split('T')[1].split(':')[0]}:${e.fromTime.split('T')[1].split(':')[1]}`;
        e.toTime = `${e.toTime.split('T')[1].split(':')[0]}:${e.toTime.split('T')[1].split(':')[1]}`;

        this.timeSlots.push(e);
      })

    }, error => {
    })
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  onTimeStartChange(value: { hour: string; minute: string }): void {
    let selectedDate = this._dateFormat.dateTransformFullYear(this.slotDate);
    this.fromTime = this._dateFormat.dateFromString(
      `${selectedDate} ${value.hour}:${value.minute}`
    );
  }

  onTimeEndChange(value: { hour: string; minute: string }): void {
    let selectedDate = this._dateFormat.dateTransformFullYear(this.slotDate);
    this.toTime = this._dateFormat.dateFromString(
      `${selectedDate} ${value.hour}:${value.minute}`
    );
  }

  addTimeSlot(){
    let selectedDate = this._dateFormat.dateTransformFullYear(this.slotDate);
    if(this.fromTime === null){
      this.fromTime = this._dateFormat.dateFromString(
        `${selectedDate} ${this.timeStart.hour}:${this.timeStart.minute}`
    );
    }
    if(this.toTime === null){
      this.toTime = this._dateFormat.dateFromString(
        `${selectedDate} ${this.timeEnd.hour}:${this.timeEnd.minute}`
      );
    }
    let timeSlotDto = {
      lawyerId: this.userId,
      fromTime: new DatePipe('en-US').transform(this.fromTime, 'yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\''),
      toTime:   new DatePipe('en-US').transform(this.toTime, 'yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\''),
    }
    this.timeSlotService.createTimeSlot(timeSlotDto).subscribe(res => {
      
      this.timeSlots = [];
      this.getTimeSlots();
    })
  }

  getAppointments(loggedInUserId: number) {
    //get appointment by lawyer id service
    let appointmentRequestData = {
      lawyerId: loggedInUserId
    }
    this.appointmentService.getAppointmentsByStatusOrLawyerId(appointmentRequestData).subscribe(res => {
      let appointments: Appointment[] = res.data;
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
        this.toaster.success(
          Message.toasterEmptyAppointment,
          "",
          {
            timeOut: Message.toasterTimeout,
          }
        );
      }
    }, error => {
      this.toaster.error(
        Message.toasterAppointmentError,
        Message.toasterFailure,
        {
          timeOut: Message.toasterTimeout,
        }
      );
    })

    if (this.view == 'month') {
      setTimeout(() => {
        
        if (document.getElementsByClassName('cal-open-day-events').length ) {
          document.getElementsByClassName('cal-open-day-events')[0].setAttribute('style', 'display: none;');
        }
        }, 50);
    } 
  }

  openModal(template: TemplateRef<any>)  { 
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
