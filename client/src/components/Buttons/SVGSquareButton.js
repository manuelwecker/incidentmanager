import React from "react";
import styled from "@emotion/styled";
import { Avatar } from "../../assets/Icons";

const SvgWrapper = styled.div`
  width: 34px;
  height: 34px;
  background-color: none;
  background-color: ${props => props.theme.colors.primary};
  margin: 4px;
  padding: 0px;
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function SVGSquareButton({ children }) {
  return <SvgWrapper>{children}</SvgWrapper>;
}

export default SVGSquareButton;
