import Head from 'next/head';
import Header from '@/componentes/Header/Header';
import NavBar from '@/componentes/Header/NavBar';
import Item from '@/componentes/Header/Item';
import styles from '@/styles/Pages/Admin.module.css';
export default function Admin() {
    return(  
       <>
       <Head>
      <title>Administração</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
       </Head>
       <Header>
        <NavBar>
          <Item href="#" text="Agendamento"/>
          <Item href="/solicitacoes" text="Solicitações"/>
          <Item href="/cadastro" text="Cadastrar"/>
        </NavBar>
      </Header>
      <div className={styles.container}>
      </div>
       </>       
    )

}