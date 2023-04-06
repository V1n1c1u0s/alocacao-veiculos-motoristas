import Image from 'next/image'
import styles from '../styles//logo.module.css'
function Imagem(){ 
       return ( 
        <div className={styles.boasvindas}>
            <div className={styles.containerlogo}>
          
        </div>
        <div className={styles.h2}>
            <h2>Bem-vindo de volta.</h2>
        </div>
        <div>
            <p className={styles.paragrafo}>Cadastro para locação de veículo da universidade.</p>
        </div>
        </div>
       )  
   }
   
   export default Imagem;