import styled from "styled-components";

const MessageText = styled.p`
  font-size: ${props => props.theme.fontSize.small};
  padding: ${props => props.padding || null};

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    font-size: ${props => props.theme.fontSize.medium};
  }
`;

export default MessageText;