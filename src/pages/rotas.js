import Head from 'next/head';
import Header from '@/componentes/Header/Header';
import NavBar from '@/componentes/Header/NavBar';
import styles from '@/styles/Pages/default.module.css';

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