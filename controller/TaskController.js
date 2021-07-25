const User = require("../Models/User")

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

exports.addScheduler = async(req,res,next) => {
    const userEmail = req.body.userEmail
    const userFound = await User.findOne({
        email:userEmail
    }).exec()
    if(userFound) {
        console.log(userFound)
    }
}