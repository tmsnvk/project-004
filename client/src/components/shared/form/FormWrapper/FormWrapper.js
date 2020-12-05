import styled from "styled-components";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 25rem;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    width: 30rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    width: 35rem;
  }
`;

export default FormWrapper;