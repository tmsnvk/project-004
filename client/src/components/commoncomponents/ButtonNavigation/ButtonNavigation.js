import styled from "styled-components";

const ButtonNagivation = styled.button`
  color: ${props => props.theme.fontColor.alternate};
  background-color: ${props => props.theme.backgroundColor.mainDark};
  font-size: inherit;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.fontColor.mainDark};
  }
`;

export default ButtonNagivation;