import { Request, Response } from 'express';
import { GetManyUsersUseCase } from '../use-cases/get-many-users.use-case';

export class UserController {
  constructor(private readonly getManyUsersUseCase: GetManyUsersUseCase) {}

  async getMany(req: Request, res: Response): Promise<void> {
    try {
      const users = await this.getManyUsersUseCase.execute();
      res.status(200).json(users);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }
}