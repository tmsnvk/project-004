import React from "react";
import styled from "styled-components";
import { LayoutContainer } from "components/commoncomponents/general";
import { PageInformation, StoryTilesContainer } from "components/layoutcomponents/adventures/storySelection";

const LayoutContainerModified = styled(LayoutContainer)`
  grid-template-columns: 25% 25% 25% 25%;
`;

const AdventuresMainPage = () => {
  return (
    <LayoutContainerModified>
      <PageInformation />
      <StoryTilesContainer />
    </LayoutContainerModified>
  );
};

export default AdventuresMainPage;