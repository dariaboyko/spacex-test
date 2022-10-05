import styled from "styled-components";
import HeartSVG from "../../assets/icons/heart";
const Button = styled.button`
  width: 53px;
  height: 53px;
  background: #ececec;
  border: 0;
`;
export const FavoritesButton = () => (
  <Button>
    <HeartSVG />
  </Button>
);
