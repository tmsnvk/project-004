import styled from "styled-components";

const Input = styled.input`
  width: 25rem;
  height: 5rem;
  background-color: ${props => props.theme.backgroundColor.mainDark};
  color: ${props => props.theme.fontColor.main};
  font-weight: bold;
  font-size: ${props => props.theme.fontSize.medium};
  border: 0.3rem ${props => props.theme.backgroundColor.mainLight} solid;
  padding: 0.5rem 0.5rem 0.5rem 1.5rem;
  border-radius: 0.5rem;

  &:hover {
    background-color: ${props => props.theme.backgroundColor.secondary};
    
    &::placeholder {
      letter-spacing: 0.2rem;
      padding: 1rem 1rem 1rem 1rem;
      color: ${props => props.theme.fontColor.secondaryDark};;
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
`;

export default Input;