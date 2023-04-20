import { useEffect, useState } from "react";
import "./App.css";
import Carrinho from "./Carrinho";

function App() {
  const [posicao, setPosicao] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [start, setStart] = useState(false);
  const [aceleracao, setAceleracao] = useState(0);
  const velocidadeInicial = 80;

  useEffect(() => {
    const width = window.screen.width - 400;
    const intervalId = setInterval(() => {
      if (posicao > width) {
        clearInterval(intervalId);
      } else if (start === true) {
        const tempo = segundos;
        const novaPosicao =
          posicao + velocidadeInicial * tempo + (aceleracao * tempo ** 2) / 2;
        setPosicao(novaPosicao);
        const novaVelocidade = velocidadeInicial + aceleracao * tempo;
        console.log("Velocidade: ", novaVelocidade);
      } else {
        setPosicao((posicao) => posicao + 0);
      }
      if (posicao > width) {
        clearInterval(intervalId);
      } else if (start === true) {
        setSegundos((segundos) => segundos + 1);
      } else {
        setSegundos((segundos) => segundos + 0);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [segundos, start]);

  function clear() {
    setPosicao(0);
    setSegundos(0);
    setStart(false);
    setAceleracao(0);
  }

  return (
    <div className="App">
      <div className="action">
        <button
          onClick={(e) => {
            e.preventDefault();
            setStart(true);
          }}
        >
          Começar
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setStart(false);
          }}
        >
          Parar
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            clear();
          }}
        >
          Zerar
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setAceleracao((aceleracao) => aceleracao + 5);
          }}
        >
          Acelerar
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setAceleracao((aceleracao) => aceleracao - 5);
          }}
        >
          Desacelerar
        </button>
      </div>
      <div className="infos">
        <div className="vel">
          <h1>Velocidade: {velocidadeInicial}px</h1>
        </div>
        <div className="timer">
          <h1>Tempo: {segundos}s</h1>
        </div>
        <div className="displacement">
          <h1>Deslocamento: {posicao}px^2</h1>
        </div>
      </div>

      {<Carrinho posicao={posicao} />}
    </div>
  );
}

export default App;
