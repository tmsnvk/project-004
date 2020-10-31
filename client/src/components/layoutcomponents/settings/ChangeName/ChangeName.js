import React from "react";
import styled from "styled-components";
import FormNameChange from "./FormNameChange";
import { MessageText, MessageTitle } from "components/commoncomponents/general";

const ComponentContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
  margin: 5rem 0 0 0;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    grid-column-start: 2;
    grid-column-end: 3;
  }
`;

const ChangeName = () => {
  return (
    <ComponentContainer>
      <MessageTitle>
        Change account name
      </MessageTitle>
      <MessageText>
        Enter your new account name below. You may change your account name as many times as you would like to.
      </MessageText>
      <FormNameChange />
    </ComponentContainer>
  );
};

export default ChangeName;