"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export const useAPI = (url: string) => {
  const [resposta, setResposta] = useState([]);
  useEffect(() => {
    axios.get(url).then((response) => setResposta(response.data));
  }, [resposta]);

  return resposta;
};
