const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const cookieParser = require('cookie-parser')
const db = require('./db')
const assert = require('assert')
const PORT = process.env.PORT

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(cors())
app.use(cookieParser())

mongoose.Promise = global.Promise;
mongoose.connect(db.dbLocal, { useNewUrlParser: true}, (err) => {
    if(err)
        assert.deepStrictEqual(err,null)
        console.log('mongodb connected successfully')
})

app.use(`/api/auth`, require('./route/userRoute'))

app.listen(PORT, () => {
    console.log(`server is up and running @ http://localhost:${PORT}`)
})