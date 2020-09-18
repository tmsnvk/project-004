import styled from "styled-components";

const ErrorMessage = styled.div`
  color: ${props => props.theme.fontColor.warning};
  font-size: ${props => props.theme.fontSize.default};
  padding: 1rem 0 0 0;
`;

export default ErrorMessage;