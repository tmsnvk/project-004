import React, { useContext } from "react";
import { UserContext } from "context/UserContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IconLight } from "components/commoncomponents/styled-icons";
import { iconList } from "utilities";

const ComponentContainer = styled.nav`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 15rem;
  background-color: ${({ theme }) => theme.secondaryLight};
  color: ${({ theme }) => theme.main};
  padding: 0 2.5rem 0 0;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.small}) {
    align-items: center;
    flex-direction: row;
    padding: 0 2.5rem 0 2.5rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    height: 7.5rem;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    padding: 0 2.5rem 0 0;
  }
`;

const NavbarLinks = styled(Link)`
  align-self: flex-start;
  width: auto;
  font-size: ${({ theme }) => theme.fontSize.default};
  margin: auto 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  letter-spacing: 0.2rem;
  text-decoration: none;
  cursor: pointer;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.small}) {
    width: auto;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    align-self: center;
    width: auto;
    margin: 0 0 0 1rem;
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

const Navbar = () => {
  const { userData, setUserData, setUserColorTheme } = useContext(UserContext);

  const handleLogout = () => {
    setUserData({ user: undefined, id: undefined });
    setUserColorTheme("darkYellow");
  };

  return (
    <ComponentContainer>
      {userData.user ?
      <>
        <NavbarLinks to="/page/home"><IconLight icon={iconList.toriiGate}></IconLight>Home</NavbarLinks>
        <NavbarLinks to="/page/adventures"><IconLight icon={iconList.mapSigns}></IconLight>Adventures</NavbarLinks>
        <NavbarLinks to="/page/achievements"><IconLight icon={iconList.chessRook}></IconLight>Achievements</NavbarLinks>
        <NavbarLinks to="/page/settings"><IconLight icon={iconList.wrench}></IconLight>Settings</NavbarLinks>
        <NavbarLinks to="/page/about"><IconLight icon={iconList.addressCard}></IconLight>About</NavbarLinks>
        <NavbarLinks to="/page/home" onClick={handleLogout}><IconLight icon={iconList.signOut}></IconLight>Sign out</NavbarLinks>
      </> :
      <>
        <NavbarLinks to="/page/home"><IconLight icon={iconList.toriiGate}></IconLight>Home</NavbarLinks>
        <NavbarLinks to="/page/register"><IconLight icon={iconList.userTie}></IconLight>Register</NavbarLinks>
        <NavbarLinks to="/page/about"><IconLight icon={iconList.addressCard}></IconLight>About</NavbarLinks>
      </>}
    </ComponentContainer>
  );
};

export default Navbar;