import Head from 'next/head';
import Header from '@/componentes/Header/Header';
import NavBar from '@/componentes/Header/NavBar';
import Item from '@/componentes/Header/Item';
import styles from '@/styles/Pages/default.module.css';

export default function Motorista(){
  return(
    <>
      <Head>
        <title>Motorista</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header>
        <NavBar>
          <Item href="/rotas" text="Minhas Rotas"/>
        </NavBar>
      </Header>
      <div className={styles.container}>
      </div>
    </>
  );
}
