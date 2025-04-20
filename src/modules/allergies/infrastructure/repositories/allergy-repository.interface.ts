import { Allergy } from '../../domain/allergy.entity';

export interface AllergyRepositoryInterface {
  getMany(): Promise<Allergy[]>;
}