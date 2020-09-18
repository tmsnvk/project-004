import styled from "styled-components";

const Input = styled.input`
  width: 15rem;
  height: 2.5rem;
  color: ${props => props.theme.fontColor.secondary};
  font-weight: bold;
  background-color: ${props => props.theme.backgroundColor.mainLight};

  &:hover {
    background-color: ${props => props.theme.backgroundColor.secondary};
  }
  
  &:focus {
    outline: none;
  }
`;

export default Input;