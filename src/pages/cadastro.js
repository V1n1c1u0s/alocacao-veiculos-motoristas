import Cadastro from '../componentes/logo';
import Imagem from '../componentes/cadastro';
import styles from '../styles/pagcadastro.module.css';
import Head from 'next/head';
import { getCookie } from 'cookies-next'
import { verificarToken } from '@/services/users'
import jwt from 'jsonwebtoken'
 export default function PagCadastro() {
  return (
    <>
    <Head>
      <title>Cadastro</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <div className={styles.App}>
      <div className={styles.ColunaDireita}>
      <Cadastro/>
      </div>
      <div className={styles.ColunaEsquerda}>
      <Imagem/>
      </div>
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
      if(decode.usuario !== 'admin') throw new Error('Acesso não permitido')
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
