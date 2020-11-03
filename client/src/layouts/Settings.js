import React from "react";
import { LayoutContainer } from "components/commoncomponents/general";
import { ChangeColorTheme, ChangeName, ChangePassword, DeleteAccount, PageInformation, ResetAchievements } from "components/layoutcomponents/settings";

const Settings = () => {
  return (
    <LayoutContainer>
      <PageInformation />
      <ChangeColorTheme />
      <ResetAchievements />
      <ChangeName />
      <ChangePassword />
      <DeleteAccount />
    </LayoutContainer>
  );
};

export default Settings;