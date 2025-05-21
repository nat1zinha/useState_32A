import { useState } from "react";
import "./App.css";

export function App() {
  const [numero, setNumero] = useState(100);
  const [mudouNome, setMudouNome] = useState(false);
  const [mostrarEsconder, setMostrarEsconder] = useState(false);

  function handleAumentar() {
    setNumero(numero + 100);
  }

  function handleDiminuir() {
    setNumero(numero - 100);
  }
   
  function handleMostrarEsconder() {
    // if (mostrarEsconder === true)   {
     // setMostrarEsconder(false)
   // }
   // setMostrarEsconder(true)
   // return 

   setMostrarEsconder(!mostrarEsconder)
  }
   
 

  return (
    <main className="container">
      <h1 className="titulo">App</h1>

      <section>
        <p>O número da variável é: {numero}</p>
        <button onClick={handleAumentar}>Aumentar</button>
        <button onClick={handleDiminuir}>Diminuir</button>
      </section>

      <section>
        <h2>O parágrafo que some</h2>
       {mostrarEsconder && <p>Em breve irei sumir</p> }
        <button onClick={handleMostrarEsconder}>{mostrarEsconder ? "Esconder" : "Mostrar"}</button>
      </section>
    </main>
  );
}