import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { UserContext } from "context/UserContext";
import { LayoutContainer } from "components/shared/general";
import { ContactForm, LoggedOutInformation, PageInformation } from "components/page/about";
import { usePageTracking } from "utilities/analytics/analyticsTracking";

const About = () => {
  usePageTracking("About");
  const { userData } = useContext(UserContext);

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