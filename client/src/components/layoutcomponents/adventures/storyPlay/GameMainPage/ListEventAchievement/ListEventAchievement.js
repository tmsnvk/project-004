import React from "react";
import styled, { keyframes } from "styled-components";

const ContainerComponent = styled.div`
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
  background-color: ${props => props.theme.backgroundColor.secondary};
  font-size: ${props => props.theme.fontSize.medium};
  color: ${props => props.theme.fontColor.secondaryDark};
  font-weight: bold;
  padding: 2rem 2rem 2rem 2rem;
  border: 0.3rem ${props => props.theme.backgroundColor.mainLight} solid;
  border-radius: 0.5rem;
`;

const ListEventAchievement = ({ nextPathAchievement, showAchievementPanel }) => {
  return (
    <ContainerComponent>
      {showAchievementPanel ? <AchievementUnlocked>Achievement Unlocked: {nextPathAchievement.achievementTitle}</AchievementUnlocked> : null}
    </ContainerComponent>
  );
};

export default ListEventAchievement;