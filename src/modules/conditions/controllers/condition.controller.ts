import { Request, Response } from 'express';
import { GetManyConditionsUseCase } from '../use-cases/get-many-conditions.use-case';
import { ConditionRepository } from '../infrastructure/repositories/condition-repository.interface';

export class ConditionController {
  constructor(private readonly conditionRepository: ConditionRepository) {}

  async getMany(req: Request, res: Response): Promise<void> {
    try {
      const getManyConditionsUseCase = new GetManyConditionsUseCase(this.conditionRepository);
      const conditions = await getManyConditionsUseCase.execute();
      res.status(200).json(conditions);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      res.status(500).json({ message: errorMessage });
    }
  }
}