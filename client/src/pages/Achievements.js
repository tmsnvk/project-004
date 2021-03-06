import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { LayoutContainer } from "components/shared/general";
import { AchievementsDisplay, PageInformation, UserStatistics } from "components/page/achievements";
import { usePageTracking } from "utilities/analytics/analyticsTracking";

const LayoutContainerModified = styled(LayoutContainer)`
  grid-template-columns: 25% 25% 25% 25%;
`;

const Achievements = () => {
  usePageTracking("Achievements");

  return (
    <LayoutContainerModified>
      <Helmet>
        <title>Achievements</title>
      </Helmet>
      <PageInformation />
      <UserStatistics />
      <AchievementsDisplay />
    </LayoutContainerModified>
  );
};

export default Achievements;