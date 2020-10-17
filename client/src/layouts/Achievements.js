import React from "react";
import styled from "styled-components";
import { LayoutContainer } from "components/commoncomponents/general";
import { AchievementsDisplay, PageTopText, UserStatistics } from "components/layoutcomponents/achievements";

const LayoutContainerModified = styled(LayoutContainer)`
  grid-template-columns: 25% 25% 25% 25%;
`;

const Achievements = () => {
  return (
    <LayoutContainerModified>
      <PageTopText />
      <UserStatistics />
      <AchievementsDisplay />
    </LayoutContainerModified>
  );
};

export default Achievements;