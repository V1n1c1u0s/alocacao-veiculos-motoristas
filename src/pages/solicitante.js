import Head from 'next/head';
import Header from '@/componentes/Header/Header';
import NavBar from '@/componentes/Header/NavBar';
import Item from '@/componentes/Header/Item';
import styles from '@/styles/solicitante.module.css';

export default function Solicitante(){
  return(
    <>
      <Head>
        <title>Solicitante</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header>
        <NavBar>
          <Item href="/solitante" text="Página Inicial"/>
          <Item href="/Agendamento" text="Agendamento"/>
        </NavBar>
      </Header>
      <div className={styles.containerr}>
      </div>
    </>
  );
}
