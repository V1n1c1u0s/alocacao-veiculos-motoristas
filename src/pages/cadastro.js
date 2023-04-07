import Cadastro from '../componentes/logo';
import Imagem from '../componentes/cadastro';
import styles from '../styles/pagcadastro.module.css';
import Head from 'next/head';
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

