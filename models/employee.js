import sequelize from '../database/database.js'; // Import the Sequelize instance
import { DataTypes } from 'sequelize';

const Employee = sequelize.define('Employee', {
  E_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  E_name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  contact: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  D_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'employees',
  timestamps: false
});

// Retrieval Queries

// Get all employees
Employee.getAllEmployees = async () => {
  return await Employee.findAll();
};
Employee.addEmployee = async (data) => {

};
// Get employee by ID
Employee.getEmployeeById = async (id) => {
  return await Employee.findOne({ where: { E_id: id } });
};
Employee.addEmployee = async (data) => {
  try {
    const newEmployee = await Employee.create({
      E_id: data.E_id,
      E_name: data.E_name,
      contact: data.contact,
      email: data.email,
      D_id: data.D_id
    });
    return newEmployee;
  } catch (error) {
    console.error('Error adding employee:', error);
    throw error;
  }
};

export default Employee;
