'use strict';
module.exports = function (app) {
    var devices = require('../controllers/deviceControllers');

    app.route('/devices')
        .get(devices.list_all_devices)
        .post(devices.create_device);
};