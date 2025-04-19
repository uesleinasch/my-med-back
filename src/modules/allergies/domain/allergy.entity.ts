import { Types } from 'mongoose';

export class Allergy {
  constructor(
    public allergyId?: Types.ObjectId,
    public relationshipType?: string, 
    public diagnosedAt?: Date,
    public severity?: string, 
    public notes?: string,
  ) {}
}