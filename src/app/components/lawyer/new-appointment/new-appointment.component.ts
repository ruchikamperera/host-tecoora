import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/shared/models/appointment.model';
import { AppointmentService } from 'src/app/shared/services/appointment.service';
import { ToastrService } from 'ngx-toastr';
import { Message } from 'src/app/shared/constants/enums/toaster';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.scss'],
})
export class NewAppointmentComponent implements OnInit {
  date: Date = new Date();
  events: any[] = [];
  newAppointments: Appointment[] = [];
  toBeCanceledAppointment: Appointment[];
  isEmpty: boolean;
  userId: number;
  constructor(private appointmentService: AppointmentService, 
    public toaster : ToastrService) {}

  ngOnInit(): void {
    this.userId = Number(localStorage.getItem("userId"));
    this.getAppointments('pending', this.userId );
  }

  getAppointments(status: string, loginUserId: number) {
    const appointmentRequestDto = {
      status: status,
      lawyerId: loginUserId,
    };
    this.appointmentService
      .getAppointmentsByStatusOrLawyerId(appointmentRequestDto)
      .subscribe((response) => {
        this.newAppointments = response.data;
        this.newAppointments?.forEach((e) => {
          this.events.push({
            appointmentDate: e.appointmentDate.toString().split('T')[0],
            callType: e.callType,
            id: e.id,
            status: e.status,
          });
        });
        console.log(this.events, 'events');
        if(!this.events.length){
          this.isEmpty = true;
          console.log(this.isEmpty)
        }else {
          this.isEmpty = false;
        }
      });
  }

  appointmentCancel(cancelAppointmentId: number) {
    this.toBeCanceledAppointment = this.newAppointments.filter(
      (appointment) => {
        return appointment.id == cancelAppointmentId;
      }
    );

    this.toBeCanceledAppointment[0].status = 'cancel';
    this.appointmentService
      .updateAppointments(this.toBeCanceledAppointment[0])
      .subscribe((response) => {
        this.events = [];
        this.getAppointments('pending', this.userId);
        this.toaster.success(
          Message.toasterAppointmentCancel,
          Message.toasterSuccess,
          {
            timeOut: Message.toasterTimeout,
          }
        );
      },error => {
        this.toaster.error(
          Message.toasterAppointmentCancel,
          Message.toasterFailure,
          {
            timeOut: Message.toasterTimeout,
          }
        );
      });
  }
}
