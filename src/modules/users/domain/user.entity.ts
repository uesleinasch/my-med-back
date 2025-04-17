import { ObjectId } from 'mongoose';

export interface User {
  id?: string;
  name: string;
  email: string;
  password: string;
  role: string;
  relations: Relation[];
  medicalProfile: MedicalProfile;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Relation {
  userId: string | ObjectId;
  type: string;
  since: Date;
}

export interface MedicalProfile {
  allergies: Allergy[];
  conditions: Condition[];
}

export interface Allergy {
  allergyId: string | ObjectId;
  relationshipType: 'self' | 'dependent';
  diagnosedAt: Date;
  severity: string;
  notes?: string;
}

export interface Condition {
  conditionId: string | ObjectId;
  relationshipType: 'self' | 'dependent';
  diagnosedAt: Date;
  status: string;
}