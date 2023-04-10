import { sendMail } from "@/services/email"

export default async function handler(req, res){
  try{
    const mail = await sendMail(req.body)
    res.status(200).json(mail)
  } catch (err) {
    res.status(400).json(err.message)
  }
}
