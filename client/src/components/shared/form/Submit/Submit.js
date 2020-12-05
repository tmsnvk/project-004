import styled from "styled-components";

const Submit = styled.input`
  align-self: center;
  width: 20rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.secondaryDark};
  color: ${({ theme }) => theme.main};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: 600;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  text-align: center;
  margin: 5rem 0 0 0;
  border: 0.3rem ${({ theme }) => theme.secondaryLight} solid;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ backgroundColor }) => backgroundColor === "warning" ? ({ theme }) => theme.warning : ({ theme }) => theme.main};
    color: ${({ theme }) => theme.secondaryDark};
  }

  &:focus {
    outline: none;
  }
`;

export default Submit;