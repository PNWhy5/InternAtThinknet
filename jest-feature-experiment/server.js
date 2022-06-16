import mongoose from 'mongoose'
import express from 'express'
import path from 'path'

import indexRoute from './src/routes/user'

// connect mongo db
const database = 'mongodb://localhost:27017/'
const option = {
  dbName: 'office',
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

// eslint-disable-next-line no-unused-expressions
mongoose.connect(database, option).connection
mongoose.connection.on('connected', () => {
  console.log(`Mongoose connection to ${database} has been connected.`)
})
mongoose.connection.on('error', (err) => {
  console.error(`Mongoose default connection error: ${err}`)
})

const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/static', express.static(path.join(__dirname, 'public')))

app.use(indexRoute)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
