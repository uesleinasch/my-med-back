import { Allergy } from '../../domain/allergy.entity';
import { AllergyRepositoryInterface } from './allergy-repository.interface';
import { AllergyModel, AllergyDocument } from '../models/allergy.model';

export class AllergyRepository implements AllergyRepositoryInterface {
  async getMany(): Promise<Allergy[]> {
    try {
      const allergies = await AllergyModel.find().lean();
      return allergies;
    } catch (error) {
      console.error('Error finding allergies:', error);
      throw new Error('Failed to fetch allergies');
    }
  }
}