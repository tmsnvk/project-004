import React from "react";
// import { useHistory } from "react-router-dom";
import styled from "styled-components";

const ContainerLayout = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-column-gap: 2.5em;
  grid-row-gap: 2.5rem;  
  font-size: ${({ theme }) => theme.fontSize.small};
  text-align: center;
  width: 85%;
  margin: 10rem auto;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xSmall}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.small}) {
    width: 70%;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    width: 50%;
  }
`;


const SuccessfulUpdate = () => {

  return (
    <ContainerLayout>
      <div>UPDATE SUCCESSFUL</div>
    </ContainerLayout>
  );
};

export default SuccessfulUpdate;