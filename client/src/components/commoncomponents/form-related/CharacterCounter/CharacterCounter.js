import React from "react";
import styled from "styled-components";

const CounterSpan = styled.span`
  align-self: flex-end;
  font-size: ${props => props.theme.fontSize.default};
  font-weight: bold;
`;

const CharacterCounter = ({ characterCounter, characterlength }) => {
  return (
    <CounterSpan characterCounter={characterCounter}>
      {characterCounter} / {characterlength}
    </CounterSpan>
  );
};

export default CharacterCounter;