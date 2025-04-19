import { ObjectId } from 'mongoose';

export interface Condition {
  conditionId: ObjectId;
  relationshipType: 'self' | 'dependent';
  createdAt?: Date;
  updatedAt?: Date;
}