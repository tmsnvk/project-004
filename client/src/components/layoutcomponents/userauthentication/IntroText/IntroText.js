import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const ContainerComponent = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  flex-direction: column;
`;

const ParagraphMessageMain = styled.p`
  font-size: ${props => props.theme.fontSize.medium};
  padding: 0 0.5rem 0 0.5rem;

  &:after {
    content: " ";
    display: block;
    padding: 2.5rem 0 0 0;
    border-bottom: 2px solid ${props => props.theme.fontColor.mainDark};
    width: 75%;
    margin: 0 auto;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xSmall}) {
    padding: 0 2.5rem 0 2.5rem;
    font-size: ${props => props.theme.fontSize.large};
  }
`;

const ParagraphMessageSub = styled.p`
  padding: 2.5rem 0 2.5rem 0;
`;

const Navigation = styled.span`
  color: ${props => props.theme.fontColor.alternate};
  font-size: inherit;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.fontColor.mainDark};
  }
`;

const IntroText = () => {
  const history = useHistory();

  const register = () => {
    history.push("/userregister")
  };

  return (
    <ContainerComponent>
      <ParagraphMessageMain>
        Evrallas is a classic choose-your-adventure type of game where your decision will affect the story's final outcome.
      </ParagraphMessageMain>
    </ContainerComponent>
  );
};

export default IntroText;