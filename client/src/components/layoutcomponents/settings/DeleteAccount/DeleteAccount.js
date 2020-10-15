import React from "react";
import styled from "styled-components";
import FormAccountDelete from "./FormAccountDelete";
import { MessageText, MessageTitle } from "components/commoncomponents/general";

const ContainerComponent = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 4;
  grid-row-end: 5;
  margin: 5rem 0 0 0;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    grid-column-start: 2;
    grid-column-end: 3;
  }
`;

const DeleteAccount = () => {
  return (
    <ContainerComponent>
      <MessageTitle>
        Delete your account
      </MessageTitle>
      <MessageText>
        We are sorry to see you go. Please understand that by deleting your account you permanently delete all of its information. After clicking on the button you will be redirected to our home page.
      </MessageText>
      <FormAccountDelete />
    </ContainerComponent>
  );
};

export default DeleteAccount;