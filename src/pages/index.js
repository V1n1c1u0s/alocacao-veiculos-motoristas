import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleFormEdit = (event, name) => {
    setFormData({
      ...formData,
      [name] : event.target.value,
    })
  }

  const handleForm = async (event) => {
    try{
      event.preventDefault()
      const response = await fetch(`/api/auth/user/login`, {
        method: 'POST',
        body: JSON.stringify(formData)
      })
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.containers}>
        <div className={styles.container1}>
          <form className={styles.form} onSubmit={ handleForm } >
            <div className={styles.message}>
              <h1>Bem-vindo!</h1>
              <h2>Faça seu login.</h2>
            </div>
            <div className={styles.inputBox}>
              <div className={styles.icon}>
                <Image
                  alt="user-icon"
                  src="/user.png"
                  fill
                />
              </div>
              <input
                type="email"
                placeholder="E-mail"
                autoFocus
                required value={formData.email}
                onChange= { (e) => {handleFormEdit(e, 'email') }} />
            </div>
            <div className={styles.inputBox}>
              <div className={styles.icon}>
                <Image
                  alt="lock-icon"
                  src="/lock.png"
                  fill
                />
              </div>
              <input
                type="password"
                placeholder="Senha"
                required value={formData.password}
                onChange={ (e) => {handleFormEdit(e, 'password') }}/>
            </div>
            <div className={styles.button}>
              <button type="submit"><span>Entrar</span></button>
            </div>
          </form>
        </div>
        <div className={styles.container2}>
          <div className={styles.containerLogo}>
            <Image
              className={styles.imgLogo}
              src="/UFRPE.png"
              alt="UFRPE Logo"
              fill
              priority
            />
          </div>
        </div>
      </div>
    </>
  )
}
