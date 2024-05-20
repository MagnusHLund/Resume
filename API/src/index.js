import bodyParser from 'body-parser'
import express from 'express'

import { corsMiddleware } from './Middleware/corsMiddleware.js'
import router from './Utils/router.js'

const app = express()
const PORT = 1408

app.use(bodyParser.json())

corsMiddleware(app)
app.use(router)

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

const server = app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`)
})

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`)
  // Close server & exit process
  server.close(() => process.exit(1))
})
