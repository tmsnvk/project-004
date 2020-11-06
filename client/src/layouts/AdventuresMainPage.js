import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { LayoutContainer } from "components/commoncomponents/general";
import { AdventureTilesContainer, PageInformation } from "components/layoutcomponents/adventures/storySelection";

const LayoutContainerModified = styled(LayoutContainer)`
  grid-template-columns: 25% 25% 25% 25%;
`;

const AdventuresMainPage = () => {
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