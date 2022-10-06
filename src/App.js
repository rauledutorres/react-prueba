import logo from './logo.svg';
import './App.css';
//import { ButtonUniversal } from './ButtonUniversal';
import { ComponenteAno } from './EjercicioDos/ComponenteAno';
import { FormularioComp } from './FormularioComp';
import { CochesComponentes } from './EjercicioTres/CochesComponente';
import { LocalStorage } from './LocalStorage';
import { FormularioLocStog } from './FormularioLocStog';

function App() {

  const button1 = (name, age) => {
    return (
      console.log(`Soy ${name} y tengo ${age}`)
    )
  } 

  const sumar = (a, b) => {
    console.log(a + b)
  }

  const restar = (a,b) => {
    return console.log(a - b)
  }

  return (
    <div className="App">
      {/* <ButtonUniversal nombre={'MyYoutubeChannel1'} callBack={()=>{button1('Raul', 24)}}/>
      <ButtonUniversal nombre={'Sumar'} callBack={()=>{sumar(3, 24)}}/> */}
      {/* <CochesComponentes/> */}
      {/* <LocalStorage/> */}
      <FormularioLocStog/>
    </div>
  );

}

export default App;
