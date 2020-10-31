import React from "react";
import styled, { keyframes } from "styled-components";

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5rem 0 0 0;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const AchievementUnlocked = styled.div`
  animation: 0.5s ${fadeIn} ease-out;
  width: fit-content;
  margin: 10rem 0 0 0;
  background-color: ${({ theme }) => theme.main};
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.secondaryDark};
  font-weight: bold;
  padding: 2rem 2rem 2rem 2rem;
  border: 0.3rem ${({ theme }) => theme.secondaryLight} solid;
  border-radius: 0.5rem;
`;

const ListEventAchievement = ({ nextPathAchievement, showAchievementPanel }) => {
  return (
    <ComponentContainer>
      {showAchievementPanel ? <AchievementUnlocked>Achievement Unlocked: {nextPathAchievement.title}</AchievementUnlocked> : null}
    </ComponentContainer>
  );
};

export default ListEventAchievement;