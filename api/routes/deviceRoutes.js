'use strict';
module.exports = function (app) {
    var devices = require('../controllers/deviceControllers');

    app.route('/devices')
        .get(devices.list_all_devices)
        .post(devices.create_device);

    app.route('/devices/:device_id')
        .get(devices.get_device_risk_by_id)
        .delete(devices.delete_device_by_id);

    app.route('/devices/count_by_risk/:risk')
        .get(devices.count_devices_by_risk);
};