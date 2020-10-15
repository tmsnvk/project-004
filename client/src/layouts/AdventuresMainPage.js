import React from "react";
import { LayoutContainer } from "components/commoncomponents/general";
import { ButtonsAdventure, PageTopText } from "components/layoutcomponents/adventures/mainpage";

const AdventuresMainPage = () => {
  return (
    <LayoutContainer>
      <PageTopText />
      <ButtonsAdventure />
    </LayoutContainer>
  );
};

export default AdventuresMainPage;