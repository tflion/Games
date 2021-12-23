import { useParams } from "react-router";
import React, { FC, useEffect } from "react";
import axios from "axios";
import { API_HOST, API_KEY } from "src/hooks/useFetch/constants";
import { useState } from "react";
import { Game } from "src/types";
import GameDetailRender from "./GameDetailRender";
import { Balls, Inner, LoadingPage } from "./styles";

const GameDetail: FC = () => {
  const [game, setGame] = useState<Game>();
  const [err, setErr] = useState<string>();
  const gameClicado = useParams();
  const [loading, setLoading] = useState<boolean>(true);

  const gameId = gameClicado.id;

  useEffect(() => {
    const timer = setTimeout(() => {
      axios
        .get("/game", {
          baseURL: `https://${API_HOST}/api`,
          headers: {
            "x-rapidapi-key": API_KEY,
            "x-rapidapi-host": API_HOST,
          },
          params: {
            id: { gameId },
          },
        })
        .then((res) => setGame(res.data))
        .catch((e) => setErr(e.message));

      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [gameId]);

  if (err) {
    return <p>Erro ao buscar este jogo. Motivo: {err}</p>;
  }
  return (
    <>
      {loading && (
        <LoadingPage>
          <Inner>
            <Balls>
              <div></div>
              <div></div>
              <div></div>
            </Balls>
          </Inner>
        </LoadingPage>
      )}
      {!loading && <GameDetailRender err={err} game={game} />}
    </>
  );
};

export default GameDetail;
