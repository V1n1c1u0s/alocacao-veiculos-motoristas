import Head from 'next/head';
import Header from '@/componentes/Header/Header';
import NavBar from '@/componentes/Header/NavBar';
import styles from '@/styles/Pages/default.module.css';
import { getCookie } from 'cookies-next'
import { verificarToken } from '@/services/users'
import jwt from 'jsonwebtoken'

export default function ConsultaRotas(){
  return(
    <>
      <Head>
        <title>Minhas Rotas</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header>
        <NavBar>
        </NavBar>
      </Header>
      <div className={styles.container}>
      </div>
    </>
  );
}
export const getServerSideProps = async ({req, res}) => {
  try{
    const token = getCookie('authorization', {req, res})
    if(!token) throw new Error('Token Inválido!')
    verificarToken(token)
    const decode = jwt.decode(token)
    try{
      if(decode.usuario !== 'motorista') throw new Error('Acesso não permitido')
      return {
        props: {}
      }
    } catch(err){
        return{
          redirect: {
            permanent: false,
            destination: `/${decode.usuario}`
          },
          props: {}
        }
    }
  }catch (err){
    return{
      redirect: {
        permanent: false,
        destination: '/'
      },
      props: {}
    }
  }
}