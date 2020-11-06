import React from "react";
import { Helmet } from "react-helmet";
import { LayoutContainer } from "components/commoncomponents/general";
import { PageInformation } from "components/layoutcomponents/adventures/gameWon";

const AdventuresGameResultWin = () => {
  return (
    <LayoutContainer>
      <Helmet>
        <title>Adventures</title>
      </Helmet>
      <PageInformation />
    </LayoutContainer>
  );
};

export default AdventuresGameResultWin;