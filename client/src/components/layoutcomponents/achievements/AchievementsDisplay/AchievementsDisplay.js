import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import ListArcTiles from "./ListArcTiles";
import ListAchievements from "./ListAchievements";
import ListStoryTiles from "./ListStoryTiles";
import { adventuresMetaData } from "utilities";

const ComponentContainer = styled.section`
  display: grid;
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 5;
`;

const AchievementsDisplay = () => {
  const [dataSet, setDataSet] = useState({ arc: undefined, code: undefined });
  const [displayArcTiles, setDisplayArcTiles] = useState(0);
  const [displayStoryTiles, setDisplayStoryTiles] = useState([undefined]);
  const [displayAchievements, setDisplayAchievements] = useState([]);

  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const [elapsedLoadingTime, setElapsedLoadingTime] = useState(undefined);
  const showSpinnerIfGreaterThanTime = 500;
  const incrementTime = 50;

  useEffect(() => {
    setDisplayStoryTiles([adventuresMetaData[displayArcTiles]]);
  }, [displayArcTiles]);

  useEffect(() => {
    const getAchievements = () => {
      if (dataSet.arc === undefined) return;
      const storyCode = ["a0s1", "a0s2", "a0s3", "a1s1", "a1s2", "a2s1", "a3s1", "a4s1"];

      try {
        setLoadingSpinner(true);
        setInterval(() => setElapsedLoadingTime(prevElapsedLoadingTime => prevElapsedLoadingTime + incrementTime));
        storyCode.forEach(async (element) => {
          if (dataSet.code === element) {
            const response = await axios.get(`/achievement/showcase/${element}`);
            setDisplayAchievements(Object.entries(response.data));
            setLoadingSpinner(false);
            window.scrollTo({ top: 1000, left: 0, behavior: "smooth" });
          }
        });
      } catch (error) {
        console.log(error);
      }
    };

    getAchievements();
    return () => {
      setDisplayAchievements([]);
      setElapsedLoadingTime(undefined);
      setLoadingSpinner(false);
    }
  }, [dataSet, incrementTime, setDisplayAchievements, setElapsedLoadingTime, setLoadingSpinner]);

  const getArcTile = (index) => setDisplayArcTiles(index);

  const getStoryTile = (event) => setDataSet({ arc: event.currentTarget.dataset.arc, code: event.currentTarget.dataset.code });

  return (
    <>
      <ComponentContainer>
        <ListArcTiles displayArcTiles={displayArcTiles} getArcTile={getArcTile} />
        <ListStoryTiles displayStoryTiles={displayStoryTiles} getStoryTile={getStoryTile} />
      </ComponentContainer>
        <ListAchievements dataSet={dataSet} displayAchievements={displayAchievements} loadingSpinner={loadingSpinner} elapsedLoadingTime={elapsedLoadingTime} showSpinnerIfGreaterThanTime={showSpinnerIfGreaterThanTime} />
    </>
  );
};

export default AchievementsDisplay;