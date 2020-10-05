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
  const [achievements, setAchievements] = useState([undefined]);
  const [eventTarget, setEventTarget] = useState(undefined);
  const buttonList = [
    { id: 1, code: "a1s1", title: "To One Last New Beginning", },
    { id: 2, code: "a1s2", title: "A City to Burn", },
  ];
  console.log(achievements[0]?.[1].state);
  const storyCodes = ["a1s1", "a1s2"];
  
  useEffect(() => {
    const getAchievements = async () => {
      const id = localStorage.getItem("id");
      try {
        for (let i = 0; i < storyCodes.length; i++) {
          if (eventTarget === storyCodes[i]) {
            const response = await axios.get(`/users/achievements/${storyCodes[i]}`, { params: { _id: id }});
            setAchievements(Object.entries(response.data));
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAchievements();
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
        return (
          <div key={e?.[1].id + 1}>
            {e?.[1].state ?
            <div>
              <div>{e?.[1].name}</div>
              <div>{e?.[1].description}</div>
            </div> : 
            <div>
              <div>{e?.[1].name}</div>
              <div>{e?.[1].description}</div>
            </div>}
          </div>
        );
      }) : null}
    </ComponentLayout>
  );
};

export default AchievementList;