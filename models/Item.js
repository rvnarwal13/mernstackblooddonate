const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    gender: {
        type: String,
        required: true
    },
    bloodtype: {
        type: String,
        required: true
    }
});

module.exports = Item = mongoose.model('item',ItemSchema);