import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  model: NgbDateStruct;
  date: {year: number, month: number};

  constructor(private calendar: NgbCalendar, public route: Router) {
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

  ngOnInit(): void {
  }

  redirectPayment(){
    this.route.navigateByUrl('/dashboard/payment');
  }

}
