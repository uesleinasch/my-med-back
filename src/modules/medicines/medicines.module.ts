import { Router } from 'express';
import { MedicineController } from './controllers/medicine.controller';
import { MongoMedicineRepository } from './infrastructure/repositories/medicine.repository';
import { GetManyMedicinesUseCase } from './use-cases/get-many-medicines.use-case';

export class MedicinesModule {
  private router: Router;
  private medicineController: MedicineController;

  constructor() {
    this.router = Router();
    const medicineRepository = new MongoMedicineRepository();
    const getManyMedicinesUseCase = new GetManyMedicinesUseCase(medicineRepository);
    this.medicineController = new MedicineController(getManyMedicinesUseCase);
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    // GET all medicines
    this.router.get('/', this.medicineController.getMany.bind(this.medicineController));
  }

  getRouter(): Router {
    return this.router;
  }
}