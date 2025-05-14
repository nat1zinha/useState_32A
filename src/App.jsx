import {useState} from 'react';
import './App.css';


function App(){
  const [contador, setContador] = useState (100);
  const [mostrar, setMostrar] = useState(true);

  return(
    <div>
      <h1>Contador :{contador}</h1>
      <button onClick = {()=> setContador(contador +100)}>Acrescentar</button>
      
      
      <br></br>

      <button onClick = {() => setMostrar(!mostrar)}> 
          {mostrar ? 'Esconder' : 'Mostrar'}
      </button>
      {mostrar ? <p>Sou a Natália</p> : null}
           
    </div>
  );
  }
export default App;
