const mongoose = require('mongoose');
const uri = 'mongodb+srv://ynerella:PNw0kERTadM9S8oD@cluster0-u9ive.gcp.mongodb.net/banjoApp?retryWrites=true&w=majority&bufferCommands=false'

mongoose.connect(uri, {useNewUrlParser: true}).then(() => {
    // connection successful
    console.log('connected to mongo db instance...')
}, (err) => {
    console.error(err)
})

module.exports = mongoose