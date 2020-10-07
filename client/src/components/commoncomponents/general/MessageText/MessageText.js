import styled from "styled-components";

const MessageText = styled.p`
  font-size: ${props => props.theme.fontSize.large};
  padding: ${props => props.padding || null};
`;

export default MessageText;