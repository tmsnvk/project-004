import styled from "styled-components";
import TileButton from "../TileButton";
import { IconYellow } from "components/commoncomponents/styled-icons";

const ArcTile = styled(TileButton)`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ isHighlighted, theme: { backgroundColor } }) => isHighlighted ? backgroundColor.secondary : backgroundColor.mainDark};
  color: ${({ isHighlighted, theme: { fontColor } }) => isHighlighted ? fontColor.secondaryDark : fontColor.main};

  ${IconYellow} {
    color: ${({ isHighlighted, theme: { fontColor } }) => isHighlighted ? fontColor.secondaryDark : fontColor.main};
  }

  &:hover {
    background-color: ${props => props.theme.backgroundColor.secondary};
    color: ${props => props.theme.fontColor.secondaryDark};
  }

  &:hover ${IconYellow} {
    color: ${props => props.theme.fontColor.secondaryDark};
  }
`;

export default ArcTile;