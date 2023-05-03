export class User {
  id: number;
  firstName: string;
  lastName: string;
  userType: string;
  email: string;
  companyName?: string;
  dob?: Date;
  studentType?: string;
  state?: string;
  noOfReviews: number;
  yearsOfExperience: number;
  consultationFeeForOneHour?: number;
  consultationFeeForHalfAndHour?: number;
  chargingForExtraMin?: boolean;
  accessArea?: string[];
  accessAreas?: string;
  profileImageUrl?: string;
}
