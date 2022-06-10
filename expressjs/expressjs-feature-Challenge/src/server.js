import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes'
import mongoose from 'mongoose'

const app = express()

const PORT = 3000

const database = 'mongodb://localhost:27017/school?readPreference=primary&ssl=false'

mongoose.Promise = global.Promise
mongoose.connect(database, {useNewUrlParser: true}).then(
    () => {
        console.log('[success] : connected to database ')
    },
    (error) => {
        console.log(`[failed] : ${error}`)
        process.exit()
    }
)

app.use(bodyParser.json({ type: 'application/json'}))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/healthz',(req,res) => res.status(200).json({status: 'ok'}))

app.use(routes)

app.listen(PORT,(err) =>{
    if(err) console.log('Error in server setup')
    console.log('Server listening on Port',PORT)
})