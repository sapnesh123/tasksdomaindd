import express from 'express'
import * as authcontroller from '../controller/authcontroller.js'
const authrouter =express.Router()

authrouter.post('/login',authcontroller.userlogin)
export default authrouter;