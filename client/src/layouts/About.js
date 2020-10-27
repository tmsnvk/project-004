import React, { useContext } from "react";
import { UserContext } from "context/UserContext";
import { LayoutContainer } from "components/commoncomponents/general";
import { ContactForm, LoggedOutInformation, PageInformation } from "components/layoutcomponents/about";

const About = () => {
  const { userData } = useContext(UserContext);

  return (
    <LayoutContainer>
      {userData.user ? <><PageInformation /><ContactForm /></> : <LoggedOutInformation />}
    </LayoutContainer>
  );
};

export default About;