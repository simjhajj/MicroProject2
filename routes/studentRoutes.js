import express from 'express';
import { createStudent } from '../controllers/studentController.js';

const router = express.Router();

// POST route to create a student
router.post('/students', createStudent);

export default router;
