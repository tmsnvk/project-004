import React from "react";
import { ContainerLayout } from "components/commoncomponents/general";
import { AchievementList, TopText } from "components/layoutcomponents/achievements";

const Achievements = () => {
  return (
    <ContainerLayout>
      <TopText />
      <AchievementList />
    </ContainerLayout>
  );
};

export default Achievements;