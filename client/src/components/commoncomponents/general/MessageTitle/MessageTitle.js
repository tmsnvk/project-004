import styled from "styled-components";

const MessageTitle = styled.p`
  font-size: ${props => props.theme.fontSize.large};
  font-weight: bold;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    font-size: ${props => props.theme.fontSize.xLarge};
  }
`;

export default MessageTitle;