import React from "react";
import styled from "styled-components";
import { Message } from "components/commoncomponents/general";
import componentData from "./componentData";

const ContainerComponent = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
`;

const IntroRegister = () => {
  return (
    <ContainerComponent>
      <Message message={componentData()} />
    </ContainerComponent>
  );
};

export default IntroRegister;