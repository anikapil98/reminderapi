const mongoose = require('mongoose');
const reminderSchema = new mongoose.Schema({
    date: Date,
    time: String,
    message: String,
    method: String, // sms or email
});

const Reminder = mongoose.model('Reminder',reminderSchema);
module.exports = Reminder;