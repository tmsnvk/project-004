import React from "react";
import styled from "styled-components";
import { HorizontalLine } from "components/commoncomponents/general";
import Message from "components/layoutcomponents/achievements/TopText/Message";
import Title from "components/layoutcomponents/achievements/TopText/Title";

const ContainerComponent = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  margin: 0 auto;
  
  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    width: 65%;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    width: 50%;
  }
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