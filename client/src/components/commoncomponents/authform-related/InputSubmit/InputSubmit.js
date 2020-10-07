import styled from "styled-components";

const InputSubmit = styled.input`
  width: 20rem;
  height: 5rem;
  background-color: ${props => props.theme.backgroundColor.mainDark};
  color: ${props => props.theme.fontColor.main};
  font-size: ${props => props.theme.fontSize.small};
  font-weight: bold;
  letter-spacing: 0.4rem;
  text-transform: uppercase;
  text-align: center;
  margin: 5rem 0 0 0;
  border: 0.3rem ${props => props.theme.backgroundColor.mainLight} solid;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.backgroundColor.secondary};
    color: ${props => props.theme.fontColor.secondaryDark};
  }
  
  &:focus {
    outline: none;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    font-size: ${props => props.theme.fontSize.medium};
  }
`;

export default InputSubmit;