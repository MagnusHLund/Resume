import express from 'express'
import { handleNewMailRequest } from '../Handlers/contactHandler.js'
import {
  handleAddVisitorRequest,
  handleGetVisitorCountRequest,
} from '../Handlers/visitorHandler.js'

const router = express.Router()

router.post('/mail/new', handleNewMailRequest)
router.post('/visitor/add', handleAddVisitorRequest)
router.get('/visitor/getCount', handleGetVisitorCountRequest)

export default router
