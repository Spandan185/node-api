import express from 'express';
import bodyParser from 'body-parser';
import employeeRouter from './routes/employee.route.js';
const app = express();

// Middleware
app.use(bodyParser.json());

// Import and use routes
app.use('/employees', employeeRouter);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});