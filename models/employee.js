import { DataTypes } from 'sequelize';
import { define } from '../database'; // Assuming your Sequelize instance is in `database.js`

const Employee = define('Employee', {
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

export default Employee;
