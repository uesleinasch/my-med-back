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

  async findById(id: string): Promise<Allergy | null> {
    try {
      const allergy = await AllergyModel.findById(id).lean();
      return allergy;
    } catch (error) {
      console.error(`Error finding allergy with id ${id}:`, error);
      throw new Error('Failed to fetch allergy');
    }
  }

  async create(allergy: Allergy): Promise<Allergy> {
    try {
      const newAllergy = new AllergyModel(allergy);
      const savedAllergy = await newAllergy.save();
      return savedAllergy.toJSON();
    } catch (error) {
      console.error('Error creating allergy:', error);
      throw new Error('Failed to create allergy');
    }
  }

  async update(id: string, allergy: Partial<Allergy>): Promise<Allergy | null> {
    try {
      const updatedAllergy = await AllergyModel.findByIdAndUpdate(
        id,
        { $set: allergy },
        { new: true }
      ).lean();
      return updatedAllergy;
    } catch (error) {
      console.error(`Error updating allergy with id ${id}:`, error);
      throw new Error('Failed to update allergy');
    }
  }

  async delete(id: string): Promise<boolean> {
    try {
      const result = await AllergyModel.deleteOne({ _id: id });
      return result.deletedCount > 0;
    } catch (error) {
      console.error(`Error deleting allergy with id ${id}:`, error);
      throw new Error('Failed to delete allergy');
    }
  }
}