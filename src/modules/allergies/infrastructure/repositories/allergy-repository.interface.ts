import { Allergy } from '../../domain/allergy.entity';

export interface AllergyRepositoryInterface {
  getMany(): Promise<Allergy[]>;
  findById(id: string): Promise<Allergy | null>;
  create(allergy: Allergy): Promise<Allergy>;
  update(id: string, allergy: Partial<Allergy>): Promise<Allergy | null>;
  delete(id: string): Promise<boolean>;
}