const express = require('express')
const cron = require('node-cron')
const mail = require('./jobs/mailSender')
const mongoose = require('mongoose')
const TaskController = require('./controller/TaskController')
require('dotenv').config()
const bodyparser = require('body-parser')
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/',(req,res,next)=> {
    res.status(200).send(
        'voila'
    )
})
app.post('/create',TaskController.create)
app.post('/create/scheduler',TaskController.addScheduler)
app.get('all/failed/jobs',(req,res,next)=> {

})
app.get('/all/jobs',TaskController.getAllJobs)



app.post('/reschedule',(req,res,next)=> {

})
cron.schedule("*/4 * * * * *",()=> {
    // mail.sender()
})
mongoose.connect(process.env.uri,{useNewUrlParser: true, useUnifiedTopology: true}).then(()=> {
    console.log('connected')
    app.listen(3000,()=> {
        console.log('listening on port 3000')
    })
}).catch((err)=> {
    console.log('getting error while connecting to db',err)
})
