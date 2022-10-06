import styled from "styled-components";
import HeartSVG from "../../assets/icons/heart";
const Button = styled.button`
  width: 53px;
  height: 53px;
  background: #ececec;
  border: 0;
  &:active {
    transform: scale(0.98);
  }
  cursor: pointer;
  user-select: none;
`;
export const FavoritesButton = () => (
  <Button>
    <HeartSVG />
  </Button>
);
