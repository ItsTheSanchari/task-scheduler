const User = require("../Models/User")

exports.create = async(req,res,next) => {
    const fullName = req.body.fullName
    const email = req.body.email
    try {
        const UserFound = await User.find({
            'email':email
        })
        if(!UserFound) {
            const newUser = new User({
                'fullname': fullName,
                'email':email
            })
            await newUser.save()
            res.status(200).json({
                msg : 'Yay! user created'
            })
        }
    } catch(error) {
        console.log('error occurred while creating a user',error)
    } 
}