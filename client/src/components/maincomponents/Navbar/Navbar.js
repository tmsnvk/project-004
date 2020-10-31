import React, { useContext } from "react";
import { UserContext } from "context/UserContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IconYellow } from "components/commoncomponents/styled-icons";
import iconList from "utilities/iconList";

const ComponentContainer = styled.div`
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

const Hitme = styled.button`

`;

const Navbar = () => {
  const { userData, setUserData } = useContext(UserContext);

  const handleLogout = () => {
    setUserData({ token: undefined, user: undefined, id: undefined });
    localStorage.setItem("auth-token", "");
    localStorage.setItem("auth-name", "");
    localStorage.setItem("auth-id", "");
  };

  return (
    <ComponentContainer>
      {userData.token ?
      <>
        <NavbarLinks to="/page/home"><IconYellow icon={iconList.toriiGate}></IconYellow>Home</NavbarLinks>
        <NavbarLinks to="/page/adventures"><IconYellow icon={iconList.mapSigns}></IconYellow>Adventures</NavbarLinks>
        <NavbarLinks to="/page/achievements"><IconYellow icon={iconList.chessRook}></IconYellow>Achievements</NavbarLinks>
        <NavbarLinks to="/page/settings"><IconYellow icon={iconList.wrench}></IconYellow>Settings</NavbarLinks>
        <NavbarLinks to="/page/about"><IconYellow icon={iconList.addressCard}></IconYellow>About</NavbarLinks>
        <NavbarLinks to="/page/home" onClick={handleLogout}><IconYellow icon={iconList.signOut}></IconYellow>Sign out</NavbarLinks>
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