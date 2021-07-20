require('dotenv').config()
const sendGrid = require('@sendgrid/mail')
exports.sender = () => {
    sendGrid.setApiKey(process.env.secret)
    const mailDetails = {
             to: 'sohamsur2002@gmail.com',
             from: 'sanchari678@gmail.com', 
             subject: 'Testing Mail',
             text: 'Testing mail',
             html: '<strong>Have a great day</strong>',
         }
    sendGrid.send(mailDetails).then(()=> {
        console.log('mail sent')
        //update db time stamp
    }).catch((err)=> {
        //uodate db status with failed column as true
        console.log('error occurred',err)
    })
}
