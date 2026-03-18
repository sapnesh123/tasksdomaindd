import mongoose, { Schema } from "mongoose";

const  domainschema= new Schema({

    domainname:{
        type:String,
        trim:true,
        required:true,
        
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
       ref:'user',

   },
   status:{
    type:String,
    enum:['active','inactive'],
    default:'active'
   }
  
    
},{timestamps:true})


const domain=mongoose.model('domain',domainschema)
export default domain