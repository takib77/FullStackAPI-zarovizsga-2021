// 1. Feladat: pótold a service modellt.
const mongoose = require('mongoose');

const ServiceSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    since: {
        type: Number,
        required: true,
        default: 0
    },
    street: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    active: {
        type: Boolean,
        required: false,
        default: true
    }
}, {
    timeStamps: true
});

module.exports = mongoose.model('Service', ServiceSchema);
