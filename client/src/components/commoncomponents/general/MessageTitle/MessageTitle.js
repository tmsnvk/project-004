import styled from "styled-components";

const MessageTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: bold;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.xLarge};
  }
`;

export default MessageTitle;