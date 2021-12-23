import {
  backgroundColor,
  primaryTextColor,
  secondaryTextColor,
} from "src/styles/theme";
import { Link } from "react-router-dom";

import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: space-evenly;
`;

export const Background = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: 0.04;
  z-index: 1;
`;

export const CardGame = styled.div`
  display: inline-block;
  width: 360px;
  height: 320px;
  background: #4f4f4f;
  z-index: 10;
  text-align: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-top: 100px;
`;

export const ImageGame = styled.img`
  width: 100%;
  height: 280px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const PlayNow = styled.button`
  background: #219cd1;
  width: 100%;
  height: 40px;
  border: none;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  cursor: pointer;
  color: white;
  font-size: 15px;
  font-weight: bold;

  &:hover {
    background: #6ac0e6;
    transition: 0.4s;
  }
`;

export const InfoSide = styled.div`
  width: 50%;
  display: inline-block;
  text-align: center;
  z-index: 10;
`;
export const Title = styled.p`
  color: #6ac0e6;
  font-size: 30px;
  margin-top: 45px;
`;

export const ShortDescription = styled.p`
  color: ${primaryTextColor};
  font-size: 12px;
  margin-top: -25px;
`;

export const Description = styled.p`
  color: ${secondaryTextColor};
  font-size: 14px;
  text-align: justify;
`;

export const InfoFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Genre = styled.p`
  color: ${primaryTextColor};
  font-size: 18px;
`;

export const ReleaseDate = styled.p`
  color: ${primaryTextColor};
  font-size: 18px;
`;

export const ButtonBack = styled(Link)`
  background: #219cd1;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  float: right;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #6ac0e6;
    transition: 0.4s;
  }
`;

export const Return = styled.img`
  width: 20px;
`;

export const LoadingPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${backgroundColor};
  z-index: 999;
`;

export const Inner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const AnimarBola = keyframes`
 0% {
  -webkit-transform: scale(1);
  transform: scale(1);
  opacity: 1;
 }
 16% {
  -webkit-transform: scale(0.1);
  transform: scale(0.1);
  opacity: 0.7;
 }
 33% {
  -webkit-transform: scale(1);
  transform: scale(1);
  opacity: 1;
 }
`;

export const Balls = styled.div`
  > div {
    display: inline-block;
    background-color: #fff;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    margin: 3px;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    animation-name: ${AnimarBola};
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

    > div:nth-child(1) {
      animation-duration: 0.75s;
      animation-delay: 0;
    }
    > div:nth-child(2) {
      animation-duration: 0.75s;
      animation-delay: 0.12s;
    }
    > div:nth-child(3) {
      animation-duration: 0.75s;
      animation-delay: 0.24s;
    }
  }
`;
