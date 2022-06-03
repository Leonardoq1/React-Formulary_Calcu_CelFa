import logo from "./logo.svg";
import "./App.css";
import Calculadora from "./components/calculadora";
import CalcularFyC from "./components/calcularFyC";
import Formulario from "./components/formulario";

function App() {
  return (
    <body className="fondo">
      <div className="sombra borde-blue">
        <h1 className="titulo">Brayan Leonardo Alvarez Reyes - TI51BIS</h1>
      </div>
      <div className="grid">
        <div className="Calculadora sombra container bg borde-blue marginTop">
          <Calculadora />
        </div>
        <div className="CalcularFyC sombra container bg borde-blue marginTop">
          <CalcularFyC />
        </div>
      </div>

      <div className=" sombra Formulario container bg borde-blue marginTop">
        <Formulario />
      </div>
      
    </body>
  );
}

export default App;
