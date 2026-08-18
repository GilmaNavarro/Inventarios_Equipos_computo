import { Router } from 'express';
import { createEquipment, getEquipments } from '../controllers/equipment.controller.js';

const router = Router();

// Ruta para crear un equipo (POST)
router.post('/', createEquipment);

// Ruta para obtener todos los equipos (GET)
router.get('/', getEquipments);

export default router;