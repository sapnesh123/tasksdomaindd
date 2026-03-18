import mongoose, { Schema } from "mongoose";

const  userschema= new Schema({

    name:{
        type:String,
        trim:true,
        required:true,
        
    },
    email:{
        type:String,
        trim:true,
        required:true,
        index:true,
        unique:true
        
    },
    password:{
        type:String,
        trim:true,
        required:true,
        
    },
    role:{
        type:String,
        trim:true,
      default:"user"
        
    }
},{timestamps:true})


const user=mongoose.model('user',userschema)
export default user