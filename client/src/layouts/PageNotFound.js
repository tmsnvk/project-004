import React from "react";
import { Helmet } from "react-helmet";
import { LayoutContainer } from "components/commoncomponents/general";
import { PageInformation } from "components/layoutcomponents/pagenotfound";

const PageNotFound = () => {
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