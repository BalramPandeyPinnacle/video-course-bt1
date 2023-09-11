const mongoose =require('mongoose')
const uniqueValidator=require('mongoose-unique-validator')
const Schema=mongoose.Schema;

const courseSchema=new Schema({
CourseTitle:{type:String,required:true,unique:true},
description:{type:String,required:true},
teachersName:{type:String,required:true},
previewImage:{type:String,required:true},
previewVideo:{type:String,required:true},
rating:{type:Number,required:false},
price:{type:Number,required:true},
mrp:{type:Number,required:true}
})

courseSchema.plugin(uniqueValidator);
module.exports=mongoose.model("Course",courseSchema);