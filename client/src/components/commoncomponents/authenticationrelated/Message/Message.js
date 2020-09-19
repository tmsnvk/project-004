import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.p`
  font-size: ${props => props.theme.fontSize.medium};
  padding: 0 0 1rem 0;
  text-align: left;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xSmall}) {
    font-size: ${props => props.theme.fontSize.large};
  }
`;

const Message = ({ message }) => {
  return (
  <ComponentContainer>
    {message}
  </ComponentContainer>
  );
};

export default Message;