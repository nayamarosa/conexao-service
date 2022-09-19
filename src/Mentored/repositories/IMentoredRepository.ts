import { IMentored, Mentored } from '../entities/Mentored';

export interface IMentoredRepository {
  create(newMentored: IMentored): Mentored | null;

  getByMail(email: string): Mentored | null;

  getAll(): Mentored[] | null;
}