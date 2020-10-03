import { Link } from "react-router-dom";
import styled from "styled-components";

const NagivationLink = styled(Link)`
  color: ${props => props.theme.fontColor.alternate};
  font-size: inherit;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.fontColor.main};
  }
`;

export default NagivationLink;