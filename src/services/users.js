import jwt from "jsonwebtoken"

const SECRET = process.env.JWT_SECRET

let users = [
  {email:"vinicius@gmail.com", password:"12345c"}
]

function createToken(user){
  console.log(process.env.JWT_SECRET)
  return jwt.sign({
    email: user.email,
  }, SECRET)
}

function readToken(token){
  try{
    return jwt.verify(token, SECRET)
  } catch(err){
    throw new Error("Token Inválido")
  }
}

export function verificarToken(token){
  return readToken(token)
}

export function login(body){
  const json = JSON.parse(body)
  const user = users.find(({ email }) => email === json.email)
  if(!user || (user.password !== json.password)) throw new Error ('Usuário e/ou Senha Inválidos')

  const token = createToken(user)
  return token
}
