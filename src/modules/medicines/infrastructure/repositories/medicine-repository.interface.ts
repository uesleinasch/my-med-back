import { Medicine } from "../../domain/medicine.entity";

export interface MedicineRepository {
  getMany(): Promise<Medicine[]>;
  // Outras operações serão adicionadas posteriormente como: 
  // getById(id: string): Promise<Medicine | null>;
  // create(medicine: Medicine): Promise<Medicine>;
  // update(id: string, medicine: Partial<Medicine>): Promise<Medicine | null>;
  // delete(id: string): Promise<boolean>;
}