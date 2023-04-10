import jwt from "jsonwebtoken"
import mysql from 'mysql2/promise'

const SECRET = process.env.JWT_SECRET

/*let users = [
  {email:"vinicius@gmail.com", password:"12345c"}
]*/

function createToken(user){
  console.log(SECRET)
  console.log(user.Email)
  return jwt.sign({
    email: user.Email
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

export async function login(body, res){
  const db = await mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '1234',
    database: 'ufrpe',
  });
  const req = JSON.parse(body);
  const query = `SELECT Email FROM usuarios where Email='${req.email}' AND senha='${req.password}'`;
  const values = [];
  const [data] = await db.execute(query, values);
  db.end();
  console.log(data[0])
  if(data.length === 1){
    const token = createToken(data[0])
    console.log(token)
    return token
  } else throw new Error ('Usuário e/ou Senha Inválidos');

}
