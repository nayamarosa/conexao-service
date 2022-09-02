export interface IMentor {
  uuid: string;
  email: string;
  password: string;
  name: string;
  age: number;
  document: string;
  profession: string;
  practiceArea: string;
  practiceTime: string;
  education: string;
  userType: string;
}

export class Mentor implements IMentor {
  public uuid: string;
  public email: string;
  public password: string;
  public name: string;
  public age: number;
  public document: string;
  public profession: string;
  public practiceArea: string;
  public practiceTime: string;
  public education: string;
  public userType: string;

  constructor(
    newUuid: string,
    newEmail: string,
    newPassword: string,
    newName: string,
    newAge: number,
    newDocument: string,
    newProfession: string,
    newPracticeArea: string,
    newPracticeTime: string,
    newEducation: string,
    newUserType: string,
  ) {
    this.uuid = newUuid;
    this.email = newEmail;
    this.password = newPassword;
    this.name = newName;
    this.age = newAge;
    this.document = newDocument;
    this.profession = newProfession;
    this.practiceArea = newPracticeArea;
    this.practiceTime = newPracticeTime;
    this.education = newEducation;
    this.userType = newUserType;
  }
}