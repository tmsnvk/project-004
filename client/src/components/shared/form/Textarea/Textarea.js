import styled from "styled-components";

const Textarea = styled.textarea`
  align-self: center;
  width: 25rem;
  background-color: ${({ theme }) => theme.secondaryDark};
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.main};
  font-weight: 600;
  border: 0.3rem ${({ theme }) => theme.secondaryLight} solid;
  padding: 5rem 0.5rem 0 2rem;
  border-radius: 0.5rem;
  line-height: 1.5;
  cursor: text;
  resize: none;

  &:hover {
    border: 0.3rem ${({ theme }) => theme.main} solid;
  }

  &:focus {
    outline: none;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    width: 30rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    width: 35rem;
  }
`;

export default Textarea;