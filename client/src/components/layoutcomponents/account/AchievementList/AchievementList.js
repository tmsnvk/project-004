import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { to_one_last_new_beginning_0101 } from "stories";
import { achievementsMetaData } from "components/layoutcomponents/account";

const ComponentLayout = styled.div`
  width: 90%;
  margin: 5rem auto;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xSmall}) {
    font-size: ${props => props.theme.fontSize.medium};
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    width: 70%;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    width: 50%;
    margin: 10rem auto;
  }
`;

const AchievementList = () => {
  const [achievements, setAchievements] = useState([undefined]);

  const storyCode = ["aosone", "aostwo"];
  
  const getA1S1Achievements = async () => {
    const id = localStorage.getItem("id");
    try {
      const response = await axios.get("/users/achievements/aosone", { params: { _id: id }});
      setAchievements(Object.entries(response.data));

    } catch (error) {
      console.log(error);
    }



  
  };

  const getA1S2Achievements = async () => {
    const id = localStorage.getItem("id");
    
    try {
      const response = await axios.get("/users/achievements/aostwo", { params: { _id: id }});
      setAchievements(Object.entries(response.data));

    } catch (error) {
      console.log(error);
    }
  };

console.log(achievementsMetaData);
console.log(achievements);

  return (
    <ComponentLayout>
      <button onClick={getA1S1Achievements}>aaaaaaaaaaaa</button><br></br>
      <button onClick={getA1S2Achievements}>bbbbbbbbbbbbb</button>
      {achievements[0] !== undefined ? 
      achievementsMetaData.arcOne.storyOne.map((e) => {
        return (
          <>

        <div>{e.description}</div>        <div>{e.title}</div>
        </>
        );
      })
      : null} 
    </ComponentLayout>
  );
};

export default AchievementList;