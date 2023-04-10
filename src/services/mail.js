const nodemailer = require('nodemailer')

const HOST = process.env.MAIL_HOST
const PORT = process.env.MAIL_PORT
const USER = process.env.MAIL_USER
const USERNAME = process.env.MAIL_USERNAME
const PASS = process.env.MAIL_PASSWORD

const transporter = nodemailer.createTransport({
  host: HOST,
  port: PORT,
  secure: false,
  auth: {
    user: USER,
    pass: PASS
  },
  tls: {
    rejectUnauthorized: false,
  }
})

export async function sendMail(req){
  try{
    const con = JSON.parse(req)
    await transporter.sendMail({
      text: `DATA: ${con.Date}`,
      subject: 'AGENDAMENTO: ',
      from: ` ${USERNAME} < ${USER} >`,
      to: USER
    })

  }catch(e){throw new Error(e.message)}
}
