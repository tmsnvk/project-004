import React from "react";
import styled from "styled-components";
import { HorizontalLine } from "components/commoncomponents/general";
import Message from "components/layoutcomponents/achievements/PageTopText/Message";
import Title from "components/layoutcomponents/achievements/PageTopText/Title";

const ContainerComponent = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    grid-column-start: 2;
    grid-column-end: 3;
  }
`;

const PageTopText = () => {
  return (
    <ContainerComponent>
      <Title />
      <HorizontalLine width="50%" margin="1.25rem auto 2.5rem 0" />
      <Message />
    </ContainerComponent>
  );
};

export default PageTopText;