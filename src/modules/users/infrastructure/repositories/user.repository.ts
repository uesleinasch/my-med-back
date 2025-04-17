import { User } from "../../domain/user.entity";
import { UserRepository } from "./user-repository.interface";
import { UserModel } from "../models/user.model";

export class MongoUserRepository implements UserRepository {
  async getMany(): Promise<User[]> {
    try {
      const users = await UserModel.find().select('-password');
      return users.map(user => user.toJSON() as User);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
      throw new Error('Falha ao buscar usuários');
    }
  }
}