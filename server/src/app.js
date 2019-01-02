const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/mevn01')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function (callback) {
  console.log('mongoDb Connection Succeeded')
})

require('./routes')(app)

app.listen(process.env.PORT || 8081)
