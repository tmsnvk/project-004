import React from "react";
import { LayoutContainer } from "components/commoncomponents/general";
import { ChangeName, ChangePassword, DeleteAccount, TopText } from "components/layoutcomponents/settings";

const Settings = () => {
  return (
    <LayoutContainer>
      <TopText />
      <ChangeName />
      <ChangePassword />
      <DeleteAccount />
    </LayoutContainer>
  );
};

export default Settings;