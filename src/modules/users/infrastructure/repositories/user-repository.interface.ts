import { User } from "../../domain/user.entity";

export interface UserRepository {
  getMany(): Promise<User[]>;
  // Outras operações serão adicionadas posteriormente como: 
  // getById(id: string): Promise<User | null>;
  // create(user: User): Promise<User>;
  // update(id: string, user: Partial<User>): Promise<User | null>;
  // delete(id: string): Promise<boolean>;
}