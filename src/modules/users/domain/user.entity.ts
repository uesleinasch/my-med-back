import { ObjectId } from 'mongoose';

export interface User {
  id?: string;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt?: Date;
  updatedAt?: Date;
}