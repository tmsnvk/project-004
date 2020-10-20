import styled from "styled-components";

const Submit = styled.input`
  align-self: center;
  width: 20rem;
  height: 5rem;
  background-color: ${props => props.theme.backgroundColor.mainDark};
  color: ${props => props.theme.fontColor.main};
  font-size: ${props => props.theme.fontSize.medium};
  font-weight: bolder;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  text-align: center;
  margin: 5rem 0 0 0;
  border: 0.3rem ${props => props.theme.backgroundColor.mainLight} solid;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.backgroundColor || props.theme.backgroundColor.secondary};
    color: ${props => props.theme.fontColor.secondaryDark};
  }
  
  &:focus {
    outline: none;
  }
`;

export default Submit;