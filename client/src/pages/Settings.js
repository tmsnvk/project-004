import React from "react";
import { Helmet } from "react-helmet";
import { LayoutContainer } from "components/shared/general";
import { ChangeColorTheme, ChangeName, ChangePassword, DeleteAccount, PageInformation, ResetAchievements } from "components/page/settings";

const Settings = () => {
  return (
    <LayoutContainer>
      <Helmet>
        <title>Settings</title>
      </Helmet>
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