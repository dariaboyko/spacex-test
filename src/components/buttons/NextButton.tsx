import styled from "styled-components";
const Button = styled.button`
  width: 44px;
  height: 44px;
  background: #ececec;
  border: 0;
`;
export const NextButton = (props: { onClick: any }) => (
  <Button onClick={props.onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="16"
      viewBox="0 0 10 16"
      fill="none"
    >
      <path
        d="M1.5 1L8.5 8L1.5 15"
        stroke="#200E32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </Button>
);
