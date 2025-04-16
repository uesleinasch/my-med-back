import http from 'http';
import app from './app';
import config from '../config/environment';

const server = http.createServer(app);

const startServer = (): void => {
  server.listen(config.port, () => {
    console.log(`Servidor rodando em http://localhost:${config.port}`);
    console.log(`Ambiente: ${config.nodeEnv}`);
  });
};

export default startServer;