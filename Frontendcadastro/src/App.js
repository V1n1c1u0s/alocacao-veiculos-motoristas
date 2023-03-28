import Cadastro from './componentes/formulario/cadastro';
import Imagem from './componentes/home/logo';
import './app.css';
function App() {
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
export default App;
