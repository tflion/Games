import React, { ChangeEvent, ReactElement } from "react";
import GameCard from "../GameCard";
import GameFilter from "../GameFilter";
import { Game } from "../../types";
import { List, ListItem } from "./styles";

interface Props {
  err?: string;
  games: Game[];
  onFilterChange: (e: ChangeEvent<HTMLFormElement>) => void;
}

const GameList = ({ err, games, onFilterChange }: Props): ReactElement => {
  if (err) {
    return <p>Erro ao exibir os jogos.</p>;
  }

  if (!games?.length) {
    return <p>Nenhum jogo disponível</p>;
  }

  return (
    <>
      <GameFilter onChange={onFilterChange} />
      <List>
        {games.map((game) => (
          <ListItem key={game.id}>
            <GameCard content={game} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GameList;
