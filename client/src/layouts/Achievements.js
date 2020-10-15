import React from "react";
import { LayoutContainer } from "components/commoncomponents/general";
import { AchievementList, PageTopText, UserStatistics } from "components/layoutcomponents/achievements";

const Achievements = () => {
  return (
    <LayoutContainer>
      <PageTopText />
      <UserStatistics />
      <AchievementList />
    </LayoutContainer>
  );
};

export default Achievements;