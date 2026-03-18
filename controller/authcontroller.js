import User from "../models/usermodel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export const userlogin = async (req, res) => {
    try {
        console.log('login',req.body)
        const { email, password } = req.body

        const user = await User.findOne({ email });
           console.log(user)
        if (!user) {
            return res.status(404).json({ status: false, message: 'User not found' })
        }

        const ismatch = await bcrypt.compare(password, user.password)
             
        if (!ismatch) {
            return res.status(404).json({ status: false, message: 'invalid credential' })
        }

       const token =jwt.sign({id:user._id,name:user.name,role:user.role},'test')

       console.log('token',token)

       return res.status(200).json({status:true,message:'login success',data:user,token})

    } catch (error) {
        console.log(error)
return res.status(500).json({status:false,message:'internal server error',})
    }
}