import { Request, Response } from 'express';
import { GetManyMedicinesUseCase } from '../use-cases/get-many-medicines.use-case';

export class MedicineController {
  constructor(private readonly getManyMedicinesUseCase: GetManyMedicinesUseCase) {}

  async getMany(req: Request, res: Response): Promise<void> {
    try {
      const medicines = await this.getManyMedicinesUseCase.execute();
      res.status(200).json(medicines);
    } catch (error) {
      console.error('Erro ao buscar medicamentos:', error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }
}