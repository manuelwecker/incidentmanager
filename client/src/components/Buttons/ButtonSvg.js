import React from "react";
import styled from "@emotion/styled";

const ButtonSvgOnly = styled.button`
  min-width: 34px;
  min-height: 34px;
  background-color: white;
`;

function ButtonSvg({ svg, props }) {
  return <ButtonSvgOnly {...props}>{svg}</ButtonSvgOnly>;
}

export default ButtonSvg;
