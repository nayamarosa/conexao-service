import { IMentor, Mentor } from '../entities/Mentor';

export interface IMentorRepository {
  create(newMentor: IMentor): Mentor | null;

  getByMail(email: string): Mentor | null;

  getAll(): Mentor[] | null;
}