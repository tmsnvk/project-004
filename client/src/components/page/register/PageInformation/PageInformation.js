import React from "react";
import styled from "styled-components";
import { HorizontalLine } from "components/shared/general";
import Message from "components/page/register/PageInformation/Message";
import Title from "components/page/register/PageInformation/Title";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    grid-column-start: 2;
    grid-column-end: 3;
  }
`;

const PageInformation = () => {
  return (
    <ComponentContainer>
      <Title />
      <HorizontalLine width="50%" margin="1.25rem auto 2.5rem 0" />
      <Message />
    </ComponentContainer>
  );
};

export default PageInformation;