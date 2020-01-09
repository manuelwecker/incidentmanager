import React from "react";
import styled from "@emotion/styled";

const SvgButtonOnly = styled.button`
  min-width: 34px;
  min-height: 34px;
  background-color: white;
`;

function SvgButton({ svg, ...other }) {
  return <SvgButtonOnly {...other}>{svg}</SvgButtonOnly>;
}

export default SvgButton;
