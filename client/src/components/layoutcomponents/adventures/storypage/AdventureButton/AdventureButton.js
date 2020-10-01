import styled from "styled-components";

const AdventureButton = styled.button`
  margin: 1rem 0 1rem 0;
  background-color: ${props => props.theme.backgroundColor.mainDark};
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.fontColor.main};
  font-weight: bold;
  text-align: left;
  border: 0.3rem ${props => props.theme.backgroundColor.mainLight} solid;
  padding: 2rem 2rem 2rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.backgroundColor.secondary};
    color: ${props => props.theme.fontColor.secondaryDark};
  }
  
  &:focus {
    outline: none;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xSmall}) {

}

@media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {

}

@media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
  /* width: 90%; */
}
`;

export default AdventureButton;