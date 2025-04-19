import { Medicine } from "../../domain/medicine.entity";
import { MedicineRepository } from "./medicine-repository.interface";
import { MedicineModel } from "../models/medicine.model";

export class MongoMedicineRepository implements MedicineRepository {
  async getMany(): Promise<Medicine[]> {
    try {
      const medicines = await MedicineModel.find();
      return medicines.map(medicine => medicine.toJSON() as Medicine);
    } catch (error) {
      console.error('Erro ao buscar medicamentos:', error);
      throw new Error('Falha ao buscar medicamentos');
    }
  }
}