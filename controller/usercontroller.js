import User from "../models/usermodel.js"
import bcrypt from 'bcrypt'
export const usercreate=async(req,res)=>{

    try {
        console.log('test',req.body)
        let hassedpassword
        if(req.body.password)
        {
            const salt=10
        hassedpassword=await bcrypt.hash(req.body.password,salt)
        }
        const user=await User.create({...req.body,password:hassedpassword})
        return res.status(200).json({status:true,message:'user created',data:user})
    } catch (error) {
        console.log(error)
        return res.status(500).json({status:false,message:'internal server error',})
    }
}

export const getalluser=async(req,res)=>{

    try {
      
        const user=await User.find({role:'user'})
        return res.status(200).json({status:true,message:'all user get success',data:user})
    } catch (error) {
        console.log(error)
        return res.status(500).json({status:false,message:'internal server error',})
    }
}


export const updateUser=async(req,res)=>{

    try {
      
        const user=await User.findByIdAndUpdate({_id:req.params._id},req.body,{new:true})
        return res.status(200).json({status:true,message:' user updated success',data:user})
    } catch (error) {
        console.log(error)
        return res.status(500).json({status:false,message:'internal server error',})
    }
}

export const deleteuser=async(req,res)=>{

    try {
      
        const user=await User.deleteOne({_id:req.params._id})
        return res.status(200).json({status:true,message:' user deleted success'})
    } catch (error) {
        console.log(error)
        return res.status(500).json({status:false,message:'internal server error',})
    }
}