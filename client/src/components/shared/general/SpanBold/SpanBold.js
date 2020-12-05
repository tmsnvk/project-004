import styled from "styled-components";

const SpanBold = styled.span`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: 600;
  padding: ${props => props.padding || "0 0 0 0;"};
`;

export default SpanBold;