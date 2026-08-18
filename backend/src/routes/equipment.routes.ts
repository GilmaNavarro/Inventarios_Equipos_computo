import { Router } from 'express';
import { 
  getEquipments, 
  getEquipmentById, 
  createEquipment, 
  updateEquipment, 
  deleteEquipment 
} from '../controllers/equipment.controller.js';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Equipment:
 *       type: object
 *       required:
 *         - name
 *         - brand
 *         - status
 *         - serialNumber
 *       properties:
 *         id:
 *           type: string
 *           description: El ID autogenerado del equipo
 *         name:
 *           type: string
 *           description: El nombre del equipo
 *         brand:
 *           type: string
 *           description: La marca del equipo
 *         status:
 *           type: string
 *           description: El estado operativo del equipo
 *         serialNumber:
 *           type: string
 *           description: El número de serie único
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Fecha de creación
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Fecha de última actualización
 */

/**
 * @swagger
 * /api/equipment:
 *   get:
 *     summary: Retorna la lista de todos los equipos
 *     tags: [Equipment]
 *     responses:
 *       200:
 *         description: La lista de equipos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Equipment'
 */
router.get('/', getEquipments);

/**
 * @swagger
 * /api/equipment/{id}:
 *   get:
 *     summary: Obtiene un equipo por su ID
 *     tags: [Equipment]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El ID del equipo
 *     responses:
 *       200:
 *         description: El equipo por ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Equipment'
 *       404:
 *         description: Equipo no encontrado
 */
router.get('/:id', getEquipmentById);

/**
 * @swagger
 * /api/equipment:
 *   post:
 *     summary: Crea un nuevo equipo
 *     tags: [Equipment]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Equipment'
 *     responses:
 *       201:
 *         description: El equipo ha sido creado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Equipment'
 *       500:
 *         description: Error en el servidor
 */
router.post('/', createEquipment);

/**
 * @swagger
 * /api/equipment/{id}:
 *   put:
 *     summary: Actualiza un equipo existente
 *     tags: [Equipment]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El ID del equipo a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Equipment'
 *     responses:
 *       200:
 *         description: El equipo ha sido actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Equipment'
 *       404:
 *         description: Equipo no encontrado
 *       500:
 *         description: Error en el servidor
 */
router.put('/:id', updateEquipment);

/**
 * @swagger
 * /api/equipment/{id}:
 *   delete:
 *     summary: Elimina un equipo por su ID
 *     tags: [Equipment]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El ID del equipo
 *     responses:
 *       200:
 *         description: Equipo eliminado exitosamente
 *       404:
 *         description: Equipo no encontrado
 */
router.delete('/:id', deleteEquipment);

export default router;