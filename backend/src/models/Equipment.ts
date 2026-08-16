import { DataTypes, Model } from 'sequelize';
import db from '../config/database.js'; // Importamos el puente que creamos antes

// 1. Definimos las reglas estrictas con TypeScript (Interfaces)
interface EquipmentAttributes {
  id?: number;
  name: string;
  brand: string;
  status: 'Operativo' | 'En Mantenimiento' | 'Dado de baja';
  serialNumber: string;
}

// 2. Creamos la clase del Modelo basada en esas reglas (el puente entre TypeScript y Sequelize)
class Equipment extends Model<EquipmentAttributes> implements EquipmentAttributes {
  public id!: number;
  public name!: string;
  public brand!: string;
  public status!: 'Operativo' | 'En Mantenimiento' | 'Dado de baja';
  public serialNumber!: string;
}

// 3. Le decimos a Sequelize cómo crear la tabla en PostgreSQL
Equipment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false, // Es obligatorio
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('Operativo', 'En Mantenimiento', 'Dado de baja'),
      allowNull: false,
      defaultValue: 'Operativo',
    },
    serialNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // No puede haber dos equipos con la misma serie
    },
  },
  {
    sequelize: db, // Le pasamos tu conexión
    tableName: 'equipments', // Así se llamará la tabla
    timestamps: true, // Crea automáticamente las columnas createdAt y updatedAt
  }
);

export default Equipment;