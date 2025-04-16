import connectToDatabase from './frameworks/database/mongodb-connection';
import startServer from './frameworks/web/server';

// Auto-execute a função assíncrona para inicializar a aplicação
(async () => {
  try {
    // Conecta ao MongoDB
    await connectToDatabase();
    
    // Inicia o servidor HTTP
    startServer();
  } catch (error) {
    console.error('Erro ao inicializar a aplicação:', error);
    process.exit(1);
  }
})();