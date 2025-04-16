import express, { Application } from 'express';
import cors from 'cors';
import path from 'path';

const app: Application = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servindo arquivos estáticos da pasta public
app.use(express.static(path.join(process.cwd(), 'public')));

// Rotas serão adicionadas aqui posteriormente
// app.use('/api', routes);

export default app;