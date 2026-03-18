import mongoose from "mongoose"
import Domain from "../models/domain.js"


export const domaincreate=async(req,res)=>{
    try {
        console.log(req.user)
      const domain=await Domain.create({...req.body,user:req.user.id})
     return res.status(200).json({status:true,message:'domain created',data:domain})
    } catch (error) {
        console.log('error',error)
        return res.status(500).json({status:false,message:'internal server error',})
    }
}

export const getmydomain=async(req,res)=>{
    try {

        
      const domain=await Domain.find({user:req.user.id})
     return res.status(200).json({status:true,message:'domain created',data:domain})
    } catch (error) {
        console.log(error)
        return res.status(500).json({status:false,message:'internal server error',})
    }
}


export const getalldomain=async(req,res)=>{
    try {
        console.log(req.params.id)
        
      const domain=await Domain.find()
     return res.status(200).json({status:true,message:'domain created',data:domain})
    } catch (error) {
        console.log(error)
        return res.status(500).json({status:false,message:'internal server error',})
    }
}