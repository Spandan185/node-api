import Employee from '../models/employee.js'; // Ensure correct import path

// Controller to get all employees
export const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.getAllEmployees();
        res.json(employees);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching employees' });
    }
};

// Controller to get employee by ID
export const getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.getEmployeeById(req.params.id);
        if (employee) {
            res.json(employee);
        } else {
            res.status(404).json({ error: 'Employee not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching employee' });
    }
};

// Controller to add a new employee
export const addEmployee = async (req, res) => {
    try {
        const newEmployee = await Employee.addEmployee(req.body);
        res.status(201).json(newEmployee);
    } catch (error) {
        res.status(500).json({ error: 'Error adding employee' });
    }
};

// Controller to update an employee
export const updateEmployee = async (req, res) => {
    try {
        const updatedEmployee = await Employee.updateEmployee(req.params.id, req.body);
        res.json(updatedEmployee);
    } catch (error) {
        res.status(500).json({ error: 'Error updating employee' });
    }
};

// Controller to delete an employee
export const deleteEmployee = async (req, res) => {
    try {
        await Employee.deleteEmployee(req.params.id);
        res.json({ message: 'Employee deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting employee' });
    }
};
