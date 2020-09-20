import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconYellow = styled(FontAwesomeIcon)`
  display: inline-block;
  color: ${props => props.theme.fontColor.main};
  font-size: ${props => props.theme.fontSize.large};
  margin: 1rem 1rem 1rem 1rem;
`;

export default IconYellow;