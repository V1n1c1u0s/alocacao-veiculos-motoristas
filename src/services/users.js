let users = [
  {email:"vinicius@gmail.com", password:"12345c"}
]

export function login(body){
  const json = JSON.parse(body)
  const user = users.find(({ email }) => email === json.email)
  if(!user || (user.password !== json.password)) throw new Error ('Usuário e/ou Senha Inválidos')
  return user
}
