require('./database/connnection')

const express = require('express')
const cors = require('cors')
const app = express()

const usersRoute = require('./routes/users.route')

app.use(cors())
app.use(express.json())
app.use('/users', usersRoute)

app.use((req, res) => {
    res.status(400).send('Not found')
})

app.listen(8081, () => {
    console.log('server started on port 8081...')
})

module.exports = app