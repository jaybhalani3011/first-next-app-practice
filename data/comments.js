import mongoose from "mongoose";
const {Schema} = mongoose;

const commentSchema = new Schema({
    comment : String,
},{timestamps:true})

module.exports =  mongoose.models.comments || mongoose.model('comments',commentSchema);
