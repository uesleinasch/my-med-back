import express, { Router } from 'express';
import { AllergyRepository } from './infrastructure/repositories/allergy.repository';
import { GetManyAllergiesUseCase } from './use-cases/get-many-allergies.use-case';
import { AllergyController } from './controllers/allergy.controller';

export class AllergiesModule {
  private router: Router;
  private allergyRepository: AllergyRepository;
  private getManyAllergiesUseCase: GetManyAllergiesUseCase;
  private allergyController: AllergyController;

  constructor() {
    this.router = express.Router();
    this.allergyRepository = new AllergyRepository();
    this.getManyAllergiesUseCase = new GetManyAllergiesUseCase(this.allergyRepository);
    this.allergyController = new AllergyController(this.getManyAllergiesUseCase);
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.router.get('/', this.allergyController.getMany.bind(this.allergyController));
  }

  getRouter(): Router {
    return this.router;
  }
}