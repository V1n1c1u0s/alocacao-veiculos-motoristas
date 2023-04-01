import Cadastro from '../componentes/logo';
import Imagem from '../componentes/cadastro';
import '../styles/pagcadastro.module.css';
 export default function PagCadastro() {
  return (
    <div className="App">
      <div className='ColunaEsquerda'>
      <Imagem/>
      </div>
      <div className='ColunaDireita'>
      <Cadastro/>
      </div>
    </div>
  );
}

