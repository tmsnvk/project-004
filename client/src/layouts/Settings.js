import React from "react";
import { LayoutContainer } from "components/commoncomponents/general";
import { ChangeColorTheme, ChangeName, ChangePassword, DeleteAccount, PageInformation } from "components/layoutcomponents/settings";

const Settings = () => {
  return (
    <LayoutContainer>
      <PageInformation />
      <ChangeColorTheme />
      <ChangeName />
      <ChangePassword />
      <DeleteAccount />
    </LayoutContainer>
  );
};

export default Settings;