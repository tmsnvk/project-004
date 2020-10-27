import React from "react";
import { LayoutContainer } from "components/commoncomponents/general";
import { ChangeName, ChangePassword, DeleteAccount, PageInformation } from "components/layoutcomponents/settings";

const Settings = () => {
  return (
    <LayoutContainer>
      <PageInformation />
      <ChangeName />
      <ChangePassword />
      <DeleteAccount />
    </LayoutContainer>
  );
};

export default Settings;