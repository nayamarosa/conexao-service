import { IMentor, Mentor } from '../entities/Mentor';

export interface IMentorRepository {
  create(newMentor: IMentor): Mentor | Error;

  getByUuid(uuid: string): Mentor | Error;

  getByEmail(email: string): Mentor | Error;

  getAll(): Mentor[] | Error;

  update(newMentor: IMentor, uuid: string): Mentor | Error;
}