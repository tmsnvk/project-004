import styled from "styled-components";

const TileButton = styled.button`
  margin: 1rem 0 1rem 0;
  background-color: ${props => props.theme.backgroundColor.mainDark};
  font-size: ${props => props.theme.fontSize.medium};
  color: ${props => props.theme.fontColor.main};
  font-weight: bold;
  text-align: left;
  border: 0.3rem ${props => props.theme.backgroundColor.mainLight} solid;
  padding: 2rem 2rem 2rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  
  &:focus {
    outline: none;
  }
`;

export default TileButton;