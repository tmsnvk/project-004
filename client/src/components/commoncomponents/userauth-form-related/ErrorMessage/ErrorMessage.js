import styled from "styled-components";

const ErrorMessage = styled.div`
  color: ${props => props.theme.fontColor.warning};
  font-size: ${props => props.theme.fontSize.medium};
  padding: 1rem 0 0 0;
`;

export default ErrorMessage;