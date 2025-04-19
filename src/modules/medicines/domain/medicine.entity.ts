import { ObjectId } from 'mongoose';

export interface Medicine {
  id?: string;
  name: string;
  type: string;
  dosage: string;
  quantity: number;
  unit: string;
  minQuantity: number;
  batch?: string;
  expiration: Date;
  locationId: string | ObjectId;
  description: string;
  price: number;
  notes?: string;
  createdAt?: Date;
  updatedAt?: Date;
}