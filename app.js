import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import studentRoutes from './routes/studentRoutes.js';
import path from 'path';

dotenv.config();
connectDB();

const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Serve static files
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.use('/api', studentRoutes);

// Default route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
