const express = require('express')
const cron = require('node-cron')
const mail = require('./jobs/mailSender')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express();

app.get('/',(req,res,next)=> {
    res.status(200).send(
        'voila'
    )
})
app.post('/create',(req,res,next) => {

})

app.get('all/jobs',(req,res,next)=> {

})

app.get('all/failed/jobs',(req,res,next)=> {

})

app.post('/reschedule',(req,res,next)=> {

})
cron.schedule("*/4 * * * * *",()=> {
    mail.sender()
})
mongoose.connect(process.env.URI,{useNewUrlParser: true, useUnifiedTopology: true}).then(()=> {
    app.listen(3000,()=> {
        console.log('listening on port 3000')
    })
}).catch((err)=> {
    console.log('getting error while connecting to db',err)
})
