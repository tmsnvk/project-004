import React from "react";
import styled from "styled-components";
import { Message, MessageTitle } from "components/commoncomponents/userauth-related";
import componentData from "./componentData";

const ContainerComponent = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
`;

const IntroText = () => {
  return (
    <ContainerComponent>
      <MessageTitle title={componentData.messageTitle} />
      <Message message={componentData.message.paragraphOne} />
      <Message message={componentData.message.paragraphTwo} />
    </ContainerComponent>
  );
};

export default IntroText;