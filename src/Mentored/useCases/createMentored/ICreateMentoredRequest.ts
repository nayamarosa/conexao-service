export interface ICreateMentoredRequest {
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