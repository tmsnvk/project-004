import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import ListArcTiles from "./ListArcTiles";
import ListAchievements from "./ListAchievements";
import ListStoryTiles from "./ListStoryTiles";
import { adventuresMetaData } from "utilities";

const ContainerComponent = styled.div`
  display: grid;
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 5;
`;

const AchievementsDisplay = () => {
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const [dataSet, setDataSet] = useState({ arc: undefined, code: undefined });
  const [displayArcTiles, setDisplayArcTiles] = useState(1);
  const [displayStoryTiles, setDisplayStoryTiles] = useState([undefined]);
  const [displayAchievements, setDisplayAchievements] = useState([]);

  useEffect(() => {
    setDisplayStoryTiles([adventuresMetaData[displayArcTiles]]);

  }, [displayArcTiles]);

  useEffect(() => {
    const getAchievements = () => {
      if (dataSet.arc === undefined) return;
      const id = localStorage.getItem("auth-id");
      const storyCode = ["a1s1", "a1s2", "a2s1", "a3s1", "a4s1"];

      try {
        setLoadingSpinner(true);
        storyCode.forEach(async (element) => {
          if (dataSet.code === element) {
            const response = await axios.get(`/achievement/showcase/${element}`, { params: { _id: id }});
            setTimeout(() => setLoadingSpinner(false), 1500);
            setDisplayAchievements(Object.entries(response.data));
          }
        });
      } catch (error) {
        console.log(error);
      }
    };

    getAchievements();
    return () => setDisplayAchievements([]);
  }, [dataSet, setLoadingSpinner]);

  const chooseArcTile = (index) => setDisplayArcTiles(index);

  const chooseStoryTile = (event) => setDataSet({ arc: event.currentTarget.dataset.arc, code: event.currentTarget.dataset.code });

  return (
    <>
      <ContainerComponent>
        <ListArcTiles displayArcTiles={displayArcTiles} chooseArcTile={chooseArcTile} />
        <ListStoryTiles displayStoryTiles={displayStoryTiles} chooseStoryTile={chooseStoryTile} />
      </ContainerComponent>
        <ListAchievements displayAchievements={displayAchievements} loadingSpinner={loadingSpinner} dataSet={dataSet} />
    </>
  );
};

export default AchievementsDisplay;