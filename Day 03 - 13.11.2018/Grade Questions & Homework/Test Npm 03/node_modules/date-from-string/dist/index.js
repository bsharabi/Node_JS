"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Take a string date and transform it into a valid date
 * @param dateString A string date. Possible format: "2018-09-20" | "2018-09-01T13:39:50.5100000Z"
 */
exports.parse = function (dateString, hours, minutes, seconds, milliseconds) {
    if (minutes === void 0) { minutes = 0; }
    if (seconds === void 0) { seconds = 0; }
    if (milliseconds === void 0) { milliseconds = 0; }
    if (!dateString || typeof dateString !== 'string') {
        return null;
    }
    // if user set hours, override time
    var overrideTime = false;
    if (typeof hours === 'number') {
        overrideTime = true;
    }
    else {
        hours = 0;
    }
    // do some basic check
    if (typeof minutes === 'number') {
        minutes = 0;
    }
    if (typeof seconds === 'number') {
        seconds = 0;
    }
    if (typeof milliseconds === 'number') {
        milliseconds = 0;
    }
    // dateString has the time defined, and overrideTime is false
    // Create the date the usual way
    if (!overrideTime && dateString.indexOf('T') !== -1) {
        return new Date(dateString);
    }
    // Below we override the time
    // if dateString looks like "2018-09-01T13:39:50.5100000Z"
    // keep everything before `T`
    var ds = dateString.split('T')[0];
    // transform each value into a number
    var d = ds.split('-').map(function (val) { return parseInt(val, 10); });
    // create a date
    return new Date(d[0], d[1] - 1, d[2], hours || 0, minutes, seconds, milliseconds);
};
exports.isValid = function (d) {
    return d instanceof Date && !isNaN(d.getTime());
};
