import styled from "styled-components";
import AstronautIMG from "../../assets/images/gallery/astronaut.jpg";

type Props = {
  children: JSX.Element;
};
const Content = styled.section`
  background: url(${AstronautIMG});
  height: 440px;
`;
const Title = styled.h1`
  height: 100%;
  font-family: "Syne";
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: #ffffff;
  background-color: rgba(30, 30, 30, 0.64);
  padding: 80px 0 0 0;
`;

export function FavoritesHero({ children }: Props) {
  return (
    <Content>
      {children}
      <Title>
        <span>favourites</span>
      </Title>
    </Content>
  );
}
