import express, { Application } from 'express';
import cors from 'cors';
import path from 'path';
import { UsersModule } from '../../modules/users/users.module';
import { AllergiesModule } from '../../modules/allergies/allergies.module';
import { ConditionsModule } from '../../modules/conditions/conditions.module';
import { MedicinesModule } from '../../modules/medicines/medicines.module';

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
const conditionsModule = new ConditionsModule();
const medicinesModule = new MedicinesModule();

app.use('/api/users', usersModule.getRouter());
app.use('/api/allergies', allergiesModule.getRouter());
app.use('/api/medical_conditions', conditionsModule.getRouter());
app.use('/api/medicines', medicinesModule.getRouter());

// Rota padrão
app.get('/', (req, res) => {
  res.json({ message: 'Bem-vindo à API My-Med!' });
});

export default app;