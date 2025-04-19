import express, { Application } from 'express';
import cors from 'cors';
import path from 'path';
import { UsersModule } from '../../modules/users/users.module';
import { AllergiesModule } from '../../modules/allergies/allergies.module';

const app: Application = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servindo arquivos estáticos da pasta public
app.use(express.static(path.join(process.cwd(), 'public')));

// Inicializa e registra os módulos
const usersModule = new UsersModule();
const allergiesModule = new AllergiesModule();

app.use('/api/users', usersModule.getRouter());
app.use('/api/allergies', allergiesModule.getRouter());

// Rota padrão
app.get('/', (req, res) => {
  res.json({ message: 'Bem-vindo à API My-Med!' });
});

export default app;