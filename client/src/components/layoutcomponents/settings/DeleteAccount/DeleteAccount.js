import React from "react";
import styled from "styled-components";
import { MessageText, MessageTitle } from "components/commoncomponents/general";
import AccountDeleteForm from "./AccountDeleteForm";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 6;
  grid-row-end: 7;
  margin: 5rem 0 0 0;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    grid-column-start: 2;
    grid-column-end: 3;
  }
`;

const DeleteAccount = () => {
  return (
    <ComponentContainer>
      <MessageTitle>
        Delete account
      </MessageTitle>
      <MessageText>
        We are sorry to see you go. Please understand that by deleting your account you permanently delete all of its information. After clicking on the button you will be redirected to our home page.
      </MessageText>
      <AccountDeleteForm />
    </ComponentContainer>
  );
};

export default DeleteAccount;