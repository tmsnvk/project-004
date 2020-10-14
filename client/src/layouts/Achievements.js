import React from "react";
import { LayoutContainer } from "components/commoncomponents/general";
import { AchievementList, TopText } from "components/layoutcomponents/achievements";

const Achievements = () => {
  return (
    <LayoutContainer>
      <TopText />
      <AchievementList />
    </LayoutContainer>
  );
};

export default Achievements;