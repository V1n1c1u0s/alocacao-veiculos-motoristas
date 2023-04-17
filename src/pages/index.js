import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Pages/Home.module.css'
import { useState } from 'react'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import { getCookie } from 'cookies-next'
import jwt from 'jsonwebtoken'
import { verificarToken } from '@/services/users'

export default function Home() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState('')

  const router = useRouter()

  const handleFormEdit = (event, name) => {
    setFormData({
      ...formData,
      [name] : event.target.value,
    })
  }

  const handleForm = async (event) => {
    try{
      event.preventDefault()
      const response = await fetch('/api/auth/user/login', {
        method: 'POST',
        body: JSON.stringify(formData)
      })
      const json = await response.json()
      //console.log(json)
      if(response.status == 400) throw new Error(json)

      setCookie('authorization', json.token)

      switch(json.usuario.usuario) {
        case 'motorista':
          router.push('/motorista')
          break;
        case 'professor':
          router.push('/solicitante')
          break;
        case 'admin':
          router.push('/admin')
          break;
        default:
          router.push('/')
      }
    } catch(err) {
      setError(err.message)
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
        <div className={styles.containerForm}>
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
            {error && <div className={styles.error}>Usuário e/ou Senha Inválidos</div>}
          </form>
        </div>
      </div>
      <div className={styles.container2}>
        <Image
          className={styles.imgLogo}
          src="/UFRPE.png"
          alt="UFRPE Logo"
          fill
          priority
        />
      </div>
    </div>
  </>
)
}

export const getServerSideProps = async ({req, res}) => {
  try{
    const token = getCookie('authorization', {req, res})
    if(!token) throw new Error('Token Inválido!')
    verificarToken(token)
    const decode = jwt.decode(token)
    return{
      redirect: {
        permanent: false,
        destination: `/${decode.usuario}`
      },
      props: {}
    }
  }catch (err){
    return{
      props: {}
    }
  }
}
