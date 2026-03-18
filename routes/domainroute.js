import express from 'express'
import * as domaincontroller from '../controller/domaincontroller.js'
import { protect } from '../middlware/authmiddlware.js'
const domainrouter =express.Router()

domainrouter.post('/create',protect,domaincontroller.domaincreate)
domainrouter.get('/getmydomain',protect,domaincontroller.getmydomain)
domainrouter.get('/',domaincontroller.getalldomain)

export default domainrouter;