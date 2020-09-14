import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "context/UserContext";
import styled from "styled-components";
import { UserLogout } from "components/maincomponents";

const ComponentContainer = styled.div`
  color: ${props => props.theme.fontColor.mainDark};
  background-color: ${props => props.theme.backgroundColor.mainLight};
  font-size: ${props => props.theme.fontSize.large};
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const NavbarLinks = styled(Link)`
  font-size: ${props => props.theme.fontSize.small};
  letter-spacing: 0.2rem;
  text-decoration: none;
  cursor: pointer;
  padding: 1rem 1rem 1rem 1rem;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    font-size: ${props => props.theme.fontSize.medium};
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    font-size: ${props => props.theme.fontSize.large};
  }
`;

const Navbar = () => {
  const { userData, setUserData } = useContext(UserContext);

  return (
    <ComponentContainer>
      <NavbarLinks to="/useraccount">Account</NavbarLinks>
      {userData.user ? <UserLogout /> : undefined}
    </ComponentContainer>
  );
};

export default Navbar;