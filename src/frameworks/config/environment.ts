import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT || 3000,
  mongodbUri: process.env.MONGODB_URI || 'mongodb+srv://subsueslei:xoZDNNQohVY64srJ@cluster0.bhrqape.mongodb.net/',
  nodeEnv: process.env.NODE_ENV || 'development',
};