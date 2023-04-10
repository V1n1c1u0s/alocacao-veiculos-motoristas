//localhost:3000/api/auth/user/login

import { login } from '@/services/users'

export default async function handler(req, res){
  try{
    const user = await login(req.body)
    res.status(200).json(user)
  } catch (err) {
    res.status(400).json(err.message)
  }
}
