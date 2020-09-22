import styled from "styled-components";
import { Link } from "react-router-dom";

const NagivationLink = styled(Link)`
  color: ${props => props.theme.fontColor.alternate};
  background-color: ${props => props.theme.backgroundColor.mainDark};
  font-size: inherit;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.fontColor.mainDark};
  }
`;

export default NagivationLink;