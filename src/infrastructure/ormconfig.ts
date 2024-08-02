import { DataSource } from 'typeorm';
import { Apartment } from '../domain/entities/apartment.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 12345,
  username: 'postgres',
  password: '123',
  database: 'apartmentstest',
  entities: [Apartment],
  synchronize: true,
});
