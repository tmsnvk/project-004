import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.h2`
  font-size: ${props => props.theme.fontSize.xLarge};
  padding: 0 0 2rem 0;
  text-align: left;

  &:after {
    content: " ";
    display: block;
    padding: 2rem 0 0 0;
    border-bottom: 2px solid ${props => props.theme.fontColor.main};
    width: 25%;
  }
`;

const MessageTitle = ({ title }) => {
  return (
  <ComponentContainer>
    {title}
  </ComponentContainer>
  );
};

export default MessageTitle;