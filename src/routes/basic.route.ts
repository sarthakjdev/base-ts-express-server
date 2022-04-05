import express from 'express'

// contollers for organisation route:
import controller from '../controllers/basic.controller'

const router = express.Router() // creating router

/// setting up further route for basic route
router.get('/', controller.getBasic) // to create a neew user or signup

export default router
