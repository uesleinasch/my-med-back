import { Medicine } from "../domain/medicine.entity";
import { MedicineRepository } from "../infrastructure/repositories/medicine-repository.interface";
import { IUseCase } from "../../../interfaces/use-cases/use-case-interface";

export class GetManyMedicinesUseCase implements IUseCase<void, Medicine[]> {
  constructor(private medicineRepository: MedicineRepository) {}

  async execute(): Promise<Medicine[]> {
    return this.medicineRepository.getMany();
  }
}