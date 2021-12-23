import { devices } from "src/styles/devices";
import { backgroundColor, secondaryTextColor } from "src/styles/theme";
import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  max-width: 542px;
  padding: 0 16px;
  margin 24px auto;
  color: ${secondaryTextColor};
  box-sizing: border-box;

  @media (min-width: ${devices.tablet}){
      max-width: ${devices.tablet}
  }

  @media (min-width: ${devices.desktop}){
    max-width: ${devices.desktop}
}
`;

export const Label = styled.label`
  display: inline-block;
  margin-right: 16px;
  flex-basis: 25%;

  &:last-of-type {
    margin-right: 0;
  }
`;

export const Select = styled.select`
  width: 100%;
  margin-top: 0;
  color: white;
  background-color: ${backgroundColor};
`;
