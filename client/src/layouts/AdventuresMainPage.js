import React from "react";
import styled from "styled-components";
import { LayoutContainer } from "components/commoncomponents/general";
import { ContainerStoryTiles, PageTopText } from "components/layoutcomponents/adventures/storySelection";

const LayoutContainerModified = styled(LayoutContainer)`
  grid-template-columns: 25% 25% 25% 25%;
`;

const AdventuresMainPage = () => {
  return (
    <LayoutContainerModified>
      <PageTopText />
      <ContainerStoryTiles />
    </LayoutContainerModified>
  );
};

export default AdventuresMainPage;