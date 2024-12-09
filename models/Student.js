import mongoose from 'mongoose';

const studentSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        age: { type: Number, required: true, min: 5, max: 120 },
        grade: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        admissionDate: { type: Date, default: Date.now },
    },
    { timestamps: true }
);

const Student = mongoose.model('Student', studentSchema);

export default Student;
