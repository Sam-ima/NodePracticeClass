const mongoose=require('mongoose');
const {Schema}=mongoose;
const taskSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['todo','doing','done'],
        default:'todo'
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }

})
const Task=mongoose.model("Task",taskSchema);