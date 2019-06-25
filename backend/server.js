require('./database/connnection')

const express = require('express')
const app = express()

const usersRoute = require('./routes/users.route')

app.use(express.json())
app.use('/users', usersRoute)

app.use((req, res) => {
    res.status(400).send('Not found')
})

app.listen(8080, () => {
    console.log('server started on port 8080...')
})

module.exports = app