import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const InputErrorMessage = styled.span`
  align-self: center;
  width: fit-content;
  color: ${props => props.theme.fontColor.warning};
  font-size: ${props => props.theme.fontSize.small};
  font-weight: bolder;
  text-align: center;
  padding: 1rem 0 0 0;
  animation: 0.3s ${fadeIn} ease-in-out;
`;

export default InputErrorMessage;