import React, { ReactElement } from "react";
import { Game } from "src/types";
import { ButtonBack, Genre, Return } from "../GameDetails/styles";
import {
  Background,
  CardGame,
  Description,
  ImageGame,
  InfoFooter,
  InfoSide,
  PlayNow,
  ReleaseDate,
  ShortDescription,
  Title,
} from "../GameDetails/styles";
import { Container } from "./styles";
import returnIcon from "../../assets/icons/return.png";

interface Props {
  err?: string;
  game: Game | undefined;
}

const GameDetailRender = ({ err, game }: Props): ReactElement => {
  if (err) {
    return <p>Não foi possível buscar os dados do jogo.</p>;
  }

  if (game === null) {
    return <p>Jogo não disponível!</p>;
  }

  return (
    <Container>
      <Background src={game?.thumbnail} alt={`${game?.title} background`} />
      <CardGame>
        <ImageGame src={game?.thumbnail} />
        <a href={game?.game_url}>
          <PlayNow>PLAY NOW ▶ </PlayNow>
        </a>
      </CardGame>
      <InfoSide>
        <Title>{game?.title}</Title>
        <ShortDescription>{game?.short_description}</ShortDescription>
        <Description>{game?.description}</Description>
        <InfoFooter>
          <Genre>{game?.genre}</Genre>
          <ReleaseDate>{game?.release_date}</ReleaseDate>
        </InfoFooter>
        <ButtonBack to="/">
          <Return src={returnIcon} alt="go to home" />
        </ButtonBack>
      </InfoSide>
    </Container>
  );
};

export default GameDetailRender;
