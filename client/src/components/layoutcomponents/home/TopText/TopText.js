import React from "react";
import styled from "styled-components";
import { HorizontalLine } from "components/commoncomponents/general";
import Message from "components/layoutcomponents/home/TopText/Message";
import Title from "components/layoutcomponents/home/TopText/Title";

const ContainerComponent = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
`;

const TopText = () => {
  return (
    <ContainerComponent>
      <Title />
      <HorizontalLine width="50%" margin="1.25rem auto 2.5rem 0" />
      <Message />
    </ContainerComponent>
  );
};

export default TopText;