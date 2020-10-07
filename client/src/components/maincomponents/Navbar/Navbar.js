import React, { useContext } from "react";
import { UserContext } from "context/UserContext";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { IconYellow } from "components/commoncomponents/styled-icons";
import iconList from "utilities/iconList";

const ComponentContainer = styled.div`
  color: ${props => props.theme.fontColor.main};
  background-color: ${props => props.theme.backgroundColor.mainLight};
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 2.5rem 0 0;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    height: 7.5rem;
    flex-direction: row;
  }
`;

const NavbarLinks = styled(Link)`
  width: 5rem;
  font-size: ${props => props.theme.fontSize.small};
  padding: 0 0 0 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  letter-spacing: 0.2rem;
  text-decoration: none;
  cursor: pointer;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    width: auto;
    padding: 0 0 0 0.2rem;
    font-size: ${props => props.theme.fontSize.default};
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    width: auto;
    padding: 0 0 0 2.5rem;
    font-size: ${props => props.theme.fontSize.medium};
  }
`;

const ButtonContainer = styled.button`
  color: ${props => props.theme.fontColor.main};
  background-color: ${props => props.theme.backgroundColor.mainLight};
  font-size: ${props => props.theme.fontSize.small};
  width: auto;
  padding: 0 0 0 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  letter-spacing: 0.2rem;
  text-decoration: none;
  cursor: pointer;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    font-size: ${props => props.theme.fontSize.default};
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    padding: 0 0 0 2.5rem;
    font-size: ${props => props.theme.fontSize.medium};
  }
`;

const Navbar = () => {
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();

  const handleLogout = () => {
    setUserData({ token: undefined, user: undefined });
    localStorage.setItem("auth-token", "");
    localStorage.setItem("id", "");
    history.push("/page/home");
  };

  return (
    <ComponentContainer>
      {userData.token ?
      <>
        <NavbarLinks to="/page/home"><IconYellow icon={iconList.toriiGate}></IconYellow>Home</NavbarLinks>
        <NavbarLinks to="/page/adventures"><IconYellow icon={iconList.mapSigns}></IconYellow>Adventures</NavbarLinks>
        <NavbarLinks to="/page/profile"><IconYellow icon={iconList.chessRook}></IconYellow>Account</NavbarLinks>
        <NavbarLinks to="/page/about"><IconYellow icon={iconList.addressCard}></IconYellow>About</NavbarLinks>
        <ButtonContainer onClick={handleLogout}><IconYellow icon={iconList.signOut}></IconYellow>Sign out</ButtonContainer>
      </> :
      <>
        <NavbarLinks to="/page/home"><IconYellow icon={iconList.toriiGate}></IconYellow>Home</NavbarLinks>
        <NavbarLinks to="/page/register"><IconYellow icon={iconList.userTie}></IconYellow>Register</NavbarLinks>
        <NavbarLinks to="/page/about"><IconYellow icon={iconList.addressCard}></IconYellow>About</NavbarLinks>
      </>}
    </ComponentContainer>
  );
};

export default Navbar;