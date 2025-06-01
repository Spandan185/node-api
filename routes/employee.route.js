import express from 'express';
import { getEmployees, getEmployeeById, addEmployee, updateEmployee, deleteEmployee } from '../controllers/employee-controller.js';

const employeeRouter = express.Router();

employeeRouter.get('/', getEmployees);
employeeRouter.get('/:id', getEmployeeById);
employeeRouter.post('/', addEmployee);
employeeRouter.put('/:id', updateEmployee);
employeeRouter.delete('/:id', deleteEmployee);

export default employeeRouter;
