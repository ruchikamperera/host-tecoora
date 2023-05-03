import { FileType } from "./file.type.model";

export class UserFileDetail {
  id: number;
  studentId: number;
  lawyerId: number;
  fileType: FileType;
  fileUrl: string;
  isDeleted: Boolean;
}
