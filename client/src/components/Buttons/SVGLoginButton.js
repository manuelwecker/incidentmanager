import React from "react";
import styled from "@emotion/styled";
import { Avatar } from "../../assets/Icons";

const SvgButton = styled.button`
  width: 34px;
  height: 34px;
  background-color: ${props => props.theme.colors.secondary};
  margin: 0px;
  padding: 0px;
  border-radius: 4px;
  border: none;
`;

function SVGLoginButton() {
  return (
    <SvgButton>
      <Avatar />
    </SvgButton>
  );
}

export default SVGLoginButton;
