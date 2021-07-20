const express = require('express')
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
app.listen(3000,()=> {
    console.log('listening on port 3000')
})