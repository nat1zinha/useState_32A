import { useState } from "react";
import "./App.css";

export function App() {
  const [numero, setNumero] = useState(100);
  const [nome, setNome] = useState("Natalia");
  const [mudouNome, setMudouNome] = useState(false);

  function handleAumentar() {
    setNumero(numero + 100);
  }

  function handleDiminuir() {
    setNumero(numero - 100);
  }

  function handleAlterarNome() {
    if (mudouNome === false) {
      setMudouNome(true);
      setNome("Nati");
      return;
    }

    setMudouNome(false);
    setNome("Natalia");
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
        <p>O nome é: {nome}</p>
        <button onClick={handleAlterarNome}>Alterar nome</button>
      </section>
    </main>
  );
}