import { BaseModel } from './base.model';
import { TimeSlot } from './timeslot.model';

export class Appointment extends BaseModel {
  id: number;
  status: string;
  lawyerId: number;
  appointmentDate: Date;
  callType: string;
  studentId: number;
  timeSlot: TimeSlot;
  timeSlotId: number;
  canceledById?: number;
}
