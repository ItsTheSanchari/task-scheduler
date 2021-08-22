const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const SchedulerSchema = new Schema(
{
    userId: {
        type: Schema.Types.ObjectId,
        ref:'User'

    },
    sent: {
        type:Boolean,
        default:false
    },

},{
    timestamps: {
        createdAt:"createdAt",
        updatedAt:"updatedAt"
    }
})
module.exports = mongoose.model('Scheduler',SchedulerSchema)
