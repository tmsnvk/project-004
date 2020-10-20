import styled from "styled-components";

const Input = styled.input`
  align-self: center;
  width: 25rem;
  height: 6.5rem;
  background-color: ${props => props.theme.backgroundColor.mainDark};
  font-family: inherit;
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.fontColor.main};
  font-weight: bold;
  border: 0.3rem ${props => props.theme.backgroundColor.mainLight} solid;
  padding: 0 0.5rem 0 2rem;
  border-radius: 0.5rem;
  cursor: text;

  &:hover {
    border: 0.3rem ${props => props.theme.backgroundColor.secondary} solid;
  }

  &:focus {
    outline: none;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    width: 30rem;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xLarge}) {
    width: 35rem;
  }
`;

export default Input;