import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Leemos las variables del archivo .env
dotenv.config();

// Creamos la instancia de conexión
const db = new Sequelize(
  process.env.DB_NAME as string,      // Nombre de la BD
  process.env.DB_USER as string,      // Usuario (postgres)
  process.env.DB_PASSWORD as string,  // Tu contraseña
  {
    host: process.env.DB_HOST as string,
    dialect: 'postgres',
    port: Number(process.env.DB_PORT) || 5432,
    logging: false,
  }
);

export default db;