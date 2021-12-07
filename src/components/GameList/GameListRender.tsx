import React, { ReactElement} from "react";
import GameCard from "../GameCard";
import { Game } from "../../types";
import { List } from './styles';

interface Props {
  err?: string
  games: Game[];
}

const GameList = ({ err, games }: Props): ReactElement => {
  if (err) {
    return <p>Erro ao exibir os jogos.</p>;
  }

  if (!games?.length) {
    return <p>Nenhum jogo disponível</p>;
  }

  return (
    <List>
      {games.map(game => (
        <li key={game.id}>
            <GameCard content={game}/>
        </li>
      ))}
    </List>
  );
};

export default GameList;
