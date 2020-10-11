import styled from "styled-components";

const TileContainer = styled.div`
  margin: 1rem 0 1rem 0;
  background-color: ${props => props.theme.backgroundColor.mainDark};
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.fontColor.main};
  text-align: left;
  border: 0.3rem ${props => props.theme.backgroundColor.mainLight} solid;
  padding: 2rem 2rem 2rem 2rem;
  border-radius: 0.5rem;
`;

export default TileContainer;