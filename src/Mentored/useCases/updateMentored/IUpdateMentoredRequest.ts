export interface IUpdateMentoredRequest {
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
  feedback: string | null;
}