import { Types } from 'mongoose';
import { AllergySeverity } from '../enum/severity.enum';

export class Allergy {
  constructor(
    public allergyId?: Types.ObjectId,
    public name?: string,
    public allergen?: string,
    public reaction?: string,
    public severity?: AllergySeverity,
    public chronic?: boolean,
    public notes?: string,
    public createdAt?: Date,
    public updatedAt?: Date
  ) {}
}