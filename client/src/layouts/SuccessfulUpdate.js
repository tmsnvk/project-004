import React from "react";
import { Helmet } from "react-helmet";
import { LayoutContainer } from "components/commoncomponents/general";
import { PageInformation } from "components/layoutcomponents/successfulupdate";

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