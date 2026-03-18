import express from 'express'
import userrouter from './routes/userroutes.js'
import authroute from './routes/authroutes.js'
import domainrouter from './routes/domainroute.js'

const router =express.Router()


router.use('/user',userrouter)
router.use('/auth',authroute)
router.use('/domain',domainrouter)

export default router;