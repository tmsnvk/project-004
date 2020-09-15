import React from "react";
import styled from "styled-components";

const ContainerComponent = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
`;

const Message = styled.p`
  font-size: ${props => props.theme.fontSize.medium};

  &:after {
    content: " ";
    display: block;
    padding: 2.5rem 0 0 0;
    border-bottom: 2px solid ${props => props.theme.fontColor.mainDark};
    width: 75%;
    margin: 0 auto;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xSmall}) {
    font-size: ${props => props.theme.fontSize.large};
  }
`;

const IntroText = () => {

  return (
    <ContainerComponent>
      <Message>
        Evrallas is a classic choose-your-adventure type of game in which the decisions you make directly affect the story's outcome.
      </Message>
    </ContainerComponent>
  );
};

export default IntroText;