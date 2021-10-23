const User = require("../Models/User")
const Scheduler = require("../Models/Scheduler")
const Job = require("../Models/Job")

exports.create = async(req,res,next) => {

    const fullName = req.body.fullName
    const email = req.body.email

    console.log('fullName',fullName)
    try {
        const UserFound = await User.findOne({
            'email':email
        }).exec();

        if(!UserFound) {
            const newUser = {
                email:email,
                fullName:fullName

            }
             await new User(newUser).save()
             res.status(200).json({
                msg : 'Yay! user created'
            })
        } else {
           res.status(409).json({
               msg: 'Oops! User already exists'
           })
        }
    } catch(error) {
        console.log('error occurred while creating a user',error)
    } 
}
//cretes scheduler wrt each user
exports.addScheduler = async(req,res,next) => {
    const userEmail = req.body.userEmail
    const userFound = await User.findOne({
        email:userEmail
    }).exec()
    if(userFound) {
       const existingScheduler = await Scheduler.findOne({
           userId: userFound._id
       }).exec()
       if(!existingScheduler) {
          const newScheduler =  await new Scheduler({
               userId:userFound._id
           }).save()
           res.status(200).json({
               msg:'Yay! new scheduler created'
           })
       }
       
    }
}
exports.getAllJobs = async(req,res,next) => {
    try {
        const allJobs = await Job.find()
        res.status(200).json({
            jobs:allJobs
        })
    } catch(error) {
        res.status(400).json({
            msg:'Oops! SOmething went wrong'
        })
    }
    
}

