import React from "react";
import { Helmet } from "react-helmet";
import { LayoutContainer } from "components/shared/general";
import { PageInformation } from "components/page/adventures/gameWon";
import { usePageTracking } from "utilities/analytics/analyticsTracking";

const AdventuresGameResultWin = () => {
  usePageTracking("AdventuresWon");

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