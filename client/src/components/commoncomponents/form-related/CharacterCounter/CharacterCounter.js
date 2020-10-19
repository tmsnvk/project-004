import React from "react";
import styled from "styled-components";

const CounterSpan = styled.span`
  align-self: flex-end;
  font-size: ${props => props.theme.fontSize.default};
  color: ${({ characterCounter }) => characterCounter > 20 ? props => props.theme.fontColor.warning : props => props.theme.fontColor.main};
  font-weight: bold;
`;

const CharacterCounter = ({ characterCounter }) => {
  return (
    <CounterSpan characterCounter={characterCounter}>
      {characterCounter} / 20
    </CounterSpan>
  );
};

export default CharacterCounter;