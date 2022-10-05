import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Navigation = styled.nav`
  display: flex;
  gap: 32px;
`;
const NavText = styled.span`
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  color: #ffffff;
`;
const activeStyle = {
  borderBottom: "1px solid #fff",
  height: "23px",
};
export const MainHeaderNav = () => (
  <Navigation>
    <NavLink
      to=""
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
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
