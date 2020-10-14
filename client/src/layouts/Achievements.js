import React from "react";
import { LayoutContainer } from "components/commoncomponents/general";
import { AchievementList, PageTopText } from "components/layoutcomponents/achievements";

const Achievements = () => {
  return (
    <LayoutContainer>
      <PageTopText />
      <AchievementList />
    </LayoutContainer>
  );
};

export default Achievements;