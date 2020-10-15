import React from "react";
import { LayoutContainer } from "components/commoncomponents/general";
import { ChangeName, ChangePassword, DeleteAccount, PageTopText } from "components/layoutcomponents/settings";

const Settings = () => {
  return (
    <LayoutContainer>
      <PageTopText />
      <ChangeName />
      <ChangePassword />
      <DeleteAccount />
    </LayoutContainer>
  );
};

export default Settings;