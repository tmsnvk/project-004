import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconBlack = styled(FontAwesomeIcon)`
  display: inline-block;
  color: ${props => props.theme.fontColor.secondaryDark};
  font-size: ${props => props.theme.fontSize.large};
  margin: 1rem 1rem 1rem 1rem;
`;

export default IconBlack;