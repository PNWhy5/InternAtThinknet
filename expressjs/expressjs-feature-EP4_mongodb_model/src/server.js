import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import routes from './routes'

const app = express()

const PORT = 3000

const database = 'mongodb+srv://bootcamp:<password>@cluster0.dfwpw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.Promise = global.Promise
mongoose.connect(database, { useNewUrlParser: true }).then(
  () => {
    console.log('[success] : connected to the database ')
  },
  (error) => {
    console.log(`[failed] : ${error}`)
    process.exit()
  },
)

app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/healthz', (req, res) => res.status(200).json({ status: 'ok' }))

app.use(routes)

app.listen(PORT, (err) => {
  if (err) console.log('Error in server setup')
  console.log('Server listening on Port', PORT)
})
