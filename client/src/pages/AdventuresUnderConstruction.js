import React from "react";
import { Helmet } from "react-helmet";
import { LayoutContainer } from "components/shared/general";
import { PageInformation } from "components/page/underconstruction";
import { usePageTracking } from "utilities/analytics/analyticsTracking";

const AdventuresUnderConstruction = () => {
  usePageTracking("AdventuresUnderConstruction");

  return (
    <LayoutContainer>
      <Helmet>
        <title>Adventures</title>
      </Helmet>
      <PageInformation />
    </LayoutContainer>
  );
};

export default AdventuresUnderConstruction;