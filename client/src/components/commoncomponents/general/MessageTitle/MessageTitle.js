import styled from "styled-components";

const MessageTitle = styled.p`
  font-size: ${props => props.theme.fontSize.xxLarge};
  font-weight: bold;
  padding: 0 0 2rem 0;

  &:after {
    content: " ";
    display: block;
    padding: 2rem 0 0 0;
    border-bottom: 2px solid ${props => props.theme.fontColor.main};
    width: 25%;
  }
`;

export default MessageTitle;