import { ObjectId } from 'mongoose';

export interface Condition {
  conditionId: ObjectId;
  relationshipType: 'self' | 'dependent';
  diagnosedAt: Date;
  status: 'active' | 'resolved' | 'recurrent' | 'inactive';
  treatments: string;
  createdAt?: Date;
  updatedAt?: Date;
}