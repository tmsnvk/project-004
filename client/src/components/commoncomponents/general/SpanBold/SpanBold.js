import styled from "styled-components";

const SpanBold = styled.span`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: bolder;
  padding: ${props => props.padding || null};
`;

export default SpanBold;