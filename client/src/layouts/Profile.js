import React from "react";
// import { useHistory } from "react-router-dom";
import styled from "styled-components";

const ContainerLayout = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-column-gap: 2.5em;
  grid-row-gap: 2.5rem;  
  font-size: ${props => props.theme.fontSize.small};
  text-align: center;
  width: 85%;
  margin: 10rem auto;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xSmall}) {
    font-size: ${props => props.theme.fontSize.medium};
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    width: 70%;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    width: 50%;
  }
`;


// const id = localStorage.getItem("id");

// const res = await axios.get("/users/achievement", {params: { _id: id }}, (req, res) => {
// })
// console.log(res.data);

// const response = await axios.get("/users/achievements/aoso", {params: { _id: id }});
          // if (response.data.keepPunching) return;
          // console.log(response.data);

const Profile = () => {

  return (
    <ContainerLayout>
      <div>USER PROFILE</div>
    </ContainerLayout>
  );
};

export default Profile;