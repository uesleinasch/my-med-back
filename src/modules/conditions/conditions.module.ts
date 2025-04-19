import { Router } from 'express';
import { ConditionController } from './controllers/condition.controller';
import { MongoConditionRepository } from './infrastructure/repositories/condition.repository';

export class ConditionsModule {
  private router: Router;
  private conditionController: ConditionController;

  constructor() {
    this.router = Router();
    const conditionRepository = new MongoConditionRepository();
    this.conditionController = new ConditionController(conditionRepository);
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    // GET all conditions
    this.router.get('/', this.conditionController.getMany.bind(this.conditionController));
  }

  getRouter(): Router {
    return this.router;
  }
}