import React from "react";
import styled from "styled-components";

const CounterSpan = styled.span`
  align-self: flex-end;
  font-size: ${({ theme }) => theme.fontSize.default};
  font-weight: bold;
`;

const CharacterCounter = ({ characterCounter, characterLength }) => {
  return (
    <CounterSpan characterCounter={characterCounter}>
      {characterCounter} / {characterLength}
    </CounterSpan>
  );
};

export default CharacterCounter;