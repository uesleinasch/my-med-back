import mongoose from 'mongoose';
import config from '../config/environment';

const connectToDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(config.mongodbUri, {
      dbName: config.dbName,
    });
    console.log('MongoDB conectado com sucesso');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
    process.exit(1);
  }
};

export default connectToDatabase;