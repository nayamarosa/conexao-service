export interface IMentored {
  uuid: string;
  email: string;
  password: string;
  name: string;
  age: number;
  document: string;
  profession: string;
  interestArea: string;
  education: string;
  userType: string;
  mentorshipGoal: string;
}

export class Mentored implements IMentored {
  public uuid: string;
  public email: string;
  public password: string;
  public name: string;
  public age: number;
  public document: string;
  public profession: string;
  public interestArea: string;
  public education: string;
  public userType: string;
  public mentorshipGoal: string;

  constructor(
    newUuid: string,
    newEmail: string,
    newPassword: string,
    newName: string,
    newAge: number,
    newDocument: string,
    newProfession: string,
    newinterestArea: string,
    newEducation: string,
    newUserType: string,
    newmentorshipGoal: string,
  ) {
    this.uuid = newUuid;
    this.email = newEmail;
    this.password = newPassword;
    this.name = newName;
    this.age = newAge;
    this.document = newDocument;
    this.profession = newProfession;
    this.interestArea = newinterestArea;
    this.education = newEducation;
    this.userType = newUserType;
    this.mentorshipGoal = newmentorshipGoal;
  }
}