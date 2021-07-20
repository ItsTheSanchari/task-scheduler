const express = require('express')
const cron = require('node-cron')
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
    console.log('running at every 4 second')
})
app.listen(3000,()=> {
    console.log('listening on port 3000')
})