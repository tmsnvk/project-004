import React, { useContext } from "react";
import { UserContext } from "context/UserContext";
import axios from "axios";
import styled from "styled-components";
import { TileButton } from "components/commoncomponents/tile-related";

const TileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.small}) {
    flex-direction: row;
  }
`;

const ColorTile = styled(TileButton)`
  background-color: ${({ active }) => active ? ({ theme }) => theme.main : ({ theme }) => theme.secondaryDark};
  color: ${({ active }) => active ? ({ theme }) => theme.secondaryDark : ({ theme }) => theme.main};
  margin: 1rem 0.5rem 1.5rem 0.5rem;
  width: 15rem;
  transition: all 0.2s ease-in;
`;

const ChangeTiles = () => {
  const { userColorTheme, setUserColorTheme } = useContext(UserContext);

  const darkColorThemes = [{ id: "darkYellow", name: "Dark Yellow" }, { id: "darkBlue", name: "Dark Blue" }, { id: "darkGreen", name: "Dark Green" }];
  const lightColorThemes = [{ id: "lightYellow", name: "Light Yellow" }, { id: "lightBlue", name: "Light Blue" }, { id: "lightGreen", name: "Light Green" }];

  const handleColorChange = async (element) => {

    try {
      await axios.post("/user/theme-set", { colorTheme: element.id });
      setUserColorTheme(element.id);
    } catch (error) {
      console.log(error);
    }
  };

  const renderDarkColorTiles = darkColorThemes.map((element) => {
    const active = element.id === userColorTheme ? true : false;
    return (
      <ColorTile onClick={() => handleColorChange(element)} key={element.id} active={active}>{element.name}</ColorTile>
    );
  });

  const renderLightColorTiles = lightColorThemes.map((element) => {
    const active = element.id === userColorTheme ? true : false;
    return (
      <ColorTile onClick={() => handleColorChange(element)} key={element.id} active={active}>{element.name}</ColorTile>
    );
  });

  return (
    <>
      <TileContainer>
        {renderDarkColorTiles}
      </TileContainer>
      <TileContainer>
        {renderLightColorTiles}
      </TileContainer>
    </>
  );
};

export default ChangeTiles;