import { useEffect, useState } from "react";
import "./App.css";
import Carrinho from "./Carrinho";

function App() {
  const [posicao, setPosicao] = useState(0);
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const width = window.screen.width - 400;

    const intervalId = setInterval(() => {
      if (posicao > width) {
        clearInterval(intervalId);
      } else {
        setPosicao((posicao) => posicao + 40);
      }
      if (segundos > width) {
        clearInterval(intervalId);
      } else {
        setSegundos((segundos) => segundos + 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [segundos]);

  return (
    <div className="App">
      <div className="infos">
        <div className="vel">
          <h1>Velocidade: 40px</h1>
        </div>
        <div className="timer">
          <h1>Tempo: {segundos > 25 ? 25 : segundos}</h1>
        </div>
        <div className="displacement">
          <h1>Deslocamento: {posicao}</h1>
        </div>
      </div>

      {<Carrinho posicao={posicao} />}
    </div>
  );
}

export default App;
