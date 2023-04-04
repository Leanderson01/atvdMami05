import { useEffect, useState } from "react";
import "./App.css";
import Carrinho from "./Carrinho";

function App() {
  const [posicao, setPosicao] = useState(100);
  const largura = window.screen.width;
  const width = largura - 400;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPosicao((posicao) => (posicao > width ? 0 : posicao + 40));
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return <div className="App">{<Carrinho posicao={posicao} />}</div>;
}

export default App;
