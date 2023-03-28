import logo from './logo.png' 
import './logo.css'
function Imagem(){ 
       return ( 
        <div className='boasvindas'>
        <div>
        <img className='logo' src={logo} alt={"logo"}/>
        </div> 
        <div id="h2">
            <h2>Bem-vindo de volta.</h2>
        </div>
        <div>
            <p id="paragrafo">Cadastro para locação de veículo da universidade.</p>
        </div>
        </div>
       )  
   }
   
   export default Imagem;