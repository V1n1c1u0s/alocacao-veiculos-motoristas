const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Configuração do CORS
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  optionsSuccessStatus: 200
}));

// Configuração do body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuração do MySQL
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'mateus@novo1',
  password: 'www1234',
  database: 'cadastrados',
});
// Conexão com o MySQL
connection.connect((error) => {
  if (error) {
    console.error('Erro ao conectar ao MySQL: ', error);
    return;
  }
  console.log('Conectado ao MySQL com sucesso!');
});

// Rota POST para inserir um novo usuário
app.post('/usuarios', (req, res) => {
  const nome = req.body.nome;
  const email = req.body.email;
  const contato = req.body.contato;
  const cpf = req.body.cpf;
  const senha = req.body.senha;

  const sql = `INSERT INTO usuarios (nome, email, contato, cpf, senha) VALUES ('${nome}', '${email}', '${contato}', '${cpf}', '${senha}')`;

  connection.query(sql, (error, result) => {
    if (error) {
      console.error('Erro ao inserir usuário: ', error);
      res.status(500).json({ message: 'Erro ao inserir usuário.' });
      return;
    }
    console.log('Usuário inserido com sucesso!');
    res.json({ message: 'Usuário inserido com sucesso!' });
  });
});

// Rota GET para listar todos os usuários
app.get('/usuarios', (req, res) => {
  const sql = 'SELECT * FROM usuarios';

  connection.query(sql, (error, results) => {
    if (error) {
      console.error('Erro ao recuperar usuários: ', error);
      res.status(500).json({ message: 'Erro ao recuperar usuários.' });
      return;
    }
    console.log('Usuários recuperados com sucesso!');
    res.json(results);
  });
});

// Inicialização do servidor
app.listen(3001, () => {
  console.log('Servidor iniciado na porta 3001.');
});