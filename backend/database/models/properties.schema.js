let mongoose = require('../connnection')

const PropertiesSchema = new mongoose.Schema({
    coordinates: {
        type: Array,
        require: true,
    },
    __latlong__: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    price: {
        type: String,
        require: true,
    }
}, {strict: 'throw'})

module.exports = PropertiesSchema

