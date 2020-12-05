import React from "react";
import { Helmet } from "react-helmet";
import { LayoutContainer } from "components/shared/general";
import { PageInformation } from "components/page/pagenotfound";
import { usePageTracking } from "utilities/analytics/analyticsTracking";

const PageNotFound = () => {
  usePageTracking("PageNotFound");

  return (
    <LayoutContainer>
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <PageInformation />
    </LayoutContainer>
  );
};

export default PageNotFound;