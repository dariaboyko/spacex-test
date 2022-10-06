import styled from "styled-components";
const Button = styled.button`
  width: 278px;
  height: 53px;
  background: #d3eaff;
  font-family: "Syne";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-transform: uppercase;
  border: 0;
  cursor: pointer;
  user-select: none;
  &:active {
    transform: scale(0.98);
  }
`;
export const BuyButton = () => <Button>buy</Button>;
