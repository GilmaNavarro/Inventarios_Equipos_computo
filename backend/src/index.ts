import 'dotenv/config';
import express, { type Request, type Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para leer JSON
app.use(express.json());

// Ruta de prueba
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'API de Inventario de Equipos funcionando correctamente 🚀' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});