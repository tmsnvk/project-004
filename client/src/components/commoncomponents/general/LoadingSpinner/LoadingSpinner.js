import React from "react";
import styled from "styled-components";
import { MessageText } from "components/commoncomponents/general";
import { IconYellow } from "components/commoncomponents/styled-icons";
import iconList from "utilities/iconList";

const ComponentContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  width: 60%;
  margin: 5rem auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    width: 40%;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    width: 20%;
  }
`;

const LoadingSpinner = ({ message }) => {
  return (
    <ComponentContainer>
      <IconYellow icon={iconList.spinner} spin></IconYellow>
      <MessageText>{message}</MessageText>
    </ComponentContainer>
  );
};

export default LoadingSpinner;