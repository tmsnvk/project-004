import styled from "styled-components";

const InputSubmit = styled.input`
  background-color: ${props => props.theme.backgroundColor.secondary};
  color: ${props => props.theme.fontColor.secondary};
  font-size: ${props => props.theme.fontSize.medium};
  font-weight: bold;
  text-align: center;
  width: 20rem;
  height: 5rem;
  margin: 2rem 0 0 0;
  padding: 1rem 1rem 1rem 1rem;
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.backgroundColor.mainDark};
  }
  
  &:focus {
    outline: none;
  }
`;

export default InputSubmit;