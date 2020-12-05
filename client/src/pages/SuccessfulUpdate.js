import React from "react";
import { Helmet } from "react-helmet";
import { LayoutContainer } from "components/shared/general";
import { PageInformation } from "components/page/successfulupdate";

const SuccessfulUpdate = () => {
  return (
    <LayoutContainer>
      <Helmet>
        <title>Successful Update</title>
      </Helmet>
      <PageInformation />
    </LayoutContainer>
  );
};

export default SuccessfulUpdate;