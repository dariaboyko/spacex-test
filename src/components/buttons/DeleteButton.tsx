import styled from "styled-components";
import BinSVG from "../../assets/icons/delete";
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
export function DeleteButton() {
  return (
    <Button>
      <BinSVG />
    </Button>
  );
}
