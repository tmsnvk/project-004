import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { UserContext } from "context/UserContext";
import { usePageTracking } from "utilities/analytics/analyticsTracking";
import { LayoutContainer } from "components/shared/general";
import { ContactForm, LoggedOutInformation, PageInformation } from "components/page/about";

const About = () => {
  const { userData } = useContext(UserContext);
  usePageTracking("About");

  return (
    <LayoutContainer>
      <Helmet>
        <title>About</title>
      </Helmet>
      {userData.user ? <><PageInformation /><ContactForm /></> : <LoggedOutInformation />}
    </LayoutContainer>
  );
};

export default About;