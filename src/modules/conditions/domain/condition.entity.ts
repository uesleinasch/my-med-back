import { ObjectId } from 'mongoose';

export interface Condition {
  conditionId?: ObjectId;
  name: string;
  description: string;
  symptoms: string[];
  chronic: boolean;
  infectious: boolean;
  notes: string;
  createdAt?: Date;
  updatedAt?: Date;
}