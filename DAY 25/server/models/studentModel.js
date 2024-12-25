import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    iD: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    busId: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const studentModel = mongoose.model('student', studentSchema);

export default studentModel;