import { IMentored, Mentored } from '../entities/Mentored';

export interface IMentoredRepository {
  create(newMentored: IMentored): Mentored | Error;

  getByUuid(uuid: string): Mentored | Error;

  getByEmail(email: string): Mentored | Error;

  getAll(): Mentored[] | Error;

  update(newMentored: IMentored, uuid: string): Mentored | Error;

  createFeedback(uuid: string, feedBack: string): Mentored | Error;
}