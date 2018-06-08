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

exports.get_device_risk_by_id = function (request, callback) {
    Device.find({ 'device_id': request.params.device_id }, 'risk', function (err, dev) {
        if (err)
            callback.send(err);
        callback.json(dev);
    });
};

exports.delete_device_by_id = function (request, callback) {
    Device.remove({ 'device_id': request.params.device_id }, function (err, dev) {
        if (err)
            callback.send(err);
        else if (dev.n === 0)
            callback.json({ message: 'Could not find specified device' });
        else
            callback.json({ message: 'Successfully deleted device' });
    });
};

exports.count_devices_by_risk = function (request, callback) {
    Device.count({ 'risk': request.params.risk }, function (err, counter) {
        if (err)
            callback.send(err);
        else
            callback.json(counter);
    });
};