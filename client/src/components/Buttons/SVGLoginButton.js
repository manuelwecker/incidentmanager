import React from "react";
import styled from "@emotion/styled";
import { Avatar } from "../../assets/Icons";

const SvgWrapper = styled.div`
  width: 34px;
  height: 34px;
  background-color: ${props => props.theme.colors.secondary};
  margin: 0px;
  padding: 0px;
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function SVGLoginButton() {
  return (
    <SvgWrapper>
      <Avatar />
    </SvgWrapper>
  );
}

export default SVGLoginButton;
