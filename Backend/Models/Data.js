const mongoose = require('mongoose');


const DataSchema = new mongoose.Schema({
    city: String,
    clues: Array,
    country: String,
    fun_fact: Array,
    trivia: Array
});

const DataModel = mongoose.model('orders', DataSchema);

module.exports = DataModel;