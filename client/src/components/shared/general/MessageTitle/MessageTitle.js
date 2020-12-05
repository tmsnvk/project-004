import styled from "styled-components";

const MessageTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: 600;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.xLarge};
  }
`;

export default MessageTitle;