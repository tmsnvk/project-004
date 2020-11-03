import React from "react";
import styled from "styled-components";
import PasswordChangeForm from "./PasswordChangeForm";
import { MessageText, MessageTitle } from "components/commoncomponents/general";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 5;
  grid-row-end: 6;
  margin: 5rem 0 0 0;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    grid-column-start: 2;
    grid-column-end: 3;
  }
`;

const ChangePassword = () => {

  return (
    <ComponentContainer>
      <MessageTitle>
        Change account password
      </MessageTitle>
      <MessageText>
        Enter your new account password below. You may change your password as often as you would like to.
      </MessageText>
      <PasswordChangeForm />
    </ComponentContainer>
  );
};

export default ChangePassword;