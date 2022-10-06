import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Navigation = styled.nav`
  display: flex;
  gap: 32px;
`;
const NavText = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  height: 23px;
  text-transform: uppercase;
  color: #ffffff;
  &:hover {
    color: #88bcd2;
    border-bottom: 1px solid #88bcd2;
  }
`;
const activeStyle = {
  height: "23px",
  borderBottom: "1px solid #fff",
};
export const MainHeaderNav = () => (
  <Navigation>
    <NavLink
      to="/"
      style={() => (window.location.pathname === "/" ? activeStyle : undefined)}
    >
      <NavText>home</NavText>
    </NavLink>
    <NavLink
      to="tours"
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
    >
      <NavText>tours</NavText>
    </NavLink>
    <NavLink
      to="about"
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
    >
      <NavText>about</NavText>
    </NavLink>
    <NavLink
      to="help"
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
    >
      <NavText>help</NavText>
    </NavLink>
  </Navigation>
);
