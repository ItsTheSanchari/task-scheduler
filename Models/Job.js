const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const JobSchema = new Schema({
    schedulerId:{
        type:Schema.Types.ObjectId,
        ref:'Scheduler'
    },
    userId: {
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    status: {
        type:Boolean,
        default:false
    }
},{
    timestamps: {
        createdAt:"createdAt",
        updatedAt:"updatedAt"
    }
})

module.exports = mongoose.model('Job',JobSchema)

