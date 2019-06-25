let mongoose = require('../connnection')
const PropertiesSchema = require('./properties.schema')

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    age: {
        type: Number,
        require: true,
    },
    properties: [PropertiesSchema]
}, {strict: 'throw'})

module.exports = mongoose.model('User', UserSchema)

