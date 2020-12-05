import React from "react";
import styled from "styled-components";
import { MessageText, MessageTitle } from "components/shared/general";
import ResetAchievementsForm from "./ResetAchievementsForm";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
  margin: 5rem 0 0 0;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    grid-column-start: 2;
    grid-column-end: 3;
  }
`;

const ResetAchievements = () => {
  return (
    <ComponentContainer>
      <MessageTitle>
        Reset account progress
      </MessageTitle>
      <MessageText>
        By clicking on the Reset button you may reset your achievement progress. Please understand that this is irrevokable. You may reset your progress as many times as you would like to.
      </MessageText>
      <ResetAchievementsForm />
    </ComponentContainer>
  );
};

export default ResetAchievements;