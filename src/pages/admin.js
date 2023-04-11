import Head from 'next/head';
import Header from '@/componentes/Header/Header';
import NavBar from '@/componentes/Header/NavBar';
import Item from '@/componentes/Header/Item';
import styles from '@/styles/Pages/default.module.css';

export default function Admin() {
    return(  
       <>
       <Head>
      <title>Administração</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
       </Head>
       <Header>
        <NavBar>
          <Item href="/area-agendamento" text="Agendar"/>
          <Item href="/cadastro" text="Cadastrar"/>
          <Item href="/solicitacoes" text="Solicitações"/>
        </NavBar>
      </Header>
      <div className={styles.container}>
      </div>
       </>       
    )

}