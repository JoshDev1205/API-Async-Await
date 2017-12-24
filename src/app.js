const bodyParser = require('body-parser')
const morgan = require('morgan')
const express = require('express')
const mongoose = require('mongoose')
const usersRoutes = require('./routes/users.js')

const app = express()

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/async-await-example', {
  useMongoClient: true
}).then(db => console.log('DB is connected'))
  .catch(err => console.log(err))

//settings
app.set('port', process.env.PORT || 3000)

// Middleware
app.use(morgan('dev'))
app.use(bodyParser.json())

// Routes
app.use('/users', usersRoutes)

// start the server
app.listen(app.get('port'),() => {
  console.log(`Server on Port ${app.get('port')}`)
})


