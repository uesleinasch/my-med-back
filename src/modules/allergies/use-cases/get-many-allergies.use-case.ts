import { Allergy } from '../domain/allergy.entity';
import { AllergyRepositoryInterface } from '../infrastructure/repositories/allergy-repository.interface';
import { IUseCase } from '../../../interfaces/use-cases/use-case-interface';

export class GetManyAllergiesUseCase implements IUseCase<void, Allergy[]> {
  constructor(private allergyRepository: AllergyRepositoryInterface) {}

  async execute(): Promise<Allergy[]> {
    return this.allergyRepository.getMany();
  }
}