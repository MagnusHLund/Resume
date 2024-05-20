import cors from 'cors'
import { getAllowedCorsHosts } from '../Utils/constants.js'

export function corsMiddleware(app) {
  const allowedHosts = getAllowedCorsHosts()

  app.use(
    cors({
      origin: (origin, callback) => {
        if (!origin || allowedHosts.includes(origin)) {
          callback(null, true)
        } else {
          callback(new Error('Not allowed by CORS'))
        }
      },
      optionsSuccessStatus: 200,
    })
  )
}
