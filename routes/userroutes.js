import express from 'express'
import * as usercontroller from '../controller/usercontroller.js'
const userrouter =express.Router()

userrouter.post('/create',usercontroller.usercreate)
userrouter.get('/',usercontroller.getalluser)
userrouter.patch('/updatebyuser',usercontroller.updateUser)
userrouter.delete('/deletebyid',usercontroller.deleteuser)
export default userrouter;