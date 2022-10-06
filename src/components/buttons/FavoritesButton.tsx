import styled from "styled-components";
import HeartSVG from "../../assets/icons/heart";
interface Props {
  color: string;
}
const Button = styled.button<Props>`
  width: 53px;
  height: 53px;
  background: ${(props) => (props.color === "pink" ? "#DD377D " : "#ececec")};
  border: 0;
  &:active {
    transform: scale(0.98);
  }
  cursor: pointer;
  user-select: none;
`;
export function FavoritesButton(props: {
  favoriteButtonColor: string;
  onClick: any;
}) {
  return (
    <Button
      color={props.favoriteButtonColor}
      onClick={typeof props.onClick === "function" ? props.onClick : () => {}}
    >
      <HeartSVG fill={props.favoriteButtonColor === "pink" ? "#fff" : ""} />
    </Button>
  );
}
