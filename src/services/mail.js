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
    const info = JSON.parse(req)
    await transporter.sendMail({
      text: `Pedido de Agendamento para o dia ${info.Date}`,
      subject: 'professorwaldemar@.com | AGENDAMENTO: ',
      from: ` ${USERNAME} < ${USER} >`,
      to: USER,
      html: `
        <h1> Professor Waldemar fez um novo pedido de agendamento!</h1><br>
        <strong>
          DATA: ${info.Date}<br>
          Horário de Ida: ${info.HorarioIda}<br>
          Horário de Volta: ${info.HorarioVolta}<br>
          CEP: ${info.CEP}<br>
          Cidade: ${info.cidade}<br>
          Bairro: ${info.bairro}<br>
          Endereço: ${info.endereco}<br>
          N° do Estabelecimento: ${info.nDoLocal}<br>
          Quantidade de Pessoas: ${info.quantidadePessoas}
        </strong>
      `
    })

  }catch(e){throw new Error(e.message)}
}
