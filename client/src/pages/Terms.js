import React from "react";
import { Helmet } from "react-helmet";
import { LayoutContainer } from "components/shared/general";
import { PageInformation } from "components/page/terms";

const Terms = () => {
  return (
    <LayoutContainer>
      <Helmet>
        <title>Terms and Conditions</title>
      </Helmet>
      <PageInformation />
    </LayoutContainer>
  );
};

export default Terms;