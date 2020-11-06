import React, { useContext } from "react";
import { UserContext } from "context/UserContext";
import styled from "styled-components";
import { MessageText, SpanBold } from "components/commoncomponents/general";
import { TileContainer } from "components/commoncomponents/tile-related";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    grid-column-start: 2;
    grid-column-end: 4;
  }
`;

const StatsWrapper = styled(TileContainer)`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

const UserStatistics = () => {
  const { gameData } = useContext(UserContext);

  return (
    <ComponentContainer>
      <StatsWrapper>
        <MessageText padding="0.5rem 1rem 0.5rem 1rem">
          Number of adventures started: <SpanBold padding="0 0 0 0.5rem">{gameData.gameStart}</SpanBold>
        </MessageText>
        <MessageText padding="0.5rem 1rem 0.5rem 1rem">
          Number of adventures finished: <SpanBold padding="0 0 0 0.5rem">{gameData.gameFinish}</SpanBold>
        </MessageText>
        <MessageText padding="0.5rem 1rem 0.5rem 1rem">
          Number of deaths: <SpanBold padding="0 0 0 0.5rem">{gameData.gameDeath}</SpanBold>
        </MessageText>
      </StatsWrapper>
    </ComponentContainer>
  );
};

export default UserStatistics;