import styled from "styled-components";

const MessageText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  padding: ${props => props.padding || "0 0 0 0;"};

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

export default MessageText;