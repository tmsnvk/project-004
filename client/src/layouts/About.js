import React from "react";
import { LayoutContainer } from "components/commoncomponents/general";
import { PageTopText, ContactForm } from "components/layoutcomponents/about";

const About = () => {
  return (
    <LayoutContainer>
      <PageTopText />
      <ContactForm />
    </LayoutContainer>
  );
};

export default About;