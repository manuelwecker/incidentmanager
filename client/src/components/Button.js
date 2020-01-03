import React from "react";
import styled from "@emotion/styled";

const Button = styled.button`
  background-color: black;
`;

const ButtonTextOnly = styled(Button)``;

// const ButtonSvgOnly = styled(Button)``;

function ButtonText({ text }) {
  return <ButtonTextOnly>{text}</ButtonTextOnly>;
}

// function ButtonSvg({ svg }) {
//   return <ButtonSvgOnly>{svg}</ButtonSvgOnly>;
// }

export default ButtonText;
