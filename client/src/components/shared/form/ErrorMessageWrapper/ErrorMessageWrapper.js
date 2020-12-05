import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const ComponentContainer = styled.p`
  align-self: center;
  width: fit-content;
  color: ${({ theme }) => theme.warning};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: 600;
  text-align: center;
  padding: 1rem 0 0 0;
  animation: 0.3s ${fadeIn} ease-in-out;
`;

const ErrorMessageWrapper = ({ errorMessage }) => {
  return (
    <ComponentContainer>
      {errorMessage}
    </ComponentContainer>
  );
};

export default ErrorMessageWrapper;