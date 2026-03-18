import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import route from './routes.js'
import cors from 'cors'
dotenv.config()

const app=express()
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/api',route)





const connectDB=async()=>{
    try {
        const res =await mongoose.connect(process.env.MONGOURL)
        if(res)
        {
        console.log('DB connected successfully')
        }
    } catch (error) {
        console.log(error )
    }
}
connectDB()

app.listen(process.env.PORT,()=>{
    console.log('server started successfully',process.env.PORT)
})
