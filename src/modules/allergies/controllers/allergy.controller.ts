import { Request, Response } from 'express';
import { GetManyAllergiesUseCase } from '../use-cases/get-many-allergies.use-case';

export class AllergyController {
  constructor(private readonly getManyAllergiesUseCase: GetManyAllergiesUseCase) {}

  async getMany(req: Request, res: Response): Promise<void> {
    try {
      const allergies = await this.getManyAllergiesUseCase.execute();
      res.status(200).json(allergies);
    } catch (error) {
      console.error('Error retrieving allergies:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}