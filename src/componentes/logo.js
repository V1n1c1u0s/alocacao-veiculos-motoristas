import Image from 'next/image'
import styles from '../styles//logo.module.css'
import Link from 'next/link';
function Imagem(){ 
       return ( 
        <>
        <div className={styles.boasvindas}>
            <div className={styles.containerlogo}>
            <Image
          className={styles.logo}
          src="/UFRPE.png"
          alt="UFRPE Logo"
          width={350}
           height={180}
        
           />
        </div>
        <div className={styles.h2}>
            <h2>Bem-vindo de volta.</h2>
        </div>
        <div>
            <p className={styles.paragrafo}>Cadastro para locação de veículo da universidade.</p>
        </div>
        </div>
        <Link className={styles.linksair} href={"/"}>Voltar</Link>
        </>
       )  
   }
   
   export default Imagem;