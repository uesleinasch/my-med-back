import { Router } from 'express';
import { UserController } from './controllers/user.controller';
import { GetManyUsersUseCase } from './use-cases/get-many-users.use-case';
import { MongoUserRepository } from './infrastructure/repositories/user.repository';

export class UsersModule {
  private router: Router;
  private userController: UserController;

  constructor() {
    // Inicializa o router
    this.router = Router();
    
    // Inicializa os componentes do módulo
    const userRepository = new MongoUserRepository();
    const getManyUsersUseCase = new GetManyUsersUseCase(userRepository);
    this.userController = new UserController(getManyUsersUseCase);
    
    // Define as rotas
    this.setupRoutes();
  }

  private setupRoutes(): void {
    // Rota para buscar todos os usuários
    this.router.get('/', this.userController.getMany.bind(this.userController));
  }

  getRouter(): Router {
    return this.router;
  }
}