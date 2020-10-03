import styled from "styled-components";

const Input = styled.input`
  width: 25rem;
  height: 5rem;
  background-color: ${props => props.theme.backgroundColor.mainDark};
  color: ${props => props.theme.fontColor.main};
  font-size: ${props => props.theme.fontSize.medium};
  font-weight: bold;
  border: 0.3rem ${props => props.theme.backgroundColor.mainLight} solid;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  border-radius: 0.5rem;

  &:hover {
    background-color: ${props => props.theme.backgroundColor.secondary};
    
    &::placeholder {
      letter-spacing: 0.2rem;
      padding: 1rem 1rem 1rem 1rem;
      color: ${props => props.theme.fontColor.secondaryDark};
	  }
  }

  &:focus {
    outline: none;
    background-color: ${props => props.theme.backgroundColor.secondary};
    color: ${props => props.theme.fontColor.secondaryDark};
  }

  &::placeholder {
		letter-spacing: 0.2rem;
		padding: 1rem 1rem 1rem 1rem;
		color: ${props => props.theme.fontColor.main};
	}

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    width: 30rem;
    font-size: ${props => props.theme.fontSize.large};
  }
`;

export default Input;