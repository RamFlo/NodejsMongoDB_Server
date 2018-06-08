'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var deviceSchema = new Schema({
    device_id: {
        type: String,
        required: [true, 'Path `device_id` is required'],
        unique: true
    },
    risk: {
        type: Number,
        required: [true, 'Path `risk` is required'],
        min: [0, '`risk` must be between 0 and 100'],
        max: [100, '`risk` must be between 0 and 100']
    }
});

module.exports = mongoose.model('Device', deviceSchema);