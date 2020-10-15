import React from "react";
import { LayoutContainer } from "components/commoncomponents/general";
import { PageTopText, TileArcTitles } from "components/layoutcomponents/adventures/mainpage";

const AdventuresMainPage = () => {
  return (
    <LayoutContainer>
      <PageTopText />
      <TileArcTitles />
    </LayoutContainer>
  );
};

export default AdventuresMainPage;