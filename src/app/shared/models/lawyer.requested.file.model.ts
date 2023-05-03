import { FileType } from "./file.type.model";

export class LawyerRequestedFile {
  id: number;
  studentId: number;
  lawyerId: number;
  fileType: FileType;
  dueDate: Date;
  isDeleted: Boolean;
}
