import styled from "styled-components";

const ErrorMessage = styled.div`
  align-self: center;
  width: fit-content;
  color: ${({ theme }) => theme.warning};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: bolder;
  padding: 2rem 0 0 0;
  text-align: center;

  &:after {
    content: " ";
    display: block;
    padding: 0.5rem 0 0 0;
    border-bottom: 2px solid ${({ theme }) => theme.warning};
    width: 100%;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

export default ErrorMessage;