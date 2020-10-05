import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
// import { to_one_last_new_beginning_0101 } from "stories";
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

const Button = styled.button`
  padding: 2rem;
  margin: 2rem;
`;

const AchievementList = () => {
  const [achievementsData, setAchievementsData] = useState(undefined);
  const [achievements, setAchievements] = useState([undefined]);
  const [eventTarget, setEventTarget] = useState("a1s1");
  const buttonList = [
    { id: 1, code: "a1s1", title: "To One Last New Beginning", },
    { id: 2, code: "a1s2", title: "A City to Burn", },
  ];
  
  const storyCodes = ["a1s1", "a1s2"];
  
  useEffect(() => {
    const getAchievements = async () => {
      const id = localStorage.getItem("id");
      const achidata = achievementsMetaData;
      try {
        for (let i = 0; i < storyCodes.length; i++) {
          if (eventTarget === storyCodes[i]) {
            const response = await axios.get(`/users/achievements/${storyCodes[i]}`, { params: { _id: id }});
            setAchievements(Object.entries(response.data));
            setAchievementsData(achidata[i]);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAchievements();

    return () => {
      setAchievementsData(undefined);
    }
  }, [eventTarget]);
  
const handleClick = (event) => {
  setEventTarget(event.currentTarget.dataset.code);
}

  const renderButtons = buttonList.map((button) => {

    return (
    <Button key={button.id} data-code={button.code} onClick={handleClick}>{button.title}</Button>
    );
  });

  return (
    <ComponentLayout>
      {renderButtons}

       {eventTarget !== undefined ? 
      achievements.map((e) => {
        console.log(e);
        return (
          <div key={e?.[0]}>
            {e?.[1] ? <div>{e?.[0]}</div> : <div>{e?.[0]} just with different colours</div>}
          </div>
        );
      })
      : null}
    </ComponentLayout>
  );
};

export default AchievementList;