export interface IMentored {
  uuid: string;
  email: string;
  password: string;
  name: string;
  age: number;
  document: string;
  profession: string;
  practiceArea: string;
  education: string;
  userType: string;
  questions: [];
}

export class Mentored implements IMentored {
  public uuid: string;
  public email: string;
  public password: string;
  public name: string;
  public age: number;
  public document: string;
  public profession: string;
  public practiceArea: string;
  public education: string;
  public userType: string;
  public questions: [];

  constructor(
    newUuid: string,
    newEmail: string,
    newPassword: string,
    newName: string,
    newAge: number,
    newDocument: string,
    newProfession: string,
    newPracticeArea: string,
    newEducation: string,
    newUserType: string,
    newQuestions: [],
  ) {
    this.uuid = newUuid;
    this.email = newEmail;
    this.password = newPassword;
    this.name = newName;
    this.age = newAge;
    this.document = newDocument;
    this.profession = newProfession;
    this.practiceArea = newPracticeArea;
    this.education = newEducation;
    this.userType = newUserType;
    this.questions = newQuestions;
  }
}