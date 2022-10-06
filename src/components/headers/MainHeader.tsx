import { Logo } from "../../assets/icons/logo";
import { SignInButton } from "../buttons/SignInButton";
import { MainHeaderNav } from "../navigations/MainHeaderNav";
import { FavoritesButton } from "../buttons/FavoritesButton";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Header = styled.header`
  background-color: rgba(30, 30, 30, 0.48);
  height: 80px;
  position: absolute;
  width: 100%;
`;
const HeaderContainer = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;
const ButtonsContainer = styled.div`
  gap: 12px;
  display: flex;
`;
export const MainHeader = () => (
  <Header>
    <HeaderContainer>
      <NavLink to="/">
        <Logo width={230} />
      </NavLink>
      <MainHeaderNav />
      <ButtonsContainer>
        <NavLink to="/favorites">
          <FavoritesButton />
        </NavLink>
        <SignInButton />
      </ButtonsContainer>
    </HeaderContainer>
  </Header>
);
