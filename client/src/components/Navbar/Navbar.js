import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ComponentContainer = styled.div`
  color: ${props => props.theme.fontColor.mainDark};
  background-color: ${props => props.theme.backgroundColor.mainDark};
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
  return (
    <ComponentContainer>
      <NavbarLinks to="/myprofile">Account</NavbarLinks>
    </ComponentContainer>
  );
};

export default Navbar;