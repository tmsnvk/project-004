import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { LayoutContainer } from "components/shared/general";
import { AdventureTilesContainer, PageInformation } from "components/page/adventures/storySelection";
import { usePageTracking } from "utilities/analytics/analyticsTracking";

const LayoutContainerModified = styled(LayoutContainer)`
  grid-template-columns: 25% 25% 25% 25%;
`;

const AdventuresMainPage = () => {
  usePageTracking("AdventuresMainPage");

  return (
    <LayoutContainerModified>
      <Helmet>
        <title>Adventures</title>
      </Helmet>
      <PageInformation />
      <AdventureTilesContainer />
    </LayoutContainerModified>
  );
};

export default AdventuresMainPage;