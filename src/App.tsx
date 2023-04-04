import { useEffect, useState } from "react";
import "./App.css";
import Carrinho from "./Carrinho";

function App() {
  const [posicao, setPosicao] = useState(100);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPosicao((posicao) => posicao + 40); // velocidade de 5 pixels por loop
    }, 100); // a cada 100 milissegundos

    return () => clearInterval(intervalId);
  }, []);

  return <div className="App">{<Carrinho posicao={posicao} />}</div>;
}

export default App;
