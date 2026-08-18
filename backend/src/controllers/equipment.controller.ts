import { type Request, type Response } from 'express';
import Equipment from '../models/Equipment.js'; // Importamos el molde

// 1. Crear un nuevo equipo (POST)
export const createEquipment = async (req: Request, res: Response) => {
  try {
    // Sequelize toma los datos que envía el usuario (req.body) y los guarda en PostgreSQL
    const newEquipment = await Equipment.create(req.body);
    res.status(201).json(newEquipment); // 201 significa "Creado con éxito"
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el equipo', error });
  }
};

// 2. Listar todos los equipos (GET)
export const getEquipments = async (req: Request, res: Response) => {
  try {
    // Sequelize busca todos los registros en la tabla
    const equipments = await Equipment.findAll();
    res.status(200).json(equipments); // 200 significa "OK"
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los equipos', error });
  }
};