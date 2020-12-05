import React from "react";
import { Helmet } from "react-helmet";
import { usePageTracking } from "utilities/analytics/analyticsTracking";
import { LayoutContainer } from "components/shared/general";
import { ChangeColorTheme, ChangeName, ChangePassword, DeleteAccount, PageInformation, ResetAchievements } from "components/page/settings";

const Settings = () => {
  usePageTracking("Settings");

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