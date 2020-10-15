import React, { useContext } from "react";
import { UserContext } from "context/UserContext";
import styled from "styled-components";
import { TileContainer } from "components/commoncomponents/adventure-related";
import { MessageText, SpanBold } from "components/commoncomponents/general";

const ContainerComponent = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    grid-column-start: 2;
    grid-column-end: 3;
  }
`;

const WrapperStatistics = styled(TileContainer)`
  width: fit-content;
  display: flex;
  flex-direction: column;
`;

const UserStatistics = () => {
  const { gameData } = useContext(UserContext);

  return (
    <ContainerComponent>
      <WrapperStatistics>
        <MessageText padding="0.5rem 1rem 0.5rem 1rem">
          Number of adventures started: <SpanBold padding="0 0 0 1rem">{gameData.gameStart}</SpanBold>
        </MessageText>
        <MessageText padding="0.5rem 1rem 0.5rem 1rem">
          Number of adventures finished: <SpanBold padding="0 0 0 1rem">{gameData.gameFinish}</SpanBold>
        </MessageText>
        <MessageText padding="0.5rem 1rem 0.5rem 1rem">
          Number of deaths: <SpanBold padding="0 0 0 1rem">{gameData.gameDeath}</SpanBold>
        </MessageText>
      </WrapperStatistics>
    </ContainerComponent>
  );
};

export default UserStatistics;