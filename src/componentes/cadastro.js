import React, { useState } from 'react';
//import axios from 'axios';
import styles from '../styles/cadastro.module.css';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [contato, setContato] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [message, setMessage] = useState({ text: '', type: '' });
/*
  const handleSubmit = (event) => {
    event.preventDefault();
/*
    const data = { nome, email, contato, cpf, senha };
    axios.post('http://localhost:3001/usuarios', data)
      .then(response => {
      setMessage({ text: 'Usuário cadastrado com sucesso', type: 'success' });
      setNome('');
      setEmail('');
      setContato('');
      setCpf('');
      setSenha('');
    })
    .catch(error => setMessage({ text: 'Erro ao cadastrar usuário', type: 'error' }));
  };
  */
  return (
    <form className={styles.formulario}>
      <p className={styles.h1}>Realize o cadastro de um novo usuário.</p>
      <div className={styles.campos}>
        <div>
          <p>
            <input
              className={styles.nome}
              type="text"
              placeholder=" Nome:"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              required
            />
          </p>
        </div>
        <div>
          <p>
            <input
              className={styles.email}
              type="email"
              placeholder=" Email:"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </p>
        </div>
        <div>
          <p>
            <input
             className={styles.contato}
              type="tel"
              placeholder=" Contato:"
              value={contato}
              onChange={(event) => setContato(event.target.value)}
              required
            />
          </p>
        </div>
        <div>
          <p>
            <input
              className={styles.cpf}
              type="text"
              placeholder=" CPF:"
              value={cpf}
              onChange={(event) => setCpf(event.target.value)}
              required
            />
          </p>
        </div>
        <div>
          <p>
            <input
              className={styles.senha}
              type="password"
              placeholder=" Senha:"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
              required
            />
          </p>
        </div>
      </div>
      <button className={styles.botao} type="submit">
        Cadastrar
      </button>
      <div className={`message ${message.type}`}>{message.text}</div>
    </form>
  );
}

export default Cadastro;