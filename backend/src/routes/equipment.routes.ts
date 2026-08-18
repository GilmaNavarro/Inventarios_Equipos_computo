import { Router } from 'express';
import {
  createEquipment,
  getEquipments,
  updateEquipment,
  deleteEquipment
} from '../controllers/equipment.controller.js';

const router = Router();

// Rutas existentes
router.post('/', createEquipment);
router.get('/', getEquipments);

// Nuevas rutas para actualizar y eliminar (requieren el ID en la URL)
router.put('/:id', updateEquipment);
router.delete('/:id', deleteEquipment);

export default router;