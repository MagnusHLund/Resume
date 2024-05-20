import './../config.js'

export function getDatabaseInfo() {
  return {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASS: process.env.DB_PASS,
    NAME: process.env.DB_NAME,
  }
}

export function getEmailInfo() {
  return {
    recipient: process.env.RECIPIENT_EMAIL,
    sender: process.env.EMAIL_SENDER,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
  }
}

export function getAllowedCorsHosts() {
  return process.env.CORS_ALLOWED_HOSTS.split(',')
}
