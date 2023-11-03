"use client";
import { useEffect, useState } from "react";

export const useScrollState = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const alturaTotal = document.body.scrollHeight - window.innerHeight; // Altura total da página
      const porcentagemRolagem = (window.scrollY / alturaTotal) * 100; // Calcula a porcentagem
      setScroll(porcentagemRolagem);
    });
  }, []);

  return scroll;
};
