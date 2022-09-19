import { IMentored, Mentored } from '../entities/Mentored';

export interface IMentoredRepository {
  create(newMentored: IMentored): Mentored | null;

  getByUuid(uuid: string): Mentored | null;

  getAll(): Mentored[] | null;
}