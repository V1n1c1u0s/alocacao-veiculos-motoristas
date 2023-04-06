import Cadastro from '../componentes/logo';
import Imagem from '../componentes/cadastro';
import styles from '../styles/pagcadastro.module.css';
 export default function PagCadastro() {
  return (
    <div className={styles.App}>
      <div className={styles.ColunaEsquerda}>
      <Cadastro/>
      </div>
      <div className={styles.ColunaDireita}>
      <Imagem/>
      </div>
    </div>
  );
}

