import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  box-shadow: var(--box_shadow);
  position: sticky;
  top: 0;
  z-index: 900;
  background-color: var(--primary_color);
`;

export const NavContainer = styled.div`
  margin: 0px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavResponsive = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavA = styled(NavLink)`
  color: var(--text_color);
  position: relative;
  margin: 0px 20px;

  &:hover {
    color: var(--secondary_color);
  }

  &:after {
    content: "";
    position: absolute;
    width: 0%;
    height: 4px;
    left: 50%;
    top: calc(100% + 4px);
    background-color: var(--secondary_color);
    opacity: 0;
    transition: 0.3s ease-in-out;
  }

  &:hover::after {
    opacity: 1;
    width: 100%;
    left: 0%;
  }

  &[aria-current] {
    color: black;
    box-shadow: inset 0 -4px 0 0 var(--secondary_color);
    padding: 10px 0px;
    font-size: 14px;
  }
`;

export const NavSocial = styled.a`
  margin: 0 5px;

  &:hover {
    transform: scale(1.2);
  }
`;
