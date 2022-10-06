import { useRecoilState } from "recoil";
import { favouritesState } from "../store";
import { FavoriteProductCard } from "../cards/FavoriteProductCard";
import styled from "styled-components";
const ClearAll = styled.button`
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  border: 0;
  background-color: transparent;
  color: #556b84;
  position: absolute;
  right: 0;
  top: 65px;
`;
const Content = styled.section`
  position: relative;
  padding: 133px 0 0 0;
  max-width: 1280px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0 auto;
`;

export function FavouritesContent() {
  const [favoriteList, setFavoriteList] = useRecoilState(favouritesState);
  return (
    <Content>
      <ClearAll onClick={() => setFavoriteList([])}>Clear All</ClearAll>
      {favoriteList.map(
        (item) =>
          item && (
            <FavoriteProductCard
              title={item.mission_name}
              description={item.details.slice(0, 55)}
              imgURL={item.links.flickr_images[0]}
              key={Math.random()}
            />
          )
      )}
    </Content>
  );
}
