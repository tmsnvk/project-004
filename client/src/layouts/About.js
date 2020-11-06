import React, { useContext } from "react";
import { UserContext } from "context/UserContext";
import { Helmet } from "react-helmet";
import { LayoutContainer } from "components/commoncomponents/general";
import { ContactForm, LoggedOutInformation, PageInformation } from "components/layoutcomponents/about";

const About = () => {
  const { userData } = useContext(UserContext);

  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <LayoutContainer>
        {userData.user ? <><PageInformation /><ContactForm /></> : <LoggedOutInformation />}
      </LayoutContainer>
    </>
  );
};

export default About;