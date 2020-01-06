import React from "react";
import styled from "@emotion/styled";

const ButtonSvgOnly = styled.button`
  width: 160px;
  height: 160px;
  background-color: white;
`;

function ButtonSvg({ svg, props }) {
  return <ButtonSvgOnly {...props}>{svg}</ButtonSvgOnly>;
}

export default ButtonSvg;
