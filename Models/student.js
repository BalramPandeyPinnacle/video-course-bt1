const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const uniqueValidator=require('mongoose-unique-validator')
const studentSchema=new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    image:{type:String,required:true},
    courses:{type:String,required:true}
})

studentSchema.plugin(uniqueValidator);
module.exports=mongoose.model('Student',studentSchema);
