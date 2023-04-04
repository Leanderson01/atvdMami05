import React from "react";
import Minecart from "./assets/minecart.png";

type Props = {
  posicao: number;
};

export default function Carrinho({ posicao }: Props) {
  const largura = window.screen.width;
  const width = largura - 400;

  // Verificar a posição do carrinho e definir a posição como "width" se ela for maior que "width"
  const novaPosicao = posicao > width ? width : posicao;

  return (
    <div
      style={{
        position: "absolute",
        top: "25rem",
        left: novaPosicao + "px",
      }}
    >
      <img src={Minecart} alt="Carrinho" />
    </div>
  );
}
