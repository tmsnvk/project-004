import React from "react";
import styled from "styled-components";
import { MessageText, MessageTitle } from "components/commoncomponents/general";

const ContainerComponent = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
`;

const IntroMessage = styled(MessageText)`
  padding: 2.5rem 0 0 0;
`;

const IntroText = () => {
  return (
    <ContainerComponent>
      <MessageTitle>
        Create your account here, adventurer!
      </MessageTitle>
      <IntroMessage>
        Create your account below & start enjoying our stories right away.
      </IntroMessage>
      <IntroMessage>
        Registering at Evrallas will never require to enter your email or any other sensitive data & using the website will never cost you anything.
      </IntroMessage>
    </ContainerComponent>
  );
};

export default IntroText;