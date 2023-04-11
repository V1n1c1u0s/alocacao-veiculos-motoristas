import jwt from "jsonwebtoken"
import mysql from 'mysql2/promise'

const SECRET = process.env.JWT_SECRET
const MYSQL_HOST = process.env.MYSQL_HOST
const MYSQL_USER = process.env.MYSQL_USER
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD
const MYSQL_PORT = process.env.MYSQL_PORT
const MYSQL_DATABASE = process.env.MYSQL_DATABASE

function createToken(user){
 // console.log(SECRET)
 // console.log(user.Email)
  return jwt.sign({
    email: user.Email,
    usuario: user.usuario
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


export async function login(body){
  const db = await mysql.createConnection({
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
  });
  const req = JSON.parse(body);
  //const query = SELECT Email,usuario FROM usuarios where Email='${req.email}' AND senha='${req.password}';
  const query = `SELECT email, usuario FROM usuarios where Email='${req.email}' AND senha='${req.password}'`;
  const values = [];
  const [data] = await db.execute(query, values);
  db.end();
  if(data.length === 0) throw new Error('Usuário Inválido')
  const token = createToken(data[0])

  return {token, usuario: data[0]}
}
