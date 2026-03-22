import express from 'express'
import dotenv from 'dotenv'
import catMe from 'cat-me'
dotenv.config()

import router from './Routes/router.js'
import mongoose from 'mongoose'
const app = express()

app.use('/cat', catMe())

app.use(express.json())

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("mongoose connected")
}).catch(err => { console.log("mongoose not connect....", err) })




app.get('/', (req, res) => {
    res.send("Helllo world")
})


app.use('/create', router)



app.listen(3000, (err) => {
    if (!err) {
        console.log("Server runs on port 3000")
    }
    else {
        console.log("Something goes wrong while start server ", err)
    }
})
