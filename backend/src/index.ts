import express from 'express';
import type { Request, Response } from 'express';
import cors from 'cors';
import db from './config/database.js'; // Tu puente a la base de dato
import Equipment from './models/Equipment.js'; // Tu nuevo modelo (el molde)
import equipmentRoutes from './routes/equipment.routes.js';

import dotenv from 'dotenv';
dotenv.config();


const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/equipment', equipmentRoutes);
// Tu ruta de prueba
app.get('/', (req: Request, res: Response) => {
  res.send('¡El servidor del Inventario está funcionando perfectamente!');
});

// --- AQUÍ ES DONDE VA LA FUNCIÓN ---
const arrancarServidor = async () => {
  try {
    // 1. Probamos que el puente funciona
    await db.authenticate();
    console.log('Conexión a la base de datos establecida con éxito.');

    // 2. Le decimos a Sequelize que construya la tabla de Equipos (si no existe)
    await db.sync(); 
    console.log('Modelos sincronizados con la base de datos.');

    // 3. Encendemos el servidor para recibir usuarios
    app.listen(port, () => {
      console.log(` Servidor corriendo en http://localhost:${port}`);
    });
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
};

// Y finalmente, ejecutamos la función
arrancarServidor();