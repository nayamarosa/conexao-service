import { IMentor, Mentor } from '../entities/Mentor';

export interface IMentorRepository {
  create(newMentor: IMentor): Mentor | null;

  getByUuid(uuid: string): Mentor | null;

  getAll(): Mentor[] | null;
}