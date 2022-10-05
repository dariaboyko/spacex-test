import styled from "styled-components";
const Button = styled.button`
  width: 163px;
  height: 53px;
  background: #d3eaff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 0;
  text-align: center;
  text-transform: uppercase;
  font-family: "Syne";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
`;
export const SignInButton = () => <Button>sign in</Button>;
