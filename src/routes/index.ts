import express from 'express'
import basicRoute from './basic.route'

const router = express.Router()

router.use('/basic', basicRoute)

export default router
