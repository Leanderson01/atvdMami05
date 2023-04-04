import React from "react";
import Minecart from "./assets/minecart.png";

type Props = {
  posicao: number;
};

export default function Carrinho({ posicao }: Props) {
  return (
    <div
      style={{
        position: "absolute",
        top: "100px",
        left: posicao + "px",
        width: "50px",
        height: "50px",
      }}
    >
      <img src={Minecart} alt="Carrinho" />
    </div>
  );
}
