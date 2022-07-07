import express from 'express'
import basicRoute from '@routes/basic'

const router = express.Router()

router.use('/basic', basicRoute)

export default router
