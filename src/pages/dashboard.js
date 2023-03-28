import Head from 'next/head'
import { getCookie } from 'cookies-next'
import { verificarToken } from '@/services/users'

export default function dashboard(){
  return(
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <h1>Você está logado!</h1>
    </>
  )
}

export const getServerSideProps = async ({req, res}) => {
  try{
    const token = getCookie('authorization', {req, res})
    if(!token) throw new Error('Token Inválido!')
    verificarToken(token)

    return {
      props: {}
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
