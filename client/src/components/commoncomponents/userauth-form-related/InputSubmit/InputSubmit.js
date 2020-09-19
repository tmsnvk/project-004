import styled from "styled-components";

const InputSubmit = styled.input`
  width: 20rem;
  height: 5rem;
  text-align: center;
  background-color: ${props => props.theme.backgroundColor.mainDark};
  color: ${props => props.theme.fontColor.main};
  font-size: ${props => props.theme.fontSize.medium};
  font-weight: bold;
  margin: 5rem 0 0 0;
  padding: 1rem 1rem 1rem 1rem;
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
`;

export default InputSubmit;