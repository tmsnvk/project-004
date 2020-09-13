import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkComponentNavigation = styled(Link)`
  color: ${props => props.theme.fontColor.alternate};
  font-size: inherit;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.fontColor.mainDark};
  }
`;

export default LinkComponentNavigation;