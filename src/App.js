import logo from './logo.svg';
import './App.css';
import Calculadora from './components/calculadora';
import CalcularFyC from './components/calcularFyC';
import Formulario from './components/formulario';

function App() {
  return (
    <body className='fondo'>
    
      <div className="Calculadora sombra container bg borde-blue ">
        <Calculadora/>
      </div>
      <div className='grid' >
        {/* <div className="CalcularFyC sombra container bg borde-blue marginTop">
          <Formulario/>
        </div>  */}
        <div className=" sombra Formulario container bg borde-blue marginTop">
          <Formulario/>
        </div>
      </div>
   
   </body>
  );
}

export default App;
