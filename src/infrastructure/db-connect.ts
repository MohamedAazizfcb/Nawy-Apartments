import 'reflect-metadata';
import { AppDataSource } from "./ormconfig";

export const connectDB = async () => {
  try {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
      console.log('Database connected');
    }
  } catch (error) {
    console.error('Database connection error:', error);
    throw error;
  }
};
