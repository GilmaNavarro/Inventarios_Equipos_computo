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

// 3. Obtener un equipo específico por ID (GET)
export const getEquipmentById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const equipment = await Equipment.findByPk(id as string);
    if (!equipment) {
      res.status(404).json({ message: 'Equipo no encontrado' });
      return;
    }
    res.status(200).json(equipment);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el equipo', error });
  }
};

// Función para actualizar un equipo (PUT)
export const updateEquipment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const equipment = await Equipment.findByPk(id as string);

    if (!equipment) {
      res.status(404).json({ message: 'Equipo no encontrado' });
      return;
    }

    await equipment.update(req.body);
    res.json(equipment);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el equipo', error });
  }
};

// Función para eliminar un equipo (DELETE)
export const deleteEquipment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const equipment = await Equipment.findByPk(id as string);

    if (!equipment) {
      res.status(404).json({ message: 'Equipo no encontrado' });
      return;
    }

    await equipment.destroy();
    res.json({ message: 'Equipo eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el equipo', error });
  }
};