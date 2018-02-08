const mongoose = require('mongoose');

const interviewSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String},
    gender: { type: String},
    phone: { type: Number},
    department: { type: String},
    interviewtype: { type: String},
    date: [{year: { type: Number}, month: { type: Number }, day: { type: Number }}],
    time: [{hour: { type: Number}, minute: { type: Number }, second: { type: Number }}],
    interviewer: { type: String},
});

module.exports = mongoose.model('Interview', interviewSchema);
