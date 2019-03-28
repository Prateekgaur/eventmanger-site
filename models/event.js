const mongoose = require('mongoose');

const eventSchema = newmongoose.Schema({
    title: String,
    description: String,
    date: Date,
    registration:
    {type: mongoose.Schema.Types.ObjectId,
     ref: 'Registration'}
});

const Event = mongoose.model('Event',eventSchema);
module.exports = Event;