import React from "react";
import styled from "styled-components";
import { LayoutContainer } from "components/commoncomponents/general";
import { AchievementsDisplay, PageInformation, UserStatistics } from "components/layoutcomponents/achievements";

const LayoutContainerModified = styled(LayoutContainer)`
  grid-template-columns: 25% 25% 25% 25%;
`;

const Achievements = () => {
  return (
    <LayoutContainerModified>
      <PageInformation />
      <UserStatistics />
      <AchievementsDisplay />
    </LayoutContainerModified>
  );
};

export default Achievements;