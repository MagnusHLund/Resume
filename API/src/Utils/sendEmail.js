import nodemailer from 'nodemailer'
import { google } from 'googleapis'
import { getEmailInfo } from './constants.js'

const { OAuth2 } = google.auth
const emailInfo = getEmailInfo()

const oauth2Client = new OAuth2(
  emailInfo.clientId,
  emailInfo.clientSecret,
  'https://developers.google.com/oauthplayground'
)

oauth2Client.setCredentials({
  refresh_token: emailInfo.refreshToken,
})

async function emailConnection() {
  const token = await oauth2Client.getAccessToken()
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: emailInfo.sender,
      clientId: emailInfo.clientId,
      clientSecret: emailInfo.clientSecret,
      refreshToken: emailInfo.refreshToken,
      accessToken: token.token,
    },
  })
}

export async function sendEmail(requestBody) {
  const transporter = await emailConnection()
  const mail = {
    from: emailInfo.sender,
    to: emailInfo.recipient,
    subject: `Resume website, from ${requestBody.email}`,
    text: requestBody.message,
  }

  try {
    const info = await transporter.sendMail(mail)
    console.log('Email sent: ' + info.response)
  } catch (error) {
    console.error('Error while sending email:', error)
  }
}
