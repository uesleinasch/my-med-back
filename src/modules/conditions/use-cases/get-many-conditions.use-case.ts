import { IUseCase } from '../../../interfaces/use-cases/use-case-interface';
import { Condition } from '../domain/condition.entity';
import { ConditionRepository } from '../infrastructure/repositories/condition-repository.interface';

export class GetManyConditionsUseCase implements IUseCase<void, Condition[]> {
  constructor(private readonly conditionRepository: ConditionRepository) {}

  async execute(): Promise<Condition[]> {
    try {
      return await this.conditionRepository.getMany();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      throw new Error(`Error fetching conditions: ${errorMessage}`);
    }
  }
}