import Student from '../models/Student.js';

export const createStudent = async (req, res) => {
    try {
        console.log('Creating Student with Data:', req.body); // Debugging log
        const student = await Student.create(req.body); // Insert into DB
        console.log('Student Created:', student); // Debug log
        res.status(201).json({ message: 'Student created successfully!', student });
    } catch (error) {
        console.error('Error Creating Student:', error.message);
        res.status(400).json({ error: error.message });
    }
};
