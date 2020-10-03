import styled from "styled-components";

const ErrorMessage = styled.div`
  color: ${props => props.theme.fontColor.warning};
  font-size: ${props => props.theme.fontSize.large};
  padding: 2rem 0 0 0;
  
  &:after {
    content: " ";
    display: block;
    padding: 0.5rem 0 0 0;
    border-bottom: 2px solid ${props => props.theme.fontColor.warning};
    width: 100%;
  }
`;

export default ErrorMessage;