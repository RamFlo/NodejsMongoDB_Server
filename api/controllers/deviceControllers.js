'use strict';

var mongoose = require('mongoose'), Device = mongoose.model('Device');

exports.list_all_devices = function (request, callback) {
    Device.find({}, function (err, dev) {
        if (err)
            callback.send(err);
        callback.json(dev);
    });
};

exports.create_device = function (request, callback) {
    var newDevice = new Device(request.body);
    newDevice.save(function (err, dev) {
        if (err)
            callback.send(err);
        callback.json(dev);

    });
};