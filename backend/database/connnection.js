const mongoose = require('mongoose');
const useForCloudMongoUri = 'mongodb+srv://ynerella:PNw0kERTadM9S8oD@cluster0-u9ive.gcp.mongodb.net/banjoApp?retryWrites=true&w=majority&bufferCommands=false'
const useForLocalMongoUri = 'mongodb://localhost:27017/banjoApp?retryWrites=true&w=majority&bufferCommands=false'
const useForCloudWhenOutsideUri = 'mongodb://ynerella:PNw0kERTadM9S8oD@cluster0-shard-00-00-u9ive.gcp.mongodb.net:27017/banjoApp?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'

// other clusters that you can try connecting to..
// cluster0-shard-00-01-u9ive.gcp.mongodb.net:27017,cluster0-shard-00-02-u9ive.gcp.mongodb.net:27017

mongoose.connect(useForCloudWhenOutsideUri, {useNewUrlParser: true}).then(() => {
    // connection successful
    console.log('connected to mongo db instance...')
}, (err) => {
    console.error(err)
})

module.exports = mongoose